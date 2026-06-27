# Hugging Face Trending Models Digest 2026-06-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-27 22:19 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the latest data:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by massive leaps in agentic capabilities, coding, and reasoning, spearheaded by the unofficial releases of Qwen3.5/3.6, Gemma-4, and GLM-5.2. Uncensored and aggressively fine-tuned variants, particularly from community creator HauhauCS, are seeing explosive download numbers, signaling a huge demand for highly capable, unaligned local models. Hardware optimization is also a major theme, with Nvidia leading the charge in NVFP4 quantizations to make 35B Mixture-of-Experts (MoE) models highly accessible. Furthermore, specialized multimodal applications—spanning unlimited OCR, zero-shot object location, and streaming ASR—showcase the maturing of edge and enterprise AI pipelines.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   Author: zai-org | Likes: 2,670 | Downloads: 98,994
    *   *Summary:* A massive, conversational MoE text-generation model that is currently dominating the text leaderboards.
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   Author: MiniMaxAI | Likes: 1,252 | Downloads: 182,714
    *   *Summary:* A highly versatile, multimodal vision-language model bringing enterprise-grade chat and reasoning to the open-weight community.
*   **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**
    *   Author: deepreinforce-ai | Likes: 118 | Downloads: 463
    *   *Summary:* A massive 397B parameter MoE model pushing the absolute boundaries of open-source text generation.
*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
    *   Author: LiquidAI | Likes: 128 | Downloads: 9,791
    *   *Summary:* A highly efficient, ultra-small 230M parameter model designed for edge deployment and lightweight text tasks.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSPark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSPark)**
    *   Author: deepseek-ai | Likes: 118 | Downloads: 0
    *   *Summary:* The brand new flagship text generation release from DeepSeek, boasting advanced distributed processing frameworks.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   Author: baidu | Likes: 1,133 | Downloads: 212,760
    *   *Summary:* A revolutionary feature-extraction pipeline that solves complex, unlimited-length OCR tasks seamlessly.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   Author: krea | Likes: 309 | Downloads: 17,445
    *   *Summary:* A hyper-fast, high-fidelity text-to-image diffusion model based on the popular Krea-2-Raw architecture.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   Author: nvidia | Likes: 2,405 | Downloads: 570,466
    *   *Summary:* An incredibly popular compact vision model capable of zero-shot object location and image-feature extraction.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   Author: nvidia | Likes: 718 | Downloads: 61,857
    *   *Summary:* A low-latency, highly efficient automatic speech recognition model built for real-time streaming applications.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *   Author: microsoft | Likes: 365 | Downloads: 6,447
    *   *Summary:* A highly efficient 4B model specifically tuned to act as an "Explorer SubAgent" for deep context retrieval tasks.
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   Author: WeiboAI | Likes: 741 | Downloads: 57,521
    *   *Summary:* A lightweight, Qwen2-based model achieving exceptional mathematical reasoning and logic capabilities.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   Author: Qwen | Likes: 356 | Downloads: 18,872
    *   *Summary:* A specialized MoE model explicitly trained to power autonomous AI agents and complex tool-use workflows.
*   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
    *   Author: Chunjiang-Intelligence | Likes: 112 | Downloads: 1,328
    *   *Summary:* A niche, security-focused model fine-tuned specifically for cybersecurity applications and penetration testing.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   Author: HauhauCS | Likes: 2,277 | Downloads: 3,331,475
    *   *Summary:* An aggressively uncensored vision MoE fine-tune that has achieved a staggering 3.3M downloads, proving immense demand for unfiltered local AI.
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
    *   Author: nvidia | Likes: 366 | Downloads: 5,022,254
    *   *Summary:* Nvidia's official NVFP4 quantization of the Qwen3.6 model, drastically reducing VRAM requirements while maintaining full precision capabilities.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   Author: yuxinlu1 | Likes: 2,424 | Downloads: 536,130
    *   *Summary:* A highly optimized GGUF format of Gemma-4, specifically tuned for complex coding workflows and terminal operations.
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   Author: unsloth | Likes: 426 | Downloads: 125,230
    *   *Summary:* The go-to community quantization enabling everyday users to run the massive GLM-5.2 MoE locally.

### 3. Ecosystem Signal
The current ecosystem is defined by the rapid institutional shift toward **Mixture-of-Experts (MoE)** architectures, heavily championed by Qwen 3.5/3.6 and GLM-5.2. These models allow massive parameter counts (up to 397B) to run efficiently on consumer hardware. Open-weight releases continue to outpace proprietary APIs, largely thanks to aggressive hardware optimization. Notably, Nvidia's NVFP4 quantizations (like the Qwen3.6-35B with over 5M downloads) are revolutionizing local deployment, allowing heavy MoEs to run natively on RTX hardware. Meanwhile, the community fine-tuning scene is vibrant: "abliterated" or uncensored models (e.g., HauhauCS variants) are dominating downloads. Specialized coding and agentic GGUFs (Gemma-4, Qwythos) highlight a major push toward models designed specifically for local developer environments and terminal operations.

### 4. Worth Exploring
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: With over 3.3 million downloads, this is arguably the most impactful community release right now. It is a masterclass in balancing massive vision-language MoE capabilities with uncensored, local deployment.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: A massive breakthrough for vision pipelines. Instead of relying on heavy object detection algorithms, this 3B image-text model brings highly accurate, conversational zero-shot bounding box location to edge devices.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**: For developers, this is a must-try. It represents the cutting edge of local coding assistants, specifically formatted for terminal execution and agentic code generation.