# Hugging Face Trending Models Digest 2026-07-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-09 22:27 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

# Hugging Face Trending Models Digest

## 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the unofficial "Fable5" and "Claude" distillation wave, with community creators releasing highly popular, reasoning-enhanced fine-tunes across multiple model families like Qwen, Gemma, and MiniCPM. Multimodal capabilities are expanding rapidly beyond standard image-text-to-text, highlighted by specialized models for unlimited OCR (Baidu) and spatial location (Nvidia's LocateAnything). Major Chinese tech giants continue to push the boundaries of open-weight foundation models, evidenced by massive new releases from Tencent (Hy3), Zhipu AI (GLM-5.2), and DeepSeek (V4-Pro). Furthermore, quantization formats like GGUF and NVFP4 remain critical for democratizing access to heavy MoE architectures.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 603 | Downloads: 5,572
    A new massive text-generation model from Tencent's Hunyuan team, generating buzz as a highly capable conversational foundation model.
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,722 | Downloads: 362,300
    The latest iteration of the popular GLM architecture, trending due to its massive parameter count and advanced conversational abilities.
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | Author: InternScience | Likes: 429 | Downloads: 23,112
    A Qwen3.5-based Mixture-of-Experts model designed specifically for complex autonomous agent workflows.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | Author: deepseek-ai | Likes: 457 | Downloads: 29,230
    The newest heavyweight text-generation release from DeepSeek, pushing the boundaries of open-source reasoning.

### 🎨 Multimodal & Generation
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,901 | Downloads: 1,246,042
    A highly anticipated specialized image-text-to-text model setting a new standard for high-density and unlimited optical character recognition.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,685 | Downloads: 1,447,244
    A highly efficient 3B parameter multimodal model capable of precise spatial feature extraction and object localization.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 569 | Downloads: 157,302
    A lightning-fast text-to-image diffusers model trending for its high-fidelity aesthetic generation and improved prompt adherence.

### 🔧 Specialized Models
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 328 | Downloads: 16,374
    Google's foundational model for tabular data, bringing powerful zero-shot classification and regression capabilities to structured data.
*   **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | Author: SupraLabs | Likes: 73 | Downloads: 722
    An ultra-lightweight Llama-based model engineered specifically for highly efficient LLM routing tasks.
*   **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** | Author: nvidia | Likes: 84 | Downloads: 16,959
    A massive, hardware-optimized model designed specifically to tackle complex mathematical and logical "puzzle" reasoning.

### 📦 Fine-tunes & Quantizations
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,592 | Downloads: 2,716,428
    A wildly popular uncensored GGUF quantization of the Qwen 3.6 MoE architecture, heavily downloaded for local, unfiltered vision and text tasks.
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Author: unsloth | Likes: 1,024 | Downloads: 2,894,918
    Unsloth's highly optimized GGUF release of the Qwen3.6 model, dominating the download charts for efficient local inference.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,666 | Downloads: 703,735
    A specialized coding fine-tune of Gemma 4 infused with the trending "Fable5" reasoning framework, optimized for local GGUF runners.
*   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** | Author: nvidia | Likes: 332 | Downloads: 748,054
    Nvidia's official hardware-optimized NVFP4 quantization of Qwen3.6, bridging the gap between massive MoE parameters and edge deployment.

---

## 3. Ecosystem Signal
The open-source ecosystem is currently experiencing a massive surge in Mixture-of-Experts (MoE) adoption, with Qwen 3.5/3.6 serving as the undeniable backbone for both proprietary multimodal releases (like InternScience/Agents-A1) and community fine-tunes. We are observing a fascinating community-driven meta-trend where "distillation genealogies" (e.g., models tagged with `Claude-Opus-Fable5-Thinking`) are dominating the download charts. End-users are overwhelmingly favoring heavily reasoning-tuned, uncensored, or agentic local quantizations.

In terms of hardware optimization, Nvidia's new NVFP4 quantization format is making a strong play against the entrenched GGUF/llama.cpp ecosystem, particularly for enterprise users wanting to deploy 70B+ and MoE models efficiently. Meanwhile, foundation labs are diversifying away from pure text, focusing heavily on niche utility models—such as unlimited OCR, tabular foundation models (TabFM), and spatial detection (LocateAnything)—indicating a maturation of core LLM architectures.

---

## 4. Worth Exploring

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *Why explore:* OCR remains a stubborn bottleneck for enterprise document automation. Baidu's approach to "unlimited" context and high-density text extraction could significantly outpace standard vision-language models, making it highly valuable for RAG pipelines.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *Why explore:* This model is a perfect benchmark for the current "reasoning + coding" meta. Studying how the Gemma 4 architecture responds to the community-driven "Fable5" composer framework provides deep insights into modern, local-first agentic coding workflows.
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *Why explore:* While LLMs excel at unstructured text, tabular data has historically been left to XGBoost or specialized deep learning. Google's TabFM introduces zero-shot capabilities to tabular classification and regression, representing a major paradigm shift worth testing for data science workflows.