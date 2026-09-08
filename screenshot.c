// Ocean demo thumbnail. No policy. Compile from the puffer repo cwd:
//
//   ENV=cartpole
//   clang -O2 -mavx2 -mfma -DPLATFORM_DESKTOP \
//     -DENV_HEADER=\"ocean/$ENV/$ENV.h\" -DPUFFER_ENV_NAME=\"$ENV\" \
//     -I. -Isrc -Iocean/$ENV -Ivendor \
//     -Iraylib-5.5_linux_amd64/include \
//     ../docker/puffer.ai/screenshot.c \
//     raylib-5.5_linux_amd64/lib/libraylib.a -lGL -lm -lpthread \
//     -o /tmp/puf_shot
//   /tmp/puf_shot ../docker/puffer.ai/docs/assets/${ENV}_thumbnail.png
//
// Optional 2nd arg: warmup steps (default 8). Actions stay 0.

#ifndef ENV_HEADER
#error "ENV_HEADER required"
#endif
#ifndef PUFFER_ENV_NAME
#error "PUFFER_ENV_NAME required"
#endif

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <unistd.h>

#include ENV_HEADER

int main(int argc, char** argv) {
    const char* out = argc > 1 ? argv[1] : PUFFER_ENV_NAME "_thumbnail.png";
    int steps = argc > 2 ? atoi(argv[2]) : 8;

    Ini ini = {0};
    puf_ini_load_env(&ini, PUFFER_ENV_NAME, 0, NULL);

    SetConfigFlags(FLAG_MSAA_4X_HINT);

    Env env = {0};
    puf_init(&env, puf_ini_section(&ini, "env", 0));

    obs_t* observations = calloc((size_t)env.num_agents * OBS_SIZE, sizeof(obs_t));
    float* actions = calloc((size_t)env.num_agents * NUM_ATNS, sizeof(float));
    float* rewards = calloc((size_t)env.num_agents, sizeof(float));
    float* terminals = calloc((size_t)env.num_agents, sizeof(float));
    for (int i = 0; i < env.num_agents; i++) {
        env.agents[i].observations = observations + i * OBS_SIZE;
        env.agents[i].actions = actions + i * NUM_ATNS;
        env.agents[i].rewards = rewards + i;
        env.agents[i].terminals = terminals + i;
    }
    puf_reset(&env);

    for (int s = 0; s < steps; s++) {
        puf_step(&env);
    }
    puf_render(&env);

    const char* base = strrchr(out, '/');
    base = base ? base + 1 : out;
    TakeScreenshot(base);
    if (strcmp(base, out) != 0) {
        char dir[1024];
        snprintf(dir, sizeof(dir), "%s", out);
        for (char* p = dir + 1; *p; p++) {
            if (*p == '/') {
                *p = 0;
                mkdir(dir, 0755);
                *p = '/';
            }
        }
        rename(base, out);
    }
    printf("screenshot: %s %dx%d\n", out, GetScreenWidth(), GetScreenHeight());
    puf_close(&env);
    return 0;
}
