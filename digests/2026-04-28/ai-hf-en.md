# Hugging Face Trending Models Digest 2026-04-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-27 22:14 UTC

---

# Hugging Face Trending Models Digest (2026-04-28)

## 1. Today's Highlights
This week's Hugging Face trending charts are dominated by the highly anticipated releases of DeepSeek-V4 and Qwen3.6, signaling a massive shift towards native multimodal "any-to-any" architectures and advanced Mixture-of-Experts (MoE) designs. Google's Gemma-4-31B-it has explosively taken the lead in sheer download volume (over 6.3 million), highlighting enormous community demand for open-weight multimodal foundations. Meanwhile, the open-source community is aggressively pushing the boundaries of model alignment, with uncensored "abliterations" and high-quality reasoning distillations from proprietary models like Claude Opus surging in popularity. Finally, new specialized generative models from Baidu, Tencent, and Facebook indicate a healthy expansion into domain-specific multimodal capabilities like 3D world generation and human-centric vision. 

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | *Author:* deepseek-ai | *Likes:* 3,008 | *Downloads:* 137,784
    The flagship powerhouse of the new DeepSeek V4 generation, leading the weekly likes chart for its cutting-edge text-generation capabilities.
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | *Author:* deepseek-ai | *Likes:* 776 | *Downloads:* 65,743
    A lightweight, high-speed, MIT-licensed iteration of DeepSeek-V4 built for efficient text-generation and rapid deployment.
*   **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | *Author:* zai-org | *Likes:* 1,533 | *Downloads:* 237,450
    A highly popular conversational text-generation model utilizing a novel Mixture-of-Experts (MoE) architecture combined with dynamic self-attention.
*   **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | *Author:* MiniMaxAI | *Likes:* 1,073 | *Downloads:* 492,091
    A heavy-hitting conversational LLM making waves this week with over 492k downloads, proving massive traction for the MiniMax series.
*   **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** | *Author:* tencent | *Likes:* 164 | *Downloads:* 5,008
    An upcoming preview of Tencent’s latest conversational text model, drawing attention for its highly refined conversational nuances.
*   **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | *Author:* XiaomiMiMo | *Likes:* 77 | *Downloads:* 0
    Xiaomi’s newly dropped text-generation model engineered specifically for long-context understanding and agentic workflows.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | *Author:* google | *Likes:* 2,391 | *Downloads:* 6,306,108
    An instruction-tuned multimodal powerhouse dominating the ecosystem this week with over 6.3 million downloads and massive community acclaim.
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | *Author:* Qwen | *Likes:* 1,455 | *Downloads:* 1,354,032
    A highly efficient MoE vision-language model that activates only 3 billion parameters out of 35B, driving over 1.3 million downloads.
*   **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | *Author:* moonshotai | *Likes:* 1,096 | *Downloads:* 443,440
    A versatile image-text-to-text feature extractor drawing immense attention for its strong visual comprehension and compressed tensor format.
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | *Author:* Qwen | *Likes:* 905 | *Downloads:* 399,489
    The dense conversational counterpart to Qwen's MoE models, offering robust image-text-to-text processing for complex multimodal tasks.
*   **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | *Author:* inclusionAI | *Likes:* 198 | *Downloads:* 448
    An innovative "any-to-any" pipeline model merging diffusers and transformers, signaling a new era of unified multimodal generation.
*   **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | *Author:* tencent | *Likes:* 613 | *Downloads:* 3,048
    A state-of-the-art image-to-3D world model generating massive buzz for its ability to render navigable 3D environments from single images.
*   **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | *Author:* baidu | *Likes:* 576 | *Downloads:* 8,242
    An 8-billion parameter Apache-licensed text-to-image diffusion model from Baidu, bringing high-quality generative image capabilities to the open community.

### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | *Author:* openai | *Likes:* 921 | *Downloads:* 47,488
    A token-classification tool by OpenAI trending rapidly as developers seek robust, local pipelines to scrub PII and sensitive data from training corpora.
*   **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)** | *Author:* facebook | *Likes:* 66 | *Downloads:* 0
    A specialized vision transformer poised to advance human-centric computer vision tasks, backed by newly published foundational research.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | *Author:* unsloth | *Likes:* 820 | *Downloads:* 1,646,295
    A highly optimized GGUF quantization of the Qwen3.6 MoE model, taking the #1 spot for community downloads by enabling local deployment of a massive model.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | *Author:* HauhauCS | *Likes:* 477 | *Downloads:* 525,932
    An aggressively uncensored fine-tune of the Qwen MoE model, reflecting surging community demand for unfiltered, alignment-free base models.
*   **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | *Author:* OBLITERATUS | *Likes:* 525 | *Downloads:* 127,538
    A fully "abliterated" (uncensored) version of Gemma-4, proving the enduring popularity of removing default safety guardrails for unrestricted use cases.
*   **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | *Author:* hesamation | *Likes:* 200 | *Downloads:* 129,164
    A fascinating student-teacher distillation attempting to inject the nuanced reasoning capabilities of Anthropic's Claude 4.6 Opus into a localized Qwen model.
*   **[lordx64/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled](https://huggingface.co/lordx64/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled)** | *Author:* lordx64 | *Likes:* 84 | *Downloads:* 70,695
    Another highly active reasoning distillation project utilizing the Qwen3.6 MoE architecture to mimic the thought processes of Claude 4.7 Opus.
*   **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | *Author:* unsloth | *Likes:* 449 | *Downloads:* 636,345
    A crucial standard GGUF quantization allowing standard consumer hardware to run Qwen's dense 27-billion parameter multimodal model efficiently.
*   **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | *Author:* Jackrong | *Likes:* 225 | *Downloads:* 77,763
    A creative "frankenmerge" combining the reasoning capabilities of Qwen and GLM models into a uniquely capable 18B text-generation hybrid.
*   **[Qwen/Qwen3.6-27B-FP8](https://huggingface.co/Qwen/Qwen3.6-27B-FP8)** | *Author:* Qwen | *Likes:* 153 | *Downloads:* 607,010
    The official FP8 quantization of the Qwen3.6-27B model, offering near-lossless fidelity while drastically reducing VRAM requirements.
*   **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | *Author:* HauhauCS | *Likes:* 194 | *Downloads:* 190,878
    The dense 27B multimodal counterpart to HauhauCS's aggressive uncensored tuning efforts, heavily downloaded by users wanting unfiltered vision capabilities.
*   **[Jackrong/Qwopus3.6-27B-v1-preview-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v1-preview-GGUF)** | *Author:* Jackrong | *Likes:* 77 | *Downloads:* 35,971
    An experimental vision-language merge model integrating community reasoning enhancements for improved multimodal task performance.
*   **[unsloth/Kimi-K2.6-GGUF](https://huggingface.co/unsloth/Kimi-K2.6-GGUF)** | *Author:* unsloth | *Likes:* 116 | *Downloads:* 25,400
    A community quantization enabling the seamless local execution of moonshotai's highly capable K2.6 vision model.

---

## 3. Ecosystem Signal
The Hugging Face ecosystem in late April 2026 demonstrates aggressive maturation in Mixture-of-Experts (MoE) and native multimodal designs. The Qwen3.6 series is the undisputed heavyweight of the week, particularly its 35B-A3B MoE configuration, which dominates download charts by offering an incredible performance-to-compute ratio. DeepSeek's V4 base models rank highest in community approval, indicating that open-weight foundational model releases remain highly valued. However, the most striking ecosystem signal is the sheer dominance of community fine-tuning and quantization efforts, which frequently outpace official releases in downloads. The open-source community is obsessed with "abliterations" (removing safety filters) and complex reasoning distillations—attempting to clone the cognitive capabilities of proprietary heavyweights like Claude 4.6 and 4.7 Opus into open Qwen architectures. Furthermore, tools like OpenAI's privacy-filter highlight a maturing infrastructural awareness around data hygiene. 

## 4. Worth Exploring
*   **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**: Representing a leap toward true "any-to-any" foundation models, this model seamlessly combines transformer and diffusion architectures. It is a crucial architecture to study for anyone looking beyond standard text and image pairings.
*   **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**: This model provides an excellent case study in advanced knowledge distillation. It showcases how the open-source community is successfully bridging the gap between proprietary reasoning engines and open-weight efficiency. 
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**: With over 1.3 million downloads, this is currently the gold standard for accessible MoE architecture. Anyone looking to deploy high-end vision/text capabilities on consumer hardware should explore this model and its "Flash" variants.