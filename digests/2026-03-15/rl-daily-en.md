# RL Open Source Daily Digest 2026-03-15

> Generated: 2026-03-14 22:01 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-03-15 is defined by a clear bifurcation between **active, production-grade LLM post-training platforms** and **dormant or maintenance-only libraries**. The center of gravity has shifted entirely toward multi-modal LLM alignment, with major players (verl, TRL, AReaL, ROLL, ROCK) aggressively competing on infrastructure efficiency and hardware support. Meanwhile, general-purpose RL libraries (CleanRL, Stable Baselines3, Tianshou) and core environment interfaces (Gymnasium, PettingZoo) saw zero activity, highlighting the market's intense focus on Large Language Model (LLM) reasoning and alignment over traditional control tasks.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 4 | 15 | 0 | **High.** Dominant activity in multi-modal support (VLM, FlowGRPO) and hardware parity (B200, Ascend). |
| **TRL** | 1 (Closed) | 6 (4 Merged) | 0 | **High.** Strong focus on algorithm integration (VESPO) and UX improvements (vLLM defaults). |
| **AReaL** | 4 | 4 | 0 | **Medium-High.** Critical fixes for multi-modal RPC and new colocated training features. |
| **ROLL** | 1 | 4 | 0 | **Medium.** Architectural evolution toward Multi-LoRA and control plane stability. |
| **ROCK** | 2 | 3 | 2 (v1.4.0/1) | **Medium.** Release heavy; focus on observability and infra-as-code. |
| **slime** | 3 | 0 | 0 | **Low.** Maintenance mode; debugging complex MoE/Stability edge cases. |
| **rl_games** | 0 | 1 | 0 | **Low.** Niche update for MyoSuite/biological simulation. |
| **torchtune** | 0 | 1 | 0 | **Low.** Documentation updates only. |
| **Others*** | 0 | 0 | 0 | **Dormant.** No activity detected. |

*\*Others include: CleanRL, Gymnasium, Open Instruct, OpenRLHF, PettingZoo, Stable Baselines3, Tianshou.*

## Shared Research & Engineering Directions

### Research Trends
*   **Algorithmic Diversification beyond PPO:** Projects are moving beyond standard Proximal Policy Optimization (PPO). TRL merged **VESPO** (Variational Sequence-Level Soft Policy Optimization), while verl is pushing **FlowGRPO** for diffusion models and **On-Policy Distillation** for VLMs.
*   **Multi-Modal & Agentic Workflows:** There is a concerted effort to extend RLHF from text to complex inputs. **verl** and **AReaL** are fixing specific bugs related to transporting image tensors (`pixel_values`) in distributed settings, while **TRL** is stabilizing multi-turn tool-calling loops.

### Engineering & Infrastructure Trends
*   **Colocation & Resource Efficiency:** To reduce the massive hardware barrier of LLM RL, projects are converging on "colocation." **TRL** set `"colocate"` as the default for vLLM, **AReaL** introduced colocated on-policy training (PR #1035), and **ROLL** proposed GPU time-sharing. This trend aims to run inference and training engines on the same GPUs to cut costs.
*   **Hardware Fragmentation:** The ecosystem is stretching to support diverse accelerators. **verl** is actively fixing bugs for NVIDIA B200 (CUDA 12.8) and Huawei Ascend NPUs, signaling a move away from NVIDIA-only stacks.
*   **RL-Ops Standardization:** **ROCK** and **ROLL** are evolving into "RL-as-a-Service" platforms, introducing features like hostname tagging for metrics, standard spec sandboxes, and Multi-LoRA concurrency to support production-grade distributed training.

## Differentiation Analysis
*   **verl vs. TRL (Platform Philosophy):** **verl** is positioning itself as a high-performance, hardware-agnostic compute engine for advanced modality training (Vision/Diffusion). **TRL** is differentiating by focusing on **accessibility and algorithmic agility**, acting as the bridge between Hugging Face hubs and production training (evidenced by the vLLM "colocate" default and rapid adoption of VESPO).
*   **ROCK vs. ROLL (Alibaba Ecosystem):** While both originate from Alibaba, they target different layers. **ROCK** is focusing on the **environment and observability layer** (sandboxes, metrics), whereas **ROLL** is attacking the **orchestration and scheduling layer** (Multi-LoRA, RLix control plane).
*   **rl_games & torchtune (Niche Utility):** Unlike the LLM-heavy hitters, these projects serve specific utility roles. **rl_games** remains the go-to for high-DoF biological simulation (MyoSuite), and **torchtune** acts as the stable onboarding layer for SFT, a prerequisite for RLHF.

## Community Momentum & Maturity
*   **verl & TRL** are currently the innovation leaders, attracting high-complexity contributions (Multi-modal support, new loss functions).
*   **AReaL & ROLL** show signs of maturing into enterprise-grade internal infrastructure, with activity focused on RPC transport bugs and control plane logic rather than flashy features.
*   **slime** appears to be in a "stabilization plateau," tackling persistent, difficult bugs (SGLang router crashes, MoE config propagation) with low PR throughput.
*   The zero activity in **CleanRL, Stable Baselines3, and Gymnasium** suggests a consolidation phase where the community's attention is overwhelmingly captured by LLM alignment, leaving traditional RL libraries in a state of maintenance stasis.

## Trend Signals
1.  **Death of the "Server" Model:** The shift toward **colocated training** (TRL, AReaL) signals that maintaining separate inference servers during RLHF is becoming obsolete due to complexity and cost.
2.  **Rise of the "Post-Training Platform":** Libraries are no longer just "PPO implementations"; they are becoming comprehensive platforms supporting distillation, tool use, and multi-modal generation within a single loop.
3.  **Hardware Scarcity driving Innovation:** The aggressive development of **GPU time-sharing** and **Multi-LoRA** (ROLL, verl) indicates that GPU scarcity is the primary constraint driving architectural decisions in 2026.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the Reinforcement Learning Open-Source Daily Digest for **2026-03-15**.

### 📅 RL Daily Digest: Alibaba ROLL
**Date:** 2026-03-15
**Focus:** RLix Control Plane Evolution & Codebase Stabilization

---

#### 1. Today's Highlights
The ROLL (RL on LLM) ecosystem saw a surge in activity regarding infrastructure scalability and bug fixes. The spotlight is on the introduction of **concurrent Multi-LoRA training** and **GPU time-sharing** capabilities via the RLix control plane. Simultaneously, significant efforts were directed toward fixing pipeline logic bugs in `CriticWorker` and reference model handling.

#### 2. Releases
*   **No new releases** detected in the last 24 hours.
    *   *Note:* PR #343 performed housekeeping for the `v0.2.0` changelog, suggesting a formal release may be imminent.

#### 3. Important Issues
*   **[Persistence] Megatron Model Saving Failure (#167)**
    *   **Status:** Open
    *   **Context:** Users are reporting critical failures when attempting to save checkpoints at specific steps (e.g., step 100) during Megatron training. The error manifests as a timeout or communication failure across the cluster (`ActorWorker` traceback).
    *   **Link:** [alibaba/ROLL Issue #167](https://github.com/alibaba/ROLL/issues/167)

#### 4. Key PR Progress
*   **Feature: Multi-LoRA & GPU Time-Sharing (#378)**
    *   **Author:** @taoluo
    *   **Summary:** A major architectural update proposing native support for training multiple LoRA adapters concurrently. It integrates GPU time-sharing support for **RLix** (RL Operations Index/X), aiming to maximize resource utilization.
    *   **Link:** [alibaba/ROLL PR #378](https://github.com/alibaba/ROLL/pull/378)

*   **Fix: CriticWorker & Data Handling (#375, #377)**
    *   **Author:** @dubin555
    *   **Summary:** Two targeted fixes submitted for the `CriticWorker`:
        1.  **Logic:** Correcting the `tqdm` progress bar total to match `epochs=1` rather than `ppo_epochs`.
        2.  **Hygiene:** Renaming loop variables to prevent shadowing the outer `data` parameter in `train_step`.
    *   **Links:** [alibaba/ROLL PR #377](https://github.com/alibaba/ROLL/pull/377) | [alibaba/ROLL PR #375](https://github.com/alibaba/ROLL/pull/375)

*   **Fix: Reference Model Dynamic Batching (#376)**
    *   **Author:** @dubin555
    *   **Summary:** Corrects a type mismatch in `RLVRPipeline._train` where a `WorkerConfig` was incorrectly used instead of a `Cluster` object when handling reference log probabilities.
    *   **Link:** [alibaba/ROLL PR #376](https://github.com/alibaba/ROLL/pull/376)

#### 5. Why This Project Matters in Today's RL Landscape
In the current LLM alignment era, efficient resource utilization is the primary bottleneck. ROLL is positioning itself as a production-grade framework by moving beyond single-model PPO. The introduction of **Multi-LoRA concurrency** and **GPU time-sharing** (PR #378) signals a shift toward "RL-as-a-Service" architectures, allowing organizations to run multiple RL fine-tuning jobs on shared GPU clusters—critical for cost-effective scaling of reasoning models.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open Source Daily Digest: ROCK
**Date:** 2026-03-15 | **Project:** Alibaba/ROCK

## 1. Today's Highlights
The ROCK ecosystem saw significant versioning activity and tooling enhancements over the last 24 hours. The team successfully rolled out **v1.4.1**, following the feature-rich **v1.4.0**. Key developments include improved observability for distributed RL training via hostname tagging and extended infrastructure flexibility through configuration mapping.

## 2. Releases
*   **[v1.4.1](https://github.com/alibaba/ROCK/releases/tag/v1.4.1)**: A rapid follow-up release focused on documentation fixes and stability.
*   **[v1.4.0](https://github.com/alibaba/ROCK/releases/tag/v1.4.0)**: Introduces support for creating standard spec sandboxes (#538) and CI parameter optimizations.

## 3. Important Issues
*   **[Feature #636](https://github.com/alibaba/ROCK/issues/636) [OPEN]:** Proposal to add `hostname` to metrics tags.
    *   *Context:* Crucial for distinguishing metrics in distributed RL environments where multiple workers/nodes operate simultaneously. Categorized under **Observation**.
*   **[Feature #638](https://github.com/alibaba/ROCK/issues/638) [OPEN]:** Tracker for updating the version number to 1.4.1 and associated documentation.

## 4. Key PR Progress
*   **[PR #639](https://github.com/alibaba/ROCK/pull/639) [CLOSED]:** Merged release notes and version bump for v1.4.1, closing the release cycle for the day.
*   **[PR #637](https://github.com/alibaba/ROCK/pull/637) [CLOSED]:** Implemented hostname tagging for metrics (Ref #636), enhancing traceability for training jobs.
*   **[PR #635](https://github.com/alibaba/ROCK/pull/635) [OPEN]:** Introduces support for pool and template mapping from configuration files.
    *   *Significance:* Allows users to define resource mappings statically, improving reproducibility and infrastructure-as-code practices for RL experiments.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from isolated scripts to scalable, distributed production systems, **ROCK** provides the necessary scaffolding for "RL Ops." Today's updates—specifically the **standard spec sandbox** and **metrics hostname tagging**—address the critical needs of **environment standardization** and **distributed observability**. By streamlining how environments are deployed and how training nodes are monitored, ROCK lowers the barrier to maintaining stable, long-running RL training loops at scale.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime
**Date:** 2026-03-15

## 1. Today's Highlights
Activity in the `slime` repository over the last 24 hours was focused exclusively on maintenance and debugging, with **zero new PRs or releases**. The discussion volume remains low (3 active issues), centering on long-horizon training stability and integration with Megatron-Core. A new bug report regarding Mixture-of-Experts (MoE) configuration suggests potential edge-case instability for variable sequence lengths.

## 2. Releases
*   **None.** No new tags or releases were published in the last 24 hours.

## 3. Important Issues
*   **[Bug] MoE Configuration Propagation (#1725):** A newly opened issue highlights a missing configuration link in `model_provider.py`. Specifically, `moe_token_dispatcher_type` is not propagated when `variable_seq_lengths` is enabled on the "Bridge" provider. This may cause validation errors or runtime failures in Megatron-Core integrations.
    *   **Link:** [THUDM/slime Issue #1725](https://github.com/THUDM/slime/issues/1725)
*   **[Stability] Long-Horizon Training Crashes (#1391):** A closed issue reports persistent `503 Service Unavailable` errors from the SGLang Router after extensive RL training. The user notes that resuming from checkpoints fails to mitigate the bug, indicating a potential memory leak or resource exhaustion issue in the SGLang integration layer.
    *   **Link:** [THUDM/slime Issue #1391](https://github.com/THUDM/slime/issues/1391)
*   **[Hardware] Illegal Memory Access (#1297):** An ongoing issue involves `torch.AcceleratorError` during training. Despite debugging flags (`CUDA_LAUNCH_BLOCKING`), the root cause remains elusive, pointing to potential low-level compatibility issues with specific CUDA versions or hardware configurations.
    *   **Link:** [THUDM/slime Issue #1297](https://github.com/THUDM/slime/issues/1297)

## 4. Key PR Progress
*   **No Activity.** There were no updates to Pull Requests in the last 24 hours.

## 5. Why This Project Matters in Today's RL Landscape
`slime` represents the cutting edge of **distributed Reinforcement Learning infrastructure**, likely acting as a high-throughput backbone for Large Language Model (LLM) alignment. Its integration with **SGLang** and **Megatron-Core** suggests it is optimized for serving and training large-scale models with high GPU utilization. Issues like #1391 (SGLang Router failures) are critical indicators of the challenges faced in moving RL from short-horizon experiments to stable, long-horizon training runs required for next-generation reasoning models.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-03-15

## 1. Today's Highlights
The AReaL ecosystem is actively advancing its infrastructure for **scalable multi-modal RL** and **resource efficiency**. Key activity today focuses on fixing critical bugs in RPC transport for multi-image data and introducing **colocated training** capabilities to optimize GPU utilization. Integration with external libraries like Hugging Face `kernels` and MiniMax models also marks a push toward broader compatibility.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Multi-modal RPC Transport Bug ([#1036](https://github.com/inclusionAI/AReaL/issues/1036)):** Critical issue identified where multimodal tensors (e.g., `pixel_values`) are incorrectly split during RPC transport in multi-image samples.
*   **vLLM LoRA Stability ([#1037](https://github.com/inclusionAI/AReaL/issues/1037)):** Reports indicate that runtime adapter metadata handling in vLLM XCCL updates needs hardening to preserve `lora_path` and stable aliases.
*   **Synchronous RL Inquiry ([#1034](https://github.com/inclusionAI/AReaL/issues/1034)):** Community inquiry regarding support for **partial rollouts** in synchronous mode, referencing techniques used by moonshot's Kimi.
*   **Resource Leak ([#1030](https://github.com/inclusionAI/AReaL/issues/1030)):** *Closed.* Socket file descriptor leak in `areal/utils/network.py` resolved.

## 4. Key PR Progress
*   **[feat] Colocated On-Policy Training ([#1035](https://github.com/inclusionAI/AReaL/pull/1035)):**
    *   Introduces GPU time-sharing between training and inference engines using `torch_memory_saver`.
    *   **Impact:** Significantly reduces hardware footprint by allowing weight transfer via local disk paths on shared GPUs.
*   **[fix] Multimodal RPC Transport ([#1038](https://github.com/inclusionAI/AReaL/pull/1038)):**
    *   Adds explicit non-batched transport handling for fields like `image_grid_thw`.
    *   **Impact:** Ensures integrity of multi-image payloads during distributed rollouts.
*   **[feat] Hugging Face Kernels Support ([#1033](https://github.com/inclusionAI/AReaL/pull/1033)):**
    *   Implements opt-in support to load kernels (e.g., flash-attn) directly via the `kernels` library.
*   **[feat] MiniMax Provider ([#1024](https://github.com/inclusionAI/AReaL/pull/1024)):** *Closed/Merged.*
    *   Adds `MathAgent` support for MiniMax models.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself at the forefront of **Post-Training** and **Inference-Time Scaling** optimization.
1.  **Resource Efficiency:** The new colocated training PR ([#1035](https://github.com/inclusionAI/AReaL/pull/1035)) addresses the massive GPU memory cost of RLHF by time-sharing resources, a critical requirement for democratizing LLM fine-tuning.
2.  **Multi-Modal Reliability:** Fixes in ([#1038](https://github.com/inclusionAI/AReaL/pull/1038)) highlight the complexity of moving beyond text-based RL, ensuring that complex visual data structures survive distributed training environments.
3.  **Ecosystem Integration:** By supporting standard interfaces like Hugging Face kernels and new providers like MiniMax, AReaL is evolving into a versatile backbone for next-generation agentic workflows.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL
**Date:** 2026-03-15

## 1. Today's Highlights
The TRL ecosystem is witnessing a strong push toward stabilizing **GRPO (Group Relative Policy Optimization)** and **vLLM integration**. Key activities include merging the **VESPO** loss implementation, setting **"colocate"** as the default vLLM mode to lower barriers to entry, and significant performance optimizations in data packing.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[CLOSED] #5196 feat: Variational Sequence-Level Soft Policy Optimization (VESPO)**
    *   **Context:** Proposal to integrate VESPO as a supported `loss_type` in `GRPOTrainer`.
    *   **Significance:** VESPO offers a distinct approach compared to standard GRPO, utilizing a smooth trust region mechanism rather than differentiating through the importance sampling (IS) ratio.
    *   **Link:** [huggingface/trl Issue #5196](https://github.com/huggingface/trl/issues/5196)

## 4. Key PR Progress

### Algorithms & Features
*   **[MERGED] #5199 feat(`grpo_trainer.py`): VESPO Implementation**
    *   Implements the VESPO loss function, officially closing the feature request. This aligns TRL with recent literature (Paper: 2602.10693).
    *   **Link:** [huggingface/trl PR #5199](https://github.com/huggingface/trl/pull/5199)
*   **[OPEN] #5137 [GKD] Buffer Implementation for Distillation Trainer**
    *   Introduces a prompt-level generation buffer for `GOLDTrainer`, decoupling generation from optimization steps similar to GRPO architectures.
    *   **Link:** [huggingface/trl PR #5137](https://github.com/huggingface/trl/pull/5137)

### Infrastructure & Performance
*   **[MERGED] #5255 Change default `vllm_mode` to `"colocate"`**
    *   **Impact:** High. Shifts default behavior from `"server"` to `"colocate"`, removing the friction of managing a separate vLLM server for standard training runs.
    *   **Link:** [huggingface/trl PR #5255](https://github.com/huggingface/trl/pull/5255)
*   **[MERGED] #5189 35% faster packing + rename**
    *   Replaces previous BFD splitting logic with a vectorized implementation, significantly reducing data preprocessing overhead.
    *   **Link:** [huggingface/trl PR #5189](https://github.com/huggingface/trl/pull/5189)

### Bug Fixes & Stability
*   **GRPO Tool Calling Fixes:** PR **#5242** (Open) and PR **#5145** (Merged) address shape-mismatch bugs in `GRPOTrainer` caused by re-tokenization during multi-turn tool loops.
*   **vLLM Stability:**
    *   **#5288:** Added timeouts to vLLM client HTTP calls to prevent indefinite worker hangs.
    *   **#5203:** Fixed handling of nullable logprobs in vLLM serve responses.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to serve as the bridge between cutting-edge RL research and production-ready LLM post-training. Today's updates highlight a maturing ecosystem:
1.  **Accessibility:** Changing the default vLLM mode to `"colocate"` drastically simplifies the setup for distributed RLHF, making advanced training accessible to users without complex infrastructure.
2.  **Algorithmic Diversity:** The integration of **VESPO** demonstrates TRL's agility in adopting novel optimization strategies that move beyond standard PPO/GRPO objectives.
3.  **Tool Use Reliability:** The intense focus on fixing re-tokenization bugs in tool-calling loops signals that reliable, multi-turn agentic workflows are now a top priority for RL training libraries.

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

# RL Daily Digest: verl-project/verl
**Date:** 2026-03-15

## 1. Today's Highlights
Activity remains high with **15 PRs updated** and **4 issues active**. The ecosystem is aggressively expanding beyond standard text-based RLHF. Key trends include:
*   **Multi-Modal RL:** Significant pushes for Vision Language Models (VLM) and Image generation RL (FlowGRPO).
*   **Hardware Compatibility:** Ongoing fixes for diverse hardware (Ascend NPUs, NVIDIA B200).
*   **Training Stability:** Critical fixes for FSDP deadlocks and Megatron-Core (mcore) regressions.

## 2. Releases
*   **No new releases** recorded in the last 24 hours. The focus remains on merging feature branches and stabilizing the main branch.

## 3. Important Issues
*   **B200 GPU Support (#2015):** Users are requesting installation guidance for NVIDIA B200 GPUs, which require CUDA 12.8. Current scripts are pinned to CUDA 12.4/Torch 2.6, causing compatibility friction.
*   **Async Generation Error (#5495):** A persistent `torch.AcceleratorError` (CUDA error: invalid argument) is affecting the `fully async` mode during old log prob computation.
*   **Breaking Changes (#5593):** The removal of `main_generation` in the latest version has broken official examples (e.g., DeepSeek7b multi-node generation), causing confusion for users upgrading to the newest commit.

## 4. Key PR Progress

### Feature Expansions
*   **VLM & FlowGRPO Support ([PR #5592](https://github.com/volcengine/verl/pull/5592), [PR #5297](https://github.com/volcengine/verl/pull/5297)):**
    *   **On-Policy Distillation:** [PR #5592](https://github.com/volcengine/verl/pull/5592) enables OPD for VLMs (Qwen3-VL), allowing smaller VLMs to distill knowledge from larger teachers.
    *   **Image RL:** [PR #5297](https://github.com/volcengine/verl/pull/5297) introduces **FlowGRPO** for Qwen-Image, integrating `Diffusers` as a training engine and `vLLM-Omni` for rollouts.
*   **Atropos Integration ([PR #5514](https://github.com/volcengine/verl/pull/5514)):** Integration of the [atropos](https://github.com/NousResearch/atropos) environment, enabling verl to poll scored batches for GRPO training.

### Critical Fixes & Hardware
*   **FSDP Deadlock Fix ([PR #5591](https://github.com/volcengine/verl/pull/5591)):** Resolves a CUDA deadlock in `dp_actor.py` by passing the missing `dp_group` to `prepare_dynamic_batch`.
*   **Ascend NPU Support ([PR #5246](https://github.com/volcengine/verl/pull/5246), [PR #5560](https://github.com/volcengine/verl/pull/5560)):** Continued maintenance for Huawei Ascend NPUs, fixing device-check bugs and MC2 usage on A2 NPUs.
*   **Megatron Regression ([PR #5587](https://github.com/volcengine/verl/pull/5587)):** Patches a regression in MTP (Multi-Token Prediction) for newer Megatron-Core versions where `compute_output_layer_and_language_model_loss` was removed.

## 5. Why This Project Matters in Today's RL Landscape
The **verl** project is evolving from a standard PPO/RLHF library into a **comprehensive, multi-modal post-training platform**. Today's digest highlights a critical maturation phase where the library is:
1.  **Decoupling Models from Algorithms:** Supporting diffusion models (FlowGRPO) and VLMs (Qwen3-VL) alongside LLMs.
2.  **Hardware Agnosticism:** actively maintaining parity between NVIDIA (B200 support) and Ascend (NPU fixes) ecosystems.

This positions verl as a key infrastructure player for training the next generation of agentic and multi-modal foundation models.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# RL Daily Digest: Torchtune
**Date:** 2026-03-15

### 1. Today's Highlights
Activity in the `torchtune` repository was minimal over the last 24 hours, characterized by a documentation-focused Pull Request and no new issues or releases. The focus remains on improving user onboarding for fine-tuning workflows.

### 2. Releases
*   **None** (No new releases detected in the last 24 hours).

### 3. Important Issues
*   **None** (0 issues updated).

### 4. Key PR Progress
*   **[DOCS] Custom Datasets Guide:** PR [#2956](https://github.com/pytorch/torchtune/pull/2956) remains open.
    *   **Details:** Author @biefan proposes adding a `basics/custom_datasets.rst` page.
    *   **Technical Scope:** The update introduces documentation on integrating custom message transforms with the `SFTDataset`, providing an end-to-end pattern for users adapting the library to non-standard data formats.

### 5. Why This Project Matters in Today's RL Landscape
While `torchtune` is primarily a fine-tuning library, it serves as a critical infrastructure layer in the modern RL ecosystem, specifically for **Reinforcement Learning from Human Feedback (RLHF)**. Robust Supervised Fine-Tuning (SFT) is a prerequisite for effective RLHF alignment. By streamlining the process of loading custom datasets via `SFTDataset` (as highlighted in PR #2956), the project lowers the barrier to entry for researchers and engineers aiming to align Large Language Models (LLMs) with specific human preferences or domain-specific safety constraints.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL Daily Digest: rl_games
**Date:** 2026-03-15

### 1. Today's Highlights
The **rl_games** repository saw low issue activity but a significant technical update via a single Pull Request. The focus remains on modernizing the codebase (migrating from `gym` to `gymnasium`) and expanding applicability to high-dimensional musculoskeletal simulation tasks via **MyoSuite**.

### 2. Releases
*   **None** (No new releases recorded in the last 24 hours).

### 3. Important Issues
*   **None** (No issues created or updated in the last 24 hours).

### 4. Key PR Progress
*   **[PR #336](https://github.com/Denys88/rl_games/pull/336)**: Add MyoSuite training configs and configurable max_steps
    *   **Status**: Open
    *   **Author**: @Denys88
    *   **Significance**: This PR modernizes the repo by porting content from legacy PR #312 to align with the `gymnasium` migration on the master branch. It adds 6 PPO training configs for MyoSuite tasks (elbow, hand pose/reach/reorient, walk) and introduces a fix for hardcoded episode limits, making `player.max_steps` configurable.

### 5. Why This Project Matters in Today's RL Landscape
**rl_games** is a critical high-performance library for Reinforcement Learning, widely used as the backbone for training policies in NVIDIA's **Isaac Gym** and other GPU-accelerated simulators. By integrating **MyoSuite**—a benchmark for musculoskeletal motor control—the project bridges the gap between rigid-body robotics and complex biological simulation. This update is essential for researchers focusing on humanoid motor learning, prosthetics, and high-DoF (Degree of Freedom) control systems.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>