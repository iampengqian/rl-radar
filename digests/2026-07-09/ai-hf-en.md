# Hugging Face Trending Models Digest 2026-07-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-08 22:18 UTC

---

### Hugging Face Trending Models Digest — July 9, 2026

**1. Today's Highlights**
The Hugging Face ecosystem is currently dominated by advanced reasoning, agentic, and MoE (Mixture of Experts) architectures, with the Qwen 3.5/3.6 and DeepSeek V4 model families leading the charge. Local deployment continues to surge, evidenced by massive download numbers for GGUF and specialized quantized formats like NVFP4. Multimodal capabilities are expanding beyond standard text-to-image into niche applications like unlimited OCR and spatial location recognition. Meanwhile, community-driven uncensored, abliterated, and highly-tuned coding variants are seeing tremendous engagement, proving that open-weight customization remains a top priority for developers.

**2. Trending Models**

**🧠 Language Models (LLMs, chat models, instruction-tuned)**
- **zai-org/GLM-5.2** ([Link](https://huggingface.co/zai-org/GLM-5.2)) | Author: zai-org | Likes: 3,661 | Downloads: 281,584
  A highly popular conversational MoE model gaining traction for its robust text generation and conversational capabilities.
- **tencent/Hy3** ([Link](https://huggingface.co/tencent/Hy3)) | Author: tencent | Likes: 556 | Downloads: 121
  The latest generation of Tencent's Hunyuan model, making waves as a newly released base text-generation model.
- **deepseek-ai/DeepSeek-V4-Pro-DSpark** ([Link](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)) | Author: deepseek-ai | Likes: 437 | Downloads: 15,538
  A powerful new release in the DeepSeek V4 lineage, driving significant interest for advanced reasoning and text generation.
- **meituan-longcat/LongCat-2.0** ([Link](https://huggingface.co/meituan-longcat/LongCat-2.0)) | Author: meituan-longcat | Likes: 151 | Downloads: 385
  Meituan's conversational model designed for extended context windows, catering to complex, long-form text generation.
- **poolside/Laguna-XS-2.1** ([Link](https://huggingface.co/poolside/Laguna-XS-2.1)) | Author: poolside | Likes: 76 | Downloads: 3,385
  A compact and efficient text-generation model tailored for conversational AI and general instruct tasks.

**🎨 Multimodal & Generation**
- **nvidia/LocateAnything-3B** ([Link](https://huggingface.co/nvidia/LocateAnything-3B)) | Author: nvidia | Likes: 2,667 | Downloads: 1,424,958
  A groundbreaking image-text-to-text model from NVIDIA that excels in spatial understanding and feature extraction.
- **baidu/Unlimited-OCR** ([Link](https://huggingface.co/baidu/Unlimited-OCR)) | Author: baidu | Likes: 1,869 | Downloads: 1,084,945
  A highly sought-after image-text-to-text model removing traditional resolution and length limits for optical character recognition.
- **krea/Krea-2-Turbo** ([Link](https://huggingface.co/krea/Krea-2-Turbo)) | Author: krea | Likes: 553 | Downloads: 123,729
  A lightning-fast text-to-image diffusion model built for high-quality, real-time generative workflows.
- **conradlocke/krea2-identity-edit** ([Link](https://huggingface.co/conradlocke/krea2-identity-edit)) | Author: conradlocke | Likes: 97 | Downloads: 0
  A ComfyUI-compatible LoRA for Krea-2 that enables precise identity preservation and image editing.
- **eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B** ([Link](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)) | Author: eric-venti-seeds | Likes: 107 | Downloads: 0
  A specialized image-to-image LoRA designed to give creators granular control over lighting and sun direction.

**🔧 Specialized Models (code, math, medical, embeddings)**
- **google/tabfm-1.0.0-pytorch** ([Link](https://huggingface.co/google/tabfm-1.0.0-pytorch)) | Author: google | Likes: 310 | Downloads: 9,458
  Google's foundation model for zero-shot tabular classification and regression, pushing the boundaries of structured data processing.
- **mistralai/Leanstral-1.5-119B-A6B** ([Link](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)) | Author: mistralai | Likes: 163 | Downloads: 157
  A massive 119B parameter MoE model specialized for formal mathematics and theorem proving (Lean).
- **AliesTaha/fable-traces** ([Link](https://huggingface.co/AliesTaha/fable-traces)) | Author: AliesTaha | Likes: 187 | Downloads: 3,886
  An instruct-tuned Qwen3 model designed for complex reasoning and trace generation.
- **InternScience/Agents-A1** ([Link](https://huggingface.co/InternScience/Agents-A1)) | Author: InternScience | Likes: 397 | Downloads: 14,723
  A multimodal MoE model built specifically to power autonomous agents and complex workflow automation.

**📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)**
- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([Link](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)) | Author: HauhauCS | Likes: 2,573 | Downloads: 2,823,988
  A highly downloaded, uncensored GGUF MoE variant of Qwen3.6 offering aggressive, unfiltered responses and vision capabilities.
- **unsloth/Qwen3.6-27B-MTP-GGUF** ([Link](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)) | Author: unsloth | Likes: 1,008 | Downloads: 2,842,118
  Unsloth's optimized GGUF release of the multimodal Qwen3.6 model, dominating local deployment charts with millions of downloads.
- **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** ([Link](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)) | Author: yuxinlu1 | Likes: 2,650 | Downloads: 674,977
  A heavily tuned Gemma-4 GGUF variant optimized specifically for coding and advanced reasoning tasks.
- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** ([Link](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)) | Author: empero-ai | Likes: 1,844 | Downloads: 1,683,711
  A reasoning-focused Qwen3.5 GGUF quantization featuring an extended 1M context window, styled with Claude-like conversational behavior.
- **deepreinforce-ai/Ornith-1.0-35B-GGUF** ([Link](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)) | Author: deepreinforce-ai | Likes: 800 | Downloads: 502,663
  The GGUF quantization of the 35B Ornith model, making the large MoE architecture accessible for local text generation.
- **nvidia/Qwen3.6-27B-NVFP4** ([Link](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)) | Author: nvidia | Likes: 323 | Downloads: 538,687
  NVIDIA's hardware-optimized NVFP4 quantization of Qwen3.6, maximizing inference throughput on modern GPUs.
- **froggeric/Qwen-Fixed-Chat-Templates** ([Link](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)) | Author: froggeric | Likes: 776 | Downloads: 0
  A crucial utility repository providing corrected Jinja chat templates to fix formatting issues across Qwen 3.5 models.
- **huihui-ai/Huihui-GLM-5.2-abliterated-GGUF** ([Link](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)) | Author: huihui-ai | Likes: 193 | Downloads: 7,349
  An "abliterated" GGUF version of GLM-5.2 that removes refusal mechanisms, highly popular for unrestricted local use.

**3. Ecosystem Signal**
The ecosystem is currently experiencing a massive shift toward MoE (Mixture of Experts) and highly capable mid-sized models (9B to 35B), primarily driven by the Qwen 3.5/3.6 and DeepSeek V4 families. Qwen completely dominates the trending charts, acting as the foundational base for everything from agentic frameworks to vision-language models (VLMs). 

Open-weight and local deployment trends are stronger than ever, with GGUF quantizations racking up millions of downloads weekly. Creators like Unsloth are pivotal in this space, providing hardware-specific optimizations like NVFP4 and MLX. Furthermore, there is a stark, undeniable demand for uncensored and "abliterated" models, as seen with HauhauCS and huihui-ai, indicating that developers want raw, unfiltered model capabilities. 

Simultaneously, the community is branching into highly specialized domains. Google's TabFM and Mistral's Leanstral target structured data and formal mathematics respectively, while Baidu and NVIDIA push the boundaries of specialized OCR and spatial multimodal models. 

**4. Worth Exploring**

- **baidu/Unlimited-OCR** ([Link](https://huggingface.co/baidu/Unlimited-OCR))
  *Why:* OCR has traditionally been a fragmented pain point in AI. Baidu's approach to "unlimited" resolution and feature extraction could fundamentally change document processing workflows. With over a million downloads in a week, it is a must-try for anyone handling RAG or document automation.

- **google/tabfm-1.0.0-pytorch** ([Link](https://huggingface.co/google/tabfm-1.0.0-pytorch))
  *Why:* Tabular data has been largely left behind by the LLM boom. Google's foundation model for zero-shot tabular classification and regression is an exciting pivot back to structured data, worth studying for data scientists looking to integrate AI into traditional database pipelines.

- **zai-org/GLM-5.2** ([Link](https://huggingface.co/zai-org/GLM-5.2))
  *Why:* As the most liked model on the platform this week, GLM-5.2 leverages a unique `glm_moe_dsa` architecture. It represents a strong alternative to the Qwen/DeepSeek duopoly, making it an essential model to benchmark for conversational and general text generation tasks.