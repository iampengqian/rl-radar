# Hugging Face Trending Models Digest 2026-05-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-22 22:17 UTC

---

Here is the Hugging Face Trending Models Digest for May 23, 2026.

### 1. Today's Highlights
This week's Hugging Face trending charts are dominated by the highly anticipated releases of the DeepSeek-V4 and Qwen3.6 model families, both pushing the boundaries of open-weight performance. Multimodal and vision-language models continue to surge, heavily led by Google's Gemma-4 and ByteDance's new any-to-any "Lance" architecture. There is also a noticeable spike in highly specialized audio-visual generation tools, ranging from realistic text-to-speech cloning to state-of-the-art video and 3D synthesis. Meanwhile, community-driven quantizations and fine-tunes remain as active as ever, ensuring these massive new models are readily accessible for local deployment.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   Author: deepseek-ai | Likes: 4,151 | Downloads: 4,287,396
    *   The flagship heavy-weight text generation model of the DeepSeek-V4 family, trending due to its massive parameter count and state-of-the-art conversational capabilities.
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   Author: deepseek-ai | Likes: 1,189 | Downloads: 2,556,531
    *   A lighter, faster iteration of the V4 architecture designed for high-speed text generation without compromising conversational quality.
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   Author: google | Likes: 2,730 | Downloads: 10,283,716
    *   Google's latest instruction-tuned Gemma release, dominating the charts with over 10 million downloads thanks to its powerful image-text-to-text capabilities.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    *   Author: bytedance-research | Likes: 640 | Downloads: 1,001
    *   A versatile any-to-any multimodal model capable of advanced image and video generation, making huge waves upon its initial release.
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   Author: SulphurAI | Likes: 1,265 | Downloads: 1,249,582
    *   A highly downloaded text-to-video foundation model that has quickly become a community favorite for open-weight video generation workflows.
*   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    *   Author: circlestone-labs | Likes: 1,494 | Downloads: 602,483
    *   A wildly popular ComfyUI-compatible diffusion model, trending due to its exceptional aesthetics and massive local adoption via single-file weights.
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
    *   Author: Supertone | Likes: 578 | Downloads: 37,545
    *   A high-fidelity text-to-speech synthesis model that is gaining rapid traction for its ultra-realistic speech generation capabilities.
*   **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
    *   Author: ResembleAI | Likes: 226 | Downloads: 1,354
    *   A cutting-edge text-to-speech model tailored for dramatic voice cloning and expressive audio generation.
*   **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
    *   Author: TencentARC | Likes: 190 | Downloads: 0
    *   A newly released image-to-3D pipeline that is generating massive community buzz for its high-quality 3D asset synthesis.
*   **[Efficient-Large-Model/SANA-WM_bidirectional](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional)**
    *   Author: Efficient-Large-Model | Likes: 82 | Downloads: 0
    *   A state-of-the-art image-to-video diffusion model turning heads with its precise camera control and bidirectional movement synthesis.

#### 🔧 Specialized Models (code, math, medical, embeddings)
*   **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B) & [tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
    *   Author: tencent | Likes: 274 & 198 | Downloads: 564 & 224
    *   Tencent's new Hunyuan-powered translation models offering highly efficient, dedicated text translation across dense and sparse architectures.
*   **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
    *   Author: numind | Likes: 74 | Downloads: 7,576
    *   A specialized vision-language model fine-tuned for robust image-to-text data extraction tasks.
*   **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**
    *   Author: NemoStation | Likes: 249 | Downloads: 4,002
    *   A compact 2B parameter video-text-to-text model optimized for fast video understanding and captioning.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) & [unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
    *   Author: unsloth | Likes: 409 & 331 | Downloads: 532,255 & 466,060
    *   Highly optimized GGUF quantizations of the Qwen3.6 multimodal models, driving massive downloads among local inference practitioners.
*   **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)**
    *   Author: Jackrong | Likes: 160 | Downloads: 28,599
    *   A specialized community merge/finetune tailored for coding tasks, brought to local users via highly efficient GGUF formatting.
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   Author: froggeric | Likes: 367 | Downloads: 0
    *   An essential utility repository trending rapidly for providing fixed, reliable Jinja chat templates for the newly released Qwen models.
*   **[CohereLabs/command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4)**
    *   Author: CohereLabs | Likes: 171 | Downloads: 2,127
    *   An aggressively quantized (4-bit) vision-language variant of Cohere's Command A+, balancing multimodal reasoning with consumer-grade hardware constraints.

### 3. Ecosystem Signal
The Hugging Face ecosystem in mid-2026 is defined by two major technological shifts: the ubiquity of native multimodality and the maturation of Mixture-of-Experts (MoE) architectures. The **Qwen3.6** family (especially the 35B-A3B MoE) and **DeepSeek-V4** are dominating download charts, proving that open-weight models are successfully rivaling proprietary APIs by offering unparalleled parameter efficiency. 

Google's **Gemma-4** crossing 10 million weekly downloads highlights that enterprise-backed open-weight releases remain highly trusted. Furthermore, specialized generation is branching out aggressively; audio (Supertone, Dramabox) and 3D (Pixal3D) are seeing the same rapid community iteration that text-to-image saw two years ago. 

Finally, the immediate availability of **Unsloth** GGUF quantizations and Jinja chat-template fixes concurrently with base model drops indicates a highly synchronized, mature open-source community that ensures new frontier models are local-inference ready within hours of release.

### 4. Worth Exploring
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**: As an "any-to-any" pipeline, this model represents the next frontier of generative AI. It is definitely worth studying to see how ByteDance unifies text, image, and video generation into a single architecture.
*   **[Efficient-Large-Model/SANA-WM_bidirectional](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional)**: For developers working in video generation, SANA's bidirectional camera control offers a massive leap in user-directed motion, moving beyond standard forward-generation latent diffusion.
*   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**: With nearly 1,500 likes and over 600k downloads in a short time, this ComfyUI-focused diffusion model is a must-try for digital artists looking to tap into current aesthetic trends.