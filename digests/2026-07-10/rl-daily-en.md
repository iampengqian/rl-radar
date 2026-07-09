# RL Open Source Daily Digest 2026-07-10

> Generated: 2026-07-09 22:27 UTC | Projects covered: 15

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
The open-source RL ecosystem on 2026-07-10 is sharply bifurcated between LLM-scale post-training infrastructure and traditional control/agent API standards. The bulk of high-impact engineering momentum is concentrated in LLM/RLHF frameworks (verl, TRL, OpenRLHF, AReaL, slime), which are aggressively tackling distributed orchestration, memory bottlenecks, and multi-turn agentic workflows. Meanwhile, classic RL environment libraries (Gymnasium, PettingZoo) and control algorithms (rl_games) are focused on API standardization, hardware optimization, and maintainability. 

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 82 | 28 | 0 | Heavy infrastructure push; Q3 roadmap targeting low-precision, Ascend, and 300B+ scale. |
| **TRL** | 3 | 9 | 1 (`v1.8.0`) | KTO graduation; async RL, tool-calling distillation, and Trainium memory optimizations. |
| **PettingZoo** | 2 | 7 | 0 | API normalization, visual overhauls, and pruning of low-adoption environments. |
| **OpenRLHF** | 2 | 3 | 0 | Hardening distributed stability; fixing race conditions and ZeRO-3 hybrid model bugs. |
| **Gymnasium** | 3 | 10 | 0 | Fixing CUDA bloat and refining type systems for modern software engineering standards. |
| **AReaL** | 1 | 5 | 0 | VLM scaling, GRPO normalization fixes, and pivoting to HTTP-based Ray scheduling. |
| **slime** | 1 | 5 | 0 | Stabilizing multi-turn agent rollouts and patching MiniMax-M2 checkpoint conversions. |
| **ROCK** | 0 | 3 | 1 (`v1.10.0`) | Enterprise readiness; decoupling metadata and integrating OpenSandbox backend. |
| **rl_games** | 0 | 1 | 0 | Core performance overhaul; adopting `bf16` and `torch.compile` for SAC/PPO. |
| **torchtune** | 1 | 1 | 0 | Tokenizer precision; ensuring EOS token boundaries for RL trajectory generation. |
| *Others* | *0* | *0* | *0* | *CleanRL, Open Instruct, ROLL, Stable Baselines3, Tianshou reported no activity.* |

## Shared Research & Engineering Directions

**Research & Algorithm Signals**
*   **Multi-Turn & Agentic RL:** Frameworks are shifting from single-turn prompt-response to complex tool-using agents. TRL is implementing message-level linear trajectories, slime is deploying a turn-node `TrajectoryManager` for coding agents, and ROCK is integrating elastic sandboxes for tool-calling environments.
*   **Algorithmic Integrity in GRPO:** Silent corruption of advantage normalization in GRPO is a cross-project pain point. AReaL and OpenRLHF are actively fixing bugs where partial rollouts or `group_size > 1` corrupt the advantage signal, highlighting the fragility of online RLHF at scale.
*   **Knowledge Distillation:** TRL is expanding `GOLDTrainer` for multi-turn sequence knowledge distillation, signaling a reliance on synthetic data and teacher models to bootstrap agentic behaviors.

**Engineering & Infrastructure Signals**
*   **Memory & Weight Synchronization:** Disaggregating training and inference engines requires massive weight transfers. verl reduced sync traffic by >99% via NCCL delta syncing, and TRL implemented NCCL syncing for LoRA A/B parameters directly to vLLM. 
*   **Distributed Concurrency & State Management:** Coordinating rollouts and weight updates is a bottleneck. OpenRLHF replaced `asyncio.Event` with a Condition-based state machine to prevent dirty weight writes, while AReaL migrated to an HTTP-based Ray scheduler for fault-tolerant RPC workers.
*   **Hardware Agility & Low-Precision:** Ecosystems are diversifying away from standard NVIDIA FP16. verl is adding experimental NVFP4/MXFP8 and Huawei Ascend support, TRL is optimizing for AWS Trainium (Neuron), and rl_games defaulted to `bf16` to eliminate `GradScaler` overhead.

## Differentiation Analysis
*   **LLM Post-Training Frameworks (verl, TRL, OpenRLHF, AReaL, slime):** Differentiated by their distributed backend of choice and abstraction level. verl focuses on Ray-based hardware agnosticism and massive scale (300B+); TRL targets accessible HuggingFace-native integrations; OpenRLHF and slime focus heavily on DeepSpeed/Megatron bridging; AReaL is carving a niche in VLM and online RLVR scaling.
*   **RL Environments & APIs (Gymnasium, PettingZoo, ROCK):** Differentiated by interaction paradigms. Gymnasium standardizes single-agent APIs, PettingZoo handles multi-agent AEC/parallel paradigms, and ROCK operates a layer above, providing the data and sandbox infrastructure to run these environments at enterprise scale.
*   **Control & Continuous RL (rl_games, torchtune):** Focused on low-level hardware optimization rather than LLM orchestration. rl_games squeezes GPU throughput via `torch.compile` for physics simulators, while torchtune ensures the tokenization boundaries required for any upstream RL rollout loop.

## Community Momentum & Maturity
*   **Scaling through Stabilization:** High-activity LLM projects (verl, OpenRLHF, AReaL) are transitioning from feature explosion to infrastructure hardening. Their communities are heavily engaged in debugging deep systems issues—like MoE checkpoint bottlenecks, ZeRO-3 gradient flows, and rollout timeouts—indicating production-level deployment.
*   **Ecosystem Pruning and Polish:** Farama Foundation projects (Gymnasium, PettingZoo) show maturity through subtraction. PettingZoo sunsetting low-adoption environments (TicTacToe, Gin Rummy) and Gymnasium removing accidental CUDA bloat reflect a shift toward lean, maintainable core libraries.
*   **Targeted Incentivization:** PettingZoo’s $200 bounty for a KAZ policy demonstrates active community funneling to improve baseline documentation, a contrast to the corporate-driven, top-down PR dumps seen in larger LLM frameworks.

## Trend Signals
*   **Hybrid Engine Decoupling:** The tight coupling of training and inference engines is breaking. Projects are heavily investing in making vLLM/sglang sleep/wake efficiently (verl) or sync only delta/LoRA weights (TRL) to make massive model RL economically viable.
*   **Hardware Fragmentation:** The NVIDIA monopoly on RL training is eroding. Active integration of Huawei Ascend (verl, AReaL) and AWS Trainium (TRL) signals a strategic push for hardware-agnostic schedulers to mitigate supply chain risks.
*   **Convergence of RL and Traditional SE:** RL libraries are adopting strict software engineering practices. Generic type hinting (Gymnasium), explicit state machines (OpenRLHF), and unified DB-backed metadata (ROCK) show the field moving from research scripts to resilient, typed distributed systems.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# ROCK (alibaba/ROCK) RL Ecosystem Daily Digest
**Date:** 2026-07-10

## 1. Today's Highlights
- **New Release shipped:** ROCK `v1.10.0` is now available, introducing sandbox image registry mirror lookups and unified archiving configurations.
- **Infrastructure scaling:** Active development focus is heavily skewed towards backend stability and execution environments, specifically decoupling metadata management and integrating a new OpenSandbox backend.
- **Bug resolutions:** Critical fixes were merged to address large file handling failures in the TypeScript SDK.

## 2. Releases
### [v1.10.0](https://github.com/alibaba/ROCK/releases/tag/v1.10.0)
The latest stable release focuses on environment bootstrapping and operational consistency.
- **Sandbox Infrastructure:** Added image registry mirror lookup for sandbox startup ([PR #1082](https://github.com/alibaba/ROCK/pull/1082)), significantly improving environment provisioning speeds.
- **Maintenance:** Unified the `archive_prefix` default to `rock-archives/` and bumped previous version baselines.

## 3. Important Issues
- **No active issues:** There are 0 open or updated issues in the last 24 hours. This indicates a period of high stability for end-users or a current development focus entirely on feature expansion and PR reviews rather than bug triage.

## 4. Key PR Progress
Three significant PRs saw activity today, highlighting a major push toward robust backend infrastructure:

- **[PR #1171: feat(datasets): add DatasetMetadataClient for pure DB-backed metadata management](https://github.com/alibaba/ROCK/pull/1171)**
  - *Author:* jake11-oho
  - *Impact:* Completely decouples dataset metadata from OSS file operations by introducing a pure DB-backed client. It adds PostgreSQL/SQLite ORM models for datasets, permissions, and audit events, forming a robust SDK for RL data pipelines.
- **[PR #1203: feat(operator): add OpenSandboxOperator lifecycle backend (Phase 1)](https://github.com/alibaba/ROCK/pull/1203)**
  - *Author:* zpzjzj
  - *Impact:* The first phase of integrating OpenSandbox as a ROCK backend. This delegates sandbox lifecycle management to the OpenSandbox Python SDK, paving the way for more elastic RL compute resource management.
- **[PR #1224: fix(ts-sdk): fix nohup process completion detection and OSS download path](https://github.com/alibaba/ROCK/pull/1224)**
  - *Author:* xdlkc
  - *Impact:* Resolves critical bottlenecks in the TS SDK where large dataset/model downloads from OSS were failing due to process completion misinterpretations and service timeouts.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning scales from single-node experiments to distributed, agent-driven workflows, **infrastructure orchestration** becomes the primary bottleneck. ROCK continues to prove its value by solving the hardest systems challenges in RL:

1. **Compute Elasticity:** The integration of OpenSandbox (PR #1203) reflects a broader industry shift toward decoupled, scalable execution environments. RL agents require safe, isolated, and elastic sandboxes to run tool-calling tasks and environment interactions.
2. **Data & Metadata Scalability:** RL relies on massive, continuously updated datasets (trajectories, model weights). By migrating to a pure DB-backed metadata system (PR #1171), ROCK is building the foundation for low-latency, highly concurrent dataset querying required by modern distributed RL trainers. 
3. **Enterprise Readiness:** Enhancements like registry mirror lookups and robust SDK file transfers demonstrate maturity, making ROCK a highly viable choice for production-level RL pipelines and agentic frameworks.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for **2026-07-10**. 

### 1. Today's Highlights
* **MiniMax-M2 Integration Fixed:** A critical bottleneck preventing the conversion of MiniMax-M2 HuggingFace checkpoints to `torch_dist` format has been addressed via a Megatron config patch.
* **Agent RL Architectural Overhaul:** A massive refactor of the coding-agent RL rollout subsystem (turn-node `TrajectoryManager` + pluggable harness) was closed, indicating a stabilization of slime's multi-turn agent training backend.
* **Doc & Metric Resilience:** Maintainers are actively cleaning up documentation for PPO/Critic configurations and merging fixes for edge cases in multi-turn/OPD reward computations.

### 2. Releases
* **No new releases** pushed in the last 24 hours. 

### 3. Important Issues
* **[THUDM/slime Issue #2129](https://github.com/THUDM/slime/issues/2129)** `[BUG]`
  * **Context:** Users encountered crashes when trying to convert MiniMax M2.7's HF checkpoint to `torch_dist` format. 
  * **Impact:** Blocking the training/fine-tuning of the highly anticipated MiniMax-M2 model within the slime distributed framework. A community fix has already been submitted (see PR #2190).

### 4. Key PR Progress
A total of 5 PRs saw activity today, reflecting active multi-turn system stabilization:
* **[PR #2190](https://github.com/THUDM/slime/pull/2190)** `fix: add rotary_percent to Megatron TransformerConfig patch` `[OPEN]`
  * Directly resolves Issue #2129. It patches the Megatron config so that the `rotary_percent` keyword argument is recognized during HF-to-`torch_dist` conversions for MiniMax-M2.
* **[PR #2005](https://github.com/THUDM/slime/pull/2005)** `[coding-agent-rl] Refactor coding-agent RL` `[CLOSED]`
  * A massive structural rewrite (~4.9k additions, 3.3k deletions) of the agent rollout system. It introduces a turn-node `TrajectoryManager` and a pluggable harness layer. Closing this PR indicates that slime's infrastructure for complex, multi-step coding agents is solidifying.
* **[PR #2157](https://github.com/THUDM/slime/pull/2157)** `fix: handle none/dict rewards` `[OPEN]`
  * Improves training stability for OPD (Offline Policy Distillation) and multi-turn rollouts by gracefully handling aborted samples where `sample.reward` returns `None` instead of a numeric value.
* **[PR #2189](https://github.com/THUDM/slime/pull/2189)** `[Doc] Clarify PPO/Critic docs` `[OPEN]`
  * Cleans up documentation regarding shared train placement behavior and updates stale `--critic-*` CLI arguments to reflect modern `--megatron-config-path` role overrides.
* **[PR #2148](https://github.com/THUDM/slime/pull/2148)** `support stale-aware data source` `[CLOSED]`

### 5. Why This Project Matters in Today's RL Landscape
As the open-source community pushes toward agentic workflows and reasoning models (post-Llama-3/OpenAI o1 era), frameworks must handle complex multi-turn trajectories and non-standard reward signals. **THUDM/slime** is establishing itself as a critical infrastructure layer by bridging **Megatron-LM's distributed training efficiency** with the messy realities of modern LLM RL. 

Today's updates perfectly highlight this value: PR #2005's closure shows a major commitment to robust **coding-agent RL harnesses**, while PR #2157 and Issue #2129 demonstrate the project's ongoing effort to support bleeding-edge architectures (like MiniMax-M2) and unstable edge cases (aborted multi-turn rollouts) that frequently break standard PPO/RLHF pipelines.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

Here is the daily reinforcement learning ecosystem digest for AReaL. 

# 🧠 AReaL RL Ecosystem Daily Digest
**Date:** 2026-07-10
**Repository:** [areal-project/AReaL](https://github.com/areal-project/AReaL)

---

### 1. Today's Highlights
Activity in the last 24 hours was solely focused on engineering maintenance and architectural improvements, with **5 active PRs** and **0 new releases**. The core themes of the day are scaling Vision-Language Models (VLMs), fixing critical GRPO advantage normalization bugs, and overhauling distributed scheduling infrastructure. Several long-standing PRs were marked as `[stale]`, indicating a potential need for contributor follow-ups.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   🐛 **[BUG] Partial rollout groups silently corrupt GRPO group normalization** ([Issue #1419](https://github.com/areal-project/AReaL/issues/1419))
    *   **Status:** Open (Stale)
    *   **Analysis:** Originally reported on 2026-06-16, this is a critical framework-level numerical bug affecting GRPO. The report indicates that partial rollout groups silently corrupt group normalization. The author successfully reproduced this deterministically on CPU without relying on Docker, suggesting a deep logic flaw rather than an environment-specific artifact. 

### 4. Key PR Progress
*   ⚙️ **Infra & Scheduling**
    *   **[PR #1441](https://github.com/areal-project/AReaL/pull/1441): feat(infra): add HTTP-based Ray Scheduler.** Replaces the Ray-native scheduler path with subprocess-managed RPC workers using HTTP tensor/data serialization. This enables proxy working and aligns Ray scheduling behavior with local/Slurm setups.
    *   **[PR #1396](https://github.com/areal-project/AReaL/pull/1396): fix: Prevent workers from applying dp-scaled staleness...** (Stale) Addresses rollout hanging issues caused by zero local capacity by setting the default `train_data_parallel_size` to 1 for workers, fixing a local `StalenessManager` bottleneck.
*   🧮 **RL Algorithm & Workflow Fixes**
    *   **[PR #1392](https://github.com/areal-project/AReaL/pull/1392): fix: add group_id to StartSessionRequest for online GRPO session grouping.** Fixes a major silent failure in online GRPO where `group_size > 1` caused unrelated user conversations to merge, completely breaking advantage normalization. 
*   🖼️ **Vision-Language Model (VLM) Support**
    *   **[PR #965](https://github.com/areal-project/AReaL/pull/965): add vlm tensor-parallelism with efficient loading.** (Stale) Modifies the FSDP engine to prevent out-of-memory (OOM) errors when initializing massive dense models (e.g., Qwen3-VL-32B) and provides proper VLLM environment variables for tensor parallelism.
    *   **[PR #962](https://github.com/areal-project/AReaL/pull/962): Ascend Branch VLM Bug.** (Stale) Fixes a critical import error (`str reward` in `vision_rlvr.py`) that currently breaks VLM training on Huawei Ascend NPUs.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source AI community shifts aggressively toward Reasoning models (RLVR) and Vision-Language Models (VLMs), training frameworks are facing severe scaling and stability bottlenecks. Today's digest highlights exactly these growing pains:

1.  **Algorithm Integrity:** The silent corruption of GRPO advantage estimation (seen in [Issue #1419](https://github.com/areal-project/AReaL/issues/1419) and [PR #1392](https://github.com/areal-project/AReaL/pull/1392)) is a notorious issue in modern LLM alignment. AReaL is actively working to ensure mathematical correctness when batching online rollout sessions.
2.  **Hardware Agility & Multi-Modality:** Support for massive models like Qwen3-VL-32B ([PR #965](https://github.com/areal-project/AReaL/pull/965)) and compatibility with alternative hardware ecosystems like Huawei Ascend ([PR #962](https://github.com/areal-project/AReaL/pull/962)) demonstrate AReaL's commitment to hardware-agnostic, multi-modal scaling.
3.  **Distributed Orchestration:** The pivot toward an HTTP-based Ray Scheduler ([PR #1441](https://github.com/areal-project/AReaL/pull/1441)) reflects a broader industry trend of abstracting distributed execution layers. By moving to subprocess-managed RPC workers, AReaL is prioritizing fault tolerance and flexible serialization for massive distributed RL workloads.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL daily digest for the TRL repository.

# 🥑 TRL Daily Digest: 2026-07-10

## 1. Today's Highlights
- **Major Release:** TRL `v1.8.0` drops, officially graduating `KTOTrainer` from `trl.experimental` to the stable top-level API, unifying its structure with DPO/GRPO/SFT.
- **Async & Distributed RL Push:** Significant momentum in asynchronous RL and PEFT integration, highlighted by new LoRA support for `AsyncGRPO` via NCCL syncing.
- **Ecosystem Bug Squashing:** Rapid resolutions for DPO/KTO caching errors and FSDP/QLoRA mixed-dtype crashes, alongside memory optimizations for AWS Trainium (Neuron) cores.

## 2. Releases
- **[v1.8.0](https://github.com/huggingface/trl/pull/6346)**
  - **KTO is now stable:** After extensive alignment work, `KTOTrainer` graduates to the main `trl` package. Documentation and tests have been migrated to match the stable standard set by DPO and GRPO ([PR #6345](https://github.com/huggingface/trl/pull/6345)). 

## 3. Important Issues
- **[Issue #6291](https://github.com/huggingface/trl/issues/6291) [OPEN]:** `DPOTrainer` throws a `FileNotFoundError` when `precompute_ref_log_probs=True` due to a cache path mismatch in `dataset.map()`. 
- **[Issue #5783](https://github.com/huggingface/trl/issues/5783) [CLOSED]:** *Critical behavior fix.* `GRPOTrainer` was silently executing near-greedy decoding (temperature=1.0) on Qwen2.5 models using `transformers >= 4.50.0`, resulting in degenerate advantage signals (`std(R) ≈ 0`).
- **[Issue #3214](https://github.com/huggingface/trl/issues/3214) [CLOSED]:** Resolved a persistent connection failure with the vLLM server during multi-epoch `GRPOTrainer` runs.

## 4. Key PR Progress
### Asynchronous RL & Agentic Tooling
- **[PR #6344](https://github.com/huggingface/trl/pull/6344) [OPEN]:** Adds LoRA support to `AsyncGRPO`, enabling direct NCCL syncing of LoRA A/B parameters to vLLM instead of full-weight synchronization.
- **[PR #6250](https://github.com/huggingface/trl/pull/6250) [OPEN]:** Implements message-level rollouts with linear trajectories for `AsyncGRPO`, retokenizing multi-turn conversations on the fly to ensure token-prefix alignment.
- **[PR #6194](https://github.com/huggingface/trl/pull/6194) [OPEN]:** Fixes broken OpenEnv examples caused by its new async-first client API (`EnvClient.reset()`/`.step()`).

### Distillation & Memory Optimization
- **[PR #6328](https://github.com/huggingface/trl/pull/6328) & [PR #5725](https://github.com/huggingface/trl/pull/5725) [OPEN]:** Greatly expand the `GOLDTrainer` by adding multi-turn tool-calling support (for same-family tokenizer distillation) and actually wiring up the `seq_kd` (Sequence Knowledge Distillation) flag.
- **[PR #6314](https://github.com/huggingface/trl/pull/6314) [CLOSED] & [PR #6260](https://github.com/huggingface/trl/pull/6260) [OPEN]:** Unified the chunked Cross-Entropy (CE) loss implementation (`chunked_nll`) to be XLA-safe. This skips logits materialization for both GPUs and AWS Trainium (Neuron) cores, heavily reducing OOM errors.

### Crucial Bug Fixes
- **[PR #6348](https://github.com/huggingface/trl/pull/6348) [CLOSED]:** Fixes the `FileNotFoundError` in DPO/KTO reference log-prob precomputation (Issue #6291).
- **[PR #6343](https://github.com/huggingface/trl/pull/6343) [OPEN]:** Resolves a mixed-dtype crash when combining QLoRA (4-bit) with FSDP1 in experimental PEFT trainers (SDPO/SDFT/online_dpo).
- **[PR #6330](https://github.com/huggingface/trl/pull/6330) [OPEN]:** Fixes `cast_lm_head_to_fp32` crashing under sharded mixed-precision environments (FSDP2 / DeepSpeed ZeRO-3).

## 5. Why This Project Matters in Today's RL Landscape
As the LLM landscape shifts heavily toward inference-time compute, multi-turn agentic RL, and synthetic data distillation, TRL is rapidly adapting its core architecture. The promotion of KTO to a stable API indicates maturation in offline preference alignment, while the heavy ongoing work in `AsyncGRPO`, OpenEnv integration, and multi-turn tool-calling distillation (`GOLDTrainer`) proves TRL is positioning itself as the default framework for training next-generation, tool-using RL agents. Furthermore, systematic fixes for memory bottlenecks (FSDP, QLoRA, chunked CE) and hardware support (Neuron/Trainium) signal a strong push toward making state-of-the-art RL pipelines accessible and scalable for the broader open-source community.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL Ecosystem Daily Digest for OpenRLHF.

# 🧠 RL Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-07-10 | **Project:** [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

### 1. Today's Highlights
OpenRLHF is undergoing critical infrastructure hardening, specifically targeting distributed training stability. The past 24 hours feature a 1:1 mapping between high-priority open issues and submitted pull requests. The community is actively fixing race conditions in the `SignalActor` concurrency model and resolving a severe gradient computation bug affecting newer hybrid architecture LLMs (like Qwen3.5) under DeepSpeed ZeRO-3.

### 2. Releases
*   **No new releases** in the last 24 hours. The project's current efforts remain focused on merging bug fixes for distributed rollout and weight synchronization.

### 3. Important Issues
*   **[Concurrency] [Issue #1164](https://github.com/OpenRLHF/OpenRLHF/issues/1164): Fix SignalActor concurrency issues and refactor state management**
    *   **Context:** Points to a critical flaw where using `asyncio.Event` for mutual exclusion between trajectory generation and weight updates fails in distributed training, risking race conditions during weight syncing.
*   **[Model Compatibility] [Issue #1258](https://github.com/OpenRLHF/OpenRLHF/issues/1258): Qwen3.5-9B and above trained under ZeRO-3 have most weights frozen**
    *   **Context:** Highlights an unintended side effect of `set_z3_leaf_modules`. Designed to fix DeepSpeed ZeRO-3 prefetch failures in Qwen3.5's hybrid decoder (mixing `self_attn` and `linear_attn`), it inadvertently freezes weights by disrupting standard gradient flow.

### 4. Key PR Progress
*   **[Bugfix] [PR #1262](https://github.com/OpenRLHF/OpenRLHF/pull/1262): Fix SignalActor concurrency: replace asyncio.Event with Condition-based state machine** *(Open)*
    *   **Progress:** Directly addresses #1164. Replaces the standard `VLLMLock` with an `asyncio.Condition` coupled with an explicit `IDLE/GENERATOR/UPDATE_WEIGHT` state enum. This prevents dirty weight writes during concurrent rollouts and greatly enhances state observability for debugging.
*   **[Bugfix] [PR #1261](https://github.com/OpenRLHF/OpenRLHF/pull/1261): Fix Qwen3.5 ZeRO-3 frozen weights from set_z3_leaf_modules hybrid detection** *(Open)*
    *   **Progress:** Directly addresses #1258. Introduces a `detect_hybrid=False` parameter, successfully decoupling the necessary MoE leaf marking from the flawed hybrid decoder backward hooks that were stealing gradient computations under ZeRO-3.
*   **[Feature] [PR #1209](https://github.com/OpenRLHF/OpenRLHF/pull/1209): feat: add --from_scratch option to initialize model with random weights** *(Closed)*
    *   **Progress:** A previously open PR dating back to April 2026 aiming to allow pre-training from scratch via OpenRLHF's SFT pipeline has been closed, indicating a finalized decision on its implementation (whether merged or rejected). 

### 5. Why This Project Matters in Today's RL Landscape
In the current RLHF/RLAIF ecosystem, OpenRLHF serves as a vital, production-ready bridge between complex distributed training frameworks (DeepSpeed, Ray) and fast inference engines (vLLM). Today's updates perfectly illustrate its importance: as frontier models adopt non-standard architectures (e.g., Qwen3.5's hybrid attention) and distributed RL pipelines scale, race conditions during weight syncing and ZeRO-3 integration failures become major bottlenecks. By actively solving these low-level distributed computing and concurrency issues, OpenRLHF allows researchers to focus on algorithmic design rather than debugging DeepSpeed backward hooks.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# 📊 RL Open-Source Ecosystem Daily Digest: verl
**Date:** 2026-07-10
**Project:** [verl-project/verl](https://github.com/volcengine/verl) (formerly volcengine/verl)

---

### 1. Today's Highlights
verl experienced high community engagement today with 82 issues and 28 PRs updated. The spotlight is on the newly published [26Q3 Roadmap (#6985)](https://github.com/verl-project/verl/issues/6985), which outlines major architectural upgrades including next-generation low-precision (MXFP8/NVFP4) support. Significant engineering momentum is focused on memory optimization, disaggregated rollouts, and expanding hardware compatibility (notably Huawei Ascend and massive Qwen3.5 architectures).

### 2. Releases
No new releases were published in the last 24 hours. The project appears to be in a heavy development/iteration phase for Q3.

### 3. Important Issues
- **Roadmap Released ([#6985](https://github.com/verl-project/verl/issues/6985)):** The 26Q3 roadmap is live, teasing the deprecation of mbridge, new low-precision training modes, and polished mlite integration.
- **MoE Checkpoint Bottlenecks ([#2238](https://github.com/verl-project/verl/issues/2238)):** A highly discussed (21 comments) bug report highlights severe latency (36+ minutes) and `all_reduce` communication hangs when using `dist_checkpointing` with Qwen3 30B MoE models across 32 GPUs.
- **Rollout Timeout Agitations ([#2106](https://github.com/verl-project/verl/issues/2106) & [#2325](https://github.com/verl-project/verl/issues/2325)):** Users continue to report persistent Gloo/NCCL timeout errors (`Timed out waiting 1800000ms`) when coordinating Megatron+vLLM/sglang rollouts in large multi-node setups (e.g., 8 nodes / 64 H20 GPUs).
- **vLLM Memory Retention ([#2186](https://github.com/verl-project/verl/issues/2186)):** A known pain point where vLLM retains cached memory during long-reasoning GRPO, leading to OOM errors during the FSDP backward pass.

### 4. Key PR Progress
- **Architectural Overhauls:** PRs [#7000](https://github.com/verl-project/verl/pull/7000) and [#6999](https://github.com/verl-project/verl/pull/6999) remove the legacy `TransferQueue` runtime path and restore `RayPPOTrainer` as the default entry point, paving the way for the new "NeoProto" data-plane substrate.
- **Memory & Sync Optimization:** PR [#6974](https://github.com/verl-project/verl/pull/6974) introduces delta weight synchronization over NCCL for disaggregated rollouts, reducing weight-sync traffic by >99%. PR [#6991](https://github.com/verl-project/verl/pull/6991) optimizes vLLM sleep/wake cycles to release only KV cache memory while keeping rollout weights resident.
- **Low-Precision & Massive Scale:** 
  - [#6992](https://github.com/verl-project/verl/pull/6992) adds experimental W4A8 QAT simulation (NVFP4 weights, FP8 E4M3 activations) for FSDP/vLLM.
  - [#6473](https://github.com/verl-project/verl/pull/6473) implements DeepSeek V4 Flash GRPO support via Megatron-Bridge.
  - [#6982](https://github.com/verl-project/verl/pull/6982) & [#6994](https://github.com/verl-project/verl/pull/6994) introduce training scripts, Dockerfiles, and workarounds for the massive 397B parameter Qwen3.5 variant.
- **Hardware Ecosystem (Ascend):** Continued expansion of non-NVIDIA hardware support, with PRs [#6998](https://github.com/verl-project/verl/pull/6998), [#6973](https://github.com/verl-project/verl/pull/6973), and [#6680](https://github.com/verl-project/verl/pull/6680) adding Huawei Atlas A5 support, Ascend nightly tests for 35B models, and RL-Insight Grafana observability integrations.

### 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) push beyond standard supervised fine-tuning, post-training RL (like GRPO and DAPO) has become the defining mechanism for unlocking advanced reasoning. **verl** has established itself as a critical open-source infrastructure layer by solving the hardest engineering bottlenecks in modern RLHF: 
1. **Hybrid Engine Orchestration:** Seamlessly alternating between heavy training backends (FSDP/Megatron) and high-throughput inference engines (vLLM/sglang).
2. **Hardware Agnosticism:** Today's digest proves verl is uniquely positioned to unify the fragmented AI hardware landscape (NVIDIA vs. Ascend) under a single Ray-based scheduler.
3. **Scale and Efficiency:** With ongoing works targeting MoE checkpointing, FP8/quantization data-paths, and memory-efficient weight syncing for 300B+ parameter models, verl is providing the exact primitives needed to make long-context, multi-turn reasoning models economically viable to train.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

## 1. Today's Highlights
*   **Gemma Tokenizer Focus:** Today's single update centers entirely on resolving inference mode discrepancies in the Gemma tokenizer. 
*   **Community Resolution:** A long-standing, community-flagged bug ([Issue #2478](https://github.com/pytorch/torchtune/issues/2478)) from March 2025 has been addressed in a new Pull Request ([PR #2969](https://github.com/pytorch/torchtune/pull/2969)) just in time for the digest cutoff.

## 2. Releases
*   **None.** There have been 0 new releases in the last 24 hours. 

## 3. Important Issues
*   **[Issue #2478](https://github.com/pytorch/torchtune/issues/2478) - Add `add_end_token` to the Gemma Tokenizer [OPEN]**
    *   **Context:** Flagged as a `good first issue` and `community help wanted`, this bug highlights a feature gap between the Llama3 tokenizer and the Gemma tokenizer. The Gemma implementation was missing the ability to properly append End of Sequence (EOS) tokens during `tokenize_messages`, which breaks inference and generation boundaries.
    *   **Activity:** Updated on 2026-07-09, reflecting engagement ahead of the incoming PR fix.

## 4. Key PR Progress
*   **[PR #2969](https://github.com/pytorch/torchtune/pull/2969) - fix: respect Gemma tokenizer inference mode [OPEN]**
    *   **Context:** Authored by `ofeliacode`, this PR directly fixes Issue #2478. 
    *   **Technical Details:** While `GemmaTokenizer.tokenize_messages` theoretically supported omitting EOS (`add_eos=False`), the broader tokenizer wrapper was not respecting this during inference. This PR aligns the tokenizer's behavior with standard inference modes, ensuring correct sequence generation and preventing premature or missing sequence terminators.

## 5. Why This Project Matters in Today's RL Landscape
While torchtune is primarily a fine-tuning library, tokenizer behavior is a critical pipeline component for **Reinforcement Learning from Human Feedback (RLHF)** and **Online RL** workflows. 

In modern LLM-based RL, precise control over the `<eos>` token is non-negotiable. During rollout generation, the model must reliably emit an `<eos>` token to terminate an episode and trigger the reward calculation phase. If a tokenizer incorrectly truncates, omits, or hardcodes the `<eos>` token (as seen in the Gemma inference bug #2478), it leads to poorly formed trajectories, broken Advantage Actor-Critic (A2C) loops, and flawed reward signal propagation. By actively maintaining strict inference and tokenization standards across diverse model architectures (like Gemma and Llama3), torchtune ensures that upstream RL algorithms operate on mathematically sound, boundary-respecting data.

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

# 🤖 RL Ecosystem Daily Digest: 2026-07-10
**Project Focus:** [Denys88/rl_games](https://github.com/Denys88/rl_games)

### 1. Today's Highlights
*   **Zero Community Noise, High Core Value:** Activity over the last 24 hours consists entirely of active core development, with zero new issues and zero new releases. 
*   **Major Performance Overhaul:** A significant work-in-progress PR was introduced, focusing on maximizing hardware utilization via `torch.compile` and `bf16` mixed precision.

### 2. Releases
*   **No new releases** published in the last 24 hours. 

### 3. Important Issues
*   **None:** The issue tracker has remained clear over the past 24 hours, indicating either high deployment stability for current users or a shift toward direct PR-based development.

### 4. Key PR Progress
*   **[PR #360](https://github.com/Denys88/rl_games/pull/360) [WIP]: PPO hot-loop perf batch, scheduler/sigma fixes, MJLab integration improvements** by *ViktorM*
    *   **Performance Defaults:** Shifts to `bf16` mixed precision by default for capable GPUs. Because `bf16` shares `fp32`'s exponent range, the update path completely removes the need for `GradScaler` and loss scaling. Explicit opt-out remains available in the config.
    *   **SAC Speedup:** Applies `torch.compile` with `reduce-overhead` mode to SAC by default, targeting submodules and yielding observed wall-clock improvements of **+28% / +17%**.
    *   **Sim Integration:** Includes critical fixes for PPO schedulers/sigma and pushes forward integration capabilities with MJLab (MuJoCo).

### 5. Why This Project Matters in Today's RL Landscape
In the modern RL landscape, the bottleneck for rapid agent iteration has shifted entirely to GPU throughput and simulator hand-offs. PR #360 is a textbook example of how foundational RL codebases must evolve: 
1.  **Bypassing Legacy FP Constraints:** The default adoption of `bf16` without loss scaling demonstrates an optimization for next-gen GPU architectures, minimizing compute overhead in the PPO hot-loop.
2.  **Compiler Integration:** Leveraging `torch.compile` (specifically `reduce-overhead` for SAC) proves that RL libraries must intimately utilize PyTorch 2.x's compiler stack to remain competitive against newer, JIT-compiled frameworks like JAX-based RL stacks.
3.  **Simulator Agnosticism:** By actively improving MJLab (MuJoCo) integration alongside Isaac Gym/Lab, `rl_games` maintains its status as a critical, hardware-agnostic bridge for high-throughput continuous control tasks.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

Here is the daily digest for the Gymnasium project.

# RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-07-10

### 1. Today's Highlights
Gymnasium experienced steady maintenance and feature development today, with **10 PRs updated** and **3 issues** seeing activity. The spotlight is on community contributor `Functionhx`, who submitted immediate fixes for two high-friction bugs: MuJoCo camera configurations and unnecessary CUDA dependencies on CPU-only machines. 

### 2. Releases
**No new releases** were published in the last 24 hours. The project continues to process upstream changes and community PRs toward its next stable iteration.

### 3. Important Issues
*   **CPU Bloat via `[all]` Install ([#1381](https://github.com/Farama-Foundation/Gymnasium/issues/1381)):** Users report that `pip install "gymnasium[all]"` forces the download of massive `nvidia-cuda-*` packages via PyTorch and JAX dependencies, even on CPU-only systems.
*   **MuJoCo Camera Configuration Ignored ([#1141](https://github.com/Farama-Foundation/Gymnasium/issues/1141)):** Adjusting `default_camera_config` values (like `distance` and `elevation`) currently has no effect on the rendered output.
*   **Call for Documentation Assets ([#1610](https://github.com/Farama-Foundation/Gymnasium/issues/1610)):** Maintainers are requesting community PRs to replace random-action GIFs in the documentation with trained policies (e.g., via SB3) for Classic Control, Box2D, and MuJoCo environments.

### 4. Key PR Progress
*   **Targeted Bug Fixes:** 
    *   [PR #1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617) directly addresses Issue #1381 by removing `jax` and `torch` from the `[all]` extra to prevent CUDA bloat.
    *   [PR #1618](https://github.com/Farama-Foundation/Gymnasium/pull/1618) fixes Issue #1141. The root cause was identified: `MujocoRenderer` hardcodes a fallback to a model's default `"track"` camera, bypassing custom configurations.
*   **API & Type System Enhancements:** 
    *   [PR #1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577) introduces generic `VectorEnv` and vector wrapper types, resolving `TypeVar` issues while maintaining backward compatibility.
    *   [PR #1537](https://github.com/Farama-Foundation/Gymnasium/pull/1537) enables standard generic type hinting for `Tuple` spaces (e.g., `spaces.Tuple[spaces.MultiDiscrete, spaces.Box]`).
    *   [PR #1514](https://github.com/Farama-Foundation/Gymnasium/pull/1514) updates Graph spaces to accept arbitrary node/edge spaces, adding support for heterogeneous graphs.
*   **Physics Engine Migration:** [PR #1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602) presents a proof-of-concept port of the classic `LunarLander` environment from Box2D to Pymunk, showcasing reproducible seeded terrain generation.
*   **New Utilities:** [PR #1556](https://github.com/Farama-Foundation/Gymnasium/pull/1556) adds a highly requested `check_wrapper()` utility, bringing the same API validation paradigm currently used for environments to custom wrappers.

### 5. Why This Project Matters in Today's RL Landscape
As the undisputed standard API for RL environments, Gymnasium's current development trajectory highlights major trends in the broader AI ecosystem. 
First, the push to fix accidental CUDA bloat ([PR #1617](https://github.com/Farama-Foundation/Gymnasium/pull/1617)) reflects a maturing open-source landscape that is moving away from "install everything" monoliths toward lean, hardware-aware deployments. 
Second, the active refinement of generic type hinting ([PR #1577](https://github.com/Farama-Foundation/Gymnasium/pull/1577), [PR #1537](https://github.com/Farama-Foundation/Gymnasium/pull/1537)) and the addition of strict validation utilities ([PR #1556](https://github.com/Farama-Foundation/Gymnasium/pull/1556)) demonstrate that RL infrastructure is converging with traditional software engineering standards. This ensures that as RL scaling increases, environment interactions remain strictly typed, bug-resistant, and deeply integrated into modern IDE workflows.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the RL open-source ecosystem daily digest for PettingZoo.

# 🛠️ RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-10
**Project:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

---

### 1. Today's Highlights
The PettingZoo repository saw a highly active day with **7 PRs updated** and **2 issues revisited**, signaling an upcoming push for a major release. The core focus across the maintainers and community is **environment cleanup, structural API normalization, and visual enhancements**. Notably, a $200 bounty for a Knifed Animated Zombies (KAZ) policy has spurred active community engagement, with a functional solution already in the PR pipeline.

### 2. Releases
*   **No new releases** were cut in the last 24 hours. The ongoing issues suggest maintainers are preparing codebase optimizations and environment deprecations before tagging the next version. 

### 3. Important Issues
*   **[Issue #1383](https://github.com/Farama-Foundation/PettingZoo/issues/1383): Removing Unused Environments**
    *   *Context:* In preparation for the next release, maintainer `jkterry1` proposes removing low-adoption environments like TicTacToe and Gin Rummy, citing GitHub usage metrics. This indicates a maturing of the library, prioritizing maintainability over exhaustive environment coverage.
*   **[Issue #1381](https://github.com/Farama-Foundation/PettingZoo/issues/1381): [$200 Prize] KAZ Policy**
    *   *Context:* A direct call to action for the community to develop a competent policy for the KAZ (Knifed Animated Zombies) environment. This highlights an ongoing effort to improve the baseline documentation and tutorials for multi-agent games beyond random action spaces.

### 4. Key PR Progress
*   **[PR #1390](https://github.com/Farama-Foundation/PettingZoo/pull/1390): Registry ID Normalization**
    *   A crucial architectural fix that normalizes environment IDs to strict `-v[version]` formatting. This aligns PettingZoo’s registry behavior with Gymnasium’s API standards, preventing parsing bugs for namespaces.
*   **[PR #1380](https://github.com/Farama-Foundation/PettingZoo/pull/1380) & [PR #1368](https://github.com/Farama-Foundation/PettingZoo/pull/1368): Hanabi Environment Upgrades**
    *   Hanabi receives massive visual and technical documentation upgrades. PR #1380 introduces commissioned pixel-art pygame rendering (previously console-only), while PR #1368 completely overhauls the observation layout documentation.
*   **[PR #1384](https://github.com/Farama-Foundation/PettingZoo/pull/1384): KAZ Evolved Policy Demo**
    *   Directly addresses the $200 bounty issue (#1381). The author implements a lightweight vector-policy script with parameter search capabilities and successfully renders a GIF for the SB3 tutorial page.
*   **[PR #1391](https://github.com/Farama-Foundation/PettingZoo/pull/1391): API Test Bug Fix**
    *   Squashes false-positive `UserWarning`s in `api_test.py` for non-Box/Discrete observation spaces (e.g., `Dict`, `Tuple`). This is vital for developers building complex Multi-Agent RL environments utilizing mixed observation spaces.
*   **[PR #1306](https://github.com/Farama-Foundation/PettingZoo/pull/1306): `RecordVideo` Wrappers**
    *   A long-standing (since Aug 2025) port of Gymnasium’s `RecordVideo` wrapper, updated today. This will natively support both AEC and parallel environments, drastically simplifying multi-agent visualization.

### 5. Why This Project Matters in Today's RL Landscape
As the standard API for Multi-Agent Reinforcement Learning (MARL) within the Farama Foundation ecosystem, PettingZoo acts as the multi-agent counterpart to Gymnasium. The active PRs targeting **registry normalization** and **wrapper additions** (`RecordVideo`) demonstrate a strict commitment to API parity with single-agent standards. By cleaning up legacy environments (#1383) and standardizing complex observation testing (#1391), PettingZoo is ensuring that MARL research remains reproducible, modular, and accessible. The seamless integration of baseline policies (like the Hanabi and KAZ demos) is critical for lowering the barrier to entry in modern MARL research.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>