# Hugging Face Trending Models Digest 2026-06-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-12 22:27 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the latest data:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by massive open-weight releases from industry giants, with **DeepSeek-V4-Pro** taking the crown for both user engagement and raw download volume. Google's **Gemma 4** family is seeing explosive community adoption, driving a massive wave of quantizations, edge-ready deployments, and uncensored fine-tunes. Meanwhile, multimodal capabilities continue to expand and specialize, highlighted by Nvidia's highly popular **LocateAnything-3B** and ByteDance's **Bernini-R** pushing the boundaries of image-text-to-video generation.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | Author: deepseek-ai | Likes: 4,796 | Downloads: 3,384,418
    *What it is:* A highly anticipated, next-generation conversational LLM drawing massive traffic to the Hub.
*   **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | Author: nvidia | Likes: 203 | Downloads: 67,203
    *What it is:* A massive 550B parameter Mixture-of-Experts (MoE) model with 55B active parameters, reinforcing Nvidia's aggressive push into open-weight enterprise LLMs.
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | Author: MiniMaxAI | Likes: 237 | Downloads: 442
    *What it is:* The latest flagship text and multimodal model from MiniMaxAI, bringing highly competitive open-weights to the developer community.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 1,920 | Downloads: 149,206
    *What it is:* A trending image-text-to-text visual grounding model that excels at precise object localization and feature extraction.
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | Author: google | Likes: 609 | Downloads: 20,669
    *What it is:* A novel conversational diffusion model that bridges the gap between large language models and generative multimality.
*   **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | Author: ByteDance | Likes: 228 | Downloads: 373
    *What it is:* A state-of-the-art image-text-to-video model showcasing impressive generative rendering capabilities.
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) / [ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | Author: ideogram-ai | Likes: 501 / 326 | Downloads: 4,987 / 2,910
    *What it is:* The latest iteration of Ideogram's powerful text-to-image diffusion models, highly optimized for accurate typography and design.
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | Author: bosonai | Likes: 384 | Downloads: 29,347
    *What it is:* A high-quality, multimodal Qwen-based text-to-speech model providing highly expressive voice synthesis.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | Author: CohereLabs | Likes: 332 | Downloads: 4,054
    *What it is:* An MoE-based, highly efficient coding companion tailored for specialized developer workflows.
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | Author: moonshotai | Likes: 323 | Downloads: 0
    *What it is:* A cutting-edge visual coding model designed for agentic tasks, recently launched by Moonshot AI.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia | Likes: 391 | Downloads: 3,551
    *What it is:* A specialized, cache-aware automatic speech recognition model built for ultra-low latency streaming transcription.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** (and variants like **[qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**) | Author: unsloth | Likes: 570+ | Downloads: 1M+
    *What it is:* Highly optimized GGUF and quantization-aware training (QAT) ports of the Gemma 4 architecture, driving local AI deployment.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 1,722 | Downloads: 2,393,894
    *What it is:* An aggressively uncensored community fine-tune of the Qwen3.6 MoE that has surprisingly become one of the most downloaded models on the Hub this week.
*   **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | Author: OBLITERATUS | Likes: 253 | Downloads: 43,578
    *What it is:* An "abliterated" version of Gemma 4 that removes standard safety alignments, highly requested by the open-source community for unrestricted use.

### 3. Ecosystem Signal
The open-weight ecosystem is experiencing an undeniable golden age driven by **Mixture-of-Experts (MoE)** architectures, as evidenced by the massive download numbers for DeepSeek-V4-Pro, Qwen3.6, and Nvidia's Nemotron-3 Ultra. By decoupling total parameter count from active compute, developers are successfully deploying 30B–550B scale models with significantly reduced latency and memory overhead. 

Google's **Gemma 4** and Alibaba's **Qwen 3.x** architectures are the undeniable favorites for community modification. We are seeing an unprecedented, immediate demand for **QAT (Quantization-Aware Training) and GGUF formats**, signaling that the community prioritizes running these models locally or on edge devices. Additionally, the appetite for "uncensored" or "abliterated" base models remains incredibly strong, with community distillations racking up millions of downloads by removing standard alignment constraints. Finally, a distinct shift from pure text models to **specialized, low-latency multimodal tasks**—such as streaming ASR, visual location detection, and real-time audio generation—shows that applied AI is maturely moving past text-only chatbots.

### 4. Worth Exploring
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**: An absolute must-study for understanding the current state-of-the-art in open-weight MoE design, scaling laws, and architectural efficiency.
*   **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**: Essential for anyone deploying models locally; this model demonstrates the immense potential of Quantization-Aware Training (QAT) for running capable multimodal models on consumer hardware.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: A fascinating pivot in computer vision. Rather than broad image captioning, this model provides hyper-efficient visual grounding, opening up new possibilities for AI automation, robotics, and UI agents.