# Hugging Face Trending Models Digest 2026-07-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-01 22:24 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data.

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by next-generation foundational models, specifically the emergence of Qwen 3.5/3.6, Gemma 4, and DeepSeek V4 architectures. There is a massive industry push towards Agentic AI and extended context windows, evidenced by the release of Qwen's AgentWorld and community models boasting up to 1M token contexts. Hardware optimization is also a top priority, with NVIDIA actively releasing NVFP4 quantized models and the community rapidly generating GGUF formats for local deployment. Additionally, specialized spatial intelligence and computer vision models, such as Baidu's Unlimited-OCR and NVIDIA's LocateAnything, are seeing extraordinary adoption rates.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,166 | Downloads: 159,967
    A highly anticipated conversational text-generation model utilizing Mixture-of-Experts (MoE) architecture, drawing massive attention as a flagship open-weight LLM.
*   **[deepseek-ai/DeepSeek-V4-Pro-DSPark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSPark)** | Author: deepseek-ai | Likes: 276 | Downloads: 7,629
    The newest professional-tier LLM from DeepSeek featuring their advanced DSpark architecture, trending due to the brand's strong reputation for high-performance reasoning. 
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | Author: Qwen | Likes: 495 | Downloads: 34,371
    A 35B parameter MoE model specifically tuned for autonomous world-model and agentic workflows, highlighting the ecosystem's pivot from basic chat to action-oriented AI.
*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** | Author: LiquidAI | Likes: 180 | Downloads: 21,935
    A highly compact (230M parameter) Liquid Foundation Model that is gaining traction for bringing efficient, on-device text generation to edge hardware.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,570 | Downloads: 630,246
    An image-text-to-text powerhouse that is dominating the charts by solving complex, unbounded optical character recognition challenges.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,544 | Downloads: 896,058
    A highly adopted 3B parameter multimodal model capable of precise visual grounding and image-feature extraction.
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 435 | Downloads: 56,953
    A lightning-fast text-to-image diffusers model built for high-quality, low-latency creative generation.
*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | Author: fal | Likes: 135 | Downloads: 0
    A specialized image-to-video LoRA for the LTX video engine, trending for its ability to generate highly realistic 3D-consistent video clips.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,549 | Downloads: 597,090
    A heavily downloaded, highly specialized coding and reasoning model built for local terminal use via `llama.cpp`.
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1 | Likes: 917 | Downloads: 288,741
    A sibling to the coder model, this variant is fine-tuned specifically to execute agentic terminal tasks autonomously. 
*   **[Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-Coder-MTP-GGUF)** | Author: Jackrong | Likes: 99 | Downloads: 12,635
    A community-created coding and vision hybrid model that combines Qwen and Opus architectures for multi-turn programming context.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | Author: unsloth | Likes: 490 | Downloads: 212,201
    The go-to dynamic quantization for running the massive GLM-5.2 model locally, fueling the open-source adoption of the GLM family.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,374 | Downloads: 3,055,962
    An aggressively uncensored community fine-tune of the Qwen 3.6 MoE model, leading the entire list in pure download volume.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 1,143 | Downloads: 1,113,871
    A Claude-styled fine-tune of Qwen 3.5 that boasts an impressive 1-million token context window in a highly portable GGUF format.
*   **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)** | Author: huihui-ai | Likes: 113 | Downloads: 901
    A weights-abliterated (uncensored) version of GLM-5.2, removing safety refusals while maintaining base model coherency.

---

### 3. Ecosystem Signal
The current ecosystem is defined by the rapid rise of **Qwen 3.5/3.6 and Gemma 4** architectures, which are dominating the community fine-tuning space. There is a clear bifurcation in open-weight usage: users are either seeking massive, reasoning-heavy MoE models (like DeepSeek V4 and GLM-5.2) or highly capable mid-sized models (7B-12B) optimized for edge deployment. 

**Agentic AI** has officially transitioned from a buzzword to a model architecture, with tags like `terminal`, `world-model`, and `agentic` appearing frequently. Furthermore, **quantization is ubiquitous**. Creators like `unsloth` and `huihui-ai` are essential to the ecosystem, converting multi-billion parameter MoEs into usable GGUF formats. NVIDIA's proactive release of NVFP4-optimized models (GLM-5.2, Qwen3.6) also signals a hardware push towards standardizing 4-bit floating-point precision for next-gen inference.

---

### 4. Worth Exploring
1. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**: A must-try for developers building autonomous workflows. Its native optimization for "world-model" agentic tasks makes it a standout release for seeing where the future of LLM agents is heading.
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: With over 630k downloads in a week, this model is solving a major pain point in document AI. Its ability to handle unbounded OCR tasks sets a new standard for multimodal text extraction.
3. **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**: If you are looking to run a local model, this is the one to test. Combining a 1-million token context window with Claude-like reasoning in a highly compressed 9B GGUF format is a massive technical achievement for local hardware.