# Hugging Face 热门模型日报 2026-07-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-09 22:27 UTC

---

这份报告为您梳理了 2026 年 7 月 10 日 Hugging Face Hub 上的最新热门模型动态。

# 🤗 Hugging Face 热门模型日报 (2026-07-10)

## 1. 今日速览
- **全能与端侧齐发**：[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) 与 [tencent/Hy3](https://huggingface.co/tencent/Hy3) 领衔国产大模型底层迭代，展现了在混合专家和高效文本生成上的最新突破。
- **视觉与空间理解爆发**：[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) 和 [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) 让小参数模型在目标定位和无限制文字识别上达到商用级别。
- **Qwen 3.5/3.6 与量化双雄称霸社区**：Qwen 架构（特别是 3.5 和 3.6 系列）已成为开源社区微调的绝对基石；同时，GGUF 端侧量化格式和 NVIDIA NVFP4 量化技术主导了本周的下载量榜单。

---

## 2. 热门模型分类

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  *作者: zai-org | 点赞: 3,722 | 下载: 362,300*
  一句话：采用 `glm_moe_dsa` 架构的最新一代通用大模型，兼具高效推理与对话能力，是榜单上最受欢迎的基础模型。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  *作者: tencent | 点赞: 603 | 下载: 5,572*
  一句话：腾讯推出的混元系列新一代文本生成模型，处于早期发布阶段，备受开发者关注。
- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
  *作者: meituan-longcat | 点赞: 163 | 下载: 1,107*
  一句话：美团推出的超长上下文对话模型，专攻长文本理解与生成。
- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
  *作者: SupraLabs | 点赞: 73 | 下载: 722*
  一句话：仅有 51M 参数的 Llama 架构路由器模型，为多模型混合推理提供了极速、低成本的调度方案。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  *作者: nvidia | 点赞: 2,685 | 下载: 1,447,244*
  一句话：NVIDIA 推出的 3B 参数视觉模型，能在图像中进行精准的目标定位与特征提取，下载量惊人。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  *作者: baidu | 点赞: 1,901 | 下载: 1,246,042*
  一句话：百度打造的无限制 OCR 模型，彻底解决复杂场景下的文字提取痛点。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  *作者: krea | 点赞: 569 | 下载: 157,302*
  一句话：知名生图应用 Krea 放出的极速版本扩散模型，大幅降低了高画质图像生成的延迟。
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) / [Patil/Krea-2-depth-controlnet](https://huggingface.co/Patil/Krea-2-depth-controlnet)**
  *作者: 社区开发者 | 点赞: 127 / 82*
  一句话：围绕 Krea-2 模型涌现的高质量社区插件，支持身份保持编辑和深度图控制，繁荣了图像生成生态。

### 🔧 专用模型（代码、数学、医疗、表格）
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  *作者: yuxinlu1 | 点赞: 2,666 | 下载: 703,735*
  一句话：基于 Gemma-4 架构的深度优化代码模型，逻辑推理与代码生成能力极其强悍。
- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
  *作者: google | 点赞: 328 | 下载: 16,374*
  一句话：Google 推出的表格基础模型，支持零样本下的表格分类与回归任务，拓宽了 AI 在结构化数据上的应用。
- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)**
  *作者: open-gigaai | 点赞: 80 | 下载: 0*
  一句话：近期刚开源的世界模型，致力于理解物理世界规律，极具前沿探索价值。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  *作者: HauhauCS | 点赞: 2,592 | 下载: 2,716,428*
  一句话：无审查版的 MoE 视觉语言模型，登顶今日下载榜，满足了社区对无限制对话和视觉理解的强需求。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  *作者: unsloth | 点赞: 1,024 | 下载: 2,894,918*
  一句话：Unsloth 出品的高质量 Qwen3.6 量化版，完美支持本地部署，下载量突破 280 万。
- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
  *作者: nvidia | 点赞: 332 | 下载: 748,054*
  一句话：NVIDIA 官方使用 Model Optimizer 量化的 Qwen 版本，展现了硬件厂商对开源生态的直接适配。

---

## 3. 生态信号
当前开源模型生态呈现三大明显趋势：
1. **Qwen 系列统治开发者生态**：榜单中大量热门模型（包括多模态、微调版、量化版）均基于 Qwen 3.5 或 3.6 架构。Qwen 已取代传统的 Llama 地位，成为社区最依赖的基座。
2. **软硬结合的量化新时代**：GGUF 等端侧量化格式依然拥有极高流量，同时 NVIDIA 等大厂开始直接下场提供 NVFP4 量化模型，表明“如何高效把大模型塞进显存”依然是核心刚需。
3. **小参数专项模型崛起**：以 LocateAnything-3B 和 Unlimited-OCR 为代表，结合具体工程痛点（如 OCR、目标定位）的几十亿参数级视觉模型，正在以超高的性价比蚕食原本属于巨型模型的商业落地场景。

---

## 4. 值得探索

1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   *推荐理由*：难得一见的“无审查+MoE+视觉”全能组合模型，兼具极高下载量和口碑，非常适合需要在本地部署且需要绕过安全限制进行内容生成的硬核开发者测试。

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   *推荐理由*：打破了“视觉定位需要大参数模型”的刻板印象。3B 参数带来了极高的推理速度，适合集成到无人机、机器人或自动化流水线等对实时性和目标识别要求极高的边缘计算场景。

3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   *推荐理由*：跳出了传统 NLP 和 CV 的内卷，Google 直接切入“表格理解”这一冷门但刚需的领域。对于做数据分析、BI 增强的开发者而言，这是一个极具开创性且值得抢先试水的基座模型。