import sys, os, platform, subprocess, shutil
import psutil

out_lines = []

out_lines.append(f"PYTHON_VERSION: {sys.version.split(' ')[0]}")
out_lines.append(f"PYTHON_EXECUTABLE: {sys.executable}")

try:
    import torch
    out_lines.append(f"TORCH_VERSION: {torch.__version__}")
    out_lines.append(f"CUDA_AVAILABLE: {torch.cuda.is_available()}")
    if torch.cuda.is_available():
        out_lines.append(f"CUDA_VERSION: {torch.version.cuda}")
        out_lines.append(f"GPU_NAME: {torch.cuda.get_device_name(0)}")
except ImportError:
    out_lines.append("TORCH_VERSION: Not installed")

try:
    import torchaudio
    out_lines.append(f"TORCHAUDIO_VERSION: {torchaudio.__version__}")
except ImportError:
    out_lines.append("TORCHAUDIO_VERSION: Not installed")

try:
    import torchvision
    out_lines.append(f"TORCHVISION_VERSION: {torchvision.__version__}")
except ImportError:
    out_lines.append("TORCHVISION_VERSION: Not installed")

try:
    import librosa
    out_lines.append(f"LIBROSA_VERSION: {librosa.__version__}")
except ImportError:
    out_lines.append("LIBROSA_VERSION: Not installed")

try:
    import numpy
    out_lines.append(f"NUMPY_VERSION: {numpy.__version__}")
except ImportError:
    out_lines.append("NUMPY_VERSION: Not installed")

try:
    import scipy
    out_lines.append(f"SCIPY_VERSION: {scipy.__version__}")
except ImportError:
    out_lines.append("SCIPY_VERSION: Not installed")

try:
    import sklearn
    out_lines.append(f"SCIKIT_LEARN_VERSION: {sklearn.__version__}")
except ImportError:
    out_lines.append("SCIKIT_LEARN_VERSION: Not installed")

try:
    import matplotlib
    out_lines.append(f"MATPLOTLIB_VERSION: {matplotlib.__version__}")
except ImportError:
    out_lines.append("MATPLOTLIB_VERSION: Not installed")

try:
    import soundfile
    out_lines.append(f"SOUNDFILE_VERSION: {soundfile.__version__}")
except ImportError:
    out_lines.append("SOUNDFILE_VERSION: Not installed")

out_lines.append(f"CPU_CORES_PHYSICAL: {psutil.cpu_count(logical=False)}")
out_lines.append(f"CPU_CORES_LOGICAL: {psutil.cpu_count(logical=True)}")
out_lines.append(f"TOTAL_RAM_GB: {round(psutil.virtual_memory().total / (1024.**3), 2)}")
out_lines.append(f"AVAILABLE_RAM_GB: {round(psutil.virtual_memory().available / (1024.**3), 2)}")

disk = psutil.disk_usage(os.getcwd())
out_lines.append(f"DISK_TOTAL_GB: {round(disk.total / (1024.**3), 2)}")
out_lines.append(f"DISK_FREE_GB: {round(disk.free / (1024.**3), 2)}")

try:
    smi = subprocess.check_output(['nvidia-smi', '--query-gpu=name,memory.total,driver_version', '--format=csv,noheader'], text=True).strip()
    out_lines.append(f"NVIDIA_SMI: {smi}")
except Exception:
    out_lines.append("NVIDIA_SMI: Not available")

with open('env_output_utf8.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out_lines))
