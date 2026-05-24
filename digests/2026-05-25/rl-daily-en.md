# RL Open Source Daily Digest 2026-05-25

> Generated: 2026-05-24 22:16 UTC | Projects covered: 15

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
The RL open-source ecosystem is currently experiencing a clear bifurcation. The vast majority of activity and innovation is concentrated on scaling Reinforcement Learning from Human Feedback (RLHF) and Group Relative Policy Optimization (GRPO) for Large Language Models (LLMs) and Vision-Language Models (VLMs). Conversely, traditional single-agent and foundational RL libraries remain in a state of maintenance or dormancy. The overarching theme across the active projects is overcoming the massive memory, communication, and distributed compute bottlenecks associated with aligning multi-billion parameter models.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **PettingZoo** | 36 | 27 | 0 | High maintenance; core API standardization and bug fixes. |
| **TRL** | 12 | 5 | 0 | Active algorithm refinement; stabilizing GRPO/DAPO and vLLM integration. |
| **verl** | 2 | 6 | 0 | Deep infrastructure work; fixing FSDP/Megatron memory crashes. |
| **Gymnasium** | 1 | 1 | 0 | Targeted API enhancements; heterogeneous graph support and rendering perf. |
| **slime** | 1 | 1 | 0 | Scaling optimizations; reducing context parallelism communication overhead. |
| **AReaL** | 2 | 0 | 0 | User friction; unresolved OOM errors with newer base models (Qwen3.5). |
| **OpenRLHF** | 1 | 0 | 0 | Feature gap identification; missing multi-turn agent evaluation. |
| **ROCK** | 0 | 1 | 0 | CI/CD hardening; network reachability tests for self-hosted runners. |
| **ROLL** | 0 | 1 | 0 | Data quality control; configurable VLM prompt filtering. |
| **Others*** | 0 | 0 | 0 | Dormant / No recent activity. |

*\*CleanRL, Open Instruct, rl_games, Stable Baselines3, Tianshou, and torchtune recorded zero activity in the last 24 hours.*

## Shared Research & Engineering Directions

**Research Signals**
*   **Advanced Policy Loss Formulations:** Moving beyond standard PPO, frameworks are actively refining the mathematical rigor of new RLHF algorithms. TRL is addressing the token-level vs. prompt-level loss aggregation debate for DAPO.
*   **Complex State & Multi-Agent Paradigms:** Gymnasium is expanding its `Graph` space to handle heterogeneous, dictionary-based features for combinatorial optimization, while PettingZoo is pushing to standardize global `.state()` representations for Centralized Training, Decentralized Execution (CTDE) in MARL.

**Engineering & Infrastructure Signals**
*   **Distributed Memory & Communication Bottlenecks:** The most pressing engineering challenge is GPU memory optimization. `verl` is fixing FSDP2 OOM errors via cross-shard memory sleep propagation, `slime` is reducing `all gather` operations for context parallelism, and `AReaL` users are battling static VRAM offloading failures.
*   **Hardware & Inference Engine Integration:** Reconciling training loops with high-throughput inference engines (vLLM, TensorRT-LLM) across diverse hardware (NVIDIA vs. Apple MPS) remains a primary friction point, heavily impacting TRL and verl.
*   **Multi-Turn and Agentic Workflows:** Tool-integrated reasoning and multi-step agent training are maturing, prompting the need for variable batch sizes (`slime`), multi-turn evaluation support (`OpenRLHF`), and strict prompt filtering to prevent reward hacking (`ROLL`).

## Differentiation Analysis
*   **Algorithmic Abstraction vs. bare-metal Infrastructure:** Projects like **TRL** and **PettingZoo** operate at higher levels of abstraction, focusing on API standardization, loss computation accuracy, and type safety. In contrast, **verl**, **slime**, and **AReaL** operate closer to the bare metal, acting as bridges between low-level distributed training frameworks (FSDP2, Megatron) and inference servers.
*   **Focus Scope:** **Gymnasium** and **PettingZoo** remain focused on traditional single and multi-agent environments (physics, rendering, classic control). The rest of the active ecosystem (**TRL, verl, OpenRLHF, slime, ROLL, ROCK**) is entirely specialized in post-training alignment (RLHF/GRPO) for LLMs and VLMs. 

## Community Momentum & Maturity
*   **High-Volume Maintenance:** **PettingZoo** leads in raw issue/PR volume, indicating a widely used project actively stress-tested by its community, requiring continuous patching (e.g., physics bugs, typing strictness).
*   **Scaling Friction:** The issues opened against **TRL**, **verl**, and **AReaL** highlight a maturing ecosystem pushing against hardware limits. The community is no longer asking "how to run the algorithm," but rather "how to prevent NaN losses, OOM crashes, and IPC timeouts at scale."
*   **Enterprise Maturation:** Activity in **ROCK** and **ROLL** (CI hardening and data-quality filters) signals a shift from academic prototyping to production-grade reliability, ensuring distributed RL workloads remain stable for enterprise applications.

## Trend Signals
*   **Agentic RL is the Next Frontier:** The focus is shifting from single-turn instruction tuning to multi-turn execution. Frameworks are rapidly patching toolkits to support dynamic batch sizing, multi-step environment execution, and complex reward filtering.
*   **The Dominance of GRPO/DAPO:** Traditional RLHF (PPO) is making way in open-source discussions for group-relative and advanced policy optimization methods, driven by the need for more stable, memory-efficient alignment of massive models.
*   **Extreme Context Scaling:** Frameworks are dedicating heavy engineering resources to Context Parallelism (CP) and sequence parallelism, preparing the infrastructure necessary to train long-context reasoning models natively.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for May 25, 2026.

### 1. Today's Highlights
*   **Quiet Period:** The ROLL repository experienced minimal activity over the past 24 hours, with zero new releases and zero active issue updates.
*   **Sustained PR Focus:** The sole activity comes from an ongoing pull request aimed at enhancing Vision-Language Model (VLM) integrations by introducing configurable prompt filtering capabilities—a vital component for RLHF data quality.

### 2. Releases
*   **None.** No new versions or tags were published today. 

### 3. Important Issues
*   **None.** There are currently 0 open or updated issues in the repository, suggesting a stable codebase or a current lull in community bug reporting.

### 4. Key PR Progress
*   **[OPEN] [feat(vlm): 添加可配置的 prompt 过滤功能 (Add configurable prompt filtering)](https://github.com/alibaba/ROLL/pull/369)**
    *   **Author:** Damon-GSY
    *   **Context:** Opened in early March 2026, this PR received an update on May 24. It introduces a new `VLMFilterConfig` to the main `rlvr_config.py` file. 
    *   **Significance:** In Reinforcement Learning from Human Feedback (RLHF) and Vision-Language Model (VLM) pipelines, prompt quality directly impacts reward model accuracy and policy optimization. Implementing configurable prompt filtering provides engineers with the necessary knobs to sanitize batches, filter out low-quality multimodal prompts, and prevent reward hacking during training.

### 5. Why This Project Matters in Today's RL Landscape
**ROLL (Open-Source RL Infrastructure)** represents a critical pillar in the modern AI stack: scaling Reinforcement Learning post-training. As the industry shifts heavily toward RLHF and RL from AI Feedback (RLAIF) to align Large Language Models (LLMs) and Vision-Language Models (VLMs), the underlying distributed training infrastructure often becomes a bottleneck. 

Projects like ROLL are essential because they provide the distributed execution, orchestration, and specialized configurability (like VLM prompt filtering) needed to run stable, large-scale RL training loops over multi-billion parameter models. Tracking ROLL provides insights into how top-tier organizations are solving the engineering challenges of production-level model alignment.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

### RL Open-Source Ecosystem Daily Digest: ROCK
**Date:** 2026-05-25 

#### 1. Today's Highlights
Activity on the Alibaba/ROCK repository over the past 24 hours has been highly focused on infrastructure and continuous integration (CI) reliability. The ecosystem saw no new feature requests, bug reports, or version releases, with the sole development activity being the closure of a CI-focused pull request.

#### 2. Releases
*   **No new releases** were published in the last 24 hours.

#### 3. Important Issues
*   **None.** There are 0 new or updated issues. The maintainers and community did not report any new bugs, feature requests, or architectural discussions in the past day.

#### 4. Key PR Progress
*   **[CLOSED] [test: add network reachability verification for CI](https://github.com/alibaba/ROCK/pull/1009)**
    *   **Author:** 4ek0
    *   **Analysis:** This PR was updated and closed recently (having been created on 2026-05-23). It introduces a network connectivity test specifically designed for the CI environment to verify internal service reachability on self-hosted runners. While not a core algorithmic update, this is a critical infrastructure maintenance step. Self-hosted CI runners for large RL frameworks often require access to internal cluster APIs, proprietary dataset endpoints, or distributed simulation environments. Ensuring reachability prior to running extensive RL training test suites prevents false-negative CI failures and saves significant developer debugging time.

#### 5. Why This Project Matters in Today's RL Landscape
While today's update is strictly operational, ROCK (Real-time Off-policy Continuous learning with Kubernetes) represents a critical evolution in applied Reinforcement Learning. As RL transitions from isolated research notebooks to production-grade systems (e.g., autonomous driving, large-scale recommendation systems, and robotics), **deployment and scaling infrastructure** have become the primary bottlenecks. 

Projects like ROCK are essential because they bridge the gap between offline RL algorithms and distributed, Kubernetes-native architectures. Maintaining robust CI pipelines—as evidenced by [PR #1009](https://github.com/alibaba/ROCK/pull/1009)—is a hallmark of mature, enterprise-grade open-source software, ensuring that complex distributed RL workloads remain stable, scalable, and reliable for real-world applications.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Ecosystem Daily Digest: THUDM/slime
**Date:** 2026-05-25

### 1. Today's Highlights
Activity in the `THUDM/slime` repository over the past 24 hours was focused on scaling up distributed RL training infrastructure. Key discussions center around mitigating communication bottlenecks in context parallelism (CP) for long-sequence models, alongside ongoing infrastructure development to support dynamic batch sizes in Megatron-based training. 

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **Optimizing Context Parallelism for Long Sequences** [[#1062](https://github.com/THUDM/slime/issues/1062)]
    *   **Status:** Open (Flagged as `good first issue`)
    *   **Context:** A user reported that utilizing context parallelism (`cp=2`) currently doubles the training time compared to `cp=1`. 
    *   **Technical Proposal:** The suggested optimization involves reducing the `all gather` operations for entropy and log probabilities. Instead, calculating local losses could significantly drop the communication overhead, which is a critical bottleneck for extreme-context-length RL agents.

### 4. Key PR Progress
*   **Variable Global Batch Size Support** [[PR #1933](https://.com/THUDM/slime/pull/1933)]
    *   **Author:** zhuzilin
    *   **Status:** Open (Tagged `run-ci-megatron`, part 2 of an N-part series)
    *   **Context:** This PR introduces support for training with a variable global batch size. This is a crucial architectural update for large-scale RL (like GRPO or PPO) where on-policy batch sizes might fluctuate dynamically based on episode lengths and environment throughput.

### 5. Why This Project Matters in Today's RL Landscape
In the modern RL landscape—dominated by the alignment of massive LLMs and complex reasoning tasks—distributed training frameworks are the primary bottleneck. `slime` provides critical optimizations for handling extreme sequence lengths (via Context Parallelism) and distributed scaling (via Megatron integration). The current issue and PR activity highlight a maturing ecosystem actively solving the exact distributed memory and communication bottlenecks required to train next-generation, long-context RL agents efficiently.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Open-Source Ecosystem Daily Digest: AReaL
**Date:** 2026-05-25 | **Project:** [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL)

## 1. Today's Highlights
Activity on the AReaL repository was limited to issue tracking over the past 24 hours, with zero new pull requests or releases. The focus remained on hardware constraints during LLM training and legacy feature requests, with one issue being automatically marked as stale.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
Two issues saw updates (primarily stale-bot activity) and highlight current user challenges:

*   **[Question] Abnormally High VRAM Usage with Qwen3.5 (OPEN)** | [#1319](https://github.com/areal-project/AReaL/issues/1319)
    *   **Context:** A user reported extreme out-of-memory (OOM) errors when upgrading from Qwen3-4B to Qwen3.5-4B on an H100 GPU. Even with `fsdp.offload_params` enabled, the reference (ref) and actor models peak at ~50GB. 
    *   **Technical Insight:** The user noticed that the `ref` model's VRAM footprint remains static at peak capacity, suggesting that parameter offloading to CPU is silently failing or not executing for the Qwen3.5 architecture. This is a critical compatibility bottleneck for users attempting to run RL fine-tuning on newer base models.
*   **[Feature] Adapter-Only LoRA Checkpoints for FSDP Bootstrapping (CLOSED)** | [#1240](https://github.com/areal-project/AReaL/issues/1319)
    *   **Context:** A feature request to support bootstrapping Fully Sharded Data Parallel (FSDP) LoRA training using adapter-only checkpoints. While AReaL can save in this format, the training pipeline currently lacks a loading mechanism for it. 
    *   **Status:** Closed and marked stale after a month of inactivity.

## 4. Key PR Progress
*   **No active pull requests** were updated or merged in the last 24 hours.

## 5. Why This Project Matters in Today's RL Landscape
AReaL (Advanced Reinforcement Learning for AI) represents a critical shift in the open-source ecosystem toward robust, distributed RL pipelines for Large Language Models (LLMs). As the industry moves beyond standard supervised fine-tuning (SFT) into complex paradigms like RL from Human Feedback (RLHF) and Tool-Integrated Reasoning (TIR), memory efficiency becomes the primary bottleneck. 

Issues like the Qwen3.5 VRAM anomaly (#1319) highlight the ongoing friction between rapidly releasing open-source base models and developing the distributed systems infrastructure (like FSDP and CPU offloading) required to tune them using RL. AReaL's focus on these distributed training boundaries makes it a project to watch for engineers scaling autonomous agent capabilities.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-05-25

Here is your daily breakdown of the reinforcement learning open-source ecosystem, focusing on the Hugging Face `trl` repository.

## 1. Today's Highlights
Activity over the last 24 hours was dominated by improvements to loss computation stability and memory efficiency. The community and core developers are actively refining GRPO/DAPO implementations and squashing bugs related to `NaN` losses during evaluation. A total of 12 issues were updated, alongside 5 active pull requests.

## 2. Releases
*   **No new releases** were published today. 

## 3. Important Issues
Several critical bugs and feature requests were discussed or updated today:

*   **The DAPO Token-Level Loss Debate ([#5375](https://github.com/huggingface/trl/issues/5375)):**
    An open issue points out that TRL currently implements DAPO's token-level loss by treating all tokens in a batch equally, which deviates from the expected prompt-level aggregation. This is actively generating community discussion (7 comments).
*   **GRPO + vLLM Bottlenecks & Timeouts ([#3736](https://github.com/huggingface/trl/issues/3736), [#3258](https://github.com/huggingface/trl/issues/3258)):**
    Users are reporting persistent timeouts when attempting to scale `GrpoTrainer` with `vllm` serving. Historically closed issues highlight that GRPO training is bottlenecked by a single vLLM inference task per job, scaling poorly across multi-node setups.
*   **NaN `eval_loss` in Experimental Trainers ([#5662](https://github.com/huggingface/trl/issues/5662)):**
    `TPOTrainer.evaluate()` was flagged for returning `NaN` eval loss even when the training loss is finite. (This was swiftly addressed in today's PRs—see below).
*   **Apple MPS Incompatibility ([#4692](https://github.com/huggingface/trl/issues/4692)):**
    A known LLVM "mps_matmul" error is preventing GRPO training on Apple Silicon (M4 Max) using the MPS backend.

## 4. Key PR Progress
Today's pull requests heavily target edge cases in loss computation and memory optimization:

*   **[OPEN] Implement DAPO Prompt-Level Averaging ([#5828](https://github.com/huggingface/trl/pull/5828)):**
    Directly addresses Issue [#5375](https://github.com/huggingface/trl/issues/5375). This PR introduces `dapo_prompt_mean` to correctly average each row over its own tokens (prompt-level aggregation) rather than globally batching them.
*   **[OPEN] Prevent NaN Loss from Truncation ([#5826](https://github.com/huggingface/trl/pull/5826)):**
    Fixes an edge case where completions are entirely truncated if `max_length` is smaller than the prompt length. The PR ensures `F.cross_entropy` doesn't compute empty tensors, resolving the `NaN` eval bug ([#5662](https://github.com/huggingface/trl/issues/5662)).
*   **[OPEN] Memory Efficiency for Large Vocab Models ([#5829](https://github.com/huggingface/trl/pull/5829)):**
    Introduces `SFTConfig.chunked_nll_chunk_size` to replace a hardcoded constant (`256`). This allows users to configure chunk sizes, significantly reducing memory spikes during SFT on large-vocabulary models (e.g., Qwen with vocab ≥ 64k).
*   **[CLOSED] TPO NaN Guard ([#5825](https://github.com/huggingface/trl/pull/5825)):**
    A parallel, now-closed PR that also tackled Issue [#5662](https://github.com/huggingface/trl/issues/5662) by adding a guard against empty `ref_mask` in `TPOTrainer`.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to be the foundational framework for aligning Large Language Models (LLMs) via RL. Today's activity perfectly illustrates the current maturation phase of open-source RLHF:
1.  **Algorithmic Nuances:** Moving beyond basic PPO, the community is rapidly iterating on advanced group-relative policy algorithms (GRPO/DAPO), specifically debating the mathematical correctness of token-level vs. prompt-level loss aggregation.
2.  **Hardware Exploitation:** Reconciling training loops with high-throughput inference engines (like vLLM) and diverse hardware backends (NVIDIA vs. Apple MPS) remains the primary bottleneck for scaling RL.
3.  **Scale and Stability:** As context windows and model vocabularies grow, preventing memory overflows (via dynamic chunking) and NaN crashes (via robust masking) is critical for enterprise-level stability.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Daily Digest: OpenRLHF
**Date:** 2026-05-25 | **Project:** [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

Here is your daily brief on the OpenRLHF ecosystem.

### 1. Today's Highlights
Activity over the past 24 hours was minimal, with zero new pull requests, releases, or merged code. The sole update is a newly opened issue highlighting a specific architectural limitation within the framework's multi-turn agent execution workflow during PPO training. 

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **[OPEN] [#1242](https://github.com/OpenRLHF/OpenRLHF/issues/1242) - Missing Evaluation Support in `MultiTurnAgentExecutor`**
    *   **Author:** thevasudevgupta-dc
    *   **Summary:** The author identified an operational roadblock in `train_ppo_ray.py` (specifically at [Line 673](https://github.com/OpenRLHF/OpenRLHF/blob/c3188af37cec984614aaa38906e71fa2fc57b079/openrlhf/cli/train_ppo_ray.py#L673)). Currently, the codebase explicitly disables the evaluation step during training when utilizing the `MultiTurnAgentExecutor` workflow. The author notes that this appears to be an oversight rather than a fundamental technical limitation, as the rest of the codebase seems structurally capable of supporting evaluation in this multi-turn paradigm.

### 4. Key PR Progress
*   **No active PR progress.** There were 0 pull requests updated, opened, or merged in the last 24 hours. 

### 5. Why This Project Matters in Today's RL Landscape
OpenRLHF has established itself as a cornerstone of the open-source Reinforcement Learning from Human Feedback (RLHF) ecosystem, primarily due to its highly scalable, distributed Ray-based architecture. As the AI field shifts rapidly in 2026 from single-turn prompt-response tuning toward complex, agentic workflows, features like `MultiTurnAgentExecutor` are critical. Issue #1242 demonstrates that the community is actively stress-testing these advanced multi-turn RL pipelines. Resolving this evaluation bottleneck will be essential for developers aiming to train and continuously validate autonomous agents that rely on multi-step tool use and environment interaction.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-05-25  
**Project:** [verl](https://github.com/volcengine/verl) | **Issues (24h):** 2 | **PRs (24h):** 6 | **Releases:** 0

---

### 1. Today's Highlights
Activity over the past 24 hours reveals a strong focus on hardware efficiency and multi-backend compatibility. Key themes include fixing critical memory management bugs in distributed vLLM rollouts, advancing Multi-Token Prediction (MTP) capabilities in Megatron, and expanding backend options with new VeOmni-native and Quantization-Aware Training (QAT) integrations.

### 2. Releases
No new releases were recorded today. The project continues active development on its `main` branch.

### 3. Important Issues
*   **Unmerged LoRA Memory Crash:** A newly opened bug ([#6454](https://github.com/volcengine/verl/issues/6454)) reports that using unmerged LoRA adapters (`lora.merge=False`) on an H100 cluster results in a `cudaErrorIllegalAddress` crash during every training step after step 1 when using FSDP2 and vLLM. 
*   **Megatron + vLLM Compatibility:** The ongoing issue ([#5659](https://github.com/volcengine/verl/issues/5659)) regarding GRPO training crashes with Qwen3.5 2B (using Megatron 0.16.0 and vLLM) received further community engagement today, highlighting persistent integration friction points in complex distributed setups.

### 4. Key PR Progress
*   **Fix: Distributed FSDP OOM in Hybrid Rollout** ([#6456](https://github.com/volcengine/verl/pull/6456)): Addresses a critical CUDA Out-of-Memory bug during FSDP backward passes. The fix ensures `engine.collective_rpc("sleep")` properly propagates across all data parallel shards when `data_parallel_size > 1`, rather than just the TP workers.
*   **Fix: Megatron MTP Loss & Rollout** ([#6432](https://github.com/volcengine/verl/pull/6432)): Corrects MTP (Multi-Token Prediction) logit computation by properly isolating the LM head from the MTP objective for untied models using `ColumnParallelLinear`.
*   **Feature: VeOmni-Native Critic Support** ([#6453](https://github.com/volcengine/verl/pull/6453)) *[CLOSED]*: Successfully merged support for critic/value model training using VeOmni's FSDP2 + sequence parallelism engine, bridging a known gap in worker configurations.
*   **Feature: QAT with FP8** ([#6229](https://github.com/volcengine/verl/pull/6229)) *[CLOSED]*: Introduced support for Quantization-Aware Training (QAT) in w8a8 and w8a16 formats, tightly integrated with Megatron-Bridge.
*   **Ongoing Integrations:** Work continues on Qwen3.5 LoRA + MTP support ([#5599](https://github.com/volcengine/verl/pull/5599)) and debugging w4a4 TensorRT-LLM rollout IPC ([#6455](https://github.com/volcengine/verl/pull/6455)).

### 5. Why This Project Matters in Today's RL Landscape
As RLHF and GRPO become standard for post-training large language models, compute efficiency and GPU memory optimization dictate iteration speed. `verl` is establishing itself as a critical bridge between top-tier inference engines (vLLM, TensorRT-LLM) and training backends (FSDP/FSDP2, Megatron). Today's updates—specifically the cross-shard memory sleep fixes and FP8 QAT support—prove that the ecosystem is aggressively solving the multi-GPU/ multi-node bottlenecks required to RLHF-tune next-generation LLMs at scale.

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

### 1. Today's Highlights
Activity on the Gymnasium repository for 2026-05-24 to 2026-05-25 was focused on infrastructure performance and extending API flexibility. The ecosystem saw minimal but highly targeted updates: one issue proposing an optimization for PyGame initialization and renewed activity on a substantial pull request to generalize Graph spaces. No new releases were deployed.

### 2. Releases
*   **No new releases** were cut in the last 24 hours.

### 3. Important Issues
*   **[#1585 [OPEN] [enhancement] Faster PyGame Init](https://github.com/Farama-Foundation/Gymnasium/issues/1585)**
    *   *Context:* Opened by `jkterry1`, this issue proposes optimizing the PyGame initialization pipeline in Gymnasium. 
    *   *Details:* The proposal stems from a related performance discussion in PettingZoo (#1252). The core suggestion is to bypass redundant initialization steps to reduce environment startup overhead. If Gymnasium is not already utilizing this optimization, implementing it would yield immediate latency improvements for environments relying on PyGame rendering.

### 4. Key PR Progress
*   **[#1514 [OPEN] Update Graph to accept arbitrary node and edge spaces](https://github.com/Farama-Foundation/Gymnasium/pull/1514)**
    *   *Author:* `2ToTheNthPower`
    *   *Context:* Originally opened in January 2026, this PR saw recent updates/comments yesterday, indicating ongoing development.
    *   *Details:* This PR significantly overhauls Gymnasium's `Graph` spaces to accept arbitrary node and edge definitions (specifically supporting `Dict` and `Tuple` spaces). This crucial extension allows users to define heterogeneous graphs and complex named feature dictionaries.
    *   *Status:* The author notes the PR still requires further development to seamlessly support `Text`, `Sequence`, and nested `Graph` spaces.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for single-agent Reinforcement Learning environments. Today's updates perfectly highlight Farama Foundation's ongoing strategy: maturing the ecosystem rather than just adding features. 
*   **Performance bottlenecks:** Optimizing PyGame initialization (Issue #1585) addresses the real-world latency issues researchers face when spinning up大规模 distributed RL experiments, where environment instantiation time becomes a critical bottleneck.
*   **Complex State Spaces:** PR #1514's push toward heterogeneous graph support reflects the current trajectory of RL research. As RL expands into combinatorial optimization, molecule generation, and complex multi-agent routing, APIs must natively support asymmetric, dictionary-based graph features rather than flat, homogeneous arrays.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

# RL Open-Source Daily Digest: PettingZoo
**Date:** 2026-05-25

## 1. Today's Highlights
PettingZoo experienced a highly active day with **36 issues updated** and **27 pull requests updated**, signaling vigorous ongoing maintenance and community engagement. The focus was primarily on environment bug fixes (physics, seeding, and state representations) and core API enhancements (typing, wrappers, and state extraction). 

## 2. Releases
*   **No new releases** were cut today. The last known version bump activity was proposed in PR #1295 (version 1.25.1).

## 3. Important Issues
Environment physics, seeding inconsistencies, and type safety dominated community discussions:
*   **Cooperative Pong Physics Bug:** Issue [#1289](https://github.com/Farama-Foundation/PettingZoo/issues/1289) (7 comments) details incorrect ball bounce physics when passing through top/bottom walls. 
*   **Typing and Strictness Push:** Issue [#1318](https://github.com/Farama-Foundation/PettingZoo/issues/1318) proposes migrating the codebase to Pyright's `strict` mode (currently reporting 604 errors), highlighting a community drive for higher code robustness.
*   **Gin Rummy Seeding Inconsistency:** Issue [#1312](https://github.com/Farama-Foundation/PettingZoo/issues/1312) reports that `reset(seed=...)` in `gin_rummy_v4` silently reverts custom `knock_reward`/`gin_reward` configurations to RLCard defaults, breaking reproducibility.
*   **Global State Flexibility:** In Issue [#1326](https://github.com/Farama-Foundation/PettingZoo/issues/1326), a user requested that the `.state()` output not be strictly forced into an `ndarray` to better accommodate complex CTDE (Centralized Training, Decentralized Execution) ground truths.
*   **Call for Contributions:** Issue [#1334](https://github.com/Farama-Foundation/PettingZoo/issues/1334) (newly opened) requests community PRs to add reasonable `.state()` support to the Pursuit environment.

## 4. Key PR Progress
Several impactful PRs were opened or updated today, directly addressing the community's bug reports:
*   **Pong Physics Fixed:** PR [#1336](https://github.com/Farama-Foundation/PettingZoo/pull/1336) (Open) successfully patches the Cooperative Pong wall bounce physics outlined in Issue #1289.
*   **Gin Rummy Seeding Patched:** PR [#1335](https://github.com/Farama-Foundation/PettingZoo/pull/1335) (Open) fixes the knock/gin reward reversion on seeded resets for RLCard integration.
*   **Strict Typing Initial Steps:** PR [#1319](https://github.com/Farama-Foundation/PettingZoo/pull/1319) (Closed) introduces better typing for `AECEnv.agent_iter`, accurately returning `AgentID`.
*   **Custom Environment Tutorial Fix:** PR [#1324](https://github.com/Farama-Foundation/PettingZoo/pull/1324) (Closed) corrects wrong initial states, action masks, and rendering inconsistencies in the custom environment tutorials.
*   **Base Wrapper API Fix:** PR [#1310](https://github.com/Farama-Foundation/PettingZoo/pull/1310) (Closed) resolves an API contract issue where the base wrapper failed to return `reset()` and `step()` outputs.

## 5. Why This Project Matters in Today's RL Landscape
As Multi-Agent Reinforcement Learning (MARL) grows more complex, standardizing environment APIs is critical. PettingZoo serves as the de facto multi-agent counterpart to Gymnasium. Today's activity—particularly the focus on fixing `reset()` return behaviors in base wrappers (PR #1310) and standardizing global `.state()` representations for CTDE paradigms (Issue #1326)—demonstrates the project's ongoing commitment to providing a reliable, scalable, and strictly-typed standard for the next generation of MARL algorithms.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>