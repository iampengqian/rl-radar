# Hugging Face Trending Models Digest 2026-07-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-22 22:18 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

# 🤗 Hugging Face Trending Models Digest (2026-07-23)

## 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by extreme efficiency optimizations and next-generation multimodal capabilities. 1-bit and ternary quantization formats (like GGUF and MLX) are surging in popularity, allowing heavy 27B models like Qwen3.6 and Bonsai to run on consumer hardware. Multimodal utility is also peaking, headlined by massive adoption of Baidu's Unlimited-OCR and Google's Gemma-4-31B-it. Furthermore, open-weight reasoning and coding models, such as Moonshot's Kimi-K2.7-Code and zai-org's GLM-5.2, are seeing tremendous download volume, signaling a strong developer shift toward self-hosted, highly capable foundation models. 

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | Author: zai-org | Likes: 4,334 | Downloads: 545,109
    *A highly popular MoE-based conversational text generation model that is dominating the standard LLM leaderboard this week.*
*   [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | Author: google | Likes: 3,327 | Downloads: 12,113,203
    *The latest 31B instruction-tuned iteration of Google's Gemma series, boasting massive download numbers and multimodal capabilities.*
*   [**upstage/Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) | Author: upstage | Likes: 194 | Downloads: 0
    *A colossal 250B parameter text-generation model from Upstage, generating significant buzz ahead of its deployment.*
*   [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Author: Nanbeige | Likes: 223 | Downloads: 0
    *A newly released lightweight 3B parameter LLM designed for efficient text generation.*

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | Author: baidu | Likes: 2,698 | Downloads: 2,237,351
    *A specialized image-text-to-text model redefining OCR tasks, evidenced by its staggering multi-million download count.*
*   [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | Author: HauhauCS | Likes: 2,998 | Downloads: 1,997,690
    *An aggressive, uncensored MoE vision-language model fine-tune that is being widely downloaded for unfiltered multimodal tasks.*
*   [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | Author: moonshotai | Likes: 1,221 | Downloads: 722,058
    *A powerful multimodal foundation model specifically optimized for coding and complex reasoning workflows.*
*   [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | Author: microsoft | Likes: 112 | Downloads: 0
    *A new text-to-image diffusion model from Microsoft focusing on advanced image generation and editing.*
*   [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | Author: openbmb | Likes: 154 | Downloads: 58
    *A pioneering vision-language-action (VLA) model built for robotics manipulation.*

### 🔧 Specialized Models (code, math, medical, embeddings)
*   [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | Author: nvidia | Likes: 914 | Downloads: 590,230
    *A highly efficient, streaming automatic speech recognition model tailored for real-time transcription.*
*   [**nvidia/Nemotron-3-Embed-1B-BF16**](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16) | Author: nvidia | Likes: 102 | Downloads: 93,021
    *A robust sentence-similarity embedding model designed for high-performance RAG (Retrieval-Augmented Generation) pipelines.*
*   [**OpenMOSS-Team/MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | Author: OpenMOSS-Team | Likes: 308 | Downloads: 92,265
    *A specialized audio-text-to-text model that not only transcribes but identifies and separates different speakers.*
*   [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | Author: openbmb | Likes: 114 | Downloads: 72
    *A specialized VLA feature-extraction model designed for tracking and movement in robotics.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | Author: prism-ml | Likes: 936 | Downloads: 432,196
    *An ultra-compressed 2-bit ternary GGUF quantization, making large 27B models highly accessible on local hardware.*
*   [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | Author: empero-ai | Likes: 2,415 | Downloads: 2,133,420
    *A highly sought-after Claude-style reasoning fine-tune of Qwen3.5, optimized with a massive 1M context window.*
*   [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | Author: DavidAU | Likes: 315 | Downloads: 62,842
    *A heavily modified, uncensored community fine-tune of Qwen3.6 designed to push the boundaries of creative generation.*
*   [**unsloth/inkling-GGUF**](https://huggingface.co/unsloth/inkling-GGUF) | Author: unsloth | Likes: 120 | Downloads: 7,377
    *A streamlined GGUF port of Thinkingmachines' Inkling, enabling multimodal and audio-text processing on local endpoints.*

---

## 3. Ecosystem Signal
The current ecosystem trajectory heavily favors aggressive weight compression and edge deployment without sacrificing multimodal capabilities. Qwen 3.5 and 3.6 architectures have firmly established themselves as the foundational backbones for the community, spawning countless MoE, vision, and uncensored variants. Meanwhile, proprietary innovation is pushing the boundaries of practical utility, seen in Baidu’s Unlimited-OCR redefining text extraction and Moonshot’s Kimi-K2.7 dominating coding tasks. 

Quantization has shifted from a mere space-saving tactic to an art form of its own; 1-bit and 2-bit architectures (like the Bonsai ternary models) and Apple-optimized MLX formats are trending fiercely. This highlights a robust developer hunger to run 27B+ parameter reasoning models locally. Furthermore, vertical-specific open-weight models are maturing rapidly. Nvidia’s expansion into edge ASR and text embeddings, combined with OpenBMB’s robotics-focused Vision-Language-Action models, illustrates that open-source development is successfully penetrating deep-tech, physical, and enterprise utility spaces previously locked behind APIs.

---

## 4. Worth Exploring

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: With over 2.2 million downloads in a week, this model is a must-try for anyone building document-processing pipelines. It represents a massive leap forward in open-source image-to-text utility.
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**: A fascinating showcase of 1-bit quantization. If you are interested in running large-scale MoE models efficiently on standard consumer Mac or PC hardware, this model proves that extreme compression is viable without losing conversational fidelity.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**: Perfect for developers needing massive context windows locally. It combines a 1M token context length with top-tier reasoning capabilities, making it ideal for summarizing massive codebases or lengthy documents offline.