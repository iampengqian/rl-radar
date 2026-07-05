# Hugging Face Trending Models Digest 2026-07-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-05 22:17 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

# 🤗 Hugging Face Trending Models Digest (2026-07-06)

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the rise of 30B+ parameter Mixture-of-Experts (MoE) architectures and advanced multimodal capabilities. Open-weight releases like Qwen3.5/3.6, Gemma-4, and DeepSeek-V4 are seeing massive adoption, particularly in highly quantized GGUF formats for local deployment. There is a surging trend in "uncensored" and "abliterated" community fine-tunes, alongside highly specialized enterprise models pushing boundaries in OCR, tabular data, and cybersecurity.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,462 | Downloads: 220,379
    *   *Summary:* A massively popular conversational text-generation model utilizing a Mixture-of-Experts architecture (glm_moe_dsa).
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | Author: deepseek-ai | Likes: 386 | Downloads: 12,580
    *   *Summary:* The flagship iteration in the DeepSeek V4 lineage, generating major buzz for its advanced reasoning capabilities.
*   **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)** | Author: deepseek-ai | Likes: 159 | Downloads: 48,696
    *   *Summary:* A lightweight, high-speed variant of the DeepSeek-V4 architecture designed for efficient text generation.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen | Likes: 545 | Downloads: 55,113
    *   *Summary:* A specialized MoE text and image-to-text model explicitly trained for autonomous agentic workflows.

#### 🎨 Multimodal & Generation
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,616 | Downloads: 1,247,265
    *   *Summary:* A highly downloaded, lightweight 3B parameter vision model designed for precise object detection and spatial feature extraction.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,742 | Downloads: 1,044,217
    *   *Summary:* An enterprise-grade image-to-text pipeline solving complex optical character recognition tasks without traditional resolution constraints.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 513 | Downloads: 99,049
    *   *Summary:* A state-of-the-art, accelerated text-to-image diffuser model generating hyper-realistic outputs at unprecedented speeds.

#### 🔧 Specialized Models (code, math, medical, embeddings, security)
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 220 | Downloads: 2,670
    *   *Summary:* A groundbreaking Foundation Model by Google built strictly for zero-shot tabular classification and regression tasks.
*   **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)** | Author: BugTraceAI | Likes: 134 | Downloads: 12,196
    *   *Summary:* A niche but crucial 27B model fine-tuned specifically for penetration testing, cybersecurity analysis, and offensive security.
*   **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)** | Author: nationaldesignstudio | Likes: 128 | Downloads: 2,783
    *   *Summary:* A BERT-based token classifier utilizing transformers.js to identify and mask Personally Identifiable Information (PII) in real-time.
*   **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)** | Author: nvidia | Likes: 122 | Downloads: 10,696
    *   *Summary:* A massive 30B two-tower architecture setting new standards for high-accuracy retrieval and recommendation embeddings.

#### 📦 Fine-tunes & Quantizations
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 1,542 | Downloads: 1,533,844
    *   *Summary:* A heavily downloaded, reasoning-optimized GGUF quantization merging Qwen3.5 with Claude-inspired persona capabilities and a massive 1M context window.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,479 | Downloads: 3,018,257
    *   *Summary:* An aggressively uncensored vision-capable GGUF fine-tune of the Qwen3.6 MoE architecture, dominating weekly downloads.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,608 | Downloads: 651,758
    *   *Summary:* A highly favored local quantization of Gemma-4 engineered specifically for deep reasoning and complex code generation.
*   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** | Author: nvidia | Likes: 272 | Downloads: 297,130
    *   *Summary:* Nvidia's official hardware-optimized NVFP4 quantization of Qwen3.6, allowing massive models to run efficiently on consumer GPUs.

---

### 3. Ecosystem Signal
The ecosystem is firmly in the era of high-parameter MoE architectures (A3B style models), with the **Qwen3.5/3.6 family** saturating the leaderboards. Qwen serves as the foundational architecture for a vast majority of top-performing fine-tunes, coding models, and agentic systems. **Gemma-4** is also gaining traction as a competitive alternative for coding tasks. 

In terms of accessibility, **GGUF** and `llama.cpp` remain the undisputed kings of the community pipeline. Intriguingly, proprietary giants are actively contributing to the open-weight ecosystem: **Nvidia** is aggressively applying its NVFP4 quantization tech to open models (Qwen, GLM), while **Google** and **Baidu** are open-sourcing highly specialized foundation models (Tabular, OCR). A notable cultural trend is the massive download volume for "abliterated" and "uncensored" fine-tunes, signaling strong enterprise and developer demand for unfiltered, locally hosted models free from rigid safety RLHF constraints.

---

### 4. Worth Exploring
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: A must-try for developers building document-processing pipelines. It promises to remove the traditional resolution and aspect-ratio bottlenecks associated with standard vision-to-text models.
2. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**: Foundation models for tabular data are incredibly rare. This model is worth studying for data scientists looking to replace traditional XGBoost/Random Forest pipelines with zero-shot LLM approaches.
3. **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**: Developers utilizing Nvidia hardware should actively test this model to benchmark the real-world latency and VRAM improvements provided by the new ModelOpt NVFP4 quantization standard.