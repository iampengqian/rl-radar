# RL Open Source Daily Digest 2026-06-11

> Generated: 2026-06-10 22:33 UTC | Projects covered: 15

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
The reinforcement learning open-source ecosystem is currently defined by a stark bifurcation between foundational, single-agent API tools and the rapidly evolving infrastructure required for post-training Large Language Models (LLMs) and Vision-Language Models (VLMs). Today's activity is overwhelmingly concentrated on LLM alignment frameworks (verl, TRL, AReaL, slime, Open Instruct, ROCK, ROLL). These projects are tackling the extreme computational bottlenecks of distributed RLHF/GRPO, specifically focusing on heterogeneous hardware support, distributed memory optimization, and complex multi-container orchestration. Meanwhile, traditional RL and classic control libraries (Gymnasium, Stable Baselines3, CleanRL, etc.) experienced little to no activity, reflecting a mature, stable state for foundational RL research tooling.

## Activity Comparison
Development activity is heavily consolidated within the top-tier LLM post-training frameworks. `verl` leads the pack in raw volume, closely followed by `TRL` and other LLM alignment engines. 

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 7 | 32 | 0 | Massive heterogeneous compute expansion (NPU/ROCm) and distributed memory control. |
| **TRL** | 2 | 11 | 0 | Maturation of self-distillation algorithms and critical SFT loss masking fixes. |
| **Open Instruct** | 0 | 8 | 0 | Aggressive DPO performance scaling (MFU) and evaluation tooling. |
| **AReaL** | 1 | 6 | 0 | Advanced off-policy PPO corrections and decoupled distributed networking fixes. |
| **ROCK** | 3 | 4 | 0 | Transitioning to complex, multi-container orchestration for agentic workflows. |
| **slime** | 1 | 6 | 0 | Fusing PPO utility computations for VRAM reduction and multimodal data support. |
| **ROLL** | 0 | 1 | 0 | Upstream dependency management (vLLM compatibility patching). |
| **Gymnasium** | 0 | 1 | 0 | Baseline API documentation updates for MuJoCo environments. |
| *Others* | *0* | *0* | *0* | *No activity: CleanRL, OpenRLHF, PettingZoo, rl_games, SB3, Tianshou, torchtune.* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Evolution of Proximal Policy & Off-Policy Corrections:** There is a distinct push to move beyond standard PPO/DPO. `AReaL` introduced IcePop and KPop for double-sided masking and bidirectional binary KL divergence, while `verl` implemented the MINRL objective.
*   **Dynamic Self-Distillation:** `TRL` is formalizing On-Policy Self-Distillation (OPSD) and integrating live vLLM teacher scoring. `verl` is simultaneously exploring student-top-k renormalized reverse-KL for On-Policy Distillation (OPD).
*   **Multimodal Alignment:** frameworks are racing to stabilize RL for VLMs. `TRL` added VLM support for GOLDTrainer, `slime` patched rich image configs for Qwen3-VL, and `verl` is actively migrating multi-modal generation RL to a dedicated repository (`verl-omni`).

**Engineering & Infrastructure Signals**
*   **Heterogeneous Hardware Acceleration:** Breaking NVIDIA's monopoly is a top priority. `verl` drove massive integrations for AMD/ROCm and Ascend NPU (including Pipeline Parallelism), while `TRL` added dedicated AMD GPU CI runners.
*   **VRAM & Distributed Memory Optimization:** Colocating actor and rollout models requires extreme memory efficiency. `verl` implemented NCCL communicator suspension to free idle GPU memory, `slime` fused log-prob/entropy autograd computations, and `AReaL` disabled CPU gradient buffer backups to cut host memory usage by 4x.
*   **Multi-Container Orchestration:** As RL moves toward agentic coding and tool use, single-container training is insufficient. `ROCK` is actively merging Docker Compose-style orchestration (`ComposeJobConfig`) to support sidecars and init containers for SWE rollouts.

## Differentiation Analysis
*   **Deep Distributed Execution vs. Accessible APIs:** Projects like `verl`, `AReaL`, and `slime` differentiate by tackling the lowest-level networking and memory bottlenecks of massive-scale distributed training (e.g., NCCL hangs, Megatron weight syncing). In contrast, `TRL` and `Open Instruct` focus on democratizing algorithms (DPO, GRPO, OPSD) via accessible, high-level APIs and Hub integrations.
*   **Alignment Training vs. Agent Orchestration:** While most frameworks are focused on the mathematics and memory constraints of the *training loop*, `ROCK` is differentiating by focusing on the *deployment loop*—orchestrating the actual sandboxed environments, sidecars, and evaluators required for complex, real-world LLM agents.
*   **Enterprise Scale vs. Academic Baselines:** The intense enterprise engineering seen in `verl` and `ROCK` (driven by volcengine and Alibaba, respectively) contrasts sharply with the rest of the ecosystem (like `Gymnasium`, `CleanRL`, and `SB3`), which are functionally complete and require little day-to-day maintenance for standard academic RL research.

## Community Momentum & Maturity
The momentum in the open-source RL ecosystem has undeniably shifted to post-training and LLM alignment. `verl` and `TRL` boast the highest issue and PR throughput, indicating highly active corporate backing and community adoption. `ROCK`'s pending `v1.9.0` release and `Open Instruct`'s focus on MFU optimization reflect mature platforms in their optimization and scaling phases. Conversely, the zero-activity status of foundational projects like `Stable Baselines3`, `CleanRL`, and `Tianshou` indicates high maturity and stability for traditional RL, rather than stagnation. 

## Trend Signals
1.  **The Megatron-vLLM Bridge is the New Frontier:** Multiple major projects (`verl`, `slime`) are hitting and patching edge cases around synchronizing weights between Megatron-based trainers and vLLM inference engines. Mastering this bridge is currently the price of admission for large-scale RLHF.
2.  **Agentic Workflows Breaking Traditional Infrastructure:** The necessity of `ComposeJobConfig` in `ROCK` and parsing fixes for tool-use in `slime` signal that autonomous coding agents are breaking the assumptions of traditional single-loop RL frameworks.
3.  **Hardware Diversification is Production-Ready:** The heavy merging of AMD/ROCm and Ascend NPU CI and execution fixes today signals that enterprise RL teams are actively moving away from NVIDIA-exclusive training clusters for their post-training pipelines.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for June 11, 2026, based on the ROLL repository data.

### 1. Today's Highlights
*   **Stagnant Issue Tracker:** No new issues were opened, and zero updates were made to existing issues in the last 24 hours.
*   **Infrastructure Focus:** The sole activity revolves around maintaining backend compatibility for vLLM within ROLL's distributed execution framework. 

### 2. Releases
*   **No new releases** were published today. The team appears to be in a development and bug-fixing phase rather than an active deployment phase.

### 3. Important Issues
*   **No updates.** The issue tracker has seen no activity, suggesting either high current stability or a focus on upstream/direct PR contributions over GitHub issue tracking.

### 4. Key PR Progress
*   **[#455 [OPEN] [vLLM] Fix vLLM Ray executor env var compatibility](https://github.com/alibaba/ROLL/pull/455)** by `shun001`
    *   **Context:** Updated on 2026-06-10, this PR addresses a breaking change in newer versions of vLLM. 
    *   **Technical Details:** The environment variable `WORKER_SPECIFIC_ENV_VARS` has been moved from `RayDistributedExecutor` to `vllm.v1.executor.ray_utils`. This PR patches ROLL's integration to look for the correct module path in newer vLLM versions while maintaining a fallback for older versions. This is critical for preventing cluster initialization crashes during large-scale RL runs.

### 5. Why This Project Matters in Today's RL Landscape
Alibaba's **ROLL (Responsive Open-source Loop for Learning)** is a highly scalable, Ray-based reinforcement learning framework specifically tailored for training Large Language Models (LLMs). 

In the current RL landscape, the efficiency of RLHF (Reinforcement Learning from Human Feedback) and GRPO (Group Relative Policy Optimization) heavily depends on the seamless interaction between the RL orchestration layer (ROLL/Ray) and the LLM inference engine (vLLM). PRs like #455 highlight the ongoing battle open-source frameworks face: keeping up with the rapid, often breaking architectural updates of upstream dependencies like vLLM. By ensuring robust, cross-version compatibility for distributed worker environment variables, ROLL maintains its position as a reliable infrastructure backbone for high-throughput, distributed LLM training.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open-Source Ecosystem Daily Digest: alibaba/ROCK
**Date:** 2026-06-11

Here is your daily brief on the latest developments in the ROCK (Resource Orchestrator for Containerized Knowledge) ecosystem. 

## 1. Today's Highlights
Activity over the last 24 hours indicates a strong push toward **complex, production-grade orchestration** and **infrastructure flexibility**. Contributors are actively merging capabilities to support multi-container environments (like SWE rollouts) and decoupling the platform's execution backend to support remote/multi-operator setups. 

## 2. Releases
*   **No new releases cut today.** However, a version bump ([PR #1078](https://github.com/alibaba/ROCK/pull/1078)) to **v1.9.0** was merged, signaling that a formal release is likely imminent.

## 3. Important Issues
*   **Multi-Container Job Support ([Issue #1079](https://github.com/alibaba/ROCK/issues/1079)):** Author `xdlkc` proposed adding `ComposeJobConfig` to the ROCK SDK. Real-world RL tasks (e.g., Claude-code SWE rollouts) require main containers to work alongside sidecars (proxies, evaluators) and init containers. This issue requests making Docker Compose-style orchestration a first-class citizen in the SDK.
*   **Remote Operator Architecture ([Issue #1075](https://github.com/alibaba/ROCK/issues/1075)):** Author `Generalwin` requested the ability to run multiple operator types simultaneously (e.g., coexisting Ray and K8s) with automatic request routing, alongside the introduction of a new API-based "remote operator".
*   **Image Registry Mirror Lookup ([Issue #1081](https://github.com/alibaba/ROCK/issues/1081)):** Proposed enhancing the admin service to automatically probe internal mirror registries (via Nacos/YAML config) before starting a sandbox, preventing image pull failures in restricted network environments.

## 4. Key PR Progress
*   **[OPEN] `ComposeJobConfig` Implementation ([PR #1080](https://github.com/alibaba/ROCK/pull/1080)):** Directly addressing Issue #1079, this PR introduces `ComposeJobConfig` and `ComposeTrial`. It orchestrates multi-container topologies (main + sidecars + init) inside a single DinD (Docker-in-Docker) sandbox using a generated `runner.sh` script. 
*   **[OPEN] Remote Operator Support ([PR #1076](https://github.com/alibaba/ROCK/pull/1076)):** Tackles Issue #1075 by implementing the foundational code to support multiple operators and route execution requests to remote operator APIs.
*   **[OPEN] Registry Mirror Probing ([PR #1082](https://github.com/alibaba/ROCK/pull/1082)):** Implements the mirror lookup requested in Issue #1081 using `docker manifest inspect`, complete with a process-local TTL cache (60s) to optimize concurrent sandbox starts.
*   **[CLOSED] Version Bump ([PR #1078](https://github.com/alibaba/ROCK/pull/1078)):** Successfully merged the `1.9.0` version bump, closing [Issue #1077](https://github.com/alibaba/ROCK/issues/1077).

## 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning—specifically the rise of autonomous coding agents and complex LLM reward modeling (like RLHF/GRPO)—has outgrown single-node, single-container training scripts. Ecosystems like ROCK are critical because they bridge the gap between ML code and distributed systems infrastructure. 

Today's focus on `ComposeJobConfig` and `Remote Operators` proves that the RL community is actively solving the " orchestration overhead" problem. Providing sidecar support for live evaluations and multi-operator routing (Ray vs. K8s) allows researchers to deploy complex, highly-networked training environments without needing to rewrite core infrastructure code, accelerating the deployment of advanced AI agents.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: slime (THUDM)
**Date:** 2026-06-11

### 1. Today's Highlights
Activity in the `slime` repository over the last 24 hours focuses heavily on infrastructure robustness and resource optimization for large-scale reinforcement learning. Key updates include a critical memory optimization for PPO utility computations, expanded multimodal (VLM) data handling capabilities, and a patch fixing token parsing leaks during tool-based code agent RL. 

### 2. Releases
No new releases were recorded in the past 24 hours.

### 3. Important Issues
*   **Qwen-VL Integration Bug with Megatron Bridge:** A lingering bug ([#1723](https://github.com/THUDM/slime/issues/1723)) reports that the Qwen3.5-VL integration breaks when using the Megatron bridge. The error manifests as a repeated failure in SGLang's weight updating process (`update_weights_from_tensor`). This is a critical bottleneck for teams running distributed multimodal RL workloads.

### 4. Key PR Progress
*   **PPO Memory Optimization:** PR [#2011](https://github.com/THUDM/slime/pull/2011) introduces a significant performance tweak by fusing log-prob and entropy computation into a single autograd Function. This halves the working copy of logits during cross-entropy operations and leverages Megatron's backward pass, substantially reducing peak memory usage.
*   **Code Agent RL Parsing Fix:** PR [#2049](https://github.com/THUDM/slime/pull/2049) addresses a bug where `parse_model_output` leaks `<|im_end|>` (EOS tokens) into the `text` field during tool-use or reasoning steps, ensuring clean trajectory generation for code agents.
*   **VLM Rich Image Configs:** Closed via merge, PR [#2044](https://github.com/THUDM/slime/pull/2044) updates data utilities to support general, rich image configurations specifically required by Qwen3-VL architectures.
*   **Dataset Parallel Loading:** PR [#2048](https://github.com/THUDM/slime/pull/2048) implements the `--num-workers` flag for parallel dataset loading, adding enhanced logging for time consumption and modal tracking.
*   **Trajectory Manager Refactor:** Still in Draft, PR [#2005](https://github.com/THUDM/slime/pull/2005) indicates an ongoing architectural overhaul of the repository's trajectory management system.
*   **Ecosystem Expansion:** Closed PR [#2047](https://github.com/THUDM/slime/pull/2047) officially adds "Miles" to the ecosystem documentation, highlighting a production-focused, large-scale post-training framework built atop `slime`.

### 5. Why This Project Matters in Today's RL Landscape
As the RL ecosystem shifts heavily toward complex, multimodal LLM post-training (e.g., RLHF/GRPO for reasoning and agentic coding), infrastructure efficiency is the main bottleneck. `slime`’s current development trajectory directly addresses these scale challenges. By optimizing peak memory at the distributed level (Megatron integration) and ensuring robust trajectory parsing for tool-calling agents, `slime` is positioning itself as a high-performance, production-ready framework for next-generation LLM alignment.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Open-Source Daily Digest: AReaL
**Date:** 2026-06-11 | **Project:** [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

## 1. Today's Highlights
Activity over the last 24 hours shows a strong focus on infrastructure scalability, memory optimization, and advanced RL fine-tuning algorithms. Six pull requests were updated, highlighting active development in decoupled PPO off-policy corrections, Megatron memory management, and CI/CD pipeline modernization. One issue regarding Qwen3.5 memory utilization was officially closed.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **[CLOSED] [#1319: Abnormal GPU memory usage with Qwen3.5-4B](https://github.com/areal-project/AReaL/issues/1319)**
    *   *Context:* A user reported that switching from Qwen3-4B to Qwen3.5-4B caused massive VRAM spikes (up to 50GB for the reference model), leading to Out-Of-Memory (OOM) errors on an H100 during the actor update phase. It appeared that `fsdp.offload_params` was not dynamically clearing the reference model memory. The issue was marked stale and closed.

## 4. Key PR Progress
*   **Algorithm Advancements:**
    *   **[#1405](https://github.com/areal-project/AReaL/pull/1405) [OPEN]:** Introduces supporting features for **IcePop** (Double-Sided Masking) and **KPop** (Bidirectional Binary KL Divergence Masking)—two novel off-policy correction masking strategies for decoupled PPO actor loss.
*   **Memory Optimization & Compute:**
    *   **[#1393](https://github.com/areal-project/AReaL/pull/1393) [OPEN]:** Adds a `disable_grad_buffers_cpu_backup` option to `MegatronEngineConfig`. By preventing CPU backups of transient gradient buffers during offloading, this cuts host memory usage by ~4x.
    *   **[#1402](https://github.com/areal-project/AReaL/pull/1402) [OPEN]:** Refactors `clear_batches` across engines to default `shard_ids` to `None`, fixing argument mismatches for non-DP-head ranks introduced in a previous commit.
*   **Infrastructure & Tooling:**
    *   **[#1401](https://github.com/areal-project/AReaL/pull/1401) [CLOSED]:** Patched a critical hang in v2 `awex` weight-update bring-up where NCCL rendezvous failed in decoupled node deployments due to incorrect rank/address mapping.
    *   **[#1383](https://github.com/areal-project/AReaL/pull/1383) [OPEN]:** Integrates **OpenClaw** as an agent service runtime, assigning distinct LLM keys (`sk-sess-*`) per RL session for better episode tracking and API management.
    *   **[#1404](https://github.com/areal-project/AReaL/pull/1404) [OPEN]:** Automates PyPI/TestPyPI publishing via GitHub Actions and stabilizes Megatron dependencies by shifting from git-based to stable PyPI releases (`mbridge==0.15.1`).

## 5. Why This Project Matters in Today's RL Landscape
AReaL continues to position itself as a highly robust framework for large-scale Reinforcement Learning from Human Feedback (RLHF) and post-training. Today's activity highlights two massive pain points in the current open-source RL ecosystem: **VRAM bottlenecks at scale** and **decoupled distributed training**. 

By actively merging memory optimizations for Megatron (PR [#1393](https://github.com/areal-project/AReaL/pull/1393)) and fixing NCCL communication deadlocks in decoupled train/inference nodes (PR [#1401](https://github.com/areal-project/AReaL/pull/1401)), AReaL is directly solving the infrastructural barriers of modern LLM fine-tuning. Furthermore, the introduction of advanced PPO off-policy correction strategies like IcePop and KPop (PR [#1405](https://github.com/areal-project/AReaL/pull/1405)) showcases the project's commitment to pushing the mathematical boundaries of RL algorithms, ensuring high stability when training massive, constantly updating models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (huggingface/trl)
**Date:** 2026-06-11

Here is your daily brief on the most impactful updates in the TRL (Transformer Reinforcement Learning) open-source ecosystem.

## 1. Today's Highlights
The TRL ecosystem saw high PR activity (11 updated) with zero new releases. Key focus areas for the day include a major proposed refactor to SFT default loss calculations, the introduction of On-Policy Self-Distillation (OPSD), and critical patches for evaluation and training masking bugs in alignment trainers.

## 2. Releases
*   **No new releases** were cut in the last 24 hours.

## 3. Important Issues
*   **Improper SFT training of Llama-3.2-3B-Instruct ([Issue #5138](https://github.com/huggingface/trl/issues/5138))**
    *   **Details:** A high-priority bug ([`🚨 Important`]) detailing improper SFT training on Llama models. The issue stems from recent TRL updates that deprecated `DataCollatorForCompletionOnly` for completion-only loss calculations.
    *   **Relevance:** Directly aligns with ongoing core fixes, specifically PR #5988 which addresses assistant end-of-turn tokens falling outside the loss mask.
*   **GRPO with Reward Model OOM ([Issue #4419](https://github.com/huggingface/trl/issues/4419))**
    *   **Details:** A closed discussion regarding CUDA Out of Memory errors when scaling GRPO with reward models.

## 4. Key PR Progress

### New Algorithms & Model Support
*   **OPSD: On-Policy Self-Distillation Trainer ([PR #5990](https://github.com/huggingface/trl/pull/5990))**
    *   Implements a third self-distillation trainer (`OPSD`) based on recent research. The setup uses a single model acting as both student and teacher, utilizing an on-policy generation loop.
*   **VLM Support for GOLDTrainer ([PR #5969](https://github.com/huggingface/trl/pull/5969))**
    *   Extends `GOLDTrainer` to support Vision-Language Models (VLMs), adding same-family VLM distillation via Jensen-Shannon Divergence (JSD) loss.
*   **Bidirectional Masked Importance Sampling for IcePop ([PR #4732](https://github.com/huggingface/trl/pull/4732))**
    *   Introduces Masked Importance Sampling (MIS) ratio to the IcePop algorithm.

### Core SFT & Training Fixes
*   **Default SFT loss to `chunked_nll` ([PR #5846](https://github.com/huggingface/trl/pull/5846))**
    *   Proposes changing the default `loss_type` in `SFTConfig` from `"nll"` to `"chunked_nll"` (with an automatic fallback for `use_liger_kernel=True`). This is a foundational change aimed at improving SFT memory efficiency and stability.
*   **Fix `OnlineDPOTrainer` Evaluation ([PR #5985](https://github.com/huggingface/trl/pull/5985))**
    *   Fixes a critical bug where `OnlineDPOTrainer` performed a full policy-loss backward pass during the training step. During evaluation, this caused Transformers to fall back to default behavior, breaking eval metrics. 
*   **CI: Stop token in loss mask ([PR #5988](https://github.com/huggingface/trl/pull/5988))**
    *   Adds CI to ensure chat templates do not accidentally mask the assistant's stop token during SFT. (Directly mitigates the bug highlighted in Issue #5138).

### Infrastructure & Self-Distillation Upgrades
*   **Live Teacher Logprobs via vLLM ([PR #5989](https://github.com/huggingface/trl/pull/5989)) - [CLOSED/MERGED]**
    *   Introduces `use_teacher_server=True` for SDFT/SDPO. In self-distillation, the teacher is the student itself; this PR scores the teacher logprobs directly against the live vLLM generation server syncing student weights per step, significantly improving training throughput.
*   **Add AMD/ROCm CI ([PR #5918](https://github.com/huggingface/trl/pull/5918))**
    *   Implements a dedicated AMD GPU CI runner (`run_amd_ci.sh`) for TRL, expanding hardware ecosystem support.

## 5. Why This Project Matters in Today's RL Landscape
As of 2026, post-training paradigms—specifically Reinforcement Learning from Human Feedback (RLHF) and its derivatives (DPO, GRPO, Self-Distillation)—remain the primary differentiator for state-of-the-art LLMs and VLMs. 

Today's digest perfectly illustrates TRL's dominant role in democratizing this infrastructure:
1.  **Algorithmic Maturation:** The integration of OPSD and live vLLM teacher scoring for SDPO/SDFT shows the ecosystem moving away from static offline datasets toward dynamic, high-throughput, on-policy generation loops.
2.  **Hardware Democratization:** The introduction of AMD/ROCm CI ensures that open-source RL tooling remains hardware agnostic, a vital requirement for enterprise AI scaling.
3.  **Safety & Nuance at Scale:** Fixes like chunked NLL defaults and stop-token loss masking highlight the ongoing battle to perfect exact token-level control during alignment, which is critical for training models to stop generating appropriately and avoid hallucinations.

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

# RL Open-Source Ecosystem Daily Digest: verl
**Date:** 2026-06-11 | **Project:** [verl-project/verl](https://github.com/volcengine/verl) | **Activity:** 7 Issues, 32 PRs

## 1. Today's Highlights
Verl is experiencing a massive surge in hardware backend expansion and distributed systems engineering. Today's activity is heavily dominated by integration fixes for **AMD/ROCm** and **Ascend NPU**, alongside critical memory optimization and distributed networking enhancements for NVIDIA/Megatron backends. 

## 2. Releases
*   **No new releases** were cut in the last 24 hours.

## 3. Important Issues
*   **Multi-Modal Generation RL Migration (Roadmap):** The highly-upvoted ([👍 15] Issue [#5755](https://github.com/verl-project/verl/issues/5755)) confirms that multi-modal generation RL support is officially being migrated to a dedicated repository: [verl-project/verl-omni](https://github.com/verl-project/verl-omni).
*   **AMD/ROCm Parity Roadmap:** A new initiative ([#6590](https://github.com/verl-project/verl/issues/6590)) outlines plans to close the hardware parity gap for AMD MI355X and DeepSeek-V4 over the next 1-2 quarters.
*   **Megatron TP Hard-block:** Users training Qwen3.5-VL/MoE via Megatron-Bridge are hitting a `ValueError` restricting Tensor Parallel size ([#6681](https://github.com/verl-project/verl/issues/6681)).
*   **Fully Async Trainer Bug:** A critical bug was reported where the learning rate defaults to 0 in fully asynchronous training modes ([#6683](https://github.com/verl-project/verl/issues/6683)).
*   **OPD Feature Request:** A proposal to support student-top-k renormalized reverse-KL for On-Policy Distillation (OPD) ([#6676](https://github.com/verl-project/verl/issues/6676)).

## 4. Key PR Progress
*   **Cutting-Edge Model Support:** 
    *   Added DeepSeek V4 Flash GRPO support with Megatron-Bridge and FP8/MXFP4 weight transfer ([PR #6473](https://github.com/verl-project/verl/pull/6473)).
    *   Introduced a DeepSeek-V4-Flash SFT example running at TP1/PP4/EP8 ([PR #6603](https://github.com/verl-project/verl/pull/6603)).
    *   Fixed Qwen3.5 LoRA & Multi-Token Prediction (MTP) support ([PR #5599](https://github.com/verl-project/verl/pull/5599)).
*   **Memory & Distributed Optimizations:**
    *   Implemented NCCL communicator suspend/resume for Megatron in colocated mode to free up idle GPU memory during rollout ([PR #6408](https://github.com/verl-project/verl/pull/6408)). 
    *   Bundled NCCL bumped to >= 2.29.7 to natively support `ncclCommSuspend` ([PR #6621](https://github.com/verl-project/verl/pull/6621)).
    *   Optimized colocated actor/rollout weight-sync ordering to reduce peak VRAM ([PR #6685](https://github.com/verl-project/verl/pull/6685)).
*   **Ascend NPU & AMD Advances:**
    *   Enabled Pipeline Parallelism (PP) for vLLM rollout on Ascend NPU ([PR #6678](https://github.com/verl-project/verl/pull/6678), [PR #6665](https://github.com/verl-project/verl/pull/6665)).
    *   Fixed MindSpeed batch-invariant training repatch bugs for Ascend Megatron actors ([PR #6674](https://github.com/verl-project/verl/pull/6674)).
    *   Added Qwen3.5 35B MoE Ascend nightly CI ([PR #6637](https://github.com/verl-project/verl/pull/6637)).
*   **Trainer & Algorithm Fixes:**
    *   Fixed the `lr=0` async training bug by syncing optimizer steps prior to initialization ([PR #6684](https://github.com/verl-project/verl/pull/6684)).
    *   Added a per-sample `compute_score` timeout to `NaiveRewardManager` to prevent deadlocks during multi-teacher distillation ([PR #6673](https://github.com/verl-project/verl/pull/6673)).
    *   Closed the initial implementation for the MINRL objective ([PR #4491](https://github.com/verl-project/verl/pull/4491)).

## 5. Why This Project Matters in Today's RL Landscape
As post-training scaling laws (like those driving OpenAI's o1/o3 and DeepSeek-R1) dictate the frontier of AI capabilities, the infrastructure bottleneck has shifted to memory-intensive distributed RL execution. Verl is establishing itself as the de facto heterogeneous framework by abstracting away the immense complexity of colocated RLHF workloads. By aggressively supporting multi-backend rollout engines (vLLM, SGLang), massive MoE architectures (DeepSeek-V4), and diverse hardware accelerators (NVIDIA, Ascend NPU, AMD), verl is providing the open-source community with the enterprise-grade distributed scheduling (e.g., NCCL suspension, placement group deadlock prevention) required to actually train next-generation reasoning models at scale.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct Ecosystem
**Date:** 2026-06-11

### 1. Today's Highlights
Activity over the last 24 hours was exclusively focused on Pull Requests, with 8 PRs updated and zero new issues or releases. The core themes for the day are **infrastructure reliability and performance optimization**. Developers are actively refining DPO (Direct Preference Optimization) pipelines—specifically improving Model FLOPs Utilization (MFU) to ~32% and standardizing metrics—while concurrently patching edge cases in evaluation suites (IFEval) and dependency checks (FlashAttention).

### 2. Releases
* **None.** No new version tags or releases were published in the last 24 hours.

### 3. Important Issues
* **None.** There were 0 issues opened or updated in the tracking period, indicating that current development is driven by ongoing internal roadmaps and PR iterations rather than user-reported bugs.

### 4. Key PR Progress
**DPO Performance & Metrics (Trainer Focus)**
* **#1720 [OPEN]** Bumps DPO Model FLOPs Utilization (MFU) to ~32%, a critical optimization for reducing compute costs during preference tuning. ([PR #1720](https://github.com/allenai/open-instruct/pull/1720))
* **#1719 [OPEN]** Unifies metrics between `dpo.py` and `dpo_tune_cache.py`, adding padding percentages and sequence-per-batch telemetry for better debugging. ([PR #1719](https://github.com/allenai/open-instruct/pull/1719))

**Architecture Support & Scaling**
* **#1713 [OPEN]** Adds OLMo-Hybrid (GDN) support to the OLMo-core DPO trainer, packing microbatches for maximum efficiency. ([PR #1713](https://github.com/allenai/open-instruct/pull/1713))
* **#1714 [OPEN]** Exposes `loss_implementation` on `ModelConfig` to enable Liger fused linear cross-entropy (`fused_linear`) during SFT, optimizing memory overhead. ([PR #1714](https://github.com/allenai/open-instruct/pull/1714))

**Tooling, Judging, and Bug Fixes**
* **#1716 [CLOSED]** Fixes `detect_attn_implementation` to prevent falsely detecting `flash-attn-4` when only `flash-attn-2` is installed. ([PR #1716](https://github.com/allenai/open-instruct/pull/1716))
* **#1718 [OPEN]** Fixes `IFEvalG` word-counting checkers by forcing `nltk.word_tokenize` to ignore punctuation, ensuring accurate instruction-following evals. ([PR #1718](https://github.com/allenai/open-instruct/pull/1718))
* **#1712 [CLOSED]** Adds the MiniMax-M3 model to the `judge_utils.py` pricing table to ensure accurate cost tracking for LLM-as-a-judge pipelines. ([PR #1712](https://github.com/allenai/open-instruct/pull/1712))
* **#1721 [CLOSED]** Adds type-checking to `code_utils/` and deflakes a noisy API test server startup script. ([PR #1721](https://github.com/allenai/open-instruct/pull/1721))

### 5. Why This Project Matters in Today's RL Landscape
While Open Instruct is broadly an open-source instruction-tuning framework, today's activity highlights its foundational role in the modern **RLHF (Reinforcement Learning from Human Feedback)** and **post-training** ecosystem. 

Efficient DPO and its variants have become the de facto standard for aligning LLMs, replacing or supplementing traditional PPO due to training stability. By merging hardware-level optimizations (like Liger FLCE, FlashAttention handling, and achieving 32% MFU on DPO) with software-level observability (cache-metric parity), Open Instruct continues to lower the barrier for practitioners to run large-scale preference tuning on hybrid architectures (like OLMo-core).

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

### RL Daily Digest: Gymnasium Ecosystem — 2026-06-11

**1. Today's Highlights**
Activity in the Farama-Foundation/Gymnasium repository over the past 24 hours has been minimal, marked by zero new issues and no new releases. However, a long-standing documentation Pull Request aimed at enriching the MuJoCo tutorial ecosystem saw a brief update. 

**2. Releases**
*   **No new releases** were published today. The ecosystem remains stable on the current stable version.

**3. Important Issues**
*   **None.** No new issues were opened, and no existing issues were updated in the last 24 hours.

**4. Key PR Progress**
*   **[OPEN] #1584: docs: add MuJoCo parameter customization tutorial**
    *   **Author:** Lonny154
    *   **Activity:** Updated on 2026-06-10
    *   **Summary:** This PR introduces a beginner-friendly tutorial for MuJoCo environments. It demonstrates how users can customize environment dynamics via `gym.make` keyword arguments. Using `HalfCheetah-v5` as the primary example, the guide illustrates the quantitative impact of modifying the `ctrl_cost_weight` parameter on reward components while holding the random seed and initial state constant.
    *   **Link:** [Farama-Foundation/Gymnasium PR #1584](https://github.com/Farama-Foundation/Gymnasium/pull/1584)

**5. Why This Project Matters in Today's RL Landscape**
Gymnasium remains the de facto standard API for single-agent reinforcement learning in Python. While today's metrics are quiet, PR #1584 highlights a critical ongoing need in the RL community: lowering the barrier to entry for complex physics simulations. As continuous control and robotics rely heavily on MuJoCo, teaching users how to systematically manipulate reward variables (like `ctrl_cost_weight`) and environment parameters directly through the standard `gym.make` interface accelerates reward-shaping experimentation and environment design. Standardized, well-documented APIs like Gymnasium continue to be the bedrock upon which reproducible, scalable RL research is built.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>