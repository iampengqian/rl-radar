# Hugging Face Trending Models Digest 2026-06-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-02 22:38 UTC

---

Here is the Hugging Face Trending Models Digest for June 3, 2026:

### 1. Today's Highlights
This week's Hugging Face leaderboard is dominated by the highly anticipated releases of DeepSeek-V4 and Qwen3.6, both of which are seeing massive download volumes and community engagement. Multimodal capabilities continue to expand rapidly, with a clear industry pivot toward MoE (Mixture of Experts) architectures that balance high performance with low active parameter counts. NVIDIA has made a massive splash by launching a comprehensive suite of generation models under the Cosmos3 umbrella, alongside specialized spatial and vision models. Meanwhile, open-source edge computing and consumer hardware support remain stronger than ever, evidenced by the sheer volume of GGUF quantizations dominating the trending charts.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | Likes: 4,566 | Downloads: 5,829,042
    *The flagship heavyweight generative model leading the charts in both community likes and absolute downloads this week.*
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | Likes: 1,361 | Downloads: 3,525,218
    *A highly popular, lightweight, and MIT-licensed variant of the V4 series optimized for faster inference and edge deployment.*
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | Likes: 438 | Downloads: 47,742
    *A highly efficient liquid foundation model utilizing an advanced Mixture-of-Experts architecture (activating 1B out of 8B parameters).*
*   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | Likes: 730 | Downloads: 57,683
    *A remarkably compact yet powerful text generation model perfect for on-device and constrained computing environments.*

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | Likes: 1,577 | Downloads: 5,243,648
    *The official base release of the highly anticipated Qwen3.6 model, boasting impressive native image-text-to-text multimodal capabilities.*
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | Likes: 957 | Downloads: 61,604
    *A cutting-edge spatial intelligence model designed for precise feature extraction and multimodal object localization.*
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | Likes: 1,511 | Downloads: 1,663,826
    *A massively downloaded text-to-video base model pushing the boundaries of open-weight video generation.*
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | Likes: 1,010 | Downloads: 3,192
    *A versatile any-to-any multimodal model capable of handling complex cross-modal image and video generation tasks.*
*   **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Super)** | nvidia | Likes: 96/108 | Downloads: 2,830+
    *NVIDIA's flagship omni-generation series (featured across Text2Image, Image2Video, Nano, and Super variants) dominating the visual creation space.*
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | Likes: 778 | Downloads: 59,026
    *A highly trending ONNX-based text-to-speech model acclaimed for its natural speech synthesis capabilities.*

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | Likes: 1,591 | Downloads: 300,247
    *A highly sought-after token-classification tool by OpenAI designed to scrub personally identifiable information from text.*
*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | Likes: 119 | Downloads: 799
    *A specialized code generation model featuring a "Thinking" protocol and MoE architecture tailored for IDE integration.*
*   **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | Likes: 183 | Downloads: 4,003
    *A vision-language model explicitly fine-tuned for advanced optical character recognition and document parsing.*

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | Likes: 1,274 | Downloads: 2,573,320
    *An aggressively uncensored community fine-tune of the Qwen3.6 vision-language model that has astonishingly topped the download charts.*
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | Likes: 609 | Downloads: 982,631
    *A highly optimized GGUF conversion enabling seamless local deployment of the massive Qwen3.6 multimodal model.*
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | Likes: 135 | Downloads: 313,480
    *An official hardware-optimized quantization by NVIDIA utilizing their proprietary Model Optimizer for enhanced inference speed.*

### 3. Ecosystem Signal
The current Hugging Face ecosystem is defined by the ubiquity of **Mixture of Experts (MoE)** architectures, which allow massive models (up to 35B parameters) to maintain highly efficient active parameter footprints (e.g., 1B to 3B), driving massive adoption among developers with consumer-grade hardware. 

**Qwen3.6** is undoubtedly the current darling of the open-source community, acting as the foundation for the majority of top-trending GGUF quantizations and community fine-tunes. Meanwhile, **DeepSeek-V4** dominates the raw scale and proprietary-to-open-weight pipeline with its Pro and Flash iterations. 

There is a clear trend of major tech companies pivoting to provide specialized, proprietary tooling rather than just base models. For instance, OpenAI releasing a targeted token-classification `privacy-filter`, JetBrains focusing specifically on code-generation, and NVIDIA leveraging custom quantization formats (NVFP4). Furthermore, edge computing remains a priority, as the GGUF format continues to see massive download numbers, proving that local, offline inference is an uncompromising demand for the open-source community.

### 4. Worth Exploring
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**: As an MIT-licensed heavyweight model with over 3.5M downloads in a week, it is currently the premier model to test for high-speed, cutting-edge reasoning tasks without proprietary licensing restrictions.
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**: The "any-to-any" multimodal tag is incredibly rare and powerful. If you are looking to build pipelines that smoothly transition between text, audio, and complex video generation, this experimental architecture is worth deep exploration.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: Spatial intelligence and precise object localization are the next frontiers for AI agents. This 3B model is highly optimized and worth trying for anyone building robotics, AR, or advanced computer vision applications.