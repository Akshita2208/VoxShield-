import os
import subprocess
import sys
import platform
import psutil
import shutil

project_path = r"c:\Users\anurag\OneDrive\Desktop\VoxShield"
ai_path = os.path.join(project_path, "ai")

dirs = ["datasets", "preprocessing", "models", "training", "evaluation", "inference", "checkpoints"]
for d in dirs:
    os.makedirs(os.path.join(ai_path, d), exist_ok=True)

venv_path = os.path.join(ai_path, "venv")
if not os.path.exists(venv_path):
    subprocess.run([sys.executable, "-m", "venv", venv_path])

with open(os.path.join(project_path, "inspect_output.txt"), "w", encoding="utf-8") as f:
    f.write("=== PYTHON INSPECTION ===\n")
    f.write(f"Python Executable: {sys.executable}\n")
    f.write(f"Python Version: {sys.version}\n")
    
    f.write("\n=== HARDWARE INSPECTION ===\n")
    f.write(f"CPU Model: {platform.processor()}\n")
    f.write(f"CPU Cores (Logical): {psutil.cpu_count(logical=True)}\n")
    
    mem = psutil.virtual_memory()
    f.write(f"Total RAM: {mem.total / (1024**3):.2f} GB\n")
    f.write(f"Available RAM: {mem.available / (1024**3):.2f} GB\n")
    
    try:
        smi = subprocess.check_output(["nvidia-smi"], stderr=subprocess.STDOUT).decode()
        f.write("NVIDIA GPU: Yes\n")
        f.write("nvidia-smi output:\n" + "\n".join(smi.split('\n')[:10]) + "\n")
    except Exception as e:
        f.write(f"NVIDIA GPU: Not found or failed ({e})\n")
        
    total, used, free = shutil.disk_usage(project_path)
    f.write(f"\nTotal Disk Space: {total / (1024**3):.2f} GB\n")
    f.write(f"Free Disk Space: {free / (1024**3):.2f} GB\n")
    
    f.write("\n=== ML PACKAGES ===\n")
    packages = ["torch", "torchaudio", "torchvision", "librosa", "numpy", "scipy", "sklearn", "matplotlib", "soundfile"]
    import importlib
    for pkg in packages:
        try:
            mod = importlib.import_module(pkg)
            f.write(f"{pkg}: Installed\n")
        except:
            f.write(f"{pkg}: Not installed\n")
            
    try:
        import torch
        f.write(f"Torch Version: {torch.__version__}\n")
        has_cuda = torch.cuda.is_available()
        f.write(f"CUDA Available: {has_cuda}\n")
        if has_cuda:
            f.write(f"CUDA Version: {torch.version.cuda}\n")
            f.write(f"GPU Name: {torch.cuda.get_device_name(0)}\n")
    except:
        f.write("Torch detailed check failed.\n")
