# Hugging Face Trending Models Digest 2026-06-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-13 22:20 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the June 14, 2026 data:

### 1. Today's Highlights
Today's Hugging Face trending list is dominated by massive open-weight releases and cutting-edge multimodal advancements. Google's **Gemma 4** family is seeing explosive traction, capturing millions of downloads across its base and community-quantized iterations. There is a clear, aggressive industry pivot toward unified "any-to-any" and image-text-to-video models, highlighted by ByteDance's Bernini-R and Ideogram-4. Meanwhile, the open-source community continues to push the boundaries of model accessibility, with heavy fine-tuning activity focused on removing safety alignments ("uncensored/obliterated") and optimizing massive MoE architectures for local hardware via GGUF formats.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **Author:** deepseek-ai | **Likes:** 4,812 | **Downloads:** 3,250,404
    *   *Why it's trending:* An absolute powerhouse in text generation, leading the charts in both community approval and raw deployment volume.
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   **Author:** google | **Likes:** 993 | **Downloads:** 1,005,883
    *   *Why it's trending:* Google's highly anticipated unified Gemma 4 model, serving as an incredibly versatile foundational any-to-any model with massive adoption.
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   **Author:** CohereLabs | **Likes:** 353 | **Downloads:** 6,533
    *   *Why it's trending:* A highly efficient, conversational MoE text-generation model specifically tuned for coding tasks.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **Author:** nvidia | **Likes:** 1,956 | **Downloads:** 69,443
    *   *Why it's trending:* NVIDIA's compact 3B parameter model that brings highly accurate visual grounding and image-feature extraction to enterprise pipelines.
*   **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
    *   **Author:** ByteDance | **Likes:** 235 | **Downloads:** 426
    *   *Why it's trending:* A next-generation image-text-to-video model pushing the boundaries of automated dynamic content rendering.
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *   **Author:** ideogram-ai | **Likes:** 516 | **Downloads:** 6,535
    *   *Why it's trending:* The FP8 iteration of Ideogram's state-of-the-art text-to-image diffusion engine, offering drastically reduced VRAM requirements.
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   **Author:** bosonai | **Likes:** 412 | **Downloads:** 32,162
    *   *Why it's trending:* A highly capable 4B parameter multimodal model delivering ultra-realistic text-to-speech generation.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   **Author:** moonshotai | **Likes:** 509 | **Downloads:** 1,689
    *   *Why it's trending:* An advanced, compressed-tensor multimodal architecture engineered specifically for complex software engineering and coding benchmarks.
*   **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)**
    *   **Author:** XiaomiMiMo | **Likes:** 105 | **Downloads:** 3,590
    *   *Why it's trending:* Xiaomi’s highly optimized text-generation model built specifically for autonomous agentic workflows.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   **Author:** nvidia | **Likes:** 400 | **Downloads:** 3,975
    *   *Why it's trending:* A hyper-fast, cache-aware 0.6B model designed for ultra-low latency streaming automatic speech recognition.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 1,760 | **Downloads:** 2,411,202
    *   *Why it's trending:* The undisputed king of community fine-tunes this week, stripping away safety filters from the Qwen3.6 MoE architecture with staggering download volume.
*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   **Author:** unsloth | **Likes:** 580 | **Downloads:** 872,895
    *   *Why it's trending:* Unsloth's lightning-fast GGUF conversion of Gemma 4, allowing users to run the model locally on consumer hardware.
*   **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
    *   **Author:** OBLITERATUS | **Likes:** 273 | **Downloads:** 50,289
    *   *Why it's trending:* A community-driven effort to completely remove alignment mechanisms (abliterate) from Google's Gemma 4 for unrestricted generation.

---

### 3. Ecosystem Signal
The current ecosystem is defined by two massive concurrent trends: the **Gemma 4 dominance** and the **mainstreaming of "uncensored" MoEs**. Google's Gemma 4 architecture has effectively taken over the mid-weight tier (12B-26B). The community is rapidly adopting its "any-to-any" unified pipeline, with local deployment heavily catalyzed by Unsloth’s QAT/GGUF quantizations. 

Simultaneously, we are witnessing a paradigm shift in how open-weight architectures like Qwen 3.5/3.6 are being consumed. The staggering 2.4 million downloads of HauhauCS's aggressively uncensored Qwen 3.6 MoE variant signal a relentless developer demand for raw, unaligned base models over corporate-controlled instruct versions. Furthermore, proprietary giants like ByteDance and Ideogram are continuing to embrace open-weights for specialized generation tasks (text-to-video, text-to-image), utilizing FP8 and NF4 quantizations to bypass consumer VRAM bottlenecks. 

---

### 4. Worth Exploring
1.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: With nearly 2.5 million downloads in a week, this model is a must-test to understand the current apex of community alignment removal and MoE efficiency on local setups.
2.  **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**: As the foundational "any-to-any" architecture driving most of today's quantizations, studying its native capabilities is essential for understanding the baseline of the current HF leaderboard.
3.  **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**: A fascinating glimpse into the next generation of multimodal rendering, offering developers a chance to test state-of-the-art image-text-to-video diffusion frameworks.