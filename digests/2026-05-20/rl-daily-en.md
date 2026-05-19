# RL Open Source Daily Digest 2026-05-20

> Generated: 2026-05-19 22:23 UTC | Projects covered: 15

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
The reinforcement learning open-source ecosystem on 2026-05-20 shows a clear bifurcation. The overwhelming majority of activity is concentrated in the LLM post-training sector, where frameworks are evolving rapidly to support multi-modal models, agentic workflows, and massive distributed infrastructure. Conversely, traditional Deep RL environments and foundational libraries (Gymnasium, CleanRL, Tianshou) experienced zero activity, highlighting a cyclical or maintenance phase for non-LLM RL tools.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :---: | :---: | :---: | :--- |
| **verl** | 5 | 8 | 0 | Scaling agentic multi-turn RL and expanding hardware accelerators. |
| **TRL** | 4 | 6 | 0 | Stabilizing GRPO for VLMs; refactoring async pipelines to processes. |
| **AReaL** | 0 | 10 | 0 | Hardening distributed RLHF via memory optimizations and math/staleness fixes. |
| **ROCK** | 3 | 5 | 0 | Cluster stability, K8s GPU orchestration, and disk-space management. |
| **slime** | 2 | 5 | 0 | Observability upgrades and new sandboxed coding agent examples. |
| **Open Instruct** | 0 | 2 | 0 | Algorithmic innovation: implementing TV-divergence token filtering. |
| **Stable Baselines3** | 1 | 1 | 0 | Refining foundational PPO with Beta distributions for continuous actions. |
| **ROLL** | 0 | 2 | 0 | Patching VLM data pipelines and fixing documentation. |
| **CleanRL** | 0 | 0 | 0 | Inactive. |
| **Gymnasium** | 0 | 0 | 0 | Inactive. |
| **OpenRLHF** | 0 | 0 | 0 | Inactive. |
| **PettingZoo** | 0 | 0 | 0 | Inactive. |
| **rl_games** | 0 | 0 | 0 | Inactive. |
| **Tianshou** | 0 | 0 | 0 | Inactive. |
| **torchtune** | 0 | 0 | 0 | Inactive. |

## Shared Research & Engineering Directions

**Research Signals**
*   **Advanced Divergence & Filtering:** Moving beyond standard KL penalties, projects are exploring granular constraint mechanisms. Open Instruct is implementing Total Variation (TV) divergence filtering (TVPO), while AReaL is fixing edge cases in reward/advantage normalization.
*   **Agentic RL Paradigms:** The shift from static instruction tuning to tool-using agents is driving new research workflows. Slime introduced an end-to-end sandbox coding agent loop, while verl is implementing tree-based attention to handle massive multi-trajectory compute overhead.

**Engineering & Infrastructure Signals**
*   **VLM Data Alignment:** Vision-Language Models are stressing existing text-based pipelines. Both TRL and ROLL spent significant effort fixing silent data corruption and `mm_token` misalignment bugs caused by inconsistent left/right padding.
*   **GPU Memory & Colocation:** Maximizing hardware utilization is critical. Verl and AReaL are heavily optimizing "colocated" setups (training + inference on the same GPUs) using NCCL Suspend/Resume APIs and zero-copy CUDA IPC to bypass inter-device P2P overhead.
*   **Async Rollouts & GIL Management:** Scaling inference during training is shifting from threaded to multi-process architectures. TRL refactored its async rollout worker into a spawned child process to prevent the autograd engine from blocking reward parsing.

## Differentiation Analysis

*   **verl vs. TRL vs. AReaL (The Post-Training Titans):** While all three focus on distributed RLHF, their current priorities differ. **verl** is aggressively pushing hardware-agnosticism (Ascend NPU, Intel XPU) and native agentic multi-turn support. **TRL** acts as the accessible hub for the HuggingFace ecosystem, prioritizing integration fixes (DeepSpeed, vLLM) and VLM stabilizations for the broader community. **AReaL** is focused on low-level distributed systems performance, heavily optimizing Megatron/FSDP integrations, fused kernels, and async staleness management.
*   **ROCK vs. slime:** Both are orchestration layers. **ROCK** differentiates itself via enterprise-grade cluster reliability (K8s GPU scheduling, disk cleanup APIs). **slime** differentiates by acting as a high-performance bridge between Megatron and SGLang, focusing heavily on training fidelity and observability (token-level entropy logging).
*   **Traditional RL vs. LLM RL:** **Stable Baselines3** operates in a completely different orbit, addressing fundamental robotic/control challenges (Beta distributions to fix Gaussian clipping bias in continuous action spaces), relying on modern AI-assisted coding workflows (Zed + Claude) rather than distributed cluster management.

## Community Momentum & Maturity
*   **Industrial Dominance:** The RL ecosystem is overwhelmingly driven by corporate-backed post-training frameworks (Volcengine, Hugging Face, Alibaba, Allen AI, THUDM). The complexity of distributed LLM RL requires dedicated infra teams rather than independent academic contributors.
*   **Maintenance Maturity:** Projects like ROCK demonstrate operational maturity, implementing SRE-specific features (emergency disk cleanup) to handle the realities of large-scale, long-running compute clusters. 
*   **Foundational Stability:** The zero activity across CleanRL, Gymnasium, Tianshou, and others is not necessarily a negative signal; rather, it indicates that these foundational libraries have reached a high level of stability and feature-completeness for their specific niches.

## Trend Signals
*   **The Rise of the Sandbox:** The "Agent-in-Sandbox" paradigm (evidenced by slime and verl's recent PRs) is becoming the default architecture for frontier coding and tool-calling RL research.
*   **Erosion of CUDA Moats:** The introduction of Liger-Kernel support for Ascend NPUs and Intel XPU plugins in verl signals an industry-wide push to decouple post-training infrastructure from strict NVIDIA CUDA dependencies.
*   **Evolution of Policy Constraints:** The exploration of TV-divergence in Open Instruct suggests a looming paradigm shift in how the community prevents reward hacking, potentially moving away from global KL penalties toward localized, token-level gradient masking.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

### RL Open-Source Daily Digest: ROLL (alibaba/ROLL)
**Date:** 2026-05-20

#### 1. Today's Highlights
Activity on the ROLL repository over the last 24 hours was exclusively driven by community and maintainer pull requests, with no new releases or issues filed. The focus was squarely on quality assurance: patching a critical multimodal data pipeline bug in the generation scheduler and improving documentation accuracy. 

#### 2. Releases
*   **No new releases** recorded for 2026-05-20.

#### 3. Important Issues
*   **No active issues** updated in the past 24 hours. 

#### 4. Key PR Progress
*   **[OPEN] [PR #446](https://github.com/alibaba/ROLL/pull/446): fix: preserve multi_modal_data in generate_opt_level=0 path**
    *   **Author:** sanmuf
    *   **Analysis:** This is a highly targeted technical patch. It fixes a data pipeline flaw in `generate_scheduler.py` where `request_data.pop(...)` previously stripped out `multi_modal_data` in favor of standard tensor fields (`input_ids`, `attention_mask`, etc.). Preserving this data is essential for Vision-Language Model (VLM) RL fine-tuning, ensuring multi-modal inputs are correctly passed during inference/generation at optimization level 0.
*   **[CLOSED] [PR #445](https://github.com/alibaba/ROLL/pull/445): fix: correct typos and broken link in README**
    *   **Author:** Galleons2029
    *   **Analysis:** A standard but valuable housekeeping PR. It resolved a broken markdown link in the `README.md` (requiring URL encoding for spaces: `User%20Guides`) and corrected algorithm/framework nomenclature, specifically fixing typos `DeepSeed` to `DeepSpeed` and `StartPO` to `StarPO`.

#### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning from Human Feedback (RLHF) and Reinforcement Learning with AI Feedback (RLAIF) become the de facto standards for aligning Large Language Models (LLMs) and Vision-Language Models (VLMs), the demand for scalable, robust training infrastructure has skyrocketed. 

ROLL (an RL training framework) is positioning itself as a critical piece of this infrastructure. Today's PR activity highlights two key priorities for the project's trajectory:
1.  **Multi-modal Readiness:** PR #446 demonstrates active development to ensure seamless VLM support. In the 2026 RL landscape, training pipelines must natively handle complex, multi-modal payloads without breaking during distributed generation and training cycles.
2.  **Ecosystem Integration:** The documentation fixes in PR #445 (specifically referencing **DeepSpeed** backends and advanced techniques like **StarPO**) underscore the project's role as an orchestration layer that integrates cutting-edge RL algorithms with high-performance distributed computing frameworks.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily reinforcement learning open-source ecosystem digest for ROCK.

### 📊 RL Open-Source Daily Digest: ROCK
**Date:** 2026-05-20 | **Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

---

#### 1. Today's Highlights
Activity over the last 24 hours shows a strong focus on infrastructure reliability, cluster orchestration, and API robustness for ROCK. Three feature requests were successfully closed following the merging of their corresponding Pull Requests. The most critical theme of the day is **cluster stability**, with new features and fixes aimed at preventing disk space exhaustion during heavy RL workload execution.

#### 2. Releases
No new releases were cut today.

#### 3. Important Issues
*   **[#964](https://github.com/alibaba/ROCK/issues/964) [CLOSED]: Missing `cls` argument in `DockerUtil.remove_image`**
    Identified a subtle Python `@classmethod` bug where the image argument was incorrectly passed as the `cls` parameter, silently failing during sandbox teardown.
*   **[#980](https://github.com/alibaba/ROCK/issues/980) [CLOSED]: First-class GPU support for K8s Sandbox**
    Requested native GPU scheduling capabilities in the Kubernetes path, introducing `num_gpus` and `accelerator_type` fields to `DockerDeploymentConfig`.
*   **[#950](https://github.com/alibaba/ROCK/issues/950) [CLOSED]: Full-lifecycle state querying in `get_status`**
    Requested an expansion of the `get_status` SDK/API interface to support an `include_all_states` parameter for comprehensive sandbox tracking.

#### 4. Key PR Progress
*   **[#981](https://github.com/alibaba/ROCK/pull/981) [CLOSED]: feat(k8s): GPU scheduling & Jinja2 templates**
    Implements [#980](https://github.com/alibaba/ROCK/issues/980). Replaces ad-hoc string substitution with Jinja2-driven manifest rendering, routing workloads to `gpu-single` or `gpu-multi` templates.
*   **[#973](https://github.com/alibaba/ROCK/pull/973) [OPEN]: feature(admin): SRE emergency disk cleanup API**
    Introduces `POST /apis/v1/admin/internal/disk_emergency_cleanup`. Allows on-call SREs to bypass the 24-hour scheduler wait and instantly trigger cleanup tasks during disk surges, protected by a task whitelist and 60s in-process rate limiting.
*   **[#970](https://github.com/alibaba/ROCK/pull/970) & [#969](https://github.com/alibaba/ROCK/pull/969) [CLOSED]: Automated Cache Pruning**
    Merged two complementary scheduler tasks: `DockerImagePruneTask` (clears dangling Docker layers and BuildKit cache) and `BuildCacheCleanupTask` (safely prunes `uv` and `pip` caches).
*   **[#965](https://github.com/alibaba/ROCK/pull/965) [CLOSED]: fix(docker): `remove_images` fix & Image protection**
    Fixes the missing `cls` bug from [Issue #964](https://github.com/alibaba/ROCK/issues/964) and implements `SandboxConfig.image_keep_patterns` to prevent critical base images from being accidentally deleted.
*   **[#951](https://github.com/alibaba/ROCK/pull/951) [CLOSED]: feat(sandbox): `get_status` parameter expansion**
    Implements [Issue #950](https://github.com/alibaba/ROCK/issues/950), enabling full-lifecycle state queries.

#### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning, training massive models or running large-scale distributed environments puts immense strain on underlying infrastructure. Today's updates to ROCK highlight its maturity as an RL orchestration platform. By implementing automated `pip`/`uv` cache pruning, BuildKit garbage collection, and emergency SRE cleanup APIs, ROCK directly solves the "disk full" bottleneck that frequently crashes long-running RL training loops. Furthermore, adding first-class, extensible GPU scheduling to Kubernetes ensures that researchers can seamlessly distribute GPU-accelerated environment evaluations without wrestling with raw cluster configurations.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Daily Digest: slime (2026-05-20)

## 1. Today's Highlights
The **THUDM/slime** ecosystem saw a highly active day focused on expanding RL capabilities and improving training observability. Key developments include a new minimal demo for training autonomous coding agents within sandboxes, feature additions for SFT overfitting detection, and critical bug fixes for rollout debugging and VLM data processing.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **VLM Integration Roadblock:** A user flagged the lack of configuration parameters for Vision-Language Models (VLM) in the conversion scripts. Specifically, the community is looking for a standardized pipeline to convert `qwen3-vl` models from Hugging Face to Megatron format for RL training. ([Issue #1863](https://github.com/THUDM/slime/issues/1863))
*   **R3 Routing Replay Bug:** A bug was closed regarding a `ValueError` triggered when attempting to use routing replay (`use_rollout_routing_replay`) in conjunction with `sglang`. This points to active development and stabilization of expert-routing replay mechanisms within slime's rollout backends. ([Issue #1909](https://github.com/THUDM/slime/issues/1909))

## 4. Key PR Progress
*   🆕 **Agent-in-Sandbox RL Demo:** A new end-to-end example was introduced demonstrating how to train a coding agent. The pipeline spins up E2B sandboxes, installs the Claude Code CLI, and executes an RL loop based on test rewards—a massive step forward for agentic RL coding tasks. ([PR #1923](https://github.com/THUDM/slime/pull/1923))
*   🆕 **SFT Observability:** A new pull request introduces token-level entropy logging and validation loss monitoring during Supervised Fine-Tuning (SFT). This is a critical infrastructure upgrade for developers needing to detect and prevent model overfitting before RL alignment begins. ([PR #1925](https://github.com/THUDM/slime/pull/1925))
*   🛠️ **Debugging Data Overwrite Fix:** Fixed an issue where distributed multi-GPU Megatron training would overwrite debug data. The system now automatically appends `{rollout_id}` and `{rank}` to file paths if they are missing from the template. ([PR #1922](https://github.com/THUDM/slime/pull/1922))
*   🛠️ **Infrastructure Updates:** Upgraded `tms` to reduce host memory overhead ([PR #1924](https://github.com/THUDM/slime/pull/1924)) and added a new example for streaming output ([PR #1921](https://github.com/THUDM/slime/pull/1921)). 
*   ⚠️ **VLM Data Processing Reverted:** A previously merged PR regarding VLM data processing was reverted today to fix a breaking issue, with added type checks to preserve custom generation capabilities. ([PR #1232](https://github.com/THUDM/slime/pull/1232))

## 5. Why This Project Matters in Today's RL Landscape
As post-training paradigms (like Reinforcement Learning from Human Feedback [RLHF] and agentic RL) become the primary bottleneck for frontier model capability, robust infrastructure is essential. **Slime** acts as a high-performance bridge between large-scale distributed training frameworks (like Megatron) and fast inference engines (like SGLang). 

Today's updates perfectly highlight slime's strategic direction: 
1.  **Pushing into Agentic Workflows:** The new sandbox-coding RL loop shows the ecosystem is moving beyond static chat RLHF toward executable, tool-using agents.
2.  **Multimodal Stabilization:** The ongoing patches and reverts around VLM processing indicate active, rigorous efforts to stabilize Vision-Language model alignment.
3.  **Training Fidelity:** By adding SFT validation/entropy logging and fixing multi-node debug data loss, slime is giving researchers the granular observability required to safely train multi-billion parameter models without silent training degradation.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL RL Daily Digest — 2026-05-20**

---

### 1. Today's Highlights
Activity on 2026-05-20 was dominated by infrastructure and training stability improvements, with 10 active Pull Requests and zero new Issues or Releases. The focus is clearly on hardening large-scale, distributed RLHF training: specifically, fixing edge cases in reward/advantage normalization, preventing capacity inflation after checkpoint recovery, and pushing the boundaries of GPU memory efficiency via fused kernels and colocated training/inference. 

### 2. Releases
* **None.** No new stable releases or tags were published today.

### 3. Important Issues
* **0 items.** No new or updated issues were logged in the past 24 hours, suggesting active development is currently PR-driven or taking place in private forks/channels.

### 4. Key PR Progress
Several substantial engineering efforts were updated today, focusing on training robustness and hardware optimization:

**Training Stability & Math Fixes:**
* **[#1351](https://github.com/inclusionAI/AReaL/pull/1351) & [#1347](https://github.com/inclusionAI/AReaL/pull/1347): Normalization & Reward Edge Cases** (Author: `haoyang9804`)
  * *PR 1351* fixes a critical bug in `PPOActor._compute_advantages` where non-EOS (End of Sequence) rows with outlier raw rewards skewed reward normalization before the mask was applied.
  * *PR 1347* resolves a silent NaN corruption issue in reward/advantage normalization where `NaN * 0` allowed masked-out tokens to invalidate all normalized values.
* **[#1345](https://github.com/inclusionAI/AReaL/pull/1345): Staleness Capacity Inflation** (Author: `daihaowz`)
  * Fixes an async RL training bug where checkpoint recovery reset the `StalenessManager`'s `accepted` counter to 0, leading to an inflated capacity formula based on a mismatched, highly restored model version.
* **[#1350](https://github.com/inclusionAI/AReaL/pull/1350): Rollout Version Dump Fix** (Author: `pyq623`)
  * Corrects a bug where `head_version` was always `-1` during rollout trajectory dumps by properly filtering out input token placeholders and applying `loss_mask==1`.

**Distributed Infra & Hardware Optimizations:**
* **[#1322](https://github.com/inclusionAI/AReaL/pull/1322): Fused Linear Cross Entropy (LCE)** (Author: `TaoZex`)
  * Introduces a Triton-based fused LCE forward/backward pass for Megatron training. This avoids materializing massive `[tokens, vocab]` logits tensors, saving significant VRAM.
* **[#1310](https://github.com/inclusionAI/AReaL/pull/1310): Colocated CUDA IPC Weight Transfer** (Author: `garrett4wade`)
  * Implements a zero-copy CUDA IPC weight update mode for collocated Megatron training and SGLang inference on the same GPUs, bypassing the need for NCCL P2P across devices.
* **[#1233](https://github.com/inclusionAI/AReaL/pull/1233): Disk-based LoRA Sync** (Author: `TaoZex`)
  * Implements disk-based synchronization for LoRA PEFT adapters between the FSDP training engine and the SGLang inference backend.
* **[#1305](https://github.com/inclusionAI/AReaL/pull/1305): Ray RDT Integration** (Author: `KaisennHu`)
  * Integrates the Ray Direct Transport (RDT) backend for weight syncing, improving how transfer plans and Ray RPC handle weight pulls.
* **[#1175](https://github.com/inclusionAI/AReaL/pull/1175): OpenClaw / TAU²-bench Benchmarking** (Author: `Le8r0nJames`)
  * Adds an end-to-end performance benchmark suite for the AReaL inference service using the OpenClaw agent on TAU²-bench.

---

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning from Human Feedback (RLHF) for LLMs is no longer just an algorithmic challenge—it is a massive distributed systems problem. The recent AReaL commit history perfectly reflects the cutting-edge bottlenecks in the open-source RL ecosystem:

1. **Memory Wall Mitigation:** Avoiding the instantiation of massive logits via Fused LCE ([#1322](https://github.com/inclusionAI/AReaL/pull/1322)) is essential for continuing to scale up vocabulary sizes and context lengths without OOM (Out of Memory) errors.
2. **Training/Inference Colocation:** Decoupling training and inference is expensive. AReaL's push toward same-GPU colocation via CUDA IPC ([#1310](https://github.com/inclusionAI/AReaL/pull/1310)) and efficient adapter syncing ([#1233](https://github.com/inclusionAI/AReaL/pull/1233), [#1305](https://github.com/inclusionAI/AReaL/pull/1305)) represents a major shift toward high-throughput, low-latency post-training pipelines. 
3. **Asynchronous RL Robustness:** Moving away from synchronized, synchronous PPO batches to asynchronous systems introduces complex state-management bugs (e.g., staleness capacity inflation [#1345](https://github.com/inclusionAI/AReaL/pull/1345) and silent NaN leakages [#1347](https://github.com/inclusionAI/AReaL/pull/1347)). Fixing these edge cases is exactly what open-source projects need to achieve parity with proprietary industrial RLHF pipelines.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL Ecosystem
**Date:** 2026-05-20  
**Project:** [huggingface/trl](https://github.com/huggingface/trl)

---

## 1. Today's Highlights
Activity in the TRL repository over the last 24 hours signals a strong community focus on stabilizing **Group Relative Policy Optimization (GRPO)** for Vision Language Models (VLMs) and scaling inference through asynchronous rollout architectures. The most prominent themes today are **VLM padding alignment bugs**, **multi-step agent training fixes**, and **custom eval metrics for GRPO**.

## 2. Releases
**No new releases** were cut today. Development remains highly active on the main branch, with 13 PRs updated and 7 issues active.

## 3. Important Issues
*   **Critical VLM Data Corruption in GRPO:** Issue [#5785](https://github.com/huggingface/trl/issues/5785) reports a silent data corruption bug in `GRPOTrainer` for VLMs. A synchronization flaw causes `mm_token_type_ids` and left-padded `prompt_ids` to misalign due to inconsistent padding directions.
*   **GRPO vLLM Multi-step Limitations:** Issue [#4543](https://github.com/huggingface/trl/issues/4543) highlights a structural problem with multi-step agent training in `GRPOTrainer` when using vLLM server mode, specifically regarding how prompts are repeated during generation.
*   **DeepSpeed Zero3 + Liger Kernels:** Issue [#3368](https://github.com/huggingface/trl/issues/3368) continues to track a persistent `size mismatch` error when trying to use `use_liger_loss=true` alongside DeepSpeed Zero3 in GRPO. 

## 4. Key PR Progress
*   **Architectural Shift to Processes for Async GRPO:** PR [#5749](https://github.com/huggingface/trl/pull/5749) introduces a major architectural change by moving the async rollout worker from a thread to a spawned child process. This prevents the autograd engine from competing for the GIL with reward parsing.
*   **Fixing VLM Padding Alignment:** Directly addressing Issue #5785, PR [#5789](https://github.com/huggingface/trl/pull/5789) (open) and [#5788](https://github.com/huggingface/trl/pull/5788) (closed/drafted) attempt to realign multimodal token type IDs with left-padded prompts.
*   **Expanding GRPO Eval Capabilities:** PR [#5790](https://github.com/huggingface/trl/pull/5790) introduces `compute_metrics` to `GRPOTrainer`, finally allowing users to track downstream task metrics on held-out datasets rather than solely relying on reward-based values.
*   **CI/Test Stabilization:** PR [#5792](https://github.com/huggingface/trl/pull/5792) fixes a failing CI test for Vision Language Models ([#5768](https://github.com/huggingface/trl/issues/5768)) by correcting a `num_heads` vs `num_attention_heads` key mismatch in tiny Qwen VL testing scripts.

## 5. Why This Project Matters in Today's RL Landscape
As RLHF (Reinforcement Learning from Human Feedback) evolves into RL *from* AI Feedback and complex tool-use environments, memory efficiency and async compute are the main bottlenecks. TRL sits at the absolute center of the open-source post-training boom. Today's activity shows that the ecosystem is rapidly transitioning from basic text-based LLM alignment to complex **multimodal reasoning (VLMs)** and **multi-step agent workflows**. By actively refactoring the GIL-heavy async pipelines (moving rollout workers to separate processes) and patching VLM token alignment, TRL is building the foundational infrastructure necessary to train the next generation of autonomous, multimodal AI agents.

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
**Date:** 2026-05-20

Here is the daily brief covering the latest activity across the reinforcement learning framework **verl** (volcengine/verl). Yesterday saw 17 active issues and 26 active pull requests, highlighting intense community focus on multi-modal/multi-turn scaling, hardware expansion, and deep system optimizations.

---

### 1. Today's Highlights
* **Multi-Turn & Agentic Enhancements:** Heavy development in multi-turn RL workflows, highlighted by a new RFC for Prefix-Tree Shared Attention and PRs introducing per-assistant-turn token caps and Gemma4 tool parsing.
* **Colocated Resource Management:** Significant engineering effort to optimize GPU memory in colocated training/rollout setups via native NCCL Suspend/Resume APIs.
* **Hardware & Backend Expansion:** New requests and initial implementations to support Intel XPU and Huawei Ascend NPU plugins (including Liger-Kernel support for NPUs), demonstrating a strong push towards hardware-agnostic RL training. 

### 2. Releases
* **No new releases** were published in the last 24 hours.

---

### 3. Important Issues
* **[RFC] Prefix-Tree Shared Attention for Multi-Turn RL Training ([#6401](https://github.com/verl-project/verl/issues/6401))**
  * *Summary:* Proposes packing samples into a flat `[prefix | leaf_0 | ... | leaf_{n-1}]` format for GRPO/multi-trajectory RL. This avoids redundant recomputation of identical prefixes, drastically improving multi-turn training efficiency.
* **[RFC] Support NCCL Suspend/Resume in verl Colocated Mode ([#6266](https://github.com/verl-project/verl/issues/6266))**
  * *Summary:* Addresses idle NCCL communicators holding GPU memory during the rollout phase. Implementing `ncclCommSuspend`/`ncclCommResume` allows Megatron/FSDP to free up VRAM for inference workloads.
* **Intel XPU plugin support request ([#6403](https://github.com/verl-project/verl/issues/6403))**
  * *Summary:* Maintainers are fielding questions on third-party hardware contributions. This issue confirms Intel is looking to re-enable XPU support via the upcoming `verl-hardware-plugin` architecture.
* **[bug] main_ppo_sync breaks with uniform-shape mini-batches ([#6407](https://github.com/verl-project/verl/issues/6407))**
  * *Summary:* Identifies a `KeyError: 'attention_mask'` crash when using `main_ppo_sync` with fixed prompt token lengths (common in agentic-RL). Affects the `no_padding_2_padding` engine forward pass.
* **Qwen3VL-8B abnormal entropy spikes ([#6382](https://github.com/verl-project/verl/issues/6382))**
  * *Summary:* A regression bug following recent refactoring on `main` that causes continuous entropy increases during training.

---

### 4. Key PR Progress
* **[megatron] NCCL communicator suspend/resume for Megatron in colocated mode ([#6408](https://github.com/verl-project/verl/pull/6408))**
  * *Progress:* Implements the Megatron-path solution for the NCCL RFC, allowing VRAM to be freed dynamically. Currently an optional opt-in feature.
* **[fsdp] Sort buffers to prevent NCCL deadlock with Gemma4 ([#6405](https://github.com/verl-project/verl/pull/6405))**
  * *Progress:* Fixes a critical multi-GPU deadlock caused by non-deterministic buffer iteration (due to varying rotary embedding dimensions) by enforcing a strict sort on `named_buffers()`.
* **[tool] Add Gemma4 tool parser ([#6406](https://github.com/verl-project/verl/pull/6406))**
  * *Progress:* Enables multi-turn agent loops for Gemma4 by mapping its specific `call:func{args}` stop tokens and lack of standard EOS behavior.
* **[rollout] Per-assistant-turn token cap in multi-turn agent loop ([#6404](https://github.com/verl-project/verl/pull/6404))**
  * *Progress:* Introduces `max_assistant_response_length` to prevent a single early turn from exhausting the LLM context window budget.
* **[Ascend] NPU supports Liger-Kernel ([#6244](https://github.com/verl-project/verl/pull/6244))**
  * *Progress:* Brings optimized Liger-Kernel support to Ascend NPUs, verified with a Qwen3-8B GSM8K SFT example.
* **[fully_async] Standalone log prob server ([#5990](https://github.com/verl-project/verl/pull/5990)) & Fix rollout failure propagation ([#6395](https://github.com/verl-project/verl/pull/6395))**
  * *Progress:* Major architectural updates. PR [#5990](https://github.com/verl-project/verl/pull/5990) decouples `old_log_probs` from the actor engine, while [#6395](https://github.com/verl-project/verl/pull/6395) ensures silent rollout crashes correctly raise exceptions instead of passing `None` back to the trainer.

---

### 5. Why This Project Matters in Today's RL Landscape
As LLMs transition from static datasets to dynamic reasoning and tool-calling agents, the bottleneck has shifted from simple policy optimization to the **orchestration of massive, heterogeneous distributed systems**. VeRL is actively resolving these real-world RLHF/GRPO engineering bottlenecks:

1. **Agent-Ready RL Infrastructure:** The integration of Prefix-Tree Shared Attention and multi-turn token caps proves VeRL is moving beyond basic instruction-tuning, directly tackling the massive compute overhead of multi-trajectory, tool-calling LLM agents.
2. **Maximizing Hardware Utilization:** The work on NCCL Suspend/Resume and FSDP/Megatron deadlocks shows a deep focus on colocated training. Reusing the same GPU cluster for both vLLM rollouts and distributed Megatron training via dynamic memory swapping is critical for cost-effective RL scaling.
3. **Democratizing Hardware Accelerators:** By standardizing hardware plugins and improving backend support for Ascend NPUs, Liger-Kernels, and Intel XPUs, VeRL is reducing the ecosystem's reliance on tight CUDA locks, paving the way for broad, multi-architecture distributed RL.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Open-Source Ecosystem Daily Digest: Open Instruct
**Date:** 2026-05-20

Here is your daily brief on the Allen AI `open-instruct` repository, tracking the latest developments in Reinforcement Learning from Human Feedback (RLHF) and Large Language Model (LLM) alignment.

### 1. Today's Highlights
Activity over the last 24 hours was focused entirely on iterative improvements to GRPO (Group Relative Policy Optimization) and advanced divergence-constrained token filtering. There were 2 updated Pull Requests, no new releases, and no active issues. Developer **mnoukhov** is actively pushing refactoring and algorithmic enhancements to the RL loss computations.

### 2. Releases
*   **None.** No new versions or tags were cut in the last 24 hours.

### 3. Important Issues
*   **None.** The repository shows zero updated issues, indicating a stable bug-tracker or a current focus on feature integration via pull requests rather than issue-driven development.

### 4. Key PR Progress
*   **[#1681] [OPEN] TV divergence Rho filtering:** This PR introduces "TVPO" (Total Variation Policy Optimization), a novel, LLM-modified take on VACO ([arxiv.org/abs/2603.01365](https://arxiv.org/abs/2603.01365)). Instead of standard KL penalties, it implements a gradient masking strategy based on sequence-level Total Variation (TV) divergence ($D_{tv} = |rho - 1|$). Tokens are filtered/ignored if they exceed a set divergence threshold, retaining the $rho$ multiplier mechanism. 
    *   *Link:* [allenai/open-instruct PR #1681](https://github.com/allenai/open-instruct/pull/1681)
*   **[#1679] [CLOSED] Simplify Clipfrac:** A structural refactoring PR that successfully landed. It modifies `compute_grpo_loss` to directly output `clipfrac` (clip fraction). This clean-up reduces code complexity and establishes a better foundation for implementing future GRPO-variants (like the one proposed in #1681).
    *   *Link:* [allenai/open-instruct PR #1679](https://github.com/allenai/open-instruct/pull/1679)

### 5. Why This Project Matters in Today's RL Landscape
In the modern post-training RL ecosystem, standard Proximal Policy Optimization (PPO) is increasingly supplemented or replaced by GRPO and offline alignment techniques. The `open-instruct` repository remains at the bleeding edge of this transition. 

Today's updates—specifically PR [#1681](https://github.com/allenai/open-instruct/pull/1681)—highlight a growing, crucial trend in LLM alignment: **moving away from absolute KL-divergence penalties toward more granular, token-level gradient masking based on Total Variation divergence.** By clipping or filtering gradients dynamically based on divergence thresholds ($D_{tv}$), researchers can prevent reward hacking and policy degradation more effectively than with global penalties. Combined with architectural clean-ups like [#1679](https://github.com/allenai/open-instruct/pull/1679), the project continues to provide the open-source community with modular, state-of-the-art tools for granular reward optimization.

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

### RL Open-Source Daily Digest: Stable Baselines3
**Date:** 2026-05-20

#### 1. Today's Highlights
Activity on the Stable Baselines3 (SB3) repository over the past 24 hours has been highly focused, driven by a single but highly impactful technical initiative: introducing Beta distribution policies for bounded continuous action spaces. With minimal peripheral noise (1 issue updated, 1 PR updated, 0 new releases), core maintainers and contributors are actively collaborating to eliminate Gaussian clipping bias in Proximal Policy Optimization (PPO).

#### 2. Releases
*   **No new releases** recorded in the last 24 hours.

#### 3. Important Issues
*   **[OPEN] [#2142: BetaDistribution policy for bounded continuous action spaces](https://github.com/DLR-RM/stable-baselines3/issues/2142)**
    *   *Author:* lukaskiss222
    *   *Summary:* This enhancement proposal suggests replacing standard Gaussian distributions with a `BetaDistribution` for bounded continuous action spaces. Standard Gaussian policies often sample actions outside the legal action bounds, requiring algorithmic clipping. This clipping introduces bias and can degrade training stability. The issue draws on literature (Petrazzini & Antonelo, 2021) to formalize the solution.
    *   *Status:* Active discussion (4 comments), updated yesterday as a prerequisite to the ongoing PR.

#### 4. Key PR Progress
*   **[OPEN] [#2228: WIP - Beta distribution support for PPO](https://github.com/DLR-RM/stable-baselines3/pull/2228)**
    *   *Author:* araffin (SB3 Core Maintainer)
    *   *Summary:* This work-in-progress PR implements the `BetaDistribution` requested in Issue #2142, specifically targeting PPO. Notably, the PR description mentions the implementation was done using **Zed + Claude**, highlighting a modern AI-assisted development workflow for core RL infrastructure. 
    *   *Status:* Updated yesterday, signaling active iteration on this significant architectural change.

#### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the gold standard for reliable, accessible, and rigorously tested Reinforcement Learning implementations. While the broader RL field races toward complex architectures, SB3 provides the stable algorithmic bedrock needed for applied RL and benchmarking. 

The current focus on **Beta distributions (#2142 & #2228)** is a direct response to a notorious, long-standing practical pain point in Deep RL. By addressing Gaussian clipping bias, SB3 is actively closing the gap between theoretical action spaces and physical actuator limits (e.g., robotics torque limits), ensuring that policies learn smoother, more stable behaviors at the boundaries of their action spaces. Furthermore, the integration of LLM-assisted coding (Zed + Claude) by core maintainers signals a shift in how foundational open-source AI libraries will be engineered moving forward.

</details>