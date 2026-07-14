# Hugging Face Trending Models Digest 2026-07-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-14 22:17 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data.

### 1. Today's Highlights
This week's Hugging Face trending models showcase a massive surge in Mixture-of-Experts (MoE) architectures, extreme quantization, and multimodal capabilities. Qwen 3.6 continues to dominate the ecosystem, appearing across vision-language, uncensored, and highly compressed NVFP4 formats. Meanwhile, major tech players like Baidu and Tencent are pushing the boundaries of specialized tasks, notably with Baidu's Unlimited-OCR crossing 1.7 million downloads. The community is also moving toward highly efficient, small-footprint reasoning models, as seen in the popularity of ternary 2-bit quantized LLMs and 1B parameter thinking models.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   Author: zai-org | Likes: 3,944 | Downloads: 489,611
    *   A conversational MoE text-generation model making massive waves this week due to its impressive scaling and chat capabilities.
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
    *   Author: tencent | Likes: 779 | Downloads: 10,406
    *   Tencent's latest Hunyuan text-generation model, bringing competitive open-weight LLM performance to the Hub.
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    *   Author: InternScience | Likes: 537 | Downloads: 30,539
    *   An MoE image-text-to-text model designed for advanced agentic workflows and multimodal reasoning.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   Author: baidu | Likes: 1,981 | Downloads: 1,715,301
    *   An incredibly popular image-text-to-text model pushing the boundaries of OCR and feature extraction with massive adoption.
*   **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**
    *   Author: robbyant | Likes: 96 | Downloads: 0
    *   A 14B image-to-video world model optimized for fast, causal video generation.
*   **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
    *   Author: Alissonerdx | Likes: 138 | Downloads: 0
    *   A text-to-video LoRA focused on identity preservation and reference-to-video generation.
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
    *   Author: OpenMOSS-Team | Likes: 188 | Downloads: 65,109
    *   An audio-text-to-text model providing robust transcription and speaker diarization.
*   **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**
    *   Author: nineninesix | Likes: 101 | Downloads: 5,872
    *   A unique Qwen3.5-based text-to-speech model showcasing the expansion of LLM architectures into audio generation.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   Author: yuxinlu1 | Likes: 1,186 | Downloads: 468,629
    *   A highly capable Gemma-4 coding and agentic model specifically tuned for terminal and coding tasks.
*   **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
    *   Author: ATH-MaaS | Likes: 82 | Downloads: 745
    *   A specialized Qwen3.5-based image-text-to-text model fine-tuned specifically for high-performance OCR tasks.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   Author: froggeric | Likes: 899 | Downloads: 0
    *   A crucial utility repository providing fixed Jinja chat templates for Qwen models, solving formatting bugs for local MLX and llama.cpp users.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   Author: empero-ai | Likes: 2,151 | Downloads: 2,006,265
    *   A quantized Qwen3.5 reasoning model fine-tuned with Claude Mythos data, offering a 1M context window with massive download volume.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   Author: HauhauCS | Likes: 2,727 | Downloads: 2,443,871
    *   An aggressive, uncensored vision-language MoE fine-tune of Qwen3.6 that currently dominates the weekly likes and downloads charts.
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   Author: unsloth | Likes: 1,088 | Downloads: 2,904,515
    *   Unsloth's highly optimized GGUF quantization of Qwen3.6-27B featuring Multi-Token Prediction (MTP), leading the platform in total downloads.
*   **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**
    *   Author: unsloth | Likes: 204 | Downloads: 1,599,150
    *   An NVFP4 quantized version of Qwen3.6, demonstrating the industry shift toward extreme precision reduction for running large models on consumer hardware.
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   Author: prism-ml | Likes: 95 | Downloads: 23
    *   An experimental 2-bit ternary quantized model, highlighting the bleeding edge of extreme model compression.
*   **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**
    *   Author: GnLOLot | Likes: 231 | Downloads: 89,892
    *   A tiny 1B parameter MiniCPM model fine-tuned with Claude reasoning traces, optimized for local "thinking" capabilities.

---

### 3. Ecosystem Signal
The current ecosystem is heavily defined by the absolute dominance of Qwen 3.5/3.6 architectures, which serve as the foundational layer for nearly all top-performing multimodal, uncensored, and agentic models. Mixture-of-Experts (MoE) has become the standard architecture, with models like Qwen3.6-35B-A3B and GLM-5.2 balancing high capability with low active parameter counts. 

A prominent trend is the industry-wide shift toward extreme quantization. Standard 4-bit GGUFs are being supplemented by NVFP4 formats and even 2-bit ternary quantization (e.g., prism-ml/Ternary-Bonsai), driven by the need to run 27B+ parameter models on consumer GPUs. Proprietary model distillation continues to thrive, as seen with models referencing "Claude" and "Opus" reasoning traces. Meanwhile, open-weight releases from major Asian tech giants (Baidu, Tencent, Z.ai) are capturing massive download shares in specialized verticals like OCR and conversational AI, proving that open-weight accessibility still drives unparalleled adoption over closed APIs.

---

### 4. Worth Exploring
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: With nearly 2 million downloads, this model is a must-try for anyone building document processing pipelines. It signals a major leap forward in open-source OCR capabilities, likely solving context-length and complex layout issues that plague older vision models.
*   **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**: Developers and researchers should study this model to understand the viability of NVFP4 quantization. It allows massive multimodal models to run efficiently on local hardware without the catastrophic degradation traditionally associated with sub-4-bit quantization.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: As the most liked model on the list, this is a prime example of community demand for uncensored, aggressive MoE fine-tunes. It is highly worth testing to evaluate the upper limits of open-weight alignment removal in multi-modal reasoning tasks.