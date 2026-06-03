# Hugging Face Trending Models Digest 2026-06-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-03 22:40 UTC

---

Here is the Hugging Face Trending Models Digest for June 4, 2026.

### 1. Today's Highlights
Today's Hugging Face leaderboard is dominated by major flagship releases and an aggressive push into next-generation multimodal capabilities. DeepSeek and Qwen are fiercely competing for the top of the LLM and Vision-Language Model (VLM) charts, recording millions of downloads. Meanwhile, NVIDIA has launched a massive offensive into generative media with its new Cosmos3 omnimodal suite, while simultaneously pushing highly optimized, hardware-specific quantizations. The open-source community remains as active as ever, with particular excitement surrounding uncensored MoE architectures, localized text-to-speech engines, and highly efficient edge AI models.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, base models)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 👍 4,597 | 📥 5.8M
    The flagship powerhouse of the DeepSeek-V4 family, trending as this week's most downloaded and liked text-generation model.
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 👍 1,384 | 📥 3.5M
    The lighter, high-speed counterpart to the Pro model, offering cutting-edge conversational abilities under an MIT license.
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 👍 475 | 📥 60,171
    A highly efficient liquid foundation model utilizing a Mixture-of-Experts (MoE) architecture to activate only 1B out of 8B parameters.
*   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 👍 756 | 📥 68,494
    The latest iteration of the incredibly popular edge-friendly text generation model, offering strong performance at a tiny footprint.

#### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 👍 1,587 | 📥 5.3M
    A massive unified multimodal model dominating the charts with native image-text-to-text capabilities and state-of-the-art benchmarks.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 👍 1,146 | 📥 78,925
    A highly anticipated spatial-intelligence VLM designed for precise object localization and feature extraction from images.
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 👍 1,530 | 📥 1.6M
    A viral text-to-video diffusion model (based on LTX-2.3) that has captured the community's attention with its high-fidelity generation.
*   **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)** & **[Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)** | nvidia | 👍 113/133 | 📥 ~18k combined
    NVIDIA's foundational diffusion models for omni-generative tasks, spawning specialized variants for text-to-image and image-to-video.
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 👍 1,021 | 📥 3,309
    A versatile any-to-any multimodal generator handling complex cross-domain tasks across image and video generation.
*   **[OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)** | OpenMOSS-Team | 👍 137 | 📥 23,987
    A highly capable, low-latency text-to-speech model seeing massive adoption, particularly for Chinese (zh) language applications.

#### 🔧 Specialized Models (Code, Vision, OCR, Domain-Specific)
*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | 👍 176 | 📥 6,938
    A specialized code model featuring a native "thinking" mechanism, built specifically to power AI-assisted programming workflows.
*   **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 👍 212 | 📥 4,829
    A targeted vision-language model built on ERNIE4.5, highly optimized for complex optical character recognition tasks.
*   **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 👍 510 | 📥 18,315
    A specialized video-text-to-text model allowing for nuanced conversational reasoning directly over video inputs.
*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 👍 539 | 📥 155,558
    A highly downloaded domain-specific text model seeing rapid enterprise adoption for specialized reasoning tasks.

#### 📦 Fine-tunes & Quantizations (Community efforts, edge deployments)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 👍 1,343 | 📥 2.6M
    The absolute top-trending community fine-tune, offering an aggressively uncensored spin on the Qwen3.6 MoE architecture.
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 👍 629 | 📥 1.0M
    Unsloth's highly optimized GGUF release, enabling consumer hardware to run the heavy Qwen3.6 VLM via llama.cpp.
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | 👍 153 | 📥 470k
    An official hardware-optimized quantization by NVIDIA using their Model Optimizer to run the MoE architecture efficiently on GPUs.

---

### 3. Ecosystem Signal
The current ecosystem reflects a massive transition toward highly efficient, sparse architectures and unified any-to-any generation. Mixture-of-Experts (MoE) is the undisputed standard, dominating the charts across both open-weights (Qwen3.6's A3B models, LiquidAI's LFM2.5) and proprietary formats. This architecture allows models to scale to massive parameter counts (up to 35B) while maintaining runtime efficiency, subsequently fueling a bustling quantization community (Unsloth, GGUF) and pushing hardware vendors like NVIDIA to release official FP4 quantizations. 

Open-weight models are thriving, though often acting as foundational bases for a highly active community fine-tuning subculture (seen in the massive download numbers of the "Uncensored" Qwen fine-tune). Furthermore, "modal convergence" is a clear trend: users are moving away from separate text, image, and audio models toward unified ecosystems like Qwen 3.6, Cosmos3, and Google's Gemma 4, which natively handle cross-modal inputs and outputs.

### 4. Worth Exploring
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: With over 2.6 million downloads in a week, this model is a fascinating case study in community demand. It is well worth exploring to see how "aggressive" system prompts and uncensored fine-tuning can extract extreme performance out of Qwen's sparse MoE architecture.
*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**: If you are a developer or interested in AI coding workflows, this is a must-try. It is specifically tailored for code generation and utilizes an internal "thinking" paradigm before outputting solutions, making it highly competitive with closed-source coding assistants.
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**: Perfect for anyone looking to deploy LLMs on edge devices. Activating only 1 Billion parameters out of its 8 Billion total, this model represents the cutting edge of open-source parameter efficiency without sacrificing conversational utility.