# Hugging Face Trending Models Digest 2026-06-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-16 22:35 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the latest updates:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the release of next-generation foundational models, including **Google's Gemma-4**, **DeepSeek-V4**, and **Qwen 3.5/3.6 architectures**. There is a massive surge in unified "any-to-any" and multimodal models capable of natively processing text, images, and audio. Community efforts are largely focused on aggressive quantization (GGUF) and "uncensored" or highly specialized reasoning fine-tunes. Furthermore, edge-computing and localized deployments are accelerating, evidenced by the immense download volumes for sub-15B parameter models optimized for consumer hardware.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *Author: deepseek-ai | Likes: 4,894 | Downloads: 2,829,747*
    What it is: A massive, highly anticipated next-generation text generation model that is dominating the charts in both likes and downloads.
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *Author: google | Likes: 942 | Downloads: 375,974*
    What it is: Google's latest 26B parameter conversational model utilizing a unique diffusion-based architecture for enhanced text and image-text processing.
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *Author: google | Likes: 1,051 | Downloads: 1,223,383*
    What it is: The official instruction-tuned 12B parameter release of the Gemma 4 family, featuring a unified any-to-any pipeline.
*   **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**
    *Author: prefeitura-rio | Likes: 315 | Downloads: 189,744*
    What it is: A colossal 397B parameter Mixture-of-Experts (MoE) model representing an impressive large-scale open-weight release from a municipal AI initiative.
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *Author: zai-org | Likes: 242 | Downloads: 0*
    What it is: A newly released, highly discussed conversational MoE model that is generating significant buzz despite just landing on the hub.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *Author: nvidia | Likes: 2,100 | Downloads: 98,698*
    What it is: A highly popular, lightweight 3B parameter vision-language model pushing the boundaries of precise visual grounding and feature extraction.
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *Author: MiniMaxAI | Likes: 1,009 | Downloads: 25,064*
    What it is: A powerful new multimodal vision model from MiniMax aimed at complex, multi-turn image-text understanding.
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *Author: ideogram-ai | Likes: 559 | Downloads: 12,466*
    What it is: The latest state-of-the-art text-to-image generation model, heavily trending due to its unparalleled text-rendering capabilities.
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *Author: bosonai | Likes: 464 | Downloads: 43,361*
    What it is: A highly capable, lightweight 4B parameter text-to-speech and multimodal audio model.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *Author: nvidia | Likes: 461 | Downloads: 5,777*
    What it is: An ultra-fast, cache-aware streaming Automatic Speech Recognition (ASR) model designed for real-time edge deployment.
*   **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
    *Author: zai-org | Likes: 204 | Downloads: 0*
    What it is: An advanced pose-driven image-to-video character animation diffusion model just introduced to the community.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *Author: moonshotai | Likes: 797 | Downloads: 102,206*
    What it is: A premier specialized vision and coding model tailored for complex software engineering tasks and code reasoning.
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *Author: CohereLabs | Likes: 412 | Downloads: 12,129*
    What it is: A highly efficient, conversational MoE architecture trained specifically for competitive programming and code generation.
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *Author: microsoft | Likes: 158 | Downloads: 192*
    What it is: A compact 4B model optimized for rapid retrieval and processing within Explorer SubAgent environments.
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *Author: WeiboAI | Likes: 149 | Downloads: 0*
    What it is: A lightweight, math-focused reasoning model trained to break down complex arithmetic and logic problems step-by-step.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *Author: HauhauCS | Likes: 1,886 | Downloads: 2,716,651*
    What it is: An aggressively uncensored GGUF fine-tune of the Qwen 3.6 MoE that has achieved staggering download numbers by removing all safety guardrails.
*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) & [unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)**
    *Author: unsloth | Likes: 630 / 287 | Downloads: 1,009,602 / 120,435*
    What it is: Unsloth's rapid-release GGUF quantizations of Google's new Gemma models, allowing local users to run them efficiently via `llama.cpp`.
*   **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
    *Author: DavidAU | Likes: 369 | Downloads: 366,279*
    What it is: A massive, heavily amalgamated "Franken-model" designed to combine deep reasoning, coding prowess, and uncensored outputs.
*   **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
    *Author: OBLITERATUS | Likes: 335 | Downloads: 76,044*
    What it is: A community fine-tune that ablates the alignment and refusal mechanisms of Google's Gemma-4 for unrestricted local use.

### 3. Ecosystem Signal
The current ecosystem indicates a major transitional phase into 4th-generation flagship architectures (Gemma-4, DeepSeek-V4, Qwen-3.5/3.6). **Mixture-of-Experts (MoE)** has solidified its position as the standard for both massive enterprise models (like Rio-3.5-397B) and local fine-tunes, allowing high parameter counts with manageable inference costs. 

There is a distinct bifurcation in model deployment: massive, aligned foundational models are dominating direct API and cloud downloads, while the community space is fiercely dedicated to aggressive "uncensored," "obliterated," and reasoning-focused fine-tunes. **Unsloth** continues to be the backbone of the local AI movement, providing critical GGUF and QAT conversions within hours of base model drops. Furthermore, "Any-to-Any" pipelines are officially mainstream—Google's push with unified Gemma models signals that rigid, single-modal pipelines are being phased out in favor of holistic, multi-input architectures.

### 4. Worth Exploring
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: A must-try for developers interested in practical computer vision. At just 3B parameters, it represents the new frontier of highly efficient, edge-ready vision models capable of complex grounding tasks without requiring massive cloud compute.
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**: This model is highly worth studying from an architectural standpoint. Combining diffusion concepts with standard autoregressive text generation in an MoE layout offers a fascinating glimpse into the future of unified foundation models.
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**: With nearly 3 million downloads in a short window, this is currently the gold standard for open-weight text generation. Anyone building RAG pipelines or complex agentic workflows should benchmark their current setups against V4's reasoning capabilities.