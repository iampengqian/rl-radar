# Hugging Face Trending Models Digest 2026-07-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-16 22:18 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
Today's Hugging Face trending charts are dominated by aggressive quantization, extreme model distillation, and advanced multimodal capabilities. Open-weight giants like Qwen 3.5/3.6, Gemma 4, and Tencent's Hy3 are seeing massive community adoption, particularly through 1-bit, 2-bit, and GGUF formats that make running 27B+ parameter models feasible on local hardware. There is a clear surge in high-efficiency "thinking" and "reasoning" fine-tunes, alongside highly specialized vision models for OCR (like Baidu's Unlimited-OCR). Furthermore, open-weight MoE (Mixture of Experts) architectures and tool-use models are rapidly maturing, signaling a strong push towards autonomous, locally-run AI agents.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | *zai-org* | Likes: 4,027 | Downloads: 513,061
    A highly downloaded Mixture-of-Experts (MoE) text-generation model that is dominating the charts due to its massive scale and conversational proficiency.
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | *tencent* | Likes: 812 | Downloads: 11,849
    Tencent's latest powerful text-generation model, serving as a new foundational base for the open-weight community.
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | *yuxinlu1* | Likes: 1,206 | Downloads: 506,068
    A highly specialized Gemma-4 fine-tune focused on agentic workflows and coding, showing massive download numbers for its terminal and tool-use capabilities.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | *deepreinforce-ai* | Likes: 901 | Downloads: 1,785,575
    A heavy-hitting 35B text-generation model optimized for endpoints, driving massive adoption via its accessible GGUF format.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | *baidu* | Likes: 2,009 | Downloads: 1,852,722
    A massive hit from Baidu providing unparalleled feature extraction and image-to-text OCR capabilities, racking up millions of downloads.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | *HauhauCS* | Likes: 2,785 | Downloads: 2,328,315
    An uncensored, aggressive MoE vision-language model that is being downloaded at an incredible pace for unrestricted multimodal applications.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | *empero-ai* | Likes: 2,231 | Downloads: 2,042,670
    A highly quantized, reasoning-focused multimodal model that perfectly blends vision capabilities with advanced logic.
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | *Wan-AI* | Likes: 89 | Downloads: 1,884
    A powerful 14B image-to-video model tailored for dynamic video generation, showcasing the growing strength of open-weight diffusers.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | *OpenMOSS-Team* | Likes: 231 | Downloads: 75,105
    A highly effective audio-text-to-text model gaining traction for robust transcription and speaker diarization.
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | *Cactus-Compute* | Likes: 247 | Downloads: 733
    A JAX-based model explicitly trained for function-calling and tool-use, reflecting the ecosystem's pivot towards practical AI agents.
*   **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | *ATH-MaaS* | Likes: 135 | Downloads: 3,678
    A specialized image-text-to-text model fine-tuned specifically for high-accuracy OCR tasks.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** & **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | *prism-ml* | Likes: 587 / 333 | Downloads: 74k / 559k
    Trending initiatives pushing the absolute limits of model compression (2-bit ternary and 1-bit quantization) to run large models on minimal hardware.
*   **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | *GnLOLot* | Likes: 261 | Downloads: 121,296
    A remarkably capable 1B model fine-tuned for "thinking" and reasoning, punching far above its weight class in local environments.
*   **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | *Alissonerdx* | Likes: 165 | Downloads: 0
    A trending LoRA for LTX-Video focused on identity preservation, highly sought after by the ComfyUI community.

---

### 3. Ecosystem Signal
**Model Families & MoE:** The Qwen ecosystem (Qwen 3.5 and 3.6) is overwhelmingly dominant, serving as the base for everything from 1-bit quantizations to uncensored vision models. We are also seeing the successful rise of next-gen proprietary/open-weight hybrids like Tencent's Hy3, Baidu's OCR models, and ZAI's GLM-5.2. Mixture-of-Experts (MoE) has clearly become the standard architecture for new 27B+ models.

**Quantization & Local AI:** There is a massive trend towards extreme hardware efficiency. Creators like `prism-ml` are experimenting with 1-bit and 2-bit ternary quantizations (via MLX and GGUF), allowing 27B models to run on consumer MacBooks. Meanwhile, standard 4-bit and GGUF formats continue to drive millions of downloads.

**The Rise of the Micro-Agent:** We are observing a shift from general chatbots to highly specialized, reasoning-heavy local agents. Models like `MiniCPM5-1B-Claude-Opus-Fable5-Thinking` and `gemma-4-12B-agentic` show that the community values step-by-step logic, terminal execution, and tool-use, even in ultra-compact (1B) or heavily compressed formats. 

---

### 4. Worth Exploring
1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**: If you are interested in the bleeding edge of local AI, this 1-bit quantized model is a must-try. It demonstrates how compression algorithms are evolving to allow 27B parameter models to run efficiently on everyday consumer hardware without totally degrading performance.
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: With nearly 2 million downloads, this model is a powerhouse for developers. If you are building document processing pipelines, scraping images for text, or building RAG systems over PDFs, this is currently the most reliable open-weight option on the Hub.
3. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**: For those experimenting with local coding assistants or autonomous terminal agents, this Gemma-4 fine-tune is specifically tailored for tool-use and coding, making it an excellent testbed for local agentic frameworks.