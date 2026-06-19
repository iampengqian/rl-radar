# Hugging Face Trending Models Digest 2026-06-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-19 22:16 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the latest data:

### 📰 Hugging Face Trending Models Digest (2026-06-20)

**1. Today's Highlights**
The Hugging Face ecosystem is currently experiencing a massive surge in next-generation foundation models, headlined by DeepSeek-V4-Pro and Google's highly versatile Gemma-4 family. Multimodal capabilities are now the default standard, with cutting-edge architectures like DiffusionGemma fusing modalities in unprecedented ways. Massive open-weight MoE (Mixture of Experts) releases like Zhipu's GLM-5.2 and a 397B parameter model from prefeitura-rio are pushing the boundaries of community-driven AI scale. Meanwhile, the open-source community is aggressively iterating on these foundations, particularly favoring uncensored, agentic, and heavily quantized (GGUF) builds optimized for local deployment.

---

**2. Trending Models**

**🧠 Language Models (LLMs, chat models, instruction-tuned)**
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | *deepseek-ai* | Likes: 4,968 | Downloads: 3,015,772
    The highly anticipated V4 flagship LLM from DeepSeek, dominating the charts with massive download numbers and conversational prowess.
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | *zai-org* | Likes: 1,527 | Downloads: 11,871
    A next-generation MoE-based conversational model showcasing Zhipu AI's latest architectural advancements.
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | *google* | Likes: 1,095 | Downloads: 1,590,882
    Google's new unified 12B model capable of "any-to-any" processing, serving as the backbone for countless community fine-tunes.
*   **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)** | *prefeitura-rio* | Likes: 325 | Downloads: 190,639
    A massive 397B parameter multimodal/MoE model demonstrating cutting-edge open-weight scale from a municipal AI initiative.
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | *CohereLabs* | Likes: 458 | Downloads: 17,693
    A compact, highly efficient MoE model from Cohere tailored specifically for coding and conversational developer tasks.

**🎨 Multimodal & Generation (image, video, audio, text-to-X)**
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | *google* | Likes: 1,009 | Downloads: 601,208
    A revolutionary multimodal model blending diffusion techniques with LLM reasoning for dynamic image-text-to-text tasks.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | *nvidia* | Likes: 2,194 | Downloads: 228,669
    An incredibly popular, lightweight spatial recognition model from NVIDIA that excels at pinpointing elements within images.
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | *MiniMaxAI* | Likes: 1,131 | Downloads: 67,836
    A powerful new vision-language (VL) model expanding MiniMax's footprint in the open-weight multimodal space.
*   **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** | *zai-org* | Likes: 233 | Downloads: 0
    A highly anticipated pose-driven image-to-video diffusion model for high-quality character animation.
*   **[Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2)** & **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | *Various* | Likes: 116 / 492
    Leading the next wave of ultra-realistic, low-latency open-source Text-to-Speech (TTS) architectures.

**🔧 Specialized Models (code, math, medical, embeddings, ASR)**
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | *moonshotai* | Likes: 906 | Downloads: 274,865
    A multimodal code-generation powerhouse that is seeing massive adoption for developer workflows.
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | *WeiboAI* | Likes: 456 | Downloads: 12,148
    A small but mighty Qwen2-based model specifically fine-tuned for deep mathematical reasoning.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | *nvidia* | Likes: 561 | Downloads: 18,809
    An ultra-fast, cache-aware automatic speech recognition (ASR) model built for real-time streaming applications.
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | *microsoft* | Likes: 228 | Downloads: 1,437
    A specialized 4B model fine-tuned by Microsoft to act as an efficient "Explorer SubAgent" for long-context retrieval.

**📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)**
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | *HauhauCS* | Likes: 2,001 | Downloads: 3,730,978
    The undisputed king of local deployment right now, removing safety filters from a vision-capable MoE model with a staggering 3.7M downloads.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | *yuxinlu1* | Likes: 1,832 | Downloads: 268,102
    A heavily customized, locally compressed (GGUF) build of Gemma-4 tuned specifically for complex coding and reasoning.
*   **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** | *DavidAU* | Likes: 406 | Downloads: 588,753
    A quintessential "Frankenstein" merge—maximizing reasoning, coding abilities, and context windows for advanced local users.
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** & **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | *unsloth* | Likes: 175 / 316
    Unsloth continues to provide the essential service of making massive flagship models fit onto consumer hardware via dynamic quantization.

---

**3. Ecosystem Signal**
The open-weight ecosystem is currently defined by two major forces: the **Mixture-of-Experts (MoE) dominance** and the **uncensored local AI boom**. Base model families like Qwen (specifically Qwen 3.5/3.6 MoE) and Gemma-4 are serving as the foundational layers for nearly all trending fine-tunes. 

There is a very clear open-weight vs. proprietary proxy war happening. Proprietary giants (Google, NVIDIA, Microsoft) are releasing highly capable "any-to-any" base models directly to the hub, while community builders (HauhauCS, DavidAU, yuxinlu1) are immediately stripping safety alignments (Uncensored/Obliterated) and optimizing them for `llama.cpp` via GGUF formats. Models like *HauhauCS* racking up 3.7M downloads in a week prove that the demand for raw, locally runnable, uncensored MoE vision models vastly outpaces the download speed of the sanitized corporate base models. Furthermore, "Agentic" fine-tuning is officially a mainstay, with creators explicitly training models for terminal usage and sub-agent context retrieval.

---

**4. Worth Exploring**

*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   *Why:* It represents a true architectural leap. By fusing diffusion models with autoregressive LLMs, it handles complex image-text-to-text tasks in ways traditional Vision-Language Models (VLMs) cannot. It is a glimpse into the future of unified AI systems.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   *Why:* With millions of downloads, this is currently the gold standard for local AI enthusiasts. If you want to understand what power-users are actually running on their home rigs right now, this 35B MoE vision model is the one to test.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   *Why:* A masterclass in efficiency. At just 3B parameters, NVIDIA has created a hyper-precise spatial recognition model. It is highly valuable for developers building robotics, automated quality assurance, or edge-device vision applications without needing massive compute.