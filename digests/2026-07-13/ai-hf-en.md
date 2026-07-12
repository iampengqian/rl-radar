# Hugging Face Trending Models Digest 2026-07-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-12 22:14 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the next generation of foundation models, with Qwen 3.5/3.6, Gemma-4, and DeepSeek-V4 leading community engagement. There is a massive surge in highly capable Mixture-of-Experts (MoE) architectures, aggressive community fine-tunes, and edge-optimized GGUF quantizations. Multimodal capabilities continue to expand rapidly, highlighted by breakthroughs in specialized vision tasks like unlimited OCR, precise object location, and advanced video generation. Furthermore, the open-weight community is pushing the boundaries of model behavior, seen in the popularity of "reasoning," "agentic," and "uncensored" variants that cater to developers seeking highly customizable local AI.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,853 | Downloads: 441,413
    A highly downloaded conversational text-generation model utilizing an advanced MoE and DSA (Dynamic Spatial Attention) architecture, drawing massive community attention.
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 714 | Downloads: 8,655
    Tencent's latest Hunyuan-series text generation model, gaining rapid traction due to its heavyweight backing and text capabilities.
*   **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | Author: meituan-longcat | Likes: 182 | Downloads: 1,767
    A specialized conversational LLM focused on extended context windows, tailored for complex, long-form text generation.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,714 | Downloads: 1,501,653
    A highly popular vision-language model designed for precise feature extraction and spatial object location, boasting massive download numbers.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,941 | Downloads: 1,430,656
    An enterprise-grade OCR and feature-extraction pipeline solving complex document parsing challenges, driving huge enterprise adoption.
*   **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** | Author: robbyant | Likes: 82 | Downloads: 0
    A fast image-to-video World Model that demonstrates the growing trend of combining causal LLM architectures with video generation.
*   **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | Author: conradlocke | Likes: 207 | Downloads: 0
    A trending ComfyUI LoRA for precise identity preservation and image editing built on Krea-2.
*   **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** | Author: CohereLabs | Likes: 95 | Downloads: 9,860
    A specialized ASR model showcasing the push towards high-quality, localized speech-to-text transcription for Arabic dialects.
*   **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** | Author: nineninesix | Likes: 84 | Downloads: 2,263
    An innovative Qwen-based text-to-speech model integrating LLM text generation directly into audio synthesis.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 354 | Downloads: 20,973
    A pioneering foundation model built specifically for zero-shot tabular classification and regression tasks.
*   **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | Author: SupraLabs | Likes: 105 | Downloads: 1,434
    An ultra-lightweight 51M parameter routing model, likely used to direct queries in complex LLM orchestration systems.
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | Author: OpenMOSS-Team | Likes: 126 | Downloads: 14,491
    A specialized audio-text-to-text pipeline that combines speech recognition with robust speaker diarization.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,673 | Downloads: 2,596,384
    A massively popular GGUF quantization of an uncensored Qwen MoE model, seeing millions of downloads for unrestricted local use.
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Author: unsloth | Likes: 1,057 | Downloads: 2,905,019
    Unsloth's highly optimized GGUF release of the Qwen3.6 multimodal model, dominating local deployment charts.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 2,043 | Downloads: 1,967,677
    A 1M-context, Claude-styled fine-tune of Qwen3.5 optimized for local reasoning and logic tasks.
*   **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** | Author: unsloth | Likes: 152 | Downloads: 44,614
    The first wave of accessible GGUF quantizations for the highly anticipated DeepSeek V4 Flash architecture.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | Author: froggeric | Likes: 861 | Downloads: 0
    A crucial community repository providing Jinja and MLX fixes for Qwen chat templates, highlighting the operational challenges of rapid LLM releases.

---

### 3. Ecosystem Signal
The current ecosystem is characterized by the absolute dominance of **Qwen 3.5 and 3.6**, which serve as the foundational architecture for nearly half of the trending models, spanning vision, text, and specialized fine-tunes. We are observing a massive shift toward **Mixture-of-Experts (MoE)** at the edge; models like *Qwen3.6-35B-A3B* prove that sparse architectures are dominating local hardware setups.

Open-weight momentum is incredibly strong, heavily driven by user demand for **uncensored, agentic, and reasoning-focused** models. Quantization masters like Unsloth and community developers like HauhauCS are generating millions of downloads by packaging frontier models into accessible GGUF formats faster than ever. Furthermore, large tech players (Baidu, NVIDIA, Google) are shifting from generalized LLMs to highly specific foundation models (e.g., Tabular data, OCR, Spatial location), filling critical enterprise vertical gaps that general chat models cannot solve effectively.

---

### 4. Worth Exploring
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: With nearly 3 million downloads, this model is a prime example of optimizing MoE architectures for local deployment. It is worth testing to see how the "aggressive" uncensored dataset alters Qwen's baseline reasoning and coding capabilities.
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**: Foundation models have officially moved beyond text. Google's TabFM is highly worth exploring for data scientists, as it promises zero-shot capabilities on structured tabular data, a task traditionally dominated by gradient-boosted trees like XGBoost.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: A tiny (3B) but immensely powerful vision model. It is worth studying how NVIDIA managed to compress robust spatial awareness and feature extraction into such a highly downloadable, lightweight package.