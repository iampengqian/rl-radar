# Hugging Face Trending Models Digest 2026-07-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-07 22:21 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data.

### 1. Today's Highlights
* Mid-2026 sees a massive surge in **agentic, reasoning, and uncensored LLMs**, driven heavily by community fine-tunes of the Qwen 3.5/3.6 and Gemma 4 architectures. Open-weight vision-language models (VLMs) and specialized multimodal systems, such as Baidu's Unlimited-OCR and NVIDIA's LocateAnything, are dominating the download charts. There is also a clear industry trend towards Mixture-of-Experts (MoE) models that balance massive parameter sizes (e.g., 30B-119B) with highly efficient active parameters (A3B-A6B), alongside a new wave of tabular and spatial foundation models from major tech giants.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,583 | Downloads: 281,584
    *A highly popular conversational MoE model that showcases the next generation of efficient, large-scale text generation.*
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 475 | Downloads: 121
    *Tencent's latest entry in the Hunyuan text-generation family, generating massive community buzz despite its early-stage low download count.*
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | Author: deepseek-ai | Likes: 423 | Downloads: 15,538
    *A highly anticipated text generation release from DeepSeek, pushing the boundaries of open-weight reasoning and architecture design.*
*   **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | Author: meituan-longcat | Likes: 138 | Downloads: 385
    *Meituan’s newest conversational LLM, optimized for extended context handling and text generation tasks.*

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,828 | Downloads: 1,084,945
    *A specialized image-text-to-text model offering unmatched feature extraction and optical character recognition capabilities at scale.*
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,656 | Downloads: 1,424,958
    *A highly downloaded, lightweight spatial foundation model designed for precise visual grounding and image-text-to-text tasks.*
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 539 | Downloads: 123,729
    *A blazing-fast text-to-image diffusion model built for high-quality, low-latency creative generation.*
*   **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)** | Author: eric-venti-seeds | Likes: 95 | Downloads: 0
    *A highly specialized image-to-image LoRA designed to give artists granular control over directional lighting in the Flux2Klein ecosystem.*

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 284 | Downloads: 9,458
    *Google's Tabular Foundation Model, a breakthrough architecture capable of zero-shot classification and regression on structured data.*
*   **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)** | Author: nvidia | Likes: 131 | Downloads: 10,936
    *A massive 30B two-tower architecture tailored for advanced embedding generation and specialized text-generation routing.*
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen | Likes: 560 | Downloads: 60,736
    *An official multimodal MoE explicitly trained to excel in autonomous agentic workflows, tool-use, and complex reasoning.*
*   **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** | Author: mistralai | Likes: 157 | Downloads: 157
    *A gigantic 119B parameter MoE model targeting mathematical reasoning and theorem proving.*

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 1,744 | Downloads: 1,683,711
    *A heavily downloaded GGUF quantization of the Qwythos model, bringing a 1M context window and Claude-like reasoning to local llama.cpp setups.*
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,550 | Downloads: 2,823,988
    *An aggressively uncensored MoE vision-language fine-tune that has absolutely exploded in popularity for unrestricted local deployment.*
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,636 | Downloads: 674,977
    *A highly praised GGUF format fine-tune of Gemma 4, heavily optimized for complex coding environments and terminal-based agentic tasks.*
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Author: unsloth | Likes: 989 | Downloads: 2,842,118
    *A massively downloaded standard quantization by Unsloth, enabling Multi-Token Prediction (MTP) for local Qwen deployments.*

---

### 3. Ecosystem Signal
The current Hugging Face ecosystem is defined by the absolute dominance of **Qwen (versions 3.5 and 3.6)** and **Gemma 4** as the foundational backbones for community fine-tunes, with "Ornith", "Qwythos", and "Qwopus" emerging as prominent sub-families. 

There is a distinct shift toward **agentic utility and uncensored deployments**; users are prioritizing models with massive context windows (up to 1M tokens), tool-use capabilities, and removed safety filters (e.g., *HauhauCS-Aggressive*, *huihui-ai/abliterated*). Concurrently, **Mixture-of-Experts (MoE)** has become the standard architecture for both LLMs and VLMs. Models in the 30B-119B total parameter range with highly efficient ~3B active parameters (A3B) are striking the perfect balance between frontier performance and local/viable inference. 

Furthermore, the open-weight domain is expanding aggressively into **specialized non-text modalities**, evidenced by Google’s TabFM for structured data and NVIDIA's spatial models, proving that the open-source community is looking far beyond standard chatbots. Formats like GGUF and MLX remain critical for democratizing access to these heavy architectures.

---

### 4. Worth Exploring
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: With nearly 3 million downloads, this model represents the pinnacle of current community demand. It is worth studying to see how VLMs are being structurally uncensored and optimized for MoE efficiency locally.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**: As an official release from Qwen aimed explicitly at agentic workflows, this model provides a crucial baseline for comparing how community fine-tunes stack up against purpose-built enterprise agentic architectures. 
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**: A must-try for data scientists and developers. Zero-shot tabular classification and regression represent a massive leap forward for structured data analysis, moving the industry away from traditional gradient-boosted trees.