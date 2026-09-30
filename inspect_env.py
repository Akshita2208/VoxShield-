import sys
import os
import subprocess
import shutil
import platform
import psutil

print("=== PYTHON INSPECTION ===")
print("Python Executable:", sys.executable)
print("Python Version:", sys.version)
try:
    print("pip version:", subprocess.check_output([sys.executable, "-m", "pip", "--version"]).decode().strip())
except Exception as e:
    print("pip version: error", e)

print("\n=== HARDWARE INSPECTION ===")
print("CPU Model:", platform.processor())
print("CPU Cores (Logical):", psutil.cpu_count(logical=True))
print("CPU Cores (Physical):", psutil.cpu_count(logical=False))

mem = psutil.virtual_memory()
print(f"Total RAM: {mem.total / (1024**3):.2f} GB")
print(f"Available RAM: {mem.available / (1024**3):.2f} GB")

print("\nGPU Info:")
try:
    smi = subprocess.check_output(["nvidia-smi"], stderr=subprocess.STDOUT).decode()
    print("nvidia-smi is available.")
    # just print first few lines of smi
    print('\n'.join(smi.split('\n')[:10]))
except Exception as e:
    print("nvidia-smi not available or failed:", e)

print("\n=== DISK SPACE ===")
project_path = r"c:\Users\anurag\OneDrive\Desktop\VoxShield"
total, used, free = shutil.disk_usage(project_path)
print(f"Total Disk Space: {total / (1024**3):.2f} GB")
print(f"Free Disk Space: {free / (1024**3):.2f} GB")

def get_dir_size(path):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(path):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            if not os.path.islink(fp):
                total_size += os.path.getsize(fp)
    return total_size

try:
    size = get_dir_size(project_path)
    print(f"Approx Project Size: {size / (1024**2):.2f} MB")
except Exception as e:
    print("Failed to get project size:", e)

print("\n=== ML PACKAGES INSPECTION ===")
packages = ["torch", "torchaudio", "torchvision", "librosa", "numpy", "scipy", "sklearn", "matplotlib", "soundfile"]
import importlib

for pkg in packages:
    try:
        module = importlib.import_module(pkg)
        version = getattr(module, "__version__", "unknown")
        print(f"{pkg}: Installed (version {version})")
    except ImportError:
        print(f"{pkg}: Not installed")

print("\nTesting torch specifically:")
try:
    import torch
    print("Torch Version:", torch.__version__)
    has_cuda = torch.cuda.is_available()
    print("CUDA Available:", has_cuda)
    if has_cuda:
        print("CUDA Version:", torch.version.cuda)
        print("GPU Device Name:", torch.cuda.get_device_name(0))
except ImportError:
    print("Torch not installed.")
