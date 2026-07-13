# Hugging Face Trending Models Digest 2026-07-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-13 22:15 UTC

---

Here is the structured Hugging Face Trending Models Digest based on the provided data:

### 1. Today's Highlights
Today's Hugging Face trending list is heavily dominated by next-generation multimodal and lightweight Mixture-of-Experts (MoE) architectures. Qwen 3.5 and 3.6 are witnessing massive community adoption, particularly through heavily optimized quantizations (GGUF, NVFP4) and uncensored fine-tunes. Specialized utility models are also making a huge splash, with Baidu's Unlimited-OCR and Nvidia's LocateAnything-3B racking up millions of downloads for edge and enterprise use cases. Additionally, the open-source community is pushing the boundaries of local execution, with a strong emphasis on agentic models (Fable5) and advanced formatting templates.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | Author: tencent | Likes: 754 | Downloads: 9,157
    Tencent's latest foundational text-generation model, generating significant buzz as a major proprietary release.
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | Author: zai-org | Likes: 3,896 | Downloads: 464,914
    A highly anticipated conversational MoE model showing massive growth in both community approval and deployment.
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | Author: InternScience | Likes: 524 | Downloads: 29,801
    A powerful new image-text-to-text MoE model explicitly designed to power complex, autonomous AI agents.
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | Author: deepreinforce-ai | Likes: 867 | Downloads: 1,392,300
    A robust MIT-licensed LLM achieving massive download numbers due to its highly compatible endpoints.
*   **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | Author: SupraLabs | Likes: 113 | Downloads: 1,573
    An ultra-lightweight Llama-based router model designed to efficiently direct traffic in complex LLM pipelines.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | Author: baidu | Likes: 1,963 | Downloads: 1,506,937
    A specialized feature-extraction model by Baidu that is dominating the charts due to its high-utility OCR capabilities.
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Author: nvidia | Likes: 2,720 | Downloads: 1,503,441
    A highly efficient spatial recognition model by Nvidia that is being rapidly adopted for multimodal grounding tasks.
*   **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** | Author: robbyant | Likes: 92 | Downloads: 0
    An innovative image-to-video "World Model" optimized for fast, causal diffuser-based video generation.
*   **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** | Author: open-gigaai | Likes: 128 | Downloads: 0
    An Apache-2.0 licensed generative diffuser model hinting at large-scale world simulation capabilities.
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | Author: OpenMOSS-Team | Likes: 161 | Downloads: 39,509
    A highly accurate audio-text model automating complex speech recognition and speaker diarization tasks.
*   **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | Author: Alissonerdx | Likes: 124 | Downloads: 0
    A popular new LoRA for the LTX-Video pipeline enabling robust face and identity preservation during video generation.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | Author: yuxinlu1 | Likes: 1,176 | Downloads: 452,627
    A highly specialized terminal and coding model fine-tuned specifically for complex agentic workflows.
*   **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** | Author: nvidia | Likes: 114 | Downloads: 38,775
    A massive MoE text-generation model uniquely focused on advanced mathematical and logic puzzle resolution.
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | Author: google | Likes: 360 | Downloads: 21,590
    A foundational model by Google capable of zero-shot tabular classification and regression tasks.
*   **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | Author: conradlocke | Likes: 251 | Downloads: 0
    A specialized ComfyUI LoRA for the Krea-2 base model that allows for precise image editing and identity preservation.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | Author: unsloth | Likes: 1,073 | Downloads: 2,901,906
    A vital community quantization allowing users to run the massive multimodal Qwen 3.6 model locally via llama.cpp.
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | Author: empero-ai | Likes: 2,078 | Downloads: 1,985,221
    A heavily downloaded reasoning fine-tune of Qwen 3.5 that pushes the model's logic capabilities to new heights.
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | Author: HauhauCS | Likes: 2,703 | Downloads: 2,512,124
    A wildly popular community MoE fine-tune that strips away safety alignments for completely uncensored local generation.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | Author: froggeric | Likes: 886 | Downloads: 0
    A highly appreciated utility repository providing critical Jinja/MLX chat template fixes for the Qwen 3.5 ecosystem.
*   **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** | Author: unsloth | Likes: 161 | Downloads: 49,423
    The highly anticipated quantized release of the DeepSeek V4 Flash model, optimized for rapid local text generation.

---

### 3. Ecosystem Signal
The current ecosystem is firmly in the era of **Mixture-of-Experts (MoE) and Multimodality**, with Qwen 3.5/3.6 acting as the undeniable backbone of the open-source community. We are seeing a massive surge in fine-tunes that blend Qwen's architectures with new reasoning and agentic engines (like "Fable5" and "Claude-Mythos"). Furthermore, traditional LLMs are rapidly diversifying into hyper-specific niches—evidenced by Google's TabFM for tabular data, Nvidia's LocateAnything for spatial grounding, and OpenMOSS's transcription models. 

Quantization remains critical for adoption; **GGUF** formats dominate download counts, showing that local, on-device execution is still a massive driver of community engagement. Notably, the demand for **NVFP4** formats (led by Unsloth) signals a rapid ecosystem adaptation to newer Nvidia hardware. Meanwhile, the staggering download numbers for uncensored variants (HauhauCS) and template fixes prove the community strongly prioritizes model autonomy and developer control over heavily guarded proprietary APIs.

---

### 4. Worth Exploring
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: With over 1.5 million downloads, this model represents a massive leap in accessible computer vision. If you are building applications that require precise object detection, spatial awareness, or multimodal grounding, this 3B parameter model is highly efficient and worth immediate testing.
2. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**: Foundation models have mostly focused on text and images, but Google's TabFM explores a relatively untapped area: zero-shot tabular data processing. It is a highly valuable tool to study for data scientists looking to integrate ML into regression and classification without massive retraining overhead.
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: Boasting the highest weekly likes and downloads on the list, this model is the gold standard for understanding the current capabilities of community-driven MoE fine-tunes. It is a masterclass in how to optimize a 35B vision-language model for completely unrestricted, local deployment.