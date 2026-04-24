# Hugging Face Trending Models Digest 2026-04-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-24 22:11 UTC

---

# Hugging Face Trending Models Digest (2026-04-25)

## 1. Today's Highlights
This week's Hugging Face leaderboard is dominated by major flagship releases and a massive wave of community optimizations. **Google's Gemma 4** and **DeepSeek's V4** families are battling for the top spots across downloads and likes, signaling intense competition in the open-weight arena. Qwen's highly efficient MoE architectures, particularly the Qwen3.6 series, are driving unprecedented quantization and uncensored fine-tuning activities by the community. Meanwhile, new modalities are rapidly emerging, highlighted by Tencent and NVIDIA's push into open-weight 3D world models, and OpenAI's surprisingly popular release of a dedicated privacy filtering utility. 

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, reasoning)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **Author:** deepseek-ai | **Likes:** 2,388 | **Downloads:** 30
    *   The flagship heavyweight text-generation model in the new V4 series, generating massive hype (reflected in likes) despite restricted early-access downloads.
*   **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**
    *   **Author:** zai-org | **Likes:** 1,501 | **Downloads:** 204,327
    *   A powerful new conversational text-generation model featuring a Mixture-of-Experts architecture, showing strong early adoption.
*   **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)**
    *   **Author:** MiniMaxAI | **Likes:** 1,055 | **Downloads:** 469,402
    *   A highly capable and widely downloaded open-weight conversational LLM proving to be a strong competitor to Western frontier models.
*   **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)**
    *   **Author:** tencent | **Likes:** 132 | **Downloads:** 1,235
    *   An advanced preview of Tencent's upcoming text-generation model, currently being tested by the community.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X, 3D)
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   **Author:** google | **Likes:** 2,336 | **Downloads:** 5,457,597
    *   Google's latest instruction-tuned multimodal powerhouse, dominating the charts with over 5 million weekly downloads.
*   **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
    *   **Author:** moonshotai | **Likes:** 973 | **Downloads:** 208,251
    *   A highly anticipated image-text-to-text model utilizing compressed-tensors for highly efficient multimodal feature extraction.
*   **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**
    *   **Author:** openbmb | **Likes:** 1,227 | **Downloads:** 94,124
    *   A highly versatile multilingual text-to-speech model meeting surging demand for open-weight audio generation.
*   **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)**
    *   **Author:** baidu | **Likes:** 551 | **Downloads:** 7,102
    *   Baidu's new 8B parameter text-to-image diffusion model, entering the competitive open-weight image generation space.
*   **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** & **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)**
    *   **Authors:** tencent, nvidia | **Likes:** 592 / 266 | **Downloads:** 2,741 / 498
    *   Cutting-edge image-to-3D and world generation models from two major tech titans, signaling a breakthrough trend in spatial AI.
*   **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**
    *   **Author:** inclusionAI | **Likes:** 164 | **Downloads:** 103
    *   A unique any-to-any MoE model merging diffusers and transformers for universal generation tasks.

### 🔧 Specialized Models (code, math, medical, embeddings, tools)
*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    *   **Author:** openai | **Likes:** 679 | **Downloads:** 12,664
    *   A specialized token-classification utility from OpenAI designed to scrub personally identifiable information, addressing a critical enterprise need.
*   **[robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map)**
    *   **Author:** robbyant | **Likes:** 167 | **Downloads:** 0
    *   A novel mapping/embedding concept tied to recent academic research (arxiv:2604.14141) generating buzz despite zero downloadable weights yet.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    *   **Author:** unsloth | **Likes:** 739 | **Downloads:** 1,397,244
    *   The most downloaded community quant of the week, allowing users to easily run Qwen's incredibly efficient 35B MoE model on local hardware.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 415 | **Downloads:** 388,836
    *   A highly popular community fine-tune stripping safety filters from the multimodal Qwen3.6 MoE model.
*   **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
    *   **Author:** Jiunsong | **Likes:** 473 | **Downloads:** 141,390
    *   An aggressively optimized, uncensored GGUF conversion built for fast local inference using llama.cpp.
*   **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)**
    *   **Author:** OBLITERATUS | **Likes:** 493 | **Downloads:** 101,144
    *   Another massive community abliteration (safety-filter removal) of Google's lightweight Gemma 4 edge model.
*   **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)**
    *   **Author:** Jackrong | **Likes:** 200 | **Downloads:** 70,227
    *   A fascinating experimental "frankenmerge" blending Qwen and GLM architectures to enhance reasoning capabilities.

## 3. Ecosystem Signal
The ecosystem is currently defined by the rapid maturation of Mixture-of-Experts (MoE) models and the explosion of 3D/spatial AI. Qwen’s 3.6 MoE series is dominating community activity, proving that users highly favor architectures that balance massive total parameters (35B) with incredibly low active parameters (3B) for local execution. Furthermore, the friction between enterprise safety and community desires is highly visible: nearly every top-tier base model (Gemma 4, Qwen 3.6) immediately spawns highly downloaded "uncensored" or "abliterated" variants. 

On the proprietary front, OpenAI's sudden drop of a practical, open-weight utility (privacy-filter) suggests a strategic pivot toward releasing targeted infrastructure tools rather than just frontier LLMs. Meanwhile, the presence of two separate world/3D models from Tencent and NVIDIA indicates that the next major frontier for open-source generative AI is moving decisively beyond 2D text and image into 3D spatial generation. 

## 4. Worth Exploring
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**: Absolutely essential to study if only to understand the current state-of-the-art in multimodal efficiency. With over 5 million downloads in a single week, it has effectively become the new default benchmark for the open-source community.
*   **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**: Highly recommended for developers looking to build next-generation interactive media or simulation environments. It represents a major leap in accessible, open-weight image-to-3D world modeling.
*   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**: The perfect specimen for local AI enthusiasts and hardware optimizers. It showcases the sheer power of MoE design, offering near-frontier intelligence at a fraction of the typical VRAM footprint.