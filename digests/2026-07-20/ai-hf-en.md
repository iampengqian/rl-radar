# Hugging Face Trending Models Digest 2026-07-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-19 22:14 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by extreme quantization and efficiency breakthroughs, with 1-bit and 2-bit models like prism-ml's Bonsai-27B series racking up massive download numbers. Vision-language models (VLMs) continue to evolve rapidly, highlighted by massive adoption for Baidu's Unlimited-OCR and Google's newly released Gemma-4-31B-it. Additionally, community-driven fine-tuning and "uncensored" reasoning models are seeing immense engagement, showcasing a strong user demand for highly capable, locally runnable, and unfiltered AI models. 

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | *zai-org* | Likes: 4,165 | Downloads: 536,177
    A highly popular MoE-based text generation model that is making waves due to its robust conversational capabilities and architecture.
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | *google* | Likes: 3,273 | Downloads: 12,337,374
    Google's latest instruction-tuned 31B model, trending as an absolute heavyweight in both performance and massive adoption.
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | *tencent* | Likes: 835 | Downloads: 13,698
    The newest iteration of Tencent's Hunyuan text generation models, gaining traction as a powerful foundational LLM.
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | *InternScience* | Likes: 582 | Downloads: 35,833
    A Qwen-based Mixture-of-Experts (MoE) model tailored specifically for advanced image-text processing and agentic tasks.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | *baidu* | Likes: 2,156 | Downloads: 2,122,848
    An incredibly popular image-text-to-text model taking the top spot for utility downloads due to its powerful, unrestricted optical character recognition.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | *empero-ai* | Likes: 2,339 | Downloads: 2,118,995
    A highly downloaded reasoning-based image-text-to-text model that merges Qwen 3.5 architecture with Claude-style mythos tuning.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | *HauhauCS* | Likes: 2,895 | Downloads: 2,084,530
    A massive, uncensored MoE vision model that is trending because of its aggressive unfiltering and multi-modal reasoning capabilities.
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | *thinkingmachines* | Likes: 1,142 | Downloads: 13,462
    A new conversational image-text-to-text model generating buzz as a highly capable multi-modal architecture.
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | *Wan-AI* | Likes: 126 | Downloads: 2,408
    A 14B parameter image-to-video diffusion model capturing attention for its highly specialized video generation capabilities.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | *OpenMOSS-Team* | Likes: 276 | Downloads: 87,533
    A highly adopted specialized audio-text-to-text model built for accurate transcription and speaker diarization.
*   **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | *ATH-MaaS* | Likes: 191 | Downloads: 14,587
    A specialized Qwen-based vision model fine-tuned exclusively for high-performance OCR tasks.
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | *Cactus-Compute* | Likes: 279 | Downloads: 955
    A unique JAX-based model trending rapidly for its focus on native function-calling and tool-use.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | *prism-ml* | Likes: 486 | Downloads: 1,262,894
    A groundbreaking 1-bit quantized Qwen model that is trending due to its unprecedented ability to drastically reduce VRAM requirements while maintaining performance.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | *froggeric* | Likes: 947 | Downloads: 0
    A crucial repository fixing Jinja chat templates for Qwen 3.5, proving highly popular as a necessary patch for local AI developers.
*   **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** | *AngelSlim* | Likes: 137 | Downloads: 109,749
    The go-to GGUF quantization for Tencent's Hy3, driving local adoption of the new architecture.
*   **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** | *GnLOLot* | Likes: 147 | Downloads: 5,494
    An aggressive fine-tune that gives a tiny 1B model Claude-Opus-like reasoning and "thinking" capabilities.

### 3. Ecosystem Signal
The current ecosystem reveals a massive pivot toward extreme hardware efficiency and local deployment. The **Qwen ecosystem (versions 3.5 and 3.6)** is dominating the open-weight landscape, serving as the foundational architecture for almost all trending fine-tunes, MoE implementations, and vision-language models (VLMs). 

Interestingly, the hub is experiencing a revolution in sub-2-bit quantization. Models utilizing ternary (2-bit) and 1-bit formats—such as the Bonsai series—are achieving download numbers in the millions, proving that users prioritize memory footprint reduction even at the cost of theoretical precision loss. This is heavily facilitated by the rising adoption of Apple's MLX format alongside traditional GGUF/llama.cpp pipelines.

Furthermore, there is a very strong community push towards "uncensored," "reasoning," and "aggressive" fine-tunes (e.g., HauhauCS, DavidAU), showing that power users are actively stripping safety guardrails from models to maximize tool-use and instruction-following. 

### 4. Worth Exploring
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**: A must-try for anyone interested in the future of local AI. Pushing a 27B model down to 1-bit proves that high-parameter architectures can be run on consumer hardware without hitting Out-Of-Memory (OOM) errors.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: With over 2 million downloads in a week, this model is clearly solving a major pain point in the developer community for high-fidelity, unrestricted optical character recognition.
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**: Built in JAX with a focus on tool-use, this is an excellent model to study for developers building autonomous agents rather than just standard chatbots.