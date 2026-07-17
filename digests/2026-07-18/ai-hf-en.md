# Hugging Face Trending Models Digest 2026-07-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-17 22:13 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
Today's Hugging Face trending charts are dominated by massive leaps in extreme model quantization and high-performance multimodal architectures. The community is aggressively pushing the boundaries of local hardware capabilities, evidenced by the massive download volumes for 1-bit and 2-bit quantized models like `Bonsai-27B-gguf`. Vision and OCR capabilities are also seeing a major surge, with specialized image-text models like `Qwythos-9B` and `Unlimited-OCR` racking up millions of downloads. Furthermore, legacy tech giants like Tencent, Baidu, and ZAI are maintaining a strong foothold, contributing highly capable base and specialized open-weight models to the ecosystem.

### 2. Trending Models

**🧠 Language Models (LLMs, chat models, instruction-tuned)**
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 4,070 | Downloads: 534,698
    A highly popular Mixture-of-Experts (MoE) text generation model making waves for its advanced conversational abilities.
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 819 | Downloads: 12,719
    Tencent’s latest generation Hunyuan large language model, drawing significant attention and community likes for its base capabilities.
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | Author: InternScience | Likes: 571 | Downloads: 34,066
    A multimodal MoE model built for advanced conversational and agentic text tasks, showing strong momentum in the agent space.
*   **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** | Author: GnLOLot | Likes: 133 | Downloads: 4,840
    A heavily fine-tuned, lightweight MiniCPM model designed to mimic high-end reasoning and "thinking" behaviors of premium models.

**🎨 Multimodal & Generation (image, video, audio, text-to-X)**
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 2,269 | Downloads: 2,096,147
    A quantized, reasoning-focused image-text-to-text model that is seeing explosive adoption for local multimodal tasks.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 2,018 | Downloads: 1,992,355
    Baidu's highly capable feature-extraction and OCR model, dominating the charts with nearly 2 million downloads.
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | Author: thinkingmachines | Likes: 945 | Downloads: 7,870
    A new multimodal model designed for conversational image-text-to-text tasks, generating massive hype (leading the weekly likes).
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | Author: Wan-AI | Likes: 106 | Downloads: 2,185
    A 14B diffusion-based image-to-video model that showcases the growing capability of open-weight video generation.

**🔧 Specialized Models (code, math, medical, embeddings)**
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | Author: OpenMOSS-Team | Likes: 248 | Downloads: 83,160
    A specialized transformers model built for efficient audio transcription and speaker diarization.
*   **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | Author: ATH-MaaS | Likes: 152 | Downloads: 10,795
    A dedicated image-text-to-text pipeline model optimized specifically for high-performance OCR tasks.
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Author: Cactus-Compute | Likes: 256 | Downloads: 874
    A JAX-based specialized model tailored for highly accurate function-calling and tool-use applications.

**📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)**
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | Author: prism-ml | Likes: 386 | Downloads: 1,045,182
    A 1-bit quantized version of the Qwen-based Bonsai 27B model, dominating downloads by making large models runnable on consumer hardware.
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | Author: prism-ml | Likes: 672 | Downloads: 200,774
    A 2-bit ternary quantization of the Bonsai 27B model, showing massive community interest in extreme compression techniques.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,824 | Downloads: 2,295,313
    A massively popular, uncensored MoE community fine-tune of Qwen 3.6, proving the high demand for unfiltered local vision/text models.
*   **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** | Author: unsloth | Likes: 224 | Downloads: 1,924,495
    Unsloth’s highly optimized NVFP4 quantization of Qwen 3.6, bringing efficient inference to the masses.

### 3. Ecosystem Signal
The current ecosystem is defined by two primary forces: **extreme quantization** and the **dominance of Qwen-based architectures**. Models built upon Qwen 3.5 and 3.6 are ubiquitous across LLM, multimodal, and fine-tuning categories. Meanwhile, "Bonsai" (a Qwen derivative) is proving that 1-bit and 2-bit ternary quantization (via GGUF and MLX) are no longer just novelties, but mainstream necessities, as evidenced by over a million downloads for `prism-ml`'s Bonsai releases. 

There is also a clear trend of high demand for specialized utility models over generalist chatbots. OCR engines like `baidu/Unlimited-OCR` and audio diarization tools (`MOSS-Transcribe-Diarize`) are seeing massive enterprise-level download volumes. While major Chinese tech companies (Baidu, Tencent, ZAI) are providing incredibly strong foundational open-weights, the community—led by creators like `unsloth`, `HauhauCS`, and `froggeric` (who provided crucial Jinja chat-template fixes for Qwen)—is doing the heavy lifting to make these models viable, uncensored, and accessible on local consumer hardware.

### 4. Worth Exploring
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**: If you are interested in running large models locally, this is a must-test. The 1-bit quantization approach (along with its 2-bit ternary counterpart) offers a fascinating glimpse into the future of memory-efficient, on-device inference for 27B+ parameter models.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: With over 2.2 million downloads and massive engagement, this MoE uncensored model is currently the gold standard for examining how the community pushes the boundaries of uncensored, multimodal local AI.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**: While not a standalone model, this repository is highly worth studying for developers. It highlights critical implementation details (Jinja templates) required to make modern architectures like Qwen 3.5 function correctly in local inference engines like MLX.