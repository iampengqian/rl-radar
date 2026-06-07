# Hugging Face Trending Models Digest 2026-06-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-07 22:19 UTC

---

Here is the Hugging Face Trending Models Digest for June 8, 2026:

### 1. Today's Highlights
This week's Hugging Face trending charts are heavily dominated by major next-generation releases and advanced Mixture-of-Experts (MoE) architectures. Google’s Gemma 4 12B debut has instantly captured the community's attention, driving massive download numbers alongside a highly active open-weight quantization ecosystem. In the visual realm, Nvidia launched a comprehensive suite of spatial intelligence, video generation, and rendering models under its Cosmos3 and LocateAnything monikers. Meanwhile, DeepSeek's V4 models continue to shatter download records, and uncensored/quantized community variants like HauhauCS's Qwen3.6 MoE demonstrate the insatiable demand for highly capable, localized text and vision models.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   Author: deepseek-ai | Likes: 4,696 | Downloads: 5,515,325
    *   The flagship heavyweight text generation model of the DeepSeek family, leading the charts in absolute popularity and massive deployment.
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   Author: deepseek-ai | Likes: 1,434 | Downloads: 3,347,429
    *   A highly efficient, MIT-licensed variant of DeepSeek V4 designed for rapid inference and broad accessibility.
*   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
    *   Author: openbmb | Likes: 779 | Downloads: 114,329
    *   An incredibly compact and highly capable 1B parameter LLM, proving that aggressive optimization still yields high performance on edge devices.
*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    *   Author: sapientinc | Likes: 718 | Downloads: 162,822
    *   A specialized 1-billion parameter text generation model gaining traction for its unique reasoning and generative capabilities.
*   **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
    *   Author: nvidia | Likes: 155 | Downloads: 49,784
    *   A gargantuan 550B parameter Mixture-of-Experts model (55B active) representing Nvidia's top-tier push into frontier LLMs.
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
    *   Author: LiquidAI | Likes: 539 | Downloads: 118,326
    *   Liquid AI's latest 8B MoE architectural experiment, utilizing a highly sparse 1B active parameter count for extreme efficiency.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   Author: nvidia | Likes: 1,519 | Downloads: 115,556
    *   A groundbreaking 3B parameter vision-language model enabling precise spatial localization and object detection from complex text prompts.
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   Author: SulphurAI | Likes: 1,585 | Downloads: 1,715,710
    *   A massively popular text-to-video generation model, forked and optimized from Lightricks/LTX-2.3, dominating the generation space this week.
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   Author: google | Likes: 683 | Downloads: 434,969
    *   Google's latest instruction-tuned any-to-any multimodal flagship, setting a new standard for the mid-size 12B weight class.
*   **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
    *   Author: stepfun-ai | Likes: 348 | Downloads: 43,196
    *   A highly accelerated vision-language model from StepFun, excelling in rapid multimodal processing and image-text-to-text tasks.
*   **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)** & **[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)**
    *   Author: nvidia | Likes: 151 / 123 | Downloads: 24,002 / 5,075
    *   Core components of Nvidia's Cosmos3 omni-generative framework, enabling state-of-the-art text-to-world simulation and high-fidelity image synthesis.
*   **[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)**
    *   Author: nvidia | Likes: 114 | Downloads: 4,515
    *   A specialized diffusion pipeline transforming static images into dynamic videos within the Cosmos3 ecosystem.
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *   Author: ideogram-ai | Likes: 345 | Downloads: 4,377
    *   The FP8-quantized version of Ideogram 4, offering incredibly fast and accurate text-to-image generation with minimal quality loss.
*   **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
    *   Author: ByteDance | Likes: 166 | Downloads: 246
    *   A newly introduced image-text-to-video rendering engine showcasing ByteDance's continued push into complex video synthesis.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   Author: nvidia | Likes: 252 | Downloads: 3,439
    *   An ultra-low-latency, cache-aware automatic speech recognition model designed specifically for real-time streaming applications.
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   Author: bosonai | Likes: 191 | Downloads: 7,557
    *   A highly expressive 4B parameter text-to-speech model leveraging Qwen3 architectures for nuanced voice synthesis.
*   **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
    *   Author: google | Likes: 129 | Downloads: 13,338
    *   Google’s latest iteration of the Magenta model, optimized for ultra-low latency text-to-audio and music generation.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
    *   Author: JetBrains | Likes: 249 | Downloads: 16,924
    *   A 12B parameter code-focused MoE model (2.5B active) explicitly designed for chain-of-thought coding assistance and complex software reasoning.
*   **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
    *   Author: PaddlePaddle | Likes: 266 | Downloads: 9,084
    *   A specialized vision-language model built on ERNIE4.5, pushing the boundaries of robust document OCR and parsing.
*   **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
    *   Author: nvidia | Likes: 317 | Downloads: 1,082
    *   A highly targeted diffusion-based model focused on advanced image-to-image super-resolution and detail enhancement.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   Author: HauhauCS | Likes: 1,515 | Downloads: 2,923,564
    *   A massively downloaded, aggressively uncensored GGUF variant of the Qwen3.6 vision-language MoE model tailored for unrestricted local use.
*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   Author: unsloth | Likes: 449 | Downloads: 568,158
    *   Unsloth's highly optimized standard GGUF release of Gemma 4 12B, driving the majority of local inference usage for the model.
*   **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**
    *   Author: unsloth | Likes: 119 | Downloads: 85,842
    *   A Quantization-Aware Training (QAT) version of Gemma 4, offering enhanced accuracy retention over standard GGUF quantization.
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
    *   Author: nvidia | Likes: 200 | Downloads: 1,185,362
    *   Nvidia's official hardware-optimized NVFP4 quantization of the Qwen3.6 MoE, dominating deployment charts on Nvidia RTX setups.
*   **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)**
    *   Author: nvidia | Likes: 130 | Downloads: 39,864
    *   The NVFP4 quantized iteration of the massive Nemotron 3 Ultra, making the 550B parameter model accessible for multi-GPU setups.
*   **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
    *   Author: ideogram-ai | Likes: 233 | Downloads: 3,844
    *   The official NF4-quantized checkpoint of Ideogram 4, optimized for lower VRAM usage without sacrificing significant generation quality.

### 3. Ecosystem Signal
Mixture-of-Experts (MoE) architectures have fully transitioned from a novel trend to an industry standard. Models like Qwen3.6 (35B total, 3B active) and Nemotron (550B total, 55B active) demonstrate that both open-weight startups and major corporations are prioritizing sparse activation to balance high capability with feasible inference costs. Additionally, we are seeing a distinct bifurcation in the open-weight space: proprietary "frontier" models are increasingly omni-modal/any-to-any (like Gemma 4), while grassroots community activity remains fiercely fixated on unrestricted, localized text/vision models (evidenced by the staggering 2.9M downloads of the Qwen3.6 Uncensored fine-tune). 

Furthermore, hardware-level quantization is driving massive deployment volumes. Nvidia's aggressive rollout of NVFP4-quantized models indicates a strong push to lock in ecosystem optimizations for their consumer GPU architectures. Simultaneously, the open-source community standard remains GGUF; Unsloth's immediate quantization support for Gemma 4 generated over 650,000 downloads in record time, proving that accessible, localized inference remains the primary consumption method for state-of-the-art weights.

### 4. Worth Exploring
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: This model represents a leap forward in spatial AI. If you are building robotics, autonomous systems, or advanced retrieval-augmented generation (RAG) workflows that require parsing visual relationships and bounding boxes rather than just image captions, this highly efficient 3B model is a must-try.
*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**: Developers and software engineers should immediately benchmark this model. It is explicitly trained for "thinking" and complex code reasoning, providing an exciting open-weight alternative to proprietary coding assistants.
*   **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**: For local AI practitioners and hardware tinkerers, exploring Quantization-Aware Training (QAT) over standard post-training quantization is highly recommended. This model likely offers a much closer approximation of the base Gemma 4's multimodal capabilities while still fitting comfortably on consumer hardware.