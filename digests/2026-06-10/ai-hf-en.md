# Hugging Face Trending Models Digest 2026-06-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-09 22:27 UTC

---

Here is the Hugging Face Trending Models Digest for June 10, 2026:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the release of Google's Gemma 4 family and DeepSeek-V4-Pro, both driving massive community engagement and download numbers. A clear architectural shift is evident across the leaderboard, with Mixture-of-Experts (MoE) models becoming the standard for efficient inference, seen in DeepSeek, Nemotron, and LiquidAI releases. Multimodal capabilities are expanding beyond vision, with high-ranking debuts in streaming Automatic Speech Recognition (ASR) and real-time text-to-audio generation. Furthermore, the open-source community's rapid response in quantizing and "uncensoring" these new base models highlights the persistent demand for accessible, locally-runnable AI. 

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | Author: deepseek-ai | Likes: 4,740 | Downloads: 4,302,553
  The most popular model of the week by likes and downloads, serving as a heavily utilized powerhouse MoE LLM for general conversational and text-generation tasks.
- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | Author: sapientinc | Likes: 733 | Downloads: 133,351
  A highly downloaded, compact 1B text-generation model that is outperforming its weight class in popularity, likely due to edge-device efficiency.
- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | Author: nvidia | Likes: 172 | Downloads: 56,864
  A massive 550B parameter MoE language model (55B active) built for high-end, uncompromising enterprise text-generation tasks.
- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | Author: LiquidAI | Likes: 570 | Downloads: 137,138
  A highly efficient 8B parameter MoE (1B active) that is gaining massive traction due to its incredibly low compute requirements for its size class.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 1,723 | Downloads: 123,922
  A highly liked vision-language model specializing in precise image-feature extraction and object localization.
- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | Author: ideogram-ai | Likes: 437 | Downloads: 5,915
  The FP8-optimized version of the highly anticipated Ideogram 4 text-to-image diffusion model, offering high-fidelity generation.
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia | Likes: 317 | Downloads: 4,181
  A low-latency, cache-aware automatic speech recognition model built specifically for real-time, streaming transcription.
- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | Author: google | Likes: 164 | Downloads: 18,216
  Google’s latest specialized text-to-audio generation model, making waves for its real-time musical and auditory capabilities.
- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | Author: ByteDance | Likes: 193 | Downloads: 281
  An advanced image-text-to-video generation model pushing the boundaries of multimodal video rendering.

#### 🔧 Specialized Models (code, math, medical, embeddings)
- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | Author: JetBrains | Likes: 269 | Downloads: 17,571
  A specialized coding assistant model with a built-in "thinking" mechanism and MoE architecture, optimized for software development tasks.
- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | Author: PaddlePaddle | Likes: 280 | Downloads: 10,139
  A specialized vision-language model tailored for high-accuracy Optical Character Recognition (OCR) and document understanding.
- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | Author: CohereLabs | Likes: 149 | Downloads: 1,784
  A compact MoE model specifically fine-tuned for code generation and programming assistance.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | Author: unsloth | Likes: 527 | Downloads: 660,140
  A highly downloaded community quantization of the Gemma 4 12B model, allowing it to be run easily on consumer hardware.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 1,588 | Downloads: 2,983,909
  An aggressively uncensored fine-tune of the Qwen 3.6 MoE vision-language model, dominating the download charts for unrestricted local use.
- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | Author: OBLITERATUS | Likes: 124 | Downloads: 8,106
  A community-driven effort to strip the safety filters from the newly released Gemma 4 12B model.
- **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | Author: unsloth | Likes: 114 | Downloads: 96,059
  A Quantization-Aware Training (QAT) GGUF release that maximizes the performance of the larger Gemma 4 26B MoE model on local machines.

### 3. Ecosystem Signal
The June 2026 leaderboard highlights a definitive industry pivot toward Mixture-of-Experts (MoE) architectures. Models like DeepSeek-V4-Pro, LiquidAI's LFM2.5, and various Nemotron iterations prove that raw parameter count is being replaced by high active-parameter efficiency. Google's Gemma 4 family is the current darling of the open-weight community, driving a massive secondary ecosystem of GGUF quantizations and safety-filter removals ("uncensoring") by creators like Unsloth and HauhauCS. 

Furthermore, multimodality is diversifying. While vision-language models (VLMs) remain standard, we are seeing a surge in specialized audio and video pipelines, evidenced by the streaming ASR from Nvidia and real-time audio generation from Google's Magenta. Proprietary dominance is clearly waning as open-weight powerhouses like DeepSeek V4 dwarf the download numbers of closed APIs, proving that the community prioritizes accessible, locally deployable, and modifiable weights.

### 4. Worth Exploring
- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**: With 137k downloads and 570 likes, this model is an absolute must-test for developers building edge applications. Using only 1B active parameters out of 8B, it offers an incredible speed-to-intelligence ratio that could disrupt the current sub-3B model market.
- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**: As coding assistants become standard, JetBrains' foray into "thinking" MoE models is highly intriguing. It is worth studying to see how well industry-specific fine-tuning integrates with chain-of-thought reasoning for complex software engineering tasks.
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**: Real-time voice interaction is the next frontier for AI interfaces. Exploring this 0.6b streaming model is essential for anyone looking to build low-latency, voice-driven agent pipelines without relying on proprietary cloud APIs.