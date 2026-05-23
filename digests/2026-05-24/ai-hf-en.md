# Hugging Face Trending Models Digest 2026-05-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-23 22:14 UTC

---

Here is the structured Hugging Face Trending Models Digest for May 24, 2026.

### 1. Today's Highlights
This week's Hugging Face trending charts are overwhelmingly dominated by next-generation multimodal and vision-language models (VLMs), signaling a massive industry-wide shift away from text-only architectures. The Qwen 3.5/3.6 family has effectively taken over the open-weight leaderboard, capturing the top spots for absolute downloads alongside Google's highly anticipated Gemma 4. Massive text-to-video generation models are also seeing explosive engagement, proving that heavy GPU requirements aren't deterring the open-source community. Meanwhile, DeepSeek's V4 series continues its reign as the most downloaded open-weight heavyweight, catering to massive enterprise and developer deployments. 

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *Author: deepseek-ai | Likes: 4,187 | Downloads: 4,510,828*
    The flagship heavy-weight text-generation model of the DeepSeek V4 series, trending due to its massive scale and enormous enterprise adoption rate.
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *Author: google | Likes: 2,745 | Downloads: 10,289,284*
    Google's latest instruction-tuned Gemma 4 release, leading the pack this week with over 10 million downloads in just days.
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *Author: deepseek-ai | Likes: 1,205 | Downloads: 2,703,252*
    The lightweight, high-speed sibling to the V4-Pro, highly sought after for its efficiency and conversational capabilities.
*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    *Author: sapientinc | Likes: 256 | Downloads: 78,771*
    A compact, highly efficient 1-billion parameter text-generation model gaining rapid traction for edge deployments.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *Author: Qwen | Likes: 1,876 | Downloads: 6,011,835*
    A highly efficient Mixture-of-Experts (MoE) vision-language model boasting 35B total parameters but activating only 3B, making it incredibly popular.
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    *Author: Qwen | Likes: 1,404 | Downloads: 4,115,906*
    The dense flagship VLM of the Qwen 3.6 family, trending due to its state-of-the-art image-text-to-text performance.
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *Author: SulphurAI | Likes: 1,301 | Downloads: 1,286,075*
    A massive base text-to-video generation model with over 1.2 million downloads, highlighting the surging demand for open-source video tools.
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    *Author: bytedance-research | Likes: 699 | Downloads: 1,227*
    A versatile any-to-any multimodal model capable of unified image and video generation, creating major buzz in the research community.
*   **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
    *Author: openbmb | Likes: 913 | Downloads: 247,170*
    The latest iteration of the incredibly efficient MiniCPM vision-language model, celebrated for its strong performance-to-size ratio.

#### 🔧 Specialized Models (code, math, medical, embeddings, domain-specific)
*   **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
    *Author: tencent | Likes: 407 | Downloads: 2,564*
    A highly specialized translation model from Tencent's Hunyuan team, drawing significant attention for pushing the boundaries of language translation.
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
    *Author: Supertone | Likes: 613 | Downloads: 40,368*
    A highly optimized text-to-speech synthesis model, taking the lead in the niche but growing open-source audio-generation space.
*   **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
    *Author: ResembleAI | Likes: 239 | Downloads: 1,394*
    A specialized TTS and voice-cloning model capturing attention for its dramatic and expressive audio-generation capabilities.
*   **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
    *Author: numind | Likes: 90 | Downloads: 9,918*
    A highly targeted vision-language model fine-tuned for robust data extraction from images and text.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *Author: unsloth | Likes: 434 | Downloads: 597,584*
    A highly optimized community quantization of the Qwen 3.6 VLM, enabling local inference on consumer hardware.
*   **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
    *Author: unsloth | Likes: 346 | Downloads: 507,644*
    The quantized GGUF version of the popular Qwen MoE model, driving massive downloads for efficient local deployment.
*   **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)**
    *Author: Jackrong | Likes: 172 | Downloads: 35,795*
    A community fine-tune blending Qwen and Opus architectures for coding tasks, proving highly popular in quantized formats.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *Author: froggeric | Likes: 379 | Downloads: 0*
    A vital utility repository trending for providing corrected Jinja chat templates for the notoriously tricky Qwen 3.5 series.

### 3. Ecosystem Signal
The current Hugging Face ecosystem is defined by two distinct mega-trends: the utter dominance of multimodal vision-language models (VLMs) and the triumph of highly efficient Mixture-of-Experts (MoE) architectures. Nearly half of the top 30 list consists of image-text-to-text pipelines, confirming that unimodal LLMs are becoming legacy technology. Within this space, Alibaba’s Qwen (versions 3.5 and 3.6) has achieved staggering market penetration, dominating both native and community leaderboards. 

Furthermore, open-weight ecosystems are thriving thanks to aggressive quantization. Unloth's GGUF ports are accumulating download numbers in the hundreds of thousands, proving that consumer hardware accessibility remains the primary driver of actual model usage. The staggering 10 million downloads of Google's Gemma 4 in a single week highlights the sustained hunger for frontier open-weights that bridge the gap between proprietary APIs and local deployment.

### 4. Worth Exploring
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**: This model represents the future of efficient AI deployment. By offering 35B parameters but only activating 3B, it delivers near-frontier multimodal performance at a fraction of the compute cost. It is an absolute must-test for developers building scalable VLM applications.
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**: As an "any-to-any" pipeline, Lance represents the next evolutionary step for generative AI. Researchers and developers should explore this to see how unified architectures handle simultaneous video and image generation without task-specific fine-tuning.
*   **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)**: Community fusion models are getting incredibly sophisticated. This blend of Qwen and Opus capabilities, packaged efficiently via GGUF, is a highly practical tool for developers wanting a powerful, private, local coding assistant.