# RL Open Source Daily Digest 2026-04-04

> Generated: 2026-04-03 22:04 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-04-04 demonstrates a clear bifurcation between **high-activity LLM/VLM alignment frameworks** and **stable maintenance-mode classical RL libraries**. The major players (`verl`, `TRL`, `OpenRLHF`, `slime`, `Open Instruct`) are aggressively pursuing multimodal capabilities and infrastructure robustness, while foundational libraries like `CleanRL` and `Stable Baselines3` show minimal activity focused on maintenance. A significant trend is the push for hardware heterogeneity, with multiple projects integrating NPU (Ascend) support.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 17 | 29 | 0 | **High** - Dominant PR volume; focus on correctness & NPUs. |
| **Tianshou** | 1 | 8 | 0 | **Medium** - Maintenance/cleanup focus; monotonic clock fix. |
| **TRL** | 3 | 8 | 0 | **Medium** - Multimodal agents & distributed training fixes. |
| **Open Instruct** | 0 | 5 | 0 | **Medium** - GRPO stability & new sandbox environments. |
| **OpenRLHF** | 2 | 3 | 0 | **Medium** - Security focus & runtime robustness. |
| **slime** | 3 | 5 | 0 | **Medium** - Massive model support (397B) & new algos (FIPO). |
| **ROLL** | 1 | 2 | 0 | **Low** - NPU support & monitoring integration. |
| **AReaL** | 1 | 5 | 0 | **Low** - Distributed data loading & backend flexibility. |
| **ROCK** | 2 | 4 | 1 (v1.4.8) | **Low** - Sandbox infrastructure (DinD support). |
| **torchtune** | 0 | 1 | 0 | **Low** - Dependency fix for `torchao`. |
| **Stable Baselines3** | 0 | 1 | 0 | **Low** - `torch.compile` integration. |
| **CleanRL** | 1 | 0 | 0 | **Minimal** - Hyperparameter maintenance. |
| **Gymnasium / PettingZoo / rl_games** | 0 | 0 | 0 | **Dormant** - No activity detected. |

## Shared Research & Engineering Directions

### Research & Algorithms
*   **Multimodal & Agentic RL:** There is a widespread shift from text-only RLHF to multimodal agents. **TRL** (AsyncGRPO tools), **Open Instruct** (SWERL Sandbox), **OpenRLHF** (Sandboxed Execution), and **verl** (Multi-modal Roadmap) are all building infrastructure for agents that use tools, process images, or write code.
*   **Algorithmic Efficiency:** New value-free and efficient algorithms are being integrated to handle long-context or complex reasoning tasks, such as **FIPO** (in `slime`) and **JEPO** (proposed in `TRL`).
*   **Diffusion & Generation:** **verl** merged FlowGRPO for diffusion models, signaling a convergence of generative media and RL reasoning.

### Engineering & Infrastructure
*   **Hardware Diversification (NPU/Ascend):** Both **verl** and **ROLL** explicitly focused on integrating Huawei Ascend NPU support (via Megatron/MindSpeed), moving away from NVIDIA-only ecosystems.
*   **Distributed Training Correctness:** A major theme across **verl**, **TRL**, and **slime** is fixing loss normalization bugs and synchronization errors in distributed backends (FSDP, ZeRO3, Megatron) to ensure mathematical rigor at scale.
*   **Observability & Resource Management:** **Open Instruct** implemented priority queues for evals, **ROLL** integrated Trackio, and **OpenRLHF** improved NCCL debugging, indicating that "production readiness" is now the priority over pure algorithmic novelty.

## Differentiation Analysis

*   **verl vs. OpenRLHF:** While both target large-scale RLHF, **verl** is differentiating through **hardware agnosticism** (NVFP4, NPU) and **multi-modal generation** (Diffusion RL). **OpenRLHF** is differentiating via **security and isolation**, focusing on safe sandboxed execution for agentic workflows.
*   **TRL vs. Open Instruct:** **TRL** acts as the "huggingface bridge," focusing on tight integration with the latest transformer models (Gemma, Carla) and standardizing distributed training (ZeRO3/FSDP). **Open Instruct** is carving a niche in **infrastructure reliability** for specific algorithms (GRPO), specifically solving resource contention and "eval starvation."
*   **ROCK & torchtune:** These projects serve as "utility layers." **ROCK** provides the underlying container/sandbox infrastructure for secure RL, while **torchtune** ensures efficient model quantization (INT4) to lower hardware barriers.

## Community Momentum & Maturity
The ecosystem shows signs of maturation.
*   **Maintenance Mode:** Established libraries like **Stable Baselines3**, **CleanRL**, and **Tianshou** are in maintenance/refactoring phases (e.g., updating to `torch.compile`, `time.monotonic`), prioritizing stability over new features.
*   **Scaling Pains:** High-activity projects (**TRL**, **verl**) are currently dominated by issues related to complex distributed setups (ZeRO3, FSDP2, Megatron) and dependency breaks (Transformers 5.5.0, Torch 2.8.0), indicating that the community is currently wrestling with the engineering challenges of training 100B+ parameter models.

## Trend Signals
*   **The Rise of the Sandbox:** The appearance of "SWERLSandboxEnv" (Open Instruct) and "Docker-in-Docker" (ROCK) confirms a trend towards **executable environments** for RL, moving beyond static datasets to dynamic code generation and execution tasks.
*   **Ecosystem Decoupling:** The migration of **verl** from `volcengine` to `verl-project` and the debates around `uv` adoption signal a push for vendor neutrality and modernized tooling.
*   **Stability Regression:** Issues in **ROLL** and **TRL** regarding the "Torch 2.8.0 + vLLM" stack suggest that the current software stack is struggling to keep up with hardware/driver updates, creating a temporary instability zone for early adopters.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL Ecosystem (2026-04-04)

Here is the analysis of the ROLL (Reasoning and Learning via Logic) framework ecosystem activity for the past 24 hours.

## 1. Today's Highlights
Activity in the ROLL ecosystem focused on **hardware expansion and observability integration**. Key developments include a push for Huawei Ascend NPU compatibility via Megatron-Core and the integration of the Trackio monitoring tool. Meanwhile, the community continues to troubleshoot significant stability issues in the cutting-edge Torch 2.8.0 + vLLM 0.10.2 stack.

## 2. Releases
**No new releases** were recorded in the last 24 hours. The latest stable version remains unchanged.

## 3. Important Issues
*   **[Critical] Stability Regression with Torch 2.8.0 & vLLM 0.10.2** ([#398](https://github.com/alibaba/ROLL/issues/398))
    *   **Context:** Users report that training `qwen2.5-vl-3B-agentic` crashes when `use_kl_loss` is enabled on the Torch 2.8.0 + vLLM 0.10.2 stack.
    *   **Status:** The issue remains **OPEN** with 17 comments as of yesterday.
    *   **Evidence:** Users confirm that downgrading to Torch 2.6.0 + vLLM 0.8.4 resolves the crash, suggesting a compatibility or memory management regression in the newer dependency stack.

## 4. Key PR Progress
*   **[Hardware Support] Add NPU Megatron Support** ([#380](https://github.com/alibaba/ROLL/pull/380))
    *   **Summary:** This PR introduces support for Huawei Ascend NPU devices using the Megatron-Core backend. It includes updates to platform detection logic to prioritize specific hardware architectures.
    *   **Significance:** Indicates a strategic move to decouple ROLL from NVIDIA-centric ecosystems, broadening accessibility for domestic (Chinese) AI hardware.
*   **[Observability] Add Trackio Integration** ([#404](https://github.com/alibaba/ROLL/pull/404))
    *   **Summary:** Implements integration with Trackio, addressing issue #402.
    *   **Significance:** Enhances the ability to monitor RL training loops and metrics, a common pain point in complex RLHF pipelines.

## 5. Why This Project Matters in Today's RL Landscape
The ROLL framework continues to position itself as a robust solution for **industrial-grade reinforcement learning**, particularly for Large Language Models (LLMs) and Vision-Language Models (VLMs).

*   **Hardware Diversification:** The NPU support (PR #380) is timely. As global GPU supply constraints persist, frameworks that offer seamless switching between NVIDIA GPUs and Huawei Ascend NPUs are critical for enterprise resilience.
*   **Agentic Workloads:** The ongoing discussion in Issue #398 regarding `qwen2.5-vl-agentic` highlights ROLL's role in the frontier of **Agentic RL**—training models not just to chat, but to act. The specific failure with `use_kl_loss` underscores the technical difficulty of stabilizing policy optimization in these complex, multi-modal environments.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK Ecosystem (2026-04-04)

Here is the analysis of the ROCK (Open Source Complex System) repository activity for the past 24 hours.

## 1. Today's Highlights
The Alibaba ROCK project has rolled out **v1.4.8**, introducing critical updates to Kata Container runtime support, specifically enabling Docker-in-Docker (DinD) capabilities. Concurrently, the development team is actively addressing stability issues regarding Kubernetes sandbox data integrity and advancing infrastructure support for metadata persistence and disk quotas.

## 2. Releases
### **v1.4.8**
The latest stable release focuses on runtime extensibility.
*   **Key Feature:** Implemented Docker-in-Docker (DinD) support for the Kata runtime (PRs [#725](https://github.com/alibaba/ROCK/pull/725), [#732](https://github.com/alibaba/ROCK/pull/732)).
*   **Contributor:** @zhongwen666
*   **Changelog:** [v1.4.7...v1.4.8](https://github.com/alibaba/ROCK/compare/v1.4.7...v1.4.8)

## 3. Important Issues
Two key issues were updated, highlighting a focus on documentation and data integrity:

*   **[Doc] Add v1.4.8 release notes ([#737](https://github.com/alibaba/ROCK/issues/737))**
    *   **Context:** An enhancement request to update documentation immediately following the v1.4.8 release.
*   **[Bug] k8s sandbox info override & real-time event handling ([#712](https://github.com/alibaba/ROCK/issues/712))**
    *   **Context:** A critical bug where Redis sandbox info may be overwritten by empty values during status fetch exceptions. The report also notes a lack of real-time event handling in the current k8s client implementation.

## 4. Key PR Progress
*   **[OPEN] feat(sandbox): Support persist sandbox metadata to database ([#730](https://github.com/alibaba/ROCK/pull/730))**
    *   Aims to close #729, moving sandbox metadata storage towards a persistent database solution rather than relying solely on volatile storage.
*   **[OPEN] fix: fix k8s sandbox info ([#713](https://github.com/alibaba/ROCK/pull/713))**
    *   The proposed fix for Issue #712, addressing the data overwrite logic in Redis and exception handling.
*   **[OPEN] feat(sandbox): enforce container rootfs disk limit ([#654](https://github.com/alibaba/ROCK/pull/654))**
    *   Implements disk quota enforcement via Docker `storage-opt`, preventing runaway storage consumption in sandboxed environments.
*   **[OPEN] add v1.4.8 docs ([#738](https://github.com/alibaba/ROCK/pull/738))**
    *   Documentation update to support the new release.

## 5. Why This Project Matters in Today's RL Landscape
While ROCK functions as a "Complex System" orchestration platform, its development is crucial for the **Infrastructure-as-Code (IaC)** layer of modern Reinforcement Learning. RL systems require robust, isolated environments (Sandboxes) to train agents safely and at scale.
*   **DinD Support:** The addition of Docker-in-Docker for Kata (v1.4.8) allows RL researchers to spawn nested containerized environments, essential for multi-agent simulations without compromising host security.
*   **Stability:** The fixes in PR #713 regarding Redis data integrity are vital for **Fault Tolerance** in distributed RL training, ensuring that agent states and environment metadata are not lost during network blips or retrieval errors.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime (THUDM)
**Date:** 2026-04-04

## 1. Today's Highlights
Activity in the `slime` framework focused heavily on **system stability** and **algorithmic extensibility**. Key developments include patches for critical memory leaks in colocate mode and weight conversion errors for large MoE models (Qwen3.5 397B). Additionally, the community saw progress in advanced algorithm implementations with a new PR for **FIPO** (Future-KL Influenced Policy Optimization).

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **Memory Leak in Colocate Mode (#1105):** A persisted issue reports increasing memory usage in non-rollout processes during `colocate` mode execution, potentially hindering long-horizon training stability.
*   **Async Rollout Architecture Request (#1800):** A feature request was opened to enhance off-policy async modes with **staleness control** (version tracking) and **partial rollout support**, aiming to bridge the gap between research and production-grade distributed RL.
*   **Long-Context SFT Configuration (#1802):** Users are seeking clarification on configuring SFT settings for Qwen3.5-9b with 128k context lengths, specifically regarding data packing/copying inefficiencies.

## 4. Key PR Progress
*   **New Algorithm: FIPO Support (#1801):** Introduces [FIPO](https://arxiv.org/abs/2603.19835) (Future-KL Influenced Policy Optimization) as a built-in loss type, enabling dense token-level credit assignment without a value network.
*   **Critical Fix: Qwen3.5 397B Expert Parallelism (#1799) [CLOSED]:** Resolved a weight conversion error where local expert IDs were incorrectly used to index global fused tensors, unblocking distributed training for massive models.
*   **Ops Enhancement: Checkpoint Retention (#1798):** Proposed adding `--max-actor-ckpt-to-keep` arguments to automate disk cleanup during extensive training runs.
*   **Refactor: RayTrainGroup Roles (#1797) [CLOSED]:** Fixed a role-passing error in Ray actor group initialization for critics.
*   **Fix: VLM SFT Script (#1791) [CLOSED]:** Removed `--apply-chat-template` to prevent `TypeError` when handling message lists in `sft_rollout`.

## 5. Why This Project Matters in Today's RL Landscape
`slime` is positioning itself as a critical infrastructure for **Large Language Model (LLM)** and **Large Multi-modal Model (LMM)** alignment. Today's activity underscores its evolution from a standard RL framework into a specialized platform handling:
1.  **Massive Scale:** Fixing Expert Parallelism for 397B models shows readiness for SOTA architectures.
2.  **Complex Parallelism:** Issues regarding async rollouts and memory leaks highlight active optimization for high-throughput distributed training.
3.  **Algorithmic Diversity:** The integration of FIPO demonstrates a commitment to cutting-edge, value-free RL methods suitable for reasoning tasks.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL Ecosystem
**Date:** 2026-04-04

## 1. Today's Highlights
The AReaL ecosystem is currently focused on **infrastructure scalability** and **backend flexibility**. Key activity over the last 24 hours reveals a push toward decoupling data loading via microservices and expanding inference backend support to include vLLM alongside sglang. Additionally, the community is actively tagging the **2026 Q1 Milestone** issue, indicating a synchronization period for roadmap goals.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **[Roadmap] 2026 Q1 Milestones** ([#907](https://github.com/inclusionAI/AReaL/issues/907))
    *   **Status:** Open | **Engagement:** 👍 0 | **Comments:** 21
    *   **Insight:** This "help wanted" ticket serves as the primary coordination point for upcoming features through April 2026. It is currently the most active discussion, signaling that the project is in a planning or review phase for the current quarter's deliverables.

## 4. Key PR Progress
*   **Infrastructure Overhaul:** PR [#1120](https://github.com/inclusionAI/AReaL/pull/1120) introduces a **distributed data loading service**. By moving from in-process handling to a gateway/worker architecture, this change aims to solve I/O bottlenecks for large-scale training.
*   **Inference Backend Support:** PR [#1136](https://github.com/inclusionAI/AReaL/pull/1136) adds **vLLM backend support** for inference demos. This allows developers to swap between `sglang` and `vLLM` via an `--inference-backend` flag, increasing hardware flexibility.
*   **Scalability for MoE Models:** PR [#1123](https://github.com/inclusionAI/AReaL/pull/1123) enables **LoRA RL-training in Megatron**. This is critical for scaling Reinforcement Learning to large Mixture-of-Experts (MoE) models by leveraging Megatron's advanced parallelization.
*   **Bug Fixes:** PR [#1135](https://github.com/inclusionAI/AReaL/pull/1135) (Closed) resolved a regression in tree-training caused by an indentation error in the Megatron bridge.
*   **Workflow:** PR [#1064](https://github.com/inclusionAI/AReaL/pull/1064) continues work on a scaffolding rollout workflow.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a **production-grade infrastructure for RLHF (Reinforcement Learning from Human Feedback)**. The recent focus on a distributed data loading gateway (PR #1120) and Megatron-bridge support for LoRA (PR #1123) indicates a shift away from single-node experimentation toward **multi-node, distributed training of massive models**. By standardizing interfaces for both data loading and inference backends (vLLM/sglang), AReaL is lowering the engineering barrier to fine-tuning Large Language Models (LLMs) with complex RL workflows.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL
**Date:** 2026-04-04

## 1. Today's Highlights
Activity in the TRL (Transformer Reinforcement Learning) repository focused heavily on **infrastructure stability** and **expanding multimodal agent capabilities**. 
*   **Distributed Training:** Significant effort was directed toward diagnosing and patching incompatibilities between **ZeRO3/FSDP2** and RL algorithms (RLOO, GRPO) following the `transformers 5.5.0` release.
*   **Multimodal Agents:** Development progressed on **AsyncGRPO**, specifically adding support for asynchronous tool calls, and refining image processing for models like **Gemma** and **Carla**.
*   **Experimental Features:** New issues surfaced regarding the `trl.experimental` module, specifically import errors in `SDPO` (Synthetic DPO).

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **#4899 [OPEN]**: **RLOO and GRPO failing with ZeRO3**.
    *   *Context:* A persistent `IndexError: pop from an empty deque` is occurring when running distributed training with DeepSpeed ZeRO3. This remains a critical blocker for scaling these specific RL algorithms. [View Issue](https://github.com/huggingface/trl/issues/4899)
*   **#5449 [OPEN]**: **ImportError in `trl.experimental.sdpo`**.
    *   *Context:* Users are reporting a missing import for `TRLExperimentalWarning`, preventing the use of experimental SDPO trainers. [View Issue](https://github.com/huggingface/trl/issues/5449)
*   **#5444 [OPEN]**: **Feature Request: Async tool calls in AsyncGRPO**.
    *   *Context:* Currently, `AsyncRolloutWorker` rejects coroutine tools. This issue tracks the need for parity with the mainline `GRPOTrainer` regarding asynchronous tool execution. [View Issue](https://github.com/huggingface/trl/issues/5444)

## 4. Key PR Progress
*   **Infrastructure & CI:**
    *   [**#5442 [CLOSED]**](https://github.com/huggingface/trl/pull/5442): **Hotfixed CI** for `test_rloo[fsdp2]` to accommodate `transformers 5.5.0` changes.
    *   [**#5443 [CLOSED]**](https://github.com/huggingface/trl/pull/5443): **Bumped vLLM minimum version to 0.11.0**, removing legacy compatibility code for older versions.
    *   [**#5376 [CLOSED]**](https://github.com/huggingface/trl/pull/5376): Fixed data handling by requiring `datasets>=4.7.0` to prevent `None` value insertions in JSON dtypes.
*   **Agent & Multimodal Features:**
    *   [**#5446 [OPEN]**](https://github.com/huggingface/trl/pull/5446): **Implemented async tool support** in `AsyncRolloutWorker`, directly addressing Issue #5444.
    *   [**#5448 [OPEN]**](https://github.com/huggingface/trl/pull/5448): Added tests and documentation for **Multimodal Tool Responses** (tools returning images).
    *   [**#5450 [OPEN]**](https://github.com/huggingface/trl/pull/5450): Added specific tests for **Gemma pixel splitting** logic introduced in recent updates.
    *   [**#5437 [CLOSED]**](https://github.com/huggingface/trl/pull/5437): Merged a new **Carla VLM example**, expanding vision-language model support.
*   **Algorithm Refinements:**
    *   [**#5447 [CLOSED]**](https://github.com/huggingface/trl/pull/5447): **Refactored KTO (Kahneman-Tversky Optimization)** to precompute reference log probabilities at initialization, aligning it with standard DPO workflows for better efficiency.
    *   [**#5411 [OPEN]**](https://github.com/huggingface/trl/pull/5411): Proposed implementation of a **JEPO trainer** (Joint Embedding Predictive Architecture).

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to serve as the bridge between generative LLM/VLM architectures and state-of-the-art RL algorithms. Today's activity highlights the ecosystem's shift from pure text-based RLHF toward **complex, multimodal agentic workflows** (AsyncGRPO, Tool use) and **distributed training stability**. By standardizing implementations for Async GRPO and fixing distributed training bugs (ZeRO3/FSDP), TRL is lowering the barrier to training large-scale reasoning models that interact with dynamic environments and tools.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

# RL Daily Digest: Tianshou
**Date:** 2026-04-04

## 1. Today's Highlights
The Tianshou repository experienced a surge in maintenance and architectural refinement activity today. A total of 8 Pull Requests were updated, focusing significantly on infrastructure robustness—specifically fixing timing mechanisms in data collection—and cleaning up technical debt regarding environment wrappers and naming conventions.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **[Bug] Clock Skew in Collector (#1291):** Issue author `fl8-dev` reported that `Collector.collect()` crashes with negative `collect_time` during system clock rollbacks due to the use of `time.time()`.
    *   **Status:** Closed. This issue was immediately addressed by PR #1295.
    *   **Link:** [thu-ml/tianshou Issue #1291](https://github.com/thu-ml/tianshou/issues/1291)

## 4. Key PR Progress
The development activity centered on stability and API clarity, with several long-standing PRs finally closed.

*   **Infrastructure & Stability:**
    *   **[#1295 Closed] Monotonic Clocks:** Author `Trinkle23897` merged a fix to switch elapsed time measurements in the collector to `time.monotonic()`, preventing crashes caused by wall-clock adjustments.
    *   **[#578 Closed] Legacy Fix:** A previous attempt to fix negative collector time from 2022 was closed, superseded by the new monotonic clock implementation.

*   **Architecture & Refactoring:**
    *   **[#1292 Open] `state_shape` to `obs_shape`:** A proposal to resolve naming confusion by renaming `state_shape` to `obs_shape` to align with standard Gymnasium APIs and Tianshou's own `Batch` usage.
    *   **[#1294 Open] EnvPool Integration:** Introduction of an `EnvPoolVectorEnv` wrapper to properly adapt raw EnvPool environments to Tianshou's `BaseVectorEnv` interface, fixing info-dict handling inconsistencies.
    *   **[#1293 Open] Helper Relocation:** Moving Atari/Mujoco helper codes from `examples/` into the main `tianshou` package to improve modularity.

*   **Stale PR Clean-up:**
    *   **[#780 Closed] & [#781 Closed]:** Two long-running PRs (from late 2022) regarding Atari PPO examples and wrapper updates were closed.

## 5. Why This Project Matters in Today's RL Landscape
Tianshou remains a critical library in the PyTorch RL ecosystem due to its emphasis on modularity and speed. Today's updates highlight the project's maturity:
1.  **Production Robustness:** The move to `time.monotonic` (PR #1295) demonstrates a commitment to stability in distributed training environments where clock synchronization issues are common.
2.  **Ecosystem Alignment:** The renaming of `state` to `obs` (PR #1292) and better EnvPool integration (PR #1294) show active efforts to stay compatible with modern standards like Gymnasium and high-performance simulators.

*Disclaimer: This digest is generated based on GitHub activity data.*

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Daily Digest: OpenRLHF
**Date:** 2026-04-04

Here is the analysis of the OpenRLHF ecosystem activity for the past 24 hours.

## 1. Today's Highlights
The focus of recent development has been on **infrastructure robustness and user control**. Key updates include patches to prevent runtime crashes during checkpoint loading and better handling of NCCL environment variables in distributed Ray setups. Additionally, the community has initiated a critical discussion on security regarding sandboxed execution for agentic workflows.

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **[Security] Sandboxed Execution for Agents ([#1210](https://github.com/OpenRLHF/OpenRLHF/issues/1210))**
    *   **Context:** As RLHF increasingly integrates with agentic workflows (tool use, code execution), user `congwang-mk` raised a concern about the security risks of `--agent_func_path`.
    *   **The Issue:** Current rollouts operate with full host access (filesystem, network), risking shared state corruption during scaled training.
    *   **Significance:** This highlights a maturing requirement in the RL space: moving from "making it work" to "secure isolation" for multi-turn agents.

*   **[Debugging] NCCL Variable Precedence ([#1138](https://github.com/OpenRLHF/OpenRLHF/issues/1138))**
    *   **Status:** Closed (likely resolved by PR #1212).
    *   **The Issue:** Users were unable to set `NCCL_DEBUG=INFO` to diagnose `ncclCommInitRank` errors because the runtime was silently overriding environment variables.

## 4. Key PR Progress
*   **[Runtime] fix: respect user-set NCCL_DEBUG env var in Ray runtime ([#1212](https://github.com/OpenRLHF/OpenRLHF/pull/1212))** [CLOSED]
    *   Fixes a specific pain point in `train_ppo_ray.py` where `ray.init()` hardcoded `NCCL_DEBUG=WARN`, overriding user attempts to debug distributed communication failures. This ensures user configurations take precedence.

*   **[Data] feat: add --dataloader_num_workers option ([#1207](https://github.com/OpenRLHF/OpenRLHF/pull/1207))** [CLOSED]
    *   Introduces multi-process data loading across SFT, RM, DPO, and PPO pipelines. This is a performance optimization likely aimed at reducing the data loading bottleneck during large-scale training jobs.

*   **[Stability] fix: graceful fallback for empty checkpoints ([#1208](https://github.com/OpenRLHF/OpenRLHF/pull/1208))** [CLOSED]
    *   Prevents the framework from crashing when `--load_checkpoint` points to an empty or invalid directory. The system will now log a warning and proceed with training from scratch (random init), improving fault tolerance.

## 5. Why This Project Matters in Today's RL Landscape
OpenRLHF has established itself as a critical bridge between high-level RL algorithms (PPO, DPO) and production-grade distributed infrastructure (Ray, DeepSpeed). 

Today's digest emphasizes that **training stability is now as important as algorithmic novelty.** While the project is widely used for fine-tuning LLMs, the emergence of issues like #1210 (Sandboxed Execution) signals a shift in the ecosystem: RL is moving beyond static reward models toward dynamic, agentic systems that require strict security isolation to prevent "bad episodes" from compromising the host environment during autonomous rollouts.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl-project/verl
**Date:** 2026-04-04

## 1. Today's Highlights
Activity remains high with **29 PRs** and **17 Issues** updated. The focus is heavily skewed toward **stability and correctness** across diverse backends (FSDP, Megatron, NPU). Key themes include fixing loss normalization bugs in legacy workers, expanding hardware support for NPUs (Ascend), and advancing the **Multi-modal Generation RL Roadmap**. There is also a community push to modernize the repository structure by migrating references from `volcengine` to `verl-project`.

## 2. Releases
*   **None** (No new releases detected in the last 24 hours).

## 3. Important Issues
*   **Architectural Roadmaps (2026 Q2):**
    *   **[#5755 [OPEN]](https://github.com/verl-project/verl/issues/5755):** "Multi-modal Generation RL 2026Q2 Roadmap". Outlines enhancements for the vLLM-Omni Rollout Engine, including TP/DP support and cross-request batching.
    *   **[#5836 [OPEN]](https://github.com/verl-project/verl/issues/5836):** General `verl` 26Q2 roadmap targeting Megatron FSDP, low-precision training (MXFP8/NVFP4), and long-context performance.
*   **Critical Correctness Bugs:**
    *   **[#5625 [OPEN]](https://github.com/verl-project/verl/issues/5625):** Incorrect `loss_scale_factor` in legacy FSDP implementation when using `token-mean` mode with gradient accumulation. This causes gradient divergence.
    *   **[#5863 [OPEN]](https://github.com/verl-project/verl/issues/5863):** Legacy Megatron worker reported lack of parity-consistency in loss normalization compared to the modern engine path.
*   **Ecosystem & Tooling:**
    *   **[#5852 [OPEN]](https://github.com/verl-project/verl/issues/5852):** "Call for contribution": Migrating 242 occurrences of old `volcengine/verl` paths to `verl-project/verl`.
    *   **[#5853 [OPEN]](https://github.com/verl-project/verl/issues/5853):** Proposal to adopt `uv` for Python environment management to improve speed and reproducibility.

## 4. Key PR Progress
*   **Algorithm & Engine Expansions:**
    *   **[#5802 [CLOSED]](https://github.com/verl-project/verl/pull/5802):** Added **FlowGRPO** support, integrating Diffusers + FSDP engine for diffusion model RL.
    *   **[#5190 [CLOSED]](https://github.com/verl-project/verl/pull/5190):** Implemented **NVFP4 QAT** (Quantization-Aware Training) support for FSDP, enabling W4A16 quantization during RL.
*   **Stability & Bug Fixes:**
    *   **[#5877 [CLOSED]](https://github.com/verl-project/verl/pull/5877):** Fixed the critical `token-mean` loss normalization bug in legacy `dp_actor` (Issue #5625).
    *   **[#5875 [CLOSED]](https://github.com/verl-project/verl/pull/5875):** Fixed a crash in `reduce_metrics` caused by missing `dp_group` synchronization in legacy workers using dynamic batching.
    *   **[#5869 [OPEN]](https://github.com/verl-project/verl/pull/5869):** Fixes for Dynamic Context Parallel (DCP) batch splitting and loss normalization in Megatron.
*   **Hardware & Backends:**
    *   **[#5841 [OPEN]](https://github.com/verl-project/verl/pull/5841):** Bumped TensorRT-LLM version to `1.3.0rc10`.
    *   **[#5680 [OPEN]](https://github.com/verl-project/verl/pull/5680):** Added `mindspeedllm` backend engine support specifically for **NPU (Ascend)** hardware.

## 5. Why This Project Matters in Today's RL Landscape
**verl** is positioning itself as a unified, heterogeneous RL framework capable of handling the next generation of large-scale models.
1.  **Multi-Modal & Diffusion RL:** The Q2 roadmap and the merging of FlowGRPO indicate a significant pivot beyond standard LLMs into **Multi-modal Generation** and **Diffusion models**, anticipating the convergence of generation and reasoning tasks.
2.  **Hardware Agnosticism:** With active PRs for **NPU (Ascend)** integration and low-precision support (**NVFP4**), verl is decoupling RL training from strict NVIDIA GPU dependencies, addressing the global demand for diversified compute resources.
3.  **Enterprise Scale Correctness:** The intense focus on fixing loss normalization in distributed settings (FSDP, Megatron) highlights the project's maturity, ensuring that "it works" isn't just about running code, but maintaining mathematical rigor at massive scales (e.g., Qwen3.5-122B).

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

# RL Daily Digest: Torchtune
**Date:** 2026-04-04

## 1. Today's Highlights
Activity in the `torchtune` repository was minimal over the last 24 hours, characterized by a low volume of issue submissions but a critical maintenance update regarding dependency management. The primary focus was on resolving integration friction with the upstream `torchao` library following recent API changes.

## 2. Releases
*   **No new releases** reported for this date.

## 3. Important Issues
*   **No new issues** were created or updated in the last 24 hours.

## 4. Key PR Progress
*   **[CLOSED] PR #2958: [CLA Signed] Fix torchtune ImportError after TensorCoreTiledLayout removal**
    *   **Author:** jerryzh168
    *   **Summary:** This PR addresses a breaking change in the upstream `torchao` library (specifically `pytorch/ao/pull/4153`). It replaces the deleted `TensorCoreTiledLayout` enum with `Int4PackingFormat.TILE_PACKED_TO_4D` within `torchtune`'s `Int4WeightOnlyQuantizer`.
    *   **Significance:** This fix prevents `ImportError` crashes, ensuring compatibility for users relying on INT4 quantization for fine-tuning.
    *   **Link:** [meta-pytorch/torchtune PR #2958](https://github.com/pytorch/torchtune/meta-pytorch/torchtune/pull/2958)

## 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape, where fine-tuning Large Language Models (LLMs) as Reward Models or Policy backbones is standard practice, **torchtune** serves as a critical lightweight infrastructure. The maintenance of INT4 weight-only quantization (as seen in PR #2958) is particularly vital for **democratizing RLHF (Reinforcement Learning from Human Feedback)**. By reducing memory footprints via quantization, torchtune allows researchers and engineers to run sophisticated RL algorithms on consumer-grade hardware rather than expensive H100 clusters.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-04-04

## 1. Today's Highlights
Activity in the last 24 hours focused heavily on stabilizing the **GRPO** (Group Relative Policy Optimization) loop and expanding hardware/model compatibility.
- **GRPO Stability:** Significant engineering effort was directed toward `grpo_fast`, specifically regarding resource planning, eval queue management, and LLM judge reliability.
- **Ecosystem Expansion:** New support was introduced for **Qwen3.5 VLM** and a novel **SWERL Sandbox** environment for code generation tasks.
- **Refactoring:** Two PRs were closed/cleaned up, including a major refactor of GRPO utilities ([#1578](https://github.com/allenai/open-instruct/pull/1578)).

## 2. Releases
No new releases were recorded today.

## 3. Important Issues
No new issues were created in the last 24 hours.

## 4. Key PR Progress
*   **Optimized Eval & Resource Management (`grpo_fast`)**
    *   **[OPEN] [#1553](https://github.com/allenai/open-instruct/pull/1553):** Implements a priority Ray queue for local evaluations to prevent eval starvation during heavy training backlogs.
    *   **[OPEN] [#1586](https://github.com/allenai/open-instruct/pull/1586):** Introduces preflight checks for Ray resources to prevent hanging during single-node startup; adds better diagnostics for placement groups.
*   **Architecture & Reliability**
    *   **[CLOSED] [#1578](https://github.com/allenai/open-instruct/pull/1578):** Refactored GRPO codebase by inlining utilities (e.g., `mask_logprobs`, `compute_tis_weights`) and renaming `ExperimentConfig` to `GRPOExperimentConfig` for clarity.
    *   **[OPEN] [#1587](https://github.com/allenai/open-instruct/pull/1587):** Hardens `LMJudgeVerifier` by routing calls through a guarded LiteLLM helper, ensuring retries and cost accounting are handled consistently.
    *   **[OPEN] [#1583](https://github.com/allenai/open-instruct/pull/1583):** Refactors `DataPreparationActor` to function as a replay buffer (inspired by DeepMind's Reverb).
*   **Model & Environment Support**
    *   **[OPEN] [#1568](https://github.com/allenai/open-instruct/pull/1568):** Adds support for **Qwen3.5 VLM**, including necessary monkey-patches for vLLM validation conflicts and updates to Liger-Kernel.
    *   **[OPEN] [#1492](https://github.com/allenai/open-instruct/pull/1492):** Adds `SWERLSandboxEnv`, a Docker-based RL environment for per-sample software engineering tasks (SWE-bench style tasks).

## 5. Why This Project Matters in Today's RL Landscape
Open Instruct remains a critical infrastructure project for the RLHF ecosystem, bridging the gap between research algorithms (GRPO/PPO) and production-scale distributed training (Ray/vLLM). Today’s updates highlight the shift in 2026 from "just training" to **robust infrastructure**—managing eval starvation, handling startup resource contention, and standardizing judge verifiers. The addition of `SWERLSandboxEnv` signals a growing trend toward **agentic workflows** where RL is used to optimize code generation and tool use in sandboxed environments.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

Here is the Reinforcement Learning Daily Digest for **2026-04-04**.

### 1. Today's Highlights
Activity on the CleanRL repository was minimal over the last 24 hours, with zero new Pull Requests or releases. The focus remains on maintenance, specifically regarding a long-standing discrepancy in hyperparameters for Atari environments identified in late 2023.

### 2. Releases
*   **None.** No new versions or patches were released in the last 24 hours.

### 3. Important Issues
*   **[#429 [BUG] Different final epsilon and evaluation epsilon for Atari implementations](https://github.com/vwxyzjn/cleanrl/issues/429)**
    *   **Status:** Open
    *   **Context:** Updated yesterday (2026-04-03), this issue highlights a divergence in epsilon-greedy parameters between training and evaluation phases in DQN, C51, and QDAgger implementations (affecting both Jax and PyTorch).
    *   **Technical Detail:** The implementations utilize a final exploration epsilon (typically $\epsilon=0.01$) during training, but the specific configuration for the evaluation epsilon remains inconsistent or ambiguous in the current codebase.
    *   **Impact:** This affects reproducibility and benchmark comparisons for Atari tasks.

### 4. Key PR Progress
*   **None.** No open PRs saw updates or new submissions in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
CleanRL remains a critical infrastructure project in the Reinforcement Learning ecosystem. As RL algorithms become more complex (e.g., the integration of Jax mentioned in Issue #429), CleanRL provides the benchmark for **readability and educational utility**. While production-grade libraries like RLlib or T5 focus on distributed scaling, CleanRL ensures that the fundamental implementation details—such as the correct application of exploration noise in Atari—remain transparent, verifiable, and accessible to researchers and students.

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

# RL Daily Digest: Stable Baselines3 (2026-04-04)

## 1. Today's Highlights
Activity on the Stable Baselines3 (SB3) repository was minimal over the last 24 hours, with a continued focus on modernizing the library's underlying architecture. The sole update involves a pull request aimed at integrating PyTorch 2.0 compilation features to enhance training throughput.

## 2. Releases
**No new releases.** The library remains on its latest stable version. Users looking for bleeding-edge features must monitor the master branch or specific PRs.

## 3. Important Issues
**No active issues were updated in the last 24 hours.**

## 4. Key PR Progress
The primary focus of current development is performance optimization via PyTorch 2.x features.

*   **[PR #2234](https://github.com/DLR-RM/stable-baselines3/pull/2234) [OPEN]: Added example for `torch.compile`**
    *   **Author:** sdace9719
    *   **Context:** This PR addresses [Issue #156](https://github.com/DLR-RM/stable-baselines3/issues/156), aiming to introduce `torch.compile` support.
    *   **Analysis:** By providing examples and potentially supporting `torch.compile` (introduced in PyTorch 2.0), SB3 aims to offer significant inference and training speedups with minimal code changes. This reflects a shift toward leveraging graph-mode optimization in standard RL workflows.

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 (SB3) remains the industry standard for reliable, modular, and easy-to-use implementations of core Reinforcement Learning algorithms (e.g., PPO, SAC, TD3). While newer "bleeding-edge" libraries often fragment the ecosystem, SB3 acts as the stable bedrock for applied RL and educational purposes. The current drive to integrate `torch.compile` demonstrates the project's commitment to maintaining computational efficiency without sacrificing the stability that defines the library.

</details>