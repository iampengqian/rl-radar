# Hugging Face Trending Models Digest 2026-05-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-09 22:11 UTC

---

Here is the Hugging Face Trending Models Digest for May 10, 2026.

### 1. Today's Highlights
This week's Hugging Face trending charts are heavily dominated by the explosive growth of open-weight multimodal and Mixture-of-Experts (MoE) models, with **google/gemma-4-31B-it** leading absolute downloads and **Qwen/Qwen3.6-35B-A3B** taking the top spot for weekly likes. Major proprietary players are increasingly embracing open ecosystems, highlighted by **openai/privacy-filter** debuting as a highly popular token-classification tool. Community-driven optimizations—ranging from extreme low-bit quantizations to fully uncensored fine-tunes—are driving massive download numbers across the board. Meanwhile, video generation is rapidly maturing, led by **SulphurAI/Sulphur-2-base**. Finally, the utility of AI voice cloning continues to surge, demonstrated by millions of downloads for **k2-fsa/OmniVoice**.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   Author: deepseek-ai | Likes: 3,781 | Downloads: 1,167,697
    *   DeepSeek's latest flagship conversational text-generation model is trending due to its state-of-the-art reasoning capabilities and massive adoption.
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   Author: deepseek-ai | Likes: 1,011 | Downloads: 957,448
    *   A lighter, faster iteration of the V4 architecture designed for high-throughput text generation without sacrificing conversational quality.
*   **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**
    *   Author: mistralai | Likes: 309 | Downloads: 29,683
    *   A massive 128B parameter model from Mistral supporting English and French, trending as a powerhouse for complex generative tasks.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   Author: Qwen | Likes: 1,691 | Downloads: 3,511,378
    *   A highly efficient image-text-to-text MoE vision-language model activating only 3B parameters, trending for offering flagship performance at a fraction of the compute cost.
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   Author: google | Likes: 2,576 | Downloads: 8,894,303
    *   Google's 31B instruction-tuned multimodal powerhouse dominates the charts with nearly 9 million weekly downloads, setting a new standard for open-weight vision-language models.
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   Author: SulphurAI | Likes: 487 | Downloads: 115,477
    *   This week's top-trending video generation model, highly sought after for its impressive text-to-video capabilities.
*   **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
    *   Author: k2-fsa | Likes: 821 | Downloads: 2,233,532
    *   A zero-shot multilingual text-to-speech and voice-cloning model gaining massive traction due to its exceptional audio fidelity.

#### 🔧 Specialized Models (code, math, medical, embeddings, classification)
*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    *   Author: openai | Likes: 1,380 | Downloads: 180,322
    *   OpenAI's open-source token-classification tool is trending rapidly as developers flock to integrate robust PII redaction into their LLM pipelines.
*   **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
    *   Author: AngelSlim | Likes: 154 | Downloads: 17,030
    *   An extremely low-bit (1.25-bit) quantized translation model trending among researchers and edge-device developers for its tight efficiency.
*   **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
    *   Author: XiaomiMiMo | Likes: 498 | Downloads: 31,447
    *   A specialized text-generation model optimized for agentic workflows and long-context understanding, highlighting a shift towards action-oriented LLMs.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    *   Author: unsloth | Likes: 972 | Downloads: 2,581,735
    *   Unsloth’s optimized GGUF conversion of the Qwen MoE model is trending at #1 in its class, allowing local users to run vision-language models efficiently on consumer hardware.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   Author: HauhauCS | Likes: 594 | Downloads: 1,061,556
    *   An aggressively uncensored community fine-tune of the Qwen 3.6 MoE model, highly popular for bypassing safety guardrails in local deployments.
*   **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**
    *   Author: DavidAU | Likes: 114 | Downloads: 161,548
    *   A highly specialized, uncensored GGUF fine-tune optimized for coding and unconventional reasoning, drawing significant download volume from the open-source community.

### 3. Ecosystem Signal
The May 2026 ecosystem is defined by the decisive shift toward **Mixture-of-Experts (MoE)** and **Native Multimodality**. Dense LLMs are increasingly making way for MoE architectures—like Qwen3.6-35B-A3B and Nvidia's Nemotron—which activate only a fraction of their parameters during inference, drastically reducing compute costs while maintaining massive context windows. 

The **Gemma 4** and **Qwen 3.6** families are currently dominating the open-weight landscape, successfully bridging the gap between text and vision (image-text-to-text). Notably, proprietary giants are contributing highly specialized tools rather than just foundational models, as seen with OpenAI's privacy-filter. 

Furthermore, community infrastructure is rapidly evolving to support asymmetric hardware demands. Projects like "DFlash" (speculative decoding) and extreme low-bit quantizations (1.25-bit to 3-bit) are gaining momentum, proving that users want frontier model capabilities on standard local hardware. The massive download numbers for Uncensored and Aggressive GGUF fine-tunes also underscore the community's continued demand for unaligned, fully customizable models.

### 4. Worth Exploring
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**: This model is a masterclass in MoE efficiency. Activating only 3 Billion out of 35 Billion parameters, it provides an incredible playground for developers looking to integrate strong vision-language capabilities into applications without paying the compute cost of a 30B+ parameter model.
*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**: A significant strategic release from OpenAI. If you are building local or enterprise RAG (Retrieval-Augmented Generation) pipelines, exploring this token-classification model for PII scrubbing is highly recommended due to its optimized accuracy and lightweight footprint.
*   **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**: Worth studying for any AI engineer interested in inference optimization. This implementation of "DFlash" and speculative decoding represents the cutting edge of community efforts to speed up text generation without degrading model quality.