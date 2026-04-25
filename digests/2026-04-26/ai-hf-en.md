# Hugging Face Trending Models Digest 2026-04-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-25 22:06 UTC

---

# Hugging Face Trending Models Digest (2026-04-26)

## 1. Today's Highlights
This week's Hugging Face trending charts are dominated by the highly anticipated releases of DeepSeek-V4 and the versatile Qwen3.6 series. Major tech players are aggressively pushing multimodal boundaries, with Google's Gemma-4 leading in absolute downloads while community quantizations for Qwen's Mixture-of-Experts (MoE) architectures shatter download records. Tencent and Nvidia are signaling a strong industry pivot towards 3D spatial world models. Meanwhile, the open-source community remains highly active, focusing heavily on uncensored model variants, reasoning distillations from proprietary giants, and experimental flash-attention weights.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, base models)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **Author:** deepseek-ai | **Likes:** 2,675 | **Downloads:** 78,864
    *   The flagship release of the DeepSeek-V4 generation, trending as the most liked model of the week for its advanced conversational text generation capabilities.
*   **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**
    *   **Author:** zai-org | **Likes:** 1,512 | **Downloads:** 217,889
    *   A highly popular Mixture-of-Experts text-generation model gaining massive traction for its efficient Deep Sparse Attention architecture.
*   **[MiniMaxai/MiniMax-M2.7](https://huggingface.co/MiniMaxai/MiniMax-M2.7)**
    *   **Author:** MiniMaxai | **Likes:** 1,065 | **Downloads:** 477,205
    *   A heavy-hitting conversational LLM making waves this week with nearly half a million downloads, signaling strong enterprise and developer adoption.
*   **[deepseek-ai/DeepSeek-V4-Pro-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-Base)** & **[DeepSeek-V4-Flash-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Base)**
    *   **Author:** deepseek-ai | **Likes:** 207 / 155 | **Downloads:** 804 / 1,866
    *   The foundational base weights for DeepSeek’s newest models, released in FP8 format for developers looking to build custom fine-tunes.

### 🎨 Multimodal & Generation (Image, video, audio, text-to-X)
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   **Author:** google | **Likes:** 2,358 | **Downloads:** 5,770,677
    *   An instruction-tuned image-text-to-text powerhouse dominating the ecosystem with nearly 6 million weekly downloads and immense community approval.
*   **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
    *   **Author:** moonshotai | **Likes:** 1,024 | **Downloads:** 291,840
    *   A highly efficient multimodal vision-language model utilizing compressed tensors to achieve widespread adoption.
*   **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**
    *   **Author:** openbmb | **Likes:** 1,234 | **Downloads:** 97,967
    *   A massively multilingual text-to-speech model making a splash on the leaderboard for its impressive voice generation capabilities.
*   **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** & **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)**
    *   **Authors:** tencent / nvidia | **Likes:** 601 / 271 | **Downloads:** 2,851 / 540
    *   Next-generation spatial intelligence models mapping 2D images into 3D environments, highlighting a major trend toward world-model architectures. 
*   **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)**
    *   **Author:** baidu | **Likes:** 562 | **Downloads:** 7,517
    *   Baidu's open-source Apache-2.0 licensed 8B text-to-image generation model, re-entering the charts to strong community praise.

### 🔧 Specialized Models (Code, math, medical, embeddings, tooling)
*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    *   **Author:** openai | **Likes:** 748 | **Downloads:** 21,097
    *   A token-classification tool by OpenAI designed to scrub personally identifiable information, trending as a vital utility for safe dataset curation.
*   **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**
    *   **Author:** inclusionAI | **Likes:** 175 | **Downloads:** 281
    *   A novel any-to-any multimodal MoE model pushing the boundaries of feature extraction across disparate data types.

### 📦 Fine-tunes & Quantizations (Community fine-tunes, GGUF, merges)
*   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    *   **Author:** unsloth | **Likes:** 762 | **Downloads:** 1,488,984
    *   The flagship community quantization of the Qwen MoE model, boasting almost 1.5 million downloads as users rush to run it locally.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 429 | **Downloads:** 418,743
    *   A highly downloaded modded vision-language model stripping away safety filters for unrestricted conversational use.
*   **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)**
    *   **Author:** OBLITERATUS | **Likes:** 501 | **Downloads:** 110,832
    *   A community abliteration of Gemma 4, proving the massive demand for open-weight, uncensored variants of Google's latest releases.
*   **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**
    *   **Author:** hesamation | **Likes:** 181 | **Downloads:** 104,757
    *   A fascinating experimental fine-tune attempting to inject the reasoning capabilities of Anthropic's latest Opus model into an open-source Qwen MoE architecture.
*   **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)**
    *   **Author:** Jackrong | **Likes:** 204 | **Downloads:** 73,177
    *   A popular "frankenmerge" combining Qwen and GLM architectures to enhance complex reasoning tasks.

## 3. Ecosystem Signal
The current HF ecosystem is defined by the massive rapid adoption of Mixture-of-Experts (MoE) architectures, particularly the Qwen3.6 family. MoE allows high parameter counts with low active compute, which directly fuels the second major trend: explosive community quantization. GGUF uploads by `unsloth` are dominating the absolute download charts, proving that local inference on consumer hardware remains a primary use case. 

We are also witnessing a clear shift from standard text models to complex multimodal inputs (vision + text) and spatial outputs (3D world generation via Tencent and Nvidia). In the ongoing open-weight vs. proprietary battle, open-weights hold the community's attention, but proprietary giants are bleeding into the open ecosystem via aggressive distillation tactics (e.g., Claude-Opus reasoning data being used to train Qwen models). Furthermore, the rise of models like `openai/privacy-filter` and the massive popularity of "uncensored/abliterated" variants highlight an ecosystem heavily focused on data privacy, model alignment bypassing, and utility maximization. 

## 4. Worth Exploring
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it):** Worth studying simply due to its staggering scale of adoption. With nearly 6 million downloads in a week, exploring its conversational and vision capabilities will give developers a baseline for what the broader market is currently deploying.
*   **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF):** A fascinating model to test the actual limits of knowledge distillation. Comparing its reasoning outputs to base Qwen models provides deep insight into how proprietary chain-of-thought data alters open-source model behavior.
*   **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0):** As the industry shifts from 2D generation to spatial computing, this model offers a glimpse into the next frontier of AI. Testing its image-to-3D capabilities is highly recommended for developers working on agents, robotics, or gaming.