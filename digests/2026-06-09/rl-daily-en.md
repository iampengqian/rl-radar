# RL Open Source Daily Digest 2026-06-09

> Generated: 2026-06-08 22:28 UTC | Projects covered: 15

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
The reinforcement learning open-source ecosystem on 2026-06-09 is sharply divided between the intensive engineering demands of Large Language Model (LLM) post-training and the stable, maintenance-phase of traditional Deep RL. The LLM alignment frameworks (verl, TRL, AReaL, slime, OpenRLHF, ROCK) are driving massive infrastructure changes, aggressively optimizing distributed memory, inference rollouts, and hardware scaling to accommodate next-generation MoE and VLM architectures. Meanwhile, traditional RL environments and frameworks (Gymnasium, Tianshou, CleanRL) are in mature, maintenance phases, focusing on educational accuracy and niche simulation expansions.

## Activity Comparison
Activity is overwhelmingly concentrated in the LLM post-training ecosystem. Traditional RL libraries (CleanRL, PettingZoo, rl_games, ROLL, Stable Baselines3, torchtune) saw zero activity over the last 24 hours and remain in maintenance/development cycles.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 5+ | 32 | 0 | Scaling DeepSeek V4/Qwen3.5 MoEs; resolving mBridge and FSDP2 memory friction. |
| **TRL** | 4 | 6+ | 0 | Transitioning to high-throughput production engineering via AsyncGRPO and delta syncs. |
| **AReaL** | 5 | 6 | 0 | Enterprise scaling of distributed rollouts and roadmap planning for H2 2026. |
| **slime** | 1 | 7 | 0 | Advancing memory-efficient, cross-vocabulary On-Policy Distillation (OPD). |
| **ROCK** | 2 | 4 | 0 | Hardening distributed cluster stability (process management and cleanup scripts). |
| **OpenRLHF** | 0 | 2 | 1 | Dependency alignment (Torch 2.11, vLLM 0.22.1) and mathematical loss fixes. |
| **Gymnasium** | 0 | 2 | 0 | Steady state; expanding third-party MARL environment catalogs and tutorials. |
| **Open Instruct** | 1 | 1 | 0 | Friction between bespoke AI2 cluster infrastructure and open-source portability. |
| **Tianshou** | 1 | 0 | 0 | Pedantic maintenance; correcting TD3 target policy smoothing documentation. |

## Shared Research & Engineering Directions

**Research Signals:**
*   **Next-Gen Architectures (MoE & GDN):** A mad dash to support the latest model topologies. *verl* and *AReaL* are aggressively integrating DeepSeek V4 and Qwen3.5, specifically targeting Mixture-of-Experts (MoE) and Gated Delta Net (GDN) hybrid-attention layers.
*   **Multimodal & VLM Alignment:** Text-only RLHF is no longer sufficient. *TRL* is expanding unpaired vision preference data (KTO) for VLMs, while *verl* users are pushing for stable GRPO + LoRA recipes for vision-language models.
*   **On-Policy Distillation (OPD):** *slime* is leading a major push into memory-efficient top-k OPD, relaxing constraints to allow cross-vocabulary distillation where the RL policy and teacher model can use different tokenizers.
*   **Agentic RL:** A collective industry shift toward multi-turn, interactive RL. Both *verl* and *AReaL* communities are demanding out-of-the-box recipes for SWE-bench and tool-calling trajectories, moving away from static single-turn alignment.

**Engineering & Infrastructure Signals:**
*   **Distributed Memory & Communication Optimization:** GPU memory exhaustion is the primary bottleneck. *AReaL* is implementing FP8 via CUDA-IPC, *verl* is bumping NCCL for `ncclCommSuspend/Resume` memory management, and *TRL* is introducing sparse/delta weight syncs over HF Buckets.
*   **Backend Integration Friction (Megatron & vLLM):** Integrating massive inference engines with training loops remains fragile. *verl* is actively debugging vLLM hybrid sleep issues and FSDP2 memory leaks, while *AReaL* is fixing SGLang backend lifecycle bugs for LoRA adapters.
*   **Cluster Resilience:** *ROCK* and *Open Instruct* highlight the difficulties of distributed RL clusters—addressing Docker cleanup daemons, node disk exhaustion, and the need to decouple training pipelines from highly proprietary lab architectures (like AI2's Beaker).

## Differentiation Analysis
*   **Heavyweight Post-Training Engines (verl, TRL, AReaL):** These projects compete directly as end-to-end infrastructure for massive scale RLHF/GRPO. *verl* and *AReaL* differentiate by tightly integrating Megatron-Bridge for cutting-edge MoE scaling, whereas *TRL* relies on modularity, pushing architectural RFCs to standardize environment/reward seams within the HuggingFace ecosystem.
*   **Cost-Efficient Distillation Specialists (slime):** Rather than purely focusing on base RL algorithms, *slime* is carving a niche in Ray-native On-Policy Distillation, specifically solving the inference cost bottleneck by enabling multi-teacher and cross-vocabulary training.
*   **Maintainable Academic & Traditional RL (Gymnasium, Tianshou):** Unlike the rapidly iterating LLM ecosystem, these frameworks act as bedrock standards. Their differentiation lies in pedagogical accuracy, API stability, and sim-to-real robotics applications rather than chasing frontier LLM scale.

## Community Momentum & Maturity
*   **Hyper-Growth Phase (verl, TRL, AReaL, slime):** Characterized by high PR velocity (30+ PRs in a day for *verl*) and demanding, enterprise-tier issue reports (OOMs, distributed hangs, FP8 requests). The community consists primarily of ML engineers at large labs pushing hardware to its absolute limits.
*   **Mature Stability Phase (Gymnasium, Tianshou):** Characterized by a focus on documentation accuracy (e.g., *Tianshou*'s TD3 smoothing correction) and third-party expansions. The community here acts as curators, ensuring reproducibility and educational value for researchers.
*   **Ecosystem Friction:** *Open Instruct* highlights a maturity gap in open-source RL: pipelines built on bespoke, highly-resourced lab architectures struggle to find adoption on commodity clusters due to hard dependencies.

## Trend Signals
1.  **The Rise of Agentic Workloads:** The transition from single-turn RLHF to multi-turn, tool-using "Agentic RL" (evidenced by SWE-bench requests in *verl* and *AReaL*) will dictate the architectural requirements for RL frameworks over the next 12 months.
2.  **Inference-Training Loop Convergence:** The boundary between training and inference engines is disappearing. Frameworks are heavily investing in bridging Megatron/vLLM/SGLang weight transfers, treating inference engines not just as evaluation tools, but as deeply integrated components of the training loop (e.g., *slime*'s RolloutEngine for distillation).
3.  **Mathematical & Hardware Bottlenecks Shift:** As models scale to MoE and GDN architectures, the community's focus is shifting from algorithmic tweaks to low-level memory management (NCCL updates, host memory backups, FP8 IPC) and mathematically exact loss scaling across gradient accumulations (e.g., *OpenRLHF*'s v0.10.4 patch).

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the RL daily digest for ROCK based on the provided GitHub data.

# RL Daily Digest: alibaba/ROCK
**Date:** 2026-06-09

### 1. Today's Highlights
Activity on ROCK over the past 24 hours was exclusively focused on infrastructure hardening and CI stability. Community member `jinbai3407` successfully identified and patched two distinct edge-case bugs in ROCK’s resource/task management subsystems, while `gsky127` pushed updates to the project's continuous integration test suite. All updated issues and PRs were opened and closed on the same day, indicating high responsiveness from the maintainers.

### 2. Releases
*   **No new releases** were published today. 

### 3. Important Issues
Two infrastructure-related bugs were reported and immediately resolved:
*   **[Bug] Docuum Daemon Fails to Restart via PID/TID Reuse** ([Issue #1073](https://github.com/alibaba/ROCK/issues/1073)): On multi-node training setups, the `docuum` daemon (used for Docker image cleanup) would remain dead if the OS reused its recorded PID/TID for a new process, resulting in a false-positive "running" status.
*   **[Bug] Directory Exclusion Ignored During Cleanup** ([Issue #1071](https://github.com/alibaba/ROCK/issues/1071)): The `FileCleanupTask` logic was unintentionally deleting empty directories that administrators had explicitly whitelisted in the `exclude_dirs` configuration parameter.

### 4. Key PR Progress
Four PRs were merged/closed, directly addressing the aforementioned issues and CI stability:
*   **[Infrastructure Fix]** ([PR #1074](https://github.com/alibaba/ROCK/pull/1074)): Resolves the `check_pid_exists` false positive by hardening PID tracking logic, ensuring `docuum` restarts correctly on worker nodes.
*   **[Infrastructure Fix]** ([PR #1072](https://github.com/alibaba/ROCK/pull/1072)): Amends the `FileCleanupTask` script (specifically modifying depth-based logic) to enforce `exclude_dirs` protections for empty directories.
*   **[CI/Testing]** ([PR #1070](https://github.com/alibaba/ROCK/pull/1070) & [PR #1016](https://github.com/alibaba/ROCK/pull/1016)): Both authored by `gsky127`, these PRs introduce and refine basic environment verification tests to ensure CI runner configurations are correctly set up prior to executing the core test suite.

### 5. Why This Project Matters in Today's RL Landscape
Reinforcement Learning requires massive, uninterrupted compute cycles across distributed GPU clusters. Today's updates in ROCK highlight the often-unseen but critical layer of RL infrastructure: disk space and process management. Because RL jobs frequently spawn and destroy thousands of containerized environments, Docker image cleanup (via tools like `docuum`) and aggressive file pruning are strictly necessary to prevent worker node failures. By fixing PID reuse blindspots and safeguarding critical empty directories from overzealous cleanup scripts, ROCK ensures high cluster availability, preventing sudden training crashes due to disk exhaustion or dead background processes.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily reinforcement learning open-source ecosystem digest for **2026-06-09**, focusing on the **THUDM/slime** repository.

### 1. Today's Highlights
Activity on the `THUDM/slime` framework is heavily focused on advancing **On-Policy Distillation (OPD)** and broadening LLM compatibility. The past 24 hours saw a surge in PR activity (7 updated, 4 closed), highlighting active development to support cross-vocabulary distillation, memory-efficient top-k OPD, and configuration expansions for newer models like Qwen3.5-9B. 

### 2. Releases
*   **No new releases** were cut in the last 24 hours.

### 3. Important Issues
*   **LoRA Support Request** ([#416](https://github.com/THUDM/slime/issues/416)): This open issue continues to track community demand for Low-Rank Adaptation (LoRA) integration. Citing strong results from parameter-efficient fine-tuning (PEFT) methodologies, the 18 upvotes and ongoing discussion indicate that LoRA is a highly requested feature for reducing the compute overhead of RLHF/PPO workloads in Slime.

### 4. Key PR Progress
**Merged/Closed PRs:**
*   **Qwen3.5-9B Configuration Added** ([#2030](https://github.com/THUDM/slime/pull/2030)): Introduced a single-node 8-GPU `fully_async` training example for the newly released Qwen3.5-9B model. This significantly lowers the barrier to entry for running distributed RLHF on popular 9B-parameter scale models.
*   **Documentation Fix for Agent Examples** ([#2000](https://github.com/THUDM/slime/pull/2000)): Resolved broken markdown hyperlinks in `agent.md` by updating absolute paths to relative `examples/` directories.
*   **Ray Placement Group Logging** ([#2024](https://github.com/THUDM/slime/pull/2024)): Fixed a silent hanging issue where Ray autoscaler GPU registration would block `ray.get(pg.ready())` without standard output. Progress logging is now implemented.
*   **Rollout ID Handling** ([#2031](https://github.com/THUDM/slime/pull/2031)) & **WandB Metric Filtering** ([#2027](https://github.com/THUDM/slime/pull/2027)): Refined backend telemetry and rollout tracking to ensure only per-sample statistics are uploaded to Weights & Biases, and rollout IDs are correctly assigned for multi-response prompts.

**Open PRs (Drafts):**
*   **Advanced OPD Capabilities** ([#2033](https://github.com/THUDM/slime/pull/2033), [#2032](https://github.com/THUDM/slime/pull/2032)): Developer `hhnqqq` submitted two major architectural PRs. 
    *   *[#2032]* Enables cross-vocabulary distillation, relaxing the constraint that the RL policy and the teacher model share the exact tokenization. It allows the teacher server to natively render chat templates.
    *   *[#2033]* Implements memory-efficient top-k OPD and multi-teacher OPD, adding a specialized actor subclass flow to manage old-policy top-k indices and tail losses without disrupting the baseline Megatron training loop.

### 5. Why This Project Matters in Today's RL Landscape
In the current RLHF landscape, the bottleneck has shifted from purely scaling PPO to the **cost of inference and distillation**. `Slime` is positioning itself as a highly scalable, Ray-native framework that bridges distributed RL training with inference engines like SGLang. 

Today's updates—specifically the focus on memory-efficient Top-k OPD and cross-vocabulary distillation—reflect an acute awareness of industry trends. Allowing models to be trained via RL using teachers of different architectures/tokenizers provides engineers with the flexibility to use cheaper, highly optimized proprietary or open-source teachers, drastically cutting GPU memory requirements while preserving reward signal alignment. Combined with out-of-the-box support for models like Qwen3.5-9B, Slime is actively solving deployment and cost challenges for post-training teams.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-06-09

## 1. Today's Highlights
The AReaL ecosystem shows robust mid-cycle momentum with a clear focus on **scalability, memory optimization, and agentic RL workflows**. Key themes of the day include progress on Qwen3.5 model support, critical bug fixes for distributed rollout hanging issues, and active community planning for the 2026 H2 roadmap. Zero new releases were cut today, indicating a period of active development and stabilization.

## 2. Releases
**None.** No new versions or tags were published in the last 24 hours.

## 3. Important Issues

*   **[Roadmap & Strategy] [2026 H2 Milestones](https://github.com/inclusionAI/AReaL/issues/1381):** Maintainers and contributors are actively discussing the project's trajectory for the second half of 2026, focusing on upcoming features and architectural enhancements.
*   **[Distributed Bug] [TP/PP `clear_batches()` Crash](https://github.com/inclusionAI/AReaL/issues/1298):** A regression (from PR #1282) is causing crashes on non-DP-head ranks when Tensor/Sequence Parallelism is greater than 1. This remains a critical target for multi-node stability.
*   **[Agentic RL] [SWE-bench Training Examples](https://github.com/inclusionAI/AReaL/issues/1394):** A user request for recipes on multi-turn, tool-calling agentic tasks (SWE-bench/Gym). This highlights the community's growing demand for long-trajectory, environment-interactive RL capabilities.
*   **[Architecture] [FP8 Weight Transfer](https://github.com/inclusionAI/AReaL/issues/1359):** A call to support FP8 in the recently introduced colocated CUDA-IPC path, which would further reduce memory overhead during high-performance weight syncing.
*   **[Technical Debt] [Remove `megatron_bridge_patches.py`](https://github.com/inclusionAI/AReaL/issues/1397):** Following the merged Qwen3.5 support, a patch file is slated for deletion once an upstream Megatron fix lands, keeping the codebase clean.

## 4. Key PR Progress

*   **[Merged] [Qwen3.5 Dense & MoE Support](https://github.com/inclusionAI/AReaL/pull/1384):** *Closed/Merged.* Adds training/inference support for the Qwen3.5 series via `megatron-bridge`, specifically adapting to its new GDN (Gated Delta Net) hybrid-attention architecture.
*   **[Bug Fix] [Prevent Rollout Hanging via Staleness Fix](https://github.com/inclusionAI/AReaL/pull/1396):** Addresses a critical distributed hang where workers applied dp-scaled staleness incorrectly due to zero local capacity. Sets default `train_data_parallel_size=1`.
*   **[Bug Fix] [Unblock LoRA RL Training](https://github.com/inclusionAI/AReaL/pull/1385):** Resolves SGLang backend lifecycle bugs for LoRA adapters on co-resident setups (24GB GPUs), specifically fixing unload/memory leaks for stale adapters.
*   **[Optimization] [Save Host Memory in Megatron Offload](https://github.com/inclusionAI/AReaL/pull/1393):** Introduces a `disable_grad_buffers_cpu_backup` option, skipping unnecessary CPU backups during offloading and saving ~4x host memory.
*   **[Merged] [On-Policy Distillation via RolloutEngine](https://github.com/inclusionAI/AReaL/pull/1376):** *Closed/Merged.* Implements memory-efficient on-policy distillation by using a dedicated inference engine (vLLM/SGLang) as the teacher instead of a heavier TrainEngine.
*   **[Stale/Blocked] [Two-Stage Rejection Sampling](https://github.com/inclusionAI/AReaL/pull/1218):** Adds Geo-RS + Token-MIS/TIS mode to `RejectionSamplingConfig`, though it appears to be waiting on further review.

## 5. Why This Project Matters in Today's RL Landscape
As the LLM landscape shifts heavily from pre-training to post-training and RL fine-tuning (RLHF/GRPO), **AReaL is positioning itself as an enterprise-grade, highly scalable RL infrastructure**. 

Today's digest reveals exactly what modern RL engineers need: 
1. **Support for cutting-edge architectures:** Immediate integration of Qwen3.5's GDN architecture shows agility in supporting frontier models.
2. **Agentic Workloads:** The demand for SWE-bench integration highlights AReaL's trajectory toward enabling multi-turn, tool-calling RL—a massive departure from static, single-turn RLHF.
3. **Hardware Efficiency:** PRs focusing on bypassing CPU backups, using FP8 via CUDA-IPC, and using RolloutEngines for distillation prove that AReaL is aggressively optimizing the memory/compute bottleneck inherent in distributed LLM training.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Open-Source Daily Digest: TRL
**Date:** 2026-06-09  
**Project:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
Activity in the TRL ecosystem over the last 24 hours was highly focused on **scaling GRPO training infrastructure**, specifically optimizing distributed reward generation, vLLM weight synchronization, and PEFT/LoRA compatibility. There was also significant momentum in evolving SFT paradigms (padding-free processing and weighted losses) and broadening multimodal (VLM) support across existing trainers. 

## 2. Releases
* **No new releases** were cut in the last 24 hours.

## 3. Important Issues
* **Architectural RFC for Environment RL:** Issue [#5974](https://github.com/huggingface/trl/issues/5974) proposes a "rollout-source seam" for `GRPOTrainer` and `AsyncGRPOTrainer`. This architectural change aims to decouple environment and agent interactions, standardizing online RL workflows.
* **Scaling vLLM Sync with LoRA:** Issue [#5975](https://github.com/huggingface/trl/issues/5975) requests an adapter-only vLLM weight sync for GRPO. Currently, syncing requires merging and pushing the entire model; this feature would drastically reduce memory and network overhead by syncing only the LoRA deltas.
* **Profiling Gaps:** Issue [#5973](https://github.com/huggingface/trl/issues/5973) points out that `ProfilingContext` (which tracks generation and reward function runtimes) currently lacks support for the Trackio backend.
* **New Algorithm Proposals:** The community continues to push for step-level reasoning signals, with renewed discussion around Supervised RL (SRL) ([#4759](https://github.com/huggingface/trl/issues/4759)) and Direct Q-Function Optimization (DQO) ([#2526](https://github.com/huggingface/trl/issues/2526)).

## 4. Key PR Progress
* **AsyncGRPO PEFT & Delta Syncs:** Two major PRs are actively expanding `AsyncGRPO` capabilities. PR [#5896](https://github.com/huggingface/trl/pull/5896) introduces full LoRA support, while PR [#5937](https://github.com/huggingface/trl/pull/5937) implements sparse/delta weight synchronization over HF Buckets, allowing the trainer to push only updated `bf16` tensors to vLLM.
* **Liger Kernel + PEFT Bug Fix:** PR [#5977](https://github.com/huggingface/trl/pull/5977) resolves a silent accuracy bug in `GRPOTrainer.compute_liger_loss` where frozen base weights were incorrectly used for the vocab matmul if `lm_head` was a targeted LoRA module. 
* **Padding-Free DPO & Default SFT Changes:** PR [#5141](https://github.com/huggingface/trl/pull/5141) continues development on padding-free DPO to maximize sequence utilization. Concurrently, PR [#5846](https://github.com/huggingface/trl/pull/5846) proposes switching the default SFT loss type from standard NLL to `chunked_nll`.
* **Multimodal Expansion (VLMs):** PR [#5939](https://github.com/huggingface/trl/pull/5939) aligns KTO with DPO by adding a data collator for unpaired vision preference data, bringing robust VLM support to the KTO trainer.
* **DPPO Integration:** Closed PR [#5956](https://github.com/huggingface/trl/pull/5956) attempted to integrate Distributed PPO (DPPO) directly into the main `GRPOConfig` and `GRPOTrainer`.

## 5. Why This Project Matters in Today's RL Landscape
TRL remains the de facto open-source standard for applying Reinforcement Learning to Large Language Models (Post-training). Today's activity demonstrates a necessary industry shift: **moving from algorithm prototyping to high-throughput production engineering.** 

The intense focus on `AsyncGRPO`, sparse vLLM deltas ([#5937](https://github.com/huggingface/trl/pull/5937)), and chunked NLL losses ([#5846](https://github.com/huggingface/trl/pull/5846)) highlights the ecosystem's push to reduce compute bottlenecks and GPU memory overhead during massive distributed alignments. Furthermore, standardizing environment boundaries ([#5974](https://github.com/huggingface/trl/issues/5974)) and extending text-based alignment methods to Vision-Language Models ([#5939](https://github.com/huggingface/trl/pull/5939)) proves that TRL is actively evolving to support the next generation of multimodal, tool-using, and agentic AI systems.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Daily Digest: Tianshou Ecosystem
**Date:** 2026-06-09 | **Project:** [thu-ml/tianshou](https://github.com/thu-ml/tianshou)

## 1. Today's Highlights
Activity on the Tianshou repository over the past 24 hours has been minimal, consisting entirely of documentation triage. No new code was merged, and no new releases were cut. The sole update involves a community-driven correction regarding TD3 hyperparameter documentation, reflecting the library's mature, maintenance-focused state.

## 2. Releases
**None.** 
No new versions were released in the last 24 hours. 

## 3. Important Issues
*   **[#1301 [OPEN] TD3Params `policy_noise` docstring](https://github.com/thu-ml/tianshou/issues/1301)**
    *   **Author:** RolandStolz
    *   **Summary:** A documentation clarity issue was raised concerning the `TD3Params` class (specifically in `highlevel/params/algorithm_params.py` l. 812). The current docstring states that higher values for `policy_noise` "increase exploration in the target policy." The author rightly points out that this phrasing is misleading. In Twin Delayed DDPG (TD3), `policy_noise` is explicitly injected into the *target* policy to smooth the value function and mitigate overestimation bias caused by function approximation errors. It is not an exploration mechanism for the primary policy. 
    *   **Impact:** Low severity (documentation only), but demonstrates a strong technical understanding of RL mechanics by the community and helps maintain the high educational and operational standards of the library.

## 4. Key PR Progress
**None.** 
There are no active pull requests to report for today.

## 5. Why This Project Matters in Today's RL Landscape
Tianshou continues to be a foundational library in the reinforcement learning ecosystem because of its highly modular, object-oriented architecture and robust support for a wide array of state-of-the-art algorithms (off-policy, on-policy, offline RL, and multi-agent). 

While major framework updates have slowed, today's digest highlights a different but equally important phase of an open-source project's lifecycle: **documentation refinement and pedagogical accuracy**. In the modern RL landscape, where algorithmic nuances (like the exact implementation of TD3 target policy smoothing) drastically impact agent performance, precise documentation is critical. Tianshou serves not just as a deployment tool, but as a learning standard—making community corrections like Issue #1301 vital for researchers and engineers relying on the library for reproducible research and production pipelines.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

Here is the RL Daily Digest for OpenRLHF based on the provided data.

# RL Daily Digest: OpenRLHF — 2026-06-09

## 1. Today's Highlights
OpenRLHF rolls out a new patch release focused on critical backend infrastructure upgrades and loss calculation fixes. The project has successfully merged dependency bumps to align with the latest PyTorch ecosystem (Torch 2.11), ensuring compatibility with the most recent high-performance inference engines. 

## 2. Releases
*   **[v0.10.4](https://github.com/OpenRLHF/OpenRLHF/releases)** 
    *   **Overview:** A targeted maintenance and stability release.
    *   **Key Changes:** 
        *   Fixed token-level loss calculation to correctly handle global token-mean across gradient accumulation steps.
        *   Fixed learning rate scheduling by ensuring `min_lr_rate` is only passed to compatible schedulers (PR #1238).
        *   Upgraded core dependencies: vLLM to `0.22.1` and DeepSpeed to `0.19.1`.

## 3. Important Issues
*   **No Activity:** There were 0 issues opened, closed, or updated in the last 24 hours. 

## 4. Key PR Progress
Two backend-focused pull requests were closed and merged by contributor **hijkzzz**:

*   **[PR #1249](https://github.com/OpenRLHF/OpenRLHF/pull/1249) [CLOSED]: Fix token-level loss (global token-mean across grad accu...)**
    *   Addressed a critical training dynamic bug ensuring mathematically correct token-level loss averaging across gradient accumulation steps. 
*   **[PR #1248](https://github.com/OpenRLHF/OpenRLHF/pull/1248) [CLOSED]: Upgrade vLLM to 0.22.1 and DeepSpeed to 0.19.1**
    *   **Technical Details:** Upgraded the base container from `pytorch:25.11-py3` (Torch 2.10) to `pytorch:26.03-py3` (Torch 2.11). This bypasses NGC's 26.04/26.05 containers which ship Torch 2.12 (currently unsupported by stable vLLM). The PR notes the absence of prebuilt `flash-attn 2.8.3` wheels for x86_64 on this specific PyTorch version.

## 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily towards Reinforcement Learning from Human Feedback (RLHF) and RL from AI Feedback (RLAIF) to align Large Language Models (LLMs), OpenRLHF serves as a foundational open-source framework. 

Today's updates perfectly illustrate why infrastructure maintenance in this ecosystem is critical. LLM post-training is highly sensitive to both mathematical accuracy and hardware utilization. Fixing the global token-mean loss across gradient accumulations ensures precise policy optimization, while the aggressive vLLM and DeepSpeed upgrades guarantee that practitioners can leverage the absolute latest inference optimizations and distributed training capabilities without hitting dependency bottlenecks.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Ecosystem Daily Digest: verl
**Date:** 2026-06-09 | **Project:** [verl-project/verl](https://github.com/volcengine/verl)

## 1. Today's Highlights
The verl project is experiencing a highly active development cycle with **32 updated Pull Requests** over the past 24 hours, heavily focused on expanding model support (DeepSeek V4, Qwen3.5), refining vision-language model (VLM) capabilities, and stabilizing hardware backends (Ascend NPU). A significant theme across the ecosystem is resolving friction points with the newly integrated `mBridge` framework and optimizing memory/networking for large-scale distributed rollouts via vLLM and Megatron.

## 2. Releases
No new releases were recorded in the last 24 hours. The community is actively iterating on the `v0.8.x` feature set (which appears to be the current active development branch).

## 3. Important Issues
*   **Qwen3.5-VL & VLM Performance Regressions:** Users are reporting severe training bottlenecks with VLMs, specifically GRPO + LoRA training on `qwen3-vl-8b` taking over 2 hours per step ([#5365](https://github.com/verl-project/verl/issues/5365)), and text-only tasks crashing VLM trajectories ([#6656](https://github.com/verl-project/verl/issues/6656)).
*   **mBridge Friction in v0.8.x:** Users are struggling to adapt custom/unregistered models to the new requirement enforcing `use_mbridge=True` in version 0.8.x ([#6658](https://github.com/verl-project/verl/issues/6658)). Similarly, Megatron users report architecture support errors for newer MoE models like `qwen3_5_moe` ([#6627](https://github.com/verl-project/verl/issues/6627)).
*   **FSDP2 Memory Leaks & Socket Collisions:** Critical distributed execution bugs remain open, including Ray OOMs triggered by continuous CPU memory creep during FSDP2 rollout weight syncs ([#6468](https://github.com/verl-project/verl/issues/6468)), and illegal memory access when combining vLLM + FSDP2 on large MoE models ([#6549](https://github.com/verl-project/verl/issues/6549)). 
*   **Agentic RL Demand:** There is growing community interest in out-of-the-box recipes for multi-turn agentic software engineering (SWE-bench) tasks ([#6646](https://github.com/verl-project/verl/issues/6646)).

## 4. Key PR Progress
*   **Next-Gen Model Support:**
    *   [PR #6473](https://github.com/verl-project/verl/pull/6473): Introduces support for **DeepSeek V4 GRPO** using Megatron-Bridge, including FP8/MXFP4 weight transfer.
    *   [PR #6660](https://github.com/verl-project/verl/pull/6660): Fixes Qwen3.5 linear attention under Ulysses Sequence Parallelism (SP) during FSDP training to prevent packed sequences from sharing states incorrectly.
*   **Rollout & Infrastructure Fixes:**
    *   [PR #6661](https://github.com/verl-project/verl/pull/6661): Resolves vLLM hybrid sleep issues where MTP (Multi-Token Prediction) drafter weights were improperly discarded.
    *   [PR #6621](https://github.com/verl-project/verl/pull/6621): Bumps bundled NCCL to `>= 2.29.7` in Docker images to enable `ncclCommSuspend/Resume` APIs, crucial for stable GPU memory management during RL shifts.
    *   [PR #6572](https://github.com/verl-project/verl/pull/6572): Implements full bitwise determinism for vLLM rollout and reward model inference, ensuring reproducible RLHF training runs.
*   **Ascend NPU & Megatron Stability:**
    *   [PR #6626](https://github.com/verl-project/verl/pull/6626) & [PR #6653](https://github.com/verl-project/verl/pull/6653): Critical fixes for the Megatron integration path, ensuring MTP and router replay configs aren't inadvertently overwritten by `mBridge`.
    *   [PR #6585](https://github.com/verl-project/verl/pull/6585), [#6637](https://github.com/verl-project/verl/pull/6637), [#6630](https://github.com/verl-project/verl/pull/6630): Multiple merges updating CI pipelines and fixing sampling parameters for Huawei Ascend NPUs.

## 5. Why This Project Matters in Today's RL Landscape
verl is solidifying its position as the premier open-source infrastructure for massive-scale Post-Training (GRPO/RLHF). Today's data shows a project deeply engaged in transitioning toward next-generation MoE architectures (DeepSeek V4, Qwen3.5) and complex VLMs. The push to refine `mBridge`, stabilize FP8 weight transfers, and patch memory leaks in vLLM/FSDP2 demonstrates a focus on the exact hardware/software bottlenecks currently limiting AI labs globally. Furthermore, the integration of deterministic rollout engines and community requests for agentic SWE-bench trajectories highlight verl's evolution from a basic PPO framework into a robust, production-ready engine for advanced, multi-turn reasoning models.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

Here is the RL open-source ecosystem daily digest for June 9, 2026.

### 1. Today's Highlights
Activity on `allenai/open-instruct` over the last 24 hours was focused on architectural extensibility and infrastructure constraints. A key Pull Request advanced support for hybrid models (involving GDN layers and FLA/TileLang), while an active Issue highlighted a growing community pain point regarding cluster-agnosticism and hard dependencies on AI2's proprietary infrastructure.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Important Issues
*   **Cluster Agnosticism Request ([#1717](https://github.com/allenai/open-instruct/issues/1717))**
    *   **Author:** owos
    *   **Summary:** A user flagged that the repo is heavily coupled with AI2's specific compute cluster ecosystem (Beaker, Jupiter, Ceres, Titan). Substantial refactoring is currently required to run the RL training pipelines on third-party or local clusters. With no comments or engagement yet, this is a critical usability bottleneck for wider open-source adoption.

### 4. Key PR Progress
*   **Hybrid Model Integration ([#1715](https://github.com/allenai/open-instruct/pull/1715))**
    *   **Author:** finbarrtimbers
    *   **Summary:** This PR updates `open-instruct`'s Olmo-core scripts to support hybrid modeling. From a technical RL perspective, it introduces three necessary changes:
        1. Selective module checkpointing (bypassing the GDN layer to prevent memory/OOM failures during training).
        2. Bumping the Flash Linear Attention (FLA) version.
        3. Adding an explicit `tilelang` dependency for hardware-efficient kernel support. 

### 5. Why This Project Matters in Today's RL Landscape
As large language model (LLM) alignment increasingly relies on Reinforcement Learning from Human Feedback (RLHF) and its variants, infrastructure overhead becomes a massive blocker for independent researchers. `open-instruct` provides a critical, transparent window into how major AI labs (like AI2) structure their RL training loops. However, the emergence of Issue #1717 underscores a common open-source tension: RL pipelines built around bespoke, high-performance clusters (Beaker) often fail to translate smoothly to commodity cloud environments. Solving this decoupling will be essential for democratizing advanced RL alignment techniques beyond well-funded laboratories.

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

### RL Daily Digest: Gymnasium Ecosystem
**Date:** 2026-06-09

#### 1. Today's Highlights
Activity in the Farama-Foundation/Gymnasium repository over the past 24 hours has been entirely focused on documentation and ecosystem expansion. With zero new issues or releases, maintainers are currently reviewing community-driven pull requests aimed at lowering the barrier to entry for MuJoCo customization and highlighting new multi-agent simulation environments.

#### 2. Releases
No new releases were published on 2026-06-09.

#### 3. Important Issues
No issues were opened, closed, or updated in the last 24 hours.

#### 4. Key PR Progress
Two open Pull Requests received updates:
*   **[PR #1589](https://github.com/Farama-Foundation/Gymnasium/pull/1589) - Add WireHarness-MultiAgent-RL to third-party robotics environments:** Submitted by `ludwigstr`, this PR proposes adding a MuJoCo-based environment tailored for multi-agent wire harness routing. The simulation requires five planar movers to coordinate cable segment navigation. This addition enriches Gymnasium's catalog of complex, cooperative MARL (Multi-Agent Reinforcement Learning) benchmarks.
*   **[PR #1584](https://github.com/Farama-Foundation/Gymnasium/pull/1584) - docs: add MuJoCo parameter customization tutorial:** Submitted by `Lonny154`, this PR introduces a beginner-friendly tutorial demonstrating how to tweak physical and reward parameters via `gym.make` kwargs. Using `HalfCheetah-v5` as an example, it illustrates the impact of modifying the `ctrl_cost_weight` on reward shaping. This is a critical resource for researchers needing rapid environment hyperparameter tuning without editing core library files.

#### 5. Why This Project Matters in Today's RL Landscape
As the undisputed standard API for single-agent (and increasingly multi-agent) reinforcement learning, Gymnasium’s core stability is mature. Today's PR activity demonstrates where the project's current momentum lies: **ecosystem integrations and educational tooling**. By streamlining MuJoCo parameter customization and integrating highly specific cooperative robotics environments (like wire routing), Gymnasium continues to lower the barrier to entry for advanced sim-to-real robotics research and MARL algorithm development.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>