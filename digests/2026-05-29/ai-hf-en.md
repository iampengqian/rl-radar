# Hugging Face Trending Models Digest 2026-05-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-28 22:29 UTC

---

Here is the Hugging Face Trending Models Digest for May 29, 2026.

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the next generation of massive open-weight releases and highly efficient MoE (Mixture of Experts) architectures. DeepSeek continues its reign in the open-weight LLM space with the highly anticipated **DeepSeek-V4** series, while the **Qwen3.6** family drives massive community fine-tuning and quantization activity. Multimodal generation is rapidly maturing, highlighted by ByteDance's any-to-any **Lance** model and SulphurAI's impressive text-to-video capabilities. Meanwhile, the sheer download volume for specific audio/speech tasks demonstrates that niche, highly specialized models like **pyannote/speaker-diarization-3.1** are becoming indispensable industry standards. 

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, translation)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **Author:** deepseek-ai | **Likes:** 4,400 | **Downloads:** 5,281,601
    *   The flagship heavyweight text-generation model of the new V4 generation, leading the charts in both popularity and sheer deployment scale.
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   **Author:** deepseek-ai | **Likes:** 1,275 | **Downloads:** 3,327,898
    *   A lighter, MIT-licensed variant of the V4 architecture designed for blazing-fast conversational inference without sacrificing performance.
*   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
    *   **Author:** openbmb | **Likes:** 490 | **Downloads:** 15,629
    *   A highly compact, 1-billion parameter Llama-based text generation model built for extreme efficiency on edge devices.
*   **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
    *   **Author:** tencent | **Likes:** 1,078 | **Downloads:** 14,600
    *   A compact translation powerhouse from Tencent's Hunyuan team, proving that small, highly specialized models excel in specific linguistic tasks.
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
    *   **Author:** LiquidAI | **Likes:** 104 | **Downloads:** 0
    *   A newly released Liquid Foundation Model utilizing a highly efficient MoE architecture (8B total, 1B active), generating strong early community buzz.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    *   **Author:** bytedance-research | **Likes:** 953 | **Downloads:** 2,506
    *   A versatile "any-to-any" multimodal model capable of seamless image and video generation, pushing the boundaries of unified generative AI.
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   **Author:** SulphurAI | **Likes:** 1,418 | **Downloads:** 1,472,982
    *   A foundational text-to-video model that has instantly captured the attention of the creator community due to its stunning out-of-the-box capabilities.
*   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    *   **Author:** circlestone-labs | **Likes:** 1,579 | **Downloads:** 704,160
    *   A highly popular ComfyUI-compatible diffusion model, reflecting the ongoing trend of customized, high-fidelity image generation workflows.
*   **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
    *   **Author:** openbmb | **Likes:** 1,045 | **Downloads:** 388,525
    *   The latest iteration of the immensely popular MiniCPM vision-language model, offering robust image-text-to-text capabilities.
*   **[microsoft/Lens](https://huggingface.co/microsoft/Lens) & [microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)**
    *   **Author:** microsoft | **Likes:** 135 / 124 | **Downloads:** 1,061 / 1,478
    *   Microsoft's new flagship text-to-image diffusion models, backed by recent academic research, aiming to compete at the top tier of open-source image gen.
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
    *   **Author:** Supertone | **Likes:** 725 | **Downloads:** 52,022
    *   A state-of-the-art text-to-speech synthesis model gaining rapid adoption for its highly natural voice generation.
*   **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
    *   **Author:** meituan-longcat | **Likes:** 366 | **Downloads:** 0
    *   A highly anticipated multi-modal pipeline generating hyper-realistic video avatars from audio and text prompts.

#### 🔧 Specialized Models (code, math, medical, embeddings, extraction)
*   **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
    *   **Author:** pyannote | **Likes:** 2,043 | **Downloads:** 9,845,884
    *   An absolute juggernaut in the audio space, this model remains the undisputed industry standard for voice isolation and speaker diarization.
*   **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**
    *   **Author:** NemoStation | **Likes:** 430 | **Downloads:** 13,855
    *   A specialized video-text-to-text model designed for advanced video captioning and multimodal comprehension.
*   **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
    *   **Author:** numind | **Likes:** 183 | **Downloads:** 44,827
    *   A highly targeted vision-language model fine-tuned specifically for extracting structured text and data from images.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **Author:** nvidia | **Likes:** 178 | **Downloads:** 1,755
    *   A compact, 3-billion parameter multimodal model by Nvidia built for precise object detection and feature extraction.
*   **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
    *   **Author:** nvidia | **Likes:** 160 | **Downloads:** 335
    *   A specialized diffusion-based model tailored for high-fidelity image super-resolution and image-to-image enhancement.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, local inference)
*   **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
    *   **Author:** unsloth | **Likes:** 404 | **Downloads:** 686,839
    *   A highly optimized GGUF quantization of the Qwen3.6 MoE architecture, allowing massive LLMs to run efficiently on local consumer hardware.
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/Qwen/Qwen3.6-27B)**
    *   **Author:** unsloth | **Likes:** 531 | **Downloads:** 806,874
    *   Another crucial local-inference release by Unsloth, bringing the dense Qwen3.6 vision-language capabilities to standard CPUs and GPUs.
*   **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)**
    *   **Author:** Jackrong | **Likes:** 151 | **Downloads:** 65,968
    *   A highly capable community vision/text GGUF quantization ensuring maximum compatibility with llama.cpp backends.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 995 | **Downloads:** 1,956,558
    *   A completely unrestricted, aggressive fine-tune of the Qwen3.6 MoE model that has exploded in popularity for limitless generation.
*   **[OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)**
    *   **Author:** OBLITERATUS | **Likes:** 111 | **Downloads:** 13,911
    *   A notable community effort to strip all safety guardrails from the base Qwen3.6-27B text generation model.

### 3. Ecosystem Signal
The current Hugging Face landscape reveals a definitive shift toward Mixture-of-Experts (MoE) and highly capable vision-language models, largely spearheaded by the Qwen3.6 family. We are seeing a "sizesqueeze": rather than just massive dense models, users are flocking to highly efficient active-parameter models like Qwen3.6-35B-A3B and LiquidAI's LFM2.5 that offer premium performance at a fraction of the compute cost. Unsurprisingly, DeepSeek's V4 series shows that open-weight frontier models can still rival proprietary releases in massive adoption rates. 

Furthermore, the localization and edge-AI ecosystems have never been stronger. Unrestricted, uncensored models (e.g., HauhauCS and OBLITERATUS) dominate the download charts, highlighting a sustained demand for unaligned models within the community. Alongside this, the staggering download numbers of Unsloth's GGUF quantizations indicate that local, offline inference is now a default use-case rather than a niche hobby. Finally, single-purpose task models—like pyannote for audio diarization and NuExtract for document parsing—prove that specialized utility vastly outpaces generalist models when it comes to actual enterprise integration.

### 4. Worth Exploring
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**: As an "any-to-any" multimodal model, Lance represents the future of generative AI. It is highly worth studying to see how major research labs are unifying text, image, and video generation into a single cohesive architecture rather than separate diffusion/LM pipelines.
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**: With only 1 billion active parameters out of 8 billion total, this model is a masterclass in MoE efficiency. Developers running local applications should explore this to see how MoE drastically reduces latency and memory footprints without sacrificing reasoning power.
*   **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**: A perfect example of where vision-language models are heading in production. Rather than generic chatting, NuExtract3 focuses solely on structured data extraction from images, making it an invaluable tool for developers building RAG systems or document-processing pipelines.