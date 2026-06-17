# RL Open Source Daily Digest 2026-06-18

> Generated: 2026-06-17 22:30 UTC | Projects covered: 15

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
The June 18, 2026 digest paints a clear picture of an RL ecosystem heavily bifurcated between next-generation Large Language Model (LLM) post-training and traditional Reinforcement Learning (RL) environments. 

On the LLM side, the dominant paradigms are now **Agentic RL** (multi-turn tool use, coding agents, and sandbox environments) and **RLVR** (Reinforcement Learning with Verifiable Rewards) driven by Group Relative Policy Optimization (GRPO) and Mixture-of-Experts (MoE) architectures. Projects like `verl`, `TRL`, and `slime` are pushing the boundaries of distributed training, grappling with massive MoE models like DeepSeek-V4 and Qwen3.5. Meanwhile, infrastructure projects like `ROCK` and `AReaL` are solving critical systems-level bottlenecks, such as sandbox lifecycles, GPU colocation, and cross-engine memory leaks. 

Conversely, the classic foundational RL libraries (`CleanRL`, `Gymnasium`, `PettingZoo`, `Stable Baselines3`, `Tianshou`, `rl_games`) experienced zero activity, indicating that open-source momentum and developer attention have almost entirely shifted toward LLM alignment and tool-using agent orchestration.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 5+ active | 9+ active | 0 | Frontier LLM scale-up; pushing agentic loops, next-gen MoE, and hardware parity (AMD/Ascend). |
| **TRL** | 3+ active | 9+ active | 0 | High-velocity algorithm integration; deep async GRPO standardization and MoE load balancing. |
| **ROCK** | 4+ active | 7+ active | 0 | Core infrastructure focus; agent sandbox lifecycles, SDK parity, and container security. |
| **slime** | 3+ active | 6+ active | 0 | Asynchronous scaling; decoupling inference fleets and integrating SWE-bench coding agents. |
| **AReaL** | 0 | 6+ active | 0 | Deep systems optimization; FP8 weight transfers, memory offloading, and offline debuggability. |
| **Open Instruct** | 0 | 2 active | 0 | Democratizing GRPO; hardware enablement (CPU offloading) and experiment tracking. |
| **OpenRLHF** | 0 | 2 closed | 0 | Stabilization; unblocking multi-turn agent evaluation pipelines. |
| **torchtune** | 0 | 1 active | 0 | Maintenance; critical hotfixes for DPO import chains. |
| **ROLL** | 0 | 1 closed | 0 | Stagnant; administrative docs updates only. |
| **Others*** | 0 | 0 | 0 | Dormant. Includes CleanRL, Gymnasium, PettingZoo, rl_games, Stable Baselines3, Tianshou. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Agentic Workflows over Static RLHF:** There is a universal shift toward multi-turn agentic training. Projects are actively integrating environment feedback loops (`verl` async loops, `TRL` Harbor integration, `OpenRLHF` multi-turn eval) and specifically targeting coding and tool-use benchmarks (`slime` SWE-bench integration).
*   **GRPO & MoE Standardization:** Group Relative Policy Optimization is solidifying as the default baseline. Projects are rapidly building feature parity around GRPO (e.g., `TRL` AsyncGRPO, `Open Instruct` GRPO configs) and standardizing auxiliary load-balancing losses required by massive MoE models (DeepSeek-V4, Qwen3.5).
*   **Algorithmic Granularity:** Frameworks are exposing modular algorithmic hooks, such as flexible loss aggregation modes (`slime` supporting DAPO and Dr.GRPO recipes), allowing researchers to easily swap between state-of-the-art reasoning techniques.

**Engineering & Infrastructure Signals**
*   **Asynchronous Pipelines & Resource Decoupling:** To prevent expensive GPUs from idling, frameworks are decoupling inference/rollouts from training. This is evidenced by delta-checkpoint syncing (`slime`), external elastic rollouts, and trajectory dump-and-replay systems (`AReaL`).
*   **Distributed Memory & Context Bottlenecks:** At scale, host memory and context limits are failing. Teams are aggressively patching memory leaks (`verl` FSDP2 CPU OOM), skipping unnecessary CPU gradient backups (`AReaL` Megatron buffers), and introducing dynamic context parallelism.
*   **Sandbox & Tooling Constraints:** As agents write more code, the underlying infrastructure breaks. `ROCK` highlights the need for strict resource governance (XFS disk quotas) and fixes for payload limits (moving from shell args to file-based transfers for >100KB tool outputs).

## Differentiation Analysis

*   **Frontier Orchestration (`verl`, `slime`):** These projects are competing to be the de facto distributed backend for massive frontier models. `verl` differentiates via hardware agnosticism (pushing AMD/ROCm and Huawei Ascend), while `slime` focuses heavily on disk-level delta syncs and decoupling inference backends (SGLang) via external elastic fleets.
*   **Democratization & Accessibility (`TRL`, `Open Instruct`):** While `verl` and `slime` target hyperscale clusters, `TRL` and `Open Instruct` focus on lower barriers to entry. They are rapidly absorbing the pain points of distributed training (e.g., DeepSpeed breakages, FSDP all-gathers, `use_cpu_adam` offloading) to make GRPO and agentic RL accessible to academic labs and smaller research teams.
*   **Deep Systems & Colocation (`AReaL`):** Differentiates by focusing purely on the systems-level overhead of colocating training (Megatron) and inference (SGLang/vLLM) on the same nodes, optimizing hardware utilization via FP8 transfers and granular memory management.
*   **Underlying Infrastructure (`ROCK`):** Operates below the ML frameworks. It doesn't handle algorithms; instead, it manages Docker container lifecycles, secure sandboxes, and complex multi-container topologies required to evaluate agentic code execution safely.

## Community Momentum & Maturity

*   **Hyper-Growth & Operational Friction (`verl`, `TRL`):** High issue/PR velocity indicates massive adoption, but also exposes the community to bleeding-edge instability. Users are hitting critical integration bumps between next-gen models and inference engines (e.g., `verl`'s vLLM/Qwen3.5 routing bugs, `TRL`'s DeepSpeed v0.19.2 breakages).
*   **Specialized & Enterprise Stability (`ROCK`, `AReaL`, `OpenRLHF`):** These repositories show maturity in handling edge cases. `ROCK` is proactively patching security leaks and infrastructure limits. `AReaL` and `OpenRLHF` show zero open issues, indicating highly stable main branches or the use of internal/enterprise trackers for bug triage rather than public GitHub issues. 
*   **Foundational Dormancy:** The complete inactivity across classic RL environments and algorithms (`Gymnasium`, `Stable Baselines3`, etc.) suggests that the traditional RL ecosystem has reached a maintenance plateau. The open-source developer mindshare has comprehensively migrated to LLM post-training.

## Trend Signals

1.  **Async Architectures are the Default:** Sync training on massive LLMs is no longer viable. Expect "Async" to drop from being a feature bullet point to becoming the assumed standard architecture across all major RL frameworks by late 2026.
2.  **Inference-Training Engine Decoupling:** The tight coupling between training engines (PyTorch/FSDP/Megatron) and inference engines (vLLM/SGLang) is a massive source of friction (weight sync leaks, router instabilities). Expect frameworks to pivot heavily toward generic external inference endpoints and delta-syncing technologies.
3.  **End of Traditional RL Open-Source Development:** With zero activity across Gymnasium, SB3, and CleanRL, traditional RL is consolidating into static, feature-complete legacy libraries. The new "RL ecosystem" is explicitly synonymous with LLM alignment and Agentic workflows.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

**RL Open-Source Ecosystem Daily Digest: 2026-06-18**
**Focus Project:** ROLL (alibaba/ROLL)

### 1. Today's Highlights
Activity in the ROLL repository over the last 24 hours has been minimal and primarily maintenance-focused. The ecosystem saw no new functional code, bug reports, or version bumps, but maintainers continue to manage administrative overhead, specifically regarding project documentation and open-source ecosystem alignment.

### 2. Releases
*   **No new releases.** The project has not pushed a new version tag in the last 24 hours.

### 3. Important Issues
*   **None.** There are currently 0 open or updated issues. The lack of active bug reports or feature requests suggests a period of stability, or alternatively, a shift in active developer focus toward other platforms or internal development cycles.

### 4. Key PR Progress
*   **[CLOSED] [PR #462](https://github.com/alibaba/ROLL/pull/462): docs: add ROCK to careers open source projects**
    *   **Author:** kkkky123 (Created & Updated: 2026-06-17)
    *   **Summary:** A documentation-only update that was quickly closed. The PR aimed to list "ROCK" within the project's career/open-source documentation. While not a code contribution, it indicates active housekeeping by community members to track related RL projects and initiatives within the Alibaba ecosystem.

### 5. Why This Project Matters in Today's RL Landscape
As large-scale Reinforcement Learning from Human Feedback (RLHF) and autonomous agent training become the bottleneck for advancing Large Language Models (LLMs), frameworks like **ROLL** are critical infrastructure. ROLL provides a highly scalable, distributed architecture designed specifically to handle the massive computational overhead and orchestration required for RLHF. 

While today's digest reflects a quiet day of administrative maintenance, the ongoing relevance of ROLL lies in its ability to bridge the gap between traditional RL algorithms and modern distributed computing (e.g., Ray), enabling researchers and enterprises to train complex, aligned AI models efficiently. In the current landscape, where distributed training optimization dictates the pace of AI advancement, robust RL orchestration tools remain a foundational necessity.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL ecosystem daily digest for ROCK based on the provided GitHub data.

# 📊 ROCK RL Ecosystem Daily Digest — 2026-06-18

## 1. Today's Highlights
Activity over the last 24 hours has been highly focused on **infrastructure reliability**, **SDK parity**, and **RL environment lifecycle management**. 
* **Zero Releases:** No new version cuts, but heavy merging activity in the background.
* **Security & Stability Fixes:** A critical registry credential leak was patched ([PR #1129](https://github.com/alibaba/ROCK/pull/1129)), and a major limitation causing LLM tool-calling failures on large payloads was resolved ([PR #1116](https://github.com/alibaba/ROCK/pull/1116)).
* **Advanced Sandbox Lifecycle:** Major strides in sandbox state management with new archive/restore workflows and XFS quota fallbacks for containerd.

## 2. Releases
* **None** (0 new releases in the last 24h).

## 3. Important Issues
* 🚨 **[CLOSED] Credential Leak via Registry Mirrors ([#1128](https://github.com/alibaba/ROCK/issues/1128))**
  * *Context:* User registry credentials were improperly passing through to unauthenticated mirror registries during image rewrites. This posed a silent supply chain security risk.
* 📦 **[OPEN] Containerd Disk Limitations ([#1123](https://github.com/alibaba/ROCK/issues/1123))**
  * *Context:* Docker's containerd image store ignores `--storage-opt size=`, allowing RL containers to consume unlimited rootfs disk space. 
* 🤖 **[CLOSED] LLM Payload Crash ([#1115](https://github.com/alibaba/ROCK/issues/1115))**
  * *Context:* The `anti-call-llm` module crashed with "Argument list too long" when LLM agents generated >100KB tool-call responses (e.g., writing large code or data files).
* 🔄 **[OPEN] SDK Parity Gap ([#1121](https://github.com/alibaba/ROCK/issues/1121))**
  * *Context:* The TypeScript SDK lacked the `restart()` method and `autoDeleteSeconds` parameter available in the Python SDK.

## 4. Key PR Progress
* **Sandbox Lifecycle & Archiving Merges:**
  * [PR #1094](https://github.com/alibaba/ROCK/pull/1094) (Closed/Merged): Introduced storage abstraction layers (S3/OSS/Registry V2) for sandbox archiving.
  * [PR #1095](https://github.com/alibaba/ROCK/pull/1095) (Open): Integrates the archive lifecycle directly into the sandbox state machine (adding `archiving` / `archived` states).
  * [PR #1124](https://github.com/alibaba/ROCK/pull/1124) (Open): Implements the XFS project quota fallback mechanism to solve the containerd disk limitation outlined in Issue #1123.
* **SDK & API Enhancements:**
  * [PR #1122](https://github.com/alibaba/ROCK/pull/1122) (Open): Brings `restart()` and `autoDeleteSeconds` to the TypeScript SDK.
  * [PR #1080](https://github.com/alibaba/ROCK/pull/1080) (Open): Adds `ComposeJobConfig` to natively support complex, multi-container RL topologies (main + sidecar + init) via Docker Compose inside DinD sandboxes.
* **Bug & Perf Fixes:**
  * [PR #1116](https://github.com/alibaba/ROCK/pull/1116) (Closed/Merged): Switched `anti-call-llm` large payloads from shell arguments to file-based transfer.
  * [PR #1105](https://github.com/alibaba/ROCK/pull/1105) (Open): Improves datasets CLI performance by adding server-side pagination and `--filter` capabilities.

## 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning shifts heavily toward **agentic workflows** (LLM-driven tool use, web browsing, and multi-step coding tasks), the underlying compute infrastructure is being pushed to its limits. ROCK is solving the exact bottlenecks the RL community faces in 2026:

1. **Agent Output Constraints:** By fixing the 100KB shell argument limit for LLM responses (Issue #1115), ROCK enables agents to autonomously write massive files and execute complex code without crashing the evaluation harness.
2. **Resource Governance:** RL environments (especially sandboxes executing untrusted agent code) require strict boundaries. The new XFS project quota fallbacks (PR #1124) and archive/restore state machines (PR #1095) ensure that compute clusters remain stable and cost-effective during massive distributed RL runs. 
3. **Complex Environment Topologies:** Adding Docker Compose support (PR #1080) reflects the reality that modern RL agents don't just run Python scripts—they interact with microservices, databases, and sidecar APIs. 

*ROCK continues to act as a critical bridge between high-level LLM orchestration and low-level Kubernetes/Docker infrastructure.*

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily reinforcement learning ecosystem digest for **slime (THUDM/slime)** on 2026-06-18.

### 1. Today's Highlights
The slime project is experiencing a high-velocity development cycle, merging architectural expansions for agent RL with deep infrastructure optimizations for large-scale distributed training. Over the last 24 hours, the repository saw **16 active PRs** and **3 active Issues**. Key themes include highly efficient cross-cluster weight synchronization, elastic inference fleet management, and enhanced evaluation pipelines for coding agents.

### 2. Releases
**No new releases** were cut in the last 24 hours. The current focus remains on merging feature branches and stabilizing infrastructure for the next iteration. 

### 3. Important Issues
*   **Critical: NCCL & CUDA Failures on H800 Clusters ([#1305](https://github.com/THUDM/slime/issues/1305))**
    A persistent crash (`ncclUnhandledCudaError: Call to CUDA function failed. Cuda failure 999 'unknown error'`) has been tracked running the `qwen3-30B-A3B.sh` benchmark on 8xH800s. The job dies after <10 steps. With 5 comments over 6 months, this highlights the ongoing struggles with distributed NCCL stability in MoE RL training.
*   **Bug: Output Corruption in slime-v0.3.0 ([#2091](https://github.com/THUDM/slime/issues/2091))**
    Users report garbled outputs (乱码) during the second rollout phase when running `qwen3.6 35B A3B` on `v0.3.0` with the `sglang:v0.5.12.post1-cu129` image. Reverting to `v0.2.4` / `sglang:v0.5.9` resolves the issue, pointing to a potential regression in recent SGLang integrations.
*   **RFC: TransferQueue Integration ([#1971](https://github.com/THUDM/slime/issues/1971))**
    A proposal to integrate `TransferQueue` as an optional data plane. This would optimize slime's rollout-to-training data transfer, intermediate field write-backs, and partition cleanup—crucial for decoupling generation from gradient updates in asynchronous pipelines.

### 4. Key PR Progress
**Architecture & Agent Rollouts**
*   **External Elastic Rollouts ([PR #2071](https://github.com/THUDM/slime/pull/2071)):** Decouples slime from owning the rollout backend. It introduces an external inference fleet endpoint with publish-only weight syncs, enabling elastic, auto-scaled generation clusters.
*   **Coding-Agent RL Overhaul ([PR #2005](https://github.com/THUDM/slime/pull/2005), [PR #2079](https://github.com/THUDM/slime/pull/2079)):** Massive refactoring of the `coding_agent_rl` trajectory manager into a turn-node design. Furthermore, slime now natively supports SWE-bench harness evaluation (`swebench_metadata`), bringing industry-standard coding agent benchmarks directly into the training loop.
*   **New Model Support ([PR #1855](https://github.com/THUDM/slime/pull/1855)):** Adds comprehensive support for Gemma4 (26B-A4B MoE & 31B dense), passing TP/PP/DP/CP/EP parity tests.

**Training Optimization & Core RL Algorithms**
*   **Disk-Level Delta Weight Sync ([PR #2089](https://github.com/THUDM/slime/pull/2089)):** Dramatically reduces network I/O for non-colocated setups by shipping only changed bytes (delta checkpoints) instead of full checkpoints. 
*   **ScaleRL Aggregation Modes ([PR #2090](https://github.com/THUDM/slime/pull/2090)):** Introduces `--loss-aggregation` to easily swap between `pg_loss` calculations (e.g., DAPO’s per-prompt group mean, Dr.GRPO’s constant division), unlocking state-of-the-art algorithmic recipes.
*   **Process Group & Async Fixes ([PR #2095](https://github.com/THUDM/slime/pull/2095), [PR #2092](https://github.com/THUDM/slime/pull/2092)):** Preserves reloadable process group kwargs and fixes an edge-case bug where ABORTED groups bypassed `partial_rollout=False` constraints in fully-async rollouts.

### 5. Why This Project Matters in Today's RL Landscape
As the RL community shifts from static PPO trajectories toward highly dynamic, agent-based workflows (like coding and tool-use), frameworks face a bottleneck: bridging scalable inference (SGLang) with robust distributed training (Megatron). 

Slime is attacking the exact pain points of frontier RL:
1.  **Asynchronous & External Inference:** PRs like delta weight syncing and external elastic rollouts mean researchers are no longer forced to statically tie up expensive H800s for both generation and training. 
2.  **Algorithmic Flexibility:** Built-in support for advanced recipes (DAPO, Dr.GRPO, ScaleRL) and turn-node trajectory management for coding agents shows slime's intent to be the de-facto backend for training the next generation of reasoning models.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL (inclusionAI/AReaL) RL Daily Digest — 2026-06-18

## 1. Today's Highlights
The past 24 hours show zero new issues and zero new releases, but feature heavy iteration on distributed execution, memory optimization, and offline debugging. Six open PRs were updated, reflecting active engineering focused on scaling large RL training workflows, specifically addressing FP8 weight transfers, memory bottlenecks in Megatron, and asynchronous debugging.

## 2. Releases
**None.** No new stable or pre-release versions were published in the last 24 hours.

## 3. Important Issues
**None.** There are 0 open issues currently tracked or updated in the repository, indicating either a highly stable main branch or that feature requests and bug tracking are currently being handled directly through PR discussions.

## 4. Key PR Progress
The engineering focus is squarely on high-performance colocation (AWEX), memory optimization, and debugging infrastructure:

*   **[Memory Optimization] [PR #1393](https://github.com/areal-project/AReaL/pull/1393):** Introduces a `disable_grad_buffers_cpu_backup` option for Megatron in colocated training. By skipping CPU backups for gradient buffers (which are recomputed each step anyway), this drastically reduces host memory usage (~4x), mitigating a major bottleneck in large-scale actor-critic weight offloading.
*   **[Quantization] [PR #1406](https://github.com/areal-project/AReaL/pull/1406):** Adds FP8 direct weight transfer in AWEX colocate mode. This prevents implicit dequantization to BF16 during transfer from the training engine (Megatron) to the inference engine (SGLang), maximizing hardware bandwidth and preserving quantization formats.
*   **[Debugging] [PR #1407](https://github.com/areal-project/AReaL/pull/1407):** Implements trajectory dump and replay functionality. By decoupling rollout generation from gradient updates and serializing rollouts to disk, developers can now debug the RL training loop entirely offline without needing to spin up costly inference engines.
*   **[Distributed Execution] [PR #1414](https://github.com/areal-project/AReaL/pull/1414):** Fixes a `torch.distributed.batch_isend_irecv` hang that occurs when creating large numbers of ops using a single group during weight updates in AWEX. Introduces an env var fallback (`AWEX_WU_USE_GROUP=0`) for per-op send/recv.
*   **[Infrastructure] [PR #1161](https://github.com/areal-project/AReaL/pull/1161):** A stale-but-reviewed PR that adds proxy server support via a `RayHTTPLauncher` actor, improving RPC worker scaling through Ray.
*   **[Documentation] [PR #1424](https://github.com/areal-project/AReaL/pull/1424):** Formally introduces **IcePop** and **KPop** configurations/algorithms to the README and documentation, aiming at math and reasoning tasks. 

## 5. Why This Project Matters in Today's RL Landscape
In the current LLM era, Reinforcement Learning from Human Feedback (RLHF) and advanced reasoning (e.g., GRPO variants like KPop/IcePop) are computationally constrained by the friction between training engines (like Megatron) and inference engines (like SGLang). 

AReaL is solving the most critical systems-level blockers in large-scale RL:
1.  **Colocation Efficiency:** By tightly coupling training and inference (AWEX mode) and optimizing memory transfer (skipping unnecessary CPU backups, using FP8), AReaL lowers the hardware barrier for end-to-end RLHF.
2.  **Determinism and Debuggability:** Large-scale distributed RL is notoriously hard to debug. AReaL's focus on offline trajectory replay ([PR #1407](https://github.com/areal-project/AReaL/pull/1407)) decouples environment instability from optimizer bugs, drastically accelerating the development cycle for RL researchers. 
3.  **Hardware Utilization:** Addressing distributed hangups and forcing native FP8 transfers shows a mature push toward maximizing GPU communication bandwidth, a necessary step for training frontier-scale reasoning models.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the daily digest for the TRL (Transformer Reinforcement Learning) open-source ecosystem.

### 1. Today's Highlights
* **DeepSpeed v0.19.2 Breakage & Mitigation**: A breaking change in DeepSpeed v0.19.2 causing `TypeErrors` in ZeRO-3 + PEFT (LoRA) setups triggered an immediate CI hotfix and a dedicated bug fix ([PR #6090](https://github.com/huggingface/trl/pull/6090), [PR #6091](https://github.com/huggingface/trl/pull/6091), [Issue #6089](https://github.com/huggingface/trl/issues/6089)).
* **Mixture-of-Experts (MoE) Support Expansion**: The MoE auxiliary load-balancing loss is being standardized across the framework, with new PRs extending it to GRPO, RLOO, and AsyncGRPO trainers ([PR #6083](https://github.com/huggingface/trl/pull/6083), [PR #6085](https://github.com/huggingface/trl/pull/6085)).
* **AsyncGRPO Feature Parity & Scaling**: Multiple PRs were updated today to align configuration and metrics between `GRPOTrainer` and the experimental `AsyncGRPOTrainer`, alongside new packing-aware dynamic batching optimizations ([PR #6021](https://github.com/huggingface/trl/pull/6021), [PR #6092](https://github.com/huggingface/trl/pull/6092)).
* **Agentic RL Integration**: An experimental integration for the Harbor agentic task suite was introduced to train models directly on environment interactions via GRPO ([PR #6018](https://github.com/huggingface/trl/pull/6018)).

### 2. Releases
* **None** (0 new releases in the last 24 hours).

### 3. Important Issues
* **[OPEN] CI Failure: ZeRO-3 + PEFT TypeError ([#6089](https://github.com/huggingface/trl/issues/6089))**
  * *Summary*: Distributed smoke tests are failing due to a `TypeError: output tensor must have the same type as input tensor`. This was traced back to DeepSpeed 0.19.2 altering how `_configure_distributed_model` handles persistent parameters, breaking non-quantized PEFT.
* **[CLOSED] GRPO Clipping Not Working with DeepSpeed ([#3312](https://github.com/huggingface/trl/issues/3312))**
  * *Summary*: A longstanding bug report regarding `max_grad_norm` being ignored in DeepSpeed Zero-3 configurations during distributed GRPO training. 
* **[CLOSED] GRPO Multiple Policy Updates ([#3197](https://github.com/huggingface/trl/issues/3197))**
  * *Summary*: A conceptual discussion closed today regarding the PPO/GRPO practice of executing multiple optimization steps ($\mu$) on the same trajectory/completion.

### 4. Key PR Progress
* **DeepSpeed Fixes**: [PR #6090](https://github.com/huggingface/trl/pull/6090) provides a temporary hotfix by pinning `deepspeed < 0.19.2`, while [PR #6091](https://github.com/huggingface/trl/pull/6091) submits the actual structural fix for the mixed-dtype parameter issue. [PR #6077](https://github.com/huggingface/trl/pull/6077) also improved FSDP2 performance by optimizing `lm_head.weight` all-gathers during `chunked_nll`.
* **AsyncGRPO Optimizations**: [PR #6092](https://github.com/huggingface/trl/pull/6092) introduces packing-aware dynamic batching, leveraging HF Trainer's gradient accumulation to keep FSDP/EP collectives in lockstep without altering the core training loop. 
* **Agentic Training**: [PR #6018](https://github.com/huggingface/trl/pull/6018) adds `trl[harbor]`, allowing `GRPOTrainer` to connect directly to agentic task suites via `environment_factory`.
* **API Consistency**: [PR #6087](https://github.com/huggingface/trl/pull/6087) and [PR #6086](https://github.com/huggingface/trl/pull/6086) unify `processing_class` auto-loading across CPO, ORPO, BCO, and other preference trainers. Meanwhile, [PR #6021](https://github.com/huggingface/trl/pull/6021), [PR #6020](https://github.com/huggingface/trl/pull/6020), and [PR #6019](https://github.com/huggingface/trl/pull/6019) systematically port GRPO's epsilon, clip-ratio, and logging metrics configurations to AsyncGRPO.
* **Block Diffusion Example**: [PR #6003](https://github.com/huggingface/trl/pull/6003) adds a new SFT recipe for Google's `diffusiongemma-26B-A4B-it`, utilizing uniform random token corruption and autoregressive co-loss.

### 5. Why This Project Matters in Today's RL Landscape
The activity over the last 24 hours highlights TRL's crucial role in democratizing cutting-edge post-training techniques. As the industry shifts heavily towards Group Relative Policy Optimization (GRPO) and Mixture-of-Experts (MoE) architectures, TRL is actively absorbing the operational pain points of distributed training (e.g., FSDP2 all-gathers, DeepSpeed breaking changes). Furthermore, the introduction of Harbor integrations and AsyncGRPO optimizations proves that the library is rapidly evolving beyond static offline RLHF, positioning itself as the default Open Source stack for training agentic systems via environmental feedback.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the daily reinforcement learning ecosystem digest for OpenRLHF.

### 1. Today's Highlights
Activity in the last 24 hours was strictly focused on Pull Request maintenance and closure. Zero new issues, zero new PRs, and zero new releases were recorded. The core development team focused on merging a crucial bug fix for multi-turn agent evaluation and closing an ongoing investigation regarding GPU hanging.

### 2. Releases
No new releases were published today. The repository remains on its latest stable version.

### 3. Important Issues
No new issues were opened or updated in the last 24 hours. The issue tracker saw no active community support requests or bug reports today.

### 4. Key PR Progress
Two existing PRs were updated and closed:
*   **[CLOSED] [PR #1251](https://github.com/OpenRLHF/OpenRLHF/pull/1251): fix: allow eval_dataset with MultiTurnAgentExecutor (#1242)**
    *   **Author:** `codewithyug06`
    *   **Impact:** High. This resolves a critical blocker for Agentic RL workflows. Previously, a hardcoded assertion in `train_ppo_ray.py:673` prevented the use of `--eval_dataset` during training unless a `--remote_rm_url` (Reward Model URL) was provided. This forced constraint broke evaluation for custom agent workflows utilizing `--agent_func_path`. The merge of this fix enables seamless, concurrent evaluation during multi-turn agent training.
*   **[CLOSED] [PR #1245](https://github.com/OpenRLHF/OpenRLHF/pull/1245): Gpu hang**
    *   **Author:** `jun-amd`
    *   **Impact:** Maintenance/Triage. An older PR (initiated May 29) related to GPU hanging investigations has been officially closed. 

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily from static Supervised Fine-Tuning (SFT) to Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning from AI Feedback (RLAIF), OpenRLHF serves as a foundational open-source framework. 

Today's specific PR activity underscores its current relevance: **Scaling Agentic RL**. Multi-turn agent training (using custom `agent_func_path`) is becoming the standard for building autonomous LLM-driven systems. By fixing the multi-turn evaluation pipeline (PR #1251), OpenRLHF continues to provide the open-source community with the necessary infrastructure to train and evaluate complex, tool-using LLM agents at scale using Ray, without being bottlenecked by rigid reinforcement learning reward configurations.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL ecosystem daily digest for **verl** (volcengine/verl) on **2026-06-18**.

### 1. Today's Highlights
* **Agentic Rollouts & Async Pipelines:** Heavy development focus on multi-turn agentic RL. Key PRs were updated to introduce continuous token mechanisms, support multi-trajectories in single rollouts, and optimize vision processing in agent loops. 
* **Hardware Ecosystem Expansion:** Significant strides in hardware compatibility beyond NVIDIA, specifically with major refactoring and CI updates for Huawei Ascend NPUs and an active roadmap for AMD/ROCm.
* **Large-Scale Model Support:** Active PRs are tackling next-gen architectures (DeepseekV4, GLM5, KimiK2.5) and optimized distributed training techniques (prefix-tree MAGI attention, FSDP2 weight sync).

### 2. Releases
* **No new releases** in the last 24 hours.

### 3. Important Issues
* **MoE Routing Instability (#3762):** Highly requested feature (17 👍) discussing routing replay for MOO models in RLVR. Inconsistent router outputs between training and inference engines continue to cause training instability.
* **vLLM & Qwen3.5 Integration Bugs:** 
  * [#6782](https://github.com/volcengine/verl/issues/6782): vLLM fails to emit EOS during Qwen3.5-27B LoRA GRPO with rank=64/alpha=128, resulting in all responses being truncated.
  * [#6563](https://github.com/volcengine/verl/issues/6563): General inability to train Qwen3.5 with vLLM 0.20.2.
* **Infrastructure OOM & Context Parallelism:** 
  * [#6468](https://github.com/volcengine/verl/issues/6468): CPU memory leak during FSDP2 rollout weight sync triggers Ray OOM.
  * [#6786](https://github.com/volcengine/verl/issues/6786): Bug identified in dynamic-cp where batches split by `local_cp_size` fail if data length is smaller than the parallel size.
* **AMD/ROCm Roadmap (#6590):** Q2/Q3 roadmap to bring AMD MI355X and DeepSeek-V level support to parity with NVIDIA and Ascend.

### 4. Key PR Progress
* **Agentic & Async Training:**
  * [#6779](https://github.com/volcengine/verl/pull/6779): Introduces a Continuous Token mechanism for multi-turn agentic rollouts.
  * [#5443](https://github.com/volcengine/verl/pull/5443) & [#6271](https://github.com/volcengine/verl/pull/6271): Merged support for multi-trajectory outputs in a single rollout across standard and fully-async agent loops.
  * [#6789](https://github.com/volcengine/verl/pull/6789): Critical fix offloading `process_vision_info` to a thread executor to unblock the async event loop for VLMs.
* **Backend & Algorithmic Optimizations:**
  * [#6689](https://github.com/volcengine/verl/pull/6689): Drafts prefix-tree MAGI attention for shared-prefix deduplication in SFT and GRPO.
  * [#6572](https://github.com/volcengine/verl/pull/6572): Adds bitwise-aligned full determinism support for vLLM rollouts and reward models.
  * [#6555](https://github.com/volcengine/verl/pull/6555): Implements dynamic context parallelism.
  * [#6512](https://github.com/volcengine/verl/pull/6512): Introduces per-unit LoRA summon and FSDP1/2 compatibility for massive models like Qwen3-Omni-30B.
* **Hardware & Megatron Support:**
  * [#6791](https://github.com/volcengine/verl/pull/6791): Adds Megatron Lite backend documentation and launchers for DeepseekV4, GLM5, and KimiK2.5.
  * [#6777](https://github.com/volcengine/verl/pull/6777): Refactors Ascend NPU patches to allow per-model fault isolation.

### 5. Why This Project Matters in Today's RL Landscape
As RL with Verifiable Rewards (RLVR) and agentic workflows become the dominant paradigm for advancing LLMs, `verl` has positioned itself as the de facto open-source orchestration layer. Today's digest highlights `verl`'s dual focus on **cutting-edge model architectures** (seamlessly integrating support for massive MoE models like DeepSeek-V4 and Qwen3.5) and **hardware agnosticism** (aggressively pushing CI/CD and runtime support for Ascend and AMD MI355X). By solving low-level distributed bottlenecks—such as FSDP2 memory leaks, context parallelism, and async multi-turn agent loops—`verl` is significantly lowering the barrier to entry for large-scale, multi-modal post-training.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# 📊 RL Open-Source Daily Digest: June 18, 2026
**Project Focus:** `torchtune` (PyTorch)

## 1. Today's Highlights
Activity in the `torchtune` ecosystem over the past 24 hours was highly focused on critical bug resolution. While there were no new releases or issue filings, maintainers addressed a high-priority import chain failure in the Reinforcement Learning from Human Feedback (RLHF) module. 

## 2. Releases
*   **None.** No new version tags or releases were published in the last 24 hours.

## 3. Important Issues
*   **None.** No new issues or bug reports were filed in the last 24 hours. 

## 4. Key PR Progress
*   **[OPEN] PR #2966: [CLA Signed, meta-exported] Fix NameError in torchtune rlhf/loss/dpo.py from missing imports**
    *   **Author:** `wjh70301-meta`
    *   **Summary:** This is a critical hotfix for the Mitra DPO (Direct Preference Optimization) pipeline. The file `torchtune/rlhf/loss/dpo.py` was missing necessary imports for `dataclass` and `TypeVar`. This caused a fatal `NameError` at import time, which completely blocked any Mitra DPO unit relying on `torchtune.rlhf.loss.DPOLoss`. 
    *   **Link:** [meta-pytorch/torchtune PR #2966](https://github.com/meta-pytorch/torchtune/pull/2966)

## 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, **Direct Preference Optimization (DPO)** has become a cornerstone algorithm for aligning Large Language Models (LLMs) with human preferences, largely due to its ability by bypass complex and unstable Reward Models and PPO pipelines. `torchtune` provides the lower-level, highly customizable PyTorch primitives required by researchers to train and fine-tune these models at scale. 

Fixes like the one introduced in **PR #2966** are vital for ecosystem stability. An import-time `NameError` on a base loss class creates a hard blocker for downstream alignment research and production pipelines. By resolving these low-level architectural dependencies, `torchtune` ensures that RL engineers can reliably iterate on preference alignment techniques without wrestling with framework internals.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

### RL Ecosystem Daily Digest: Open Instruct
**Date:** 2026-06-18

**1. Today's Highlights**
The Open Instruct repository saw quiet but highly targeted infrastructure maintenance over the last 24 hours, with zero new issues and no new releases. Activity was entirely focused on optimizing hardware flexibility and experiment tracking for GRPO (Group Relative Policy Optimization). Two open PRs were updated, both aiming to lower the barrier to entry for running RLHF at scale.

**2. Releases**
*   **No new releases.** The repository continues to operate on its current stable version.

**3. Important Issues**
*   **None.** There were 0 issues opened or updated in the last 24 hours. The issue backlog remains quiet, indicating relative stability in the current codebase.

**4. Key PR Progress**
*   **[PR #1727](https://github.com/allenai/open-instruct/pull/1727) [OPEN] - Fix `get_wandb_tags` tag-limit handling and log all GRPO configs** *(by mnoukhov)*
    *   *Progress:* Updated yesterday. 
    *   *Details:* Introduces a patch for Weights & Biases (W&B) integration, adding an `extra_tags` argument that automatically truncates to W&B's 64-character limit. This prevents logging silent failures and ensures all GRPO configurations are properly tracked, which is critical for reproducible RL experiments.
*   **[PR #1654](https://github.com/allenai/open-instruct/pull/1654) [OPEN] - Add `use_cpu_adam` CLI toggle and offload validation for GRPO** *(by Bhavyashah20)*
    *   *Progress:* Updated yesterday. 
    *   *Details:* Resolves hardware limitations for researchers. Running GRPO on 7B models typically requires 40–80 GB of VRAM. This PR adds a CLI toggle to easily switch to `DeepSpeedCPUAdam` for optimizer offloading, removing the need for researchers to hack the source code to train on smaller hardware clusters.

**5. Why This Project Matters in Today's RL Landscape**
As the open-source AI community shifts aggressively from standard Supervised Fine-Tuning (SFT) to complex preference optimization and RLHF (e.g., PPO, DPO, GRPO), hardware bottlenecks remain the biggest blocker for independent researchers and smaller academic labs. Open Instruct's recent PR activity perfectly captures the current needs of the RL ecosystem: **democratizing access to large-scale post-training**. By streamlining DeepSpeed CPU offloading for AdamW (#1654) and hardening experiment tracking for GRPO (#1727), Open Instruct is ensuring that robust, on-policy reinforcement learning remains accessible, reproducible, and hardware-efficient.

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