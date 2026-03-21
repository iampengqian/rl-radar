# RL Open Source Daily Digest 2026-03-22

> Generated: 2026-03-21 22:01 UTC | Projects covered: 15

- [ROLL](https://github.com/alibaba/ROLL)
- [ROCK](https://github.com/alibaba/ROCK)
- [slime](https://github.com/THUDM/slime)
- [AReaL](https://github.com/inclusionAI/AReaL)
- [TRL](https://github.com/huggingface/trl)
- [Tianshou](https://github.com/thu-ml/tianshou)
- [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)
- [verl](https://github.com/volcengine/verl)
- [torchtune](https://github.com/pytorch/torchtune)
- [Open Instruct](https://github.com/allenai/open-instruct)
- [CleanRL](https://github.com/vwxyzjn/cleanrl)
- [rl_games](https://github.com/Denys88/rl_games)
- [Gymnasium](https://github.com/Farama-Foundation/Gymnasium)
- [PettingZoo](https://github.com/Farama-Foundation/PettingZoo)
- [Stable Baselines3](https://github.com/DLR-RM/stable-baselines3)

---

## Cross-Project Comparison

## Ecosystem Overview
The RL open-source ecosystem on 2026-03-22 is defined by a clear bifurcation: intense development in **LLM Post-Training (RLHF)** frameworks versus dormancy in traditional RL libraries. Activity is heavily concentrated in five major projects (**verl, TRL, slime, AReaL, Open Instruct, ROLL**), all of which are racing to stabilize **GRPO (Group Relative Policy Optimization)**, expand **multimodal support**, and optimize distributed infrastructure. Meanwhile, traditional control-focused libraries (Stable Baselines3, CleanRL, Tianshou) and idle LLM projects (OpenRLHF, ROCK) saw no activity.

The dominant technical theme is **infrastructure plumbing**—specifically fixing distributed weight synchronization, serialization bottlenecks for Vision-Language Models (VLMs), and hardware portability (Ascend NPU, CoreX).

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | High (Reproducibility, FP8, Ascend) | High (Qwen3.5 FSDP, Distillation) | 0 | 🔥 **Critical Scaling** |
| **TRL** | Medium (vLLM Sync, Templates) | High (VESPO, SDPO, Async GRPO) | 1 (v1.0.0rc1) | 🚀 **Feature Velocity** |
| **slime** | Medium (VLM stability, OOM) | Medium (GLM4V, MLflow) | 0 | 🧪 **Multimodal Push** |
| **AReaL** | Medium (RPC Serialization) | Medium (IPv6, VLM fixes) | 0 | 🛠️ **Infra Stabilization** |
| **Open Instruct** | 0 | Medium (PPO, SFT bugs) | 0 | 🔧 **Maintenance/Hybrid** |
| **ROLL** | 0 | Low (Multi-LoRA, CoreX) | 0 | ⏳ **Infra Scaling** |
| **Gymnasium** | Low (Ant-v5 bug) | Low (Docs) | 0 | 📉 **Stable/Maintenance** |
| **Others*** | 0 | 0 | 0 | 💤 **Inactive** |

*\*Others include: CleanRL, OpenRLHF, PettingZoo, rl_games, ROCK, Stable Baselines3, Tianshou, torchtune.*

## Shared Research & Engineering Directions

**Research Directions**
*   **Evolution of GRPO:** Projects are rapidly iterating beyond standard implementation. **TRL** merged **SDPO** (Self-Distillation Policy Optimization) and **VESPO** (Variational Sequence-Level Soft Policy Optimization), while **Open Instruct** is merging PPO-style value models into GRPO workflows, indicating a trend toward hybrid advantage estimation techniques.
*   **On-Policy Distillation:** **verl** merged support for on-policy distillation across FSDP and Megatron backends, signaling a shift toward using RL for knowledge compression in addition to alignment.

**Engineering & Infrastructure Directions**
*   **Multimodal Serialization Bottlenecks:** A cross-project struggle with VLMs is evident. **AReaL** (#1069) and **slime** (#1673) both faced critical bugs where distributed weight updates and RPC calls failed when handling image payloads (PIL) in non-colocated environments.
*   **vLLM Integration Fatigue:** Synchronizing weights between training frameworks and **vLLM** inference engines remains a fragile point. **TRL** (#5312) and **verl** (#5683) both grappled with synchronization failures, sleep mode incompatibilities, and quantization errors.
*   **Hardware Vendor Diversity:** There is a concerted push to break NVIDIA's stranglehold. **verl** is validating on **Huawei Ascend NPU**, **ROLL** is adding **CoreX BI-V150** support, and **AReaL** added **IPv6** support for specialized cloud environments.

## Differentiation Analysis

*   **TRL vs. verl (The Algorithm vs. Scale War):**
    **TRL** is differentiating via **algorithmic velocity**, acting as the primary vehicle for translating 2026 SOTA papers (VESPO, SDPO) into production code. Conversely, **verl** is focusing on **hardware scale and model support**, leading the charge on massive models (DeepSeek V3, Qwen3.5 35B) and alternative hardware (Ascend NPU).
*   **Multimodal RL Leaders:**
    While most frameworks are text-centric, **slime** and **AReaL** are carving out niches in **Multimodal RLHF**. Slime focuses on the "User Layer" (GLM4V, InternVL support), while AReaL focuses on the "Transport Layer" (fixing RPC serialization for image data).
*   **Resource Orchestration:**
    **ROLL** is uniquely positioned as a "System/Cluster" optimizer, focusing on **GPU time-sharing** and **Multi-LoRA concurrency** to maximize throughput, rather than just model performance.

## Community Momentum & Maturity

*   **High Velocity (TRL, verl):** These projects show "Hyper-Growth" signals. TRL's release of v1.0.0rc1 and verl's rapid merging of FSDP patches indicate mature, high-bandwidth teams responding quickly to the Qwen3.5 release.
*   **Niche Scaling (slime, AReaL):** These projects are in a "Problem-Solving" phase. They are less about new features and more about fixing the "plumbing" required to make multimodal RL work in distributed clusters.
*   **Silent Majority:** The lack of activity in **OpenRLHF**, **Stable Baselines3**, and **torchtune** suggests a consolidation in the market. The center of gravity has shifted entirely toward the high-throughput, LLM-centric frameworks (verl/TRL), leaving traditional RL libraries behind.

## Trend Signals

*   **Rise of GRPO-Plus:** The industry is standardizing on GRPO but is actively layering it with value models (PPO-style) and distillation techniques to improve stability and efficiency.
*   **The Distributed Synchronization Problem:** As models grow to 30B+ parameters and incorporate images, the difficulty of moving weights and data between training and inference engines (Ray, vLLM, RPC) has become the primary bottleneck, overtaking algorithm design as the main engineering challenge.
*   **Post-NVIDIA Hardware Ecosystem:** The specific PRs for Huawei Ascend (verl) and CoreX (ROLL) suggest that production RL workloads are actively migrating to diversified hardware stacks in early 2026.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL Daily Digest for **2026-03-22**.

### 📰 RL Daily Digest: ROLL Ecosystem
**Date:** 2026-03-22 | **Project:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

---

#### 1. Today's Highlights
Activity on the ROLL repository remains focused on infrastructure scaling and hardware compatibility. There were **no new releases or issue updates** in the last 24 hours. Development momentum is centered on two significant Pull Requests: enabling concurrent Multi-LoRA capabilities and expanding backend support for CoreX hardware.

#### 2. Releases
*   **None** (No new releases in the last 24 hours).

#### 3. Important Issues
*   **None** (No issues created or updated in the last 24 hours).

#### 4. Key PR Progress
*   **[WIP] Multi-LoRA & GPU Time-Sharing for RLix**
    *   **PR:** [#378](https://github.com/alibaba/ROLL/pull/378)
    *   **Author:** [taoluo](https://github.com/taoluo)
    *   **Status:** Open (Updated 2026-03-21)
    *   **Details:** This is a substantial architectural update introducing concurrent training for multiple LoRA adapters. Crucially, it integrates GPU time-sharing support via the RLix control plane, aiming to maximize hardware utilization during RL fine-tuning tasks.
*   **CoreX BI-V150 Compatibility**
    *   **PR:** [#393](https://github.com/alibaba/ROLL/pull/393)
    *   **Author:** [lxzlxzliuxuzhao](https://github.com/lxzlxzliuxuzhao)
    *   **Status:** Open (Updated 2026-03-21)
    *   **Details:** This PR adds compatibility layers for the CoreX BI-V150 hardware, broadening the accelerator support matrix for the ROLL framework.

#### 5. Why This Project Matters in Today's RL Landscape
As of 2026, the bottleneck in Reinforcement Learning has shifted from pure algorithmic design to **resource orchestration**. ROLL’s focus on **Multi-LoRA concurrency** and **GPU time-sharing (PR #378)** addresses the critical inefficiency of idle GPU resources during the inference-heavy cycles of RLHF (Reinforcement Learning from Human Feedback). By optimizing the control plane (RLix) to handle multiple adapters simultaneously, ROLL is positioning itself as a high-throughput solution for fine-tuning Large Language Models (LLMs) efficiently.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime
**Date:** 2026-03-22

## 1. Today's Highlights
The **slime** repository saw significant activity focused on **Multimodal RL** and **infrastructure stability**. Key developments include robust support for the **GLM4V** multimodal model and critical bug fixes for distributed training in non-colocated environments. The community is actively pushing for broader experiment tracking compatibility (MLflow) and context parallelism for large-scale models.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **VLM Training Stability in Non-Colocate Mode:** Issue [#1673](https://github.com/THUDM/slime/issues/1673) (Closed) identified a critical bug where `UpdateWeightFromDistributed` corrupts weights for Vision-Language Models (VLM) when not using `--colocate`, causing SGLang crashes. This highlights the fragility of current distributed weight synchronization for multimodal models.
*   **Long Context OOM:** Issue [#1744](https://github.com/THUDM/slime/issues/1744) requests Context Parallelism (CP) support for GDN layers to resolve Out-Of-Memory errors during backpropagation on **Qwen3.5-27B** long-context training.
*   **Reproducibility Concerns:** Issue [#1724](https://github.com/THUDM/slime/issues/1724) noted abnormal reward curves in `geo3k_multi_turn` reproduction, prompting investigation into environment setups.

## 4. Key PR Progress
*   **Multimodal Enhancements (Merged):** PR [#1745](https://github.com/THUDM/slime/pull/1745) significantly improved **GLM4V** support, adding fallback processors and fixing multimodal payload handling in SGLang rollout.
*   **Infrastructure Refactor (Merged):** PR [#1746](https://github.com/THUDM/slime/pull/1746) introduced a metrics router for W&B and improved worker group management.
*   **New Tracker Support (Open):** PR [#1591](https://github.com/THUDM/slime/pull/1591) proposes a modular tracking interface with **MLflow** backend, moving away from hardcoded logging solutions.
*   **Model Support:** PR [#1660](https://github.com/THUDM/slime/pull/1660) added support for **InternVL 3.5**.

## 5. Why This Project Matters in Today's RL Landscape
As RL moves beyond text-only LLMs, **slime** is positioning itself as a critical framework for **Multimodal RLHF**. The recent focus on fixing VLM weight synchronization bugs (#1673) and refining GLM4V handling demonstrates a commitment to the complex engineering requirements of Vision-Language models. Furthermore, community requests for CP support on GDN layers (#1744) show that slime is being stress-tested on **frontier-scale models** (27B+), making it a project to watch for high-performance, large-scale alignment tasks.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-03-22

## 1. Today's Highlights
The AReaL ecosystem is currently focused on **stabilizing multimodal training infrastructures** and expanding **network compatibility**. The primary activity revolves around fixing serialization bottlenecks for Vision-Language Models (VLMs) and adapting the framework for specialized hardware environments via Megatron-Bridge.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
Developers working with VLMs are reporting critical failures in distributed settings.
*   **VLM RPC Serialization Failure ([#1069](https://github.com/inclusionAI/AReaL/issues/1069)):** Users report that VLM RPC serialization fails specifically when handling PIL images and `Qwen2_5_VLProcessor`. The author confirms the bug is reproducible in the official Docker environment.
*   **Connection Instability with Large Batches ([#1071](https://github.com/inclusionAI/AReaL/issues/1071)):** A "Connection reset by peer" error is occurring during `RTensor` fetch operations in `compute_logp`, specifically when processing large multimodal batches.

## 4. Key PR Progress
Significant patches are underway to address the issues above, alongside infrastructure upgrades.
*   **Fix: VLM RPC Serialization ([#1070](https://github.com/inclusionAI/AReaL/pull/1070)):** Directly addresses Issue #1069 by adding serialization support for PIL image payloads and Hugging Face `ProcessorMixin` metadata.
*   **Infra: Unified RTensor Serialization ([#1067](https://github.com/inclusionAI/AReaL/pull/1067)):** Refactors the data proxy logic to use a unified serialization path (`serialize_value`), potentially fixing the connectivity issues noted in #1071.
*   **Feat: IPv6 Support ([#1072](https://github.com/inclusionAI/AReaL/pull/1072)):** Enables model training in IPv6-only cloud environments, broadening deployment compatibility.
*   **Feat: Megatron Bridge Adaptation ([#1056](https://github.com/inclusionAI/AReaL/pull/1056)):** Continues the integration of Megatron-Bridge (referencing RFC #1055), introducing a `bridge_type` parameter to ease hardware adaptation without breaking existing flows.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a robust, distributed RL framework capable of handling the complexities of **large-scale multimodal models**. By actively resolving low-level RPC serialization bugs and supporting advanced distributed training patterns (like Megatron-Bridge and IPv6-only clusters), AReaL is addressing the "plumbing" challenges that often bottleneck RL Fine-Tuning (RLFT) for modern VLMs.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL
**Date:** 2026-03-22

## 1. Today's Highlights
The TRL ecosystem is actively stabilizing its **GRPO (Group Relative Policy Optimization)** and **Async GRPO** implementations. Key focus areas include compatibility with **vLLM** weight synchronization and refining **Qwen3/3.5** chat template handling for tool usage. Additionally, the community is expanding algorithmic support with **SDPO** and improving distributed training via **Tensor Parallelism**.

## 2. Releases
### v1.0.0rc1
The first release candidate for v1.0.0 introduces **Variational Sequence-Level Soft Policy Optimization (VESPO)**.
- **Link:** [Release v1.0.0rc1](https://github.com/huggingface/trl/releases/tag/v1.0.0rc1)
- **Context:** Based on [arXiv:2602.10693](https://huggingface.co/papers/2602.10693), VESPO offers a new approach to sequence-level optimization.

## 3. Important Issues
*   **vLLM Weight Synchronization Failure ([#5312](https://github.com/huggingface/trl/issues/5312))**
    *   **Context:** A critical bug prevents GRPO training from working correctly with `vllm_mode="colocate"` when `vllm_enable_sleep_mode=True` due to weight desynchronization.
*   **Qwen3 Template Parsing Error ([#5317](https://github.com/huggingface/trl/issues/5317))** [CLOSED]
    *   **Context:** `GRPOTrainer` failed to handle the `\n` token between the EOS and tool suffix for Qwen3/3.5. Resolved via PR [#5330](https://github.com/huggingface/trl/pull/5330).
*   **Transformers v5 Dtype Defaults ([#5329](https://github.com/huggingface/trl/issues/5329))**
    *   **Context:** Documentation is outdated following `transformers` changes to `AutoModel` loading behavior, requiring updates to TRL's training-oriented defaults.

## 4. Key PR Progress
*   **[Feature] SDPO Trainer ([#4935](https://github.com/huggingface/trl/pull/4935))**
    *   Implements **Self-Distillation Policy Optimization** (arXiv:2601.20802), augmenting on-policy optimization with self-distillation from high-reward trajectories.
*   **[Fix] vLLM Sync & Sleep Mode ([#5313](https://github.com/huggingface/trl/pull/5313))**
    *   Proposes a fix for the weight synchronization bug in colocated vLLM training identified in Issue #5312.
*   **[Refactor] Async GRPO Staleness Handling ([#5320](https://github.com/huggingface/trl/pull/5320))**
    *   Introduces logic to cancel stale inflight tasks in `AsyncGRPOTrainer`, improving stability during asynchronous rollouts.
*   **[Fix] Qwen3 Tool Suffix ([#5330](https://github.com/huggingface/trl/pull/5330))** [CLOSED]
    *   Patched EOS slicing logic for tool suffixes to support Qwen3/3.5 chat templates.
*   **[Feat] Tensor Parallelism in SFT ([#5331](https://github.com/huggingface/trl/pull/5331))**
    *   Integrates `tp_plan="auto"` into the SFT script, enabling seamless Tensor Parallelism when configured with Accelerate.

## 5. Why This Project Matters in Today's RL Landscape
TRL remains central to the **Post-Training** and **RLHF** landscape. The rapid integration of **VESPO** and **SDPO** demonstrates TRL's role as the primary vehicle for translating state-of-the-art research (like arXiv papers from early 2026) into production-ready code. The intense focus on **Async GRPO** and **vLLM colocated training** highlights the industry's shift toward high-throughput, memory-efficient inference during training to handle the computational cost of Large Language Model (LLM) alignment.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-22

## 1. Today's Highlights
The **verl** ecosystem showed intense activity focused on **Qwen3.5 integration** and **hardware extensibility**. Key developments include the introduction of FSDP support for Qwen3.5 GRPO training and significant progress on Ascend NPU compatibility. Additionally, the community is actively debugging complex reproducibility issues in GRPO training environments involving vLLM and Megatron.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **Reproducibility & Seeding (#1683, #3126):** Users are reporting significant challenges in controlling random seeds for generators and optimizers in GRPO training. Despite configuration, large variances in response lengths persist across runs, highlighting a need for global seeding mechanisms in distributed Ray environments.
*   **Compatibility Crashes (#5659, #5690):**
    *   **GRPO Instability:** Errors reported when running Qwen3.5 2B with the combination of verl, Megatron 0.16.0, and vLLM (#5659).
    *   **Import Errors:** Missing `AutoModelForCausalLMWithValueHead` from `trl` in latest containers (#5690) was quickly addressed.
*   **Hardware Validation (#5441):** Efforts are underway for end-to-end validation of Qwen3.5 + FSDP + GRPO on **Huawei Ascend NPU**, signaling a push for hardware vendor diversity.
*   **FP8 Backend (#5683):** Users noted that FP8 quantization is currently non-functional with the vLLM backend.

## 4. Key PR Progress
*   **Model Support:**
    *   **Qwen3.5 GRPO (#5682):** Added FSDP training support and transformer adapters for Qwen3.5 (27B/35B).
    *   **Qwen3.5 LoRA & MTP (#5599):** Ongoing work to fix LoRA and Multi-Token Prediction (MTP) support via Megatron-Bridge.
*   **Backend & Infrastructure:**
    *   **NPU Support (#5680):** Introduction of `mindspeedllm` backend engine support for Ascend NPU.
    *   **FSDP Buffers (#5688):** Proposal to include buffers in weight transfers to rollout engines to fix mismatches in DeepSeek V3 architectures.
    *   **Quantization (#5254):** Integration of NVFP4 (W4A16) Quantization-Aware Training (QAT) via NVIDIA ModelOpt.
*   **Algorithm & Training Fixes:**
    *   **On-Policy Distillation (#5041, #5592):** Merged support for on-policy distillation across FSDP and Megatron backends.
    *   **One-Step-Off Fix (#5698):** Addressed a critical race condition where weights were updated during inference in `fit_step`.
    *   **Router Replay Fix (#5694):** Fixed `position_ids` shape mismatch errors in R3 router replay paths.

## 5. Why This Project Matters in Today's RL Landscape
**verl** (Volcengine RL) is establishing itself as a critical high-performance framework for post-training Large Language Models (LLMs). By tightly integrating with high-throughput inference engines like **vLLM** and **TensorRT-LLM**, and supporting massive scale via **Megatron-Core** and **FSDP2**, verl lowers the barrier to entry for advanced RL techniques like GRPO (Group Relative Policy Optimization) and On-Policy Distillation.

The current surge in PRs supporting **Qwen3.5**, **DeepSeek V3**, and **Ascend NPUs** demonstrates the project's role as a frontier for adapting state-of-the-art open-source models to diverse hardware backends, moving beyond standard NVIDIA-centric workflows.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-22

### 1. Today's Highlights
Activity in the Open Instruct repository over the last 24 hours focused exclusively on code quality and expansion via Pull Requests. A critical bug was identified in Supervised Fine-Tuning (SFT) data handling, and significant progress was made on documentation and PPO integration.

### 2. Releases
No new releases were recorded.

### 3. Important Issues
No new issues were opened in the last 24 hours.

### 4. Key PR Progress
*   **Critical SFT Bug Fix:** PR [#1549](https://github.com/allenai/open-instruct/pull/1549) addresses a double-shift error in `UlyssesSPDataLoaderAdapter`. The bug caused `ForCausalLMLoss` to shift pre-shifted labels, resulting in models training on off-by-one targets.
*   **Documentation Expansion:** PR [#1546](https://github.com/allenai/open-instruct/pull/1546) introduces a new `tool_training.md` page, refreshing documentation to reflect current tool-use and RL environment capabilities.
*   **PPO Enhancements:** PR [#1462](https://github.com/allenai/open-instruct/pull/1462) (updated recently) adds GAE support and learned value models to `grpo_fast.py`, enabling PPO-style advantage estimation as an alternative to group-normalized rewards.
*   **Infrastructure Stability:** PR [#1532](https://github.com/allenai/open-instruct/pull/1532) improves vLLM timeout handling, specifically addressing `ray.get` hangs and retry logic on slower networks (e.g., RunPod).

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct remains a critical infrastructure piece in the RL ecosystem, bridging the gap between SFT and advanced RLHF techniques. The recent work on integrating PPO-style value models ([#1462](https://github.com/allenai/open-instruct/pull/1462)) alongside GRPO highlights a trend toward hybrid training pipelines. Furthermore, fixes like the double-shift bug ([#1549](https://github.com/allenai/open-instruct/pull/1549)) are vital for ensuring data integrity in large-scale distributed training, and robust vLLM handling ([#1532](https://github.com/allenai/open-instruct/pull/1532)) facilitates easier experimentation on diverse hardware setups.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Daily Digest: Gymnasium
**Date:** 2026-03-22 | **Focus:** MuJoCo Stability & Documentation

## 1. Today's Highlights
Activity on the `Farama-Foundation/Gymnasium` repository was moderate but focused on quality assurance. Key updates include a bug confirmation regarding physics parameters in the **Ant-v5** environment and a new tutorial initiative for **custom MuJoCo environments**.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[Bug] Ant-v5 Termination Logic Flaw (#1464)**
    *   **Details:** A stale issue received fresh attention regarding the `healthy_z_range` parameter in the `Ant-v5` MuJoCo environment. The reporter highlights that the default range fails to terminate episodes when the agent flips but remains at a height of `z=0.24`.
    *   **Evidence:** The user suggests tightening the floor of the range to `(0.25, 1.0)` to ensure upside-down agents are correctly marked as unhealthy.
    *   **Link:** [Issue #1464](https://github.com/Farama-Foundation/Gymnasium/issues/1464)

## 4. Key PR Progress
*   **Docs: Custom MuJoCo Environment Tutorial (#1547)**
    *   **Details:** A new pull request aims to close the documentation gap for advanced physics simulations. It introduces a Sphinx-Gallery tutorial on subclassing `MujocoEnv` to build custom environments from scratch.
    *   **Relevance:** This directly addresses feature request #846, lowering the barrier to entry for researchers developing proprietary robotics simulations.
    *   **Link:** [PR #1547](https://github.com/Farama-Foundation/Gymnasium/pull/1547)

## 5. Why This Project Matters in Today's RL Landscape
As the spiritual successor to OpenAI Gym, **Gymnasium** remains the standard API for single-agent reinforcement learning. The focus on correcting **MuJoCo-v6** parameters is critical for reproducibility; benchmarks like Ant-v5 are standard curriculum for continuous control, and incorrect termination logic can silently skew algorithm comparison. Furthermore, improved documentation for custom environments supports the field's shift from standard benchmarks to domain-specific robotics applications.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>