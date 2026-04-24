# Hugging Face Trending Models Digest 2026-04-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-24 01:09 UTC

---

Here is the structured Hugging Face Trending Models Digest for April 24, 2026.

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the massive wave of Qwen 3.6 and Google Gemma 4 releases, with community fine-tunes and quantizations rapidly following suit. MoE (Mixture of Experts) architectures and highly compressed quantizations are dominating the downloads leaderboard, indicating a strong push towards efficient, scalable local deployment. Uncensored and "abliterated" variants of top-tier models are seeing massive community engagement alongside advanced reasoning distillations from proprietary models like Claude 3.5/4.6. Finally, major tech players like Tencent, NVIDIA, and Baidu are expanding the frontiers of 3D world generation, hardware-specific quantization, and open-weight image synthesis.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Author: Qwen | Likes: 652 | Downloads: 23,964
    The latest dense 27B parameter conversational LLM from Qwen, setting a new baseline for mid-scale reasoning.
*   **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | Author: MiniMaxAI | Likes: 1,041 | Downloads: 463,243
    A highly capable and heavily downloaded text-generation model showcasing MiniMax's competitive open-weight LLM capabilities.
*   **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | Author: zai-org | Likes: 1,481 | Downloads: 182,748
    An advanced MoE-based conversational LLM (utilizing Deep Sparse Attention) gaining massive traction in the open-source community.
*   **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** | Author: tencent | Likes: 96 | Downloads: 13
    A newly released preview of Tencent’s latest text-generation model, sparking early interest in its conversational capabilities.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | Author: google | Likes: 2,313 | Downloads: 5,103,971
    Google's highly anticipated 31B instruction-tuned multimodal model, leading the charts in both user likes and absolute downloads.
*   **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | Author: moonshotai | Likes: 888 | Downloads: 125,825
    A top-tier image-text-to-text foundational model leveraging compressed-tensors to efficiently handle multimodal workloads.
*   **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | Author: google | Likes: 809 | Downloads: 3,004,998
    A highly popular edge-ready any-to-any multimodal Gemma 4 variant, combining vision and language in a compact 4B parameter size.
*   **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | Author: tencent | Likes: 577 | Downloads: 0
    A cutting-edge image-to-3D world model generating huge community hype despite currently having gated/zero public downloads.
*   **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | Author: nvidia | Likes: 263 | Downloads: 364
    NVIDIA's latest advanced image-to-3D foundational model, pushing the boundaries of spatial generation and world modeling.
*   **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | Author: baidu | Likes: 542 | Downloads: 6,394
    Baidu's powerful 8B parameter text-to-image model, released under the flexible Apache 2.0 license for the diffusion community.
*   **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | Author: openbmb | Likes: 1,223 | Downloads: 81,729
    A highly scalable, multilingual text-to-speech (TTS) model bringing expressive audio generation to the open community.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | Author: openai | Likes: 561 | Downloads: 1,888
    A token-classification tool from OpenAI designed to detect and scrub personally identifiable information (PII) from text datasets.
*   **[robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map)** | Author: robbyant | Likes: 161 | Downloads: 0
    A specialized, research-backed spatial mapping utility (arxiv:2604.14141) tailored for geography-based LLM tasks.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | Author: unsloth | Likes: 708 | Downloads: 1,283,534
    The most downloaded model of the week, allowing local users to run Qwen's powerful MoE architecture highly efficiently.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 402 | Downloads: 350,262
    An aggressively uncensored GGUF fine-tune of Qwen3.6 MoE, seeing massive download numbers for unrestricted usage.
*   **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | Author: OBLITERATUS | Likes: 482 | Downloads: 90,064
    An "abliterated" version of Gemma 4 E4B, stripped of its safety refusal mechanisms for unrestricted text generation.
*   **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | Author: hesamation | Likes: 167 | Downloads: 63,121
    A highly specialized GGUF fine-tune transferring the reasoning patterns of Anthropic's Claude into the open Qwen MoE architecture.
*   **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | Author: Jackrong | Likes: 193 | Downloads: 63,745
    A "frankenmerge" combining the capabilities of Qwen 3.5 and GLM models to create a highly capable mid-scale reasoning model.
*   **[RedHatAI/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/RedHatAI/Qwen3.6-35B-A3B-NVFP4)** | Author: RedHatAI | Likes: 89 | Downloads: 298,020
    A hardware-optimized NVFP4 quantization of Qwen3.6 engineered specifically for ultra-fast deployment via vLLM.
*   **[Qwen/Qwen3.6-35B-A3B-FP8](https://huggingface.co/Qwen/Qwen3.6-35B-A3B-FP8)** | Author: Qwen | Likes: 168 | Downloads: 708,701
    The official FP8 quantization of the Qwen 3.6 MoE model, securing massive downloads due to its perfect balance of size and speed.

### 3. Ecosystem Signal
The Qwen 3.5/3.6 and Gemma 4 model families are undeniably directing the current open-weight momentum, dominating both official release charts and community-driven derivatives. A clear industry shift is occurring toward Mixture of Experts (MoE) architectures, with models like Qwen3.6-35B-A3B and GLM-5.1 offering massive parameter counts while keeping active compute incredibly low. 

Consequently, quantization (especially GGUF, FP8, and NVIDIA's NVFP4) is experiencing a massive surge, acting as the primary bridge between enterprise-scale models and consumer hardware. Furthermore, the open-source community is actively working to bypass corporate RLHF constraints. "Uncensored" and "abliterated" variants (e.g., HauhauCS, OBLITERATUS) are routinely capturing hundreds of thousands of downloads. Meanwhile, community "frankenmerges" and proprietary reasoning distillations (blending Claude's reasoning into open LLMs) illustrate a vibrant modding ecosystem. Finally, we are seeing a notable expansion beyond text into 3D world generation (Tencent, NVIDIA) and highly expressive audio (VoxCPM2), signaling that open-weight multimodal is rapidly maturing.

### 4. Worth Exploring
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**: With over 5 million downloads and 2,000+ likes in a short window, this is currently the gold standard for open-weight instruction tuning. It is highly worth exploring as a benchmark for your own custom LLM pipelines.
*   **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**: Despite sitting at 0 downloads (likely due to strict gating or an upcoming release structure), the sheer amount of likes makes this image-to-3D model a tantalizing prospect for developers looking to build spatial or gaming AI workflows. 
*   **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**: A fascinating experiment in cross-distillation. It is worth studying and testing locally to see how well the complex reasoning capabilities of proprietary frontier models (Claude) actually transfer into an open, highly compressed MoE architecture.