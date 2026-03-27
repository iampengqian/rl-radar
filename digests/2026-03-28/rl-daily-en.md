# RL Open Source Daily Digest 2026-03-28

> Generated: 2026-03-27 22:04 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-03-28 displays a clear bifurcation between high-velocity LLM/VLM post-training frameworks and stable, maintenance-mode general-purpose RL libraries.

*   **LLM/VLM Post-Training:** Heavy iteration across Chinese and US big-tech frameworks (verl, ROCK, TRL, AReaL, slime, ROLL, Open Instruct). Focus is on multi-modal generation, agentic workflows, and hardware efficiency (NPU/Ascend, FP8).
*   **General RL:** Low activity. Stable Baselines3 and rl_games are in maintenance/doc mode, while standard API libraries (Gymnasium, PettingZoo) are stable with minimal changes.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 3+ | 5+ | 0 | High. Driving Multi-Modal Gen RL & MoE support (Qwen3.5). |
| **ROCK** | 1+ | 3+ | 5 | High. Rapid patch releases (v1.4.3-v1.4.7) & move to Serverless/Agent runtimes. |
| **TRL** | 3 | 6+ | 0 | High. Standardizing Agentic tool-calling (GRPO/RLOO) & vLLM integration. |
| **AReaL** | 3 | 6+ | 0 | High. Stabilizing VLM training & FP8/Elastic Weight optimizations. |
| **slime** | 3 | 4 | 0 | Medium. Advancing Multimodal Distillation & NPU compatibility. |
| **Open Instruct** | 0 | 5 | 0 | Medium. Hardening CI & adding sandboxed code environments (SWERL). |
| **ROLL** | 3 | 1 | 0 | Medium. Integrating external reward platforms (OpenReward). |
| **rl_games** | 1 | 1 | 0 | Low. Adding NVIDIA Warp support; SAC performance questioned. |
| **SB3** | 0 | 2 | 0 | Low. Docs updates for Gymnasium wrapper compatibility. |
| **Gymnasium** | 0 | 1 | 0 | Minimal. Adding third-party climate environments. |
| **PettingZoo** | 1 | 0 | 0 | Minimal. API inquiry regarding state representation. |
| **Tianshou** | 0 | 1 (Closed) | 0 | Minimal. Closing legacy visualization PR. |
| **CleanRL / OpenRLHF / torchtune** | 0 | 0 | 0 | None. No activity recorded. |

## Shared Research & Engineering Directions

### Research Directions
*   **Multimodal Generation RL:** A decisive shift from text-only RLHF to **Multi-Modal Generation**. verl’s `DiffusionAgentLoop` and slime’s Multimodal OPD indicate a push toward RL for image/video generation and "world models."
*   **Agentic Tool Use & Termination:** TRL is standardizing tool-calling loops and termination signals (`stop_tool_names`) for GRPO and RLOO, reflecting the industry pivot from static models to autonomous agents.
*   **Verifiable Rewards:** Open Instruct's `SWERLSandboxEnv` and ROLL's `OpenReward` integration highlight the trend toward **verifiable, code-based rewards** (unit tests, sandbox execution) over subjective reward models.

### Engineering & Infrastructure Directions
*   **Hardware Fragmentation (NPU & FP8):** Significant effort is directed toward breaking NVIDIA's monopoly. verl, AReaL, and slime are all pushing patches for **Huawei Ascend NPUs** and **FP8 training** to reduce costs and mitigate supply chain constraints.
*   **Serverless & Sandbox Orchestration:** ROCK’s move to serverless FC3 runtimes and Open Instruct’s sandboxed Docker environments signal that **Environment-as-a-Service** is becoming critical for scalable RL training.
*   **Inference Engine Integration:** Frameworks are deepening integration with high-throughput inference engines. TRL and AReaL are refining vLLM/SGLang backends to support seamless weight updates and memory optimization (zero-copy transfers).

## Differentiation Analysis

*   **verl vs. OpenRLHF/TRL:** While TRL focuses on accessible, Hugging Face-native fine-tuning, **verl** is positioning itself as a system-level, hardware-agnostic distributed framework (FSDP2 + Megatron + vLLM) capable of handling massive MoE models (Qwen3.5-35B) and multi-modal generation, distinct from TRL's "trainer-centric" approach.
*   **ROCK vs. Standard Containers:** Unlike generic Docker orchestration, **ROCK** is evolving into a specialized RL environment orchestrator with serverless capabilities (FC3) and dynamic service discovery (Nacos), specifically optimizing for the high-frequency reset/destroy cycles of RL workloads.
*   **rl_games vs. SB3:** **rl_games** maintains an edge in GPU-native physics (NVIDIA Warp) for robotics/simulation, whereas **SB3** focuses on being the stable, correct reference implementation for standard control algorithms, as evidenced by the current SAC performance debates.

## Community Momentum & Maturity
*   **Maturity:** Tianshou, CleanRL, and OpenRLHF appear to be in a dormant or maintenance phase, with little to no activity. Stable Baselines3 and Gymnasium are "finished" standards, focused on documentation and stability rather than feature expansion.
*   **Momentum:** The energy has shifted decisively toward the **Post-Training LLM/VLM** frameworks (verl, TRL, AReaL). These projects are seeing rapid iteration (multiple PRs daily) driven by the immediate demands of aligning large language and multimodal models.
*   **Regional Clusters:** There is a distinct cluster of high-velocity Chinese frameworks (verl, ROCK, AReaL, slime, ROLL) aggressively tackling hardware heterogeneity (NPU) and large-scale distributed training, reflecting local infrastructure constraints and model development velocity.

## Trend Signals
*   **Convergence on Qwen3.5:** Multiple frameworks (verl, ROLL, slime) are simultaneously battling with **Qwen3.5 MoE** integration issues, identifying this architecture as the current standard for large-scale RL experimentation.
*   **The "Context Crisis":** Issues regarding context parallelism (slime #1744) and memory limits (verl #5779) suggest that long-context training is the next major infrastructure bottleneck.
*   **Sandboxing as a Feature:** The inclusion of dedicated sandbox environments (ROCK's tasks, Open Instruct's SWERL) marks a transition where "safe code execution" is becoming a built-in feature of RL frameworks rather than an external tool.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL (alibaba/ROLL)
**Date:** 2026-03-28

## 1. Today's Highlights
The ROLL ecosystem is actively expanding its support for next-generation models and external reward platforms. Key focus areas today include the integration of **OpenReward** for scalable agentic environments and requests for **Qwen3.5** migration examples. A critical regression bug was identified involving **Torch 2.8.0** and **vLLM 0.10.2** when utilizing KL loss.

## 2. Releases
**No new releases** were recorded in the last 24 hours.

## 3. Important Issues
*   **Critical Regression with Torch 2.8.0 + vLLM 0.10.2:** Users report training crashes when enabling `use_kl_loss` for `qwen2.5-vl-3B-agentic` on the latest stack. The issue does not appear on Torch 2.6.0 + vLLM 0.8.4.
    *   [Issue #398](https://github.com/alibaba/ROLL/issues/398)
*   **LR Scheduler Bug in Agentic Workflows:** Users noted that `AgentNativeStepEnvManager` causes the LR scheduler to deplete steps prematurely (dropping LR to 0) during long training runs.
    *   [Issue #407](https://github.com/alibaba/ROLL/issues/407)
*   **Demand for Qwen3.5 Examples:** Following the addition of Qwen3.5 support, the community is requesting official examples for **DeepSpeed** integration and **Sokoban** agentic pipelines.
    *   [Issue #395](https://github.com/alibaba/ROLL/issues/395) | [Issue #406](https://github.com/alibaba/ROLL/issues/406)

## 4. Key PR Progress
*   **Integration of OpenReward Environments:** PR #401 proposes adding [OpenReward](https://openreward.ai/) as a first-class agentic environment. This allows ROLL to train agents on containerized tasks like *EndlessTerminals* directly from the OpenReward platform.
    *   [PR #401](https://github.com/alibaba/ROLL/pull/401)

## 5. Why This Project Matters in Today's RL Landscape
As RL shifts towards complex, multi-modal agentic systems, ROLL serves as a critical bridge between massive LLM/VLM backbones (like Qwen) and production-grade RL infrastructures. The current activity highlights the ecosystem's growing pains—managing dependency regressions (vLLM/Torch) and scheduler granularity—while simultaneously pushing for open, standardized reward mechanisms via OpenReward integration.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem
**Date:** 2026-03-28
**Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

Here is the analysis of the latest activity in the ROCK (Resource Orchestrator for Cloud Kinetics) ecosystem.

## 1. Today's Highlights
The ROCK project is undergoing a significant **stabilization and extensibility phase**. Today's activity was dominated by a rapid succession of patch releases (v1.4.3 to v1.4.7) aimed at hardening sandbox infrastructure. Simultaneously, new proposals suggest a strategic pivot toward **Serverless Runtimes** (Alibaba Function Compute) and **Agentic Workflows**, indicating an effort to decouple RL environments from traditional container orchestration to reduce costs and latency.

## 2. Releases
Five new patch versions were released, signaling aggressive iteration on the v1.4 stable branch:
*   **[v1.4.7](https://github.com/alibaba/ROCK/releases/tag/v1.4.7):** Migrated pool configuration from static files to **Nacos** for dynamic service discovery.
*   **[v1.4.6](https://github.com/alibaba/ROCK/releases/tag/v1.4.6):** Cleaned up deprecated info.
*   **[v1.4.5](https://github.com/alibaba/ROCK/releases/tag/v1.4.5):** Cherry-picked proxy enhancements, allowing WebSocket proxies to target user-specified ports.
*   **[v1.4.4](https://github.com/alibaba/ROCK/releases/tag/v1.4.4):** Introduced **Image Pull Tasks** and support for **Pinned Images** in cleanup tasks (critical for caching specific environment snapshots).
*   **[v1.4.3](https://github.com/alibaba/ROCK/releases/tag/v1.4.3):** Added base proxy interface.

## 3. Important Issues
*   **SDK Reliability in Async Mode:** [Issue #685](https://github.com/alibaba/ROCK/issues/685) highlights a critical bug where `Sandbox.arun()` in `nohup` mode always returns `exit_code=0`, masking command failures. This is a key concern for RL training loops that rely on async environment resets.
*   **Infrastructure Enhancements:** Several closed issues ([#683](https://github.com/alibaba/ROCK/issues/683), [#675](https://github.com/alibaba/ROCK/issues/675)) confirm the team is clearing technical debt regarding Docker validation timeouts and deprecated messages.

## 4. Key PR Progress
*   **Serverless Runtime Support:** [PR #643](https://github.com/alibaba/ROCK/pull/643) (Open) proposes adding **Alibaba Function Compute (FC3)** as a sandbox provider. This is a major architectural shift, enabling "Custom Runtime" and "Custom Container" modes with built-in circuit breakers, potentially allowing RL agents to run in stateless serverless environments.
*   **Agent Integration:** [PR #681](https://github.com/alibaba/ROCK/pull/681) (Open) hints at "support Agent Run," suggesting first-class support for autonomous agent loops is being integrated directly into the ROCK kernel.
*   **SDK & Proxy Fixes:** [PR #686](https://github.com/alibaba/ROCK/pull/686) (Open) addresses the async exit code issue by introducing `capture_exit_code` logic. Meanwhile, [PR #688](https://github.com/alibaba/ROCK/pull/688) fixed WebSocket subprotocol fallback to ensure binary compatibility.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves from research to production, the overhead of managing environment containers (Docker/Kubernetes) becomes a bottleneck. ROCK is solving the **"Environment-as-a-Service"** problem. By introducing features like dynamic Nacos configuration, serverless FC3 support, and robust WebSocket proxying, ROCK allows RL practitioners to treat complex environments (like sandboxes for Code Agents or Sims) as stateless, scalable API endpoints. Today's updates specifically improve the reliability of **long-running async tasks** and **resource cleanup**, which are essential for large-scale distributed training.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-28

## 1. Today's Highlights
The **slime** ecosystem saw significant activity regarding **Multimodal RL** and **Hardware Compatibility**. Key advancements include the merging of Multimodal On-Policy Distillation (OPD) support and continued efforts to patch NPU (Ascend) compatibility for Qwen3-VL models. Additionally, discussions highlighted ongoing stability challenges with Vision-Language Models (VLM) in distributed training modes.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **VLM Training Stability in Non-Colocate Mode:** Issue [#1673](https://github.com/THUDM/slime/issues/1673) reports that `UpdateWeightFromDistributed` corrupts weights for VLMs when `--colocate` is disabled, causing SGLang crashes. This remains a critical blocker for distributed VLM training.
*   **Context Parallelism for Long Context:** Users training large models (e.g., Qwen3.5-27B) are hitting OOM errors during backpropagation. Issue [#1744](https://github.com/THUDM/slime/issues/1744) requests Context Parallelism (CP) support for GDN layers to handle long-context scenarios.
*   **PyTorch Compatibility:** A user inquiry regarding compatibility with **PyTorch 2.10.0** was raised in Issue [#1771](https://github.com/THUDM/slime/issues/1771), noting that current Docker images are pinned to PyTorch 2.9.1.

## 4. Key PR Progress
*   **[MERGED] Multimodal OPD Support:** PR [#1760](https://github.com/THUDM/slime/pull/1760) was closed/merged, introducing support for Multimodal On-Policy Distillation. This resolves limitations where VLM teachers could not process image data during generation (fixes [#1758](https://github.com/THUDM/slime/issues/1758)).
*   **[OPEN] NPU (Ascend) Compatibility:** PR [#1750](https://github.com/THUDM/slime/pull/1750) proposes comprehensive patches for running Qwen3-VL-8b GRPO & PPO on NPU hardware, adapting the training stack (Megatron, SGLang, etc.) for Ascend chips.
*   **[OPEN] Gradient Norm Bug Fix:** PR [#1762](https://github.com/THUDM/slime/pull/1762) addresses a bug in Megatron training where `grad_norm` remains uninitialized if the `found_inf` skip path is triggered during gradient preparation.
*   **Refactoring:** PR [#1773](https://github.com/THUDM/slime/pull/1773) removed the `slime router`, indicating a shift in architectural routing strategy.

## 5. Why This Project Matters in Today's RL Landscape
**slime** is establishing itself as a frontier framework for **post-training large language and multimodal models**. By integrating deeply with high-performance inference engines like **SGLang** and training frameworks like **Megatron**, it pushes the boundaries of RLHF (Reinforcement Learning from Human Feedback) efficiency. The recent focus on **VLM support (OPD)** and alternative hardware backends (**NPU/Ascend**) demonstrates a strategic move towards accessible, large-scale multimodal alignment, addressing the industry's shift from text-only RL to complex vision-language reasoning.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-03-28

## 1. Today’s Highlights
The AReaL ecosystem saw significant activity focused on **system stability** and **multimodal support**. Key advancements include the stabilization of Vision Language Model (VLM) training via Qwen-VL fixes and SGLang backend restoration. Simultaneously, efforts to optimize the training stack progressed with the introduction of **Elastic Weight Updates** and **FP8 training support**.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[Feature] Elastic Weight Update ([#1101](https://github.com/inclusionAI/AReaL/issues/1101))**
    *   A proposal to optimize the synchronization of Actor weights to the Rollout Engine. This aims to move beyond current `disk` and standard update modes, potentially reducing latency in RL training loops.
*   **[Bug] KL Divergence Control Error ([#1099](https://github.com/inclusionAI/AReaL/issues/1099))**
    *   A critical bug report indicating training failures when `kl_ctl > 0` (utilizing a reference model). This impacts standard PPO/RLHF workflows.
*   **[Roadmap] 2026 Q1 Milestones ([#907](https://github.com/inclusionAI/AReaL/issues/907))**
    *   Active tracking of ongoing enhancements, seeking community contribution for identified roadmap items.

## 4. Key PR Progress
**Merged/Closed (Stabilization & Expansion):**
*   **BailingMoeV2.5 Support ([#1079](https://github.com/inclusionAI/AReaL/pull/1079)):** Integrated support for a ~100B parameter MoE model featuring Lightning Attention and Context Parallelism.
*   **vLLM Server Refactor ([#1091](https://github.com/inclusionAI/AReaL/pull/1091)):** Replaced custom `abort_all_reqs` hooks with vLLM’s native `pause_generation` flow for smoother weight updates.
*   **Qwen-VL Fixes ([#1094](https://github.com/inclusionAI/AReaL/pull/1094)):** Resolved `get_rope_index` dtype mismatches and argument binding issues for FSDP training.
*   **Validation Dataloader Fix ([#1096](https://github.com/inclusionAI/AReaL/pull/1096)):** Fixed a bug where `drop_last=True` caused inaccurate metric calculation during evaluation.

**Open/Draft (Performance & Features):**
*   **FP8 Training Support ([#1087](https://github.com/inclusionAI/AReaL/pull/1087)):** Introduces blockwise FP8 training to `ArchonEngine`, showing loss convergence within 3% of the BF16 baseline.
*   **SGLang VLM Restoration ([#1098](https://github.com/inclusionAI/AReaL/pull/1098)):** Fixes distributed weight sync mapping to restore training for Qwen VLMs using the SGLang backend.
*   **IPv6 Support ([#1072](https://github.com/inclusionAI/AReaL/pull/1072)):** Enables training in IPv6-only cloud environments.

## 5. Why This Project Matters in Today’s RL Landscape
AReaL is positioning itself as a high-performance, heterogeneous RL infrastructure. Today’s updates highlight a maturing ecosystem that is:
1.  **Solving VLM RLHF:** By fixing specific dtype and RPC serialization bugs for VLMs (Qwen-VL, BailingMoe), AReaL is lowering the barrier to applying RL to multimodal models.
2.  **Pushing Efficiency:** The move toward FP8 training and elastic weight updates addresses the massive computational cost of RL fine-tuning, making large-scale RL more accessible.
3.  **Backend Flexibility:** Refactoring server logic to use native flows (vLLM `pause_generation`) and supporting diverse backends (SGLang, IPv6) ensures the framework remains robust and adaptable to rapid changes in inference engine technologies.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-03-28

## 1. Today's Highlights
The TRL ecosystem is aggressively expanding its **Agentic RL capabilities**. Today’s update reveals a significant push toward tool-calling integration for `GRPOTrainer` and `RLOOTrainer`, alongside necessary patches for distributed training stability (FSDP2) and data integrity for multimodal inputs. A potential implementation flaw in **DAPO (Dynamic Advantage Policy Optimization)** token-level loss has also been flagged.

## 2. Releases
**No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Potential DAPO Implementation Flaw ([#5375](https://github.com/huggingface/trl/issues/5375)):**
    User `jiosephlee` reports that the token-level loss in `grpo_trainer.py` may incorrectly treat all tokens equally in the batch, diverging from the intended DAPO specification.
*   **FSDP2 CI Instability ([#5386](https://github.com/huggingface/trl/issues/5386)):**
    Distributed tests for `RLOO` are failing with CUDA assertion errors regarding probability tensors containing `inf`/`nan`. This is currently linked to `transformers 5.4.0` and tracked via an upstream fix.
*   **Feature Request: Agent Termination Signals ([#5389](https://github.com/huggingface/trl/issues/5389)):**
    Request to add `stop_tool_names` to `GRPOTrainer` to allow agents to halt their tool-calling loop immediately upon invoking specific tools (e.g., "submit_answer").

## 4. Key PR Progress
*   **Agentic Tool Calling & Control:**
    *   **[#5390](https://github.com/huggingface/trl/pull/5390):** Implements `stop_tool_names` for `GRPOTrainer`, enabling immediate agent loop termination.
    *   **[#5395](https://github.com/huggingface/trl/pull/5395):** Parity update! Adds full tool-calling support (`_tool_call_loop`, tool masks) to `RLOOTrainer`, mirroring `GRPOTrainer`.
    *   **[#5309](https://github.com/huggingface/trl/pull/5309):** Improves logging for completions to display conversation history rather than flat text, critical for debugging tool-use agents.
*   **Infrastructure & Stability:**
    *   **[#5387](https://github.com/huggingface/trl/pull/5387):** Marks `test_rloo[fsdp2]` as `xfail` to address the CUDA assertion failures identified in Issue #5386.
    *   **[#5323](https://github.com/huggingface/trl/pull/5323):** Enables `environment_factory` to return multimodal (image + text) tool responses, essential for VLM training.
    *   **[#5388](https://github.com/huggingface/trl/pull/5388):** Integrates **vLLM** inference into Base Self-Distillation Trainers (SDPO/SDFT) to speed up generation.
    *   **[#5376](https://github.com/huggingface/trl/pull/5376):** Enforces `datasets>=4.7.0` to prevent `None` value insertions in JSON/multimodal datasets.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to bridge the gap between **static LLM fine-tuning** and **interactive, agentic RL**. By standardizing tool-calling loops (PR #5395) and termination logic (PR #5390) across major algorithms like GRPO and RLOO, TRL is positioning itself not just as a training library, but as a foundational framework for **post-training reasoning and tool-use agents**. The integration of vLLM and multimodal support further solidifies its necessity for high-throughput, production-grade RL fine-tuning.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

Here is the RL Daily Digest for **2026-03-28**.

### 1. Today's Highlights
Activity on the Tianshou repository was minimal today, with zero new issues or releases. The only recorded event was the closure of a long-standing Pull Request regarding visualization tooling.

### 2. Releases
**None.**
No new version tags or releases were published in the last 24 hours.

### 3. Important Issues
**None.**
No issues were created or updated within the window.

### 4. Key PR Progress
A legacy enhancement request was closed today.
*   **PR [#341](https://github.com/thu-ml/tianshou/pull/341): Add numerical analysis tool and interactive plot**
    *   **Status:** Closed
    *   **Context:** Originally opened in April 2021, this PR aimed to introduce tools for numerical analysis and interactive plotting.
    *   **Significance:** The summary notes this is "extremely helpful for ablation study when building benchmark," suggesting the maintainers may have opted for a different solution for analysis/ablation features or deprecated this specific approach.

### 5. Why This Project Matters in Today's RL Landscape
Tianshou is a prominent open-source Reinforcement Learning platform built on PyTorch, known for its modular architecture and support for a wide range of algorithms (Model-free, Model-based, Multi-agent). Even on low-activity days, its repository remains a critical resource for researchers requiring structured, reproducible ablation studies and benchmarking tools.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl (2026-03-28)

Here is the analysis of the **verl** repository activity for March 28, 2026.

## 1. Today's Highlights
The **verl** ecosystem is aggressively expanding its Multi-Modal and Agentic RL capabilities. The key narrative today is the simultaneous push for **Qwen3.5 support** (specifically MoE architectures) and the foundational work for **Multi-Modal Generation RL**. There is also significant activity in stabilizing hardware backends, specifically regarding NPU support and vLLM/Megatron integration.

## 2. Releases
*   **None** (No new releases in the last 24h).

## 3. Important Issues
*   **[RFC] Multi-modal Generation RL 2026Q2 Roadmap** [#5755](https://github.com/volcengine/verl/issues/5755)
    *   **Context:** A major strategic RFC outlining the architecture for the Rollout Engine (vLLM-Omni enhancements for TP/DP support) and training stability. This is the guiding document for the next quarter.
*   **Qwen3.5 Checkpoint & Initialization Instability:**
    *   Users are reporting critical failures when loading Qwen3.5-35B-A3B checkpoints post-SFT due to parameter naming mismatches (`.mlp.experts.gate_up_proj` format) [#5765](https://github.com/volcengine/verl/issues/5765).
    *   A `rope_utils` IndexError is blocking Qwen3.5 runs on newer vLLM/Megatron stacks [#5772](https://github.com/volcengine/verl/issues/5772).
*   **Hardware/Config Constraints:**
    *   Users are hitting memory limits with Qwen3.5-27B on H20 clusters, requiring manual tuning of `rollout.update_weights_bucket_megabytes` [#5779](https://github.com/volcengine/verl/issues/5779).

## 4. Key PR Progress
*   **Model Support (Qwen3.5 & MoE):**
    *   **[FSDP2] feat: add qwen3.5 fsdp grpo training support** [#5682](https://github.com/volcengine/verl/pull/5682): Adds the transformer adapter and GRPO scripts for Qwen3.5-27B/35B. Essential for training these new MoE models.
*   **Multi-Modal & Agentic RL:**
    *   **[rollout] feat: flowgrpo - add diffusion agent loop support** [#5716](https://github.com/volcengine/verl/pull/5716): Implements `DiffusionAgentLoopWorker` for image/video generation RL.
    *   **[data] feat: integrate TransferQueue** [#5780](https://github.com/volcengine/verl/pull/5780): Introduces zero-copy image data transfer between AgentLoop workers and vLLM to optimize memory usage during multi-modal training.
*   **Infrastructure & Backends:**
    *   **NPU Support:** Two PRs targeted NPU stability—adding `mindspeedllm` backend support [#5680](https://github.com/volcengine/verl/pull/5680) and fixing OOM issues via IPC switches [#5784](https://github.com/volcengine/verl/pull/5784).
    *   **SGLang & LoRA:** A fix for `SGLangHttpServer.sleep()` ensures LoRA adapters don't destroy base weights during sleep mode [#5769](https://github.com/volcengine/verl/pull/5769).

## 5. Why This Project Matters in Today's RL Landscape
**verl** is positioning itself not just as a PPO library, but as a **system-level framework for Post-Training Large Models**. Three trends in today's digest confirm this:
1.  **Beyond Text:** The integration of `DiffusionAgentLoop` and `TransferQueue` signals a shift from text-only RLHF to **Multi-Modal Generation RL**, essential for the next generation of "world models."
2.  **Hardware Agility:** By standardizing support for both NVIDIA (FSDP2/vLLM) and Huawei Ascend (NPU/Mindspeed), verl is future-proofing against hardware supply chain constraints.
3.  **MoE Optimization:** The rapid iteration on Qwen3.5 and Mixtral-style architectures indicates that verl is becoming the go-to open-source stack for training **Mixture-of-Experts** models efficiently, a task traditionally difficult in standard RL frameworks.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-28

### 1. Today's Highlights
The Open Instruct ecosystem saw significant activity in infrastructure robustness and evaluation scalability. Key developments include decoupling CI from external network dependencies and introducing specialized Ray queues to prevent evaluation starvation during GRPO training. Additionally, the project merged a fix to keep pace with vLLM’s evolving auto-detection capabilities.

### 2. Releases
No new releases were recorded for 2026-03-28.

### 3. Important Issues
No new issues were opened or updated in the last 24 hours.

### 4. Key PR Progress
Development activity focused heavily on training stability and tooling integration:

*   **Infrastructure & CI:**
    *   **[CLOSED] Remove stale VLLM_ATTENTION_BACKEND env var:** Merged a cleanup removing the hardcoded `FLASH_ATTN` override. This aligns the codebase with vLLM 0.18+, which natively supports auto-detection hierarchies (FA3 > FA2 > SDPA).
        *   *Link:* [PR #1564](https://github.com/allenai/open-instruct/pull/1564)
    *   **[OPEN] Fixes the CI and removes requirement to access the network:** Proposed a shift to storing tokenizers/networks as binary blobs via `git lfs` to eliminate reliance on Hugging Face endpoints during continuous integration.
        *   *Link:* [PR #1563](https://github.com/allenai/open-instruct/pull/1563)

*   **Evaluation & Training Logic:**
    *   **[OPEN] Priority local eval queue for grpo_fast:** Addresses resource contention by porting a dedicated Ray queue for local eval prompts. This ensures evaluation tasks are not starved by training backlogs and optimizes vLLM prefetching.
        *   *Link:* [PR #1553](https://github.com/allenai/open-instruct/pull/1553)
    *   **[OPEN] Add pass@k metrics for local eval:** Rebased effort to integrate `eval_pass_at_k` directly into local GRPO evaluation loops, alongside dynamic vLLM context window sizing.
        *   *Link:* [PR #1464](https://github.com/allenai/open-instruct/pull/1464)

*   **New Environments & Distillation:**
    *   **[OPEN] Add SWERLSandboxEnv:** Introduces a sandboxed RL environment for code tasks, extending `GenericSandboxEnv` with per-sample Docker containers and a `submit` tool for running isolated test suites.
        *   *Link:* [PR #1492](https://github.com/allenai/open-instruct/pull/1492)
    *   **[OPEN] Offline Distillation via DistillKit (Part Two):** Implements the capture of teacher logits for offline distillation, expanding the training paradigm beyond pure RL fine-tuning.
        *   *Link:* [PR #1534](https://github.com/allenai/open-instruct/pull/1534)

### 5. Why This Project Matters in Today's RL Landscape
Open Instruct remains a critical barometer for the shift from static supervised fine-tuning (SFT) to dynamic **Language Model Reinforcement Learning (RL)**. The updates from 2026-03-28 highlight two major trends in the field:
1.  **Solving the "Last Mile" Engineering:** RL at scale requires robust infrastructure. By moving CI offline (via Git LFS) and optimizing vLLM attention backends, the project lowers the barrier to entry for high-frequency RL experimentation.
2.  **Verifiable Reward Signals:** The introduction of `SWERLSandboxEnv` and `pass@k` metrics underscores the industry pivot toward **verifiable rewards** (e.g., unit tests, code execution) rather than subjective reward models, which is essential for training capable coding and reasoning agents.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

# RL Daily Digest: rl_games
**Date:** 2026-03-28

## 1. Today's Highlights
The **rl_games** repository saw significant activity regarding environment integration and algorithm stability. The lead maintainer introduced native support for **NVIDIA Warp**, aiming to bridge the gap between RL algorithms and GPU-accelerated physics simulation. Conversely, community feedback highlights a potential performance disparity in the **Soft Actor-Critic (SAC)** implementation compared to baseline standards.

## 2. Releases
*   **No new releases** recorded for 2026-03-28.

## 3. Important Issues
*   **Performance Discrepancy in SAC (#341)**
    *   **Status:** Open
    *   **Context:** A user reported that a custom drone flight environment converges in 1 million steps using Stable Baselines3 (SB3) but fails to progress when ported to `rl_games`.
    *   **Implication:** This suggests potential issues in the SAC algorithm implementation or hyperparameter defaults within `rl_games` for continuous control tasks.
    *   **Link:** [Denys88/rl_games Issue #341](https://github.com/Denys88/rl_games/issues/341)

## 4. Key PR Progress
*   **Add NVIDIA Warp Environment Support (#342)**
    *   **Status:** Open
    *   **Author:** Denys88
    *   **Details:** This PR introduces a `WarpVecEnv` adapter (`vecenv_type: WARP`) to support GPU-accelerated environments. It includes a `WarpCartPole` example and addresses a specific `has_cnn` attribute bug in the SAC builder.
    *   **Significance:** Integrating NVIDIA Warp positions `rl_games` as a frontend for high-frequency, GPU-native physics simulations, reducing the CPU bottleneck often seen in Python-based envs.
    *   **Link:** [Denys88/rl_games PR #342](https://github.com/Denys88/rl_games/pull/342)

## 5. Why This Project Matters in Today's RL Landscape
**rl_games** remains a critical high-performance library for Reinforcement Learning, particularly favored for its optimized PPO implementation in robotics and character control. The move to support **NVIDIA Warp** aligns with the 2026 industry trend toward **end-to-end GPU acceleration** (Sim-to-Real), where both the physics engine and the neural network training reside on the GPU to achieve massive throughput. However, the open issue regarding **SAC** highlights the ongoing trade-off in specialized libraries: while PPO is battle-tested, secondary algorithms may lack the robustness found in more generalized frameworks like SB3.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Daily Digest: Gymnasium
**Date:** 2026-03-28

### 1. Today's Highlights
Activity on the Gymnasium repository was minimal over the last 24 hours, with no new issues or releases. The sole update involves a new Pull Request aiming to expand the ecosystem's third-party environment documentation into the climate and disaster response domain.

### 2. Releases
No new releases were recorded.

### 3. Important Issues
No issues were updated or opened in the last 24 hours.

### 4. Key PR Progress
*   **[OPEN] [#1551 Add external environment firecastrl](https://github.com/Farama-Foundation/Gymnasium/pull/1551)**
    *   **Author:** Shreyas-bellary
    *   **Summary:** This PR proposes adding **Fircastrl** to the official third-party environment list under a new "Environmental / Climate environments" category.
    *   **Technical Details:** Fircastrl is a Gymnasium-compatible environment focused on **wildfire simulation**. It features physics-informed dynamics for fire spread and implements helicopter-based firefighting strategies.
    *   **Significance:** This contribution signals a growing interest in applying Reinforcement Learning to climate resilience and disaster mitigation scenarios.

### 5. Why This Project Matters in Today's RL Landscape
As the standard API for single-agent reinforcement learning, Gymnasium remains the critical infrastructure for environment standardization. While the core API is stable, the ecosystem's value proposition in 2026 relies heavily on the diversity of available environments. PRs like #1551 highlight a trend toward **"RL for Science"** and high-stakes simulation domains (e.g., climate modeling), moving beyond traditional gaming benchmarks.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# RL Daily Digest: PettingZoo
**Date:** 2026-03-28

### 1. Today's Highlights
Activity on the PettingZoo repository was minimal over the last 24 hours. The primary focus was a new inquiry regarding the flexibility of the API's state representation, specifically within the context of Centralized Training with Decentralized Execution (CTDE). No code changes or releases occurred.

### 2. Releases
No new releases were recorded for 2026-03-28.

### 3. Important Issues
A technical question regarding API constraints was raised, highlighting a potential friction point for advanced MARL scenarios:
*   **[Question] Rigidity of `.state()` output:** Issue **[#1326](https://github.com/Farama-Foundation/PettingZoo/issues/1326)** queries why the global `.state()` function mandates an `ndarray` return type. The author argues that for CTDE paradigms involving ground truth data, a `Dict` format would be more appropriate, similar to the flexibility allowed in standard observation spaces.

### 4. Key PR Progress
No pull requests were updated or merged in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
As multi-agent reinforcement learning (MARL) matures, the distinction between observation spaces (agent-local) and state spaces (global) becomes critical for paradigms like CTDE. PettingZoo serves as the standard API for multi-agent environments (akin to Gymnasium for single-agent). Addressing limitations in the `.state()` API is essential for supporting complex, heterogeneous data structures that modern algorithms utilize for centralized training critics.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3 (2026-03-28)

## 1. Today's Highlights
Activity on Stable Baselines3 (SB3) over the last 24 hours was focused exclusively on documentation and developer ergonomics. Two PRs were updated addressing confusion regarding `is_image_space` checks when used with Gymnasium's native FrameStacking wrappers. No new code features or releases were recorded.

## 2. Releases
**None.**
No new version tags were created in the last 24 hours.

## 3. Important Issues
**None.**
No issues were created or updated within the reporting window.

## 4. Key PR Progress
The focus was on resolving documentation gaps for environment observation spaces.

*   **PR [#2233](https://github.com/DLR-RM/stable-baselines3/pull/2233) [OPEN]:** A new attempt to fix documentation regarding `is_image_space`.
    *   **Context:** Addresses Issue #2090.
    *   **Details:** This PR adds warnings in the custom environment documentation regarding Gymnasium’s `FrameStackObservation`. It notes that the wrapper adds an extra dimension that causes `is_image_space` checks to fail, potentially confusing users during environment validation. The author flagged the previous PR as "LLM generated" and likely resubmitted this to ensure quality compliance.
*   **PR [#2232](https://github.com/DLR-RM/stable-baselines3/pull/2232) [CLOSED]:** A previous attempt to fix the same documentation issue.
    *   **Details:** Closed in favor of the subsequent PR #2233. The summary recommended using SB3's native `VecFrameStack` to avoid dimension mismatches with `is_image_space`.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 (SB3) remains the industry standard for reliable, modular implementations of core Deep RL algorithms (PPO, SAC, TD3, A2C). In an ecosystem often fragmented by rapid API changes (such as the transition from OpenAI Gym to Gymnasium), SB3 provides a critical "stable baseline" for benchmarking and production deployment.

Today's updates highlight a common friction point in modern RL: **wrapper compatibility**. As the community shifts toward Gymnasium, nuances in how observation shapes are handled (specifically `Channel-first` vs `Channel-last` and stacking dimensions) can silently break environment checks. By updating docs to steer users toward `VecFrameStack` or explaining `is_image_space` behavior, the maintainers are actively reducing the debugging burden for practitioners building custom environments.

</details>