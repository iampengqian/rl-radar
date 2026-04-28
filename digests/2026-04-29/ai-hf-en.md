# Hugging Face Trending Models Digest 2026-04-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-28 22:16 UTC

---

# Hugging Face Trending Models Digest (2026-04-29)

## 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the monumental release of the **Qwen 3.6** series and **DeepSeek-V4** models, both pushing the boundaries of open-weight multimodal intelligence and high-parameter text generation. Google's **Gemma 4** family also maintains a massive footprint, capturing millions of downloads and driving community fine-tuning and "abliteration" trends. Notably, the leaderboard reflects a strong shift towards advanced Mixture-of-Experts (MoE) architectures and aggressive compression techniques, enabling heavy-duty vision-language models to be run locally. Meanwhile, novel proprietary releases from Tencent, Baidu, and Lightricks highlight rapid advancements in spatial AI, native image generation, and HDR video.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, base models)
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | *Author:* deepseek-ai | *Likes:* 3,129 | *Downloads:* 174,402
  - The flagship text-generation model of the DeepSeek-V4 era, topping the charts in user popularity and conversational capability.
- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | *Author:* zai-org | *Likes:* 1,549 | *Downloads:* 256,484
  - A powerful conversational text-generation model utilizing a novel MoE and dynamic sparse attention architecture.
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | *Author:* deepseek-ai | *Likes:* 819 | *Downloads:* 96,948
  - A highly anticipated, lightweight, and lightning-fast variant of the V4 model released under a permissive MIT license.

### 🎨 Multimodal & Generation (Image, Video, Audio, text-to-X)
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | *Author:* google | *Likes:* 2,416 | *Downloads:* 6,558,301
  - Google's heavily downloaded instruction-tuned multimodal powerhouse bridging advanced text and visual understanding.
- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | *Author:* tencent | *Likes:* 622 | *Downloads:* 3,134
  - A cutting-edge world model capable of high-fidelity image-to-3D generation, gaining massive hype this week.
- **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | *Author:* baidu | *Likes:* 580 | *Downloads:* 8,466
  - Baidu's highly praised 8B parameter native text-to-image generation model released under the Apache 2.0 license.
- **[Lightricks/LTX-2.3-22b-IC-LoRA-HDR](https://huggingface.co/Lightricks/LTX-2.3-22b-IC-LoRA-HDR)** | *Author:* Lightricks | *Likes:* 67 | *Downloads:* 0
  - A massive 22B parameter any-to-any video model tailored for high-dynamic-range (HDR) video generation workflows.
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | *Author:* moonshotai | *Likes:* 1,130 | *Downloads:* 489,001
  - A widely downloaded compressed-tensors multimodal model excelling in complex feature-extraction and image-text tasks.

### 🔧 Specialized Models (Privacy, Agents, Vision Transformers)
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | *Author:* openai | *Likes:* 1,018 | *Downloads:* 57,743
  - An ONNX and Safetensors token-classification model by OpenAI designed for scrubbing personally identifiable information.
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | *Author:* XiaomiMiMo | *Likes:* 233 | *Downloads:* 396
  - A specialized text-generation model explicitly fine-tuned for long-context agentic workflows.
- **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)** | *Author:* facebook | *Likes:* 81 | *Downloads:* 0
  - A state-of-the-art human-centric vision transformer tailored for advanced visual analysis tasks.

### 📦 Fine-tunes & Quantizations (GGUF, FP8, Distillations)
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | *Author:* unsloth | *Likes:* 849 | *Downloads:* 1,705,737
  - The most downloaded community GGUF conversion, unlocking the powerful Qwen MoE architecture for local CPU/GPU inference.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | *Author:* HauhauCS | *Likes:* 490 | *Downloads:* 578,813
  - A wildly popular GGUF fine-tune that aggressively strips safety guardrails from the Qwen multimodal MoE model.
- **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | *Author:* OBLITERATUS | *Likes:* 534 | *Downloads:* 134,773
  - An "abliterated" and uncensored variant of Google's Gemma 4 model optimized for unrestricted text generation.
- **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | *Author:* hesamation | *Likes:* 204 | *Downloads:* 141,233
  - A highly specific distillation attempting to inject the reasoning capabilities of Anthropic's Claude 4.6 into a Qwen MoE GGUF.

## 3. Ecosystem Signal
The current Hugging Face landscape reveals a massive surge in Mixture-of-Experts (MoE) adoption, heavily driven by the **Qwen 3.6** and **DeepSeek-V4** families. The Qwen3.6-35B-A3B model is a standout, utilizing MoE to offer the performance of a 35B parameter model at a fraction of the active compute cost, a feature clearly validated by its leading download numbers. 

Furthermore, there is a distinct ecosystem trend toward open-weights rivaling proprietary APIs. Google's Gemma 4 commands staggering download volumes (over 11 million weekly across its variants), proving the insatiable community appetite for accessible multimodal foundation models. 

Finally, community post-training techniques are becoming increasingly sophisticated. We are seeing a pronounced spike in "abliterated" or uncensored models (like those from OBLITERATUS and HauhauCS) as users demand unaligned base models. Concurrently, highly specialized distillations—such as transferring the reasoning patterns of proprietary giants like Claude into open-weight Qwen architectures—demonstrate that open-source innovation is moving from basic model hosting to complex, multi-model behavioral synthesis. Advanced quantization formats like FP8 and DFlash are also gaining traction, ensuring these mammoth multimodal models remain accessible to the broader developer community.

## 4. Worth Exploring
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B):** As the most downloaded MoE model on the list, this is a must-try for developers looking to maximize performance-to-compute ratios in multimodal applications without relying on proprietary APIs.
- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0):** Worth exploring for its unique approach to spatial intelligence, allowing developers to test state-of-the-art image-to-3D world modeling.
- **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF):** A fascinating community experiment worth studying to see how effectively proprietary reasoning logic can be captured and run locally via open-source GGUF quantizations.