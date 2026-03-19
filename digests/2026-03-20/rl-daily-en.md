# RL Open Source Daily Digest 2026-03-20

> Generated: 2026-03-19 22:02 UTC | Projects covered: 15

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
The RL ecosystem on 2026-03-20 shows a clear bifurcation between **LLM/Post-Training** frameworks (verl, TRL, OpenRLHF, etc.) and **General Purpose RL** libraries (SB3, Gymnasium, CleanRL). The LLM-RL projects are driving the majority of architectural innovation, specifically around **asynchronous training**, **hardware heterogeneity** (NPUs/ARM), and **multimodal support**. Meanwhile, general RL libraries are in a maintenance/standardization phase, focusing on API alignment with Gymnasium and dependency hygiene.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 6 | 9 | 0 | **High**. Critical memory bugs and major expansion into Multimodal/Hardware support. |
| **Open Instruct** | 0 | 12 | 0 | **High**. Deep infrastructure work on vLLM integration and long-context RL. |
| **OpenRLHF** | 1 | 4 | 1 | **High**. Strategic v0.9.6 release and pivot to FSDP2/PyTorch native stack. |
| **AReaL** | 4 | 8+ | 0 | **High**. Architectural refactoring and async/agent infrastructure. |
| **TRL** | 3 | 5 | 0 | **Medium**. Focus on GRPO stability and vLLM integration. |
| **slime** | 3 | 3 | 0 | **Medium**. Scaling Qwen3/VL to 64k contexts on B200 hardware. |
| **ROCK** | 2 | 2 | 0 | **Medium**. Critical SWE-agent sandbox fixes. |
| **ROLL** | 2 | 1 | 0 | **Low-Med**. Bug fixes for verifiable reward pipelines. |
| **Stable Baselines3**| 1 | 3 | 0 | **Low**. API modernization and spam control. |
| **Gymnasium** | 0 | 2 | 0 | **Low**. Documentation and ecosystem expansion. |
| **CleanRL** | 0 | 1 | 0 | **Low**. Dependency maintenance for JAX. |
| **Others** | 0 | 0 | 0 | **None**. PettingZoo, rl_games, Tianshou, torchtune showed no activity. |

## Shared Research & Engineering Directions

### Research Directions
*   **Agentic Stability & Tool Calling:** Nearly all LLM-RL projects (verl, TRL, AReaL, ROCK) are grappling with the complexity of **multi-turn tool calling**. The shift is from "does it run?" to "does it stay alive?", with intense focus on fixing `AgentLoop` crashes, re-tokenization errors, and sandbox environments for software engineering agents.
*   **Diffusion & Multimodal RL:** `verl` (Flow-GRPO) and `slime` (Qwen3-VL) are pushing RL beyond text into **image generation and vision-language** models, treating diffusion processes and visual encoders as learnable policy components rather than frozen backbones.
*   **Verifiable & Rule-Based Rewards:** Projects like `ROLL` and `Open Instruct` are moving away from pure neural reward models toward **verifiable rewards** (e.g., code test cases, boxed math answers), likely to reduce reward hacking and improve data efficiency.

### Engineering & Infrastructure Directions
*   **The "Async" Revolution:** Synchronous PPO is being supplanted by asynchronous architectures. `TRL` (AsyncGRPO), `AReaL` (Async Staleness Mitigation), and `Open Instruct` (Decoupled Rollouts) are all decoupling inference generation from policy updates to maximize hardware utilization (handling "sleep mode" and weight desync).
*   **Native PyTorch & FSDP2:** There is a concerted migration *away* from DeepSpeed/Megatron complexity toward **PyTorch-native FSDP2**. `OpenRLHF` explicitly removed legacy algos to focus on this, and `Open Instruct` is aggressively refactoring weight transfer APIs.
*   **Hardware Diversification:** `verl` is leading a decoupling of RL infrastructure from x86/CUDA, with simultaneous support for **NVIDIA GB200 (ARM)** and **Ascend NPUs**, signaling a shift toward hardware-agnostic high-performance training.

## Differentiation Analysis

*   **verl vs. OpenRLHF (Scale vs. Lean Core):** `verl` is positioning itself as the **"Kitchen Sink" platform**, absorbing every new complexity (Diffusion, NPUs, Agents, Megatron). Conversely, `OpenRLHF` (v0.9.6) is strategically **slimming down**, removing KTO/PRM to focus purely on optimizing the PPO/FSDP2 core.
*   **TRL vs. AReaL (Usability vs. Architecture):** `TRL` focuses on **usability and integration** (Hugging Face ecosystem, observability), making RL accessible. `AReaL` is focused on **systems architecture**, optimizing backend allocation (`fsdp:d4`, `sglang:d4t2`) and low-level staleness handling for high-throughput production clusters.
*   **Open Instruct (The Long-Context Specialist):** While others generalize, `Open Instruct` is specifically optimizing for **extreme context lengths (32k+)** and code execution sandboxes (`SWERLSandboxEnv`), distinguishing itself for reasoning and coding tasks.

## Community Momentum & Maturity
*   **Maturity in Consolidation:** The OpenRLHF v0.9.6 release and `verl`'s focus on "Actor death" bugs indicate that the field is moving past the "prototype" phase into **production hardening**. Projects are actively shedding experimental code to ensure stability.
*   **Maintainer Burden:** `Stable Baselines3` maintainers are spending resources filtering **low-quality LLM-generated PRs**, a trend likely to spread to other large repos. In contrast, `AReaL` and `Open Instruct` are seeing high-quality, technical contributions focused on distributed systems bottlenecks.
*   **Interoperability Standards:** The ecosystem is converging on **vLLM** as the de facto inference backend for RL, with significant engineering effort across TRL, Open Instruct, OpenRLHF, and slime dedicated to smooth weight transfers and sleep mode handling.

## Trend Signals
*   ⚠️ **Memory Management Crisis:** High activity around memory leaks (`verl` #5665), OOMs (`slime` #1522), and offloading strategies (`verl` PR #5651) suggests that **GPU memory bandwidth/size** is the primary bottleneck for the next generation of 70B+ parameter RL models.
*   🚀 **Rise of "RL for Code":** The emergence of `SWERLSandboxEnv` (Open Instruct) and SWE-agent sandbox fixes (ROCK) signals that **executable code environments** are becoming a standard part of the RL training stack, not just a niche application.
*   🔄 **Staleness as a Feature:** The explicit handling of "staleness" (using old rollouts) in `AReaL` and `TRL` marks a shift in RL theory: instead of strictly avoiding it, systems are being designed to **tolerate and control** it for the sake of throughput.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL
**Date:** 2026-03-20
**Project:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

## 1. Today's Highlights
The ROLL ecosystem saw focused activity in **RLVR (Reinforcement Learning with Verifiable Rewards)** pipeline stability. A specific bug affecting `MultipleChoiceBoxedRuleRewardWorker` was identified and promptly resolved via community contribution. Additionally, discussions continue regarding data efficiency features for multimodal models.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[Feature Request] Packing Support for VL Models** [#386](https://github.com/alibaba/ROLL/issues/386)
    *   **Context:** User `JCode012` inquired about sequence packing support for Vision-Language (VL) models within the `mcore-adapter`.
    *   **Status:** Remains **OPEN**. This highlights a potential gap in optimization for multimodal training workloads in the current architecture.

*   **[Bug] Zero Reward in Multi-Choice Computations** [#371](https://github.com/alibaba/ROLL/issues/371) & [#390](https://github.com/alibaba/ROLL/issues/390)
    *   **Context:** A logic flaw in `multiple_choice_boxed_rule_reward_worker.py` caused reward computation to fail (returning zeros). The issue stemmed from variable assignment mismatches where `response_level_rewards` was not correctly populated with calculated `scores`.

## 4. Key PR Progress
*   **[FIX] PR #391: MultipleChoiceBoxedRuleRewardWorker Zero Reward** ([Link](https://github.com/alibaba/ROLL/pull/391))
    *   **Status:** **CLOSED** (Merged).
    *   **Impact:** Authored by `luyouqi233`, this PR patched the reward calculation logic identified in Issue #390. It ensures that `response_level_rewards` correctly inherits values from `scores`, preventing silent training failures in multiple-choice RL tasks.

## 5. Why This Project Matters in Today's RL Landscape
ROLL (Representation-Optimized Reinforcement Learning) remains a critical infrastructure piece for scaling LLM and VL post-training. Today's activity underscores two trends in the modern RL landscape:
1.  **Verifiable Rewards Complexity:** As RL moves from scalar reward models to verifiable rules (like `MultipleChoiceBoxedRule`), implementation robustness is vital to prevent "reward hacking" or silent zero-gradient updates.
2.  **Multimodal Efficiency:** The request for **packing support** (#386) reflects the industry standard moving toward training efficiency techniques (like packing/flash-attention) becoming mandatory, rather than optional, for handling diverse multimodal data streams.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem (2026-03-20)

## 1. Today's Highlights
Activity on the **alibaba/ROCK** repository today focused heavily on **infrastructure stability** and **networking capabilities** within the SDK. The community addressed a critical failure in the SWE agent sandbox initialization while simultaneously expanding interface capabilities for host proxies.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[Bug] SWE Agent Sandbox Initialization Failure** ([#651](https://github.com/alibaba/ROCK/issues/651))
    *   **Context:** A crash loop was identified in `EnvironmentWorker` during the initialization of `ModelService` within the `rock.sdk.sandbox.agent`.
    *   **Impact:** Critical. This prevents the SWE (Software Engineering) agent from bootstrapping the environment, blocking training or inference tasks dependent on this sandbox.

*   **[Feature] Host Proxy Interface Request** ([#649](https://github.com/alibaba/ROCK/issues/649))
    *   **Context:** A proposal to add a host proxy interface.
    *   **Impact:** Moderate. Categorized under SDK & API, this enhancement suggests a need for more robust network communication handling between the host and the RL environment.

## 4. Key PR Progress
*   **[fix(sdk)] Runtime Config Validation** ([#652](https://github.com/alibaba/ROCK/pull/652))
    *   **Details:** Submits a fix for type validation within `PythonRuntimeEnv`. This appears to be a direct patch related to the error logs seen in Issue #651, aiming to prevent malformed config handoffs during ModelService startup.

*   **[feat] Proxy Interface Implementation** ([#650](https://github.com/alibaba/ROCK/pull/650))
    *   **Details:** Implements the host proxy interface requested in Issue #649 (`refs #649`). This PR enhances the SDK's connectivity options, likely facilitating environment interactions through specific network proxies.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning moves beyond game-playing into complex **Software Engineering (SWE)** and **Agentic Workflows**, robust sandboxing is essential. ROCK appears to be doubling down on the reliability of its SDK and runtime environment. The focus on **SWE agent sandboxes** indicates a trend where RL agents are increasingly used to interact with and manipulate codebases or system environments, requiring strict isolation (sandboxing) and reliable configuration management (`PythonRuntimeEnv`). Fixing these initialization bugs is crucial for the stability of autonomous coding agents.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-03-20

## 1. Today's Highlights
Activity in the `slime` repository remains focused on **scalability** and **model compatibility**. The community is actively pushing the limits of LLM-based RL with Qwen3 and Qwen3.5 architectures, specifically targeting memory management for long-context PPO training (64k sequences) and fixing integration bugs in distributed backends (Megatron-LM & SGLang).

## 2. Releases
**None.** No new tags or releases were published in the last 24 hours.

## 3. Important Issues
*   **Long-Context OOM Instability:** Users are reporting persistent Out of Memory (OOM) crashes even with dynamic batching and sequence parallelism enabled. Issue [#1522](https://github.com/THUDM/slime/issues/1522) highlights failures on H200s with 64k contexts, while [#1740](https://github.com/THUDM/slime/issues/1740) reports worker process deaths on 8×B200 setups during Qwen3-30B training.
*   **Training Instability (Tensor Mismatch):** Issue [#1076](https://github.com/THUDM/slime/issues/1076) details a `RuntimeError` regarding tensor size mismatches (6236 vs 8192) in `megatron_utils/loss.py` after extended training steps, suggesting potential issues with dynamic shape handling or padding strategies.

## 4. Key PR Progress
*   **Qwen3.5 SFT Support:** PR [#1742](https://github.com/THUDM/slime/pull/1742) introduces support for `qwen3.5` loss masking in multi-turn Supervised Fine-Tuning (SFT), fixing `jinja2` template errors found in legacy paths.
*   **Backend Robustness:**
    *   PR [#1727](https://github.com/THUDM/slime/pull/1727) backports a fix for Qwen3-VL visual weight loading in SGLang v0.5.9.
    *   PR [#1741](https://github.com/THUDM/slime/pull/1741) addresses an `AttributeError` regarding `encoder_only` in the SGLang engine initialization.

## 5. Why This Project Matters
The `slime` framework is becoming a critical bridge between high-performance inference engines (like SGLang) and distributed training backends (Megatron-LM) for **Post-Training** (RLHF/PPO). The current surge in issues surrounding **Qwen3/VL** integration and **B200/H200** memory optimization underscores its role as a testing ground for next-generation, large-scale reasoning models.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL
**Date:** 2026-03-20

## 1. Today's Highlights
Activity on AReaL surged today with a focus on **architectural flexibility** and **training stability**. Key developments include a major refactor of backend engine configuration, new infrastructure for async and agentic workflows, and advanced techniques to mitigate training-inference mismatch (staleness).

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Async Staleness Mitigation:** Issue [#1052](https://github.com/inclusionAI/AReaL/issues/1052) proposes sequence/token level rejection sampling to handle staleness in async training, citing recent research on RL collapse.
*   **Backend Diversification:**
    *   Issue [#1055](https://github.com/inclusionAI/AReaL/issues/1055) initiates an effort to replace the deprecated `mbridge` with [Megatron-Bridge](https://github.com/NVIDIA/Megatron-LM) (assuming standard naming context, though specific link was requested in issue) for better HF/MCore support.
    *   Issue [#945](https://github.com/inclusionAI/AReaL/issues/945) continues discussion on supporting broader model families (GPT-OSS, Kimi K2, GLM4.5).
*   **Workflow Context:** Issue [#1062](https://github.com/inclusionAI/AReaL/issues/1062) requests the propagation of `global_step` to workflows to enable training-aware scheduling.

## 4. Key PR Progress
*   **Architectural Refactor:** PR [#1044](https://github.com/inclusionAI/AReaL/pull/1044) (High Priority) is deprecating centralized `allocation_mode` in favor of explicit per-engine backend fields (e.g., `fsdp:d4`, `sglang:d4t2`), reducing hidden complexity in distributed setup.
*   **Infrastructure Expansion:**
    *   **Agent Service:** PR [#1048](https://github.com/inclusionAI/AReaL/pull/1048) landed a microservice architecture for multi-turn agents and tool calling.
    *   **Rollout Gateway:** PR [#1043](https://github.com/inclusionAI/AReaL/pull/1043) merged RPC-based inference serving with OpenAI-compatible APIs.
    *   **Co-located Training:** PR [#1035](https://github.com/inclusionAI/AReaL/pull/1035) closed with support for GPU time-sharing between training and inference engines.
*   **Algorithmic Enhancements:**
    *   **IcePop Integration:** PR [#1061](https://github.com/inclusionAI/AReaL/pull/1061) implements IcePop-style token filtering to address training-inference mismatch.
    *   **KL Divergence:** A flurry of activity on KL estimators ([#1054](https://github.com/inclusionAI/AReaL/pull/1054), [#1060](https://github.com/inclusionAI/AReaL/pull/1060), [#1057](https://github.com/inclusionAI/AReaL/pull/1057)) suggests active experimentation, with a revert indicating instability or integration review currently in progress.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is evolving beyond a simple training loop into a **heterogeneous system**. The move to support colocated training (#1035), explicit backend allocation (#1044), and Megatron integration (#1055) signals a shift toward high-throughput, resource-efficient RL. By tackling async staleness (#1052) and integrating agent microservices (#1048), AReaL is positioning itself as a production-grade framework for the post-"single-script" era of Large Language Model reinforcement learning.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL
**Date:** 2026-03-20

## 1. Today's Highlights
The TRL ecosystem is seeing intense activity around **GRPO (Group Relative Policy Optimization)** and **vLLM integration**. Key focus areas include stabilizing multi-turn tool-calling agents and refining asynchronous training capabilities. Significant progress was made in fixing weight synchronization bugs between training loops and inference engines.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **vLLM Weight Desync in Sleep Mode:** A critical bug ([#5312](https://github.com/huggingface/trl/issues/5312)) was identified where vLLM weights fail to synchronize when `vllm_enable_sleep_mode=True` during colocated training. A fix has already been proposed in PR [#5313](https://github.com/huggingface/trl/pull/5313).
*   **Multi-GPU GRPO Server Mode Failure:** Users report an `AttributeError` regarding `vllm_client` when running `generate_rollout_completions` in server mode with multiple GPUs ([#5314](https://github.com/huggingface/trl/issues/5314)).
*   **SFT Training Instability:** An ongoing investigation ([#5138](https://github.com/huggingface/trl/issues/5138)) suggests improper training dynamics for Llama-3.2-3B-Instruct following recent changes to completion-only loss calculations.

## 4. Key PR Progress
*   **🚀 Asynchronous GRPO:** The foundation for `AsyncGRPOTrainer` was merged ([#5293](https://github.com/huggingface/trl/pull/5293)), allowing for decoupled rollout generation and policy updates. Further enhancements for staleness control are under review in ([#5299](https://github.com/huggingface/trl/pull/5299)).
*   **🛠️ Tool-Calling Fixes:** A significant fix for re-tokenization bugs in GRPO multi-turn tool calling was merged ([#5242](https://github.com/huggingface/trl/pull/5242)), resolving issues where token IDs shifted during chat template application.
*   **✨ Enhanced Observability:** New updates improve how reward functions log internal states (like parsed solutions) via `log_extra` ([#5308](https://github.com/huggingface/trl/pull/5308)) and better visualization for conversation completions ([#5309](https://github.com/huggingface/trl/pull/5309)).
*   **🤖 Agent Integration:** Work continues on expanding model support for agent training, specifically prefix-preserving templates for GPT-OSS models ([#5109](https://github.com/huggingface/trl/pull/5109)).

## 5. Why This Project Matters in Today's RL Landscape
TRL is bridging the gap between static LLMs and autonomous agents. The rapid iteration on **GRPO** and **Async Rollouts** highlights the industry's shift from simple RLHF to complex, scalable "test-time compute" and agent training workflows. By solving low-level integration issues with high-throughput inference engines like vLLM, TRL is enabling the next generation of self-improving reasoning models.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-03-20

## 1. Today's Highlights
OpenRLHF shows significant architectural momentum today. The team released **v0.9.6**, which streamlines the codebase by removing legacy modules to focus on core RLHF performance. Simultaneously, development activity surged around **FSDP2 integration**, potentially positioning the library to phase out DeepSpeed dependency. Minor but critical fixes were also merged to improve Ray serialization stability in distributed training scenarios.

## 2. Releases
*   **[v0.9.6](https://github.com/OpenRLHF/OpenRLHF/releases/tag/v0.9.6)**
    *   **Dependencies:** Bumped versions for `vllm` and `deepspeed`.
    *   **Refactoring:** Removed KTO (Kahneman-Tversky Optimization), PRM (Process Reward Model), Knowledge Distillation, and batch inference utilities. This indicates a strategic pivot toward a leaner core focused on standard RLHF/PPO workflows.

## 3. Important Issues
*   **[#1196](https://github.com/OpenRLHF/OpenRLHF/issues/1196) - GPU Utilization with External Reward Models:**
    *   *Context:* Users running custom LLM-based Reward Models alongside Actor/Critic training face GPU idling. Specifically, with an 8-GPU node, resources are statically split (4 for vLLM RM, 4 for Training), leading to 50% utilization during non-overlapping phases.
    *   *Discussion:* The user notes the default behavior uses a simple value head rather than a generative vLLM model. This highlights a need for better resource scheduling or "colocation" strategies for generative RMs.

## 4. Key PR Progress
The focus today is clearly on modernizing the distributed training backend.
*   **The FSDP2 Pivot:**
    *   **[#1197](https://github.com/OpenRLHF/OpenRLHF/pull/1197)** and **[#1176](https://github.com/OpenRLHF/OpenRLHF/pull/1176)** are actively pushing support for FSDP2 (Fully Sharded Data Parallel v2).
    *   This follows the closure of **[#1178](https://github.com/OpenRLHF/OpenRLHF/pull/1178)** (initial FSDP2 PPO support). The new PRs aim to replace DeepSpeed entirely, likely motivated by FSDP2's better integration with native PyTorch and potential stability improvements.
*   **Observability & Stability:**
    *   **[#1198](https://github.com/OpenRLHF/OpenRLHF/pull/1198) [MERGED]:** Added `grad_norm` logging and per-phase timing breakdown (verified on H100s with Qwen2.5).
    *   **[#1199](https://github.com/OpenRLHF/OpenRLHF/pull/1199):** Fixed a `RuntimeError` caused by Ray failing to serialize non-plain-float grad norms from DeepSpeed when moving data from GPU actors to CPU trainers.

## 5. Why This Project Matters in Today's RL Landscape
As LLMs converge on standard post-training paradigms, the efficiency of the alignment layer (PPO/RLHF) becomes the bottleneck. OpenRLHF is currently the leading open-source bridge between high-performance inference engines (vLLM) and distributed training frameworks.

Today's shift toward **FSDP2** and the removal of experimental algorithms (KTO/PRM) in **v0.9.6** signals a maturity milestone. The project is consolidating around a stable, highly optimized PPO core rather than acting as a repository for every new RL algorithm. This makes it increasingly viable for production-grade alignment of 70B+ parameter models where DeepSpeed configuration has historically been brittle.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl-project/verl
**Date:** 2026-03-20

## 1. Today's Highlights
The **verl** ecosystem is actively expanding beyond standard text-based LLMs into **multimodal RL** (specifically diffusion models and video) and **hardware heterogeneity** (NPU/Ascend and GB200/ARM support). Key activity today focuses on memory optimization for large-scale training, fixing critical "Actor death" bugs in tool-calling agents (DAPO), and integrating new high-performance backends like vLLM-Omni and Liger Kernel.

## 2. Releases
*   **No new releases** recorded in the last 24 hours. The community remains focused on developing features in the `main` branch.

## 3. Important Issues
*   **🔥 Critical Memory Leak in Megatron Backend:** Issue [#5665](https://github.com/verl-project/verl/issues/5665) reports a consistent **20GB Host memory leak** after `save_checkpoint` on Qwen2 7B (GB200). This pairs with Issue [#5670](https://github.com/verl-project/verl/issues/5670), which warns of **High CPU memory peaks** during checkpointing with the default `fully_reshardable` optimizer setting.
*   **🤖 Tool-Calling & Agent Instability:** Users running the `retool/dapo` recipes are encountering persistent crashes.
    *   [#5567](https://github.com/verl-project/verl/issues/5567): `sglang-multiturn` examples fail with `AgentLoopWorker` errors.
    *   [#5668](https://github.com/verl-project/verl/issues/5668): DAPO training fails with `Failed to decode tool call: Invalid \escape` and `RayActorDiedError`.
*   **⚠️ GPU OOM & Gradient Mismatch:**
    *   [#3293](https://github.com/verl-project/verl/issues/3293): Long-standing OOM issue where GPU memory increases continuously during PPO training.
    *   [#5625](https://github.com/verl-project/verl/issues/5625): Identification of an incorrect `loss_scale_factor` in legacy FSDP gradient accumulation causing divergence in `token-mean` mode.
*   **🌟 RFC for Diffusion RL:** Issue [#4639](https://github.com/verl-project/verl/issues/4639) proposes support for **Flow-GRPO** and online DPO for diffusion models (Qwen-Image, Wan2.2) via `vLLM-Omni`.

## 4. Key PR Progress
*   **Multimodal & Agentic RL:**
    *   **[#5616](https://github.com/verl-project/verl/pull/5616):** Integrates **vLLM-Omni** as a rollout backend to support diffusion models (Flow-GRPO), enabling image generation RL.
    *   **[#5636](https://github.com/verl-project/verl/pull/5636) & [#5520](https://github.com/verl-project/verl/pull/5520):** Advancing **Agentic RL** capabilities, including context management and integration with the **Atropos** RL environment.
*   **Performance & Optimization:**
    *   **[#5651](https://github.com/verl-project/verl/pull/5651):** Adds **CPU offloading for FP32 optimizer params** in Megatron, potentially saving significant GPU memory.
    *   **[#5662](https://github.com/verl-project/verl/pull/5662):** Replaces manual log-softmax with **Flash Attention Triton cross_entropy** in `FusedLinearForPPO` for speed gains.
    *   **[#5641](https://github.com/verl-project/verl/pull/5641):** Fixes the `token-mean` gradient accumulation bug identified in Issue #5625.
*   **Hardware Support (NPU & GB200):**
    *   **[#5596](https://github.com/verl-project/verl/pull/5596):** Introduces experimental **Docker support for NVIDIA GB200 (aarch64/Blackwell)**.
    *   **[#5608](https://github.com/verl-project/verl/pull/5608):** Adds **MXFP8 rollout support** for Ascend 950 hardware.
    *   **[#5634](https://github.com/verl-project/verl/pull/5634):** Topology-aware scheduling enhancements for NPU placement groups.

## 5. Why This Project Matters in Today's RL Landscape
**verl** is evolving from a standard PPO/RLEF framework into a **comprehensive post-training platform**. Today's digest highlights a strategic shift in three areas:
1.  **Beyond Text:** The integration of `vLLM-Omni` and `Flow-GRPO` positions verl at the forefront of **RL for Diffusion/Video**, moving beyond LLM text generation to multimodal creativity.
2.  **Hardware Agnostic Scalability:** With simultaneous PRs for **NVIDIA GB200** and **Ascend NPUs**, verl is decoupling RL infrastructure from strictly x86/CUDA dependencies, broadening access to diverse compute clusters.
3.  **Agent Stability:** The intense focus on fixing `DAPO` and `sglang-multiturn` errors indicates that the community is aggressively tackling the stability challenges of **long-horizon tool-calling agents**, a critical step toward reliable autonomous systems.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-20

## 1. Today's Highlights
Activity in the Open Instruct repository over the last 24 hours has been dominated by significant infrastructure and algorithmic updates (12 PRs updated, 0 Issues). The primary focus is on performance optimization for long-context RL training (32k contexts) and the stabilization of Group Relative Policy Optimization (GRPO) and PPO implementations. Notable activity includes a major migration to vLLM's native weight transfer APIs and the introduction of offline distillation tooling.

## 2. Releases
**None** (No new releases detected in the last 24 hours).

## 3. Important Issues
**None** (No issues updated in the last 24 hours).

## 4. Key PR Progress

### Performance & Infrastructure
*   **vLLM 0.16.0 Migration:** PR [#1515](https://github.com/allenai/open-instruct/pull/1515) proposes replacing manual parameter broadcasting with vLLM's native `WeightTransferConfig` and `NCCLWeightTransferEngine`, resulting in a net deletion of ~200 lines of code and improved reliability.
*   **Fixing 32k Context Timeouts:** Addressing critical latency in long-context training, PR [#1535](https://github.com/allenai/open-instruct/pull/1535) batches vLLM weight sync broadcasts. The previous per-parameter RPC approach caused timeouts (>120s) with 32k response lengths.
*   **DeepSpeed SFT Fixes:** PR [#1539](https://github.com/allenai/open-instruct/pull/1539) fixes bugs in DeepSpeed SFT and adds Sequence Parallelism (SP) support for long-sequence training.

### Algorithm & Training Logic
*   **GRPO Stabilization:** PR [#1399](https://github.com/allenai/open-instruct/pull/1399) (Closed) finalized the GRPO main entry point and test scripts, unifying logic between `grpo.py` and `grpo_fast.py`.
*   **PPO Support in GRPO Fast:** PR [#1462](https://github.com/allenai/open-instruct/pull/1462) remains open, adding value model support (GAE) to `grpo_fast.py` for PPO-style training, offering an alternative to GRPO's group-normalized rewards.
*   **Logging Improvements:** PR [#1540](https://github.com/allenai/open-instruct/pull/1540) adds DeepSpeed gradient norm logging to `grpo_fast`, explicitly handling non-finite (NaN/Inf) values rather than filtering them.

### Environments & Distillation
*   **RL Sandbox Env:** PR [#1492](https://github.com/allenai/open-instruct/pull/1492) introduced `SWERLSandboxEnv`, enabling per-sample Docker tasks with a `submit` tool for test suites, bridging RL with software engineering tasks.
*   **Offline Distillation:** PR [#1534](https://github.com/allenai/open-instruct/pull/1534) (Part 2 of the initiative) adds scripts for capturing teacher logits, expanding Open Instruct's capabilities beyond pure RL.

### Housekeeping
*   PR [#1538](https://github.com/allenai/open-instruct/pull/1538) performed a mechanical rename of rollout variables to simplify the codebase.
*   PR [#1531](https://github.com/allenai/open-instruct/pull/1531) (Closed) fixed a regex bug in GPU test detection logic.

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct is evolving from a fine-tuning toolkit into a robust production framework for post-training LLMs. Today's updates highlight the community's shift toward **high-throughput, long-context RL**. By solving specific distributed systems bottlenecks—such as vLLM weight syncing overhead and gradient logging at scale—the project is enabling the training of next-generation reasoning models (e.g., 32k context math models). The addition of specialized environments like `SWERLSandboxEnv` further signals a convergence of RL and agentic coding capabilities.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# 📰 RL Daily Digest: CleanRL
**Date:** 2026-03-20

### 1. Today's Highlights
Activity in the CleanRL repository was focused on infrastructure maintenance, specifically targeting dependency resolution for the JAX ecosystem. No new issues or releases were recorded.

### 2. Releases
*   **None** for 2026-03-20.

### 3. Important Issues
*   **None** updated in the last 24 hours.

### 4. Key PR Progress
*   **[OPEN] [#544 fix: update JAX dependency stack to modern compatible versions](https://github.com/vwxyzjn/cleanrl/pull/544)**
    *   **Author:** Okyumi
    *   **Context:** Addresses technical debt in the optional JAX dependency group within `pyproject.toml`.
    *   **Details:** The PR proposes moving from strictly pinned legacy versions (e.g., `jax==0.4.8`) to bounded ranges. This fixes resolution conflicts in modern package managers (pip, uv) and ensures the single-file learning algorithms remain compatible with the current JAX/Flax stack.
    *   **Closure:** Targets Issue #540.

### 5. Why This Project Matters in Today's RL Landscape
As reinforcement learning frameworks become increasingly complex, **CleanRL** remains a critical resource for the community by providing **readable, single-file implementations** of major algorithms (PPO, DQN, etc.). Maintaining dependency compatibility (as seen in PR #544) is essential for the project's longevity, ensuring that students and researchers can execute high-performance JAX implementations without version conflict bottlenecks.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Daily Digest: Gymnasium
**Date:** 2026-03-20

### 1. Today's Highlights
Activity in the Gymnasium repository focused exclusively on documentation and ecosystem expansion. Two new Pull Requests were opened, emphasizing the framework's extensibility regarding MuJoCo physics simulations and third-party environment integrations. No new releases or issues were recorded.

### 2. Releases
*   **None.**

### 3. Important Issues
*   **None.** (0 issues updated in the last 24h).

### 4. Key PR Progress
*   **[Docs] Custom MuJoCo Environment Tutorial** – [PR #1547](https://github.com/Farama-Foundation/Gymnasium/pull/1547)
    *   **Author:** Okyumi
    *   **Status:** Open
    *   **Summary:** Addresses a long-standing documentation gap (Issue #846) by introducing a Sphinx-Gallery tutorial. It guides users through subclassing `MujocoEnv` to create custom physics-based environments, lowering the barrier to entry for complex robotics simulation.
*   **[Ecosystem] Mesozoic Labs Integration** – [PR #1548](https://github.com/Farama-Foundation/Gymnasium/pull/1548)
    *   **Author:** kuds
    *   **Status:** Open
    *   **Summary:** Expands the third-party environments list to include [Mesozoic Labs](https://github.com/kuds/mesozoic-labs). This project introduces MuJoCo-based environments specifically designed for robotic dinosaur locomotion, highlighting unique niche use cases within the Gymnasium framework.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for single-agent reinforcement learning. While the core API is stable, today's PRs demonstrate the community's reliance on Gymnasium as a foundational layer. By standardizing how custom MuJoCo environments are built and cataloging diverse third-party projects, the ecosystem ensures that researchers can easily replicate baselines or test novel algorithms on specialized physics tasks without reinventing the wrapper infrastructure.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3 (2026-03-20)

Here is the analysis of the Stable Baselines3 ecosystem activity for the past 24 hours.

## 1. Today's Highlights
Activity on the `stable-baselines3` repository was moderate but focused on maintenance and API alignment. There was a push to align Vectorized Environment (`VecEnv`) behaviors with the modern Gymnasium standard, while maintainers closed two low-quality Pull Requests likely generated by LLMs.

## 2. Releases
**None.** No new stable versions were released in the last 24 hours.

## 3. Important Issues
*   **Cross-Run Experience Persistence**
    *   **Issue:** [#2226 [CLOSED] [Feature Request] Cross-run experience persistence via BaseCallback](https://github.com/DLR-RM/stable-baselines3/issues/2226)
    *   **Analysis:** This issue highlighted a user request to persist replay buffer data across different training runs (e.g., for `FetchPush-v4` with SAC). While the issue was closed (likely due to existing workarounds or being out of scope for the core library), it underscores a recurring pain point in long-horizon robotic manipulation tasks: the inefficiency of re-learning basic dynamics from scratch in new `model.learn()` calls.

## 4. Key PR Progress
*   **API Alignment:**
    *   **[#2223 VecEnv: Add infos return value to reset()](https://github.com/DLR-RM/stable-baselines3/pull/2223):** This open PR proposes updating `VecEnv.reset()` to return `(obs, infos)` instead of just `obs`. This is a crucial modernization step to bring SB3's vectorized environments in line with the Gymnasium API standard (`v0.26+`), allowing for better handling of reset metadata.
*   **Maintenance & Quality Control:**
    *   **[#2229 fix: pass reset options/seeds during auto-reset](https://github.com/DLR-RM/stable-baselines3/pull/2229):** Closed. This PR attempted to fix option passing during auto-resets but was flagged for not following the PR template.
    *   **[#2230 feat: add qf_learning_rate for independent actor/critic LRs](https://github.com/DLR-RM/stable-baselines3/pull/2230):** Closed. Proposed separate learning rates for critics in TD3/SAC/DDPG. Rejected/closed likely due to lack of adherence to contribution guidelines.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 (SB3) remains the industry standard for reliable, plug-and-play implementation of core Deep RL algorithms. While newer libraries exist, today's activity demonstrates the project's commitment to stability—carefully managing the transition to the Gymnasium API (PR #2223) while strictly filtering contributions to maintain code quality. The "LLM generated" tags on closed PRs suggest that maintainers are currently facing a high volume of automated, low-quality contributions, highlighting the value of their rigorous human-in-the-loop curation.

</details>