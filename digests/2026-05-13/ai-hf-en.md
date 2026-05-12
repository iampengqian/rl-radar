# Hugging Face Trending Models Digest 2026-05-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-12 22:22 UTC

---

Here is the Hugging Face Trending Models Digest for May 13, 2026.

### 1. Today's Highlights
This week's Hugging Face trending charts are overwhelmingly dominated by the rollout of next-generation open-weight foundation models, particularly the highly anticipated Qwen3.6 and Gemma 4 families. DeepSeek continues to command massive download volumes with its V4 series, while Google's Gemma 4 models are seeing incredible adoption rates across both raw and assistant-tuned variants. A clear shift towards advanced Mixture-of-Experts (MoE) and multimodal capabilities is evident, with users heavily favoring models that offer high performance with active-parameter efficiency. Meanwhile, the video and audio generation space sees robust growth, highlighted by new high-fidelity text-to-video and zero-shot voice cloning models. Finally, community-driven quantizations and uncensored fine-tunes remain the primary vehicle for local deployment and experimentation.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  Author: deepseek-ai | Likes: 3,885 | Downloads: 2,017,835
  The flagship heavyweight text generation model of the DeepSeek V4 family, trending due to its massive scale and state-of-the-art reasoning capabilities.
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  Author: deepseek-ai | Likes: 1,057 | Downloads: 1,162,290
  A lighter, faster iteration of the DeepSeek V4 architecture designed for high-throughput text generation and conversational tasks.
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
  Author: XiaomiMiMo | Likes: 511 | Downloads: 41,654
  An advanced text-generation model optimized for agentic workflows and long-context understanding, marking Xiaomi's strong push into the open-weight LLM arena.
- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
  Author: Zyphra | Likes: 449 | Downloads: 66,119
  An 8-billion parameter reasoning model built upon a specialized base, gaining traction as a highly capable mid-sized model.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  Author: google | Likes: 2,609 | Downloads: 9,119,339
  The crown jewel of today's multimodal releases, boasting nearly 10 million downloads as a powerful image-text-to-text conversational model.
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  Author: Qwen | Likes: 1,256 | Downloads: 2,446,478
  A highly popular native multimodal iteration of the Qwen series, seamlessly handling image-text-to-text interactions.
- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
  Author: k2-fsa | Likes: 855 | Downloads: 2,224,595
  A zero-shot multilingual text-to-speech and voice cloning model experiencing explosive adoption due to its impressive audio fidelity.
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  Author: SulphurAI | Likes: 721 | Downloads: 157,648
  A top-trending text-to-video generation model leveraging the Diffusers pipeline for high-quality visual synthesis.
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
  Author: moonshotai | Likes: 1,272 | Downloads: 1,423,653
  A multimodal powerhouse handling feature-extraction and vision-language tasks, demonstrating strong traction for Moonshot AI.

#### 🔧 Specialized Models (code, math, medical, embeddings)
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  Author: openai | Likes: 1,421 | Downloads: 190,993
  A specialized token-classification model by OpenAI designed to scrub personally identifiable information, widely utilized in enterprise data pipelines.
- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  Author: openbmb | Likes: 390 | Downloads: 0
  A highly anticipated, newly released edge-friendly multimodal model making waves for packing impressive vision capabilities into a tiny footprint.
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  Author: AngelSlim | Likes: 167 | Downloads: 17,260
  An aggressively quantized (1.25-bit) translation model demonstrating the extreme edge of local deployment possibilities.
- **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)**
  Author: jackxinning | Likes: 65 | Downloads: 10,425
  A bilingual (EN/ZH) medical question-answering model tailored for specialized healthcare Q&A tasks.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
  Author: unsloth | Likes: 1,008 | Downloads: 2,733,708
  The community's go-to GGUF quantization of the MoE Qwen 3.6 model, seeing millions of downloads for local AI runners.
- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
  Author: Jiunsong | Likes: 557 | Downloads: 287,827
  An unofficial, uncensored GGUF fine-tune of Gemma 4 26B, highly sought after for unfiltered local generation.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  Author: froggeric | Likes: 159 | Downloads: 0
  A vital community repository providing corrected Jinja chat templates for the Qwen 3.5/3.6 architecture families.
- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  Author: DavidAU | Likes: 136 | Downloads: 197,110
  A heavily modified, uncensored GGUF fine-tune optimized for deep character roleplay and coding tasks.

### 3. Ecosystem Signal
The Hugging Face ecosystem in mid-2026 is defined by the rapid democratization of MoE (Mixture of Experts) and native multimodal architectures. The Qwen and Gemma families are the undisputed momentum leaders this week; models like **Qwen3.6-35B-A3B** are highly popular because they offer the firepower of a 35B model at a fraction of the compute cost, a trend warmly embraced by the local deployment community. Open-weight releases continue to aggressively rival proprietary models, evidenced by DeepSeek-V4-Pro surpassing 2 million downloads and Google's Gemma-4-31B nearing 10 million. 

A pronounced trend is the sheer volume of community quantizations (GGUF) and "uncensored" fine-tunes. Enthusiasts are relying heavily on tools like Unsloth and llama.cpp to compress these new heavyweights into usable formats for consumer hardware. Furthermore, modalities beyond text are maturing rapidly; Zero-Shot TTS (OmniVoice) and advanced text-to-video generation (Sulphur-2) are commanding top spots in both likes and downloads, proving that high-fidelity media generation is becoming just as accessible as text generation.

### 4. Worth Exploring
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**: With nearly 10 million downloads in its debut week, this model is an absolute must-test. It represents the current cutting edge of open-weight multimodal instruction following and sets a new baseline for evaluating vision-language models.
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**: This model is the pinnacle of the MoE trend. Activating only 3 Billion parameters out of 35 Billion, it is incredibly well-suited for developers and researchers looking to build high-performance multimodal apps on strict hardware budgets.
- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**: For those interested in the audio ecosystem, OmniVoice is highly worth exploring. Its massive download rate signals a leap forward in zero-shot multilingual voice cloning and TTS capabilities.