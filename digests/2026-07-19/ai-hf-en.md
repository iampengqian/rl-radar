# Hugging Face Trending Models Digest 2026-07-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-18 22:13 UTC

---

# Hugging Face Trending Models Digest
*Date: 2026-07-19*

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by massive leaps in extreme quantization and ultra-efficient local deployments. Google's Gemma-4-31B-it is leading the charts in raw adoption, signaling strong community enthusiasm for the latest generation of heavyweight open-weight vision-language models. Meanwhile, the "Bonsai" (Qwen3.5/3.6-based) models are making headlines with 1-bit and 2-bit ternary quantization, allowing massive 27B parameter architectures to run entirely on consumer hardware. Finally, specialized multimodal utilities are seeing explosive growth, with highly-targeted tools for OCR (Baidu, Ovis) and audio diarization (MOSS) racking up millions of downloads.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 4,125 | Downloads: 541,662
    A highly popular Mixture-of-Experts (MoE) text generation model praised for its conversational prowess.
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 829 | Downloads: 13,571
    Tencent's latest generation Hunyuan text model, drawing significant community attention this week.
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | Author: google | Likes: 3,263 | Downloads: 12,608,008
    The flagship 31B instruction-tuned open model from Google, dominating the charts with over 12.6 million downloads.
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | Author: InternScience | Likes: 578 | Downloads: 35,575
    A massive Qwen3.5-based MoE designed for advanced agentic workflows and multimodal text generation.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 2,313 | Downloads: 2,112,869
    A highly downloaded reasoning-focused multimodal model based on Qwen3.5, optimized for a 1M context window.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,863 | Downloads: 2,190,398
    An aggressive, uncensored MoE vision-language model tailored for users seeking unfiltered conversational and reasoning capabilities.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 2,023 | Downloads: 2,088,470
    A specialized feature-extraction model by Baidu handling unbounded image-to-text extraction tasks with high fidelity.
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | Author: thinkingmachines | Likes: 1,056 | Downloads: 12,456
    A new conversational image-text-to-text model gaining rapid traction for its multimodal reasoning.
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | Author: OpenMOSS-Team | Likes: 258 | Downloads: 86,385
    An efficient audio-text-to-text pipeline built for robust transcription and speaker diarization.
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | Author: Wan-AI | Likes: 113 | Downloads: 2,328
    A capable 14B diffusion model focused on high-quality image-to-video (I2V) generation.
*   **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Author: Alissonerdx | Likes: 186 | Downloads: 0
    A trending LoRA for LTX-Video designed to solve identity preservation in text-to-video workflows.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | Author: ATH-MaaS | Likes: 166 | Downloads: 13,750
    A specialized Qwen3.5-based multimodal model fine-tuned specifically for optical character recognition.
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Author: Cactus-Compute | Likes: 266 | Downloads: 935
    A JAX-based architecture focused purely on reliable function-calling and tool-use implementation.
*   **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** | Author: OpenMOSS-Team | Likes: 76 | Downloads: 529
    A real-time feature-extraction model tailored for low-latency video-text-to-text processing.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | Author: prism-ml | Likes: 440 | Downloads: 1,218,815
    The standard 1-bit GGUF release of the Bonsai model, achieving massive download numbers for local AI enthusiasts.
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | Author: prism-ml | Likes: 727 | Downloads: 301,893
    An extreme 2-bit ternary quantization of the 27B Bonsai model, pushing the limits of local hardware constraints.
*   **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | Author: GnLOLot | Likes: 277 | Downloads: 172,409
    A heavily tuned "Thinking" GGUF variant of MiniCPM5-1B, modeled after Claude Opus reasoning patterns.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | Author: froggeric | Likes: 941 | Downloads: 0
    A highly liked Jinja/MLX repository providing critical fixes for Qwen3.5 chat templates.

---

### 3. Ecosystem Signal
The current ecosystem reveals a major industry pivot towards **extreme efficiency and edge deployment**. The Qwen architecture (specifically versions 3.5 and 3.6) serves as the undeniable backbone of the open-weight community right now, heavily dominating the fine-tuning and quantization leaderboards. We are seeing a surge in **sub-2-bit quantization formats**, such as the ternary and 1-bit GGUF/MLX releases by prism-ml (Bonsai), proving that 27B+ MoE models can successfully be compressed for consumer hardware without losing conversational utility. 

Simultaneously, major tech giants are leaning into highly specialized open-weight releases. Google's Gemma-4 and Baidu's Unlimited-OCR are seeing multi-million download months, suggesting that proprietary labs are using Hugging Face to distribute highly capable, niche sub-models (like OCR and general VLM) to capture developer mindshare. Furthermore, community tooling is exceptionally active—the high engagement around chat-template fixes and MoE CPU optimizations indicates a mature, hardware-savvy developer base focused on practical implementation over raw benchmark chasing.

---

### 4. Worth Exploring
1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**: An absolute must-try for benchmarking current open-weight limits. With over 12.6 million downloads, it sets the current standard for open multimodal instruction-following and vision-language tasks.
2. **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**: Developers interested in local deployment should study this model. It showcases the viability of 1-bit MoE quantization on Apple Silicon (MLX), offering a glimpse into the future of running heavyweight models on standard laptops.
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: A highly practical tool worth integrating into document-processing pipelines. Its massive download velocity proves that there is intense demand for unbounded, high-accuracy OCR solutions that don't rely on proprietary APIs.