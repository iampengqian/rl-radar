# RL Open Source Daily Digest 2026-03-25

> Generated: 2026-03-24 22:06 UTC | Projects covered: 15

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

The RL open-source ecosystem on 2026-03-25 shows a clear bifurcation between **active, next-generation LLM post-training frameworks** and **stable, maintenance-mode classical RL libraries**.

The high-velocity projects (verl, AReaL, TRL, OpenRLHF, Open Instruct, ROLL) are aggressively competing to solve the same three problems: **multimodal RL**, **hardware heterogeneity**, and **asynchronous distributed training**. These frameworks are effectively becoming operating systems for training 100B+ parameter "world models" that can see, reason, and act.

Meanwhile, foundational libraries (CleanRL, Stable Baselines3, Gymnasium) are in a stability phase, focused on dependency maintenance and compatibility rather than architectural innovation.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
|---------|--------|-----|----------|--------|
| **AReaL** | 6 closed | 33 updated | 0 | High-intensity stabilization sprint; VLM focus |
| **verl** | 3+ new | 10+ updated | 0 | Strategic expansion (GB200, Ascend, FlowGRPO) |
| **TRL** | 3 active | 6+ updated | 0 | Aggressive VLM refactoring; GRPO hardening |
| **Open Instruct** | 0 | 10+ updated | 0 | Deep architectural alignment with OLMo-core |
| **OpenRLHF** | 3 closed | 0 | **v0.9.7** | Async evaluation release; stability focus |
| **ROLL** | 2 active | 2 merged | 0 | Qwen3.5 integration; vLLM debugging |
| **ROCK** | 2 feature | 4 active | 0 | Cloud-native infra (Nacos, GPU passthrough) |
| **Gymnasium** | 0 | 1 open | 0 | MuJoCo v3.5+ compatibility maintenance |
| **CleanRL** | 1 new | 0 | 0 | Gymnasium API breakage (canary signal) |
| **Stable Baselines3** | 1 updated | 0 | 0 | Feature exploration (IPEX integration) |
| **PettingZoo / rl_games / Tianshou / torchtune** | 0 | 0 | 0 | Dormant |

## Shared Research & Engineering Directions

### Research Signals

- **Multimodal RL is the new default:** All major frameworks (verl, AReaL, TRL, ROLL) are racing to support Vision-Language Models (VLMs) with image/video rollouts. This is no longer experimental—it's table stakes for 2026.
- **GRPO as the emerging standard:** Group Relative Policy Optimization is being actively patched and hardened across TRL, Open Instruct, and ROLL, suggesting it's replacing traditional PPO for many LLM post-training workflows.
- **Agentic training pipelines:** ROLL's SWE-bench integration and TRL's `environment_factory` image support indicate a shift toward training agents that can use tools and navigate complex environments, not just optimize dialogue rewards.

### Engineering & Infrastructure Signals

- **Hardware fragmentation is real:** Projects are simultaneously supporting Nvidia Blackwell (GB200), Ascend NPUs, and Intel optimizations. No single hardware vendor dominates the roadmap.
- **Async training architectures:** OpenRLHF's partial rollouts, verl's `DiffusionAgentLoopWorker`, and AReaL's RPC batching all point to decoupling generation from training as a core architectural requirement for scale.
- **vLLM integration depth:** Multiple projects (Open Instruct, ROLL, TRL) are wrestling with vLLM version compatibility, weight transfer APIs, and server-mode stability—indicating vLLM has become the inference backbone for RLHF.
- **Cloud-native configuration:** ROCK's move to Nacos and AReaL's IPv6 support signal RL infrastructure maturing toward production DevOps standards.

## Differentiation Analysis

| Project | Strategic Positioning | Unique Value Prop |
|---------|----------------------|-------------------|
| **verl** | Hardware-agnostic post-training platform | Broadest hardware support (GB200 + Ascend); FlowGRPO for diffusion models |
| **AReaL** | Heterogeneous distributed training | Best-in-class RPC transport for VLM; NUMA awareness; 100B+ MoE support |
| **TRL** | Accessible multimodal RLHF | Tightest HuggingFace ecosystem integration; lowest barrier to entry |
| **Open Instruct** | OLMo-native RL research | Direct pipeline to open-weights foundation models (OLMo) |
| **OpenRLHF** | Production-grade PPO/GRPO | Most mature async evaluation; clean hardware abstraction |
| **ROLL** | Agentic RL infrastructure | SWE-bench evaluation; rapid foundation model adoption |
| **ROCK** | Sandbox infrastructure layer | GPU passthrough sandboxes; cloud-native config management |

**Key insight:** verl and AReaL are competing directly for the "scale-first" enterprise segment, while TRL captures the research/prototyping market. Open Instruct and ROLL serve as vertical integration plays for their respective parent organizations (AllenAI's OLMo, Alibaba's Qwen).

## Community Momentum & Maturity

- **AReaL** shows the highest velocity (33 PRs updated), but this is a stabilization sprint closing VLM bugs—suggesting recent architectural changes are still settling.
- **verl** demonstrates strategic coherence: simultaneous pushes on hardware support, algorithmic expansion (FlowGRPO), and legacy deprecation indicate strong product management.
- **TRL** benefits from HuggingFace's community reach but shows growing pains in VLM integration (multiple data collator refactors).
- **OpenRLHF** operates at a slower, release-driven cadence (v0.9.7), prioritizing stability over velocity—a mature signal for production users.
- **CleanRL and SB3** remain critical for education and baselines but are not driving the field's technical frontier.

## Trend Signals

1. **Multimodal RL is the 2026 battleground:** Every active framework is prioritizing VLM support. Text-only RLHF is legacy.

2. **Hardware sovereignty is strategic:** Projects supporting multiple accelerators (verl, AReaL) are better positioned for a fragmented hardware market than single-vendor solutions.

3. **vLLM version fragmentation is a stability risk:** ROLL's Torch 2.8.0 + vLLM 0.10.2 crashes and TRL's server-mode hangs reveal the cost of rapid inference backend evolution. Production users should pin dependencies aggressively.

4. **Agentic evaluation is becoming standardized:** SWE-bench integration in ROLL and tool-use GRPO in TRL suggest the community is converging on code-generation and tool-calling as the primary agentic benchmarks.

5. **Classical RL is in maintenance mode:** The lack of activity in PettingZoo, rl_games, Tianshou, and torchtune suggests these projects have achieved stability goals and are not currently driving new research directions.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL Ecosystem
**Date:** 2026-03-25

Here is the analysis of the latest updates from the **ROLL (RL Open Lens)** framework by Alibaba.

## 1. Today's Highlights
The ROLL ecosystem is actively expanding its support for next-generation models and agentic workflows. The past 24 hours saw the integration of **Qwen3.5** into the ROCK (Robust Open-ended CI Knowledge) agentic pipeline and critical bug fixes regarding reward normalization in SWE-bench tasks. However, users should be aware of emerging stability issues with the latest **Torch 2.8.0 + vLLM 0.10.2** stack when utilizing KL loss.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **Critical Stability Alert (Torch 2.8.0 + vLLM 0.10.2):** Users are reporting training crashes when fine-tuning `qwen2.5-vl-3B-agentic` with `use_kl_loss=True` on the latest Torch/vLLM stack. Downgrading to Torch 2.6.0 + vLLM 0.8.4 is currently the verified workaround.
    *   **Status:** Open | [Issue #398](https://github.com/alibaba/ROLL/issues/398)
*   **SWE-bench Reward Normalization Bug:** A configuration issue in `agent_val_rock_swe.yaml` was identified where reward normalization resulted in zero advantages, effectively blocking gradient updates.
    *   **Status:** Closed (Resolved via config fix) | [Issue #397](https://github.com/alibaba/ROLL/issues/397)

## 4. Key PR Progress
*   **[MERGED] Qwen3.5 ROCK Agentic Support:** The repository now includes a native example for Qwen3.5 (2B) in the ROCK agentic pipeline (`agent_val_rock_swe_qwen35_2b.yaml`). This PR also patched chat-template tokenization paths for newer Transformers versions.
    *   [PR #396](https://github.com/alibaba/ROLL/pull/396) (Closes #395)
*   **[MERGED] Pipeline Config Fix:** Corrected a typo in the `run_onpolicy_distill_pipeline.sh` script.
    *   [PR #399](https://github.com/alibaba/ROLL/pull/399)

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning shifts from static datasets to dynamic **Agentic RL**, ROLL provides critical infrastructure for training agents on complex tasks like SWE-bench. The rapid addition of **Qwen3.5** examples highlights the project's commitment to staying current with foundation model releases. Furthermore, the identification of **vLLM/Torch compatibility issues** underscores the fragility of current RLHF stacks, making ROLL's community-driven troubleshooting essential for production stability.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem
**Date:** 2026-03-25

## 1. Today's Highlights
The ROCK ecosystem is actively enhancing its infrastructure flexibility and sandbox capabilities. Key focus areas include decoupling configuration management (moving to Nacos) and advancing hardware acceleration support (GPU passthrough) for Docker sandboxes. Documentation was also updated to reflect the latest v1.4.3 release.

## 2. Releases
*   **No new releases** were tagged in the last 24 hours.
*   *Note:* Documentation PRs were merged for the **v1.4.3** release notes, suggesting a formal release is imminent or recently stabilized.

## 3. Important Issues
*   **[Feature] Move Pool Config to Nacos ([#659](https://github.com/alibaba/ROCK/issues/659))**
    *   **Status:** Open
    *   **Context:** Currently, adding a new pool requires rebuilding the image. This issue proposes migrating pool configuration to Nacos to support dynamic, flexible configuration without redeploying the admin service.
*   **[Feature] Add Image Pull Task ([#662](https://github.com/alibaba/ROCK/issues/662))**
    *   **Status:** Open
    *   **Context:** A new enhancement request targeting the Sandbox category to introduce specific image pull tasks.

## 4. Key PR Progress
*   **Feat: Dynamic Pool Configuration via Nacos ([#656](https://github.com/alibaba/ROCK/pull/656))**
    *   **Status:** Closed (Merged)
    *   **Impact:** Implements the logic requested in Issue #659, allowing pools to be modified dynamically via Nacos, significantly improving operational efficiency.
*   **Add GPU Passthrough for Docker Sandboxes ([#658](https://github.com/alibaba/ROCK/pull/658))**
    *   **Status:** Open
    *   **Impact:** Introduces server-side controls for exposing GPUs to Docker-backed sandboxes via runtime configuration. This is critical for scaling heavy RL workloads without altering the SDK request shape.
*   **Documentation & Image Task Updates:**
    *   **Closed:** [PR #661](https://github.com/alibaba/ROCK/pull/661) (v1.4.3 Release Notes) and [PR #663](https://github.com/alibaba/ROCK/pull/663) (Feature branch for image pull task).
    *   **Open:** [PR #664](https://github.com/alibaba/ROCK/pull/664) (Implementation of Image Pull Task).

## 5. Why This Project Matters in Today's RL Landscape
ROCK (Runtime for Open Community Knowledge) serves as a critical infrastructure layer for RL systems. By integrating **Nacos** for configuration management, the project moves towards cloud-native agility, essential for large-scale distributed RL training. Furthermore, the introduction of **GPU passthrough** in Docker sandboxes addresses a major bottleneck in RL development: the need for isolated, hardware-accelerated environments for policy training and evaluation. These updates signal a maturity in the project's architecture, prioritizing operational flexibility and raw performance.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL
**Date:** 2026-03-25

## 1. Today's Highlights
AReaL demonstrates intense development activity with **33 updated PRs** and a focus on stabilizing **multimodal RL training**. The community and maintainers aggressively resolved infrastructure bugs, closing all 6 updated issues. Key themes include optimizing distributed RPC transport for Vision-Language Models (VLM), architectural refactoring for engine backends, and expanding model support to massive MoE architectures.

## 2. Releases
*   **None** recorded in the last 24 hours.

## 3. Important Issues
*   **VLM RPC Instability (Resolved):** Several critical issues regarding VLM training were closed today.
    *   **[#1069](https://github.com/inclusionAI/AReaL/issues/1069):** Fixed `VLM RPC serialization fails for PIL images`.
    *   **[#1071](https://github.com/inclusionAI/AReaL/issues/1071):** Addressed `Connection reset by peer` errors during RTensor fetch in large multimodal batches.
    *   **[#1036](https://github.com/inclusionAI/AReaL/issues/1036):** Resolved incorrect tensor splitting for multi-image samples in RPC transport.
*   **Gateway Streaming (Resolved):** **[#1046](https://github.com/inclusionAI/AReaL/issues/1046)** and **[#1053](https://github.com/inclusionAI/AReaL/pull/1053)** tackled `ResponseValidationError` when processing streaming responses, significantly improving compatibility with OpenAI-compatible clients like OpenClaw.

## 4. Key PR Progress
*   **Architecture & Backends:**
    *   **[#1044](https://github.com/inclusionAI/AReaL/pull/1044) [CLOSED]:** A high-priority refactor migrating `allocation_mode` to explicit per-engine `backend` fields, enabling more flexible heterogeneous training configurations.
    *   **[#1056](https://github.com/inclusionAI/AReaL/pull/1056) [OPEN]:** Introduced **Megatron-Bridge** adaptation, expanding support for large-scale distributed training frameworks.
*   **Advanced Model Support:**
    *   **[#1079](https://github.com/inclusionAI/AReaL/pull/1079) [OPEN]:** Added support for **BailingMoeV2.5** (~100B params), featuring a heterogeneous architecture with Lightning Attention, MLA, and MoE (256 experts).
*   **Performance & Infrastructure:**
    *   **[#1083](https://github.com/inclusionAI/AReaL/pull/1083) [OPEN]:** Implemented **NUMA CPU affinity binding** for training engines to reduce latency in multi-GPU setups.
    *   **[#1077](https://github.com/inclusionAI/AReaL/pull/1077) [OPEN]:** Optimized RPC by batching HTTP RTensor fetches, crucial for stabilizing large multimodal batch workloads.
    *   **[#1072](https://github.com/inclusionAI/AReaL/pull/1072) [OPEN]:** Enabled framework operation in **IPv6-only** environments.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a production-grade, heterogeneous RL framework capable of handling the next generation of "World Models." Today's activity underscores a shift from basic LLM PPO to complex, **multimodal distributed training** (fixing PIL/RPC bottlenecks) and **mass-scale MoE architecture support**. The integration of Megatron-Bridge and NUMA awareness reflects a mature focus on hardware efficiency, essential for training 100B+ parameter reasoning agents effectively.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL
**Date:** 2026-03-25

## 1. Today's Highlights
The TRL ecosystem is witnessing a strong pivot toward **Multimodal RL** and **Codebase Modularization**. Key activity includes extensive refactoring of the SFT and DPO data collation logic to support Vision-Language Models (VLMs) like Qwen3-VL. Simultaneously, the community is actively patching GRPO (Group Relative Policy Optimization) for tool use and accurate reward logging.

## 2. Releases
*   **No new releases** recorded for 2026-03-25.

## 3. Important Issues
*   **Multimodal Server Hangs ([#5361](https://github.com/huggingface/trl/issues/5361)):** Critical stability issue reported where multimodal RL training (GRPO + Qwen-VL) hangs in `vllm-mode="server"` with high-resolution images. Workaround currently requires manual image resizing.
*   **GRPO Tool Integration ([#5366](https://github.com/huggingface/trl/issues/5366)):** Users are attempting to fine-tune agents (Qwen3-0.6B) with GRPO using Python REPL tools, highlighting a demand for robust agent-training workflows.
*   **Qwen3.5 Embedding Unpacking Error ([#5334](https://github.com/huggingface/trl/issues/5334)):** A regression in SFTTrainer causing unpacking errors with Qwen3.5 input embeddings was identified and closed.

## 4. Key PR Progress
*   **Refactoring for VLM Support:** A series of PRs by `albertvillanova` are restructuring data handling. **[#5360](https://github.com/huggingface/trl/pull/5360)** (Open) simplifies `DataCollatorForLanguageModeling`, while **[#5354](https://github.com/huggingface/trl/pull/5354)** (Merged) fixes ID shape mismatches for text-only VLM datasets.
*   **GRPO Reliability:**
    *   **[#5364](https://github.com/huggingface/trl/pull/5364)** (Open): Fixes `IndexError` in `GRPOTrainer` when processing multimodal chat content with `None` values.
    *   **[#5353](https://github.com/huggingface/trl/pull/5353)** (Merged): Fixes a logging bug where `reward_weights` were ignored in `GRPOTrainer` metrics.
    *   **[#5349](https://github.com/huggingface/trl/pull/5349)** (Open): Introduces chunked LM head computation for `AsyncGRPOTrainer` to reduce memory overhead during log-prob calculation.
*   **Multimodal Tools:** **[#5323](https://github.com/huggingface/trl/pull/5323)** (Open) enables `environment_factory` to return images in tool responses, essential for training VLM agents.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to bridge the gap between cutting-edge RL research and production-ready LLM post-training. Today's activity underscores a necessary evolution: **moving beyond text-only RLHF to Multimodal RL**. By solving specific integration issues with vLLM and VLM architectures (like Qwen-VL), TRL is positioning itself as the standard interface for training the next generation of agentic models capable of seeing and acting, not just chatting.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-03-25

### 1. Today's Highlights
OpenRLHF released **version 0.9.7**, introducing critical updates to its asynchronous training capabilities, specifically enabling evaluation and partial rollouts. Concurrently, the community successfully resolved three significant issues regarding PPO evaluation metrics, SFTTrainer resume logic, and hardware device abstraction.

### 2. Releases
*   **[v0.9.7](https://github.com/OpenRLHF/OpenRLHF/releases/tag/v0.9.7)**
    *   **Async Evaluation:** Official support for evaluation during async training (Author: [@xiaoxigua999](https://github.com/xiaoxigua999)).
    *   **Partial Rollouts:** Implemented partial rollout support in async mode to optimize resource utilization.

### 3. Important Issues
*   **[#1202](https://github.com/OpenRLHF/OpenRLHF/issues/1202) [CLOSED]:** Enhanced PPO evaluation to include richer metrics (reward/length/truncation) and sample logging.
    *   *Significance:* Moves the framework beyond basic pass@k metrics, allowing for deeper debugging of agent behavior in production.
*   **[#1200](https://github.com/OpenRLHF/OpenRLHF/issues/1200) [CLOSED]:** Fixed an off-by-one error in `SFTTrainer` resume logic and a crash when `num_update_steps_per_epoch` was undefined.
    *   *Significance:* Critical stability fix for long-running SFT (Supervised Fine-Tuning) jobs requiring checkpoint resumes.
*   **[#1201](https://github.com/OpenRLHF/OpenRLHF/issues/1201) [CLOSED]:** Refactored `SFTTrainer` to include device abstraction and CPU fallback (removing hard dependency on `torch.cuda.current_device()`).
    *   *Significance:* Improves codebase portability and decouples training logic from specific hardware accelerators.

### 4. Key PR Progress
*   **No PR updates in the last 24 hours.**
    *   *Note:* Activity was centered on issue resolution and the release of accumulated features in v0.9.7.

### 5. Why This Project Matters in Today's RL Landscape
OpenRLHF continues to solidify its position as a production-grade framework for aligning Large Language Models (LLMs). By solving **async evaluation** and **hardware abstraction**, the project addresses two major bottlenecks in modern RLHF: the inefficiency of pausing training for evaluation and the rigidity of GPU-only implementations. These updates make it a more robust choice for distributed training pipelines in 2026.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-03-25

## 1. Today's Highlights
The **verl** ecosystem is witnessing a rapid expansion in hardware compatibility and algorithmic scope. Today’s activity highlights a strong push towards **next-generation hardware support** (Nvidia GB200/Blackwell and Ascend NPU) and the integration of **multimodal/multidisciplinary RL** workflows, specifically through the "FlowGRPO" initiative for diffusion models. Concurrently, significant maintenance efforts are underway to stabilize the codebase for the v0.8.0 release, specifically regarding `transformers 5.3.0` compatibility and the deprecation of legacy engines.

## 2. Releases
*   **No new releases** recorded for 2026-03-25.

## 3. Important Issues
*   **Qwen3.5 + Megatron Compatibility (#5727):** A critical bug was flagged in `release/v0.7.1` regarding invalid arguments in `get_transformer_layer_offset` when using the Megatron backend with `vp_stage`. This suggests potential breakage in pipeline parallelism configurations.
*   **GRPO Training Instability (#5659, #5649):** Users report persistent issues with GRPO training on Qwen3.5 models. Specific errors include runtime failures on 8*H100 setups (#5659) and generation loops failing to stop (EOS token issues) when using SGLang (#5649).
*   **Configuration Gaps (#5712):** With recent updates, users are finding the documentation lagging, specifically regarding reward function parameters (e.g., `rewards.num_wor...`), indicating a need for updated configuration guides.

## 4. Key PR Progress
*   **Architecture & Hardware Support:**
    *   **GB200 Support (#5596):** Introduced experimental Docker image support for ARM64/Blackwell architecture (GB200) with SGLang fixes.
    *   **Ascend NPU (#5608, #5734):** Added MXFP8 rollout support for Ascend 950 hardware and nightly CI for NPU-specific training scripts.
*   **Algorithmic Innovations (FlowGRPO):**
    *   **Multimodal RL (#5716, #5713):** A series of PRs are landing to support **FlowGRPO**. This includes adding `DiffusionAgentLoopWorker` for image/video rollouts and integrating image-based rewards (rule-based & generative reward models).
    *   **IcePop Algorithm (#5722):** Implementation of the IcePop algorithm for rollout correction was merged, enhancing stability by reusing `rollout_is_threshold` fields.
*   **Infrastructure & Maintenance:**
    *   **Dependency Upgrades (#5724):** High-priority fixes to align with `transformers==5.3.0` and resolve dependency loops in Megatron.
    *   **Deprecation (#5604):** A breaking change PR is open to deprecate legacy FSDP and Megatron engine workers, paving the way for v0.8.0.
    *   **Checkpointing (#5575):** Support for saving checkpoints in HF PEFT format via Megatron-Bridge is being finalized.

## 5. Why This Project Matters in Today's RL Landscape
**verl** is evolving from a standard RLHF framework into a **comprehensive, hardware-agnostic post-training platform**. Today's digest reveals a critical strategic shift:
1.  **Beyond Text:** By integrating diffusion agent loops and image-based rewards (FlowGRPO), verl is positioning itself as a key player in **multimodal RL**, essential for the next generation of "world models" and complex agentic systems.
2.  **Hardware Sovereignty:** The simultaneous support for Nvidia's Blackwell architecture and Ascend NPUs makes verl a uniquely portable solution for large-scale model training in a diversified hardware market.
3.  **Scalability:** The refactoring of teacher logprob computation (#5723) and deprecation of legacy engines (#5604) demonstrate a commitment to the high-throughput, async architectures required to train 200B+ parameter models efficiently.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-25

## 1. Today's Highlights
The Open Instruct ecosystem is currently experiencing a high-velocity development cycle, particularly within its **GRPO (Group Relative Policy Optimization)** and **OLMo-core** integration tracks. Activity is dominated by architectural refactoring to align internal training modules with the broader OLMo framework and significant upgrades to the inference backend (vLLM). There is a notable shift toward hybrid modeling and PPO-style enhancements.

## 2. Releases
*   **No new releases** were recorded in the last 24 hours.

## 3. Important Issues
*   **No active issues** were updated in the last 24 hours, suggesting a focus entirely on merging existing development threads rather than fielding new bug reports or feature requests.

## 4. Key PR Progress

### Architectural Alignment & GRPO Refactors
*   **OLMo-core Integration:** PR [#1327](https://github.com/allenai/open-instruct/pull/1327) rewrites `olmo_core_finetune.py` to utilize `HFDataLoader` with packing capabilities, aligning it with the standard `finetune.py` interface.
*   **GRPO Metric Standardization:** PR [#1552](https://github.com/allenai/open-instruct/pull/1552) is aligning `olmo_core_train_modules.py` metrics with the optimized `grpo_fast.py`, standardizing logging for KL estimators and policy clipping fractions.
*   **Unit Fixes:** PR [#1557](https://github.com/allenai/open-instruct/pull/1557) corrects `rank_microbatch_size` units in the `GRPOTrainModule` to handle tokens directly, ensuring API consistency.

### New Capabilities (PPO & Distillation)
*   **PPO with GAE Support:** PR [#1462](https://github.com/allenai/open-instruct/pull/1462) introduces a "hybrid" mode, adding PPO-style training with a learned value model (GAE) to `grpo_fast.py`. This bridges the gap between GRPO and traditional PPO workflows.
*   **Offline Distillation:** PR [#1534](https://github.com/allenai/open-instruct/pull/1534) (Part Two) implements teacher logit capture scripts for offline distillation via DistillKit.

### Infrastructure & Observability
*   **Dependency Upgrades:** PR [#1556](https://github.com/allenai/open-instruct/pull/1556) (Closed/Merged) upgraded the stack to **vLLM 0.17.1** and **Torch 2.10**, removing legacy Flash Attention v2 dependencies.
*   **Weight Transfer API:** PR [#1515](https://github.com/allenai/open-instruct/pull/1515) is migrating to vLLM’s native weight transfer APIs, replacing manual parameter broadcasting loops.
*   **Observability:** PR [#1554](https://github.com/allenai/open-instruct/pull/1554) enhances Weights & Biases integration for `grpo_fast.py`, while PR [#1540](https://github.com/allenai/open-instruct/pull/1540) adds gradient norm logging to DeepSpeed.

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct acts as the critical bridge between the **OLMo (Open Language Model)** research infrastructure and production-grade RLHF techniques. By standardizing GRPO implementations and integrating vLLM's native weight transfer capabilities, the project is solving one of the biggest bottlenecks in modern RLHF: **efficient, real-time model serving during training**. The current influx of PRs aligning OLMo-core with GRPO suggests a strategic move to make OLMo models the standard for open-source reinforcement learning research.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

Here is the RL Daily Digest for **CleanRL** on 2026-03-25.

### 1. Today's Highlights
Activity on the CleanRL repository has been minimal over the last 24 hours, with no new code merges or releases. The primary focus is on a newly reported compatibility bug regarding the latest version of Gymnasium (v1.2.3) and its interaction with Mujoco v5 environments.

### 2. Releases
*   **None.** No new versions or tags were published in the last 24 hours.

### 3. Important Issues
*   **Gymnasium v1.2.3 Compatibility Failure with Mujoco v5**
    *   **Issue:** [#545 KeyError: 'final_observation'](https://github.com/vwxyzjn/cleanrl/issues/545)
    *   **Status:** Open
    *   **Analysis:** A user reported a breaking change in the `envs.step(actions)` return structure following an upgrade to Gymnasium v1.2.3. The `infos` dictionary no longer contains the expected `final_observation` key, causing a `KeyError` during environment termination steps. This suggests the CleanRL codebase may need a patch to align with updated Gymnasium API standards for Mujoco v5.

### 4. Key PR Progress
*   **None.** No pull requests were opened, updated, or merged in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
CleanRL remains a critical infrastructure project in the Reinforcement Learning ecosystem. By providing single-file implementations of major algorithms (PPO, DQN, etc.), it lowers the barrier to entry for students and researchers while ensuring high-quality, readable code. The current issue regarding Gymnasium v1.2.3 highlights the project's role as a canary in the coal mine for API stability; as dependencies like Gymnasium evolve, CleanRL's ability to quickly adapt is essential for the thousands of researchers relying on it for experimental baselines.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Daily Digest: Gymnasium
**Date:** 2026-03-25

### 1. Today's Highlights
Activity in the Gymnasium repository was minimal over the last 24 hours, with no new issues reported and no new releases. The sole activity focused on maintenance of the continuous integration (CI) pipeline, specifically regarding compatibility with the latest MuJoCo physics engine updates.

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **None.** No issues were created or updated within the reporting period.

### 4. Key PR Progress
*   **PR [#1549](https://github.com/Farama-Foundation/Gymnasium/pull/1549) [OPEN]: MuJoCo Test Seed Validation**
    *   **Author:** Kallinteris-Andreas
    *   **Summary:** This PR addresses a specific failure in the `MuJoCo/test_verify_reward_survive` test case. To correctly verify `info["reward_survive"]`, the environment must trigger a termination scenario. The current seeds fail to produce this scenario in MuJoCo versions 3.5 and 3.6. The PR updates the action seeds to ensure the test remains valid across these new simulator versions.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the industry standard API for reinforcement learning environments. While interface changes are rare, maintaining strict compatibility with underlying physics engines like MuJoCo is critical. As MuJoCo evolves (v3.5+), ensuring that termination logic and reward variables (like `reward_survive`) are deterministic and verifiable is essential for reproducible robotics research.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

Here is the RL Daily Digest for Stable Baselines3 (2026-03-25).

### 1. Today's Highlights
Activity on the Stable Baselines3 (SB3) repository was minimal over the last 24 hours, with **zero active Pull Requests** and **no new releases**. The sole recorded activity was an update to a long-standing feature request regarding hardware optimization. This quiet period suggests a stable codebase, with development efforts potentially focused on maintenance or planning for the next major iteration.

### 2. Releases
*   **No new releases** were tagged in the last 24 hours.

### 3. Important Issues
*   **[Feature Request] torch compile / integrating intel extension for pytorch** [#1564](https://github.com/DLR-RM/stable-baselines3/issues/1564)
    *   **Status:** Open
    *   **Context:** Updated late yesterday (2026-03-24).
    *   **Summary:** This issue proposes integrating the **Intel Extension for PyTorch (IPEX)**. The goal is to optimize SB3 performance for users running workloads on Intel CPUs and GPUs.
    *   **Significance:** As RL models become more compute-hungry, backend optimizations like IPEX and `torch.compile` are critical for reducing training times on non-NVIDIA hardware. This issue remains a potential "good first issue" for contributors looking to improve inference speed.

### 4. Key PR Progress
*   **No activity:** No Pull Requests were created, updated, or merged in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 (SB3) remains the **industry standard for reliable, modular, and easy-to-use implementations of core Reinforcement Learning algorithms** (such as PPO, SAC, and TD3).

*   **Reliability:** Unlike research repositories that prioritize novelty, SB3 prioritizes code quality, consistent API design, and thorough testing.
*   **Educational Utility:** It serves as the primary entry point for students and engineers learning RL, offering comprehensive documentation and integration with Gymnasium.
*   **Baseline Benchmarking:** In 2026, despite the rise of massive-scale AGI research, SB3 continues to serve as the critical "control group" for evaluating new algorithms against established standards.

</details>