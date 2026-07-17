# RL Open Source Daily Digest 2026-07-18

> Generated: 2026-07-17 22:13 UTC | Projects covered: 15

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
The July 18, 2026 digest paints a picture of an RL ecosystem bifurcated into two major fronts: **LLM/VLM Post-Training** and **Traditional Reinforcement Learning Foundations**. 
* The LLM-focused frameworks (TRL, verl, AReaL, slime, OpenRLHF, Open Instruct, ROCK) are operating at a massive engineering scale. Their focus has entirely shifted from basic algorithm implementation toward distributed orchestration, agentic tool-calling, parameter-efficient fine-tuning (PEFT), and heterogeneous hardware support. 
* Conversely, the traditional single/multi-agent RL API and algorithm libraries (Gymnasium, Stable Baselines3, CleanRL, Tianshou, PettingZoo) are in states of extreme stability or dormancy, with development strictly limited to bug fixing, simulation modernization, and reproducibility patches.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 2 | 22 | 0 | High-velocity infrastructure scaling (sharded delta sync, Ascend NPU support). |
| **TRL** | 4 | 8+ | 0 | Deep feature integration (Agentic environments, VLM tool-calling, vLLM 0.25). |
| **AReaL** | 2 | 5 | 0 | Frontier model scaling (GLM-5, DeepSeek-V3) and Megatron determinism. |
| **Open Instruct** | 0 | 4 | 0 | Low-level pipeline maintenance (B300 GPU enablement, data filtering). |
| **Gymnasium** | 1 | 2 | 0 | Physics engine modernization and rendering fixes. |
| **slime** | 1 | 2 | 0 | Hardware decoupling (MUSA) and precise token masking for reasoning models. |
| **OpenRLHF** | 0 | 1 | 0 | Storage optimization (hf checkpoint rotation). |
| **ROCK** | 0 | 1 | 0 | Cloud-native environment orchestration (OpenSandbox). |
| **Stable Baselines3** | 1 | 0 | 0 | Critical reproducibility bug triage (VecEnv seeding). |
| **Others*** | 0 | 0 | 0 | No activity (Stable/Dormant). |

*\*Others include: CleanRL, PettingZoo, rl_games, ROLL, Tianshou, torchtune.*

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Agentic and Multi-turn RL:** Almost all major post-training frameworks (TRL, AReaL, slime, ROCK) are heavily prioritizing multi-turn environments, tool-calling, and SWE-bench-style rollouts. Moving away from static datasets to environment-driven rewards is now the de facto research frontier.
*   **VLMs in the RL Loop:** Vision-Language Models are undergoing massive RL integration, requiring new research into handling multimodal tensor shapes and sequence generation constraints within algorithms like GRPO and PPO (seen heavily in TRL and AReaL).
*   **Empirical Reproducibility:** SB3's VecEnv seeding bug highlights an ongoing systemic vulnerability in RL benchmarking, where evaluation validity is heavily threatened by easily overlooked initialization flaws.

**Engineering & Infrastructure Signals**
*   **Heterogeneous Hardware Decoupling:** The open-source community is aggressively breaking the NVIDIA/CUDA monopoly. verl, slime, and AReaL are building native support for Ascend NPUs and Moore Threads (MUSA), requiring complex distributed system patches (MoE comm states, NCCL/CUDA stream syncs).
*   **Async Orchestration & Memory Efficiency:** RL loops are physically bottlenecked by GPU memory and network overhead. verl’s sharded delta weight sync (broadcasting only 1-3% of changed bytes) and OpenRLHF's checkpoint rotation fixes highlight the desperate need to optimize disk I/O and network bandwidth.
*   **Next-Gen Compute Readiness:** Ecosystems are already future-proofing for next-generation data centers, with Open Instruct specifically patching pipelines to support CUDA 13.0 and B300 GPUs.

## Differentiation Analysis
*   **TRL** functions as the **foundational execution layer**, focusing on accessible integration (vLLM colocate) and pushing the boundaries of multimodal/agentic GRPO for the broad open-source community.
*   **verl** and **AReaL** act as **enterprise-grade distributed orchestrators**. While TRL targets broad compatibility, these frameworks focus on extreme scale (Megatron-Core, DeepSpeed, FSDP2) and native support for trillion-parameter MoE models (DeepSeek-V3, GLM-5.2).
*   **ROCK** and **Open Instruct** are separating themselves via **DevOps and infrastructure specialization**. ROCK is building cloud-native sandbox orchestration for CPU-bound environments, while Open Instruct focuses on the unglamorous pipeline glue (telemetry, data filtering) required for production alignment.
*   **SB3** and **Gymnasium** represent the **classic RL foundations**. Their differentiation lies in API standardization and physics fidelity (MuJoCo, PyMunk) rather than LLM post-training.

## Community Momentum & Maturity
*   **High-Velocity Maturation (verl, TRL, AReaL):** These projects show the highest momentum, processing dozens of PRs a week. Their communities have successfully transitioned from research scripts to robust microservice architectures capable of supporting massive enterprise workflows. 
*   **Stabilizing Ecosystems (OpenRLHF, slime, Open Instruct, ROCK):** These projects show steady, highly targeted momentum. They are mature but currently focus on edge-case resolution, hardware expansion, and infrastructure stability rather than rapid feature accumulation.
*   **Static/Dormant Foundations (SB3, Gymnasium, CleanRL, Tianshou, etc.):** These communities show very low momentum, which is a sign of architectural maturity rather than abandonment. They provide stable APIs that require little modification, with activity strictly limited to triaging reproducibility flaws or modernizing legacy physics bindings.

## Trend Signals
*   **The Rise of Sub-Module Environments:** The shift from static datasets to `trl.environments` and `OpenSandbox` indicates that future RL frameworks will natively host isolated, CPU-bound compute environments alongside GPU-bound policy training.
*   **Hardware Sovereignty:** The rapid patching of Ascend, MUSA, and next-gen CUDA signals that global open-source RL is heavily prioritizing hardware agility to mitigate supply chain and vendor-lock-in risks. 
*   **Granular Data Fidelity over Algorithmic Tweaks:** Engineering effort is increasingly spent on hyper-granular data manipulation—such as Slime's token-delta masking for reasoning models (Qwen3)—suggesting that the bottleneck of RLHF has moved from algorithm design to token-level data pipeline integrity.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

### 📊 RL Ecosystem Daily Digest: ROCK 
**Date:** 2026-07-18

**1. Today's Highlights**
Activity in the alibaba/ROCK repository over the last 24 hours has been highly focused on backend infrastructure. With zero new issues and no new releases, the project's momentum is currently driven by a single, significant closed Pull Request that expands the platform's sandbox execution capabilities.

**2. Releases**
*   **Status:** No new releases in the last 24 hours.

**3. Important Issues**
*   **Status:** No issues were created or updated in the last 24 hours. The issue tracker remains quiet, indicating a period of stable active development rather than reactive bug-troubleshooting.

**4. Key PR Progress**
The sole development update is the finalization of a major architectural enhancement to the platform's proxy and runtime systems:
*   **[PR #1233](https://github.com/alibaba/ROCK/pull/1233) [CLOSED]** by `zpzjzj`: `feat(proxy): add OpenSandbox runtime backend`
    *   **Technical Impact:** This PR abstracts the existing Rocklet HTTP path behind a standardized runtime backend interface. It successfully integrates the OpenSandbox SDK to manage command routing, file/streaming uploads, and single-sandbox status operations. Additionally, it enables proxying for both HTTP and WebSocket services through SDK-resolved endpoints. 
    *   *Timeline:* Created on 2026-07-13 and closed yesterday (2026-07-17), marking a rapid 4-day turnaround for a deep architectural integration.

**5. Why This Project Matters in Today's RL Landscape**
In modern Reinforcement Learning, the training phase (typically GPU-bound) is heavily bottlenecked by the environment execution phase (often CPU-bound). To scale efficiently, RL platforms must decouple these components. 

ROCK's integration of the OpenSandbox runtime backend (via [PR #1233](https://github.com/alibaba/ROCK/pull/1233)) is a critical step toward solving this bottleneck. By abstracting environment execution behind a unified interface and utilizing SDK-proxied HTTP/WebSocket endpoints, ROCK is enabling scalable, isolated, and cloud-native environment orchestration. This allows practitioners to spin up secure, distributed sandbox environments seamlessly, which is foundational for training complex, multi-agent or highly interactive RL models.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL open-source ecosystem daily digest for THUDM/slime.

# 🧠 RL Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-07-18

### 1. Today's Highlights
* **Hardware Ecosystem Expansion:** Slime is actively broadening its hardware compatibility, evidenced by a new PR introducing backend-aware support for Moore Threads GPUs (MUSA).
* **RL Data fidelity Enhancements:** A critical update was made to preserve precise token deltas in multi-turn RL scenarios involving reasoning models (Qwen3).
* **Impending GLM 5.2 Integration Friction:** With the ecosystem pivoting toward GLM 5.2, users are encountering model conversion blockers due to version mismatches between `main` and older release tags.

### 2. Releases
* **No new releases** were published in the last 24 hours. The project remains focused on merging feature updates into the `main` branch.

### 3. Important Issues
* **#2215 [Bug] GLM5.2 模型转换的时候报错 (Error during GLM5.2 model conversion)** | *Author: qq1243196045*
  * **Summary:** Users pulling the latest `main` branch to utilize the new GLM 5.2 support (which postdates the 0.3.0 release) are encountering errors during the model conversion process.
  * **Ecosystem Impact:** Highlights the growing pains of rapidly integrating next-generation foundation models (GLM 5.2) into existing RL pipelines before a stable, unified release is cut. 
  * **Link:** [THUDM/slime Issue #2215](https://github.com/THUDM/slime/issues/2215)

### 4. Key PR Progress
* **#2216 feat: add backend-aware MUSA support** | *Author: ForAxel*
  * **Summary:** Introduces backend-aware MUSA (Moore Threads GPU) support while preserving the native CUDA execution path. This aligns Slime's backend capabilities with current Megatron-LM and SGLang integrations.
  * **Link:** [THUDM/slime PR #2216](https://github.com/THUDM/slime/pull/2216)
* **#2213 Fix tau-bench token deltas for reasoning templates** | *Author: DongzhuoranZhou*
  * **Summary:** Fixes token accounting for multi-turn RL environments (tau-bench). It accurately preserves real-user token deltas when Qwen3 rewrites previous reasoning steps, carefully managing BPE merges and generation-prefix token masking (assigning 0 to prefix and 1 to continuation).
  * **Link:** [THUDM/slime PR #2213](https://github.com/THUDM/slime/pull/2213)

### 5. Why This Project Matters in Today's RL Landscape
As the Reinforcement Learning from Human Feedback (RLHF) and self-play landscape matures, the complexity of token-level reward calculation and multi-turn agent training is becoming the primary bottleneck for open-source developers. 

**Slime** remains a critical barometer for the industry. Today's updates reflect two major macro trends in RL:
1. **Granular RL Data Fidelity:** PR #2213 demonstrates the ecosystem's shift from basic sequence-level rewards toward hyper-granular token masking. Handling dynamic BPE merges and reasoning rewrites (like Qwen3's) is essential for training accurate agentic RL models.
2. **Hardware Sovereignty in AI:** PR #2216 underscores a strategic push within the open-source community to decouple RL and LLM training infrastructure from monolithic GPU vendor lock-in (NVIDIA/CUDA) by actively supporting alternative hardware like Moore Threads (MUSA).

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# 🧠 RL Open-Source Daily Digest: AReaL 
**Date:** 2026-07-18

### 1. Today's Highlights
AReaL shows no signs of slowing down in its v2 architectural maturation and support for frontier models. The past 24 hours feature critical reliability patches for inference launchers and Megatron determinism, expanded support for next-gen architectures (GLM-5, DeepSeek-V3, Bailing-MoE V2.5), and new capabilities for multimodal LoRA training.

### 2. Releases
* **No new releases** cut in the last 24 hours. Development remains focused on merging open feature branches and stabilizing the v2 microservice architecture.

### 3. Important Issues
Two long-standing issues were marked **[CLOSED]**, indicating completed community support cycles and feature finalizations:
* **[CLOSED] #1374:** [Feature] Operator CLI (`areal`) for the v2 microservice architecture. *Resolution of this issue confirms AReaL's successful transition to decoupled microservices (inference, agent, weight-update, training) managed via a unified CLI.* ([URL](https://github.com/areal-project/AReaL/issues/1374))
* **[CLOSED] #1394:** [Question] Example for training on SWE (agentic software-engineering) tasks? *Closure suggests the ecosystem now has adequate documentation or recipes for multi-turn agentic rollouts using tool-calling and environment-based rewards (e.g., SWE-bench).* ([URL](https://github.com/areal-project/AReaL/issues/1394))

### 4. Key PR Progress
A total of **5 PRs** saw activity, heavily focused on infrastructure robustness and new model integrations:

* **Infrastructure & Engine Fixes:**
  * **#1545 [OPEN]:** `fix(infra): fail fast when a local inference server dies during launch`. Eliminates opaque timeout errors by actively monitoring the server process handle for crashes (OOM, port conflicts) during setup. ([URL](https://github.com/areal-project/AReaL/pull/1545))
  * **#1544 [OPEN]:** `fix(engine): engage Megatron deterministic mode before model build`. Fixes a silent determinism bug where `use_deterministic_algorithms=True` was applied post-build, missing initialization hooks in components like `VocabParallelEmbedding`. ([URL](https://github.com/areal-project/AReaL/pull/1544))

* **Frontier Model Support (Megatron Core):**
  * **#1373 [OPEN]:** Adds `mbridge` and `megatron-bridge` support for **GLM-5.1, DeepSeek-V3, and GLM-4.7-Flash**—architectures previously unsupported in open-source AReaL. ([URL](https://github.com/areal-project/AReaL/pull/1373))
  * **#1372 [OPEN]:** Implements a dual-bridge system for the **Bailing-MoE V2.5** family, enabling native NVIDIA Megatron integrations alongside the default `mbridge`. ([URL](https://github.com/areal-project/AReaL/pull/1372))

* **Multimodal & Parameter-Efficient Fine-Tuning (PEFT):**
  * **#1444 [OPEN]:** Enables **Qwen3.6 LoRA GRPO training** (27B dense & 35B-A3B MoE) using the SGLang backend and FSDP, significantly lowering hardware barriers for large VLM RLHF. ([URL](https://github.com/areal-project/AReaL/pull/1444))

### 5. Why This Project Matters in Today's RL Landscape
AReaL is establishing itself as a highly performant, production-ready framework tailored for the modern era of **post-training and agentic RL**. Today's digest highlights two major industry trends that AReaL is directly enabling:

1.  **Native Agentic & SWE Training:** By refining its microservices to support long-trajectory, multi-turn rollouts (like SWE-bench testing environments), AReaL provides the exact infrastructure needed to train software-engineering agents.
2.  **Bridging Efficiency and Massive Scale:** The integration of both megatron-bridge and FSDP/LoRA pathways for massive MoE models (DeepSeek-V3, GLM-5, Qwen3.6) proves AReaL is capable of handling both state-of-the-art trillion-parameter distributed training and hardware-efficient PEFT approaches via SGLang.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL daily digest for the TRL repository.

# 📊 TRL Daily Digest: 2026-07-18

*Tracking the Hugging Face Reinforcement Learning ecosystem (`huggingface/trl`).*

### 1. Today's Highlights
* **Massive Focus on `AsyncGRPOTrainer`:** A significant portion of today's PR activity (led by core maintainer `qgallouedec`) is dedicated to aligning the experimental `AsyncGRPOTrainer` with stable trainers, fixing biased cross-rank metric aggregations, and cleaning up callbacks.
* **Deepening Agentic/VLM Integration:** Multi-turn tool calling in `GRPOTrainer` for Vision-Language Models (VLMs) received major patches to fix tensor shape mismatches. Additionally, new PRs aim to introduce environment-owned datasets and a `SandboxEnvironment` submodule.
* **Versioning & Ecosystem Maintenance:** TRL is actively dropping legacy vLLM support (dropping 0.16) and adding support for the newest vLLM releases (0.25.x), alongside adding testing for LiquidAI's LFM2 architectures.

### 2. Releases
* **None** (0 new releases in the last 24 hours).

### 3. Important Issues
* **VLM Multi-Turn Tool Calling Crashes:** Issue [#6274](https://github.com/huggingface/trl/issues/6274) details a critical bug where multi-turn tool calling in GRPO breaks Qwen VLM training due to a wrong `pixel_values` slice in `_tool_call_loop`.
* **Loss Masking Inconsistency in GRPO Variants:** Issue [#6369](https://github.com/huggingface/trl/issues/6369) reports that the loss denominator in DAPO/CISPO/VESPO incorrectly ignores the `mask_truncated_completions` flag, causing incomplete completions to skew the loss denominator.
* **vLLM Colocate M-RoPE Crash:** Issue [#6401](https://github.com/huggingface/trl/issues/6401) highlights a silent prompt corruption and crash in GRPO VLM colocate mode when pre-tokenized prompt IDs and raw images mis-align with vLLM's preprocessing.
* **Legacy Distributed Bugs:** Issue [#2580](https://github.com/huggingface/trl/issues/2580) continues to track a persistent `RuntimeError` device mismatch when using `GKDTrainer` with FSDP.

### 4. Key PR Progress
* **VLM & Agentic Features:**
  * [#6286](https://github.com/huggingface/trl/pull/6286): Fixes multimodal field handling (tensor shape mismatches) in the GRPO tool call loop.
  * [#6358](https://github.com/huggingface/trl/pull/6358): Introduces the `trl.environments` submodule with a `SandboxEnvironment`.
  * [#6349](https://github.com/huggingface/trl/pull/6349): Makes `train_dataset` optional when an `environment_factory` is provided, allowing environments to fully own the data loop (great for procedural RL).
* **Core Trainer Fixes & Refactoring:**
  * [#6403](https://github.com/huggingface/trl/pull/6403): Fixes `precompute_ref_log_probs=True` crashing under DeepSpeed in DPO and KTO.
  * [#6380](https://github.com/huggingface/trl/pull/6380): Fixes biased cross-rank aggregation of token-weighted metrics (GRPO, RLOO) by reducing numerator sums and token counts jointly.
  * [#6411](https://github.com/huggingface/trl/pull/6411): Explicitly rejects `auto_find_batch_size` in GRPO/RLOO, as halving batch sizes on OOM breaks generation prompt groupings.
* **Ecosystem Compatibility:**
  * [#6404](https://github.com/huggingface/trl/pull/6404) & [#6406](https://github.com/huggingface/trl/pull/6406): Drops support for vLLM 0.16 and adds full support for vLLM 0.25.0/0.25.1.
  * [#6428](https://github.com/huggingface/trl/pull/6428): Adds architecture support and CI testing for LiquidAI's LFM2 and LFM2.5 models.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source community shifts heavily toward Reinforcement Learning with Human Feedback (RLHF) and reasoning-focused models (e.g., RLAIF, GRPO, DAPO), **TRL functions as the foundational execution layer.** 

Today's digest clearly reflects the industry's current frontier challenges: 
1) **Complex Sequence Generation:** Integrating vLLM colocate modes directly into training loops for high-throughput RL generation.
2) **Agentic RL:** Moving beyond static datasets toward environment-driven rollouts (`trl.environments`), which is critical for training tool-using LLMs. 
3) **Multimodal RL:** Pushing RL algorithms (like PPO and GRPO) into the vision-language space, requiring complex handling of varying tensor shapes and multi-modal preprocessing under distributed constraints.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Ecosystem Daily Digest: 2026-07-18
**Focus Project:** OpenRLHF (`github.com/OpenRLHF/OpenRLHF`)

### 1. Today's Highlights
*   **Quiet Day for Ecosystem:** No new issues, comments, or releases recorded in the last 24 hours. 
*   **Storage Optimization:** A critical bug fix was submitted targeting checkpoint storage management, specifically addressing unrotated HuggingFace format exports that risk exhausting disk space during long RL training runs.

### 2. Releases
*   **None.** No new versions or tags were published today.

### 3. Important Issues
*   **None.** No active issues or bug reports were updated in the last 24 hours.

### 4. Key PR Progress
*   **PR #1265: `fix: apply ckpt.max_num rotation to HF checkpoint exports (*_hf)`** (Author: `konghw-git`)
    *   **Status:** Open (Created/Updated on 2026-07-17)
    *   **GitHub Link:** [OpenRLHF/OpenRLHF PR #1265](https://github.com/OpenRLHF/OpenRLHF/pull/1265)
    *   **Technical Summary:** While OpenRLHF's `save_ckpt` successfully rotates DeepSpeed checkpoints using `--ckpt.max_num`, the HuggingFace-format exports triggered by `--ckpt.save_hf` (saved as `{ckpt.path}/{tag}_hf`) lack this rotation logic. Because these exports contain full bf16 model weights (e.g., ~8GB for a 4B model, ~16GB for an 8B model), they accumulate silently and can crash training infrastructure due to disk overflow. This PR extends the existing rotation logic to the `_hf` directories.

### 5. Why This Project Matters in Today's RL Landscape
As RLHF (Reinforcement Learning from Human Feedback) and PPO/DPO become standard steps in aligning Large Language Models, frameworks like OpenRLHF provide essential, scalable infrastructure. 

Today's highlighted PR #1265 underscores a critical operational reality in modern RL: **storage I/O and disk capacity are major bottlenecks.** RL training loops require maintaining multiple model copies simultaneously (Actor, Critic, Reference, Reward). When training scales to 8B+ parameters over thousands of steps, missing checkpoint rotations—even for "lightweight" bf16 HuggingFace exports—translate to terabytes of unnecessary disk usage. By addressing these silent infrastructure failures, OpenRLHF ensures that AI engineers can focus on reward design and policy convergence, rather than dev-ops firefighting.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL open-source ecosystem daily digest for `verl` (Volcengine) on 2026-07-18.

### 1. Today's Highlights
The verl ecosystem saw a massive surge in engineering velocity today with **22 active PRs** and a strong focus on infrastructure efficiency and heterogeneous hardware support. Key themes include massive optimizations in distributed weight synchronization (sparse/sharded delta sync), expanded Ascend NPU compatibility, and critical memory management fixes for FSDP2/LoRA workflows.

### 2. Releases
*   **No new releases** published in the last 24 hours. The project maintains active development on the main branch.

### 3. Important Issues
*   **[Bug] Docker Environment Missing `Megatron.bridge` ([#7071](https://github.com/verl-project/verl/issues/7071))**
    Users running Docker Desktop (Win11/CUDA 13.3) on published GPU tags (e.g., `verlai/verl:sgl0512.dev2`) are encountering `ModuleNotFoundError: megatron.bridge`. This requires a maintainer image rebuild, though mitigation guidance is already in the works (see PR #7089).
*   **[Util] NPU Hardware Dispatch Overhead in `attention_utils.py` ([#7088](https://github.com/verl-project/verl/issues/7088))**
    A contributor noted that `index_first_axis` and `pad_input` introduce unnecessary hardware dispatch overhead for NPU implementations. Since these are pure PyTorch/einops tensor operations, the NPU-specific dispatch logic should be removed to streamline execution.

### 4. Key PR Progress
**Distributed Checkpointing & Sync Optimizations**
*   **[Closed] Sharded Delta Weight Sync ([#6974](https://github.com/verl-project/verl/pull/6974)):** Merged a sparse weight-sync checkpoint engine for disaggregated rollouts. By only broadcasting the ~1-3% of parameter bytes that change between steps, this drastically reduces network overhead in async training.
*   **[Open] Block-Placement Delta Sync ([#7085](https://github.com/verl-project/verl/pull/7085)):** Extends the aforementioned flat FSDP2 fast-path to block placements (`Shard(k)`) and manual splits, wiring it into `veomni FSDP2+EP` end-to-end.
*   **[Closed] `save_lora_only` Support ([#7061](https://github.com/verl-project/verl/pull/7061)):** Allows saving only LoRA adapter weights during training, slashing checkpoint sizes from ~54 GiB to ~150 MiB for 27B models. 

**Hardware & Infrastructure Fixes**
*   **[Open] Ascend MoE Comm State Refresh ([#7086](https://github.com/verl-project/verl/pull/7086)):** Fixes incorrect rollout outputs on Ascend NPU + vLLM sleep level 2 (L2) + expert parallel (EP > 1) in hybrid training by refreshing the MoE comm state after an L2 wake.
*   **[Open] NCCL Broadcast CUDA Stream Sync ([#7083](https://github.com/verl-project/verl/pull/7083)):** Fixes a silent race condition where `ray.util.collective.broadcast()` enqueues the NCCL kernel but returns before completion, adding necessary CUDA stream synchronization.
*   **[Open] FSDP2 & CPU Offload Crash Resolution ([#7077](https://github.com/verl-project/verl/pull/7077)):** Fixes a DTensor device mismatch crash on Ascend NPU triggered when `save_checkpoint()` incorrectly calls `load_fsdp_model_to_gpu()` under `CPUOffloadPolicy`.

**Training Enhancements & Determinism**
*   **[Open] Early Stopping for PPO ([#7069](https://github.com/verl-project/verl/pull/7069)):** Introduces an `early_stop_patience` config to `RayPPOTrainer`, terminating the training loop if the critic/reward mean doesn't improve for $N$ consecutive steps, saving wasted compute.
*   **[Open] Deterministic Generative RM ([#7027](https://github.com/verl-project/verl/pull/7027)):** Implements full determinism for user-defined generative reward models (GRM), crucial for reliable VLM scoring and reproducible RL pipelines.

### 5. Why This Project Matters in Today's RL Landscape
As post-training (RLHF/PPO) for massive LLMs and VLMs becomes the standard for production differentiation, the bottleneck has shifted from pure model FLOPs to distributed orchestration and memory overhead. 

**verl** is tackling the exact pain points defining the modern RL landscape:
1.  **Async Decoupled Rollouts:** By pioneering *sharded delta weight sync*, verl allows heavy rollout engines (like vLLM) to operate asynchronously from trainers without choking the network with multi-GB weight transfers every step.
2.  **Heterogeneous Compute:** The volume of patches addressing Ascend NPUs, MoE comm states, and L2 sleep/wake cycles proves verl is bridging the gap for developers operating outside the standard NVIDIA/CUDA monopoly.
3.  **Parameter-Efficient RL:** Supporting massive compute savings via early-stop mechanisms and LoRA-only checkpointing makes large-scale alignment tasks accessible to smaller research labs and enterprise teams alike.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Open-Source Ecosystem Daily Digest: 2026-07-18
**Project Focus:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity in the last 24 hours has been exclusively focused on engineering maintenance and data pipeline robustness. The repository saw no new issues or releases, but maintainers pushed four key Pull Requests. These updates address critical infrastructure scaling (next-gen GPU support), workflow isolation, and data processing edge cases in RL preference datasets.

## 2. Releases
*   **No new releases** in the last 24 hours.

## 3. Important Issues
*   **None.** (0 issues updated or created in the last 24 hours). The codebase appears exceptionally stable as attention shifts toward core engineering upgrades.

## 4. Key PR Progress
1.  **Next-Gen Hardware Enablement:** [PR #1758](https://github.com/allenai/open-instruct/pull/1758) by `mnoukhov` was updated today. This crucial PR upgrades the environment to **CUDA 13.0** to support B300 GPUs on the `ai2/holmes` cluster, utilizing a selectable Docker base (`CUDA_VERSION=12` or `13`) to ensure backward compatibility with older clusters.
2.  **Workflow Isolation:** [PR #1760](https://github.com/allenai/open-instruct/pull/1760) by `mnoukhov` optimizes internal tooling by running the "Mason" launcher from a minimal, isolated `uv` project rather than syncing the entire project dependency tree. This vastly reduces container build times and bloat.
3.  **Preference Data Filtering Fix:** [PR #1761](https://github.com/allenai/open-instruct/pull/1761) by `Chessing234` patches an edge case in RL preference data filtering. Previously, a nested ternary operator skipped the `max_token_length` check if the prompt length was set. The PR aligns the logic with SFT pipelines by checking both limits independently.
4.  **Telemetry/Logging Pipeline Fix:** [PR #1762](https://github.com/allenai/open-instruct/pull/1762) by `Chessing234` fixes a CSV logging bug where headers were either never written (due to `exists()` being called after `open("a")`) or duplicated on every append call. 

## 5. Why This Project Matters in Today's RL Landscape
While high-level RL algorithms like PPO and DPO often dominate academic headlines, production-grade post-training pipelines require rigorous, low-level engineering. Open Instruct is a critical piece of the RL ecosystem because it bridges the gap between theoretical modeling and distributed training realities. 

Today's PRs are a perfect microcosm of real-world RL engineering:
*   **Hardware Scalability:** Supporting CUDA 13.0 and B300 architectures ensures that RL workflows can immediately leverage the memory and compute bandwidth required for large-scale sequence generation and massive batch sizes.
*   **Data Quality:** In RLHF/DPO, a single malformed preference pair or an improperly filtered token sequence can derail reward model convergence. PRs like #1761 ensure data integrity at scale.
*   **System Efficiency:** By streamlining container builds (#1760) and fixing telemetry logging (#1762), maintainers minimize cluster downtimes, allowing researchers to iterate faster on policy tuning.

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

# 🤖 RL Ecosystem Daily Digest: Gymnasium 
**Date:** 2026-07-18

### 1. Today's Highlights
Activity in the Gymnasium repository over the last 24 hours is highly focused on environment rendering and physics engine reliability. A newly submitted Pull Request directly addresses a long-standing question regarding MuJoCo offscreen rendering buffers. Meanwhile, significant community effort continues on modernizing legacy physics dependencies.

### 2. Releases
* **No new releases** were published in the last 24 hours. The core API remains stable.

### 3. Important Issues
* **[Question] MujocoEnv ignores `offwidth` and `offheight` parameter from XML file?** ([Issue #1607](https://github.com/Farama-Foundation/Gymnasium/issues/1607))
  * **Author:** mlinke-ai
  * **Update:** Engaged 3 days ago, this issue highlights a critical pain point for robotic vision tasks. Developers extending `MujocoEnv` for custom agents (like drones) found that their XML-declared camera resolutions were being silently overridden by the class defaults (480x480). This prevents the use of high-fidelity custom renderers. 

### 4. Key PR Progress
* **Fix MujocoEnv shrinking XML-declared offscreen framebuffer** ([PR #1642](https://github.com/Farama-Foundation/Gymnasium/pull/1642))
  * **Author:** midhunxavier
  * **Status:** Open (Created Yesterday)
  * **Summary:** This PR directly resolves Issue #1607. It removes the unconditional overriding of `model.vis.global_.offwidth` and `offheight` in `MujocoEnv._initialize_simulation()`, allowing MuJoCo to respect larger, user-defined framebuffers from the XML configuration.
* **Port lunar lander to pymunk** ([PR #1602](https://github.com/Farama-Foundation/Gymnasium/pull/1602))
  * **Author:** Lonny154
  * **Status:** Open / Draft (Updated Yesterday)
  * **Summary:** A continuing effort to decouple Gymnasium from legacy Box2D bindings. This PR demonstrates a proof-of-concept using Pymunk to handle `LunarLander` physics, successfully replicating seeded terrain generation, the lander hull, and constrained landing joints. 

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for single-agent reinforcement learning. Today's digest perfectly illustrates the ecosystem's current priorities: 
1. **Simulation Fidelity:** As RL moves further into complex robotic control and visual RL, precise control over rendering buffers (as seen in PR #1642) is vital for training vision-based policies.
2. **Infrastructure Modernization:** The initiative to port classic environments like `LunarLander` to modern, actively maintained physics engines like Pymunk ensures that the foundational benchmarks of RL remain accessible, reproducible, and free from brittle legacy dependencies (like Box2D).

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

**RL Ecosystem Daily Digest: Stable Baselines3**
**Date:** 2026-07-18

### 1. Today's Highlights
Activity in the Stable Baselines3 (SB3) repository over the past 24 hours has been minimal, with zero new releases, zero new or updated Pull Requests, and a single new Bug report. The focus of the day centers entirely around a newly identified flaw in vectorized environment (VecEnv) reproducibility and seeding mechanisms.

### 2. Releases
No new releases were published in the last 24 hours. 

### 3. Important Issues
A critical methodological flaw regarding experimental reproducibility was reported today:
*   **[Bug]: VecEnv sub-environment seeds overlap across runs with adjacent base seeds ([#2268](https://github.com/DLR-RM/stable-baselines3/issues/2268))**
    *   **Author:** abaisero
    *   **Summary:** The current `VecEnv.seed(seed)` implementation (and by extension `make_vec_env(..., seed=seed)`) deterministically seeds sub-environment $i$ using the formula `seed + i`. This architecture breaks the standard machine learning workflow of sweeping adjacent base seeds (e.g., $0, 1, 2... N$) to generate statistically independent evaluation runs. 
    *   **Impact:** Because base seeds are adjacent, sub-environments across different runs will overlap (e.g., Run 1's 2nd sub-env uses seed $1$, which is identical to Run 2's 1st sub-env). This can lead to correlated training data across supposedly independent sweeps, severely skewing empirical RL evaluation results. The issue currently has 0 comments, awaiting maintainer triage.

### 4. Key PR Progress
There has been no Pull Request activity in the last 24 hours. No bugfixes or feature branches are currently in the review pipeline for the seeding issue mentioned above.

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains a foundational pillar of the open-source RL ecosystem. While cutting-edge research often relies on highly customized codebases, SB3 provides the standardized, reliable "glue" used by thousands of researchers for benchmarking and applied RL. 

Today's reported seeding bug (#2268) highlights a broader, systemic challenge in the RL landscape: **reproducibility**. Unlike supervised learning, RL evaluation is highly sensitive to initial environment states. If standard seeding mechanisms in widely adopted libraries like SB3 inadvertently cause correlated environment instances across macro-level experimental sweeps, the statistical validity of published benchmark comparisons is compromised. Addressing this issue will be crucial for maintaining the integrity of empirical RL research moving forward.

</details>