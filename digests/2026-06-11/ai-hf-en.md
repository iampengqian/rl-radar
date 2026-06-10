# Hugging Face Trending Models Digest 2026-06-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-10 22:33 UTC

---

Here is the Hugging Face Trending Models Digest for June 11, 2026.

### 1. Today's Highlights
Google’s highly anticipated Gemma 4 family has officially dominated this week's leaderboard, accompanied by a massive wave of community quantizations and uncensored fine-tunes. DeepSeek continues its reign in the open-weight arena with DeepSeek-V4-Pro leading the charts in both overall likes and downloads, while NVIDIA drops several heavyweight releases spanning massive MoE architectures to specialized streaming ASR. The generative AI space is heating up with new image, video, and real-time audio models, highlighted by Ideogram 4 and ByteDance's Bernini-R. Finally, Mixture-of-Experts (MoE) architectures have become the definitive standard, with nearly every major base model release utilizing sparse, highly efficient activation layers.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   Author: deepseek-ai | Likes: 4,758 | Downloads: 4,061,006
    *   The latest powerhouse MoE LLM from DeepSeek, dominating the charts with massive community adoption and leading performance.
*   **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
    *   Author: nvidia | Likes: 189 | Downloads: 59,066
    *   A massive 550B-parameter Mixture-of-Experts model activating 55B parameters, delivering flagship text generation capabilities.
*   **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)**
    *   Author: nvidia | Likes: 158 | Downloads: 91,117
    *   The highly efficient NVFP4 quantized version of the 550B Nemotron model, boasting higher downloads due to its significantly reduced memory footprint.
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
    *   Author: LiquidAI | Likes: 580 | Downloads: 142,134
    *   A highly efficient 8B language model with 1B active parameters, demonstrating strong performance for its compact size.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   Author: google | Likes: 882 | Downloads: 675,936
    *   Google’s flagship instruction-tuned any-to-any multimodal model, leading the current generation of the Gemma family.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   Author: nvidia | Likes: 1,793 | Downloads: 131,794
    *   A highly popular specialized vision-language model receiving massive community praise for its precise object detection and localization capabilities.
*   **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
    *   Author: stepfun-ai | Likes: 363 | Downloads: 50,187
    *   A fast and highly capable vision-language model bridging the gap between text generation and visual understanding.
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *   Author: ideogram-ai | Likes: 469 | Downloads: 7,170
    *   The FP8-quantized version of the highly anticipated Ideogram 4, offering state-of-the-art text-to-image generation.
*   **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
    *   Author: ideogram-ai | Likes: 304 | Downloads: 6,124
    *   The NF4 quantized variant of Ideogram 4, allowing high-fidelity image generation on consumer GPUs with limited VRAM.
*   **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
    *   Author: ByteDance | Likes: 208 | Downloads: 305
    *   A cutting-edge image and text-to-video generation model pushing the boundaries of dynamic video rendering.
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   Author: bosonai | Likes: 318 | Downloads: 19,948
    *   An advanced multimodal text-to-speech model built on Qwen3 architecture, trending for its highly realistic voice synthesis.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   Author: nvidia | Likes: 340 | Downloads: 4,965
    *   A blazing-fast, cache-aware automatic speech recognition model specifically designed for real-time, streaming transcription.
*   **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
    *   Author: google | Likes: 170 | Downloads: 19,806
    *   Google’s latest iteration of its real-time text-to-audio generation model, optimized for ultra-low latency.
*   **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)**
    *   Author: MisoLabs | Likes: 185 | Downloads: 0
    *   An emerging open-source text-to-speech model generating early buzz for its highly natural speech synthesis.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
    *   Author: JetBrains | Likes: 280 | Downloads: 18,273
    *   A specialized MoE code model with built-in chain-of-thought reasoning, purpose-built for software engineering tasks.
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   Author: CohereLabs | Likes: 249 | Downloads: 1,859
    *   A lightweight, highly efficient MoE model tailored specifically for code generation and programming assistance.
*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    *   Author: sapientinc | Likes: 739 | Downloads: 134,752
    *   A highly efficient 1B text generation model seeing massive downloads due to its speed and specialized focus.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   Author: HauhauCS | Likes: 1,630 | Downloads: 3,057,541
    *   The undisputed download champion of the week, offering a completely uncensored and aggressively tuned vision-language MoE experience.
*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   Author: unsloth | Likes: 548 | Downloads: 711,706
    *   The essential standard GGUF conversion of the Gemma 4 multimodal model, enabling easy local deployment via CPU/offloading.
*   **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**
    *   Author: unsloth | Likes: 186 | Downloads: 148,252
    *   A Quantization-Aware Training (QAT) version of Gemma 4 12B, offering much higher fidelity compared to standard post-training quantization.
*   **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)**
    *   Author: unsloth | Likes: 128 | Downloads: 129,110
    *   The QAT GGUF release of the larger 26B Gemma 4 MoE, striking an excellent balance between parameter count and local performance.
*   **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
    *   Author: OBLITERATUS | Likes: 209 | Downloads: 14,838
    *   A community fine-tune stripping safety alignments from Gemma 4 to create an unrestricted multimodal chat model.
*   **[huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)**
    *   Author: huihui-ai | Likes: 135 | Downloads: 6,400
    *   Another highly popular abliterated (alignment-removed) fine-tune of the base Gemma 4 12B model.

---

### 3. Ecosystem Signal
The Hugging Face ecosystem in mid-2026 is defined by the absolute mainstreaming of **Mixture-of-Experts (MoE)** architectures. Models like DeepSeek-V4-Pro, Nemotron-3-Ultra (550B total/55B active), LiquidAI's LFM2.5, and the entire new wave of Qwen and Gemma releases prove that dense models are increasingly reserved for edge cases. The race is on for maximum total parameters with minimum active compute. 

Google’s Gemma 4 launch is a textbook example of the modern "open-weight flywheel," where an official base release is immediately amplified by the community. Unsloth’s rapid deployment of QAT-GGUF quantizations is massively accelerating adoption, allowing users to run complex multimodal MoE models on consumer hardware. Furthermore, the staggering download numbers (over 3 million) for uncensored/unhinged fine-tunes like the HauhauCS Qwen variant highlight a sustained, massive demand for heavily debiased and unrestricted models. On the generative side, NVIDIA’s LocateAnything proves that highly specialized VLM tasks (like spatial awareness and grounding) are generating more organic community hype than generalized foundation models.

### 4. Worth Exploring
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**: With over 4 million downloads in a week, exploring this model is mandatory to understand the current SOTA in open-weight reasoning and text generation.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: Worth trying for developers working on agentic frameworks or robotics; its high like-to-download ratio indicates an exceptionally useful tool for spatial and visual grounding tasks.
*   **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**: The best way to test Google's new multimodal capabilities locally. The QAT (Quantization-Aware Training) method ensures you get near-native accuracy at a fraction of the memory cost.