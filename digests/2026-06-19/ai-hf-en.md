# Hugging Face Trending Models Digest 2026-06-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-18 22:34 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
The Hugging Face ecosystem is currently dominated by the release of next-generation foundation models, particularly Google's Gemma-4 and DeepSeek's V4, which are seeing massive adoption. Multimodality is now the standard, with vision and image-text-to-text capabilities seamlessly integrated into flagship models like MiniMax-M3 and Kimi-K2.7. There is also a noticeable surge in localized, specialized initiatives, highlighted by the impressive 397B parameter model from a Brazilian municipal government (Prefeitura-rio). Meanwhile, community efforts are laser-focused on aggressive quantization (GGUF) and "uncensored" or highly specialized reasoning fine-tunes to democratize access to these heavy architectures.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   Author: deepseek-ai | Likes: 4,954 | Downloads: 2,948,726
    *   What it is: A highly anticipated next-gen text generation model. Why it's trending: Massive download volume indicates it is already becoming a foundational backbone for enterprise and developer applications.
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   Author: zai-org | Likes: 1,325 | Downloads: 4,307
    *   What it is: A conversational Mixture-of-Experts (MoE) language model. Why it's trending: High like-to-download ratio suggests extreme hype and recent release, drawing immediate attention from the open-weight community.
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   Author: google | Likes: 1,082 | Downloads: 1,309,625
    *   What it is: An any-to-any unified instruction-tuned model. Why it's trending: Google's Gemma series remains a community favorite for balancing high performance with an accessible 12B parameter size.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   Author: nvidia | Likes: 2,159 | Downloads: 183,093
    *   What it is: An image-text-to-text spatial recognition model. Why it's trending: Tops the weekly likes chart by solving specific agentic vision problems (object localization) in a highly efficient 3B package.
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   Author: MiniMaxAI | Likes: 1,096 | Downloads: 56,162
    *   What it is: A powerful multimodal vision-language model. Why it's trending: Pushes the boundaries of open-source multimodal interactions.
*   **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
    *   Author: zai-org | Likes: 227 | Downloads: 0
    *   What it is: A pose-driven character animation video generation model. Why it's trending: High anticipation for controllable video generation, though gated/forthcoming given the zero downloads.
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) & [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   Authors: bosonai, nvidia | Likes: 487, 535 | Downloads: 57,380, 13,033
    *   What they are: Highly efficient Text-to-Speech and streaming Speech Recognition models. Why trending: Signal a robust push into real-time, low-latency voice applications.

#### 🔧 Specialized Models (code, math, reasoning)
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   Author: WeiboAI | Likes: 402 | Downloads: 6,589
    *   What it is: A Qwen2-based math reasoning model. Why it's trending: Proves that tiny, optimized models can achieve impressive logical reasoning capabilities for edge deployment.
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *   Author: microsoft | Likes: 200 | Downloads: 957
    *   What it is: An Explorer SubAgent model designed for rapid context processing. Why it's trending: Targets the specific agentic need for parsing massive context windows quickly and cheaply.
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   Author: moonshotai | Likes: 876 | Downloads: 229,156
    *   What it is: A multimodal coding assistant. Why it's trending: Combines vision feature extraction with heavy coding optimizations, highly sought after by developers.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   Author: yuxinlu1 | Likes: 1,687 | Downloads: 211,424
    *   What it is: An aggressively tuned coding/reasoning GGUF based on Gemma-4. Why it's trending: Perfect storm of a popular base model, edge-ready format, and specialized coding focus.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   Author: HauhauCS | Likes: 1,966 | Downloads: 3,420,052
    *   What it is: An uncensored MoE vision model. Why it's trending: Massive download volume shows unyielding demand for uncensored, unrestricted local AI assistants.
*   **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) & [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   Author: unsloth | Likes: 305, 649 | Downloads: 164,209, 918,431
    *   What they are: Highly optimized GGUF quantizations of Google's latest models. Why it's trending: Unsloth remains the undisputed go-to curator for running cutting-edge models on consumer hardware.

### 3. Ecosystem Signal
The ecosystem is experiencing a paradigm shift toward highly efficient Mixture-of-Experts (MoE) and multimodal architectures. The Qwen 3.x and Gemma 4 families are completely dominating community activity, serving as the default backbones for almost all top-tier fine-tunes. **Open-weight dominance** is evident, with proprietary labs (Google, DeepSeek) releasing powerful open models that are immediately adapted by local developers. Furthermore, **GGUF and consumer hardware optimization** remain critical drivers of actual download volume. Models that offer quantized formats (via curators like Unsloth) or smaller active parameter counts (like 3B-4B specialized models) see millions of downloads, proving that real-world utility currently trumps raw, unoptimized parameter scaling. 

### 4. Worth Exploring
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: A must-try for developers building autonomous agents or robotics. Its ability to handle complex visual localization in such a small footprint is a game-changer for edge computing.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: With over 3.4 million downloads, this model is a prime candidate to study if you are looking for a highly capable, unrestricted local MoE model that balances vision and text without safety guardrails.
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**: Worth integrating into RAG (Retrieval-Augmented Generation) pipelines. Microsoft's focus on context speed via "Explorer SubAgents" hints at the future of cheap, hyper-fast tool-calling and document parsing.