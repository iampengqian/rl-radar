# Hugging Face Trending Models Digest 2026-07-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-15 22:17 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
Today's Hugging Face trending charts are dominated by massive breakthroughs in extreme model quantization and efficiency, with 1-bit and sub-4-bit architectures like the Ternary-Bonsai gaining massive community traction. Multimodal capabilities continue to evolve rapidly, particularly in specialized vision tasks, as seen in the immense download volumes for Baidu's Unlimited-OCR and HauhauCS's Uncensored Qwen model. The open-weight ecosystem is also seeing aggressive scaling and iteration on proprietary limits, highlighted by Tencent's Hy3, Zhipu AI's GLM-5.2 MoE, and heavily tuned agentic models like Gemma-4. Overall, the platform reflects a strong push towards running highly capable, reasoning-heavy models locally via optimized formats like GGUF and MLX.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | *Author: zai-org | Likes: 3,990 | Downloads: 489,611*
    A next-generation Mixture-of-Experts (MoE) text generation model that is trending due to its massive scale and highly capable conversational performance.
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | *Author: tencent | Likes: 799 | Downloads: 10,406*
    Tencent’s latest iteration of the Hunyuan large language model, drawing significant attention for its advanced native text-generation capabilities.
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | *Author: InternScience | Likes: 552 | Downloads: 30,539*
    A Qwen-based MoE model designed specifically for complex agentic workflows and image-text processing, signaling a major trend toward multi-step reasoning agents.
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | *Author: Cactus-Compute | Likes: 236 | Downloads: 571*
    A highly anticipated model built in JAX focusing on native function-calling and tool-use, aiming to set a new standard for open-source API interactions.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | *Author: deepreinforce-ai | Likes: 891 | Downloads: 1,533,354*
    A powerful 35B parameter text-generation model formatted for local deployment, driving massive download numbers from users seeking high-end local inference.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | *Author: baidu | Likes: 2,001 | Downloads: 1,715,301*
    An incredibly popular image-text-to-text model that solves long-standing OCR limitations, accruing massive downloads due to its high accuracy in feature extraction.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | *Author: HauhauCS | Likes: 2,757 | Downloads: 2,443,871*
    An aggressive, uncensored vision-capable MoE model that is dominating the charts by offering completely unrestricted multimodal interactions.
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | *Author: thinkingmachines | Likes: 282 | Downloads: 0*
    An omnichannel multimodal base model handling image, text, and audio, highly upvoted as a promising new architecture for unified AI processing.
*   **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** | *Author: robbyant | Likes: 99 | Downloads: 0*
    A cutting-edge image-to-video "World Model" that has the community buzzing for its fast, physics-accurate video generation capabilities.
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | *Author: OpenMOSS-Team | Likes: 211 | Downloads: 65,109*
    A highly efficient audio-text-to-text model gaining traction for its robust real-time transcription and speaker diarization features.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | *Author: yuxinlu1 | Likes: 1,198 | Downloads: 468,629*
    A highly specialized Gemma-4 derivative tuned specifically for terminal usage and advanced coding tasks, beloved by developers for agentic coding workflows.
*   **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | *Author: ATH-MaaS | Likes: 116 | Downloads: 745*
    A targeted multimodal model fine-tuned exclusively for high-fidelity OCR tasks, serving as a lightweight alternative to larger vision models.
*   **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | *Author: conradlocke | Likes: 306 | Downloads: 0*
    A ComfyUI-ready LoRA that provides precise identity-preserving image editing capabilities for the Krea-2 architecture.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | *Author: prism-ml | Likes: 447 | Downloads: 23*
    A groundbreaking 2-bit ternary quantized model that allows a 27B parameter architecture to run efficiently on consumer hardware, sparking huge community interest.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | *Author: empero-ai | Likes: 2,210 | Downloads: 2,006,265*
    A massively downloaded GGUF fine-tune of Qwen3.5 mimicking proprietary reasoning models, boasting a massive 1-million-token context window.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | *Author: froggeric | Likes: 915 | Downloads: 0*
    An essential community utility providing fixed Jinja chat templates for Qwen models, heavily liked for solving critical inference bugs for local users.
*   **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** | *Author: unsloth | Likes: 180 | Downloads: 55,222*
    Unsloth’s highly optimized GGUF release of the new DeepSeek-V4 Flash model, praised for drastically reducing memory requirements while maintaining reasoning speed.
*   **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | *Author: GnLOLot | Likes: 246 | Downloads: 89,892*
    A remarkably smart 1B parameter model fine-tuned on "Claude-Opus" reasoning traces, proving that tiny models can execute complex "thinking" operations.

### 3. Ecosystem Signal
The current ecosystem is defined by an aggressive push towards **hyper-efficient inference** and **MoE (Mixture of Experts) dominance**. The Qwen ecosystem (versions 3.5 and 3.6) is currently the undisputed backbone of the open-weight community, serving as the base for everything from aggressive uncensored vision models to specialized OCR pipelines. Meanwhile, proprietary limits are being challenged heavily by open-weight giants like Tencent (Hy3) and Zhipu AI (GLM-5.2), which are bringing enterprise-grade MoE architectures directly to the Hub. 

Crucially, there is a quantization revolution happening. Innovators like `prism-ml` are pioneering 1-bit and 2-bit "Ternary" models, allowing 27B+ models to run on standard hardware. Formats like GGUF and MLX remain the gold standard for local deployment, reinforced by community utilities fixing chat templates and INT4/MoE streaming optimizations. Finally, the community is shifting away from purely conversational models towards highly actionable tools—agentic coders, long-context (1M token) reasoners, and unlimited OCR systems dominate the download charts.

### 4. Worth Exploring
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**: A must-study for anyone interested in the future of Edge AI. Its 2-bit ternary weight approach represents a massive leap forward in making large models runnable on standard consumer laptops without total degradation of capability.
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: With nearly 2 million downloads, this model is actively solving a major pain point in the open-source community. It is highly worth trying for developers building document-processing pipelines, RAG systems, or data extraction tools.
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**: For software engineers, this Gemma-4 terminal-tuned model is a goldmine. It represents the cutting edge of open-source, locally-run models explicitly formatted to act as autonomous coding agents in the CLI.