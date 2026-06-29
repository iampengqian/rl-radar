# Hugging Face Trending Models Digest 2026-06-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-29 22:20 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the latest data.

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the transition to next-generation base models, particularly Qwen 3.5/3.6, Gemma 4, and DeepSeek V4. Agentic capabilities, extended reasoning, and deep coding specializations are the primary drivers of engagement for LLMs. Meanwhile, hardware efficiency is a massive priority for the community, evidenced by the enormous download volumes for Nvidia's NVFP4 quantizations and Unsloth's GGUF conversions. Multimodal and vision applications are also rapidly maturing, moving beyond basic chat to highly specialized tasks like unlimited OCR, spatial location, and 3D video generation.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **Author:** zai-org | **Likes:** 2,925 | **Downloads:** 133,350
    *   **Summary:** A highly anticipated next-generation MoE conversational model that is dominating the text-generation leaderboard in weekly likes.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   **Author:** deepseek-ai | **Likes:** 211 | **Downloads:** 5,460
    *   **Summary:** The newest heavyweight text-generation model from DeepSeek, pushing the boundaries of open-weight reasoning and performance.
*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
    *   **Author:** LiquidAI | **Likes:** 150 | **Downloads:** 15,463
    *   **Summary:** A highly compact 230M parameter model designed for edge deployment and lightweight text generation tasks.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **Author:** baidu | **Likes:** 1,359 | **Downloads:** 362,945
    *   **Summary:** A groundbreaking image-text-to-text model that removes traditional token limits for feature extraction and high-resolution document parsing.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **Author:** nvidia | **Likes:** 2,476 | **Downloads:** 728,320
    *   **Summary:** A precise 3B parameter image-feature-extraction model enabling highly accurate spatial grounding and object location.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **Author:** krea | **Likes:** 392 | **Downloads:** 38,454
    *   **Summary:** A lightning-fast text-to-image diffusers model built for high-quality, low-latency generation.
*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
    *   **Author:** fal | **Likes:** 114 | **Downloads:** 0
    *   **Summary:** A specialized image-to-video LoRA tailored for the LTX video engine to generate highly realistic 3D representations.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   **Author:** WeiboAI | **Likes:** 748 | **Downloads:** 63,449
    *   **Summary:** A highly efficient Qwen2-based model fine-tuned specifically for advanced mathematical reasoning.
*   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingjiang-Intelligence/DeepSeek-v4-Fable)** *(Link: https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)*
    *   **Author:** Chunjiang-Intelligence | **Likes:** 129 | **Downloads:** 1,463
    *   **Summary:** A specialized text-generation model built on DeepSeek V4 focused on cybersecurity applications and analysis.
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   **Author:** nvidia | **Likes:** 741 | **Downloads:** 76,154
    *   **Summary:** A sub-1B parameter model optimized for real-time, low-latency automatic speech recognition.
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   **Author:** Qwen | **Likes:** 432 | **Downloads:** 26,223
    *   **Summary:** An active-parameter MoE model explicitly trained to navigate and execute complex autonomous agentic workflows.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **Author:** HauhauCS | **Likes:** 2,330 | **Downloads:** 3,089,944
    *   **Summary:** An aggressively uncensored GGUF quantization of Qwen3.6 MoE, boasting massive download numbers due to high community demand for unfiltered local models.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **Author:** yuxinlu1 | **Likes:** 2,499 | **Downloads:** 561,577
    *   **Summary:** A highly popular local coding assistant built by fine-tuning Gemma 4 specifically for terminal and code generation.
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   **Author:** unsloth | **Likes:** 464 | **Downloads:** 164,180
    *   **Summary:** Unsloth's heavily optimized GGUF conversion of GLM-5.2, allowing the massive MoE model to run efficiently on consumer hardware.

---

### 3. Ecosystem Signal
The ecosystem is experiencing a massive architectural handover, with **Qwen3.5/3.6 MoE**, **Gemma 4**, and **DeepSeek V4** establishing themselves as the new foundational standards. A standout trend is the sheer volume of downloads driven by **local deployment and quantization**. HauhauCS’s uncensored Qwen3.6 GGUF leads the entire board with over 3 million downloads, proving insatiable consumer appetite for locally runnable, uncensored, and quantized (GGUF) weights. Furthermore, hardware optimization has become a primary distribution vector, with Nvidia's **NVFP4 quantizations** (like Qwen3.6-35B-A3B) acting as massive download magnets. Agentic workflows are also transitioning from buzzword to reality, marked by dedicated releases like *Qwen-AgentWorld* and Microsoft's *FastContext*. Overall, the open-weight arena is successfully pushing massive, highly capable MoE architectures into the hands of everyday users via aggressive community quantization.

---

### 4. Worth Exploring
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR):** This model represents a significant leap for Document AI. By removing traditional OCR token limits, it solves massive bottlenecks in enterprise feature extraction and document parsing. Highly recommended for developers building RAG pipelines over long PDFs.
2. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B):** As the industry shifts from conversational LLMs to action-taking agents, this model is purpose-built to execute multi-step world-model tasks. With only 3B active parameters, it provides an incredibly efficient baseline for building local AI agents.
3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF):** With massive download numbers, this is currently one of the most robust local coding assistants on the hub. It is an excellent case study in how community fine-tuning can optimize base models (Gemma 4) into highly capable, terminal-ready developer tools.