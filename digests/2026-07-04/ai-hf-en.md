# Hugging Face Trending Models Digest 2026-07-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-03 22:18 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by next-generation foundation models like Qwen3.5/3.6, Gemma-4, and GLM-5.2, alongside highly specialized agentic and coding fine-tunes. Massive Mixture-of-Experts (MoE) architectures are being aggressively optimized for local use, driving a massive surge in community-driven GGUF quantizations and NVFP4 formats. Notable industry releases include Baidu's Unlimited-OCR, Nvidia's spatial intelligence model LocateAnything, and Krea-2 for text-to-image generation. Furthermore, there is a distinct trend toward edge AI and agentic workflows, exemplified by LiquidAI's compact 230M model and Qwen's dedicated AgentWorld framework.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,335 | Downloads: 191,462
    A highly popular conversational text-generation model utilizing a Mixture-of-Experts (MoE) architecture, trending due to its impressive base capabilities.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSSpark)** | Author: deepseek-ai | Likes: 339 | Downloads: 9,388
    The latest advanced text-generation entry in the DeepSeek V4 lineage, drawing attention for its cutting-edge architecture backed by recent arxiv research. 
*   **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)** | Author: deepreinforce-ai | Likes: 200 | Downloads: 8,079
    A massive 397B parameter MoE vision-language model making waves as a frontier-scale open-weight release.
*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** | Author: LiquidAI | Likes: 197 | Downloads: 29,645
    A highly compact 230M parameter Liquid Foundation Model designed for edge deployment and lightweight text generation tasks.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,686 | Downloads: 885,040
    An industry-grade image-text-to-text OCR powerhouse by Baidu trending due to its robust feature extraction and massive early adoption.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,587 | Downloads: 1,108,586
    Nvidia's spatial intelligence multimodal model that excels at pinpointing and extracting features from images, driving massive download numbers.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 479 | Downloads: 84,006
    A highly anticipated accelerated version of the Krea-2 text-to-image diffusion model optimized for rapid, high-quality generation.
*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | Author: fal | Likes: 149 | Downloads: 0
    A specialized image-to-video LoRA for the LTX video engine, trending for bringing 3D realism to generative video pipelines.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,584 | Downloads: 628,225
    A highly downloaded, specialized coding model fine-tuned from Gemma-4, heavily optimized for programming and deep reasoning.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen | Likes: 524 | Downloads: 45,455
    A 35B parameter MoE model (3B active) explicitly trained for autonomous agentic workflows, signaling a shift towards task-executing LLMs.
*   **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** | Author: BugTraceAI | Likes: 124 | Downloads: 11,444
    A niche but highly relevant Qwen3-based model fine-tuned specifically for offensive cybersecurity and vulnerability tracing.
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 149 | Downloads: 450
    Google's experimental Foundation Model built natively for zero-shot tabular classification and regression tasks.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 1,365 | Downloads: 1,366,360
    A Claude-style fine-tune of the Qwen3.5 9B base with a massive 1M context window, dominating the weekly charts due to immense local execution demand.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,427 | Downloads: 3,029,679
    An aggressively uncensored GGUF vision MoE fine-tune, leading the entire platform in weekly downloads by addressing developer demand for unfiltered outputs.
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Author: unsloth | Likes: 938 | Downloads: 1,774,298
    A masterfully quantized version of the multimodal Qwen3.6 model by Unsloth, drastically lowering the hardware barrier for running 27B models locally.
*   **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** | Author: nvidia | Likes: 214 | Downloads: 189,970
    Nvidia's official hardware-optimized NVFP4 quantization of GLM-5.2, proving that major labs are now officially supporting edge-quantization out of the gate.

---

### 3. Ecosystem Signal
The open-weight ecosystem is firmly in the era of high-performance MoE (Mixture of Experts) architectures. Proprietary giants like Baidu, Nvidia, and Google are contributing highly specialized open models (e.g., Unlimited-OCR, LocateAnything), while open labs like Qwen and DeepSeek push the boundaries of dense and MoE foundational LLMs. 

However, community-driven quantization (GGUF, NVFP4) is doing the heavy lifting for actual usage metrics. Models like `HauhauCS` and `empero-ai` are generating millions of downloads by repackaging Qwen3.5/3.6 bases into accessible formats (GGUF) with specific value-adds—namely uncensored system prompts, expanded context windows (1M tokens), and Claude-like conversational styling. The presence of NVFP4 by Nvidia shows official support for this localized inference trend. Furthermore, "agentic" capabilities and local execution (evidenced by LiquidAI's 230M model and specialized coding/cybersecurity fine-tunes) highlight a market pivoting away from simple chatting towards autonomous execution and privacy-first local workflows.

---

### 4. Worth Exploring
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: With over a million downloads in a week, this 3B parameter model is a must-try for anyone building multimodal applications. It proves that spatial intelligence and pinpoint feature extraction don't require massive parameter counts.
2. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**: As the industry shifts towards Agentic AI, this model provides a fascinating glimpse into base models trained explicitly for tool-use and autonomous task execution, utilizing an incredibly efficient 3B active parameter footprint.
3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**: For local developers, this fine-tune represents the cutting edge of on-device coding assistants. It combines Gemma-4's strong reasoning with aggressive coding optimizations, easily running on consumer hardware.