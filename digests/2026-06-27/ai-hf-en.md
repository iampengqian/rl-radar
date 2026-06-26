# Hugging Face Trending Models Digest 2026-06-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-26 22:22 UTC

---

Here is the structured Hugging Face Trending Models Digest for late June 2026:

### 1. Today's Highlights
The Hugging Face ecosystem in late June 2026 is largely dominated by the rise of new massive, efficient open-weight families, notably **Google's Gemma 4**, **Qwen 3.5/3.6**, and **Z.ai's GLM-5.2**. There is a profound industry pivot towards "agentic" workflows and long-context processing, evidenced by new specialized models for deep reasoning and terminal execution. Multimodal capabilities are now a baseline expectation, with vision-language models (VLMs) and extreme edge AI (like 230M parameter LFM models) seeing massive download volumes. Finally, highly capable text-to-image generation like Krea-2 continues to mature, blurring the line between open-weight and proprietary creative tools.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 2,586 | Downloads: 83,589
    *A next-generation conversational MoE text generation model gaining massive traction for its advanced reasoning capabilities.*
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | Author: google | Likes: 1,192 | Downloads: 2,309,976
    *Google's highly downloaded unified "any-to-any" instruction-tuned model setting the baseline for open-weight multimodal performance.*
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | Author: MiniMaxAI | Likes: 1,246 | Downloads: 169,951
    *A powerful new multimodal vision-language model from MiniMax pushing the boundaries of open-weight conversational AI.*
*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** | Author: LiquidAI | Likes: 109 | Downloads: 8,286
    *An ultra-compact Liquid Foundation Model designed for highly efficient text generation on edge and mobile devices.*

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,031 | Downloads: 134,146
    *A breakthrough specialized image-text-to-text pipeline solving high-difficulty, unlimited-length optical character recognition.*
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | Author: krea | Likes: 285 | Downloads: 8,721
    *A lightning-fast, highly aesthetic text-to-image generation model built for real-time creative workflows.*
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,381 | Downloads: 494,756
    *A highly popular, lightweight 3B parameter vision model capable of pinpointing and identifying any object in an image.*
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | Author: nvidia | Likes: 705 | Downloads: 56,434
    *A highly efficient, streaming automatic speech recognition model built for real-time transcription applications.*

#### 🔧 Specialized Models (code, math, agentic, document)
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | Author: WeiboAI | Likes: 726 | Downloads: 54,638
    *A lightweight, math-specific reasoning model proving that small, heavily tuned models can outperform larger counterparts.*
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | Author: microsoft | Likes: 355 | Downloads: 5,735
    *A specialized sub-agent model engineered to process and retrieve information from massive context windows at high speeds.*
*   **[datalab-to/lift](https://huggingface.co/datalab-to/lift)** | Author: datalab-to | Likes: 158 | Downloads: 6,054
    *A document-parsing specialist model designed to accurately extract complex structures and text from PDFs.*
*   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** | Author: Chunjiang-Intelligence | Likes: 107 | Downloads: 1,103
    *A DeepSeek-v4 fine-tune explicitly focused on cybersecurity analysis, penetration testing, and code vulnerability detection.*

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,262 | Downloads: 3,453,492
    *A radically popular uncensored vision MoE fine-tune, topping the charts with millions of downloads for unrestricted local use.*
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | Author: yuxinlu1 | Likes: 2,395 | Downloads: 516,333
    *A quantized Gemma 4 model fine-tuned specifically for programming, terminal usage, and autonomous agentic coding.*
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | Author: nvidia | Likes: 361 | Downloads: 4,812,629
    *Nvidia's official FP4 quantization of the Qwen 3.6 model, dominating downloads by enabling massive MoE models to run efficiently on consumer hardware.*
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | Author: unsloth | Likes: 408 | Downloads: 107,553
    *A highly optimized GGUF release of the GLM-5.2 model, vastly increasing accessibility for local llama.cpp setups.*

### 3. Ecosystem Signal
The 2026 landscape shows a definitive maturation of the **Mixture-of-Experts (MoE)** architecture, driven heavily by Qwen 3.5/3.6 and Z.ai's GLM-5.2. Google's Gemma 4 (12B) has successfully entrenched itself as the default foundational base for community fine-tunes, particularly in the coding and agentic spaces. 

Open-weight dominance is evident in the sheer volume of downloads, with models like Nvidia's NVFP4-quantized Qwen 3.6 pulling over 4.8 million downloads. This highlights a massive ecosystem push towards hardware-friendly quantization formats (NVFP4, GGUF) that allow 35B+ MoE models to run locally. Furthermore, there is a stark split in community demands: users are flocking to "Uncensored" or "Abliterated" models for unrestricted generation, while enterprise users are rapidly adopting specialized sub-agent frameworks (like FastContext) and hyper-specific document extraction tools (Unlimited-OCR, PDF parsing).

### 4. Worth Exploring
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**: As AI agents require deeper memory and larger context windows, this 4B model offers a highly efficient, specialized approach to long-context processing that is worth studying for RAG and agent optimization.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: OCR has historically been a fragmented pain point; Baidu's approach to "unlimited" aspect ratios and lengths in an image-to-text pipeline is a game-changer for enterprise document automation.
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**: For developers looking to build local coding assistants, this model represents the bleeding edge of combining autonomous terminal "agentic" behaviors with a highly compressed, locally runnable GGUF format.