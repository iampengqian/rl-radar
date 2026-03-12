# RL Open Source Daily Digest 2026-03-13

> Generated: 2026-03-12 22:03 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-03-13 is characterized by intense fragmentation between **foundation model post-training frameworks** (high activity) and **traditional RL libraries** (dormant). The primary vector of innovation is scaling RLHF/RLVR to multi-modal, mixture-of-expert, and hardware-heterogeneous environments.

Key active clusters:
- **LLM/VLM Post-Training:** verl, AReaL, TRL, Open Instruct, Slime, ROLL
- **Production Infrastructure:** ROCK (containerized sandbox management)
- **Classic RL:** Gymnasium (maintenance), SB3 (dormant), CleanRL/OpenRLHF (inactive)

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
|---------|--------|-----|----------|--------|
| **verl** | 3 open (multi-turn logic, NPU errors, parallelism) | 10+ active (Atropos, GDPO, Qwen3.5, Ascend MXFP8, LoRA/SGLang, Vision DP) | 0 | 🔴 High — Rapid feature expansion with growing pains |
| **AReaL** | 4 active (roadmap, inference scaling, LoRA/XCCL bugs) | 9+ active (Archon/FSDP2, Qwen3.5, VLM fixes, MiniMax) | 0 (v1.0.1 imminent) | 🔴 High — Infrastructure modernization sprint |
| **TRL** | 1 critical (3D-RoPE VLM bug) | 6 active (VLM fix, GOLD/DGPO/SDPO algorithms) | 0 | 🟡 Medium — Focused algorithmic expansion |
| **Open Instruct** | 0 | 8+ active (Flash Attention 3, PPO/GAE, DistillKit, critical fixes) | 0 | 🟡 Medium — Production hardening phase |
| **Slime** | 4 active (proxy conflicts, Megatron hangs, Qwen garbled output) | 3 active (Mooncake RDMA, GLM-4.6V MoE) | 1 (v0.2.3) | 🟡 Medium — Backend optimization focus |
| **ROCK** | 1 open (version stabilization) | 6 merged (Alpine/Nix, CPU preemption, cleanup) | 0 | 🟢 Moderate — Infrastructure maturation |
| **ROLL** | 3 open (VLM pipeline, Megatron+LoRA, macOS deps) | 0 | 0 | 🟢 Moderate — User-reported blockers, no merges |
| **Gymnasium** | 0 | 2 updated (MuJoCo rendering, Taxi dynamics) | 0 | ⚪ Low — Maintenance only |
| **SB3** | 1 closed (spam/LLM-generated) | 0 | 0 | ⚪ Low — Dormant |
| **torchtune** | 0 | 1 closed (validation loss) | 0 | ⚪ Low — Minimal |
| **CleanRL / OpenRLHF / PettingZoo / Tianshou / rl_games** | 0 | 0 | 0 | ⚪ Inactive |

## Shared Research & Engineering Directions

### Research Signals
- **Algorithm Hybridization:** Convergence of distillation and policy optimization (TRL: GOLD, SDPO; Open Instruct: DistillKit; verl: GDPO). Post-training is no longer pure PPO—it's self-distillation + group-normalized rewards.
- **Multi-turn Reasoning:** verl Issue #5576 exposes "train-serve mismatch" where accumulated thinking tokens during training diverge from inference behavior. Critical for reasoning models.
- **VLM-Specific Alignment:** 3D-RoPE token type handling (TRL #5277/#5279), VLM GRPO training fixes (AReaL #1027), and VLM RLVR pipeline questions (ROLL #365) indicate multimodal RL is the current frontier.

### Engineering & Infrastructure Signals
- **Hardware Heterogeneity:** Ascend NPU support is now table stakes (verl: MXFP8 on 950, AReaL: NPU v1.0.1). US hardware sanctions are driving explicit multi-vendor strategies.
- **MoE Parallelism Complexity:** EP/TP/DP alignment issues (verl #5568/#5570), Qwen3.5 MoE support across verl/AReaL/Slime. Mixture-of-Experts requires distributed coordination beyond simple data parallelism.
- **LoRA at Scale:** FSDP2 + LoRA (AReaL #1015), SGLang LoRA rollouts (verl #5564), Megatron+LoRA (ROLL #372). Parameter-efficient fine-tuning is now infrastructure-grade.
- **RDMA/High-Performance Data Transfer:** Mooncake integration (Slime #1709) to bypass Ray Object Store bottlenecks in disaggregated clusters.
- **Container & Sandbox Orchestration:** ROCK's Alpine/Nix support + CPU preemption signals RL infrastructure is converging with cloud-native orchestration patterns.

## Differentiation Analysis

| Project | Strategic Positioning | Key Differentiator |
|---------|----------------------|-------------------|
| **verl** | Global post-training platform | Hardware agnosticism (Ascend + CUDA) + Agentic RL (Atropos environments) |
| **AReaL** | Enterprise-grade unified platform | FSDP2/DTensor modernization + strict LoRA versioning + dynamic inference scaling |
| **TRL** | Research-to-production bridge | First-mover on new algorithms (GOLD, DGPO, SDPO) + HuggingFace ecosystem integration |
| **Open Instruct** | AI2's frontier training stack | GRPO + PPO/GAE unification + OLMo-core deep integration + Flash Attention 3 |
| **Slime** | Large-scale LLM fine-tuning infrastructure | Megatron bridge + Mooncake RDMA + GLM/Qwen MoE support |
| **ROCK** | Production sandbox orchestration | Container-native, multi-OS, resource preemption for RL environments |
| **ROLL** | High-throughput RL for foundation models | vLLM + Megatron backends with RLVR focus (still maturing) |

**Notable gap:** No project has solved multi-turn reasoning training definitively—verl's #5576 is an open wound affecting all frameworks attempting chain-of-thought RL.

## Community Momentum & Maturity

- **Accelerating:** verl, AReaL — Daily merge velocity, active roadmap trackers, rapid model support additions
- **Stable/Refining:** TRL, Open Instruct, Slime — Focused PRs, clear architectural direction, bug-driven development
- **Maturing:** ROCK — Moving from feature addition to stabilization (v1.3.0 revert proposal)
- **Stagnant:** ROLL — User issues accumulating without maintainer response; Gymnasium, SB3 — Maintenance mode
- **Dormant:** CleanRL, OpenRLHF, PettingZoo, Tianshou, rl_games — Zero activity; likely deprioritized or superseded

**Quality Signal:** TRL's rapid issue-to-PR turnaround (VLM bug identified and fix PR opened same day) indicates healthy maintainer responsiveness. verl and AReaL show higher issue volumes but also higher PR throughput—scaling pains with active remediation.

## Trend Signals

1. **VLM RL is the 2026 frontier:** 4+ projects actively debugging vision-language training (3D-RoPE, token type ids, image serialization). Text-only RLHF is legacy.
2. **Ascend NPU is no longer experimental:** Explicit support in verl and AReaL with dedicated quantization (MXFP8) and bug fixes. Global RL platforms must be hardware-agnostic.
3. **Distillation + RL convergence:** The boundary between knowledge distillation and policy optimization is dissolving. GOLD, SDPO, DGPO all blend teacher-student dynamics with reward signals.
4. **Sandbox infrastructure is professionalizing:** ROCK's CPU preemption and multi-OS support indicate RL environments require Kubernetes-grade orchestration.
5. **Flash Attention 3 adoption beginning:** Open Instruct's FA3 support signals H100/H800 optimization is becoming standard for large-scale GRPO/PPO.
6. **Classic RL libraries fading:** Zero activity across CleanRL, OpenRLHF, Tianshou, rl_games suggests the ecosystem has consolidated around LLM-focused frameworks for active development.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL Daily Digest for **2026-03-13**.

***

### 📊 ROLL Daily Digest (2026-03-13)

#### 1. Today's Highlights
Activity in the ROLL ecosystem over the last 24 hours has been centered on **usability and compatibility**. The community is actively testing the boundaries of the framework, specifically regarding Vision-Language Model (VLM) integration, LoRA support with the Megatron backend, and local installation stability. While no code changes were merged today, three distinct technical blockers were raised by users.

#### 2. Releases
*   **No new releases** detected in the last 24 hours.

#### 3. Important Issues
*   **VLM RLVR Implementation Details ([#365](https://github.com/alibaba/ROLL/issues/365))**
    *   **Context:** A user flagged discrepancies in data encoding logic within the `rlvr_vlm_pipeline` compared to the upstream `verl` project. Specifically, the user questions the image filtering logic and prompt formatting.
    *   **Significance:** As VLM-RL (Vision Language Model Reinforcement Learning) is a cutting-edge frontier, precise data handling is critical for training stability. This issue suggests the VLM pipeline in ROLL may have diverged significantly from standard implementations.

*   **Megatron + LoRA Compatibility for Qwen3.5 ([#372](https://github.com/alibaba/ROLL/issues/372))**
    *   **Context:** A user reported initial errors when attempting to use LoRA fine-tuning with the Qwen3.5 model on the Megatron backend.
    *   **Significance:** Verifying backend compatibility for parameter-efficient fine-tuning (PEFT) methods on the latest model architectures is essential for enterprise adoption.

*   **Dependency Resolution on MacOS ([#373](https://github.com/alibaba/ROLL/issues/373))**
    *   **Context:** Installation failures on macOS due to dependency conflicts between `ray[default]==2.48.0` and `opentelemetry-sdk`.
    *   **Significance:** Highlights potential friction in the local development setup, specifically regarding strict version pinning in `requirements_torch260_vllm.txt`.

#### 4. Key PR Progress
*   **None.** No pull requests were updated or merged in the last 24 hours.

#### 5. Why This Project Matters in Today's RL Landscape
**ROLL (Rethinking Optimization at the Learning Level)** is positioned as a high-throughput framework for Large Scale Reinforcement Learning. Unlike traditional RL libraries that often struggle with the distributed coordination required for LLMs, ROLL focuses on integration with high-performance backends like **vLLM** and **Megatron-LM**.

The current issues (VLM handling and LoRA/Megatron support) highlight the project's ambition to support **RL for Foundation Models**. As the industry shifts from standard SFT to advanced RLVR (Reinforcement Learning with Verifiable Rewards) for reasoning models, frameworks like ROLL that can handle complex multi-modal and distributed training workloads are becoming critical infrastructure.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: Alibaba/ROCK
**Date:** 2026-03-12

## 1. Today's Highlights
The ROCK (Reinforcement Learning with Containerized Knowledge) ecosystem saw a high volume of merge activity today, focusing heavily on infrastructure robustness and resource management. Key developments include expanded OS compatibility for the `rocklet` component and the implementation of critical sandbox features like CPU preemption and automated cleanup tasks.

## 2. Releases
*   **No new releases** detected in the last 24 hours.
    *   *Note:* Issue #616 suggests a reversion or stabilization of version **1.3.0**, indicating a potential release candidate or patch is imminent.

## 3. Important Issues
*   **[OPEN] Version Stabilization (#616):** A proposal to revert the version to 1.3.0 is currently open, suggesting the maintainers are focusing on stabilizing the current feature set.
*   **[CLOSED] Infrastructure Enhancements:** Several significant feature requests were closed today, marking a successful sprint in infrastructure hardening:
    *   **Multi-OS Support (#509):** Support for various OS type images.
    *   **SDK & Sandbox Management (#606, #600, #583):** Improvements to SDK sandbox ID handling and automated cleanup for containers and files.
    *   **Resource Optimization (#596):** Implementation of Sandbox CPU preemption support.

## 4. Key PR Progress
*   **Major Compatibility Update (#624):** PR #624 introduces support for **Alpine/musl** and **Nix**, alongside compatibility for older glibc versions. This is a critical update for running ROCK agents in minimal or diverse container environments.
*   **Resource Management Merged:** Three PRs related to resource cleanup and scheduling were merged:
    *   **CPU Preemption (#619, #620):** Merged support for CPU preemption, allowing for more efficient resource sharing in multi-tenant RL environments.
    *   **Cleanup Automation (#617, #621):** Merged tasks for cleaning directories and containers, reducing manual maintenance overhead.
*   **API & Metrics Updates:**
    *   **Sandbox Configuration (#623):** Added `image_os` field to `SandboxStartRequest`, closing the loop on multi-OS support.
    *   **Model Service Metrics (#613):** Added metrics for model services, enhancing observability for RL training loops.
    *   **Decoupling (#268):** A significant refactor decoupling the `get_status` API from Ray was merged, suggesting a move towards a more generalized architecture beyond Ray-specific backends.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from research to production, the overhead of managing training environments (sandboxes) becomes a bottleneck. ROCK addresses this by providing a container-native, scalable infrastructure. Today's updates—specifically **CPU preemption** and **Alpine/Nix compatibility**—signal that the project is maturing to handle the rigorous demands of heterogeneous computing clusters and resource-constrained edge deployments, distinguishing it as a vital tool for production-grade RL systems.

---
*Data Source: github.com/alibaba/ROCK*

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: Slime (THUDM)
**Date:** 2026-03-13

## 1. Today's Highlights
The Slime ecosystem released **v0.2.3**, marking a significant step in simplifying configuration management via YAML. Activity remains high around **backend compatibility**, specifically regarding the integration of **Mooncake** for high-performance data transfer and resolving environment proxy conflicts in distributed clusters.

## 2. Releases
### **v0.2.3**
*   **Key Feature:** Introduced `YAML-based sglang_config` support for engine group configuration, significantly simplifying rollout setup.
*   **Improvements:** General bug fixes and stability enhancements.
*   **Link:** [v0.2.3](https://github.com/THUDM/slime/releases/tag/v0.2.3)

## 3. Important Issues
*   **Proxy Conflicts in Distributed Environments:** Users encountering `httpx.ReadError` in RolloutManagers may be affected by environment proxy settings (`trust_env=True`) routing internal traffic externally.
    *   *See:* [Issue #1663](https://github.com/THUDM/slime/issues/1663)
*   **Megatron Backend Stability:**
    *   **Hangs:** Frequent hanging observed post-SGLang CUDA graph capture with the Megatron backend ([Issue #1484](https://github.com/THUDM/slime/issues/1484)).
    *   **Qwen Integration:** Installation and Pipeline Parallelism (PP) errors reported for Qwen35 Megatron-Bridge ([Issue #1711](https://github.com/THUDM/slime/issues/1711), [Issue #1713](https://github.com/THUDM/slime/issues/1713)).
*   **Inference Quality:** Qwen3.5-27B outputs garbled text with `gen_tp > 1` due to current SGLang version constraints ([Issue #1671](https://github.com/THUDM/slime/issues/1671)).

## 4. Key PR Progress
*   **Data Transfer Optimization:** PR [#1709](https://github.com/THUDM/slime/pull/1709) proposes integrating **Mooncake** as a backend for rollout data transfer, utilizing RDMA to outperform Ray Object Store in disaggregated multi-node setups.
*   **Bug Fix (Network):** PR [#1714](https://github.com/THUDM/slime/pull/1714) fixes system proxy interference by disabling `trust_env` for internal SGLang HTTP clients.
*   **Model Support:** Closed PR [#1715](https://github.com/THUDM/slime/pull/1715) added the **GLM-4.6V MoE** bridge with Vision-Language and Context Parallelism (CP) support.

## 5. Why This Project Matters in Today's RL Landscape
Slime is positioning itself as a critical infrastructure for **Large Language Model (LLM) fine-tuning**, bridging the gap between research frameworks and production-grade hardware utilization.
1.  **Hardware Efficiency:** By integrating backends like **Mooncake** (RDMA) and resolving CP/Megatron bridge issues, Slime addresses the "memory wall" and communication bottlenecks inherent in training 70B+ parameter models.
2.  **Complex Architecture Support:** The addition of GLM-4.6V and Qwen bridges demonstrates a shift towards supporting **Mixture of Experts (MoE)** and **Vision-Language (VL)** models in RL pipelines, moving beyond standard dense text transformers.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-03-13

## 1. Today's Highlights
Activity in the AReaL ecosystem is dominated by **infrastructure modernization** and **multi-modal expansion**. Key developments include significant progress on the "Archon" engine with LoRA/FSDP2 support, the introduction of Qwen3.5 architectures, and critical bug fixes for XCCL LoRA weight updates. The community is actively fixing blocking issues for VLM (Vision Language Model) training on GPU and NPU backends.

## 2. Releases
*   **No new stable releases** recorded in the last 24 hours.
*   *Note:* PR #1022 references documentation updates for an NPU **v1.0.1** release, suggesting a backend-specific update may be imminent for Ascend users.

## 3. Important Issues
*   **Roadmap Milestone (#907):** The 2026 Q1 Milestone tracker remains highly active, guiding contributions toward system scalability and model support.
*   **Inference Scaling Proposal (#1026):** A new feature request aims to introduce **dynamic scaling of vLLM inference workers** during training. This would allow automatic adjustment of inference resources, optimizing compute utilization during RL workflows.
*   **LoRA/XCCL Bug (#1020):** A specific bug was identified where `update_weights_lora_xccl` fails to correctly version LoRA names in `OpenAIServingModels`, causing potential registry conflicts.
*   **Model Support Queries (#978, #945):** Continued community interest in support for **Qwen3.5** (Addressed in PR #1012) and other families like GPT-OSS and GLM4.5.

## 4. Key PR Progress
*   **Archon Engine Upgrades:**
    *   **LoRA Infrastructure (#1015):** Implements Phase 1 & 2 of LoRA support compatible with **FSDP2/DTensor**, resolving deadlock issues between FSDP and Tensor Parallelism.
    *   **Qwen3.5 Support (#1012):** *Merged/Closed.* Adds support for Qwen3.5 dense and MoE models (GatedDeltaNet architecture) in DP-only mode.
*   **Critical Bug Fixes:**
    *   **LoRA Versioning (#1021, #1025):** Two PRs address theXCCL LoRA naming bug, ensuring the API server registry stays synchronized with weight updates.
    *   **VLM Training Fix (#1027):** Resolves 7 blocking bugs for VLM GRPO training on GPU (FSDP + SGLang), including PIL image serialization.
*   **New Integrations:**
    *   **MiniMax Provider (#1023, #1024):** Adds MiniMax as a new LLM provider for agent workflow training via OpenAI-compatible APIs.
    *   **Dependency Bump (#1010):** Major overhaul of the build system to support variant-specific Torch versions (pinning 2.9.1 for SGLang, 2.10.0 for vLLM).
*   **Refactoring:**
    *   **RTensor Simplification (#1017):** Refactors `RTensor` to a lightweight single-shard reference to improve modularity and remove circular dependencies.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a **unified, scalable post-training platform** rather than just an algorithm library. Today's updates highlight a strategic pivot toward:
1.  **Hardware Agnosticism:** Simultaneous advancements in CUDA (SGLang/vLLM) and Ascend (NPU) backends.
2.  **Modern Architecture Support:** Rapid integration of Mixture-of-Experts (MoE) and hybrid attention models (Qwen3.5) alongside robust FSDP2 implementations.
3.  **Production-Ready RL:** Features like dynamic inference scaling and strict LoRA versioning address the operational challenges of running continuous RL training at scale, distinguishing AReaL as a tool for enterprise-grade RLHF/RLVR.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-03-13

## 1. Today's Highlights
Activity in the TRL repository today focused heavily on **Multimodal RL stability** and **Algorithmic extensibility**. A critical bug was identified regarding 3D-RoPE Vision-Language Models (VLMs) in DPO, immediately followed by a fix PR. Additionally, significant strides were made in expanding the trainer repertoire with new distillation and policy optimization techniques (GOLD, DGPO, SDPO).

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[Bug] VLM Training Failure with 3D-RoPE ([#5277](https://github.com/huggingface/trl/issues/5277))**
    *   **Summary:** `DPOTrainer` is currently silently dropping `mm_token_type_ids` when training models like Qwen2.5-VL. This affects compatibility with `transformers v5.3.0+`, potentially leading to silent training failures or convergence issues without explicit errors.

## 4. Key PR Progress
*   **[Fix] VLM Token Type Handling ([#5279](https://github.com/huggingface/trl/pull/5279))**
    *   Directly addresses Issue #5277, ensuring `mm_token_type_ids` are preserved during DPO batching for VLMs.
    *   *Related:* PR [#5178](https://github.com/huggingface/trl/pull/5178) (Closed) previously attempted to handle these IDs in SFT/GRPO/RLOO, indicating a broader ongoing effort to stabilize multimodal support.

*   **[Feature] Algorithm Expansion (Distillation & DGPO)**
    *   **[#5137](https://github.com/huggingface/trl/pull/5137):** Introduces generation buffering for `GOLDTrainer` (Generalized Offline Distillation), decoupling generation from optimization steps similar to GRPO.
    *   **[#5102](https://github.com/huggingface/trl/pull/5102):** Integrates **DGPO** (ICLR 2026) into the GRPO workflow.
    *   **[#4935](https://github.com/huggingface/trl/pull/4935):** Adds **SDPO** (Self-Distillation Policy Optimization), utilizing high-reward trajectory distillation.

*   **[Refactor] Code Quality & Tooling**
    *   **[#5276](https://github.com/huggingface/trl/pull/5276):** Deduplicates dataloader logic in `GRPOTrainer` and `RLOOTrainer`.
    *   **[#5280](https://github.com/huggingface/trl/pull/5280):** Adds Cursor IDE rules to align AI coding agents with repository guidelines.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to serve as the bridge between state-of-the-art RL research and production-ready LLM/VLM training. Today's activity highlights two critical trends:
1.  **Multimodality is becoming the default:** The rapid identification and patching of VLM-specific tokenization bugs show that the ecosystem is maturing beyond text-only RLHF.
2.  **Hybridization of techniques:** The convergence of Distillation (GOLD, SDPO) and Policy Optimization (GRPO, DGPO) within a single framework demonstrates that modern "post-training" is no longer just PPO—it is a complex mix of on-policy learning and self-distillation.

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
**Date:** 2026-03-13
**Project:** [verl-project/verl](https://github.com/volcengine/verl)

## 1. Today's Highlights
The **verl** ecosystem is witnessing a surge in contributions focused on **hardware extensibility (Ascend NPU)** and **algorithmic diversity**. The community is actively pushing the boundaries of RL post-training with new integrations for **Atropos environments**, **Qwen3.5 support**, and **LoRA capabilities for SGLang**. However, the issue tracker indicates growing pains regarding **multi-turn training logic** and **distributed parallelism configurations**.

## 2. Releases
*   **Status:** No new releases in the last 24 hours.
*   **Observation:** Development activity remains high on the main branch (`v0.8.0.dev0`), with significant merges anticipated for Qwen and NPU support.

## 3. Important Issues
*   **Multi-turn Training Logic Mismatch:** Issue [#5576](https://github.com/verl-project/verl/issues/5576) highlights a critical "train-serve mismatch" where the model is trained on accumulated "thinking" content across turns, which is typically excluded during inference.
*   **NPU Compatibility Errors:** Users on Huawei Ascend NPUs are reporting `RuntimeError` regarding device placement (NPU vs. CPU) for **Qwen3-VL** models in Issue [#5571](https://github.com/verl-project/verl/issues/5571). Additionally, Issue [#5563](https://github.com/verl-project/verl/issues/5563) reports garbled outputs (hallucinated symbols/languages) when using `fully_async_policy` on Ascend hardware.
*   **Parallelism Strategy Conflicts:** Issue [#5568](https://github.com/verl-project/verl/issues/5568) identifies redundant computations in `sync` mode for MoE models caused by misalignment between `verl` and `vllm` parallelism划分 strategies (DP/TP/EP).

## 4. Key PR Progress
*   **Algorithm & Environment Integration:**
    *   PR [#5520](https://github.com/verl-project/verl/pull/5520) & [#5514](https://github.com/verl-project/verl/pull/5514): Integration of **Atropos** RL environments with GRPO pipelines.
    *   PR [#5503](https://github.com/verl-project/verl/pull/5503): Introduction of **GDPO** (Group reward-Decoupled Normalization Policy Optimization).
*   **Model & Hardware Support:**
    *   PR [#5381](https://github.com/verl-project/verl/pull/5381): Adds examples and support for **Qwen3.5**.
    *   PR [#5569](https://github.com/verl-project/verl/pull/5569): Introduces MXFP8 quantization support for **Ascend 950** hardware.
    *   PR [#5575](https://github.com/verl-project/verl/pull/5575): Enables saving checkpoints in **HF PEFT** format.
*   **Performance & Rollouts:**
    *   PR [#5564](https://github.com/verl-project/verl/pull/5564): Implements dual-mode **LoRA support** for SGLang rollouts.
    *   PR [#5230](https://github.com/verl-project/verl/pull/5230): Adds **Vision Data Parallel** to optimize ViT computation across Sequence Parallel ranks.
    *   PR [#5570](https://github.com/verl-project/verl/pull/5570): Fixes MoE parallelism issues and supports EP/ETP selection.

## 5. Why This Project Matters in Today's RL Landscape
**verl** is rapidly evolving from a PPO-specific framework into a comprehensive **post-training platform**. Today's activity underscores its strategic shift toward:
1.  **Hardware Agnosticism:** By actively patching Ascend NPU support alongside NVIDIA CUDA, verl is positioning itself as a global solution for large-scale RL, independent of US-sanctioned hardware.
2.  **Complex Architecture Support:** The focus on Vision DP (PR #5230) and MoE parallelism fixes addresses the immediate engineering challenges of training frontier models (e.g., Qwen3-VL, DeepSeek) that combine modalities and massive scales.
3.  **Ecosystem Interoperability:** Integrating external environment loops like Atropos suggests a move towards **Agentic RL**, allowing developers to plug verl's robust optimizers into diverse, custom environments without rewriting the training loop.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# RL Daily Digest: torchtune
**Date:** 2026-03-13

## 1. Today's Highlights
Activity in the `torchtune` repository was minimal over the last 24 hours, characterized by zero new issues and no new releases. The sole update involved the closure of a feature Pull Request related to validation metrics in LoRA fine-tuning.

## 2. Releases
**None.**
No new versions or patches were released in the last 24 hours.

## 3. Important Issues
**None.**
No new issues were created, and no existing issues were updated within the reporting period.

## 4. Key PR Progress
*   **[CLOSED] Adds validation loss to LoRA fine tune single device (#2238)**
    *   **Author:** @MaxFrax
    *   **Status:** Closed
    *   **Summary:** This PR implemented a feature request (linked to Issue #1042) to integrate validation loss tracking during single-device LoRA fine-tuning.
    *   **Link:** [meta-pytorch/torchtune PR #2238](https://github.com/pytorch/torchtune/pull/2238)

## 5. Why This Project Matters in Today's RL Landscape
While `torchtune` is primarily a fine-tuning library, it is a critical component of the PyTorch ecosystem for adapting Large Language Models (LLMs). As Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO) become standard for model alignment, robust tooling for fine-tuning (like LoRA) serves as the foundational step before RL techniques are applied. Enhancing single-device capabilities lowers the hardware barrier for researchers experimenting with alignment strategies.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-13

## 1. Today's Highlights
The Open Instruct ecosystem is witnessing a surge in development activity focused on **infrastructure robustness** and **algorithmic expansion**. 
*   **Hardware Optimization:** Explicit support for **Flash Attention 3** on H100/H800 clusters is being finalized ([PR #1526](https://github.com/allenai/open-instruct/pull/1526)).
*   **New Training Paradigms:** Major pull requests are advancing **Offline Distillation** (via DistillKit) and **PPO with GAE** support alongside the existing GRPO stack.
*   **Critical Bug Fixes:** Several dangerous bugs were patched, including a tokenizer cache collision ([PR #1518](https://github.com/allenai/open-instruct/pull/1518)) and a broken GRPO evaluation loop ([PR #1493](https://github.com/allenai/open-instruct/pull/1493)).

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **No active issues** were updated in this reporting period. Development discussions have shifted primarily to Pull Requests.

## 4. Key PR Progress

### Infrastructure & Hardware
*   **Flash Attention 3 Support:** [PR #1526](https://github.com/allenai/open-instruct/pull/1526) (Open) adds the `flash-attn-3` dependency, enabling auto-detection and usage of FA3 on H100/H800 GPUs for DPO and GRPO workloads.
*   **Ray GPU Orchestration:** [PR #1519](https://github.com/allenai/open-instruct/pull/1519) (Merged) fixes a bug where local GPU visibility masks leaked into Ray remote workers, causing failures on heterogeneous clusters.
*   **DeepSpeed UCP:** [PR #1517](https://github.com/allenai/open-instruct/pull/1517) (Open) introduces support for DeepSpeed Universal Checkpoints, allowing seamless resumption of GRPO runs across different parallelism layouts.

### Algorithmic Updates (GRPO & PPO)
*   **PPO/GAE Support:** [PR #1462](https://github.com/allenai/open-instruct/pull/1462) (Open) is a Work-In-Progress adding a learned value model and Generalized Advantage Estimation (GAE) to `grpo_fast`, moving the codebase beyond pure group-normalized rewards.
*   **OLMo-core Integration:** [PR #1398](https://github.com/allenai/open-instruct/pull/1398) and [PR #1397](https://github.com/allenai/open-instruct/pull/1397) (Merged) continue the integration of OLMo-core actors and callbacks (vLLM weight sync, Polyak averaging) for distributed GRPO.

### Critical Bug Fixes
*   **Tokenizer Cache Collision:** [PR #1518](https://github.com/allenai/open-instruct/pull/1518) (Merged) fixed a critical issue where changing tokenizers did not invalidate the dataset fingerprint, causing silent data corruption by reusing old cached transforms.
*   **GRPO Eval Loop:** [PR #1493](https://github.com/allenai/open-instruct/pull/1493) (Merged) fixed a bug where evaluation prompts were only enqueued once, effectively disabling eval after the first round.
*   **Checkpoint Resume:** [PR #1523](https://github.com/allenai/open-instruct/pull/1523) (Open) addresses state restoration in data prep actors to ensure runs continue from the correct step.

### New Features
*   **Offline Distillation:** [PR #1525](https://github.com/allenai/open-instruct/pull/1525) (Open) and [PR #1520](https://github.com/allenai/open-instruct/pull/1520) (Merged) introduce a pipeline for capturing teacher logits via vLLM and training students using DistillKit.

## 5. Why This Project Matters in Today's RL Landscape
As of 2026, Open Instruct remains a cornerstone of the open-source RLHF/RLFX ecosystem. By consolidating support for **GRPO (Group Relative Policy Optimization)**, **PPO**, and now **Offline Distillation**, it provides a unified stack for training frontier models. Today’s updates highlight a maturation phase: the community is moving beyond model architecture to solve "plumbing" issues—specifically **distributed state management** (Ray/DeepSpeed) and **hardware efficiency** (Flash Attention 3)—which are essential for training stable, large-scale models on modern GPU clusters.

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
**Date:** 2026-03-13

### 1. Today's Highlights
Activity in the last 24 hours was focused on maintenance and core environment bug fixes, with two existing Pull Requests receiving updates. No new issues or releases were recorded.

### 2. Releases
*   **None.** No new stable versions were tagged in the last 24 hours.

### 3. Important Issues
*   **None.** No new issues were created or updated.

### 4. Key PR Progress
Two open PRs saw updates, highlighting efforts to stabilize simulation dynamics and rendering compatibility.

*   **[Bug Fix] MuJoCo Rendering Compatibility**
    *   **PR:** [#1542](https://github.com/Farama-Foundation/Gymnasium/pull/1542) `fix(envs): fix typo in mujoco_rendering solver iterations`
    *   **Author:** @wikiwiki1006
    *   **Details:** Addresses an `AttributeError` in `mujoco_rendering.py`. The fix corrects the attribute access from the deprecated `self.data.solver_niter` to `solver_iter`, aligning the code with recent MuJoCo API changes.
    *   **Status:** Updated 2026-03-12.

*   **[Bug Fix] Taxi Environment Dynamics**
    *   **PR:** [#1533](https://github.com/Farama-Foundation/Gymnasium/pull/1533) `Fix asymmetric transition dynamics in rainy Taxi environment`
    *   **Author:** @jashshah999
    *   **Details:** Resolves asymmetric transition dynamics in the stochastic "rainy" Taxi environment. This fix ensures MDP transition probabilities are computed correctly regardless of movement direction.
    *   **Status:** Updated 2026-03-12.

### 5. Why This Project Matters in Today's RL Landscape
As the direct successor to OpenAI Gym, **Gymnasium** remains the foundational dependency for nearly all Python-based Reinforcement Learning research. While today's updates are minor patches, they are critical for maintaining the **API standard** that connects agents to environments. Fixes like the MuJoCo solver iteration patch ensure that the library stays compatible with evolving external physics engines, preventing pipeline breaks in continuous control research.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

Here is the RL Daily Digest for **Stable Baselines3** on 2026-03-13.

### 1. Today's Highlights
Activity on the Stable Baselines3 (SB3) repository was minimal over the last 24 hours. The primary event was the administrative closure of a feature request regarding external memory systems. No code changes or releases were recorded.

### 2. Releases
**None.**
No new version tags were created in the last 24 hours.

### 3. Important Issues
**#2225 [CLOSED] Cross-Episode Experience Memory Callback**
*   **Author:** @robotmem
*   **Status:** Closed (marked as "more information needed" / "LLM generated")
*   **Link:** [DLR-RM/stable-baselines3 Issue #2225](https://github.com/DLR-RM/stable-baselines3/issues/2225)
*   **Analysis:** A user proposed **robotmem**, a cross-episode experience memory system designed for robot learning, utilizing a custom SB3 callback (`RobotMemSB3Callback`). The maintainers closed the issue, flagging it as likely LLM-generated and lacking sufficient specific detail for integration or further action. This highlights the maintainers' strict stance on spam/low-effort issues versus genuine architectural proposals.

### 4. Key PR Progress
**None.**
No pull requests were updated, merged, or opened in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
Despite being a "stable" library, SB3 remains the industry standard for reliable implementations of core Deep RL algorithms (PPO, SAC, TD3, etc.). While newer frameworks focus on massive scaling or neural network remixing, SB3 serves as the **interoperability layer** for the RL ecosystem. Projects like *robotmem* continue to target SB3's `BaseCallback` class for integration, proving that SB3 is still the primary interface for connecting custom robot hardware or niche memory architectures to standard training loops.

</details>