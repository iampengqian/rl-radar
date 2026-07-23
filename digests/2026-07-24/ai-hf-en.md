# Hugging Face Trending Models Digest 2026-07-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-23 22:18 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
Today's Hugging Face trending models showcase a major industry pivot toward edge computing, on-device AI, and extreme quantization. Open-weight titans like Google's Gemma-4 and Z.ai's GLM-5.2 continue to dominate the leaderboards in raw download volume, while 1-bit and 2-bit quantized variants of 27B+ models are surging in popularity for local hardware optimization. Specialized utility models are having a massive moment, particularly in high-resolution OCR (Baidu's Unlimited-OCR) and custom voice generation (Qwen3-TTS). Furthermore, the open-source community is rapidly iterating on the Qwen3.6 architecture, producing highly customized "uncensored" and reasoning-focused variants.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | Google | Likes: 3,346 | Downloads: 12,666,488
    Google's latest conversational and instruction-tuned 31B LLM, dominating the charts due to its massive performance-per-parameter ratio.
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | Likes: 4,363 | Downloads: 596,442
    A highly anticipated conversational Mixture-of-Experts (MoE) LLM that is generating massive community buzz for its flagship-tier reasoning capabilities.
*   **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | upstage | Likes: 402 | Downloads: 362
    A massive 250B parameter text-generation model from Upstage, trending as a heavy-weight open-weights contender for enterprise deployments.
*   **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Nanbeige | Likes: 311 | Downloads: 4,532
    A highly efficient, lightweight 3B parameter LLM designed for fast and responsive text generation on edge devices.
*   **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** | Motif-Technologies | Likes: 171 | Downloads: 1,856
    A beta-stage feature-extraction and text generation model gaining traction for its novel architectural approach. 
*   **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** | fdtn-ai | Likes: 117 | Downloads: 2,747
    A tiny 1B parameter GraniteMoE-Hybrid model specifically fine-tuned and trending for local security and network analysis tasks.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | Likes: 2,872 | Downloads: 2,414,259
    A groundbreaking image-text-to-text model trending due to its ability to process unlimited image resolutions without standard context-window limitations.
*   **[Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice)** | Qwen | Likes: 1,795 | Downloads: 2,497,020
    A highly capable text-to-speech model generating massive buzz for its zero-shot custom voice cloning capabilities.
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | Likes: 1,245 | Downloads: 766,522
    A multimodal power-house that bridges code generation and vision, trending heavily among developers using agentic frameworks.
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | thinkingmachines | Likes: 1,502 | Downloads: 24,669
    A new multimodal conversational model making waves for its deeply integrated image-text understanding capabilities.
*   **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | microsoft | Likes: 181 | Downloads: 411
    A versatile text-to-image diffusion model gaining traction for high-fidelity image generation and editing workflows.
*   **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke | Likes: 515 | Downloads: 0
    A ComfyUI LoRA for Krea-2, trending among digital artists for its ability to maintain identity consistency during image edits.
*   **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** | nvidia | Likes: 97 | Downloads: 28,493
    A highly optimized edge-focused diffusion model by NVIDIA, designed for real-time image and video generation on low-power hardware.

#### 🔧 Specialized Models (code, math, medical, embeddings, robotics, audio)
*   **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | poolside | Likes: 507 | Downloads: 13,285
    A state-of-the-art specialized LLM explicitly trained for software engineering and coding tasks, showing impressive benchmark results. 
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | Likes: 924 | Downloads: 750,118
    An ultra-fast automatic speech recognition model that is dominating the audio pipeline due to its low-latency streaming capabilities.
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | OpenMOSS-Team | Likes: 319 | Downloads: 111,598
    A dual-purpose audio-text model that handles both real-time transcription and speaker diarization, highly sought after for meeting transcriptions.
*   **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | ATH-MaaS | Likes: 256 | Downloads: 26,919
    A specialized vision-language model fine-tuned specifically for high-density document parsing and structured OCR tasks.
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | openbmb | Likes: 163 | Downloads: 408
    A Vision-Language-Action (VLA) model built for robotic manipulation, drawing attention from the embodied AI and robotics communities.
*   **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | openbmb | Likes: 117 | Downloads: 306
    A companion robotics model to MiniCPM focused on real-time visual tracking and spatial awareness.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | Likes: 3,031 | Downloads: 2,027,080
    An aggressive uncensored GGUF fine-tune of the Qwen3.6 MoE architecture, skyrocketing to the top of community charts for local, unrestricted chat.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | Likes: 2,438 | Downloads: 2,126,755
    A heavily guided reasoning fine-tune mimicking proprietary Claude models, popular for fitting a massive 1M context window into a 9B GGUF format.
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** & **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | Likes: 619 / 980 | Downloads: 1,910,116 / 576,083
    Revolutionary 1-bit and 2-bit GGUF quantizations that allow heavy 27B models to run efficiently on consumer-grade local hardware with minimal perplexity loss.
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | Likes: 391 | Downloads: 334,847
    An expertly crafted, uncensored GGUF merge designed to push the absolute creative writing and storytelling limits of the Qwen architecture.
*   **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** | bottlecapai | Likes: 528 | Downloads: 25,231
    A refined fine-tune designed to enhance the native reasoning and "thinking" capabilities of the base Qwen3.6 model. 

---

### 3. Ecosystem Signal
The current ecosystem reveals a strong decentralization of AI capabilities, heavily driven by open-weight optimization. **Qwen3.5 and 3.6** have firmly established themselves as the foundational architecture of choice for the open-source community, dominating the fine-tuning and merging space (particularly for "uncensored" and reasoning models). 

There is a massive signal pointing toward **Extreme Quantization**; 1-bit and 2-bit formats (like `prism-ml`'s Bonsai series and `NVFP4` formats) are bridging the gap between massive 27B+ parameter models and consumer-grade local hardware, proving that efficiency is just as critical as raw scale. 

Furthermore, there is a notable trend of task-specific over generalist models. Baidu's Unlimited-OCR, Qwen's TTS, and various streaming ASR models signal that developers are favoring hyper-optimized, smaller pipeline models for distinct tasks (audio, OCR, robotics) rather than relying solely on massive, generalized multimodal endpoints. Proprietary models are losing mindshare to highly capable open-weight equivalents that can be deeply customized and quantized locally.

---

### 4. Worth Exploring

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: A must-try for developers working in enterprise RAG or document processing. Overcoming traditional resolution limits in Vision-Language Models is a massive technical leap that could replace complex multi-model OCR pipelines.
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**: Anyone interested in the future of local AI should study this model. It is a flagship proof-of-concept for 1-bit quantization, showcasing how 27B parameter models can be compressed to run on standard consumer hardware without catastrophic forgetting or perplexity loss.
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**: A fascinating look into the future of embodied AI. Exploring this Vision-Language-Action (VLA) model provides great insight into how open-source transformers are being adapted to interact with and manipulate physical spaces.