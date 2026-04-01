# RL Open Source Daily Digest 2026-04-02

> Generated: 2026-04-01 22:08 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-04-02 displays a clear bifurcation between **Post-Training LLM/VLM alignment** and **traditional deep RL infrastructure**.

*   **LLM/VLM Focus:** The majority of high-impact activity is concentrated in frameworks supporting Large Language Models (LLMs) and Vision-Language Models (VLMs). Projects like **veRL**, **TRL**, and **slime** are aggressively pursuing low-precision training (MXFP8/NVFP4), asynchronous distributed architectures, and multimodal agent capabilities.
*   **Infrastructure Maturation:** Foundational projects (**Stable Baselines3**, **Gymnasium**, **Tianshou**) are in maintenance or modernization phases (e.g., Python 3.13 support), while cloud-native orchestration layers (**ROCK**, **ROLL**) focus on production-grade stability for Kubernetes and sandboxed environments.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | High (Roadmap, OOMs, RFCs) | High (Diffusion, NeMo, DevOps) | 0 | **Strategic** – Major roadmap release and aggressive ecosystem expansion. |
| **TRL** | High (Critical bugs, CI fails) | High (Async, VLM, Distillation) | 0 | **Reactive & Innovative** – Fixing upstream breaks while pushing new algos. |
| **ROCK** | Medium (K8s stability) | Medium (Verifier, Sandbox) | 0 | **Operational** – Focus on production hardening and cloud integration. |
| **OpenRLHF** | Low (Security discussion) | Medium (Pre-training, Data load) | 0 | **Expanding** – Extending scope from alignment to pre-training and security. |
| **Open Instruct** | None | Medium (OLMo-core, GRPO++) | 0 | **Refactoring** – Deep architectural migration to native training loops. |
| **slime** | None | Medium (nvfp4, Async rollouts) | 0 | **Technical** – Deep focus on hardware efficiency and async stability. |
| **Stable Baselines3** | None | Low (v2.8.0 release wrap) | 1 (v2.8.0) | **Maintenance** – Modernizing Python versions and dependencies. |
| **Tianshou** | None | Low (Legacy cleanup) | 0 | **Cleanup** – Closing long-standing legacy PRs. |
| **rl_games** | Medium (SAC convergence) | None | 0 | **Stalled** – User reports of algorithmic failures without dev response. |
| **Gymnasium** | None | Low (Type hints, CartPole) | 0 | **Stable** – Minor API polish. |
| **ROLL** | None | Low (Cluster fix) | 0 | **Maintenance** – Fixing distributed type safety. |
| **Others** | None | None | 0 | **Dormant** – AReaL, CleanRL, PettingZoo, torchtune saw no activity. |

## Shared Research & Engineering Directions

### Research Directions
*   **Algorithmic Convergence (GRPO + PPO):** There is a distinct trend toward unifying Group Relative Policy Optimization (GRPO) with PPO-style value functions. **Open Instruct** is actively refactoring GRPO to support learned value models (GAE), while **TRL** continues to optimize `AsyncGRPOTrainer`.
*   **Multimodal & Agentic RL:** The shift from text-only RLHF to multimodal agents is universal. **TRL** and **veRL** are building specific abstractions for tool-calling and multimodal content (images/text) in training loops, while **OpenRLHF** and **Open Instruct** are focusing on "sandboxed" execution environments for code-generating agents.
*   **Diffusion RL:** **veRL**'s integration of FlowGRPO marks a significant expansion of RL techniques into the diffusion model space, moving beyond standard autoregressive LLMs.

### Engineering & Infrastructure Directions
*   **Hardware-Aware Precision:** "Low precision" is the keyword of the quarter. **veRL** (MXFP8/NVFP4) and **slime** (nvfp4) are racing to enable FP4 training to reduce memory footprints and increase throughput on next-gen hardware.
*   **Asynchronous & Distributed Scaling:** Synchronous training is being replaced by complex async architectures. **slime** is tackling staleness in async rollouts, **OpenRLHF** introduced multi-process data loading, and **TRL** is optimizing async vLLM integration.
*   **Security & Isolation:** As agents execute code, isolation is critical. **OpenRLHF** discussed sandboxed execution for security, while **ROCK** and **Open Instruct** implemented Docker-in-Docker (DinD) and native verifiers to ensure safe, reproducible agent evaluation.

## Differentiation Analysis

*   **veRL vs. TRL (The Framework Wars):**
    *   **veRL** is positioning itself as the **high-performance, heterogeneous backend**. By focusing on Megatron/FSDP integration and hardware-level precision (NVFP4), it targets industrial-scale distributed training.
    *   **TRL** acts as the **accessible, model-centric toolkit**. Its focus is on tight integration with Hugging Face Transformers, solving user-facing friction points (like Gemma-3 fine-tuning bugs) and rapid prototyping of new techniques (like JSD distillation).
*   **ROCK vs. OpenRLHF (Orchestration vs. Algorithm):**
    *   **ROCK** differentiates by solving the "Last Mile" infrastructure—managing Kubernetes metadata, Docker runtimes, and cloud-native stability.
    *   **OpenRLHF** focuses on the **training logic** itself (Ray/DeepSpeed orchestration), now expanding backward into pre-training support rather than just alignment.
*   **SB3 vs. RL Games (Reliability vs. Speed):**
    *   **Stable Baselines3** maintains its reputation as the reliability standard (now on Python 3.13), whereas **rl_games** faces scrutiny over convergence issues (SAC) despite its reputation for high-speed parallelization in robotics.

## Community Momentum & Maturity
*   **Mature & Stable:** **Gymnasium**, **Stable Baselines3**, and **Tianshou** show low issue volume and high PR closure rates, indicating a stable, mature lifecycle focused on maintenance rather than feature churn.
*   **High Growth & Friction:** **TRL** and **veRL** show "high growth" signals but also high friction. TRL is battling upstream dependency breaks (Transformers v5.4/vLLM 0.10.2), while veRL is managing organizational migration (`volcengine` to `verl-project`) alongside rapid feature releases.
*   **Stalled:** **rl_games** shows warning signs of stagnation, with open issues regarding core algorithm convergence (SAC) remaining unaddressed by maintainers.

## Trend Signals
1.  **FP4 is the New FP16:** The ecosystem is moving aggressively to 4-bit floating point (FP4/NVFP4) for RL training, driven by the need to fit massive models into memory-constrained environments.
2.  **The Rise of the "Sandbox":** RL is no longer just simulation; it is execution. The prevalence of `SandboxEnv` (Open Instruct) and "Docker-in-Docker" (ROCK) signals that safe code execution is now a core requirement for agentic RL.
3.  **Distillation as a Service:** **TRL**'s new `DistillationTrainer` and **OpenRLHF**'s pre-training support signal a blurring of lines between pre-training, fine-tuning, and post-training, with RL techniques being applied earlier in the model lifecycle.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL Daily Digest for **2026-04-02**.

### 📊 RL Daily Digest: ROLL (2026-04-02)

#### 1. Today's Highlights
Activity on the ROLL repository was low volume over the last 24 hours, characterized by a lack of new issues or releases. The primary event was the **closure of a significant bug fix PR** regarding dynamic batching architecture. This indicates ongoing maintenance focused on pipeline stability and resource handling.

#### 2. Releases
*   **No new releases** recorded in the last 24 hours.

#### 3. Important Issues
*   **No active issues** were updated or created in the last 24 hours.

#### 4. Key PR Progress
The focus remains on refining the internal pipeline architecture, specifically regarding resource abstraction:

*   **[#376 [CLOSED] fix: use Cluster instead of WorkerConfig for ref log prob dynamic batching](https://github.com/alibaba/ROLL/pull/376)**
    *   **Author:** dubin555
    *   **Summary:** This PR addresses a type mismatch bug in `RLVRPipeline._train`. Previously, when `use_ref_model=False`, the code incorrectly assigned a configuration object (`WorkerConfig`) to the `worker` variable instead of a runtime object (`Cluster`).
    *   **Significance:** This fix ensures that dynamic batching for reference log probabilities correctly interfaces with the cluster infrastructure rather than just the configuration definition. It prevents potential runtime attribute errors during distributed training runs.

#### 5. Why This Project Matters in Today's RL Landscape
**ROLL** (Rolling Optimized Logistics for Learning) is a critical infrastructure project in the modern RL ecosystem, particularly for **Large Language Model (LLM)** alignment.
*   **Scalability:** As RL shifts from simple environments to complex LLM fine-tuning (RLHF), managing distributed clusters versus static configurations becomes vital.
*   **Robustness:** Fixes like the one seen in PR #376 highlight the maturity required in modern RL libraries—distinguishing between *configuration* (data) and *execution* (cluster objects) is essential for preventing silent bugs in massive distributed training jobs.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem (2026-04-02)

Here is the analysis of the ROCK (alibaba/ROCK) repository activity for the past 24 hours.

## 1. Today's Highlights
Activity on ROCK was focused on **infrastructure hardening** and **DevOps integration**. Key developments include native support for Kata runtime Docker-in-Docker (DinD), the introduction of a native verifier mode for ROCK agents, and critical fixes for sandbox metadata stability in Kubernetes environments.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **K8s Sandbox Data Integrity Bug ([#712](https://github.com/alibaba/ROCK/issues/712)):**
    *   **Details:** A bug was identified where exceptions in Redis data retrieval could result in empty data overwriting valid sandbox info.
    *   **Status:** Open. A fix is currently under review in PR #713.
*   **Kata Runtime DinD Support ([#724](https://github.com/alibaba/ROCK/issues/724)):**
    *   **Details:** Feature request to support Docker-in-Docker within Kata runtime deployments.
    *   **Status:** Open. Related development activity is high (see PRs #731, #732).
*   **Internal CI Restoration ([#727](https://github.com/alibaba/ROCK/issues/727)):**
    *   **Details:** Proposal to restore internal CI trigger workflow configurations to ensure build stability.

## 4. Key PR Progress
*   **Native Verifier & Agent SDK ([#722](https://github.com/alibaba/ROCK/pull/722)):**
    *   **Status:** **Merged/Closed**
    *   **Impact:** Enables the ROCK SDK to submit jobs using a "native verifier mode," enhancing flexibility for agent evaluation. (Closes #723).
*   **Sandbox Metadata Persistence ([#730](https://github.com/alibaba/ROCK/pull/730)):**
    *   **Status:** **Open**
    *   **Impact:** Moves sandbox info persistence from volatile storage to a database, addressing scalability limits. (References #729).
*   **CI Workflow Restoration ([#728](https://github.com/alibaba/ROCK/pull/728)):**
    *   **Status:** **Open**
    *   **Impact:** Implements the configuration needed to restore automated CI triggers.
*   **K8s Sandbox Info Fix ([#713](https://github.com/alibaba/ROCK/pull/713)):**
    *   **Status:** **Open**
    *   **Impact:** Prevents data loss during status checks in Kubernetes environments.

## 5. Why This Project Matters in Today's RL Landscape
While many RL repositories focus solely on algorithmic architectures (e.g., PPO, DQN implementations), **ROCK** appears to be solving the "Last Mile" problem of Reinforcement Learning: **Production-Grade Infrastructure**.

Today’s updates highlight a shift toward **Cloud-Native RL**. By fixing Kubernetes sandbox stability and adding support for complex runtimes like Kata/DinD, ROCK is positioning itself as a robust orchestration layer capable of handling complex, containerized RL workloads at scale. The introduction of "native verifier modes" suggests a maturing API that allows for tighter integration between training loops and deployment validation—critical for real-world RL applications like recommendation systems or robotic control simulation.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime
**Date:** 2026-04-02

## 1. Today's Highlights
Activity in the `slime` repository over the last 24 hours focused exclusively on engineering improvements and bug fixes via Pull Requests. Key areas of attention include low-precision Reinforcement Learning (nvfp4), robust asynchronous training architectures, and Vision-Language Model (VLM) fine-tuning pipelines. No new issues or releases were recorded.

## 2. Releases
*   **None.**

## 3. Important Issues
*   **None updated** in the last 24 hours.

## 4. Key PR Progress
*   **[Feature] Support nvfp4 RL** (#1505)
    *   **Status:** Open
    *   **Summary:** Introduces support for NVIDIA FP4 (nvfp4) quantization within the Slime RL process. This indicates a move towards optimizing memory footprint and throughput for large-scale RL training.
    *   **Link:** [THUDM/slime #1505](https://github.com/THUDM/slime/pull/1505)
*   **Enhanced Off-Policy Async Rollout** (#1781)
    *   **Status:** Open
    *   **Summary:** A significant architectural update to the `one_step_off` and `fully_async` modes. It addresses "stability-staleness" trade-offs by implementing policy version tracking and enabling partial rollouts, critical for distributed RL stability.
    *   **Link:** [THUDM/slime #1781](https://github.com/THUDM/slime/pull/1781)
*   **fix(geo3k-vlm-sft): remove --apply-chat-template** (#1791)
    *   **Status:** Open
    *   **Summary:** Fixes a `TypeError` in the `geo3k` VLM SFT script. The fix ensures that `sft_rollout.generate_rollout()` correctly receives a list of message dicts rather than a pre-formatted string.
    *   **Link:** [THUDM/slime #1791](https://github.com/THUDM/slime/pull/1791)

## 5. Why This Project Matters in Today's RL Landscape
`slime` (likely evolving from or related to the CogAlign/ChatGLM ecosystem) is positioning itself as a high-performance framework for **Post-Training** and **Alignment** of Large Language Models (LLMs) and Vision-Language Models (VLMs).

*   **Hardware Efficiency:** The integration of **nvfp4** (#1505) places the project at the forefront of hardware-aware acceleration, essential for cost-effective RLHF on modern NVIDIA architectures.
*   **Scalability:** By solving staleness issues in **Async Rollouts** (#1781), the project addresses one of the biggest bottlenecks in distributed RL: the latency between policy updates and sample collection.
*   **Multimodality:** The specific fixes for VLM SFT (#1791) confirm the project's active expansion beyond text-only RLHF into complex multimodal reasoning tasks.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Transformer Reinforcement Learning)
**Date:** 2026-04-02

## 1. Today's Highlights
Activity in the TRL repository remains high with a strong focus on **stabilizing CI/CD pipelines** amidst breaking changes in upstream dependencies (Transformers v5.4+ and vLLM 0.10.2). Concurrently, significant feature expansions are underway for **multimodal RL (VLMs)** and **Agentic workflows**, particularly within the `GRPOTrainer`. Key themes include memory optimization for large-scale training and resolving regex parsing bottlenecks in tool-calling scenarios.

## 2. Releases
**No new releases** were recorded in the last 24 hours.

## 3. Important Issues
*   **Critical Performance Bug (GRPO/Tools):** Issue [#5415](https://github.com/huggingface/trl/issues/5415) reports catastrophic backtracking in the `qwen3_schema` regex within `parse_response`, causing training to hang indefinitely during degenerate tool calls.
*   **Gemma-3 Fine-Tuning Blocker:** Users are unable to fine-tune Gemma-3 models due to a `ValueError` regarding missing `token_type_ids`. This issue ([#5032](https://github.com/huggingface/trl/issues/5032)) has garnered significant community attention (+7 👍).
*   **CI Instability:** Multiple issues ([#5428](https://github.com/huggingface/trl/issues/5428), [#5429](https://github.com/huggingface/trl/issues/5429)) highlight failures with dev dependencies, specifically regarding `Qwen2_VL` keys and type errors in reward training.

## 4. Key PR Progress
*   **Memory & Efficiency:**
    *   PR [#5349](https://github.com/huggingface/trl/pull/5349) introduces a chunked LM head for `AsyncGRPOTrainer` to prevent materializing massive logits tensors, a critical optimization for large vocabulary models.
    *   PR [#5413](https://github.com/huggingface/trl/pull/5413) optimizes on-policy vLLM training by skipping redundant forward passes for importance sampling.
*   **Agentic & Multimodal Capabilities:**
    *   PR [#5398](https://github.com/huggingface/trl/pull/5398) adds per-sample tool filtering to `GRPOTrainer`, essential for heterogeneous agent environments.
    *   PR [#5323](https://github.com/huggingface/trl/pull/5323) enables `environment_factory` to return multimodal content (images + text) for VLM training.
*   **New Algorithms & Losses:**
    *   PR [#5407](https://github.com/huggingface/trl/pull/5407) proposes a new `DistillationTrainer` supporting generalized JSD loss and mixed on/off-policy data.
    *   PR [#5406](https://github.com/huggingface/trl/pull/5406) implements length-normalized sigmoid loss for DPO, aligning with state-of-the-art methods like Tulu-3.
*   **Maintenance:**
    *   PR [#5423](https://github.com/huggingface/trl/pull/5423) fixes breaking `ImportError`s caused by the recent vLLM 0.10.2 update.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to bridge the gap between large language models (LLMs) and reinforcement learning. The current influx of PRs related to **Async GRPO**, **vLLM integration**, and **Distillation** reflects the industry's shift away from static RLHF toward **online, memory-efficient, and agent-specific training loops**. By addressing VLM-specific bugs and regex parsing for tool calls, TRL is positioning itself as the infrastructure backbone for the next generation of autonomous, multimodal agents.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Daily Digest: Tianshou
**Date:** 2026-04-02

## 1. Today's Highlights
Activity on the Tianshou repository was focused exclusively on maintenance and legacy code reconciliation. In the last 24 hours, **4 Pull Requests were updated and closed**, addressing areas ranging from low-level data handling (`Batch` objects) to high-level API observation normalization. No new issues or releases were recorded.

## 2. Releases
**None.** (No new releases detected in the last 24 hours).

## 3. Important Issues
**None.** (No new or updated issues in the last 24 hours).

## 4. Key PR Progress
The following PRs were updated and subsequently closed, indicating a cleanup or merge effort:

*   **[CORE] Batch Optimization ([PR #110](https://github.com/thu-ml/tianshou/pull/110))**
    *   **Details:** A legacy PR (originally created 2020-07-06) regarding `Batch.empty` modifications. It introduces in-place fill mechanisms and a `copy` option for `Batch` construction.
    *   **Significance:** Optimizing `Batch` processing is critical for Tianshou's high-throughput data pipeline in Replay Buffers.

*   **[BUGFIX] Discrete BCQ Stability ([PR #995](https://github.com/thu-ml/tianshou/pull/995))**
    *   **Details:** Fixes a specific bug where `np.inf` was utilized instead of `torch`-based infinity values.
    *   **Significance:** Ensures tensor consistency on GPU devices for the Discrete Batch-Constrained Q-learning algorithm (Closes #963).

*   **[HIGH-LEVEL API] Env Normalization Fix ([PR #1061](https://github.com/thu-ml/tianshou/pull/1061))**
    *   **Details:** Fixes observation running mean/std (RMS) handling within the `watch` environment functionality.
    *   **Significance:** Essential for correct evaluation metrics when using observation normalization wrappers.

*   **[DOCS] Trainer Notebooks ([PR #1009](https://github.com/thu-ml/tianshou/pull/1009))**
    *   **Details:** Updates and fixes for Jupyter notebooks related to the trainer functional components.

## 5. Why This Project Matters in Today's RL Landscape
Tianshou remains a pivotal library in the Reinforcement Learning ecosystem due to its **modular, object-oriented design** and efficient handling of massive replay buffers via the `Batch` class. Unlike rigid framework implementations, Tianshou allows researchers to customize collectors, trainers, and buffers with minimal overhead. The resolution of PR #110 (Batch handling) and #1061 (Obs RMS) reinforces its reliability for production-level RL training loops where data pipeline efficiency and evaluation accuracy are paramount.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-04-02

## 1. Today's Highlights
Activity in the OpenRLHF repository over the last 24 hours focused heavily on **infrastructure robustness and training flexibility**. Key contributions include proposals for multi-process data loading and random weight initialization, alongside a critical security discussion regarding sandboxed environments for agentic workflows.

## 2. Releases
*   **No new releases** recorded for 2026-04-02.

## 3. Important Issues
*   **[Security] Sandboxed Execution for Multi-turn Agents** ([#1210](https://github.com/OpenRLHF/OpenRLHF/issues/1210))
    *   **Context:** As OpenRLHF expands into multi-turn agent training, user `congwang-mk` raised a concern about the current `--agent_func_path` implementation.
    *   **Risk:** Rollout episodes currently possess full host access (filesystem, network, environment variables). A malicious or erratic LLM-generated action could corrupt shared state or compromise the host during scaled training.
    *   **Implication:** Highlights the urgent need for containerized isolation (e.g., Docker/gVisor) to safely handle tool calls and code execution during agent RL fine-tuning.

## 4. Key PR Progress
*   **[Feat] Pre-training Support via `--from_scratch`** ([#1209](https://github.com/OpenRLHF/OpenRLHF/pull/1209))
    *   Introduces a flag to initialize models with random weights based solely on config, extending OpenRLHF's utility from pure fine-tuning/alignment to full pre-training research workflows.
*   **[Feat] Multi-process Data Loading** ([#1207](https://github.com/OpenRLHF/OpenRLHF/pull/1207))
    *   Adds `--dataloader_num_workers` across all pipelines (SFT, RM, DPO, PPO). This addresses CPU bottlenecks by enabling `persistent_workers`, a crucial optimization for high-throughput distributed training.
*   **[Fix] Checkpoint Load Resilience** ([#1208](https://github.com/OpenRLHF/OpenRLHF/pull/1208))
    *   Implements graceful error handling for `--load_checkpoint`. Instead of crashing on empty/invalid DeepSpeed directories, the system now logs a warning and initiates training from scratch, improving automated pipeline reliability.

## 5. Why This Project Matters in Today's RL Landscape
OpenRLHF remains a cornerstone of the modern RLHF stack, specifically bridging the gap between research flexibility and production-scale distributed training (leveraging Ray and DeepSpeed). Today's updates reflect the ecosystem's maturation: moving beyond simple PPO loops to encompass the full lifecycle of model development—from **pre-training initialization** to **sandboxed agent execution**—ensuring safety and efficiency as RL techniques are applied to increasingly autonomous LLM agents.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl-project/verl
**Date:** 2026-04-02

## 1. Today's Highlights
The **veRL** (Volcengine RL) project shows significant activity today with a focus on **infrastructure modernization** and **ecosystem expansion**. A new roadmap for 26Q2 has been published, outlining aggressive support for low-precision training (MXFP8/NVFP4) and Diffusion RL. Concurrently, the community is mobilizing to migrate repository references from `volcengine` to `verl-project` and adopt modern tooling like `uv`.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[Roadmap] verl 26Q2 Published:** The team released the [26Q2 Roadmap](https://github.com/verl-project/verl/issues/5836), prioritizing Megatron FSDP enabling, VLM performance improvements, and MXFP8/NVFP4 low-precision training.
*   **[RFC] Agent Abstractions:** A new proposal ([#5790](https://github.com/verl-project/verl/issues/5790)) suggests introducing `AgentFramework` and `Trajectory Gateway` to decouple agent lifecycles from the RL pipeline, gaining strong community approval (+10 👍).
*   **Megatron Long Context OOM:** Users report Out-Of-Memory errors when training Qwen35-35B with Megatron backend on 62k contexts ([#5840](https://github.com/verl-project/verl/issues/5840)).
*   **Call for Contribution:** A "good first issue" ([#5852](https://github.com/verl-project/verl/issues/5852)) is open to help migrate 242 occurrences of old `volcengine/verl` paths to the new organization.

## 4. Key PR Progress
*   **Diffusion RL Support:** PR [#5802](https://github.com/verl-project/verl/pull/5802) introduces **FlowGRPO**, integrating Diffusers with FSDP for diffusion model reinforcement learning.
*   **NeMo Integration:** Work-in-progress PR [#5833](https://github.com/verl-project/verl/pull/5833) adds support for **NVIDIA NeMo Gym** environments, enabling multi-turn tool calling on the Megatron path.
*   **Performance Optimization:** PR [#5838](https://github.com/verl-project/verl/pull/5838) proposes skipping training for zero-advantage responses, potentially reducing training steps by ~75% for high-accuracy batches.
*   **AI-Assisted DevOps:** Several PRs ([#5843](https://github.com/verl-project/verl/pull/5843), [#5846](https://github.com/verl-project/verl/pull/5846)) introduce Claude Code skills and instructions to automate code contributions and validation.

## 5. Why This Project Matters in Today's RL Landscape
veRL is positioning itself as a production-grade, heterogeneous RL framework. By bridging the gap between **LLMs** (via vLLM/SGLang rollouts) and **Diffusion Models** (via the new FlowGRPO trainer), and standardizing hardware support from NVIDIA to Ascend NPU, it addresses the fragmentation in the post-training ecosystem. The move toward agent-specific abstractions and low-precision training aligns with the industry shift toward autonomous agents and cost-efficient scaling.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-04-02 | **Repository:** allenai/open-instruct

## 1. Today's Highlights
Activity in the last 24 hours focused heavily on infrastructure modernization and algorithmic extensibility. The team is aggressively integrating **OLMo-core** native training loops and refactoring the **GRPO** (Group Relative Policy Optimization) implementation to support advanced features like PPO-style value models and evolving rubrics.

## 2. Releases
No new releases were tagged today.

## 3. Important Issues
There were no new or updated issues in the last 24 hours.

## 4. Key PR Progress
The development cycle shows a clear split between architectural refactoring and capability expansion.

*   **Infrastructure Migration (OLMo-core):**
    *   [**#1579**](https://github.com/allenai/open-instruct/pull/1579) (Open): Introduced a new SFT trainer (`olmo_core_finetune.py`) utilizing OLMo-core’s native infrastructure, including HFDataLoader support and ephemeral checkpointing.
    *   [**#1576**](https://github.com/allenai/open-instruct/pull/1576) (Closed): Merged extraction of shared config dataclasses and helpers, paving the way for the new trainer.

*   **Algorithmic Enhancements (GRPO & PPO):**
    *   [**#1462**](https://github.com/allenai/open-instruct/pull/1462) (Open): Significant update to `grpo_fast.py` to support PPO-style training with a learned value model (GAE) alongside standard GRPO.
    *   [**#1578**](https://github.com/allenai/open-instruct/pull/1578) (Open): Refactoring GRPO utilities, including inlining critical functions like `mask_logprobs` and renaming configs to `GRPOExperimentConfig` for clarity.
    *   [**#1581**](https://github.com/allenai/open-instruct/pull/1581) (Open): Wired "evolving rubric" config flags into the training loop, enabling dynamic reward structures.

*   **Sandboxing & Tooling:**
    *   [**#1492**](https://github.com/allenai/open-instruct/pull/1492) (Open): Added `SWERLSandboxEnv` for per-sample Docker tasks, enhancing reproducibility for code generation tasks via a `submit` tool.

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct remains a critical barometer for the shift from static Supervised Fine-Tuning (SFT) to **Post-Training RL**. Today's updates highlight a major trend in the 2026 landscape: the convergence of **PPO** and **GRPO** methodologies within single codebases to balance stability (PPO) with efficiency (GRPO). Furthermore, the introduction of `SWERLSandboxEnv` underscores the industry-wide focus on **agentic workflows** where models must execute and verify code in isolated, secure environments.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

Here is the RL Daily Digest for **2026-04-02**.

### 1. Today's Highlights
The **rl_games** repository saw moderate activity with **3 updated issues** and **0 new PRs**. The focus was primarily on troubleshooting algorithm performance (SAC) and identifying gaps in checkpoint management and training configuration. No new code was merged or released in the last 24 hours.

### 2. Releases
**None.**
There have been no new tags or releases published recently. The community is currently relying on the existing codebase, highlighting the need for the pending fixes discussed in the issues.

### 3. Important Issues

*   **Potential SAC Implementation Flaw (#341)**
    *   **Summary:** User `ASDAlexander77` reports that the Soft Actor-Critic (SAC) implementation fails to converge on a drone flight simulation task, whereas a standard SB3 implementation succeeds under identical conditions.
    *   **Status:** OPEN (26 comments).
    *   **Link:** [Issue #341](https://github.com/Denys88/rl_games/issues/341)

*   **Checkpoint Loading Logic Gap (#345)**
    *   **Summary:** A request to fix `max_epoch` and `max_frames` counters which currently do not reset when a checkpoint is loaded. The user proposes an independent `n_epochs` variable to strictly limit iterations per training session.
    *   **Status:** OPEN (1 comment).
    *   **Link:** [Issue #345](https://github.com/Denys88/rl_games/issues/345)

*   **PPO Inference Performance Discrepancy (#344)**
    *   **Summary:** A report that PPO agents achieve significantly lower rewards during the inference/play stage compared to the metrics recorded during training and checkpoint saving.
    *   **Status:** OPEN.
    *   **Link:** [Issue #344](https://github.com/Denys88/rl_games/issues/344)

### 4. Key PR Progress
**No Activity.**
There were no updates to Pull Requests in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
**rl_games** remains a critical high-performance library for Reinforcement Learning, particularly favored for robotics and continuous control tasks (e.g., IsaacGym environments). Its PyTorch-based implementation of PPO and SAC is designed for massive parallelization. However, today's issues highlight a growing need for the library to ensure **parity with baselines** (like SB3) regarding convergence guarantees and to improve **workflow robustness** (checkpoint resumption) to maintain its status as a go-to solution for production-grade RL training.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# RL Daily Digest: Gymnasium
**Date:** 2026-04-02

## 1. Today's Highlights
Activity on the Gymnasium repository was focused on maintenance and quality-of-life improvements rather than feature expansion. Two Pull Requests were closed, addressing type hint strictness in wrappers and introspection capabilities for the classic `CartPole` environment. No new issues or releases were recorded.

## 2. Releases
*   **None.** No new versions were tagged in the last 24 hours.

## 3. Important Issues
*   **None.** Zero issues were created or updated. This suggests a period of stability or reduced user friction following recent updates.

## 4. Key PR Progress
Two PRs were closed, focusing on API consistency and environment metadata:

*   **[CLOSED] [Fix TransformObservation `__init__()` (#1552)](https://github.com/Farama-Foundation/Gymnasium/pull/1552)**
    *   **Context:** Resolved a typing bug in the `TransformObservation` wrapper where the pipe symbol (`|`) was incorrectly interpreted as a Union type rather than a default value assignment for `observation_space`.
    *   **Impact:** Fixes breaking changes for existing codebases; ensures the argument is correctly optional.

*   **[CLOSED] [Add reset_bounds info to CartPole reset() info dict (#1543)](https://github.com/Farama-Foundation/Gymnasium/pull/1543)**
    *   **Context:** Enhanced the `CartPole` environment by populating the empty dictionary returned by `env.reset()`.
    *   **Impact:** Adds `reset_bounds` to the info dict, improving debuggability and allowing agents to access initial state parameters without querying the environment wrapper manually.

## 5. Why This Project Matters in Today's RL Landscape
As the spiritual successor to OpenAI Gym, **Gymnasium** remains the de facto standard API specification for single-agent reinforcement learning. While deep learning frameworks fluctuate in popularity, Gymnasium provides the stable interface necessary for benchmarking algorithms. Today's updates, specifically the refinement of `TransformObservation`, highlight the project's current maturity phase: prioritizing strict type safety and developer experience over architectural shifts.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Daily Digest: Stable Baselines3
**Date:** 2026-04-02

## 1. Today's Highlights
Stable Baselines3 (SB3) has officially rolled out **v2.8.0**, a significant update that modernizes the library's Python environment support. The highlight of the day is the **deprecation of Python 3.9** in favor of **Python 3.13**, alongside internal modernization efforts such as switching to `pygame-ce` and stricter `zip` validation. While the issue tracker remains quiet, the repository shows active maintenance with 3 recent PR updates, including a new proposal for `torch.compile` integration.

## 2. Releases
### **v2.8.0**
This release focuses on dependency modernization and stability.
*   **Dependency Shifts:** Dropped support for **Python 3.9**; added official support for **Python 3.13**. Extras now install `pygame-ce` instead of standard `pygame`.
*   **Code Quality:** Enforced `strict=True` for all `zip(...)` calls to prevent runtime logic errors.
*   **Fixes & Additions:** Resolved saving/loading bugs in MaskablePPO and updated the RL Zoo with default hyperparameters for unlisted environments.
*   **Link:** [Release v2.8.0](https://github.com/DLR-RM/stable-baselines3/releases/tag/v2.8.0)

## 3. Important Issues
*   **No Updates:** There were no active issues updated in the last 24 hours. This suggests a period of stability following the new release or a lull in community bug reporting.

## 4. Key PR Progress
*   **[OPEN] Integration of `torch.compile`:** PR [#2234](https://github.com/DLR-RM/stable-baselines3/pull/2234) proposes adding examples for utilizing `torch.compile`. This aims to provide out-of-the-box speed improvements for training agents, addressing performance optimization needs.
*   **[CLOSED] Release Logistics:** PR [#2235](https://github.com/DLR-RM/stable-baselines3/pull/2235) served as the merge vehicle for the v2.8.0 release.
*   **[CLOSED] Documentation Clarity:** PR [#2233](https://github.com/DLR-RM/stable-baselines3/pull/2233) addressed documentation regarding `is_image_space` and `FrameStackObservation`. It was noted during review as having an unfilled PR template and potential LLM generation, but the fix regarding dimension handling was acknowledged.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the gold standard for reliable, industry-grade Reinforcement Learning implementations. By aggressively updating to support **Python 3.13** and shedding legacy Python 3.9 support, the project ensures compatibility with the latest performance optimizations in the Python interpreter. The move to explore `torch.compile` indicates a continued commitment to reducing computational overhead, which is critical as RL models become increasingly complex.

</details>