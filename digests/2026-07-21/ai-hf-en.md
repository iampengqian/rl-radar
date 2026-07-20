# Hugging Face Trending Models Digest 2026-07-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-20 22:17 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the July 21, 2026 data:

### 1. Today's Highlights
Today's Hugging Face trending list is dominated by radical breakthroughs in model efficiency and extreme quantization, signaling a massive community shift toward accessible, local AI. **1-bit and 2-bit architectures**, pioneered by `prism-ml`'s Bonsai series, are achieving hundreds of thousands of downloads by drastically reducing memory footprints without crippling performance. Multimodal capabilities continue to evolve rapidly, with highly specialized tools like Baidu's Unlimited-OCR and OpenMOSS-Team's real-time audio/video models seeing massive adoption. Additionally, the open-weight community is aggressively pushing the boundaries of model distillation and uncensored fine-tuning, particularly around the Qwen 3.5/3.6 and MiniCPM5 families.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 4,218 | Downloads: 531,947
    *A highly capable text-generation model utilizing a mixture-of-experts (MoE) architecture, currently dominating the charts as a top-tier open-weight conversational backbone.*
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | Author: google | Likes: 3,295 | Downloads: 11,987,240
    *Google's latest 31B instruction-tuned model leading the ecosystem in raw downloads, praised for its seamless image-text-to-text capabilities and massive enterprise adoption.*
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 846 | Downloads: 13,698
    *The newest iteration in Tencent's Hunyuan text-generation series, generating buzz as a powerful foundational model for community fine-tuning.*
*   **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** | Author: GnLOLot | Likes: 159 | Downloads: 5,494
    *A hyper-efficient 1B parameter model fine-tuned to mimic Opus-level reasoning and "thinking" capabilities, proving that small models can punch above their weight.*

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 2,417 | Downloads: 2,122,848
    *An absolute powerhouse in the image-text-to-text space, solving complex OCR tasks at scale and racking up millions of downloads.*
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | Author: thinkingmachines | Likes: 1,253 | Downloads: 13,462
    *A highly conversational multimodal model gaining rapid traction for its fluid integration of image-text-to-text reasoning.*
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | Author: Wan-AI | Likes: 143 | Downloads: 2,408
    *A specialized 14B diffusion-based model focused on high-fidelity image-to-video (I2V) generation.*
*   **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** | Author: OpenMOSS-Team | Likes: 87 | Downloads: 544
    *A real-time video-text-to-text vision-language model pushing the boundaries of low-latency multimodal streaming.*

#### 🔧 Specialized Models (code, math, medical, embeddings, robotics)
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | Author: moonshotai | Likes: 1,171 | Downloads: 713,992
    *A compressed-tensor powerhouse designed specifically for coding and feature extraction, showcasing the Kimi family's dominance in developer tools.*
*   **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** | Author: nvidia | Likes: 85 | Downloads: 61,708
    *NVIDIA's latest sentence-similarity embedding model, rapidly becoming the standard for highly accurate RAG pipelines.*
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | Author: openbmb | Likes: 100 | Downloads: 0
    *A cutting-edge Vision-Language-Action (VLA) model built for robotics manipulation, signaling a major trend toward physical AI applications.*

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** & **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | Author: prism-ml | Likes: 537+847 | Downloads: 1.6M+
    *A revolutionary series bringing 1-bit and 2-bit ternary quantization to large models, breaking download records by making 27B models runnable on consumer hardware.*
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,931 | Downloads: 2,007,025
    *A massively popular GGUF MoE uncensored fine-tune of Qwen 3.6, showing immense demand for aggressive, unfiltered local vision and text models.*
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 2,365 | Downloads: 2,117,323
    *A highly-quantized reasoning model with a 1M context window, blending Qwen 3.5 architecture with Claude-style persona fine-tuning.*

---

### 3. Ecosystem Signal
The current ecosystem is defined by two massive, intersecting waves: **extreme quantization** and **uncensored MoE fine-tunes**. The Qwen ecosystem (specifically versions 3.5 and 3.6) has effectively taken over the community fine-tuning space, largely replacing Llama architectures for mid-sized MoE deployments. Meanwhile, `prism-ml`'s 1-bit and 2-bit ternary models prove that the open-weight community is exhausted by VRAM limitations, prioritizing footprint reduction without sacrificing parameter count. 

On the proprietary side, Google's Gemma 4 continues to be an enterprise darling with over 11 million downloads, but the real momentum is at the edge. The proliferation of GGUF and MLX formats—optimized for Mac and local CPU/GPU inference—shows that developers want deployable, localized AI. Furthermore, specialized multimodal tasks (OCR, real-time video, VLA robotics) are no longer bleeding-edge; they are dominating the daily trending boards. 

### 4. Worth Exploring
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf):** If you are interested in the future of local AI, you must study this model. The 1-bit quantization approach allows a 27B parameter model to run on hardware previously restricted to 8B models, representing a massive leap in accessibility.
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip):** A fascinating glimpse into the future of physical AI. As a Vision-Language-Action (VLA) model, it bridges generative text models with actual robotics manipulation, a niche that is just starting to explode.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR):** With over 2 million downloads, this model sets the current standard for practical, enterprise-grade multimodal text extraction. It is highly recommended for developers building RAG systems that rely on complex document parsing.