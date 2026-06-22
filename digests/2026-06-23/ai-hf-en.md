# Hugging Face Trending Models Digest 2026-06-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-22 22:30 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the June 23, 2026 data:

### 1. Today's Highlights
Today's Hugging Face trending list is dominated by major next-generation foundation releases, notably DeepSeek-V4-Pro and ZAI's GLM-5.2, both generating massive engagement and download volumes. Google's Gemma-4-12B is seeing explosive community adoption, serving as the base for numerous highly downloaded fine-tunes and quantizations. Multimodal and agentic capabilities continue to expand rapidly, highlighted by new unified models like DiffusionGemma and Kimi-K2.7-Code. Meanwhile, the open-weight community is aggressively optimizing these large architectures for local and edge deployment, with a heavy emphasis on GGUF quantizations and agentic reasoning fine-tunes.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 2,014 | Downloads: 33,589
    A highly anticipated next-gen conversational text generation model utilizing a Mixture-of-Experts (MoE) architecture, drawing massive community attention.
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | Author: deepseek-ai | Likes: 5,010 | Downloads: 2,421,858
    The undisputed leaderboard topper this week, driving massive download numbers as the latest flagship conversational LLM from DeepSeek.
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | Author: google | Likes: 1,138 | Downloads: 1,912,198
    Google's latest unified any-to-any instruction-tuned model, serving as the foundational backbone for a massive wave of community fine-tunes.
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | Author: MiniMaxAI | Likes: 1,207 | Downloads: 119,967
    A powerful new multimodal vision-language model from MiniMax, pushing the boundaries of open-weight image-text-to-text capabilities.
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | Author: CohereLabs | Likes: 481 | Downloads: 21,078
    A highly efficient, conversational MoE model tailored specifically for coding tasks and software development.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,290 | Downloads: 247,517
    An advanced image-feature-extraction and image-text-to-text model redefining spatial awareness and object localization in computer vision.
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | Author: google | Likes: 1,049 | Downloads: 874,368
    A groundbreaking conversational image-text-to-text model bridging the gap between LLMs and diffusion-based generation.
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | Author: moonshotai | Likes: 961 | Downloads: 412,778
    A highly downloaded multimodal model integrating strong coding capabilities with visual feature extraction.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 140 | Downloads: 47
    A newly released specialized vision model tackling complex, unrestricted optical character recognition tasks.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia | Likes: 628 | Downloads: 34,860
    An ultra-fast, cache-aware automatic speech recognition model built for real-time streaming applications.
*   **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | Author: owensong | Likes: 166 | Downloads: 0
    An ultra-small, highly liked text-to-speech model pushing the boundaries of lightweight speech synthesis.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | Author: microsoft | Likes: 287 | Downloads: 3,498
    A specialized SFT model designed to operate as an "Explorer SubAgent" for rapid context retrieval and processing.
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | Author: WeiboAI | Likes: 608 | Downloads: 32,385
    A compact yet powerful Qwen2-based model specifically tuned for advanced mathematical reasoning.
*   **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | Author: LiquidAI | Likes: 100 | Downloads: 8,822
    The latest generation of Liquid Foundation Models, optimized for high-performance sentence similarity and embeddings.
*   **[LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)** | Author: LiquidAI | Likes: 78 | Downloads: 2,202
    A specialized retrieval model offering advanced contextualized token-level matching for RAG pipelines.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,165 | Downloads: 414,734
    The most popular community fine-tune this week, supercharging Gemma-4 for local coding and reasoning via GGUF.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,109 | Downloads: 4,078,305
    An aggressive, uncensored MoE fine-tune of Qwen 3.6 that has achieved a staggering 4 million+ downloads.
*   **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** | Author: zai-org | Likes: 133 | Downloads: 334,716
    The official FP8 quantized version of GLM-5.2, allowing for highly efficient deployment without sacrificing performance.
*   **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** | Author: Jackrong | Likes: 281 | Downloads: 214,630
    A highly adopted community blend fusing Qwen and Llama architectures, optimized for local vision and coding tasks.
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1 | Likes: 375 | Downloads: 50,314
    A companion fine-tune to the top trending coder model, focused on enhancing agentic terminal operations locally.

### 3. Ecosystem Signal
The ecosystem is currently experiencing a massive shift toward **efficient, high-parameter MoE architectures**. Models like Qwen 3.6 (35B-A3B) and GLM-5.2 dominate the charts, proving that Mixture-of-Experts is the new standard for open-weight releases. Google's Gemma-4 has firmly established itself as the go-to base model for the open-source community, spawning highly downloaded agentic and coding fine-tunes.

In terms of deployment, **FP8 and GGUF quantizations** are seeing millions of downloads, indicating strong demand from both enterprise server setups and local/edge hobbyist users. Furthermore, there is a clear trend toward **niche functionality**: uncensored models (HauhauCS), ultra-light TTS (Inflect-Nano), and spatial awareness models (LocateAnything) are generating outsized engagement compared to generalist LLMs. Finally, the integration of text, vision, and audio is blurring pipeline boundaries, with models like DiffusionGemma proving that unified "any-to-any" architectures are gaining commercial traction.

### 4. Worth Exploring
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**: With over 5,000 weekly likes and 2.4M downloads, this is undeniably the centerpiece of this week's hub activity. It is a must-test for anyone looking to benchmark the absolute cutting edge of open-weight conversational AI.
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**: This model represents a fascinating architectural pivot—fusing diffusion concepts with conversational LLMs. It is highly worth studying for researchers and developers interested in the future of unified multimodal generation.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: At just 3B parameters, this model is achieving highly complex image-text-to-text and feature extraction tasks. It is an excellent, lightweight model to integrate into existing computer vision or robotics pipelines.