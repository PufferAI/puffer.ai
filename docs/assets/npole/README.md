# Ten pendulum demo

Live swing-up and balance of ten passive serial pendulums using one delayed
cart force. The demo executes its controller and coupled dynamics in WASM.
It uses a frozen JEPA encoder to recover state, then classical trajectory
tracking and LQR. The JEPA predictor does not choose the actions.

The PufferLib implementation is at
[`1da97aaa352d7ccdf0abe7149cbc47d7a9028d29`](https://github.com/marctheshark3/PufferLib/tree/1da97aaa352d7ccdf0abe7149cbc47d7a9028d29/ocean/npole).
The sources match the pre-evaluation hashes in [validation.json](validation.json).
Build from the PufferLib checkout with Emscripten active:

```bash
PUFFER_WEBSITE_DIR=../puffer.ai ./build.sh npole --web
```

The build uses Emscripten 3.1.64, LLVM 19.1.1, Binaryen 118 and Raylib 5.5.
The frozen bundle and provenance manifest are
[npole_controller.bin](../models/npole_controller.bin) and
[npole_controller.json](../models/npole_controller.json). `game.data` preloads
that same bundle; no Python, MuJoCo or training process runs in the browser.

## Validation

Each engine passes all 32 reserved starts, seeds `2026101600–2026101631`:

| Engine | Result | Receipt |
| --- | --- | --- |
| Native C RK4 | 32/32 | [C and MuJoCo](evidence/c-mujoco32.json) |
| Independent MuJoCo | 32/32 | [C and MuJoCo](evidence/c-mujoco32.json) |
| Browser WASM RK4 | 32/32 | [Browser](evidence/wasm32.json) |
| LAN x86_64 CPU repetition | 32/32 | [Audit](evidence/recording-audit.json) |

All trials use 50 Hz commands, a real 20 ms queue, a ±10 N cap, 1000 Hz
physics and a 20-second horizon. Every one of the 251 boundary states in the
final five seconds must satisfy every link's angle and speed limit. The audit
checks every recorded state, command and actuator queue. Native and WASM resets
and the independent MuJoCo starts are identical. All 96 primary recordings and
32 LAN repetitions were retained and audited.

The public sample recordings below contain the complete seed `2026101600`
trial for each primary engine. The receipts list all outcomes and primary raw
recording hashes. The remaining raw cohorts stay with the submitter; the two
validators in PufferLib regenerate full cohorts and save every outcome.

- [Native C recording](evidence/c_rk4-2026101600.npz)
- [Independent MuJoCo recording](evidence/mujoco-2026101600.npz)
- [Browser recording](evidence/wasm-2026101600.json.gz)

[Controller arithmetic parity](evidence/controller-parity.json),
[control and viewport checks](evidence/ui-checks.json), and
[live pacing measurement](evidence/realtime.json) are separate from the final
cohort. The live development trial ran 20 simulated seconds in 20.02 wall
seconds on headless Chromium with SwiftShader. Loading was measured on a local
HTTP server. Pause, reset, manual force, gallery embedding and a 390-pixel
viewport passed with no page errors.

The LAN `sm_86` environment API compilation passed. GPU trainer runtime is
unverified because the loaded kernel driver and NVML library have different
versions. This demo bundle is a frozen hybrid controller; it is not a
Puffer-trained checkpoint.

The analytic mass matrix includes `1e-6 I`; MuJoCo uses tiny tip rotational
inertias with a slightly different cart inertia. Tests disclose the resulting
acceleration tolerance. The offline trajectory optimizer timed out; its saved
iterate passed separate dynamics and endpoint feasibility, while objective
optimality remains unverified.

MIT, Copyright (c) 2026 Marc / Rage Industries. See [LICENSE](LICENSE) and
the compiled dependency notices in [licenses](licenses/).
