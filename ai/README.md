# VoxShield AI/ML

## Current Environment
- Python version: 3.11.4
- CPU: 12 logical cores
- RAM: Unknown (psutil unavailable)
- GPU: Not found
- VRAM: N/A
- NVIDIA driver: Not available
- CUDA: Not available
- PyTorch: Not installed
- torchaudio: Not installed
- librosa: Not installed
- other relevant packages: numpy, scipy, scikit-learn, matplotlib, soundfile (Not installed)

## Planned Anti-Spoofing Architecture

The initial VoxShield baseline is:

Audio
→ Audio preprocessing
→ Mel Spectrogram
→ CNN Anti-Spoof Classifier
→ Genuine / Spoof classification
→ Confidence score

The baseline model should be a CNN-based audio anti-spoofing classifier implemented with PyTorch.

The project may later evaluate a temporal architecture such as CNN + LSTM/GRU if the baseline is insufficient.

Do NOT claim that this detects every possible future AI-generated voice.

## Intended Real-Time Pipeline

Protected call audio
→ 2–4 second audio chunks
→ preprocessing
→ model inference
→ spoof probability
→ aggregated result
→ risk/decision layer

The 2–4 second chunk architecture comes from the VoxShield project specification.

## Privacy Principle

Core anti-spoofing does NOT require every user to register their voice.

Do not create a database of everyone's voice.

Training should use appropriately sourced and labelled anti-spoofing datasets rather than secretly collecting users' conversations.

Raw voice/audio should not be stored unnecessarily.

Blockchain is NOT the voice detector and should not contain raw voice/audio or biometric data.
