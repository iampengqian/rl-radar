# Hugging Face Trending Models Digest 2026-07-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-10 22:19 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
Today's Hugging Face trending models showcase a massive surge in highly optimized, enterprise-grade open-weight models, particularly with the rapid adoption of Mixture-of-Experts (MoE) architectures across the board. Qwen 3.5 and 3.6 dominate the community fine-tuning space, driving massive download numbers for both local GGUF quantizations and specialized vision-language adaptations. Chinese tech giants like Tencent, Baidu, and Meituan are making significant pushes into the open-source ecosystem with diverse offerings ranging from conversational MoE to unlimited context OCR. Furthermore, NVIDIA's aggressive deployment of NVFP4 quantization and specialized routing models highlights a maturing focus on edge deployment and high-efficiency inference.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 662 | Downloads: 6,923
    A new text-generation powerhouse from Tencent capturing significant attention for its hunyuan-based architecture.
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,777 | Downloads: 392,655
    A highly popular conversational MoE model showing massive traction due to its robust reasoning capabilities.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | Author: deepseek-ai | Likes: 463 | Downloads: 33,088
    The latest generation text-generation release from DeepSeek, continuing their legacy of top-tier open-weight LLMs.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | Author: deepreinforce-ai | Likes: 835 | Downloads: 1,085,554
    A highly downloaded 35B parameter model formatted for widespread local deployment and endpoint compatibility.
*   **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | Author: meituan-longcat | Likes: 170 | Downloads: 1,308
    A conversational model designed to tackle ultra-long context windows, gaining buzz for its efficiency.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,921 | Downloads: 1,319,683
    A breakout multimodal model offering unprecedented image-text-to-text extraction capabilities, driving over a million downloads.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,698 | Downloads: 1,456,269
    A lightweight 3B parameter vision model redefining zero-shot spatial awareness and object localization.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 575 | Downloads: 164,525
    A high-speed text-to-image diffusion model beloved by the community for its raw aesthetic generation capabilities.
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | Author: OpenMOSS-Team | Likes: 96 | Downloads: 5,919
    An essential audio-text-to-text pipeline gaining traction for its accurate dual transcription and speaker separation.
*   **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Author: Alissonerdx | Likes: 79 | Downloads: 0
    An innovative text-to-video LoRA utilizing LTX-2 for flawless identity preservation in generated video content.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 345 | Downloads: 18,626
    A novel foundation model explicitly built for zero-shot tabular classification and regression tasks.
*   **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | Author: SupraLabs | Likes: 85 | Downloads: 1,160
    An ultra-fast 51M parameter LLM-based router designed to efficiently direct agentic traffic and queries.
*   **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** | Author: nvidia | Likes: 100 | Downloads: 23,404
    A highly complex math and logic benchmarking model optimized using NVIDIA's new NVFP4 quantization format.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,619 | Downloads: 2,660,170
    A massively popular uncensored MoE vision-language fine-tune of Qwen 3.6, breaking download records in the local AI community.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 1,971 | Downloads: 1,909,705
    A heavily refined Qwen 3.5 GGUF quantization fine-tuned to mimic Claude's reasoning style over a 1M context window.
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Author: unsloth | Likes: 1,036 | Downloads: 2,895,457
    Unsloth's highly optimized GGUF release of Qwen 3.6, dominating the charts due to its seamless local deployment.
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1 | Likes: 1,134 | Downloads: 427,668
    A specialized Gemma 4 quantization fine-tuned specifically for agentic terminal workflows and coding tasks.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | Author: froggeric | Likes: 833 | Downloads: 0
    A crucial Jinja template fix for Qwen 3.5 models on MLX, generating high buzz for solving widespread local inference bugs.

### 3. Ecosystem Signal
The current ecosystem is defined by the undisputed dominance of the **Qwen 3.5/3.6 model family**, which serves as the foundational architecture for the vast majority of top-trending fine-tunes and quantizations. **Mixture-of-Experts (MoE)** has clearly become the standard, with models like GLM-5.2, DeepSeek-V4, and Qwen utilizing MoE to deliver massive parameter counts (up to 119B in Mistral's Leanstral) while keeping active parameters small (A3B, A6B, A9B) for practical inference. 

There is a noticeable trend of major Chinese tech giants (Baidu, Tencent, Meituan) commoditizing highly specialized capabilities—such as unlimited context OCR and long-context conversations—as open-weights. Meanwhile, the open-weight community is leaning heavily into **"uncensored" and reasoning-focused fine-tunes**, pushing models to emulate proprietary reasoning loops (like Claude). Quantization remains vital for adoption; GGUF formats and NVIDIA's new NVFP4 optimization are bridging the gap between massive vision-language models and consumer-grade local hardware.

### 4. Worth Exploring
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: With over 1.3 million downloads, this model is a must-try for anyone working in document automation or RAG pipelines, promising to solve persistent bottlenecks in extracting text from complex or arbitrarily large images.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: Worth studying to see how the community successfully strips safety guardrails from multimodal MoE architectures while maintaining peak performance and vision capabilities.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: A fascinating pivot from traditional LLMs, this highly efficient 3B model introduces cutting-edge zero-shot object localization and is incredibly useful for developers building robotics or advanced computer vision applications.