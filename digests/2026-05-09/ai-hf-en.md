# Hugging Face Trending Models Digest 2026-05-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-08 22:16 UTC

---

Here is the Hugging Face Trending Models Digest for May 9, 2026:

### 1. Today's Highlights
This week's Hugging Face trending charts are dominated by major flagship releases and community-driven optimizations. **Google's Gemma 4** and **Qwen's 3.6 series** are fiercely competing for the top spot in the open-weight multimodal and text generation space, with Gemma 4 leading in overall downloads and Qwen 3.6 MoE models seeing massive community adoption. Significant activity is also happening around **DeepSeek-V4**, with both its Pro and Flash variants capturing hundreds of thousands of downloads. Meanwhile, the open-source community is rapidly applying new optimization techniques like "DFlash" and uncensored "abliterations" to these base models, signaling a fast turnaround from official release to community customization. Finally, specialized pipelines like text-to-video and zero-shot voice cloning are seeing a notable surge in popularity.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *Author: deepseek-ai | Likes: 3,755 | Downloads: 1,061,344*
    The latest heavy-weight conversational text generation model in the DeepSeek lineage, trending due to high anticipation and robust performance.
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *Author: deepseek-ai | Likes: 1,000 | Downloads: 848,696*
    A lighter, faster sibling to the V4-Pro, gaining massive traction as an efficient and capable text-generation endpoint.
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *Author: google | Likes: 2,568 | Downloads: 8,731,301*
    Google's flagship 31B instruction-tuned model dominating the charts with nearly 9 million weekly downloads, establishing it as a new open-weight standard.
*   **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
    *Author: XiaomiMiMo | Likes: 485 | Downloads: 26,600*
    Xiaomi’s latest text-generation model trending due to its specialized focus on agent-based workflows and long-context understanding.
*   **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**
    *Author: mistralai | Likes: 301 | Downloads: 21,300*
    A massive 128B parameter model from Mistral, drawing attention for its bilingual (English/French) capabilities and vLLM optimization.
*   **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
    *Author: Zyphra | Likes: 279 | Downloads: 6,810*
    A highly discussed 8B model making waves due to strong baseline eval results and a fully permissive Apache 2.0 license.
*   **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**
    *Author: poolside | Likes: 233 | Downloads: 18,863*
    A specialized text-generation model from Poolside, capturing attention as a highly capable smaller-scale reasoning engine.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    *Author: Qwen | Likes: 1,191 | Downloads: 1,958,217*
    A highly versatile image-text-to-text multimodal model, trending as a go-to architecture for vision-language tasks.
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *Author: Qwen | Likes: 1,676 | Downloads: 3,363,621*
    A Mixture-of-Experts (MoE) multimodal powerhouse, exploding in popularity due to its excellent performance-to-active-parameter ratio.
*   **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)**
    *Author: google | Likes: 161 | Downloads: 33,314*
    An any-to-any multimodal variant of Gemma 4 specifically tuned for agentic and assistant-like workflows.
*   **[google/gemma-4-26B-A4B-it-assistant](https://huggingface.co/google/gemma-4-26B-A4B-it-assistant)**
    *Author: google | Likes: 90 | Downloads: 22,723*
    A highly efficient, MoA-style (Mixture-of-Attention) any-to-any assistant model offering strong capabilities with only 4B active parameters.
*   **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
    *Author: nvidia | Likes: 263 | Downloads: 89,837*
    Nvidia's omnimodal reasoning model, heavily downloaded for combining high-parameter reasoning with a highly efficient active parameter count.
*   **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)**
    *Author: sensenova | Likes: 202 | Downloads: 2,947*
    A feature-extraction and any-to-any multimodal model drawing interest for its Mixture-of-Tokens (MoT) architecture.
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *Author: SulphurAI | Likes: 444 | Downloads: 92,968*
    A base text-to-video model ranking #1 for weekly likes, indicating high community excitement for the Sulphur video generation ecosystem.
*   **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)**
    *Author: TenStrip | Likes: 166 | Downloads: 42,529*
    A highly rated image-to-video model seeing rapid adoption for smooth motion synthesis.
*   **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
    *Author: SeeSee21 | Likes: 239 | Downloads: 5,077*
    A specialized text-to-image diffuser gaining massive likes for its high-quality anime-style generation capabilities.
*   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    *Author: circlestone-labs | Likes: 1,215 | Downloads: 457,892*
    A wildly popular diffusion model (likely ComfyUI integrated) generating huge download numbers for specialized visual workflows.
*   **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
    *Author: k2-fsa | Likes: 811 | Downloads: 2,242,587*
    A zero-shot multilingual text-to-speech model with voice cloning capabilities, surging past 2 million downloads due to its robust performance.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    *Author: openai | Likes: 1,366 | Downloads: 173,110*
    An OpenAI-released token-classification model, trending globally as developers rush to integrate automated PII redaction into their LLM pipelines.
*   **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
    *Author: AngelSlim | Likes: 135 | Downloads: 16,778*
    An extreme 1.25-bit quantized translation model, highly praised for maintaining translation accuracy at an incredibly small footprint.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *Author: froggeric | Likes: 108 | Downloads: 0*
    A vital utility repository trending for providing fixed Jinja chat templates to fix common bugs in Qwen 3.5 implementations.
*   **[talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it)**
    *Author: talkie-lm | Likes: 250 | Downloads: 0*
    A conversational model generating high engagement and likes pre-release, based on its highly anticipated 13b base architecture.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    *Author: unsloth | Likes: 962 | Downloads: 2,500,343*
    Unsloth’s standard GGUF quantization of the Qwen MoE model, accounting for a massive chunk of local inference downloads.
*   **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
    *Author: unsloth | Likes: 626 | Downloads: 1,312,422*
    Another highly downloaded GGUF optimization allowing local users to run Qwen's 27B model efficiently on consumer hardware.
*   **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**
    *Author: dealignai | Likes: 1,489 | Downloads: 156,146*
    An "abliterated" and uncensored MLX fine-tune of Gemma 4, hugely popular among users seeking unmoderated conversational models.
*   **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**
    *Author: DavidAU | Likes: 101 | Downloads: 143,853*
    A deeply customized, uncensored GGUF fine-tune optimized for coding and logic, maintaining strong download numbers within the local AI community.
*   **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)**
    *Author: Jackrong | Likes: 85 | Downloads: 18,981*
    An experimental Qwen/Opus hybrid GGUF merge generating buzz in the open-source merging community.
*   **[Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF)**
    *Author: Jackrong | Likes: 108 | Downloads: 128,635*
    A unique architectural merge of Qwen and DeepSeek architectures, proving highly popular in quantized GGUF formats.
*   **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**
    *Author: z-lab | Likes: 268 | Downloads: 30,478*
    A specialized implementation of Qwen utilizing the new "DFlash" optimization technique for accelerated inference.
*   **[z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)**
    *Author: z-lab | Likes: 65 | Downloads: 2,155*
    An early adoption of DFlash and speculative decoding applied to Google's Gemma 4, showcasing new speed benchmark potentials.

### 3. Ecosystem Signal
The current ecosystem is defined by an intense "scale vs. efficiency" war, with Mixture-of-Experts (MoE) architectures dominating the landscape. Models like **Qwen3.6-35B-A3B** and **Nemotron-3-Nano-Omni** (which pack massive total parameters but only activate a fraction during inference) are seeing disproportionate download numbers, proving that users prioritize high capability alongside low VRAM requirements. 

Google’s **Gemma 4** and Alibaba’s **Qwen 3.6** have firmly established themselves as the premier open-weight families, pushing out proprietary APIs in favor of local deployment. Meanwhile, the fine-tuning community is reacting with unprecedented speed. The immediate proliferation of "abliterated" (uncensored) fine-tunes like *Gemma-4-31B-JANG_4M-CRACK* and extreme low-bit quantizations like *Hy-MT1.5-1.8B-1.25bit* highlights a strong demand for unmoderated, privacy-first, and hyper-efficient local models. The emergence of "DFlash" optimizations and speculative decoding across multiple models also indicates a community-wide push to optimize inference speeds on standard consumer GPUs.

### 4. Worth Exploring
*   **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**: Worth studying for its "Omni" capabilities and highly efficient 30B/3B active parameter MoE architecture, offering a glimpse into the future of high-reasoning, low-footprint edge models.
*   **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**: A vital case study for those interested in MLX and model abliteration, demonstrating the current ceiling for unlocking unrestricted, high-parameter open-weight multimodal models.
*   **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**: A must-try for anyone building multimodal agents; its zero-shot multilingual voice cloning is driving massive adoption, effectively closing the gap between text and natural speech interfaces in local environments.