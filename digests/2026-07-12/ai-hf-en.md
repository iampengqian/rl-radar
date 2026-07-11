# Hugging Face Trending Models Digest 2026-07-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-11 22:13 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data.

### 1. Today's Highlights
Today's Hugging Face ecosystem is heavily defined by the explosive rise of next-generation Mixture-of-Experts (MoE) and advanced reasoning architectures, with massive community traction around the newly released Qwen 3.5/3.6 and DeepSeek-V4 model families. Enterprise and industry labs are making significant pushes into highly specialized, production-ready tasks, evidenced by Baidu's Unlimited-OCR, Nvidia's LocateAnything, and Google's TabFM. Meanwhile, local deployment and quantization (GGUF, NVFP4) continue to dominate download volumes, proving that high-parameter MoE models are increasingly accessible for consumer hardware.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,828 | Downloads: 421,270
    A highly popular conversational text-generation model utilizing a dynamic sparse MoE architecture, gaining massive traction for its efficiency and chat capabilities.
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 696 | Downloads: 8,210
    Tencent's latest entry into the foundational text-generation space, generating significant community buzz despite a relatively low initial download count.
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | Author: InternScience | Likes: 491 | Downloads: 28,141
    A versatile Qwen 3.5-based MoE model designed for advanced agentic workflows and image-text-to-text reasoning.
*   **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | Author: meituan-longcat | Likes: 176 | Downloads: 1,572
    A specialized conversational LLM optimized for processing and reasoning over extended context windows.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,929 | Downloads: 1,380,690
    A massive hit in the multimodal space, this Baidu model provides robust, unlimited optical character recognition capabilities.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,707 | Downloads: 1,472,194
    A highly efficient 3B parameter vision-language model designed for universal object detection and spatial localization.
*   **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Author: Alissonerdx | Likes: 98 | Downloads: 0
    A text-to-video pipeline component focused on high-fidelity identity preservation for reference-based video generation.
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | Author: OpenMOSS-Team | Likes: 109 | Downloads: 12,817
    A specialized audio-text-to-text pipeline built for accurate speech transcription and speaker diarization.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 348 | Downloads: 20,110
    A foundational model by Google revolutionizing zero-shot tabular classification and regression tasks.
*   **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | Author: SupraLabs | Likes: 98 | Downloads: 1,275
    An ultra-lightweight 51M parameter Llama-based model tailored specifically for ultra-fast routing and task delegation.
*   **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** | Author: mistralai | Likes: 189 | Downloads: 350
    A massive 119B parameter MoE model fine-tuned for formal mathematical theorem proving and complex logic resolution.
*   **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** | Author: CohereLabs | Likes: 88 | Downloads: 7,687
    A specialized ASR model explicitly trained to tackle the nuances of Arabic dialects in audio transcription.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,648 | Downloads: 2,641,936
    An aggressive, uncensored GGUF quantization of the Qwen 3.6 MoE, dominating the downloads charts for local vision and text tasks.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 2,007 | Downloads: 1,944,961
    A highly downloaded quantized blend of Qwen 3.5 featuring a 1M context window and Claude-inspired reasoning behaviors.
*   **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** | Author: unsloth | Likes: 140 | Downloads: 38,922
    Unsloth's highly optimized GGUF release of the anticipated DeepSeek-V4-Flash architecture for local inference.
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Author: unsloth | Likes: 1,047 | Downloads: 2,904,169
    A massive community hit, providing a highly compressed, multi-token prediction enabled GGUF of Qwen 3.6.

### 3. Ecosystem Signal
The current ecosystem trends heavily favor Mixture-of-Experts (MoE) architectures, with models like `Qwen3.6-35B-A3B` and `GLM-5.2` proving that high total parameter counts paired with low active parameters (e.g., 3B active) are the new standard for balancing performance and inference costs. The **Qwen** family (versions 3.5 and 3.6) absolutely dominates the digest, serving as the base for the vast majority of top-trending fine-tunes, uncensored blends, and GGUF quantizations.

There is a clear industry pivot toward vertical-specific multimodal foundation models rather than general-purpose LLMs. Tech giants are releasing highly targeted architectures: Google is tackling zero-shot tabular data (`TabFM`), Baidu is solving high-volume OCR (`Unlimited-OCR`), and Nvidia is leaning into spatial vision (`LocateAnything`) and hardware-specific precision formats like NVFP4. 

Furthermore, the open-weight and local AI community remains incredibly robust. Quantized GGUF models are routinely exceeding 1-2 million weekly downloads, driven by user demand for "uncensored", high-context (1M token), and agentic models that can run locally via `llama.cpp`. 

### 4. Worth Exploring
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: A must-try for enterprise developers. OCR remains a massive bottleneck in legacy data migration, and a model specifically branded as "Unlimited" by Baidu is highly worth testing for high-volume document parsing pipelines.
2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**: This model represents the cutting edge of local inference. Combining Multi-Token Prediction (MTP) with a highly optimized GGUF format offers a glimpse into the future of high-speed, low-latency local AI assistants.
3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**: Foundation models for tabular data are still relatively rare compared to text and vision. Exploring Google's approach to zero-shot classification and regression on structured data could provide massive value for traditional machine learning practitioners.