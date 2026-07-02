# Hugging Face Trending Models Digest 2026-07-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-02 22:19 UTC

---

Here is the structured Hugging Face Trending Models Digest for July 2026:

### 1. Today's Highlights
Today's Hugging Face trending charts are heavily dominated by next-generation agentic and vision-capable language models, highlighted by massive community engagement around Qwen3.5/3.6 fine-tunes, DeepSeek-V4, and GLM-5.2. Agentic workflows and coding assistants are seeing explosive growth, with highly quantized (GGUF) and uncensored community variants racking up millions of downloads. Multimodal capabilities continue to expand robustly, marked by the emergence of specialized models like Baidu's Unlimited-OCR and NVIDIA's LocateAnything. Additionally, there is a strong push towards hyper-specialization, with new foundational architectures debuting for tabular data (Google's TabFM) and cybersecurity (BugTraceAI).

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,248 | Downloads: 176,154
    *What it is:* A massive MoE-based conversational text generation model. *Why it's trending:* serving as a highly anticipated flagship backbone that is already spawning a prolific ecosystem of fine-tunes and quantizations.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | Author: deepseek-ai | Likes: 302 | Downloads: 8,184
    *What it is:* The newest professional-tier text generation release from DeepSeek. *Why it's trending:* maintaining DeepSeek's reputation for high-performance architectures, drawing immense attention from enterprise researchers despite a low download count.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen | Likes: 511 | Downloads: 39,448
    *What it is:* A 35B parameter mixture-of-experts model built specifically for multi-modal agentic workflows. *Why it's trending:* meeting the surging developer demand for native, open-weight agentic execution frameworks.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,651 | Downloads: 758,489
    *What it is:* A state-of-the-art image-text-to-text model specialized in optical character recognition. *Why it's trending:* solving complex, high-volume document parsing tasks that traditionally bottleneck enterprise pipelines.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,572 | Downloads: 1,006,831
    *What it is:* A lightweight 3B parameter vision model for precise image feature extraction and localization. *Why it's trending:* crossing over one million downloads due to its blazing speed and utility in edge robotics and UI automation.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 457 | Downloads: 69,788
    *What it is:* A high-speed diffusers-based text-to-image generation model. *Why it's trending:* offering incredible visual fidelity with optimized latency for real-time creative applications.
*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | Author: fal | Likes: 143 | Downloads: 0
    *What it is:* A specialized LoRA for the LTX video generation pipeline. *Why it's trending:* pushing the boundaries of 3D-consistent video generation directly within the popular fal ecosystem.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 114 | Downloads: 89
    *What it is:* A foundational model designed for zero-shot tabular classification and regression. *Why it's trending:* representing a major architectural leap, bringing in-context learning to structured spreadsheet data.
*   **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** | Author: BugTraceAI | Likes: 121 | Downloads: 8,037
    *What it is:* A highly specialized model for offensive security and cybersecurity analysis. *Why it's trending:* providing much-needed open-weight tools for red-teaming and vulnerability research.
*   **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** | Author: nationaldesignstudio | Likes: 102 | Downloads: 790
    *What it is:* A BERT-based token-classification model optimized with Transformers.js and ONNX. *Why it's trending:* offering a highly efficient, in-browser solution for PII (Personally Identifiable Information) redaction.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,397 | Downloads: 3,078,904
    *What it is:* An uncensored, vision-capable MoE fine-tune in GGUF format. *Why it's trending:* dominating the weekly charts with over 3 million downloads by catering to the massive local-LLM community seeking unrestricted models.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,570 | Downloads: 614,069
    *What it is:* A highly quantized, reasoning-focused coding model based on the Gemma-4 architecture. *Why it's trending:* providing developers with an incredibly capable local coding assistant that runs on consumer hardware.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | Author: deepreinforce-ai | Likes: 650 | Downloads: 284,585
    *What it is:* A MIT-licensed text generation model optimized for local endpoints. *Why it's trending:* bridging the gap between heavy MoEs and local accessibility with highly efficient quantization.

### 3. Ecosystem Signal
The Hugging Face ecosystem in mid-2026 is defined by the entrenchment of Mixture-of-Experts (MoE) architectures and the absolute dominance of the Qwen ecosystem. Qwen3.5 and 3.6 variants are serving as the foundational backbones for the vast majority of top-tier community fine-tunes, particularly in the 35B-A3B parameter range, which offers the perfect sweet spot of agentic reasoning and deployable efficiency. Meanwhile, proprietary openness is thriving; DeepSeek-V4 and Z.ai's GLM-5.2 are successfully challenging legacy giants by providing state-of-the-art open-weight alternatives. 

Crucially, the GGUF format and llama.cpp inference remain the undisputed kings of local deployment, with uncensored, quantized models like *HauhauCS/Qwen3.6* racking up millions of downloads. This proves that the community's top priority is taking heavy, restricted frontier models and optimizing them for unrestricted, local, and edge deployment. Furthermore, NVIDIA's dual strategy of releasing specialized small models (LocateAnything) alongside NVFP4-optimized versions of flagship LLMs highlights a maturing hardware-software co-design trend on the Hub.

### 4. Worth Exploring
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: A must-try for developers working in computer vision or UI automation. Its small footprint combined with high-accuracy feature extraction makes it incredibly versatile for real-time edge applications.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**: Highly recommended for backend engineers. As a native MoE built specifically for agentic workflows, it represents the cutting edge of open-weight autonomous task execution and tool-use.
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**: Data scientists should study this model closely. It signals a massive paradigm shift away from traditional gradient boosting (XGBoost) and towards in-context learning for zero-shot tabular predictions.