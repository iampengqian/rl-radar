# Hugging Face Trending Models Digest 2026-06-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-17 22:30 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the release of next-generation foundation models, notably **DeepSeek-V4-Pro** and **Google's Gemma-4**, both of which are driving massive community engagement and download numbers. There is a pronounced industry shift toward lightweight, highly efficient Mixture-of-Experts (MoE) architectures, with Qwen 3.6 and Google's A4B models leading the charge. Multimodality is now a standard expectation, with numerous models natively supporting text, vision, and audio pipelines. Meanwhile, the open-source community remains highly active in aggressively fine-tuning, uncensoring, and quantizing (GGUF) these new heavyweights for local deployment.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *Author: deepseek-ai | Likes: 4,920 | Downloads: 2,804,646*
    The leading model on the charts by engagement, representing the latest massive leap in DeepSeek's flagship conversational and reasoning text models.
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *Author: Qwen | Likes: 2,154 | Downloads: 3,683,883*
    A highly efficient 35B parameter MoE model activating only 3B parameters during inference, striking a massive balance between high performance and local/hosting viability.
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *Author: zai-org | Likes: 981 | Downloads: 666*
    A highly anticipated new text-generation and conversational model utilizing a Mixture-of-Experts architecture (glm_moe_dsa) that is generating immense early community buzz.
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *Author: CohereLabs | Likes: 420 | Downloads: 13,449*
    A compact, conversational MoE model tailored for coding assistance and general text generation.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *Author: google | Likes: 974 | Downloads: 460,173*
    A highly efficient image-text-to-text model (activating just 4B parameters) that bridges powerful conversational reasoning with multimodal understanding.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *Author: nvidia | Likes: 2,137 | Downloads: 130,389*
    A highly popular, lightweight vision-language model designed for precise object detection and location-based image reasoning.
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *Author: google | Likes: 1,068 | Downloads: 922,952*
    Google's latest unified "any-to-any" model, pushing the boundaries of native multimodal processing for text, vision, and audio.
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *Author: MiniMaxAI | Likes: 1,059 | Downloads: 42,198*
    A powerful new vision-language (VL) multimodal architecture with strong agentic capabilities.
*   **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
    *Author: zai-org | Likes: 222 | Downloads: 0*
    An advanced pose-driven diffusion model for character animation and high-quality video generation.
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *Author: ideogram-ai | Likes: 567 | Downloads: 15,477*
    The latest state-of-the-art text-to-image generation model from Ideogram, optimized in FP8 for memory-efficient high-fidelity rendering.
*   **[Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2)**
    *Author: Zyphra | Likes: 106 | Downloads: 629*
    A trending open-weights (Apache-2.0) text-to-speech model making waves for high-quality audio synthesis.
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *Author: bosonai | Likes: 477 | Downloads: 40,812*
    A 4B parameter multimodal Qwen-based model designed for advanced text-to-speech and audio generation.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *Author: nvidia | Likes: 518 | Downloads: 7,195*
    An ultra-fast, cache-aware automatic speech recognition (ASR) model built for real-time streaming applications.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *Author: moonshotai | Likes: 844 | Downloads: 172,727*
    A highly downloaded vision-language model specifically tuned for advanced coding tasks and software engineering agentic workflows.
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *Author: WeiboAI | Likes: 302 | Downloads: 1,950*
    A compact Qwen-based model heavily optimized for deep mathematical reasoning and logical "thinking" tasks.
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *Author: microsoft | Likes: 184 | Downloads: 537*
    A specialized Qwen-based text model built specifically to act as an "Explorer SubAgent" for processing massive context windows rapidly.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *Author: yuxinlu1 | Likes: 1,450 | Downloads: 146,784*
    The most liked community model today, combining Gemma-4 with aggressive coding and reasoning fine-tunes, optimized for local use via GGUF.
*   **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)**
    *Author: unsloth | Likes: 296 | Downloads: 136,634*
    Unsloth's highly efficient GGUF quantization of Google's DiffusionGemma, enabling local multimodal deployment on consumer hardware.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *Author: HauhauCS | Likes: 1,929 | Downloads: 2,876,624*
    A wildly popular community fine-tune of Qwen3.6 that removes all safety alignments for unrestricted, aggressive, and unfiltered generation.
*   **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
    *Author: DavidAU | Likes: 380 | Downloads: 427,359*
    A massive "kitchen-sink" blend fine-tune designed to inject deep reasoning, uncensored outputs, and top-tier coding capabilities into Qwen 3.6.
*   **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
    *Author: OBLITERATUS | Likes: 338 | Downloads: 78,333*
    A highly downloaded text/vision model stripped of its safety filters, maintaining Gemma-4's reasoning power without refusals.

---

### 3. Ecosystem Signal
The current ecosystem is defined by the **Mixture-of-Experts (MoE) revolution**, with architectures like DeepSeek-V4, Qwen 3.5/3.6, and Gemma-4 dominating the charts. These models (e.g., Qwen3.6-35B-A3B) offer massive total parameter counts but activate only 3-4B parameters during inference, allowing enterprise-grade performance to bleed directly into local consumer hardware. 

Unsurprisingly, **GGUF quantization** and local deployment remain massive drivers of community activity, spearheaded by creators like `unsloth`. However, the most notable community trend is the explosive popularity of **uncensored and heavily modified fine-tunes** (e.g., *Qwen3.6-Uncensored-Aggressive* and DavidAU's massive blends), which account for millions of downloads. Open-weight models have fully bridged the gap with proprietary models in multimodal capabilities, shifting the innovation focus toward real-time streaming audio (ASR/TTS), precise vision tasks (LocateAnything), and highly specialized agentic sub-routines (Microsoft's FastContext).

---

### 4. Worth Exploring

1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
   *Why:* This model is an engineering marvel. With 35B parameters but only 3B active, it offers an unprecedented ratio of capability to compute cost. It is the absolute bleeding edge of efficient MoE design and serves as the foundation for countless top-tier community fine-tunes.
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   *Why:* Nvidia is pushing the boundaries of practical, lightweight computer vision. Instead of generic image descriptions, this model is tuned for precise object localization and spatial reasoning, opening up massive potential for real-world robotics and UI-navigation agents.
3. **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
   *Why:* As agents grow more complex, context management becomes a bottleneck. Microsoft’s "Explorer SubAgent" approach is a fascinating study in using small, specialized LLMs to parse massive context windows quickly before feeding the results to larger reasoning models.