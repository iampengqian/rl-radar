# Hugging Face Trending Models Digest 2026-07-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-06 22:23 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

# 🤗 Hugging Face Trending Models Digest
**Date:** 2026-07-07

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the proliferation of Mixture-of-Experts (MoE) architectures and advanced agentic models, with Qwen 3.5/3.6 serving as the foundational backbone for a massive wave of community fine-tunes. Multimodal capabilities continue to expand rapidly, highlighted by new releases in open-vocabulary object detection and unlimited-context OCR from major industry players like NVIDIA and Baidu. Furthermore, GGUF quantization and "uncensored" or "abliterated" model variants remain highly sought after by the open-source community, driving millions of downloads as users look to efficiently run 30B+ parameter models on local hardware.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,528 | Downloads: 231,218
    A highly popular conversational text-generation model utilizing a Mixture-of-Experts (MoE) architecture, making significant waves in the open-weight LLM community.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen | Likes: 555 | Downloads: 57,835
    An official 35B parameter MoE model specifically designed to power autonomous AI agents and complex image-text-to-text workflows.
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | Author: InternScience | Likes: 343 | Downloads: 8,766
    A trending image-text-to-text MoE architecture built to push the boundaries of agentic AI reasoning.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | Author: deepseek-ai | Likes: 409 | Downloads: 14,276
    The latest iteration in the renowned DeepSeek text-generation lineage, drawing heavy community interest for its advanced reasoning capabilities.
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 315 | Downloads: 2
    Tencent’s newest entry in the Hunyuan text-generation series, generating massive early hype despite having just initiated its rollout.
*   **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | Author: meituan-longcat | Likes: 112 | Downloads: 43
    A highly anticipated conversational model designed to tackle ultra-long context windows for enterprise applications.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,631 | Downloads: 1,340,559
    A groundbreaking, lightweight image-text-to-text model that provides highly accurate open-vocabulary object detection and localization.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,789 | Downloads: 1,070,230
    A robust feature-extraction pipeline capable of performing optical character recognition on images without traditional resolution or length limitations.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 527 | Downloads: 109,470
    A lightning-fast text-to-image diffusion model built for creators needing rapid, high-quality visual generation.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 255 | Downloads: 7,036
    A specialized foundation model tailored for zero-shot tabular classification and regression tasks.
*   **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)** | Author: nvidia | Likes: 126 | Downloads: 10,766
    A massive 30B parameter two-tower architecture focused on advancing text-generation and embedding retrieval systems.
*   **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** | Author: nationaldesignstudio | Likes: 136 | Downloads: 3,821
    A BERT-based token-classification model deployed via ONNX/Transformers.js specifically engineered for detecting PII (Personally Identifiable Information).
*   **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** | Author: mistralai | Likes: 138 | Downloads: 106
    A colossal 119B parameter MoE model optimized for vLLM, likely targeting complex logical and mathematical reasoning workloads.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,527 | Downloads: 2,910,241
    A wildly popular uncensored MoE vision-language fine-tune, leading the charts in community downloads for removing safety guardrails.
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Author: unsloth | Likes: 972 | Downloads: 2,818,499
    A highly optimized GGUF quantization of the multimodal Qwen 3.6 model, enabling massive download numbers by supporting local deployment.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 1,634 | Downloads: 1,617,508
    A quantized, reasoning-focused model featuring a massive 1-million-token context window, optimized for `llama.cpp`.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,621 | Downloads: 664,319
    A highly-rated community fine-tune of Gemma 4 specifically tailored for advanced coding and reasoning tasks in local environments.
*   **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** | Author: huihui-ai | Likes: 176 | Downloads: 6,660
    A GGUF conversion of GLM-5.2 that has undergone "abliteration" (removing the refusal mechanism) for unrestricted conversational use.

---

### 3. Ecosystem Signal
The current ecosystem is heavily defined by the absolute dominance of Qwen 3.5 and 3.6 as the base architecture of choice for both enterprise and community releases. Mixture-of-Experts (MoE) has become the standard, allowing developers to ship highly capable 30B–119B models while keeping active parameter counts low (e.g., A3B). We are observing a massive surge in agentic and reasoning-focused models, indicating a market shift from simple chat assistants to complex, autonomous workflow engines.

On the deployment front, GGUF quantization is driving the open-source market, with top-tier community models like `HauhauCS` and `unsloth` racking up millions of downloads. The high traction of "uncensored" and "abliterated" models suggests a sustained, high-demand niche for unaligned local models. Furthermore, proprietary tech giants are leaning into hyper-specific open-weight solutions—NVIDIA (object detection) and Baidu (unrestricted OCR) are releasing highly practical, specialized vision models rather than just general-purpose LLMs.

---

### 4. Worth Exploring
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: This model solves a major pain point in traditional OCR pipelines (resolution/context limits). With over a million downloads in a week, it is highly worth integrating into document-processing workflows to test its capabilities on dense, unstructured visual data.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**: As the industry pivots heavily toward autonomous AI agents, exploring this official release from Qwen is essential. Its MoE architecture makes it highly efficient to run relative to its 35B total size, offering a glimpse into the next generation of tool-using LLMs.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: At just 3B parameters, this model brings enterprise-grade open-vocabulary object detection to edge devices. It is an excellent resource for developers building lightweight, real-time computer vision applications without needing massive cloud compute.