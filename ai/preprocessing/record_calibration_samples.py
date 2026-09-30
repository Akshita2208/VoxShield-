import sounddevice as sd
import soundfile as sf
from pathlib import Path

SAMPLE_RATE = 16_000
CHANNELS = 1
DURATION = 8
DEVICE = 1

OUTPUT_DIR = (
    Path(__file__).resolve().parents[1]
    / "datasets"
    / "realworld_calibration"
    / "human"
)


def record_sample(filename: str, sentence_number: int):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    output_path = OUTPUT_DIR / filename

    print("\n" + "=" * 60)
    print(f"Recording: {filename}")
    print(f"Sentence {sentence_number}")
    print(f"Duration: {DURATION} seconds")
    print("=" * 60)

    input("Press ENTER when ready...")

    print("\n🎤 Recording started...")

    audio = sd.rec(
        int(DURATION * SAMPLE_RATE),
        samplerate=SAMPLE_RATE,
        channels=CHANNELS,
        dtype="float32",
        device=DEVICE,
    )

    sd.wait()

    sf.write(str(output_path), audio, SAMPLE_RATE)

    print("✅ Recording finished.")
    print(f"Saved to: {output_path}")


def main():
    print("=" * 60)
    print("VOXSHIELD - HUMAN CALIBRATION SAMPLE 003")
    print("=" * 60)

    print(f"Device: {DEVICE}")
    print(f"Sample rate: {SAMPLE_RATE}")
    print(f"Duration: {DURATION} seconds")

    for i in range(1, 4):
        filename = f"human_003_{i:02d}.wav"

        print(f"\nPrepare a DIFFERENT natural sentence for sample {i}.")

        record_sample(filename, i)

    print("\n" + "=" * 60)
    print("HUMAN_003 RECORDING COMPLETE")
    print("=" * 60)

    print(f"\nFiles saved in:")
    print(OUTPUT_DIR)


if __name__ == "__main__":
    main()