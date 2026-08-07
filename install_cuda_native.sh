#!/usr/bin/env bash
# Native CUDA setup for PufferLib (no Docker), Ubuntu 24.04 + NVIDIA GPU.
# Installs the CUDA 13 toolkit, NCCL, and cuDNN — the three things the
# PufferTank Docker base image bundles that a standard toolkit install lacks.
# This was tested on Ubuntu 24.04 + NVIDIA GeForce RTX 4090.
#
# Usage:  bash install_cuda_native.sh
# Run from your PufferLib checkout with your venv already activated.

set -euo pipefail

CUDA_VER="13.0"
UBUNTU_REPO="ubuntu2404"   # change to ubuntu2204 for 22.04

echo "==> Checking for nvidia-smi"
if ! command -v nvidia-smi >/dev/null 2>&1; then
  echo "ERROR: nvidia-smi not found. Install your NVIDIA driver first." >&2
  exit 1
fi
nvidia-smi | head -n 4
echo "    Confirm the 'CUDA Version' above is >= ${CUDA_VER} before continuing."

echo "==> Adding NVIDIA CUDA apt repo"
KEYRING_DEB="cuda-keyring_1.1-1_all.deb"
wget -q "https://developer.download.nvidia.com/compute/cuda/repos/${UBUNTU_REPO}/x86_64/${KEYRING_DEB}"
sudo dpkg -i "${KEYRING_DEB}"
rm -f "${KEYRING_DEB}"
sudo apt-get update

echo "==> Installing CUDA toolkit, NCCL, and cuDNN"
sudo apt-get install -y \
  "cuda-toolkit-${CUDA_VER/./-}" \
  libnccl2 libnccl-dev \
  "cudnn9-cuda-${CUDA_VER%%.*}"

echo "==> Configuring PATH/CUDA_HOME in ~/.bashrc"
CUDA_PATH_LINE="export PATH=/usr/local/cuda-${CUDA_VER}/bin:\$PATH"
CUDA_HOME_LINE="export CUDA_HOME=/usr/local/cuda-${CUDA_VER}"
grep -qxF "${CUDA_PATH_LINE}" ~/.bashrc || echo "${CUDA_PATH_LINE}" >> ~/.bashrc
grep -qxF "${CUDA_HOME_LINE}" ~/.bashrc || echo "${CUDA_HOME_LINE}" >> ~/.bashrc

# Apply to the current shell too (don't source ~/.bashrc; it may deactivate the venv).
export PATH="/usr/local/cuda-${CUDA_VER}/bin:$PATH"
export CUDA_HOME="/usr/local/cuda-${CUDA_VER}"

echo "==> nvcc version:"
nvcc --version | grep release || true

echo "==> Installing PyTorch for CUDA ${CUDA_VER}"
CU_TAG="cu${CUDA_VER//./}"
uv pip install torch --index-url "https://download.pytorch.org/whl/${CU_TAG}"

echo "==> Verifying torch sees the GPU:"
python -c "import torch; print('torch', torch.__version__, 'cuda', torch.version.cuda, 'available', torch.cuda.is_available())"

echo
echo "Done. Now build and train:"
echo "    bash build.sh breakout"
echo "    puffer train breakout"