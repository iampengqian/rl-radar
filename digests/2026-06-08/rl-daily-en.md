# RL Open Source Daily Digest 2026-06-08

> Generated: 2026-06-07 22:19 UTC | Projects covered: 15

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
The RL open-source ecosystem is currently characterized by a sharp divergence in activity levels and focus areas. A clear majority of actively maintained projects—specifically TRL, verl, AReaL, ROLL, and slime—are converging on Reinforcement Learning from Human Feedback (RLHF) and large language model (LLM) post-training. Within this active cohort, the primary technical frontier is rapidly shifting from single-turn preference optimization (like standard DPO) toward complex, multi-turn "agentic" workflows (e.g., tool calling and software engineering tasks). Meanwhile, classic foundational RL libraries (CleanRL, Stable Baselines3, Gymnasium, Tianshou, etc.) are experiencing periods of low to no activity, with the notable exception of `rl_games`, which continues to push boundaries in sim-to-real robotics deployment.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 3 major (data loss, tokenizer alignment, GRPO limits) | 24 updated (VLMs, DPPO integration, vLLM security) | 0 | Maturing LLM infrastructure; tightening data integrity and security for VLMs. |
| **verl** | 2 major (SWE-bench requests, vLLM+FSDP2 memory bugs) | 5 key (DeepSeek V4 support, RCE security patch) | 0 | Scaling to 100B+ next-gen models; patching critical agentic security flaws. |
| **AReaL** | 1 opened (SWE task training); 3 closed (stale) | 3 key (Megatron memory, OpenClaw runtime, DTA) | 0 | Optimizing distributed compute memory; bleeding-edge tree-based RL sampling. |
| **rl_games** | 1 major (URML safety envelopes) | 1 key (Checkpoint metadata passthrough) | 0 | Bridging Sim-to-Real with verifiable safety manifests for robotics. |
| **slime** | 1 major (Qwen3 tool parser failure) | 1 key (Qwen3.5-9B config & async examples) | 0 | Rapid adapter iteration to keep pace with proprietary/base LLM releases. |
| **ROLL** | 1 major (Agentic SWE training requests) | 0 | 0 | Community demand for multi-turn tool-use pipelines outpacing core dev commits. |
| *Others* | *0* | *0* | *0* | *Dormant (CleanRL, SB3, Gymnasium, Tianshou, OpenRLHF, etc.).* |

## Shared Research & Engineering Directions

**Research Signals**
*   **Agentic RL for Software Engineering:** There is a massive, multi-project demand for SWE-bench/Gym training recipes. Users are actively requesting robust, native frameworks for multi-turn GRPO training that handle long-context trajectories, shell execution, and test-passing environment rewards (seen simultaneously in verl, AReaL, and ROLL).
*   **Algorithmic Iteration Beyond GRPO:** GRPO is establishing itself as a standard baseline, but practitioners are hitting scaling limits (e.g., model collapse over long training runs). This is driving the exploration and integration of next-generation algorithms like DPPO (TRL) and Multi-Token Prediction (verl).
*   **Verifiable Safety Envelopes:** In classic robotics RL (`rl_games`), research is moving beyond pure reward optimization toward structured, machine-readable capability manifests (URML) to ensure policies respect physical safety boundaries at runtime.

**Engineering & Infrastructure Signals**
*   **Massive Scale Distributed Memory Optimization:** As RL moves to 100B+ parameter models (e.g., DeepSeek V4, Qwen 3.5), infrastructure is heavily focused on memory efficiency. This includes chunked `gather-logsumexp` to prevent 64K+ context OOMs (verl) and eliminating redundant CPU gradient buffer backups in Megatron (AReaL).
*   **Security and Tool-Use Hardening:** With the rise of tool-calling agents comes critical vulnerabilities. Ecosystem maintainers are urgently patching remote code execution (RCE) risks, such as the unsafe use of `eval()` in XML tool parsers (verl), and enforcing local-only bindings and API keys for inference serving (TRL).
*   **Asynchronous Training Paradigms:** To minimize GPU idle time during long inference-tool feedback loops, frameworks are overhauling data transport layers. Efforts include migrating to `TransferQueue` (verl) and prioritizing `fully_async` examples for new model integrations (slime).

## Differentiation Analysis
*   **Algorithmic vs. Infrastructure Focus:** TRL remains the proving ground for core RLHF/DPO algorithmic research and multimodal (VLM) integrations, whereas verl, AReaL, and slime differentiate by focusing on extreme hardware orchestration, Megatron-core scaling, and distributed throughput.
*   **LLM Post-Training vs. Classic Robotics:** A stark bifurcation exists between the high-velocity LLM alignment ecosystem (TRL, verl, AReaL) and traditional deep RL. `rl_games` occupies a highly specialized, production-ready niche focused purely on NVIDIA Isaac Gym deployments for locomotion, completely insulated from the LLM token-generation hype.
*   **Agentic Architectures:** AReaL is differentiating itself by building isolated, per-session gateway runtimes (via OpenClaw) specifically designed to attribute multi-turn tool-use costs and states safely, whereas verl is focusing on bridging massive proprietary models (DeepSeek V4) into its async actor/ref worker pipelines.

## Community Momentum & Maturity
TRL, verl, and AReaL currently hold the highest momentum, characterized by rapid self-correction (e.g., TRL patching silent data-loss bugs within a day) and heavy contributor activity. The broader community is highly engaged in pushing the boundaries of SWE-bench multi-turn training, as evidenced by cross-repository feature requests. Conversely, the low activity across classic foundational tools (Gymnasium, PettingZoo, Stable Baselines3, Tianshou) indicates a high degree of maturity and stability for standard vectorized environments and traditional RL algorithms, requiring less frequent maintenance compared to the rapidly shifting LLM post-training infrastructures.

## Trend Signals
*   **SWE-Bench as the New Benchmark:** The simultaneous request for SWE-bench/agent training pipelines across ROLL, verl, and AReaL signals that autonomous, multi-turn software engineering is the immediate holy grail for RL post-training.
*   **Base Model Velocity is a Bottleneck:** Frameworks like `slime` and `verl` are dedicating significant PRs simply to keeping up with the rapid release cadence of foundational models (Qwen 3.5, DeepSeek V4) and their specific function-calling implementations. Frameworks must be highly modular to survive base-model iteration.
*   **From Preference Optimization to Tool-Use Security:** As LLMs transition from static generators to autonomous agents with shell access, open-source RL libraries are shouldering the burden of systems security. Securing inference endpoints and preventing RCE via malicious tool outputs are becoming core competencies for RL maintainers.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROLL 
**Date:** 2026-06-08 | **Project:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

Here is the daily brief based on the latest repository activity.

### 1. Today's Highlights
Activity on the ROLL repository over the past 24 hours has been entirely community-driven, with no new core updates, releases, or pull requests. The sole activity centers on a newly opened feature request regarding **agentic reinforcement learning**. This aligns with a massive broader trend in the AI ecosystem: shifting RL from static single-turn preference optimization (like standard RLHF) toward dynamic, multi-turn software engineering agents. 

### 2. Releases
*   **No new releases** recorded in the last 24 hours.

### 3. Important Issues
*   **[Request] Agentic SWE Training Pipeline** | [Issue #458](https://github.com/alibaba/ROLL/issues/458)
    *   **Author:** @dipta007
    *   **Summary:** The community is requesting a concrete recipe for performing Group Relative Policy Optimization (GRPO) on multi-turn, SWE-bench/SWE-Gym style tasks. 
    *   **Key Technical Asks:** The user is specifically looking for frameworks to handle multi-turn agentic rollouts utilizing tool calls (shell execution, file editing), wiring test-passing metrics directly into the reward function, and managing long context windows/trajectories. This indicates a strong demand for ROLL to natively support complex, tool-using software development agents.

### 4. Key PR Progress
*   **No active PRs** were updated or merged in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) push past basic text generation into agentic workflows, the RL landscape is rapidly evolving. In 2026, frameworks like ROLL are critical because they bridge the gap between foundational RL algorithms (like PPO and GRPO) and the complex demands of real-world agent deployment. 

Issue #458 perfectly highlights ROLL's relevance: training agents for Software Engineering (SWE) tasks requires overcoming significant RL infrastructure hurdles—specifically managing multi-turn environment interactions, integrating real-time feedback from sandboxes (tool calls), and mitigating reward sparsity (e.g., passing a unit test after dozens of steps). ROLL is positioned as a key open-source infrastructural layer required to push the frontier of autonomous coding and agentic reasoning.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime
**Date:** 2026-06-08

## 1. Today's Highlights
Activity for the `slime` repository over the past 24 hours shows targeted, incremental progress focusing on expanding model compatibility. The community is actively trying to integrate newly released models (Qwen3/Qwen3.5), evidenced by an open question regarding tool parsing and a corresponding PR to add missing training configurations and examples.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **Tool Parser Compatibility with Qwen3:** 
    *   [Issue #2019](https://github.com/THUDM/slime/issues/2019) reports a parsing failure when attempting to use Qwen3 models for tool calling. The error logs indicate that `slime`'s `openai_tool_adapter.py` does not currently support `qwen3` as a recognized `tool_call_parser`. This highlights a frequent bottleneck in the RL ecosystem: open-source frameworks often require immediate adapter updates to keep pace with the rapid architectural changes and function-calling implementations of base LLMs.

## 4. Key PR Progress
*   **Expansion to Qwen3.5-9B:** 
    *   [PR #2030](https://github.com/THUDM/slime/pull/2030) introduces configuration and operational support for the Qwen3.5-9B model. 
    *   **Changes:** Adds a dedicated model config script (`scripts/models/qwen3.5-9B.sh`) and a new shell script (`examples/fully_async/run-qwen3.5-9B-fully_async.sh`) demonstrating single-node, 8-GPU distributed training.
    *   **Significance:** The addition of a `fully_async` example is particularly relevant for advanced RL practitioners, as asynchronous training paradigms are critical for reducing GPU idle time and maximizing throughput during large-scale RLHF/GRPO runs.

## 5. Why This Project Matters in Today's RL Landscape
In the modern reinforcement learning landscape, the bottleneck has shifted from algorithmic design to infrastructure and hardware utilization. Projects like `slime` are essential because they provide the orchestration layer required to train and align large language models using RL at scale. 

Today's updates reflect a broader industry trend: the rapid iteration of base models (like Qwen) necessitates highly modular, easily adaptable training frameworks. Furthermore, by prioritizing features like *fully asynchronous* training and robust *tool calling*, `slime` is positioning itself as a highly efficient, production-ready framework for building agentic RL models where inference-tool feedback loops and distributed compute efficiency are paramount.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

### 1. Today's Highlights
Activity on the **AReaL** repository (`github.com/inclusionAI/AReaL`) for 2026-06-08 indicates active development in infrastructure optimization and agentic capabilities. Three open Pull Requests were updated, focusing on host memory optimization for Megatron, a new OpenClaw agent runtime, and experimental Dynamic Tree Attention (DTA) for Archon data parallelism. Additionally, community interest in multi-turn software engineering tasks sparked a new question issue, while three older issues were marked stale and closed by maintainers.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **[Question] Example for training on SWE tasks? ([#1394](https://github.com/areal-project/AReaL/issues/1394))**
    *   **Context:** A community member opened a request for recipes on performing GRPO training on multi-turn, SWE-bench/SWE-Gym style tasks. The user is specifically looking for guidance on wiring multi-turn tool calls (shell/file edits) and environment rewards (test-passing) over long trajectories. This highlights a growing user demand for native, robust agentic RL workflows in AReaL.
*   **Maintenance Sweep:** Three older issues related to Megatron integration ([#1260](https://github.com/areal-project/AReaL/issues/1260)), sandbox backend decoupling ([#1283](https://github.com/areal-project/AReaL/issues/1283)), and a bug in online mode grouping ([#1304](https://github.com/areal-project/AReaL/issues/1304)) were marked as stale and closed. 

### 4. Key PR Progress
*   **Host Memory Optimization in Megatron ([#1393](https://github.com/areal-project/AReaL/pull/1393))**
    *   **Author:** HT-Yuan
    *   **Summary:** Introduces `disable_grad_buffers_cpu_backup` to the `MegatronEngineConfig`. Since gradient buffers are recomputed each step anyway, backing them up to CPU memory during offload in colocated training is redundant. Skipping this saves ~5.9GB of host memory, a critical optimization for heavy-duty LLM training nodes.
*   **Per-Session Agentic Runtime ([#1383](https://github.com/areal-project/AReaL/pull/1383))**
    *   **Author:** IF007
    *   **Summary:** Integrates **OpenClaw** as an `agent_service` runtime. The architecture spawns an isolated OpenClaw gateway subprocess per RL session with distinct upstream LLM keys (`sk-sess-*`). This allows for clean per-episode attribution, which is essential for multi-turn RL scaling and usage tracking.
*   **Experimental DTA for Archon DP ([#1391](https://github.com/areal-project/AReaL/pull/1391))**
    *   **Author:** ezoicoder
    *   **Summary:** Adds a Dynamic Tree Attention (DTA) path for Archon data-parallel training. This enables block-wise backward passes for shared-prefix rollout trajectories (`tree_training_mode=dta`). It represents a significant performance upgrade for complex, tree-based RL sampling methodologies.

### 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself at the bleeding edge of the open-source Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning from AI Feedback (RLAIF) ecosystems. Today's digest perfectly illustrates the three main requirements for modern post-training infrastructure:
1.  **Agentic Workflows:** The push for sandbox decoupling, OpenClaw runtimes, and user demand for SWE-bench recipes show that AReaL is rapidly evolving from static single-turn reward modeling to complex, multi-turn tool-using agents.
2.  **Compute Efficiency:** As RL compute scales, memory becomes a primary bottleneck. PRs like the Megatron grad buffer optimization (#1393) demonstrate a focus on the low-level memory efficiency required to make large-scale distributed training viable. 
3.  **Advanced Architectures:** Implementing features like Dynamic Tree Attention (#1391) shows a commitment to supporting cutting-edge sampling and training topologies, reducing the compute penalty typically associated with repeated tree-based rollouts.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the RL open-source ecosystem daily digest for TRL, based on activity from 2026-06-07 to 2026-06-08.

### 1. Today's Highlights
The TRL (Transformer Reinforcement Learning) repository saw high maintenance activity with **24 Pull Requests** updated in the last 24 hours. The primary focus areas for the day were tightening up data integrity for reward models, pushing forward Vision Language Model (VLM) training capabilities, and introducing new RL algorithms. The community is actively fixing silent data-loss bugs and hardening the infrastructure around VLM integrations and serving security.

### 2. Releases
*   **No new releases** were cut in this reporting period. The repository remains on its latest stable version as core features are merged into the main branch.

### 3. Important Issues
*   **Silent Data Loss in Reward Models:** Issue [#5539](https://github.com/huggingface/trl/issues/5539) highlighted a critical bug in `DataCollatorForRewardModelingDataset`. When shuffling datasets with partial `margin` keys, the collator only checked `examples[0]`, silently dropping margins for the rest of the batch.
*   **Cross-Tokenizer Alignment:** Issue [#4393](https://github.com/huggingface/trl/issues/4393) detailed decoding failures in the GOLD trainer when using BPE-based tokenizers with multi-byte characters (e.g., Chinese), which struggled to align student and teacher models.
*   **Advancing GRPO Limits:** Issue [#4998](https://github.com/huggingface/trl/issues/4998) proposed integrating **DPPO (Divergence Proximal Policy Optimization)** as a solution to common GRPO pitfalls, specifically high-reward model collapse over long training runs. 

### 4. Key PR Progress
*   **Fixing Reward Margin Data Loss:** Tackling issue #5539, PR [#5967](https://github.com/huggingface/trl/pull/5967) was quickly opened and merged. It ensures the collator checks the entire batch for margins before processing, raising a clear `ValueError` for mixed batches instead of silently dropping data. (See also related effort [#5924](https://github.com/huggingface/trl/pull/5924)).
*   **VLM Training Expansions:** 
    *   PR [#5969](https://github.com/huggingface/trl/pull/5969) introduces VLM support for `GOLDTrainer`, enabling same-family VLM distillation using JSD loss.
    *   PR [#5927](https://github.com/huggingface/trl/pull/5927) (merged) adds a helpful error message to prevent silent feature/token mismatches when VLM image tokens are truncated by `max_length`.
    *   PR [#5959](https://github.com/huggingface/trl/pull/5959) (merged) adds training chat template support for **Llava-Next** with generation markers.
*   **New Algorithms & Core Refactoring:** 
    *   PR [#5956](https://github.com/huggingface/trl/pull/5956) kicked off the integration of **DPPO** into `GRPOConfig` and `GRPOTrainer` to address GRPO instabilities.
    *   PR [#5883](https://github.com/huggingface/trl/pull/5883) (merged) refactored self-distillation trainers, fixing the SDPO loss calculation to use a proper convex combination (`(1 - w)·policy + w·distillation`).
    *   PR [#5292](https://github.com/huggingface/trl/pull/5292) (merged) fixed an incompatibility where DPO reference adapters crashed when using `target_parameters` (required for fused MoE layers in Transformers 5.x).
*   **Security and Stability:**
    *   PR [#5965](https://github.com/huggingface/trl/pull/5965) secures `trl vllm-serve` by binding defaults to `127.0.0.1` and enforcing `--api-key` authentication for non-loopback bindings.
    *   PR [#5963](https://github.com/huggingface/trl/pull/5963) aligns the test suites for SFT, DPO, GRPO, and RLOO to ensure uniform sweeping across model architectures and dataset formats.

### 5. Why This Project Matters in Today's RL Landscape
TRL continues to be the bedrock open-source library for fine-tuning Large Language Models (LLMs) using Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO). Today's activity demonstrates the ecosystem's rapid maturation:
1. **Multimodality is expected:** The surge in VLM-specific patches (Llava-Next support, GOLD trainer VLM distillation) shows that the community is successfully moving preference training beyond pure text models.
2. **Algorithmic iteration:** GRPO has become a standard baseline, but practitioners are encountering its scaling limits (e.g., model collapse). The rapid iteration on DPPO and deep dives into KL penalty mechanics (like [PR #5966](https://github.com/huggingface/trl/pull/5966) clarifying RLOO vs. GRPO dynamics) highlight TRL's role as a proving ground for next-generation RLHF algorithms.
3. **MoE and VLLM readiness:** Fixes for Transformers 5.x MoE architectures and strict security updates for `vllm-serve` show that TRL is actively maintaining compatibility with the infrastructure demands of modern, massive-scale production environments.

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

# RL Daily Digest: verl-project/verl
**Date:** 2026-06-08

### 1. Today's Highlights
The verl ecosystem is experiencing a significant push towards advanced agentic capabilities and next-generation model compatibility. Today's activity highlights a strong focus on securing multi-turn agent rollouts (critical for software engineering tasks), patching critical security vulnerabilities in tool parsers, and scaling infrastructure for massive new models like DeepSeek V4 and Qwen 3.5.

### 2. Releases
*   **None** (0 new releases in the last 24 hours).

### 3. Important Issues
*   **Agentic SWE-Bench Training Requests:** User [dipta007](https://github.com/dipta007) opened [Issue #6646](https://github.com/verl-project/verl/issues/6646) requesting recipes for multi-turn GRPO training on SWE-bench/Gym tasks. This highlights a growing user demand for native environment wiring, tool-use integration, and large-context handling for agentic RL.
*   **Memory and Performance Bottlenecks:** Two ongoing bugs underscore scaling pains with modern multimodal and dense models. [Issue #6549](https://github.com/verl-project/verl/issues/6549) reports illegal memory access when training Qwen3.5 9b/27b using `vllm + fsdp2`. Meanwhile, [Issue #5365](https://github.com/verl-project/verl/issues/5365) details severe training slowdowns (2+ hours per step) when combining GRPO + LoRA for `qwen3-vl-8b`. 

### 4. Key PR Progress
*   **Security Patch for Tool Calling:** PR [#6542](https://github.com/verl-project/verl/pull/6542) (Closed/Merged) fixes a critical remote code execution (RCE) vulnerability in the `Qwen3XMLToolParser` where `eval()` was incorrectly used on decoded model outputs.
*   **DeepSeek V4 and Qwen 3.5 Support:** PR [#6473](https://github.com/verl-project/verl/pull/6473) introduces DeepSeek V4 Flash GRPO support with Megatron-Bridge actor/ref workers and FP8/MXFP4 weight transfer. This pairs with PR [#5599](https://github.com/verl-project/verl/pull/5599), which adds crucial LoRA and Multi-Token Prediction (MTP) support for Qwen3.5.
*   **Robust Agentic Rollouts:** PR [#6641](https://github.com/verl-project/verl/pull/6641) fixes a silent failure in `main_ppo_sync` where incomplete agent-loop rollout batches previously allowed training to proceed with missing data. 
*   **Long-Context Distillation Optimization:** PR [#6593](https://github.com/verl-project/verl/pull/6593) implements a chunked `gather-logsumexp` for top-K loss, preventing 28GB+ Out-Of-Memory (OOM) errors during 64K+ token context distillation.
*   **Asynchronous Infrastructure Enhancements:** PR [#6628](https://github.com/verl-project/verl/pull/6628) proposes migrating the fully async policy's data transport layer from Ray's MessageQueue to a `TransferQueue` to improve training throughput.

### 5. Why This Project Matters in Today's RL Landscape
verl is rapidly evolving from a standard LLM post-training framework into a robust execution engine for complex, agentic RL workflows. Today's digest reveals that the project's contributors are actively solving the exact bottlenecks defining the current AI frontier: preventing tool-use exploits, enabling multi-turn SWE-bench style environment interactions, and scaling distributed training (via Megatron-core and FSDP) to handle the colossal memory footprints of next-generation 100B+ parameter models like DeepSeek V4.

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

**RL Daily Digest: `rl_games` — 2026-06-08**

**1. Today's Highlights**
Activity over the past 24 hours centers on a novel integration proposal for safe robot deployment. The community is discussing a path to couple RL policy training directly with structured safety and capability envelopes via the open-source URML standard.

**2. Releases**
No new releases were recorded in the last 24 hours. 

**3. Important Issues**
*   **Policy Capability Envelopes & URML:** Issue [#352](https://github.com/Denys88/rl_games/issues/352) proposes embedding URML (Open Robot Intent Language) capability manifests directly into the RL training pipeline. The author suggests that policies trained via Isaac Gym (for locomotion and manipulation) should carry a verifiable "safety envelope" at runtime to validate requests against the robot's physical limits. (Updated: 2026-06-07, Comments: 2)

**4. Key PR Progress**
*   **Checkpoint Metadata Passthrough:** PR [#353](https://github.com/Denys88/rl_games/pull/353) implements the feature requested in Issue #352. It introduces an optional `capability_manifest:` configuration block. During training, `rl_games` now copies this manifest verbatim into the saved checkpoint dictionaries (supporting both A2C/PPO and SAC paths). This allows downstream dispatchers to verify policy capabilities without altering the underlying RL algorithms. (Status: Open, Updated: 2026-06-07)

**5. Why This Project Matters in Today's RL Landscape**
As a highly optimized, lightweight library heavily utilized for NVIDIA Isaac-based locomotion and manipulation tasks, `rl_games` acts as a critical bridge between RL research and real-world robotics. Today's updates highlight a maturing trend in the RL ecosystem: moving beyond pure reward optimization toward **structured, verifiable safety boundaries**. By natively supporting URML manifests in standard checkpoint files, `rl_games` facilitates "deployability," ensuring that high-performance Sim-to-Real policies carry machine-readable operational limits directly from the training environment to the hardware dispatch layer.

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