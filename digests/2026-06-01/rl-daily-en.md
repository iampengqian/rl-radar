# RL Open Source Daily Digest 2026-06-01

> Generated: 2026-05-31 22:17 UTC | Projects covered: 15

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
The open-source reinforcement learning ecosystem is currently defined by a sharp architectural pivot. While foundational libraries like Gymnasium remain in quiet maintenance, the dominant LLM post-training frameworks (TRL, verl, slime, AReaL) are undergoing rapid, convergent evolution. The entire sector is shifting away from monolithic, synchronous training loops to tackle the compute and memory bottlenecks of advanced reasoning models. Current development is overwhelmingly focused on disaggregated training/inference infrastructure, multi-modal memory management, and securing complex agentic RL loops.

## Activity Comparison
Development today was highly concentrated, with 4 of 16 tracked projects absorbing all meaningful architectural updates. The remaining 12 projects (CleanRL, Open Instruct, OpenRLHF, PettingZoo, rl_games, ROCK, ROLL, Stable Baselines3, Tianshou, torchtune) recorded zero activity.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 3 updated | 7 active | 0 | Transitioning to scalable, async RLHF; feature parity sprint for `AsyncGRPOTrainer`. |
| **verl** | 3 updated | 11 active | 0 | Hardening distributed infra, resolving memory leaks, and patching critical agentic security flaws. |
| **slime** | 1 opened, 1 closed | 3 closed/active | **1 (v0.3.0)** | Architectural pivot to agent-first RL and highly efficient disaggregated weight sync. |
| **AReaL** | 2 closed | 2 active/closed | 0 | Pushing hardware limits with online BF16-to-FP8 quantization for rollout engines. |
| **Gymnasium**| 0 updated | 1 closed | 0 | Quiet maintenance; background work on Python 3.14 compatibility. |

## Shared Research & Engineering Directions

**Research & Algorithmic Frontiers**
*   **Beyond Standard Rewards:** Frameworks are racing past dense Outcome Reward Models (ORMs). TRL is seeing strong pushes for Process Reward Models (PRM) integration, Relative Policy-to-Reference (RLPR), and scaled information-gain advantages (MGPO).
*   **Stabilizing Importance Sampling:** Both TRL and slime are actively addressing mathematical instabilities in standard PPO/GRPO, specifically exploring algorithms like CISPO to prevent low-probability tokens from destabilizing training.
*   **Agentic Workloads:** The shift from single-turn prompting to persistent, multi-turn RL agents is formalized in slime's v0.3.0 release and verl's multi-trajectory generation within single rollouts.

**Engineering & Infrastructure**
*   **Disaggregated Training & Async Rollouts:** The most prominent engineering trend is decoupling inference (rollouts) from the training loop. TRL's native vLLM async weight sync and slime's delta-weight synchronization (via disk/NCCL) highlight the necessity of disaggregated setups for scaling.
*   **Aggressive Memory Optimization:** To accommodate massive multi-modal models (e.g., Qwen3-Omni-30B), frameworks are implementing per-unit LoRA summoning with FSDP (verl) and online BF16-to-FP8 block-wise quantization for rollout engines (AReaL).
*   **Inference Backend Coupling:** Projects are abandoning generalized inference support in favor of deep, native integration with high-throughput engines like vLLM and SGLang to bust generation bottlenecks.

## Differentiation Analysis
Despite shared goals, today's digests reveal distinct technical moats among the leading frameworks:
*   **TRL** acts as the accessible, industry-standard alignment layer. Its focus remains on bringing cutting-edge architectures (like Async GRPO and self-distillation) to the broader Hugging Face ecosystem, heavily prioritizing modularity and parity with PEFT/LoRA.
*   **verl** is establishing itself as the heavy-duty, enterprise-grade distributed runtime. Its engineering focus is strictly on production robustness—fixing distributed worker leaks, unifying device mapping, and crucially, patching security vulnerabilities (e.g., arbitrary code execution in tool parsing) inherent in agentic workflows.
*   **slime** is aggressively targeting hardware-software co-design for distributed clusters. Its implementation of delta-weight syncing positions it as a top choice for highly scaled, cross-datacenter RL training where inter-node bandwidth is the primary bottleneck.
*   **AReaL** is driving low-level hardware optimization. By pioneering hybrid-precision RL loops (BF16 training coupled with custom FP8 kernel rollouts via SGLang), it caters specifically to practitioners looking to squeeze maximum VRAM efficiency out of modern accelerator architectures.

## Community Momentum & Maturity
The ecosystem displays a clear bifurcation in maturity. Foundational algorithmic and environment libraries (Gymnasium, CleanRL, Stable Baselines3) have reached a mature, highly stable state requiring minimal day-to-day maintenance. Conversely, the LLM post-training subfield is experiencing explosive, high-velocity growth characterized by rapid PR turnovers and active issue triage. Maintainers and contributors in the LLM-RL space are currently operating in an "infra-first" mode, where progress is measured less by new algorithmic proofs and more by solving massive-scale distributed computing bottlenecks and GPU memory walls.

## Trend Signals
*   **vLLM vs. SGLang Divergence:** AReaL's closure of issue #1290 (GRPO collapsing on vLLM but stable on SGLang) signals that inference backends are no longer drop-in replacements. Frameworks will increasingly require custom, hardcoded paths to ensure training stability depending on the chosen rollout engine.
*   **Security as a First-Class Citizen:** verl's patching of an arbitrary code execution flaw via `eval()` in tool parsing indicates that as RL agents are granted autonomous coding environments, robust sandboxing and strict parsing will rapidly become core framework requirements.
*   **The FP8 Rollout Standard:** AReaL's integration of online block-wise quantization for rollouts foreshadows a broader industry shift. Expect FP8 generation to become a default, hardware-accelerated baseline for RLHF later this year to mitigate the severe memory overhead of long-context reasoning traces.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily reinforcement learning open-source ecosystem digest for **2026-06-01**, focusing on the `THUDM/slime` repository.

### 1. Today's Highlights
The `slime` framework has officially rolled out **v0.3.0**, marking a significant architectural pivot toward "agent-first reinforcement learning." This update transforms previously scattered multi-turn and agentic capabilities into a unified, coherent foundation. Daily activities surround stabilizing this release, addressing distributed inference backend bugs (SGLang), and merging highly efficient weight synchronization mechanisms for disaggregated training setups.

### 2. Releases
*   **[v0.3.0](https://github.com/THUDM/slime/releases)** 
    *   *Focus:* Agent-first RL. The release refactors multi-turn and agentic workloads into reusable, coherent pipelines, streamlining the development of complex RL agents.

### 3. Important Issues
*   **[#1998](https://github.com/THUDM/slime/issues/1998) [OPEN]** SGLang rollout servers are crashing during initialization (CUDA graph capture) in `custom_all_reduce_v2.py` due to a CUDA `invalid argument` error. This is a critical blockers for users running distributed RL jobs using SGLang as the inference backend.
*   **[#1966](https://github.com/THUDM/slime/issues/1966) [CLOSED]** A minor bug report noting that `PYTHONBUFFERED` was incorrectly utilized instead of the valid Python environment variable `PYTHONUNBUFFERED` for unbuffered standard output streams. 

### 4. Key PR Progress
*   **[#1975](https://github.com/THUDM/slime/pull/1975) [CLOSED]:** The official version bump PR merging the codebase into the v0.3.0 release.
*   **[#1806](https://github.com/THUDM/slime/pull/1806) [CLOSED]:** Introduced delta weight synchronization (supporting both disk and NCCL transports). This is a massive infrastructure optimization for **training/inference disaggregation**. Instead of shipping entire parameters, it syncs only changed positions/values, drastically saving bandwidth (100s of MB/s) across different datacenters.
*   **[#681](https://github.com/THUDM/slime/pull/681) [OPEN]:** Proposed integration of **CISPO** (Clipped IS-weight Policy Optimization), an algorithm introduced by MiniMax-M1. CISPO addresses a critical limitation in standard PPO/GRPO where low-probability tokens can destabilize training.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and advanced reasoning models scale, the bottleneck is shifting from pure compute to **infrastructure and distributed communication**. `slime` is actively solving the most pressing hardware-software co-design challenges in today's RL landscape:
1.  **Disaggregated Training:** PR #1806 highlights a growing industry trend: separating training and inference (rollout) across different hardware clusters. Delta-weight syncing is essential for making this bandwidth-efficient and viable.
2.  **Advanced Algorithmics:** Implementing cutting-edge algorithms like CISPO (PR #681) shows a commitment to solving inherent mathematical instabilities in standard PPO/GRPO, specifically regarding importance sampling weights and low-probability token generation.
3.  **Agentic Workloads:** The v0.3.0 release aligns with the industry's rapid shift from single-turn prompting to persistent, multi-turn RL agents, cementing `slime` as a forward-looking framework.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-06-01

## 1. Today's Highlights
The AReaL ecosystem saw steady but highly technical infrastructural updates over the last 24 hours. Activity was anchored by a significant new feature Pull Request introducing FP8 quantization for SGLang rollouts, alongside strategic planning for future NCCL migration. No new releases were cut, and two older issues were closed.

## 2. Releases
* **None** – No new software versions were released today.

## 3. Important Issues
Two issues received updates resulting in their closure, highlighting the community's focus on backend engine stability and API design:
* **#1290 [[BUG] GRPO on GSM8K is stable for SGLang but unstable/collapses for vLLM](https://github.com/inclusionAI/AReaL/issues/1290)** (Closed): A consistently reproducible bug where GRPO training collapses specifically when utilizing vLLM as the rollout engine, while remaining stable under SGLang.
* **#1168 [[Feature] Support FSDPEngine and RemoteSGLangEngine with factory classmethod](https://github.com/inclusionAI/AReaL/issues/1168)** (Closed): A request to standardize the instantiation of `FSDPEngine` and `RemoteSGLangEngine` via factory classmethods rather than relying on YAML configurations, ensuring better backward compatibility.

## 4. Key PR Progress
* **[#1379 Feat/fsdp sglang fp8 rollout](https://github.com/inclusionAI/AReaL/pull/1379)** (Open): A major performance-oriented PR by `ZiyiTsang`. It introduces online BF16-to-FP8 block-wise quantization for weights before NCCL broadcasting them to the SGLang rollout engine. This hybrid approach allows FSDP training to remain in BF16 while drastically optimizing rollout memory and communication overhead via custom FP8 kernels (`areal/utils/kernel/fp8_kernel.py`).
* **[#1380 Add nccl migration plan](https://github.com/inclusionAI/AReaL/pull/1380)** (Closed): A strategic infrastructure PR by `eggji` that outlines and implements the roadmap for future NCCL migrations, ensuring communication backend stability for distributed RL workloads.

## 5. Why This Project Matters in Today's RL Landscape
In the modern RL landscape, the bottleneck for post-training and RLHF has shifted decisively to GPU memory constraints and inter-node communication during rollout generation. AReaL's current trajectory—specifically PR #1379's integration of FP8 rollouts with BF16 FSDP training—places it at the cutting edge of hardware optimization. By bridging the gap between high-precision training and low-precision inference directly within the RL loop, and by addressing critical engine-specific stabilities (Issue #1290), AReaL is establishing itself as a vital framework for scalable, ultra-large LLM reinforcement learning.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Open-Source Daily Digest: TRL Edition
**Date:** 2026-06-01 | **Project:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
The TRL ecosystem is experiencing a massive surge in architectural improvements to **asynchronous reinforcement learning** and **inference-backend integration**. The spotlight today is on the rapid maturation of `AsyncGRPOTrainer`, with multiple PRs submitted to bring its feature set to parity with the standard `GRPOTrainer`. Additionally, core architectural refactors are cleaning up inheritance models for self-distillation trainers, while long-standing multi-GPU scaling issues with PEFT and vLLM remain a critical community focus.

## 2. Releases
No new releases were published today. Development remains focused on merging feature branches and resolving architectural bottlenecks for the next stable version. 

## 3. Important Issues
*   **Critical Multi-GPU Hang in GRPO + PEFT:** Issue [#3671](https://github.com/huggingface/trl/issues/3671) remains open. Users report persistent hanging in the `GRPOTrainer` when combining colocated vLLM, PEFT, and multi-GPU setups. This is a significant bottleneck for compute-efficient RLHF.
*   **Expanding RL Reward Paradigms:** Feature request [#3928](https://github.com/huggingface/trl/issues/3928) advocates for native support of RLPR (Relative Policy-to-Reference), while older issue [#2577](https://github.com/huggingface/trl/issues/2577) pushes for Process Reward Model (PRM) compatibility in PPO. This highlights the community's drive to move beyond standard dense Outcome Reward Models (ORMs).
*   **Advanced GRPO Scaling:** Issue [#5127](https://github.com/huggingface/trl/issues/5127) proposes MGPO (scaled group-wise advantages based on information gain), showing strong interest in fine-grained reward signal manipulation.

## 4. Key PR Progress
*   **The AsyncGRPO Parity Sprint:** A flurry of PRs by `rycerzes` are rapidly bringing `AsyncGRPOTrainer` up to speed. Today's updates include adding support for **PEFT/LoRA** ([#5896](https://github.com/huggingface/trl/pull/5896)), **ProcessorMixin** for multimodal support ([#5895](https://github.com/huggingface/trl/pull/5895)), **model init kwargs** ([#5893](https://github.com/huggingface/trl/pull/5893)), and crucial **sampling parameters** like `top_p` and `min_p` ([#5894](https://github.com/huggingface/trl/pull/5894)).
*   **Native vLLM Weight Sync:** PR [#5892](https://github.com/huggingface/trl/pull/5892) introduces native weight synchronization for Async GRPO utilizing vLLM's (>=0.22.0) new 4-phase RL weight-transfer API. This tightly couples TRL with modern inference server architectures.
*   **Decoupling Self-Distillation:** PRs [#5862](https://github.com/huggingface/trl/pull/5862) and [#5883](https://github.com/huggingface/trl/pull/5883) refactor SDFT and SDPO into independent trainers, abandoning a heavy base class abstraction. The follow-up correctly aligns the SDPO loss function with its official paper using a convex combination.
*   **End-to-End PPO Pipeline:** PR [#5813](https://github.com/huggingface/trl/pull/5813) adds comprehensive documentation and diagnostics for the SFT → Reward Modeling → PPO lifecycle (specifically for the TL;DR example), including tools to sanity-check reward models before training.

## 5. Why This Project Matters in Today's RL Landscape
TRL has firmly established itself as the de facto open-source standard for LLM alignment. Today's digest reveals a project actively solving the most pressing bottleneck in post-training: **the compute wall of generation and scoring**. By shifting rollout workers to separate processes ([#5749](https://github.com/huggingface/trl/pull/5749)) and integrating natively with high-throughput inference engines like vLLM, TRL is spearheading the transition from purely synchronous RL loops to scalable, production-grade asynchronous training. This architectural pivot—combined with ongoing efforts to support Process Reward Models (PRMs) and advanced alignment algorithms like self-distillation—makes TRL an indispensable bellwether for the broader AI industry's shift toward sophisticated, reasoning-heavy post-training paradigms.

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
**Date:** 2026-06-01

## 1. Today's Highlights
The verl (Volcengine RL) repository saw a highly active day focused on hardening infrastructure and expanding agentic capabilities. The community and maintainers merged efforts on critical bug fixes—especially around memory leaks, reward computation, and tool parsing security—while advancing foundational support for large multi-modal models (Qwen3-Omni) via FSDP and Megatron backends.

## 2. Releases
* **No new releases** were published today. The development focus remains on merging incremental but critical stability and architecture PRs.

## 3. Important Issues
* **Memory Leak Under Investigation ([#6548](https://github.com/verl-project/verl/issues/6548)):**
  A new bug report indicates that memory usage gradually increases with each training run. Given the critical nature of VRAM management in RLHF, this is a high-priority issue to monitor.
* **Ray Init Hangs in GRPO ([#4879](https://github.com/verl-project/verl/issues/4879)):**
  A user reported that initializing a local Ray instance via `ray.init` intermittently hangs when training Qwen-0.5B on an 8x H20 cluster using GRPO.
* **Call for Contributions: Memory Optimization ([#144](https://github.com/verl-project/verl/issues/144)):**
  This open `good first issue` continues to gain traction (3 upvotes). It proposes integrating advanced memory saving techniques from PyTorch’s `torchtune`, specifically activation offloading and fusing the optimizer step into the backward pass.

## 4. Key PR Progress
Today saw an impressive **11 active PRs**, heavily concentrated on robust bug fixes and complex feature expansions:

* **Agentic RL & Tool-Use Security:**
  * [#6271](https://github.com/verl-project/verl/pull/6271): Introduces support for **multi-trajectory generation within a single rollout** for the fully-async agent loop—a critical feature for advanced agentic search and tree-of-thought RL training.
  * [#6542](https://github.com/verl-project/verl/pull/6542): Patches a severe security vulnerability in the `Qwen3XMLToolParser` where `eval()` was being called on decoded model outputs, allowing arbitrary code execution.
  * [#6546](https://github.com/verl-project/verl/pull/6546): Enforces `strict=True` in tool response message parsing to prevent silent dropping or `IndexError` misalignment of tool calls.

* **Distributed Training & FSDP:**
  * [#6512](https://github.com/verl-project/verl/pull/6512): A major feature PR enabling **per-unit LoRA summoning** with FSDP1/2 compatibility. This unblocks RL fine-tuning for massive multi-modal architectures like Qwen3-Omni-30B-A3B Thinker.
  * [#6541](https://github.com/verl-project/verl/pull/6541): Refactors hardcoded device selection across the codebase, replacing it with a unified `get_resource_name()` function.

* **Reward & Checkpointing Robustness:**
  * [#6545](https://github.com/verl-project/verl/pull/6545): Fixes `compute_rm_score` to union `reward_extra_info` keys across all samples, preventing `KeyError` in batches with asymmetric metadata.
  * [#6544](https://github.com/verl-project/verl/pull/6544): Ensures worker counts are released in `NaiveRouter` when requests fail after max retries, fixing a distributed worker-leak bug.
  * [#6543](https://github.com/verl-project/verl/pull/6543): Fixes `extract_step` to correctly identify the *last* `global_step_` regex match in nested checkpoint directories.

* **Backend Compatibility & Config:**
  * [#6539](https://github.com/verl-project/verl/pull/6539): Resolves breaking changes introduced in `trl>=0.29` for importing `AutoModelForCausalLMWithValueHead`.
  * [#6515](https://github.com/verl-project/verl/pull/6515): Fixes Megatron engine config building by zeroing out MTP layers on the `vanilla_mbridge` path.
  * [#6547](https://github.com/verl-project/verl/pull/6547): Corrects `BaseConfig` mapping behavior to properly raise `KeyError` instead of `AttributeError` on missing fields.

## 5. Why This Project Matters in Today's RL Landscape
As the LLM landscape shifts heavily toward complex reasoning models and autonomous agents, the infrastructure requirements for Post-Training (RLHF/GRPO) have scaled exponentially. 

Today's activity in the verl repository highlights the exact growing pains—and solutions—defining the modern RL ecosystem:
1. **Securing the RL Loop:** Patching arbitrary code execution via tool parsers (PR [#6542](https://github.com/verl-project/verl/pull/6542)) is a vital step as models are given access to sandbox environments and code execution.
2. **Complexity in Reward Routing:** Updates to `NaiveRouter` and dynamic reward keys (PRs [#6544](https://github.com/verl-project/verl/pull/6544) & [#6545](https://github.com/verl-project/verl/pull/6545)) show that the community is solving edge cases in distributed reward computation that arise when scaling up batch sizes and complex reward models.
3. **Multi-modal RL:** The architectural refactors to support FSDP + per-unit LoRA (PR [#6512](https://github.com/verl-project/verl/pull/6512)) demonstrate that RL is no longer just for text-only 7B/8B models; frameworks must now cleanly abstract memory management for massive multi-stage models.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

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

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

### RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-06-01 | **Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

#### 1. Today's Highlights
Activity in the Gymnasium repository over the past 24 hours has been minimal, characterized by low issue turnaround and a singular focus on long-term infrastructure maintenance. The primary event is the closure of a pull request aimed at extending Python version compatibility, signaling upcoming structural updates for the broader RL ecosystem.

#### 2. Releases
*   **No new releases** were published today. The project maintains its current stable version.

#### 3. Important Issues
*   **0 issues updated** in the last 24 hours. There are no new bug reports, feature requests, or active troubleshooting sessions to flag for the community today.

#### 4. Key PR Progress
*   **[CLOSED] [Add Python 3.14 Support (#1587)](https://github.com/Farama-Foundation/Gymnasium/pull/1587)**
    *   **Author:** `pseudo-rnd-thoughts`
    *   **Details:** Opened on May 28 and updated on May 30, this PR addressed the lack of explicit support for the recently released Python 3.14. The PR was closed without merging (or superseded) today.
    *   **Analysis:** While closed, this highlights an active, ongoing behind-the-scenes effort by maintainers to ensure the library remains compatible with the latest Python builds, a critical step for dependencies down the RL pipeline. 

#### 5. Why This Project Matters in Today's RL Landscape
Gymnasium serves as the foundational API standard for single-agent reinforcement learning. Maintained by the Farama Foundation, it provides the crucial `Env` base class, standardized API interactions (`step`, `reset`), and strictly defined action/observation spaces that the modern RL ecosystem relies upon. Even on quiet days, projects like this act as the bedrock for cutting-edge RL research; algorithmic libraries (like Stable-Baselines3, CleanRL, and Ray RLlib) depend entirely on Gymnasium's stability and forward-looking compatibility updates (such as Python 3.14 support) to function seamlessly.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>