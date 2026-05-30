# Hugging Face Trending Models Digest 2026-05-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-30 22:17 UTC

---

Here is the structured Hugging Face Trending Models Digest for May 31, 2026:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the transition to Mixture-of-Experts (MoE) architectures and highly capable vision-language models. **DeepSeek-V4** and **Qwen 3.6** are battling for the top spot in both massive raw downloads and community likes, highlighting the demand for efficient yet powerful open-weight LLMs. Multimodal capabilities are now standard, with models like ByteDance's **Lance** and Tencent's **Hy-MT2** pushing the boundaries of video generation and translation. Furthermore, edge computing and local deployment continue to surge, evidenced by the massive community engagement around GGUF quantizations and smaller, highly specialized SLMs like the 1B-parameter **MiniCPM5**.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **Author:** deepseek-ai | **Likes:** 4,462 | **Downloads:** 5,918,111
    *   The flagship heavy-weight LLM of the week, dominating the charts in both community acclaim and raw deployment volume.
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   **Author:** deepseek-ai | **Likes:** 1,302 | **Downloads:** 3,427,926
    *   A highly efficient, MIT-licensed iteration of the V4 architecture built for rapid inference and high-throughput applications.
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
    *   **Author:** LiquidAI | **Likes:** 269 | **Downloads:** 17,084
    *   Liquid AI's cutting-edge 8B MoE model that activates only 1B parameters, offering extreme efficiency for standard text-generation tasks.
*   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
    *   **Author:** openbmb | **Likes:** 604 | **Downloads:** 28,793
    *   A remarkably capable sub-2B parameter small language model trending due to its punchy performance on edge devices.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   **Author:** Qwen | **Likes:** 1,954 | **Downloads:** 5,728,121
    *   A massively downloaded MoE multimodal powerhouse utilizing only 3B active parameters out of 35B for highly efficient image-text processing.
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    *   **Author:** bytedance-research | **Likes:** 981 | **Downloads:** 2,856
    *   An ambitious "any-to-any" multimodal generator capturing attention for its unified approach to image and video generation.
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   **Author:** SulphurAI | **Likes:** 1,453 | **Downloads:** 1,557,858
    *   A base text-to-video model that has rapidly scaled to over 1.5 million downloads, signaling strong demand for open-weight video generators.
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
    *   **Author:** Supertone | **Likes:** 744 | **Downloads:** 55,382
    *   A highly regarded text-to-speech model pushing the boundaries of open-weight speech synthesis.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
    *   **Author:** pyannote | **Likes:** 2,073 | **Downloads:** 9,771,170
    *   An industry-standard audio pipeline holding the #1 spot for overall downloads due to its unmatched voice recognition and segmentation capabilities.
*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    *   **Author:** openai | **Likes:** 1,570 | **Downloads:** 304,691
    *   OpenAI's token-classification tool trending as enterprises increasingly prioritize data anonymization and privacy-preserving pipelines.
*   **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
    *   **Author:** tencent | **Likes:** 432 | **Downloads:** 3,833
    *   A highly efficient 30B MoE translation model designed to knock down language barriers with minimal compute overhead.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **Author:** nvidia | **Likes:** 489 | **Downloads:** 18,327
    *   A specialized 3B parameter vision model by Nvidia tailored for precise grounding and object localization tasks.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 1,098 | **Downloads:** 2,227,885
    *   An aggressively uncensored community fine-tune of the Qwen3.6 MoE architecture, dominating user interest with over 2.2 million downloads.
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   **Author:** unsloth | **Likes:** 564 | **Downloads:** 877,938
    *   A highly optimized GGUF quantization enabling smooth local deployment of Qwen's dense vision-language models on consumer hardware.
*   **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)**
    *   **Author:** LiquidAI | **Likes:** 122 | **Downloads:** 23,685
    *   The official llama.cpp-compatible quantization of Liquid's impressive MoE model, explicitly geared toward edge computing.

### 3. Ecosystem Signal
The current landscape heavily reflects a structural pivot toward **Mixture-of-Experts (MoE)**. Models like `Qwen3.6-35B-A3B`, `LiquidAI/LFM2.5-8B-A1B`, and `tencent/Hy-MT2-30B-A3B` confirm that both major labs and the open community are moving past dense models to maximize capability-per-FLOP. 

**Open-weight dominance is undeniable**, spearheaded by DeepSeek-V4 and Qwen 3.6, which are effectively outpacing proprietary APIs in raw community adoption. Notably, the "uncensored" and local deployment ecosystems are thriving. `HauhauCS`'s aggressive fine-tune racking up 2.2M downloads alongside massive traffic for `unsloth`'s GGUF quantizations indicates that users aren't just downloading frontier models—they are actively adapting them for unrestricted, local, and offline use via tools like `llama.cpp`. Furthermore, modalities beyond text—specifically advanced text-to-video (`Sulphur-2`), any-to-any generation (`Lance`), and enterprise-grade diarization (`pyannote`)—are maturing from niche experiments into highly downloaded foundational tools.

### 4. Worth Exploring
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**: Sitting at nearly 5 million downloads, this dense vision-language model is currently the gold standard for open-source multimodal tasks, making it a must-try for developers building modern VLM applications.
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**: As an "any-to-any" multimodal model, Lance represents the cutting edge of unified AI architectures. It is absolutely worth studying to see how leading labs are merging text, image, and video generation into a single cohesive network.
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**: This model's 8B total / 1B active parameter MoE configuration is a masterpiece of efficiency engineering. Anyone interested in deploying highly capable LLMs on extremely constrained edge environments should explore this repository.