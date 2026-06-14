# Hugging Face Trending Models Digest 2026-06-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-14 22:21 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the latest data:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the release of next-generation foundational models, notably **Google's Gemma 4** family and **DeepSeek-V4-Pro**, both of which are seeing massive adoption. There is a distinct industry-wide pivot toward "Any-to-Any" unified architectures, with multimodal and image-text-to-text pipelines far outnumbering traditional text-only models. Community efforts are largely focused on aggressive quantization (GGUF, QAT) to run these massive models locally, alongside a high demand for "uncensored" and specialized coding blends. Furthermore, spatial intelligence and high-fidelity image generation are seeing fresh breakthroughs with models like Nvidia's LocateAnything and Ideogram 4.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **Author:** deepseek-ai | **Likes:** 4,829 | **Downloads:** 3,075,369
    *   **Description:** A powerhouse text-generation model dominating the charts this week with massive download numbers, signaling a major leap in open-weight LLM capabilities.
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   **Author:** google | **Likes:** 1,008 | **Downloads:** 1,084,405
    *   **Description:** Google's latest instruction-tuned unified model that processes any-to-any inputs, serving as the highly anticipated backbone for the current generation of edge AI applications.
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   **Author:** MiniMaxAI | **Likes:** 482 | **Downloads:** 6,643
    *   **Description:** A highly anticipated multimodal (VL) text generation model pushing the boundaries of context windows and open-weight conversational AI.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **Author:** nvidia | **Likes:** 1,995 | **Downloads:** 75,201
    *   **Description:** A highly popular spatial intelligence model redefining precise object detection and localization using combined image and text prompts.
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *   **Author:** ideogram-ai | **Likes:** 534 | **Downloads:** 8,263
    *   **Description:** The FP8-quantized version of Ideogram's state-of-the-art text-to-image diffusion model, prized for its unmatched typography and prompt adherence.
*   **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
    *   **Author:** zai-org | **Likes:** 172 | **Downloads:** 0
    *   **Description:** An advanced pose-driven image-to-video diffusion model making waves for its highly realistic character animation capabilities.
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   **Author:** bosonai | **Likes:** 425 | **Downloads:** 35,122
    *   **Description:** A lightweight, highly efficient text-to-speech model built on Qwen3 architecture, driving high-quality multimodal audio generation.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   **Author:** moonshotai | **Likes:** 617 | **Downloads:** 15,145
    *   **Description:** A top-tier multimodal coding assistant fine-tuned for complex programming tasks and deep repository-level reasoning.
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   **Author:** CohereLabs | **Likes:** 368 | **Downloads:** 9,932
    *   **Description:** A compact, highly efficient Mixture-of-Experts (MoE) model tailored specifically for fast, on-device code generation and completion.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   **Author:** nvidia | **Likes:** 412 | **Downloads:** 4,505
    *   **Description:** A specialized, cache-aware automatic speech recognition model built for ultra-low latency, real-time streaming transcription.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   **Author:** unsloth | **Likes:** 595 | **Downloads:** 926,372
    *   **Description:** The community's go-to GGUF quantization of Gemma 4, allowing users to run Google's flagship model locally on consumer hardware.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 1,805 | **Downloads:** 2,516,709
    *   **Description:** A massively popular uncensored MoE vision uncensored fine-tune that strips away safety alignments for unrestricted local use.
*   **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
    *   **Author:** DavidAU | **Likes:** 335 | **Downloads:** 375,966
    *   **Description:** An aggressively merged, uncensored "reasoning and coding" Frankenstein model that tests the absolute limits of GGUF matrix blending.

---

### 3. Ecosystem Signal
The current ecosystem reflects a rapid maturation of open-weight MoE (Mixture of Experts) architectures and unified modalities. Google's **Gemma 4** and the **Qwen 3.5/3.6** families are dominating the hub, acting as the foundational backbones for almost all top-trending fine-tunes. We are seeing a decisive shift away from traditional text-only LLMs; the "Any-to-Any" and "Image-Text-to-Text" pipelines are now the industry standard. 

Open-weight momentum is staggeringly high, with DeepSeek-V4 and Gemma 4 variants pulling millions of downloads in mere days. Meanwhile, proprietary models are increasingly open-sourcing specialized components (like Nvidia's ASR and Ideogram's image models) to capture developer mindshare. On the community side, there is an intense appetite for local deployment. Quantizers like Unsloth are seeing massive traction by providing QAT and GGUF formats immediately upon base model release. Furthermore, the high download numbers of "Uncensored" and deeply merged reasoning models (like those by HauhauCS and DavidAU) prove a robust underground demand for unaligned, highly specialized local agents.

---

### 4. Worth Exploring
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro):** A must-test for anyone serious about LLMs. Its massive download velocity suggests it outperforms previous open-weight champions in reasoning and coding. 
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B):** Worth studying for developers interested in spatial intelligence and robotics. At just 3B parameters, it proves that highly accurate, real-time object localization can be achieved efficiently on the edge.
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it):** A fascinating architectural anomaly. It bridges the gap between autoregressive LLMs and diffusion mechanisms for conversational multimodal generation, making it a highly educational model for next-gen AI research.