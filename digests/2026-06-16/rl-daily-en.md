# RL Open Source Daily Digest 2026-06-16

> Generated: 2026-06-15 22:37 UTC | Projects covered: 15

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
The June 16, 2026 digest reveals an open-source Reinforcement Learning (RL) ecosystem in the midst of a massive paradigm shift. While classical discrete/continuous control environments (Gymnasium, CleanRL, rl_games) remain in stable maintenance modes, the center of gravity has unequivocally moved to Large Language Model (LLM) and Vision-Language Model (VLM) alignment. 

Within this LLM RL space, engineering efforts are bifurcating into two distinct tiers: **Algorithmic Frameworks** (TRL, slime, OpenRLHF, Open Instruct) rushing to support multi-turn agentic workflows and verifiable rewards (RLVR), and **Distributed Infrastructure Platforms** (verl, AReaL, ROLL, ROCK) aggressively optimizing memory bottlenecks, decoupling inference/training loops, and expanding to heterogeneous hardware (e.g., Huawei Ascend NPUs).

## Activity Comparison
The ecosystem's development bandwidth is highly concentrated, with TRL, verl, and slime driving the highest volume of structural and algorithmic updates, while foundational APIs and legacy simulators remain quiet.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 4 | 9 | 0 | Pivoting heavily towards multi-turn agent training (AsyncGRPO) and RLVR reward utilities. |
| **verl** | 8 | 10 | 0 | Solving massive distributed systems bottlenecks (OOM memory leaks) and expanding hardware support. |
| **slime** | 3 | 8 | 0 | Maturing into a production-grade framework for coding agents (SWE-bench) and VLM RL. |
| **ROCK** | 2 | 8 | 0 | Overhauling infrastructure for dynamic resource allocation and cloud-native sandbox resilience. |
| **AReaL** | 1 | 6 | 0 | Advancing decoupled microservices, offline debugging, and experimental Diffusion RL. |
| **Stable Baselines3** | 0 | 3 | 1 | Modernizing dependencies (Gymnasium 1.3.0) and automating release pipelines. |
| **Open Instruct** | 0 | 3 | 0 | Democratizing GRPO by lowering hardware floors (CPU-offloading) and stabilizing exploration. |
| **OpenRLHF** | 0 | 1 | 0 | Solving silent training collapses via defensive token alignment in agentic workflows. |
| **rl_games** | 1 | 1 | 0 | Refining SAC replay buffer logic and exploring safety manifests for real-world robotics. |
| **ROLL** | 0 | 2 | 0 | Decoupling from NVIDIA dependencies to support Ascend NPU architectures. |
| **Gymnasium** | 0 | 1 | 0 | Steady state; expanding community tutorials for MuJoCo continuous control. |
| **CleanRL** | 0 | 1 | 0 | Administrative cleanup of stale hierarchical RL PRs. |
| **PettingZoo, Tianshou, torchtune** | 0 | 0 | 0 | *No activity recorded in the last 24 hours.* |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Multi-Turn Agentic RL & Coding Agents:** The industry has moved past single-turn prompt-completion. Frameworks like TRL (AsyncGRPO), slime (SWE-bench integration), and OpenRLHF are actively solving trajectory fault tolerance, environment state injection, and multi-turn token boundary alignment for tool-using LLMs.
*   **Expanding Beyond PPO:** There is a concerted effort to natively support alternative advantage estimators and alignment paradigms. Slime added REINFORCE and Multi-Teacher Distillation (MOPD); TRL introduced OPSD (On-Policy Self-Distillation); AReaL implemented off-policy corrections (IcePop/KPop); and Open Instruct standardized GRPO exploration parameters.
*   **Modality Expansion:** RL post-training is bleeding into multimodal architectures. AReaL introduced a proof-of-concept for Diffusion RL (SD1.5), while verl and slime dedicated significant patches to fix VLM data loading and vision-component LoRA fine-tuning.

**Engineering & Infrastructure Signals**
*   **Rollout-Training Memory Optimization:** Synchronizing weights between training actors and inference rollouts is a massive bottleneck. Verl and slime aggressively patched Out-of-Memory (OOM) errors related to SGLang tensor cloning, PPO log-prob calculations, and Megatron grad buffers. 
*   **Inference-Training Decoupling:** To maximize GPU utilization, frameworks are decoupling generation from training. AReaL introduced a v2 microservice architecture and trajectory replay (R3), while TRL established a unified "rollout-source" contract to interface with high-throughput engines like vLLM.
*   **Hardware Agnosticism:** Easing NVIDIA/CUDA dependencies is a rising priority. Both verl and ROLL (Alibaba) actively merged support for Huawei Ascend NPUs and MindSpeed fused kernels. Meanwhile, Open Instruct merged CPU-Adam offloading to allow 7B RL model training on constrained academic hardware.

## Differentiation Analysis
*   **Algorithmic Abstraction vs. Raw Compute:** Projects like **TRL**, **OpenRLHF**, and **Open Instruct** focus on accessible algorithmic abstractions (RLVR reward functions, LoRA, temperature scaling). In contrast, **verl** and **AReaL** differentiate by tackling raw distributed compute—handling bitwise determinism in vLLM, grouped-expert streaming for 397B+ MoE architectures, and microservice isolation.
*   **The Cloud-Native Infrastructure Layer:** **ROCK** uniquely differentiates itself by operating below the algorithm layer. While other projects fix PyTorch tensors, ROCK is fixing DinD (Docker-in-Docker) sandboxes, OSS bucket caching, and dynamic Ray scheduling—essential for securely running untrusted agentic code at scale.
*   **Classical vs. LLM RL:** A stark divide remains between LLM-centric frameworks and traditional RL projects. **SB3**, **rl_games**, **CleanRL**, and **Gymnasium** continue focusing on discrete/continuous control, API stability, and sim-to-real robotics (e.g., Isaac Gym). They are intentionally insulated from the LLM infrastructure chaos.

## Community Momentum & Maturity
*   **Scale-Driven Triage:** The high volume of OOM fixes and architectural refactors in projects like **verl**, **slime**, and **TRL** indicates that the community is successfully pushing massive models (e.g., DeepSeek V4, Qwen3.5) through pipelines previously considered unscalable, exposing deep systems bugs in the process.
*   **Enterprise Investment:** Corporate backings from HuggingFace (TRL), Volcengine (verl), Alibaba (ROCK/ROLL), and inclusionAI (AReaL) are highly visible. ROLL's active hiring for "Agent Infra" roles and TRL's rapid integration of vLLM's native APIs highlight that open-source RL is being actively driven by enterprise roadmaps.
*   **Foundational Stability:** Foundational libraries like **Gymnasium** and **SB3** show zero active bugs, allowing maintainers to focus purely on dependency minimization, CI automation, and educational tutorials. 

## Trend Signals
*   **RLVR & Sandboxes as the New Standard:** Reinforcement Learning from Verifiable Rewards (RLVR) requires strict environment isolation. The integration of sandbox suites (Harbor in TRL, SWE-bench in slime) signals that dynamic, verifiable code-execution environments are replacing static human-preference datasets (RLHF).
*   **Death of the Monolithic Trainer:** Monolithic RL scripts are dying. AReaL's v2 microservices, TRL's decoupled rollout sources, and verl's rollout-routing replay (R3) point to a future where inference engines (vLLM/SGLang) and training accelerators (Megatron/FSDP2) operate as loosely coupled, asynchronously communicating clusters.
*   **Geographic Hardware Diversification:** The simultaneous push for Ascend NPU support across multiple Alibaba projects (ROLL, ROCK) and Volcengine projects (verl) signals a permanent ecosystem trend toward non-Nvidia hardware optimization in open-source AI.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for ROLL based on the provided GitHub data.

# 📊 RL Ecosystem Daily Digest: ROLL (alibaba/ROLL)
**Date:** 2026-06-16

### 1. Today's Highlights
*   **Hardware Ecosystem Expansion:** ROLL is actively pushing to support Huawei Ascend NPUs (MindSpeed & Megatron integration), indicating a strategic shift toward heterogeneous hardware support in RL training.
*   **Community & Team Growth:** A merged documentation PR reveals Alibaba is actively scaling its "Agent Infra" team, highlighting ongoing corporate investment in RL agent infrastructure.
*   **Zero Active Issues:** The issue tracker remains clear, suggesting either high codebase stability or that bug tracking/feature requests are primarily handled through direct PR submissions.

### 2. Releases
*   **No New Releases:** There were no new versioned releases or tags published in the last 24 hours. Development remains confined to the `main` branch and open feature branches.

### 3. Important Issues
*   **None:** There are 0 open or updated issues to report today. 

### 4. Key PR Progress
*   **[OPEN] PR #456: Ascend NPU & Megatron Support** ([alibaba/ROLL#456](https://github.com/alibaba/ROLL/pull/456))
    *   **Author:** shun001
    *   **Update:** Updated yesterday (2026-06-15), this is a major infrastructure PR. It introduces NPU initialization patches for MindSpeed, fixes platform detection, updates Megatron optimizer/offload compatibility, and handles NPU-specific attention masks. It also bundles an Ascend MindSpeed CI workflow and a Qwen3 DPO Megatron example config. 
    *   **Significance:** This PR is critical for decoupling ROLL from a pure NVIDIA/CUDA dependency, enabling high-performance RLHF/DPO on domestic hardware.
*   **[CLOSED] PR #460: Agent Infra Careers Role** ([alibaba/ROLL#460](https://github.com/alibaba/ROLL/pull/460))
    *   **Author:** kkkky123
    *   **Update:** Closed yesterday (2026-06-15). A documentation update adding a careers page for an "Agent Infra" role.

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape—dominated by LLM alignment (RLHF/DPO) and complex agentic workflows—hardware lock-in is a massive bottleneck for scaling operations cost-effectively. ROLL's active integration of **Ascend MindSpeed and Megatron optimizations (PR #456)** positions it as a forward-looking, hardware-agnostic RL framework. By supporting Qwen3 architectures and expanding CI tests across diverse hardware backends, ROLL provides the open-source community with the necessary infrastructure to train and align large models efficiently outside the traditional GPU ecosystem. Furthermore, Alibaba's active hiring for Agent Infrastructure signals that ROLL will likely see continued enterprise-grade development for complex, multi-step RL agent training.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily digest for the ROCK ecosystem based on the provided GitHub data.

# 🚀 ROCK RL Daily Digest — 2026-06-16

## 1. Today's Highlights
- **Sandbox Infrastructure Hardening:** A critical production bug causing silent drops of sandbox logs was identified and immediately patched ([Issue #1107](https://github.com/alibaba/ROCK/issues/1107) → [PR #1108](https://github.com/alibaba/ROCK/pull/1108)). 
- **Major Datasets CLI Overhaul:** A massive refactor dropping today landed in the datasets module, introducing OSS bucket caching, server-side pagination, and laying the groundwork for a new `datasets fs` command ([PR #1105](https://github.com/alibaba/ROCK/pull/1105), [PR #1106](https://github.com/alibaba/ROCK/pull/1106)).
- **Dynamic Resource Management:** Engineers are actively merging capabilities to update CPU/memory/disk constraints on the fly and enforce user-facing disk quotas via Ray scheduling ([PR #1100](https://github.com/alibaba/ROCK/pull/1100), [PR #977](https://github.com/alibaba/ROCK/pull/977)).

## 2. Releases
**None.** No new version cuts or releases were recorded in the last 24 hours. The project remains focused on merging feature branches into `master`.

## 3. Important Issues
- **[BUG] Production Log Wipeout ([#1107](https://github.com/alibaba/ROCK/issues/1107))**
  - **Severity:** Production. 
  - **Impact:** The `FileCleanupTask` hourly run contains a race condition that deletes live sandbox log directories if they are transiently empty between `mkdir -p` and the first log flush. 
  - **Status:** A fix has already been submitted in [PR #1108](https://github.com/alibaba/ROCK/pull/1108) by guarding the deletion logic with `-mmin +max_age_mins`.
- **[FEATURE] Datasets File Access ([#1104](https://github.com/alibaba/ROCK/issues/1104))**
  - **Impact:** Users currently cannot inspect or fetch individual files inside a specific task from the OSS dataset registry. 
  - **Status:** Addressed via the new `datasets fs` (ls/get/download) subcommand in [PR #1106](https://github.com/alibaba/ROCK/pull/1106).

## 4. Key PR Progress
*Total PR Activity: 10 updated in the last 24h*

- **Resource & Scheduling Upgrades:**
  - [PR #1100](https://github.com/alibaba/ROCK/pull/1100): Allows dynamic updates to CPU, memory, and disk resources upon job restart.
  - [PR #977](https://github.com/alibaba/ROCK/pull/977): Introduces user-facing disk quotas integrated directly with Ray custom resource scheduling and metrics.
- **CLI Performance & Architecture:**
  - [PR #1105](https://github.com/alibaba/ROCK/pull/1105): Huge performance win for `datasets list`. Refactors CLI to an object-oriented model and implements an `oss2.Bucket` cache, cutting execution time from ~5.0s to ~2.7s.
  - [PR #1106](https://github.com/alibaba/ROCK/pull/1106): Implements the `datasets fs` command to inspect and download task-specific files from OSS.
- **Complex Workloads & Infrastructure:**
  - [PR #1080](https://github.com/alibaba/ROCK/pull/1080): Adds `ComposeJobConfig` to support multi-container topologies (main + sidecars + init containers) orchestrated via a generated `runner.sh` inside DinD sandboxes.
  - [PR #1101](https://github.com/alibaba/ROCK/pull/1101): Centralizes image registry configs and adds support for Alibaba Cloud Container Registry (ACR) temporary tokens.
  - [PR #1091](https://github.com/alibaba/ROCK/pull/1091): Enables cross-process sandbox operations via `config.sandbox_id`.
- **Merged/Closed:**
  - [PR #1098](https://github.com/alibaba/ROCK/pull/1098): Added a `patch` boolean field to `VerifierConfig` to better control verifier behaviors.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning (RL) workflows scale—especially with Large Language Model (LLM) alignment and multi-agent systems—infrastructure becomes the primary bottleneck. Today's activity in the ROCK ecosystem highlights exactly how modern RL platforms are solving these bottlenecks:

1. **Dynamic Compute Allocation:** RL tasks are notoriously resource-asymmetric (e.g., generation vs. training phases). PRs like [#1100](https://github.com/alibaba/ROCK/pull/1100) (dynamic resource updates) and [#977](https://github.com/alibaba/ROCK/pull/977) (Ray disk quota scheduling) allow platforms to scale resources up or down dynamically, drastically reducing GPU/CPU idle time and cloud costs.
2. **Data I/O Optimization:** High-throughput RL requires thousands of trajectory checkpoints. The heavy investment in refactoring the `datasets` CLI ([#1105](https://github.com/alibaba/ROCK/pull/1105)) and enabling direct file fetching ([#1106](https://github.com/alibaba/ROCK/pull/1106)) reflects a necessary shift toward highly efficient, paginated data retrieval from object storage (OSS) to keep GPU utilization high.
3. **Cloud-Native Sandbox Resilience:** The push for multi-container DinD environments ([#1080](https://github.com/alibaba/ROCK/pull/1080)) and the rapid patching of silent log deletion ([#1108](https://github.com/alibaba/ROCK/pull/1108)) demonstrate a mature focus on observability and environment isolation. Secure, stable sandboxes are mandatory for running untrusted RL agent code at scale.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily reinforcement learning ecosystem digest for **slime** (THUDM/slime) on 2026-06-16.

### 1. Today's Highlights
* **Algorithm Expansion:** Introduction of new advantage estimators and IS correction hooks, notably REINFORCE and composable current-policy IS correction ([PR #2083](https://github.com/THUDM/slime/pull/2083), [PR #2084](https://github.com/THUDM/slime/pull/2084)).
* **Coding Agent RL:** Major strides in agentic RL pipelines with the integration of the official SWE-bench evaluation harness and robust rollout exception handling ([PR #2079](https://github.com/THUDM/slime/pull/2079), [PR #2078](https://github.com/THUDM/slime/pull/2078)).
* **Performance & Stability:** Significant patches to prevent Out-of-Memory (OOM) errors during PPO log-prob/entropy calculations and enhanced data loading for multi-image Vision-Language Models (VLMs) ([PR #2076](https://github.com/THUDM/slime/pull/2076), [PR #2048](https://github.com/THUDM/slime/pull/2048)).

### 2. Releases
* **No new releases** recorded in the last 24 hours. Development remains active on the main and feature branches.

### 3. Important Issues
* **Frontier Model Support:** A user inquired about official support or recommended modifications for training/fine-tuning **DeepSeek V4** models. The issue remains open, indicating potential upcoming architecture integrations ([Issue #1910](https://github.com/THUDM/slime/issues/1910)).
* **VLM Data Loading Bottlenecks:** A closed discussion highlighted severe latency when loading 30+ images for VLMs, prompting a feature request for `--num_workers` dataset parallel loading. This was directly addressed in [PR #2048](https://github.com/THUDM/slime/issues/2037).
* **Coding Agent Data Formats:** An open request from the community for standardized RL training data samples and generation scripts specifically tailored for code agents ([Issue #2052](https://github.com/THUDM/slime/issues/2052)).

### 4. Key PR Progress
**Algorithm & Core RL:**
* [PR #2083](https://github.com/THUDM/slime/pull/2083): Added a plain `REINFORCE` advantage estimator (GRPO-style group normalization without PPO/IS clipping).
* [PR #2084](https://github.com/THUDM/slime/pull/2084): Exposed current policy log-probs (`cur_log_probs`) to the loss function, making off-policy importance sampling (IS) composable via the TIS hook.
* [PR #2085](https://github.com/THUDM/slime/pull/2085): Fixed On-Policy Distillation (OPD) by scoring teacher log-probs at the rollout temperature rather than a hardcoded `0`.
* [PR #2051](https://github.com/THUDM/slime/pull/2051): Drafted support for Multi-Teacher On-Policy Distillation (MOPD), enabling simultaneous distillation from multiple domain-specific teachers.

**Agentic RL & Evaluation:**
* [PR #2079](https://github.com/THUDM/slime/pull/2079): Integrated `swebench_metadata` as a third evaluation route in `coding_agent_rl`, allowing direct grading via the official SWE-bench Verified harness.
* [PR #2078](https://github.com/THUDM/slime/pull/2078): Isolated per-trajectory exceptions in `generate_and_rm_group` using `return_exceptions=True`, preventing a single failed trajectory from crashing an entire async rollout batch.

**Performance & Architecture Fixes:**
* [PR #2076](https://github.com/THUDM/slime/pull/2076): Gathered response/loss-mask rows before cross-entropy calculations, reducing the asymptotic memory footprint of log-prob/entropy computations and resolving prior OOM issues.
* [PR #2048](https://github.com/THUDM/slime/pull/2048): Introduced `--num-workers` for dataset parallel loading, drastically improving VLM dataset initialization times.
* [PR #1904](https://github.com/THUDM/slime/pull/1904): Fixed fused 3D expert tensor preservation for Qwen3.5 MoE during `torch_dist` to HF checkpoint conversions.
* [PR #2077](https://github.com/THUDM/slime/pull/2077): Corrected `expert_model_parallel_size` configurations for GLM-4.7 on single-node 8-GPU setups.

### 5. Why This Project Matters in Today's RL Landscape
As the RL landscape shifts from static reward modeling to complex, multi-step agentic tasks, **slime** is establishing itself as a highly pragmatic, production-grade framework. 
1. **Pioneering Agentic RL:** By integrating official SWE-bench harnesses and asynchronous trajectory fault tolerance ([PR #2078](https://github.com/THUDM/slime/pull/2078), [PR #2079](https://github.com/THUDM/slime/pull/2079)), slime is solving the severe stability bottlenecks inherent in training coding agents.
2. **Algorithmic Flexibility:** The rapid addition of REINFORCE, CISPO advantage estimators, and Multi-Teacher Distillation shows slime is keeping pace with bleeding-edge research, allowing researchers to easily swap out PPO clipping for specialized IS corrections.
3. **Hardware Efficiency at Scale:** With focused fixes for MoE tensor conversion (DeepSeek/Qwen architectures) and explicit patches for OOM errors during entropy calculations, slime addresses the exact hardware and memory limitations that currently bottleneck large-scale LLM/VLM post-training.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the RL open-source ecosystem daily digest for AReaL based on the provided GitHub data.

# 🪐 AReaL RL Ecosystem Daily Digest — 2026-06-16

## 1. Today's Highlights
* **Expansion into Diffusion RL:** A new experimental proof-of-concept (PoC) for Diffusion RL post-training (SD1.5 + LoRA + REINFORCE) was introduced, marking AReaL's expansion beyond standard LLM text generation.
* **Infrastructure & Memory Optimization:** Significant updates to colocated training memory management, notably reducing host memory overhead by ~4x for Megatron grad buffers.
* **Enhanced Debugging Capabilities:** New trajectory dump/replay features and per-sample version tracking are being added to decouple inference rollouts from training loops, vastly improving offline debugging.

## 2. Releases
* **No new releases** have been published in the last 24 hours. The project continues active development on its v2 microservice architecture.

## 3. Important Issues
* **#1374 [OPEN] [Feature] Operator CLI (`areal`) for the v2 microservice architecture**
  * *Author:* sitabulaixizawaluduo | *Updated:* 2026-06-15
  * *Summary:* Proposes a dedicated CLI (`areal`) to interact with the project's new v2 architecture, which splits the system into distinct inference, agent, weight-update, and training microservices. This underscores a major architectural maturation for the framework.
  * *Link:* [areal-project/AReaL Issue #1374](https://github.com/areal-project/AReaL/issues/1374)

## 4. Key PR Progress
* **#1410 [OPEN] feat(experimental): Diffusion RL post-training — Phase 1 PoC**
  * *Summary:* Introduces a self-contained, single-GPU PoC for RL post-training of diffusion models using REINFORCE and LoRA. Closes Phase 1 of issue #1381. 
  * *Link:* [areal-project/AReaL PR #1410](https://github.com/areal-project/AReaL/pull/1410)
* **#1393 [OPEN] feat: disable megatron grad buffers CPU backup to save host memory**
  * *Summary:* Adds a configuration to skip CPU backups for gradient buffers during offload in colocated training. Since buffers are recomputed each step, skipping the backup saves ~4x host memory.
  * *Link:* [areal-project/AReaL PR #1393](https://github.com/areal-project/AReaL/pull/1393)
* **#1389 [OPEN] feat: [R3] support R3 for vllm backend**
  * *Summary:* Implements rollout routing replay (R3) for the vLLM backend, requiring vLLM version 0.22.0+. Crucial for optimizing inference-engine synchronization in RL loops.
  * *Link:* [areal-project/AReaL PR #1389](https://github.com/areal-project/AReaL/pull/1389)
* **#1408 [OPEN] fix: per-sample version tracking with loss_mask filter and multi-turn…**
  * *Summary:* Fixes version tracking bugs (filtered by `loss_mask==1`) and adds run-length encoded per-token version sequences, fixing trajectory splitting for multi-turn workflows.
  * *Link:* [areal-project/AReaL PR #1408](https://github.com/areal-project/AReaL/pull/1408)
* **#1407 [OPEN] feat: trajectory dump/replay for offline training-loop debugging**
  * *Summary:* Allows serialization of rollout batches to disk, enabling offline debugging of the training loop without the compute overhead of running a live inference engine.
  * *Link:* [areal-project/AReaL PR #1407](https://github.com/areal-project/AReaL/pull/1407)
* **#1405 [CLOSED] Supporting features for IcePop and KPop**
  * *Summary:* Implemented new off-policy correction masking strategies (Double-Sided Masking, Bidirectional Binary KL Divergence Masking) for PPO actor loss. *(Closed/Merged)*
  * *Link:* [areal-project/AReaL PR #1405](https://github.com/areal-project/AReaL/pull/1405)

## 5. Why This Project Matters in Today's RL Landscape
As RLHF/RLAIF scales to handle trillion-parameter LLMs and complex multi-modal architectures, monolithic training pipelines are becoming bottlenecked by memory constraints and rigid inference-training coupling. AReaL is aggressively solving these exact ecosystem bottlenecks. 

By pivoting to a **decoupled v2 microservice architecture** (Issue #1374) and introducing highly granular memory optimizations (PR #1393), AReaL allows researchers to scale distributed training (Megatron) and high-throughput inference (vLLM) seamlessly. Furthermore, its rapid adoption of advanced algorithmic techniques—such as off-policy corrections (IcePop/KPop) and rollout replay (R3)—alongside boundary-pushing experiments in **Diffusion RL** (PR #1410), positions AReaL as a highly versatile, forward-looking framework critical to the next generation of post-training research.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL open-source ecosystem daily digest for TRL based on the provided GitHub data.

### 1. Today's Highlights
* **Agentic & Environment RL Push:** Significant momentum around `AsyncGRPOTrainer` and environment-owned RL workflows. A major RFC (#5974) discusses a unified "rollout-source" seam for agent training, and several PRs landed to fix environment rewards, observations, and agentic integrations.
* **FSDP2 + PEFT Stabilization:** Critical fixes were merged/opened to address `DTensor` mismatches under FSDP2 and PEFT setups in both SFT and RLOO pipelines (#6065, #6064). 
* **RLVR Reward Function Expansion:** TRL is actively expanding its built-in Reinforcement Learning from Verifiable Rewards (RLVR) toolkit, adding native n-gram repetition penalties and cosine-scaled length rewards.

### 2. Releases
* **None** recorded in the last 24 hours.

### 3. Important Issues
* **#6064 [Bug, ⚡accelerate]:** CI distributed smoke tests are failing with `RuntimeError: aten.mm.default got mixed torch.Tensor and DTensor` during SFT loss computation. This highlights ongoing integration friction between PyTorch's newer FSDP2 and PEFT. 
* **#6067 [Bug, AsyncGRPO]:** The `environment_factory`'s `reset()` observation is being dropped by the rollout worker, causing the policy to accidentally train on bare, empty dataset prompts rather than dynamic environment states. 
* **#5974 [RFC]:** A highly strategic proposal to decouple generation from training by establishing a "single, narrow contract" for environment & agent RL. This sets the stage for multi-turn agentic training within TRL.
* **#6039 [Bug, SFT]:** A silent data corruption bug where `Dataset.with_transform` causes stateful/random transforms (e.g., dynamic function-calling tool docs) to be prematurely baked into the dataset during tokenization.

### 4. Key PR Progress
* **Agentic & AsyncGRPO Environments:**
  * [#6068](https://github.com/huggingface/trl/pull/6068): Injects the `env.reset()` observation back into the prompt for `AsyncGRPOTrainer`.
  * [#6031](https://github.com/huggingface/trl/pull/6031): Fixes environment-owned rewards so they are successfully passed back from the rollout worker to the reward functions.
  * [#6018](https://github.com/huggingface/trl/pull/6018): Adds an experimental integration for the [Harbor](https://www.harborframework.com/) agentic task suites.
* **Infrastructure & Distributed Training:**
  * [#6065](https://github.com/huggingface/trl/pull/6065): Resolves the Tensor/DTensor type mismatch (Issue #6064) for chunked cross-entropy loss under FSDP2 + PEFT.
  * [#5892](https://github.com/huggingface/trl/pull/5892) (Merged): Wires `AsyncGRPO`'s weight transfer client to vLLM's new native 4-phase RL weight-transfer API (vLLM >= 0.22.0), vastly improving sync efficiency.
* **RLVR Reward Utilities:**
  * [#6058](https://github.com/huggingface/trl/pull/6058) & [#6066](https://github.com/huggingface/trl/pull/6066): Introduces `get_repetition_penalty_reward` and `get_cosine_scaled_reward` natively into TRL to better support GRPO/RLVR mathematical and reasoning tasks without users needing to write custom loops.
* **New Algorithms:**
  * [#5990](https://github.com/huggingface/trl/pull/5990): Implements OPSD (On-Policy Self-Distillation), adding a powerful new experimental trainer for model alignment.

### 5. Why This Project Matters in Today's RL Landscape
TRL is effectively bridging the gap between classical offline RLHF and the current frontier of **agentic, online RL**. The focus of today's commits shows a clear architectural pivot toward multi-turn agent training. By abstracting "rollout sources" (Issue #5974), fixing environment-owned reward flows (PR #6031), and integrating natively with high-throughput inference engines like vLLM's new RL APIs (PR #5892), TRL is positioning itself not just as a fine-tuning library, but as the defacto orchestration layer for training complex, tool-using LLMs via RLVR and GRPO.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

**RL Ecosystem Daily Digest: OpenRLHF**
**Date:** 2026-06-16

### 1. Today's Highlights
Activity in the OpenRLHF ecosystem over the past 24 hours has been highly concentrated, marked by the closure of a critical performance and architecture PR. While no new issues or releases were published, maintainers merged a key fix addressing token alignment and integrity in multi-turn agentic RLHF. 

### 2. Releases
*   **None.** No new version tags or releases were published in the last 24 hours.

### 3. Important Issues
*   **None.** No new issues or updates to existing issues were recorded in the last 24 hours. 

### 4. Key PR Progress
The sole focus of today's development activity was a significant enhancement to multi-turn agent training:

*   **[CLOSED] feat: add AgentTokenHandler with defensive token concatenation for agentic training (#1128)** ([PR #1181](https://github.com/OpenRLHF/OpenRLHF/pull/1181))
    *   **Author:** `ichbinlucaskim`
    *   **Summary:** This PR resolves [Issue #1128](https://github.com/OpenRLHF/OpenRLHF/issues/1128), which detailed severe performance degradation in agentic RLHF workflows. The root cause was tied to vLLM's token generation logic, leading to missing End-of-Sequence (EOS) tokens in action sequences and misaligned turn boundaries. 
    *   **Significance:** The introduction of the `AgentTokenHandler` provides a defensive token concatenation mechanism. It enforces strict token offset integrity and sequence boundary alignment, which is crucial for stabilizing multi-turn RLHF and preventing silent training collapses.

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily toward agentic workflows and multi-turn reasoning, the foundational infrastructure for Reinforcement Learning from Human Feedback (RLHF) is being pushed to its limits. Single-turn prompt-completion RLHF is no longer sufficient. 

Projects like OpenRLHF are critical because they expose and solve deep infrastructure bottlenecks—such as vLLM token boundary misalignments highlighted in today's merged PR. By implementing robust defensive mechanisms for token sequence integrity, OpenRLHF is actively paving the way for reliable, scalable agentic training, ensuring that LLMs can be fine-tuned safely and efficiently within complex, multi-step environments.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL ecosystem daily digest for `verl` (volcengine/verl) for June 16, 2026.

### 1. Today's Highlights
*   **Rollout Memory Optimizations:** Critical fixes were merged/opened to address Out-of-Memory (OOM) errors during actor-to-rollout weight synchronization, specifically targeting SGLang and FSDP2 backends.
*   **Ascend (NPU) Ecosystem Maturation:** A significant cluster of PRs and issues focus on stabilizing vLLM pipeline parallelism and MoE fused kernels on Huawei Ascend NPU hardware.
*   **Advanced RL & Distillation Features:** The community is actively contributing advanced capabilities, including top-K forward-KL distillation, off-policy metrics, prefix-tree shared-prefix deduplication (MAGI attention), and VLM-specific LoRA training.

### 2. Releases
*   **None** (No new releases in the last 24 hours).

### 3. Important Issues
*   **Memory Spikes during Weight Sync:** 
    *   [Issue #6733](https://github.com/verl-project/verl Issue #6733): SGLang rollout backend unconditionally `clone()`s every tensor during `get_named_tensor_buckets`, doubling peak GPU memory and causing OOMs. 
    *   [Issue #6691](https://github.com/verl-project/verl Issue #6691): Megatron-bridge OOMs (~8.6GiB) during grouped-expert export for massive MoE models (e.g., Qwen3.5-397B), requesting per-expert streaming.
    *   [Issue #6468](https://github.com/verl-project/verl Issue #6468): Continuous CPU memory leaks trigger Ray OOM during FSDP2 rollout weight sync.
*   **Multi-Hardware Support & Bugs:**
    *   [Issue #6608](https://github.com/verl-project/verl Issue #6608) & [Issue #6707](https://github.com/verl-project/verl Issue #6707): HCCL debug errors and fused kernel patch failures for Qwen3-MoE on Ascend NPUs.
    *   [Issue #6403](https://github.com/verl-project/verl Issue #6403) [CLOSED]: Confirmed routing for third-party Intel XPU hardware contributions via the `verl-hardware-plugin` repo.
*   **Feature Requests:**
    *   [Issue #6676](https://github.com/verl-project/verl Issue #6676): Request for student-top-k renormalized reverse-KL Online Policy Distillation (OPD) formulation.

### 4. Key PR Progress
*   **Backend & Memory Optimizations:**
    *   [PR #6738](https://github.com/verl-project/verl PR #6738): Fixes the SGLang weight sync OOM by skipping redundant `clone()` operations in `get_named_tensor_buckets`.
    *   [PR #6735](https://github.com/verl-project/verl PR #6735): Caps micro-batch tokens at `max_token_len` to prevent OOMs caused by Karmarkar-Karp batching variance.
*   **Hardware & Infrastructure (Ascend / vLLM):**
    *   [PR #6678](https://github.com/verl-project/verl PR #6678) & [PR #6732](https://github.com/verl-project/verl PR #6732): Successfully enable vLLM Pipeline Parallel (PP) on Ascend NPUs via `engine_kwargs` and fix MindSpeed repatch config issues.
    *   [PR #6728](https://github.com/verl-project/verl PR #6728) [CLOSED]: Updates `cuda_graph_capture_sizes` logic for vLLM 0.11.1+ breaking changes.
    *   [PR #6730](https://github.com/verl-project/verl PR #6730): Bumps TensorRT-LLM Docker image to 1.3.0rc15, transitioning Megatron-LM to pinned PyPI packages.
*   **Algorithm & Model Enhancements:**
    *   [PR #6737](https://github.com/verl-project/verl PR #6737): Wires fused top-K distillation outputs via the VeOmni fused-kernel path.
    *   [PR #6736](https://github.com/verl-project/verl PR #6736): Adds off-policy metrics and optimizes replay buffer sampling to prioritize stale data.
    *   [PR #6572](https://github.com/verl-project/verl PR #6572): Implements full bitwise-aligned determinism for vLLM rollout + reward models.
    *   [PR #6689](https://github.com/verl-project/verl PR #6689) [DRAFT]: Integrates prefix-tree MAGI attention for shared-prefix deduplication in SFT/GRPO.
    *   [PR #6670](https://github.com/verl-project/verl PR #6670): Conditionally enables Tower Connector LoRA to allow RL fine-tuning of VLM vision components.

### 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) push past hundreds of billions of parameters (especially MoE architectures like Qwen3.5-397B), Reinforcement Learning frameworks face massive distributed systems bottlenecks. `verl` is establishing itself as a critical open-source hub for production-level RLHF/GRPO by solving exact pain points visible in today's digest:
1.  **Rollout-Training Overlap:** By aggressively optimizing actor-to-rollout weight synchronization memory leaks (SGLang/Megatron-bridge) and enabling fully asynchronous training metrics.
2.  **Hardware Agnosticism:** Moving beyond purely NVIDIA ecosystems by doing the heavy lifting to support vLLM pipeline parallelism on Ascend NPUs and Intel XPUs.
3.  **Next-Gen RL Paradigms:** Natively supporting complex emerging needs like multimodal VLM RL (Gemma4/Qwen-VL), Online Policy Distillation (OPD), and deterministic inference, keeping the open-source community at par with frontier lab capabilities.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the RL open-source ecosystem daily digest for June 16, 2026.

### 1. Today's Highlights
Activity in the last 24 hours focused heavily on infrastructure optimization and training stability for GRPO (Group Relative Policy Optimization). The community merged crucial patches to standardize generation hyperparameters and improve hardware accessibility for RLHF workloads. No new releases or issues were reported today.

### 2. Releases
*   **None:** No new version tags or releases were published in the last 24 hours.

### 3. Important Issues
*   **None:** No new or updated issues were filed in the last 24 hours. 

### 4. Key PR Progress
Three pull requests saw activity, highlighting a focus on environment maintenance and RL compute efficiency:

*   **[#1725](https://github.com/allenai/open-instruct/pull/1725) [CLOSED]** - **Change default temperature to 1.0** by `mnoukhov`
    *   *Analysis:* Shifts the default generation temperature from `0.7` to `1.0`, establishing `StreamingConfig.temperature` in `data_loader.py` as the single source of truth. In RL fine-tuning, generation temperature directly impacts policy exploration and on-policy rollout variance. Defaulting to `1.0` aligns the codebase with standard practices for robust GRPO exploration.
*   **[#1723](https://github.com/allenai/open-instruct/pull/1723) [CLOSED]** - **Bump OLMo-core to latest main commit** by `mnoukhov`
    *   *Analysis:* Updates the `ai2-olmo-core` git dependency to commit `9aa3280f`. Keeping the underlying model architectures and training loops synchronized with OLMo's latest core library is critical for maintaining compatibility with state-of-the-art open-source model architectures.
*   **[#1654](https://github.com/allenai/open-instruct/pull/1654) [OPEN]** - **Add use_cpu_adam CLI toggle and offload validation for GRPO** by `Bhavyashah20`
    *   *Analysis:* Addresses a major hardware bottleneck in RL training. Running GRPO on 7B+ models typically demands 40–80 GB of VRAM. This PR introduces a CLI toggle for `DeepSpeedCPUAdam`, finally allowing researchers to offload the optimizer states to the CPU without hacking the source code. This is a vital update for democratizing RLHF/GRPO research for labs with constrained compute budgets.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and GRPO become the default paradigms for aligning Large Language Models, the barrier to entry remains exceptionally high due to compute costs. Open Instruct acts as a bridge between raw research and accessible implementation. 

Today's updates perfectly illustrate the project's value: while PR #1725 ensures that exploration parameters (temperature) adhere to theoretical RL best practices, PR #1654 tackles the physical limitations of hardware. By enabling native CPU-offloading for Adam states, Open Instruct is actively lowering the VRAM floor, allowing independent researchers and smaller academic labs to train 7B-scale RL models on consumer-grade hardware.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# 📊 CleanRL Daily Digest: 2026-06-16

Here is the daily analytical breakdown of the CleanRL (`vwxyzjn/cleanrl`) ecosystem activity.

### 1. Today's Highlights
Activity in the CleanRL repository over the last 24 hours has been minimal but notable. No new issues were reported, and no new releases were published. The only recorded activity is the administrative or delayed update/closure of a long-standing Pull Request related to hierarchical RL. 

### 2. Releases
**None.** 
There have been 0 new releases in the last 24 hours. 

### 3. Important Issues
**None.** 
There are 0 active or updated issues to report today. The issue tracker remains quiet.

### 4. Key PR Progress
*   **[#278] [CLOSED] Algorithm: Option Critic methods** 
    *   **Author:** DavidSlayback
    *   **Timeline:** Originally created on 2022-09-27 and updated yesterday (2026-06-15).
    *   **Summary:** This PR was an ambitious attempt to implement the "option-critic" family of hierarchical reinforcement learning algorithms into the CleanRL framework. Having been closed after a multi-year hiatus, this indicates a cleanup of stale backlog items. It suggests that while hierarchical RL (HRL) remains an area of interest for contributors, maintaining strict, single-file algorithmic consistency for complex HRL architectures like Option-Critic remains a challenge for the repository's core scope.
    *   **Link:** [vwxyzxyzjn/cleanrl PR #278](https://github.com/vwxyzjn/cleanrl/pull/278)

### 5. Why This Project Matters in Today's RL Landscape
CleanRL remains a cornerstone of the open-source Reinforcement Learning ecosystem because it provides high-quality, single-file implementations of complex RL algorithms. In an era where RL libraries (e.g., Ray RLlib, Stable-Baselines3) are becoming increasingly abstracted, modularized, and heavily engineered, CleanRL serves as a vital educational and research tool. By stripping away deep class hierarchies, it allows researchers and students to clearly inspect the exact tensor operations, network updates, and hyperparameter handling of algorithms like PPO, SAC, and DQN. The difficulty of integrating complex paradigms like Option-Critic (seen in PR #278) highlights CleanRL's strict adherence to simplicity—ensuring that the library remains accessible and transparent rather than bloated.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

Here is the RL Ecosystem Daily Digest for **2026-06-16**.

### 1. Today's Highlights
*   **Algorithm Refinement:** Active development continues on Soft Actor-Critic (SAC) with a work-in-progress PR focusing heavily on replay buffer correctness and observation normalization.
*   **Deployment & Safety Boundaries:** A highly conceptual discussion is ongoing regarding how trained policies interact with safety manifests and capability boundaries at deployment time.
*   **Ecosystem Status:** No new releases in the last 24 hours. Repository activity is currently focused on core algorithmic maintenance and deployment integration.

### 2. Releases
*   **None** (No new releases in the last 24 hours).

### 3. Important Issues
*   **[#352](https://github.com/Denys88/rl_games/issues/352) [OPEN] URML: Could a trained policy carry its capability envelope? a boundary check**
    *   **Author:** idoco2003 (Updated: 2026-06-15 | 👍: 0 | Comments: 3)
    *   **Summary:** This issue bridges RL training with deployment safety. The author introduces URML (Apache-2.0), a language for describing robot intent that validates requests against a safety envelope. The discussion focuses on whether policies trained in `rl_games` (specifically for Isaac-based locomotion/manipulation) can inherently encode or carry their capability boundaries to ensure safe dispatching in real-world robotics applications. 

### 4. Key PR Progress
*   **[#356](https://github.com/Denys88/rl_games/pull/356) [OPEN] WIP: SAC fixes and improvements**
    *   **Author:** ViktorM (Updated: 2026-06-15)
    *   **Summary:** A crucial maintenance PR for the SAC algorithm. The proposed fixes address subtle but high-impact bugs in off-policy reinforcement learning:
        *   **Replay Correctness:** Properly handles next-step-autoreset environments by skipping ignored action rows, storing true final observations at truncation, and adding a `truncated` column to ensure correct bootstrapping (`done = terminated`).
        *   **Normalization:** Fixes a bug to ensure observation normalization updates exactly once per fresh environment frame, preventing running statistics drift.

### 5. Why This Project Matters in Today's RL Landscape
`rl_games` remains a cornerstone of the modern RL open-source ecosystem, particularly for high-performance, GPU-accelerated simulation environments like NVIDIA Isaac. 

Today's updates highlight the project's dual role in the current RL landscape:
1.  **Rigorous Core Mechanics:** PR #356 demonstrates the ongoing, meticulous work required to align RL libraries with modern theoretical standards (e.g., handling the `terminated` vs. `truncated` distinction introduced in the Gym/Gymnasium API), which is vital for stable off-policy training in continuous control.
2.  **Sim-to-Real Bridge:** Issue #352 shows how `rl_games` acts as a primary training ground for real-world robotics. As the ecosystem matures, the focus is shifting from merely *training* policies to safely *deploying* them, making the integration of safety manifests and capability boundaries a critical frontier for applied RL.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-06-16 | **Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
Activity in the Gymnasium repository over the past 24 hours has been singularly focused on documentation. With zero new issues, zero closed issues, and no new releases, the ecosystem is experiencing a quiet period. The sole update is a continued push to expand user-facing tutorials for physics-based simulations. 

### 2. Releases
*   **No new releases.** The library remains on its current stable version.

### 3. Important Issues
*   **None.** There were 0 issues updated, opened, or closed in the last 24 hours, indicating a period of high stability with no active user-reported bugs or feature requests requiring immediate triage.

### 4. Key PR Progress
*   **[PR #1584](https://github.com/Farama-Foundation/Gymnasium/pull/1584) [OPEN]**
    *   **Title:** `docs: add MuJoCo parameter customization tutorial`
    *   **Author:** Lonny154
    *   **Progress:** Originally opened on May 22, 2026, this PR saw activity yesterday (June 15). It introduces a beginner-friendly tutorial for the MuJoCo continuous control environments. 
    *   **Technical Focus:** The PR demonstrates how to modify environment dynamics via `gym.make` kwargs. Using `HalfCheetah-v5` as the baseline, it provides a concrete walkthrough on tuning reward components (specifically adjusting `ctrl_cost_weight`) while keeping state initialization consistent via fixed seeds. 

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium serves as the foundational API standard for the reinforcement learning ecosystem. While the library's core API is highly mature—evidenced by periods of zero active bug reports—the ecosystem's value is actively bolstered by community contributions like PR #1584. 

In today's RL landscape, MuJoCo remains a critical benchmark for continuous control algorithms. By explicitly documenting how to utilize `gym.make` kwargs to alter environment parameters (such as control costs), the project lowers the barrier to entry for researchers conducting hyperparameter sensitivity analyses, reward shaping experiments, and curriculum learning. Gymnasium's stability and expanding educational resources allow researchers to focus on algorithmic design rather than environment-wrapping boilerplate.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# 🧠 RL Ecosystem Daily Digest: Stable Baselines3
**Date:** 2026-06-16
**Repository:** [DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3)

---

### 1. Today's Highlights
Stable Baselines3 (SB3) rolls out a significant infrastructure and dependency update with the release of **v2.9.0**. The project successfully merged and closed three PRs, focusing primarily on streamlining the release pipeline and trimming unnecessary core dependencies to keep the library lightweight.

### 2. Releases
- **[v2.9.0](https://github.com/DLR-RM/stable-baselines3/releases)** 
  - **Dependency Updates:** Officially added support for `gymnasium 1.3.0` and enforced `torch>=2.8`.
  - **Breaking Changes:** Relaxed the Gymnasium version range to `<2.0` (previously `<1.3.0`). More importantly, `pandas` and `matplotlib` have been moved out of core dependencies. They are now optional and grouped under `stable-baselines3[extra]` (required only for plotting and result loading).

### 3. Important Issues
- **None updated in the last 24 hours.** 
With 0 issues created or updated, the maintainers have successfully cleared the immediate backlog, allowing focus to shift entirely to this major version release.

### 4. Key PR Progress
All three updated PRs were closed in preparation for the v2.9.0 launch, led largely by maintainer `araffin`:
- **[#2262](https://github.com/DLR-RM/stable-baselines3/pull/2262) [CLOSED]:** The primary PR for cutting the `Release v2.9.0` tag.
- **[#2261](https://github.com/DLR-RM/stable-baselines3/pull/2261) [CLOSED]:** Added a PyPi auto-publish GitHub Actions workflow. This is a crucial DevOps upgrade that ensures secure, automated package delivery to PyPi moving forward.
- **[#2260](https://github.com/DLR-RM/stable-baselines3/pull/2260) [CLOSED]:** A minor maintenance PR by contributor `kakakakulala`, finalized ahead of the release.

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the gold standard for reliable, off-the-shelf Deep Reinforcement Learning algorithms. Today's v2.9.0 release highlights a critical industry trend: **ecosystem modernization and dependency minimization**. 

By making `pandas` and `matplotlib` optional and supporting the latest `Gymnasium 1.3.0` API, SB3 drastically reduces its footprint for headless production environments, serverless deployments, and Docker containers. Furthermore, the shift to automated PyPi publishing via GitHub Actions ensures that future updates will reach developers faster, solidifying SB3's role as the dependable bridge between cutting-edge RL research and applied production AI.

</details>