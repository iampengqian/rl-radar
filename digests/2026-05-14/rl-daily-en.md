# RL Open Source Daily Digest 2026-05-14

> Generated: 2026-05-13 22:23 UTC | Projects covered: 15

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
The open-source reinforcement learning ecosystem on May 14, 2026, highlights a clear bifurcation between foundational algorithmic environments and the rapidly evolving infrastructure required for post-training Large Language Models (LLMs) and Vision-Language Models (VLMs). 

While traditional RL libraries (Gymnasium, Stable Baselines3, CleanRL) experienced minimal to no activity, frameworks dedicated to RLHF/RLAIF at scale (verl, TRL, OpenRLHF, AReaL) saw intense development. The day's activity is defined by the systemic engineering challenges of 2026: adapting RL pipelines to heterogeneous hardware (NPUs, MLUs), streamlining distributed training via asynchronous decoupling, and safely scaling complex MoE and agentic architectures (Qwen3, Gemma4) without destabilizing the underlying infrastructure.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 10 | 26 | 0 | **High:** Aggressive expansion into hardware diversification and async agent pipelines. |
| **TRL** | 2 | 11 | 0 | **High:** Critical memory optimizations and CI stability for advanced VLMs (Gemma4). |
| **ROCK** | 2 | 6 | 0 | **Medium:** Enhancing RL determinism via in-sandbox LLM traffic proxying. |
| **Open Instruct** | 0 | 10 | 0 | **Medium:** Refining GRPO accuracy and introducing difficulty-based curriculum learning. |
| **AReaL** | 4 | 4 | 0 | **Medium:** Overhauling inference-training weight sync (Ray RDT) and LoRA disk routing. |
| **slime** | 1 | 4 | 0 | **Medium:** Extreme performance optimizations for multi-turn agent token filtering. |
| **ROLL** | 2 | 1 | 0 | **Medium:** Hardware agnosticism, specifically adapting FSDP2/vLLM for Ascend NPUs. |
| **OpenRLHF** | 1 | 1 | 0 | **Low:** Essential maintenance fixing Ray 2.55 multi-node and DeepSpeed LR bugs. |
| **Gymnasium** | 1 | 2 | 0 | **Low:** Standard API maintenance and type-safety fixes for vector wrappers. |
| **Others*** | 0 | 0 | 0 | **None:** No activity recorded. |

*\*Others include: CleanRL, PettingZoo, rl_games, Stable Baselines3, Tianshou, torchtune.*

## Shared Research & Engineering Directions

**Research Signals**
*   **Curriculum Learning in GRPO:** Moving away from static datasets, projects like `open-instruct` are introducing difficulty-based samplers to stabilize policy updates and reward optimization during GRPO training.
*   **Multi-Turn Agentic RL:** Frameworks are heavily adapting to tool-calling LLMs. This includes logging anomaly detection (`slime`), multi-trajectory support (`verl`), and overcoming tool-execution error handling (`AReaL`).
*   **Token-Level SFT Weighting:** `TRL` saw proposals for weighted SFT, recognizing that treating all assistant tokens equally is suboptimal for mixed-quality, long-form datasets.

**Engineering & Infrastructure Signals**
*   **Heterogeneous Compute (Hardware Agnosticism):** A massive industry-wide push to future-proof post-training infrastructure against GPU scarcity. `verl`, `AReaL`, and `ROLL` are actively integrating Cambricon MLU and Huawei Ascend NPU backends, often requiring custom Megatron/FSDP launch scripts.
*   **Asynchronous Pipeline Decoupling:** To maximize compute utilization, frameworks are decoupling rollout, reward, log-prob, and training engines. `verl` and `slime` are pioneering standalone servers and partial weight syncing (using NCCL or Ray RPCs) to avoid memory bottlenecks.
*   **VLM/MoE Memory Constraints:** As state-of-the-art models shift to massive MoE and multimodal architectures, memory efficiency is the primary bottleneck. `TRL` spent the day reducing batch sizes and parameters just to keep CI tests from OOM-ing, while `OpenRLHF` fixed critical DeepSpeed initialization bugs.

## Differentiation Analysis
*   **Post-Training vs. Traditional RL:** The day's activity proves that "RL" in the open-source ecosystem now effectively means "LLM Alignment." Traditional general-purpose RL libraries (CleanRL, Stable Baselines3) have gone dormant in favor of highly specialized alignment engines (`verl`, `TRL`, `OpenRLHF`) designed specifically to bridge inference engines (vLLM, SGLang) with distributed training (DeepSpeed, FSDP, Megatron).
*   **System Architecture Focus:** Projects are carving out niches based on scaling constraints. `AReaL` and `slime` are distinguishing themselves through low-level network and kernel optimizations (disk-based LoRA, logit filtering), whereas `ROCK` is focusing purely on the sandbox layer, ensuring strict environmental determinism and reproducibility for agents.
*   **Backend vs. Application Layer:** `TRL` and `OpenRLHF` act as accessible wrappers around complex distributed setups, fixing high-level scheduler and integration bugs. In contrast, `verl` and `open-instruct` are rewriting foundational forward-pass logic and attention masking for packed sequences to ensure mathematical soundness at scale.

## Community Momentum & Maturity
*   **High Velocity in Post-Training:** The sheer volume of PRs and issues in `verl` (36 updates) and `TRL` (13 updates) indicates highly active, well-resourced corporate and community maintenance. These projects are iterating daily on production-grade scale issues.
*   **Maturation of Infrastructure:** Fixes center around highly technical edge cases—such as `OpenRLHF` fixing Kwarg handling for DeepSpeed, or `Gymnasium` correcting static type hints for vector wrappers. This indicates that these libraries have matured past MVP features and are hardening their APIs for enterprise deployment.
*   **Ecosystem Fracturing:** The sheer complexity of training LLMs is forcing frameworks to build bespoke solutions for model architectures. For example, configuring Qwen3.5 and Gemma4 requires distinct model-specific PRs across multiple repositories to handle unique multimodal tensors and attention masks.

## Trend Signals
1.  **The Rise of Hardware Diversification:** The simultaneous integration of Ascend NPUs and Cambricon MLUs across multiple independent projects suggests a coordinated industry-wide shift away from exclusive reliance on NVIDIA GPUs for RLHF.
2.  **Asynchrony as a Requirement:** Synchronous training loops are becoming obsolete for advanced tool-calling agents. The proliferation of standalone log-prob servers and delta-weight syncers signals that async pipeline architecture is the new standard for frontier models.
3.  **Token-Level Compute Frugality:** With context windows expanding, indiscriminate computation is too expensive. Techniques like filtering out tool-result tokens before softmax (`slime`) and weighted token loss (`TRL`) show a trend toward surgical compute allocation during post-training.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for May 14, 2026.

### 1. Today's Highlights
Activity on the Alibaba ROLL (github.com/alibaba/ROLL) repository over the last 24 hours signals active expansion in hardware compatibility and ongoing refinement of large-scale distributed training stability. The community is focused on adapting the framework for state-of-the-art models (Qwen3) across diverse hardware accelerators (Ascend), while addressing edge cases in Megatron-scale distributed training. 

### 2. Releases
*   **No new releases** were cut in the past 24 hours. 

### 3. Important Issues
*   **LR Scheduler Inconsistency in Megatron Actor Training ([#442](https://github.com/alibaba/ROLL/issues/442))**
    *   *Details:* A new bug report highlights a critical mismatch in learning rate (LR) scheduler budgeting versus consumption when dynamic batching is enabled in the Megatron actor training path. The budget appears to be relying on static/nominal batch semantics (e.g., `rollout_batch_size`) rather than actual dynamic sequences. 
    *   *Significance:* Dynamic batching is essential for throughput in LLM alignment. LR scheduling bugs can lead to silent training degradation or divergence, making this a high-priority issue for robustness.
*   **March/April Project Update Meta-Thread ([#367](https://github.com/alibaba/ROLL/issues/367))**
    *   *Details:* The core maintainers (led by PanAndy) are keeping the community updated via an active meta-thread. Recent highlights logged in this issue include the rollout architecture's refactoring to support `sglang-router`, the introduction of On-Policy Distillation pipelines, and native support for Qwen3.5 models. 

### 4. Key PR Progress
*   **Ascend NPU Adaptation for Qwen3-30B ([#441](https://github.com/alibaba/ROLL/pull/441))**
    *   *Details:* This open PR integrates FSDP2 and vLLM compatibility with Huawei Ascend NPUs specifically for the Qwen3-30B architecture. 
    *   *Significance:* This PR is a strong indicator of ROLL's push toward heterogeneous hardware support. Adapting FSDP2 and vLLM for Ascend chips ensures that enterprises leveraging non-NVIDIA silicon can still utilize ROLL for high-throughput RLHF on 30B-parameter scale models.

### 5. Why This Project Matters in Today's RL Landscape
In the current post-training and LLM alignment landscape, the bottleneck has shifted from model architecture to compute orchestration. ROLL remains a critical open-source infrastructure layer because it directly tackles the most pressing engineering challenges of modern RLHF:
1.  **Routing and Infrastructure:** Transitioning to `sglang-router` for rollouts shows a commitment to maximizing inference throughput, which is vital for keeping expensive GPU clusters fed with generations.
2.  **Advanced Alignment Techniques:** The native support for *On-Policy Distillation* moves the ecosystem beyond standard PPO/DPO, allowing practitioners to align smaller student models using the distributed outputs of massive teacher models.
3.  **Hardware Agnosticism:** PRs like [#441](https://github.com/alibaba/ROLL/pull/441) prove that ROLL is positioning itself as a hardware-agnostic orchestration layer (supporting both NVIDIA and Ascend), a necessity as the global AI ecosystem diversifies its compute supply chains away from single-vendor dependencies.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily reinforcement learning open-source ecosystem digest for ROCK.

# RL Daily Digest: ROCK (alibaba/ROCK)
**Date:** 2026-05-14

### 1. Today's Highlights
Activity over the last 24 hours shows a strong focus on improving ROCK's infrastructure reliability, observability, and cross-platform capabilities. The core themes include **LLM interaction reproducibility** (via a new in-sandbox proxy), **Docker-in-Docker (DinD) storage fixes** for the Kata runtime, and **observability enhancements** for sandbox startup latency.

### 2. Releases
**None.** No new releases were cut in the past 24 hours.

### 3. Important Issues
*   **[Feature] In-sandbox Model-Service Proxy ([#937](https://github.com/alibaba/ROCK/issues/937)):** An open proposal to introduce an optional `ProxyConfig` that spins up a `rock model-service` proxy *inside* the sandbox environment. This enables deterministic record/replay of LLM calls, which is a critical missing piece for strict RL reproducibility.
*   **[Bug] Kata DinD Loop Disk Mounting ([#932](https://github.com/alibaba/ROCK/issues/932)):** Closed issue highlighting that loop disks were mounting to the hardcoded `/var/lib/docker` path rather than the configured custom `data-root`, causing storage failures in Kata DinD environments. 

### 4. Key PR Progress
*   **feat(job): integrate in-sandbox model-service proxy ([#938](https://github.com/alibaba/ROCK/pull/938)) [OPEN]:** The implementation of Issue #937. It installs the model-service via `PythonRuntimeEnv` to capture and replay LLM traffic natively before any agent code executes.
*   **feat(rocklet): add Windows PowerShell support ([#922](https://github.com/alibaba/ROCK/pull/922)) [CLOSED]:** Introduces a `PowerShellSession` driver, enabling Windows compatibility by allowing the `rocklet` local sandbox to execute commands via `subprocess.Popen` with proper output framing and exit code capture.
*   **feat(model-service): proxy stream + replay & byte passthrough ([#935](https://github.com/alibaba/ROCK/pull/935)) [CLOSED]:** A major refactor of the proxy layer (related to issue [#934](https://github.com/alibaba/ROCK/issues/934)) that drops `litellm` in favor of `httpx` and the native OpenAI SDK. This adds crucial support for streaming, byte-for-byte passthrough, and distinct Forward/Replay backends.
*   **fix(rocklet): symlink mount for nix images ([#936](https://github.com/alibaba/ROCK/pull/936)) [OPEN]:** Resolves a Kata runtime bug where the `mount` binary (located under `/nix/store`) was missing from the `PATH`. 
*   **fix(rocklet): mount loop disk to custom docker data-root ([#933](https://github.com/alibaba/ROCK/pull/933)) [CLOSED]:** The corresponding fix for Issue #932, ensuring loop disks mount correctly to dynamic Docker storage paths. 
*   **feat: add startup timing instrumentation ([#924](https://github.com/alibaba/ROCK/pull/924)) [CLOSED]:** Implements a `StageTimer` context manager utility to log the elapsed time of individual sandbox startup phases, significantly improving debuggability for slow environment launches.

### 5. Why This Project Matters in Today's RL Landscape
As RL paradigms increasingly pivot toward LLM-based autonomous agents and iterative self-correction (e.g., RLHF, RLAIF), the underlying infrastructure must support massive scale, strict determinism, and robust observability. 

Today's updates to the ROCK ecosystem perfectly reflect these next-gen requirements:
1.  **Reproducibility:** The new in-sandbox record/replay proxy gives researchers the exact determinism required for rigorous reward modeling and policy evaluation of LLM-driven agents.
2.  **Heterogeneous Environments:** By fixing Kata/DinD storage bindings and introducing Windows/PowerShell support, ROCK is expanding its sandbox orchestration capabilities beyond traditional Linux-only Docker environments.
3.  **Debugging at Scale:** Adding `StageTimer` instrumentation tackles one of the most frustrating bottlenecks in大规模 RL training—environment setup latency—giving engineers the telemetry needed to optimize compute utilization.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: THUDM/slime
**Date:** 2026-05-14

Here is your daily brief on the latest developments in the `slime` reinforcement learning ecosystem.

## 1. Today's Highlights
Activity over the last 24 hours shows a strong focus on **performance optimization** and **training parity** for large-scale LLM alignment. Key updates include a potential metric-logging bug regarding offline/in-sample metrics, alongside active pull requests aiming to drastically reduce computational overhead during agent rollouts and optimize decentralized weight synchronization via NCCL.

## 2. Releases
No new releases were recorded in the past 24 hours. The community appears to be actively iterating on feature branches ahead of the next potential version tag.

## 3. Important Issues
*   **OIS/TIS Metric Equivalence in Async Training:** A user flagged a numerical anomaly where Offline In-sample (OIS) metrics exactly equal Training In-sample (TIS) metrics during an asynchronous training run with Qwen3.5-4B. If verified, this could indicate a logging or masking bug in how `slime` handles metric calculation in async weight-update modes.
    *   🔗 [Issue #1907](https://github.com/THUDM/slime/issues/1907)

## 4. Key PR Progress
*   **Logit Filtering for Massive Softmax Savings ([PR #1905](https://github.com/THUDM/slime/pull/1905)):** A highly practical optimization for multi-turn RL agents. By filtering out tool-result tokens (which can occupy ~97% of response tokens) *before* the expensive vocab-parallel softmax, this PR drastically reduces computational overhead while maintaining accurate `log_probs` and entropy calculations.
*   **Async Training Eval Parity ([PR #1906](https://github.com/THUDM/slime/pull/1906)):** Fixes a missing baseline evaluation step. `train_async.py` previously skipped the pre-training evaluation present in `train.py`, making it difficult to measure immediate reward gains against the base model in async deployments. 
*   **Advanced Partial Weight Sync ([PR #1806](https://github.com/THUDM/slime/pull/1806)):** Introduces non-colocated weight synchronization for decentralized setups. Instead of broadcasting full weights over NCCL, it uses `selective` or `delta` modes to broadcast only changed parameters (using NaN as an "unchanged" sentinel). This is critical for scaling RLHF across distributed clusters.
*   **Pluggable MLflow Tracking ([PR #1591](https://github.com/THUDM/slime/pull/1591)):** Proposes a `TrackingBackend` ABC to replace hardcoded logging conditionals, officially introducing MLflow as a backend alongside Weights & Biases and TensorBoard.

## 5. Why This Project Matters in Today's RL Landscape
As LLMs transition into tool-using agents, the dynamics of Reinforcement Learning from Human Feedback (RLHF) are shifting. A vast majority of generated tokens are now environmental outputs (tool results) rather than policy decisions. `slime`'s active development—specifically targeted logit masking ([PR #1905](https://github.com/THUDM/slime/pull/1905)) and optimized peer-to-peer weight broadcasting ([PR #1806](https://github.com/THUDM/slime/pull/1806))—demonstrates a focus on the bleeding edge of RL infrastructure. It is solving the exact scaling bottlenecks required to train asynchronous, distributed, multi-turn reasoning models efficiently.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Open-Source Daily Digest: AReaL
**Date:** 2026-05-14

## 1. Today's Highlights
Activity on AReaL over the last 24 hours centered on expanding hardware-communication backends and hardening training infrastructure. Two major open PRs are pushing the boundaries of efficient weight synchronization (Ray RDT and disk-based LoRA for FSDP/SGLang), while newly opened issues highlight critical gaps in configuration handling for GRPO and Megatron compatibility for Qwen3.5.

## 2. Releases
**None.** No new releases or version bumps were recorded in the last 24 hours. The ecosystem appears to be in an active development and bug-fixing phase ahead of a potential future stable release.

## 3. Important Issues
- **Configuration & Compatibility Bugs:** 
  - **[#1334](https://github.com/areal-project/AReaL/issues/1334)** *(Open)*: A new bug reported by `guidryheal-create` shows that using the Camel config for GSM8K GRPO training triggers a crash: `'dict' object has no attribute 'seed'`. This indicates a potential recent regression in YAML configuration parsing for RL experiments.
  - **[#1317](https://github.com/areal-project/AReaL/issues/1317)** *(Open)*: Users are encountering errors when attempting to train Qwen3.5 with Megatron. The crash seems related to MTP (Multi-Token Prediction) arguments mapping incorrectly through `mbridge`.
- **Code Quality & CI:**
  - **[#1284](https://github.com/areal-project/AReaL/issues/1284)** *(Open)*: A feature request advocating for nightly experiments to validate performance, highlighting current limitations where external contributors lack access to the GCP ephemeral instances used in AReaL's CI.
- **Resolved:**
  - **[#1333](https://github.com/areal-project/AReaL/issues/1333)** *(Closed)*: A critical `AsyncTaskRunner` crash caused by unhandled `ZeroDivisionError`s in agent training code was successfully identified and mitigated.

## 4. Key PR Progress
- **[#1305](https://github.com/areal-project/AReaL/pull/1305)** *(Open)*: **Integrating Ray RDT for weight syncing.** Submitted by `KaisennHu`, this PR introduces a Ray Direct Transport (RDT) backend. It implements a new IW Scheduler Bridge and TW Adapter for FSDP, utilizing Ray RPCs for weight extraction. This aims to significantly reduce latency during the critical inference-to-training weight transfer phase.
- **[#1233](https://github.com/areal-project/AReaL/pull/1233)** *(Open)*: **Disk-based LoRA sync for FSDP and SGLang.** Author `TaoZex` is implementing incremental LoRA adapter synchronization directly to disk. This bypasses the costly VRAM/RAM overhead of saving full HuggingFace models, allowing lighter PEFT artifacts for FSDP training and SGLang rollouts.
- **[#1328](https://github.com/areal-project/AReaL/pull/1328)** *(Closed/Merged)*: **Admin key refactoring.** Extracted admin key validation logic from `proxy_rollout_server.py` into a shared `validate_admin_api_key` utility in the HTTP infrastructure stack.
- **[#1332](https://github.com/areal-project/AReaL/pull/1332)** *(Closed/Merged)*: **Tool error handling.** Fixed `PythonTool.execute()` to stop returning `SUCCESS` on code execution failures (e.g., syntax errors or ZeroDivisionErrors), directly resolving the `AsyncTaskRunner` crash outlined in Issue #1333.

## 5. Why This Project Matters in Today's RL Landscape
As post-training RLHF/GRPO scales up to handle massive MoE models (like Qwen 3.5) and agentic workflows, bottlenecking occurs during inference-training weight synchronization and distributed fault tolerance. 

AReaL is directly addressing the primary bottlenecks of modern large-scale RL:
1. **Weight Sync Latency:** PRs like [#1305](https://github.com/areal-project/AReaL/pull/1305) (Ray RDT) and [#1233](https://github.com/areal-project/AReaL/pull/1233) (Disk-based LoRA) represent the cutting-edge effort required to decouple inference engines (like SGLang/vLLM) from training frameworks (FSDP) without choking system memory.
2. **Agentic Robustness:** The resolution of silent tool execution failures ([#1333](https://github.com/areal-project/AReaL/issues/1333)) demonstrates the maturity required for multi-turn RL tool-use, where unhandled Python execution exceptions in code-generating LLMs can bring down entire training clusters.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Hugging Face)
**Date:** 2026-05-14

Here is the daily reinforcement learning and post-training open-source ecosystem update for `huggingface/trl`.

## 1. Today's Highlights
Activity in the TRL repository over the last 24 hours was heavily focused on **infrastructure stability** and **memory optimization**. With 11 updated PRs and 2 active issues, maintainers and community members are actively working to resolve Continuous Integration (CI) out-of-memory (OOM) bottlenecks, particularly concerning Vision-Language Models (VLMs) like Gemma4. Additionally, significant architectural contributions were made to improve DeepSpeed ZeRO-3 compatibility and GRPO training efficiency.

## 2. Releases
No new releases were published today.

## 3. Important Issues
*   **CI OOM Failures:** Issue [#5750](https://github.com/huggingface/trl/issues/5750) reports frequent `torch.OutOfMemoryError` crashes in CI, specifically during VLM tests (`test_sft_trainer.py`).
*   **Feature Request - Weighted SFT:** Issue [#5761](https://github.com/huggingface/trl/issues/5761) proposes a weighted training setup for SFT. The author points out that treating all assistant tokens equally is suboptimal for mixed-quality, long-form SFT datasets, suggesting a mechanism to weight token losses differently. 

## 4. Key PR Progress

**Memory & CI Stability (Gemma4/VLM Focus)**
*   **PR [#5767](https://github.com/huggingface/trl/pull/5767):** Directly addresses CI OOMs by reducing the `per_device_train_batch_size` from 3 to 1 for GRPO/RLOO VLM tests.
*   **PR [#5760](https://github.com/huggingface/trl/pull/5760):** Lowers the `intermediate_size` and image token budget for the tiny Gemma4 model configuration to fit within CI memory constraints.
*   **PR [#5763](https://github.com/huggingface/trl/pull/5763) & [#5762](https://github.com/huggingface/trl/pull/5762):** Minor CI fixes adjusting the minimum `transformers` version to 5.5.0 for Gemma4 and fixing model revision loading bugs.
*   **PR [#5756](https://github.com/huggingface/trl/pull/5756):** Fixes an upstream `AttributeError` related to `GptOssConfig` missing the `num_experts` attribute in the SFT trainer.

**Core RL Algorithm & Training Enhancements**
*   **PR [#5766](https://github.com/huggingface/trl/pull/5766):** Introduces memory-efficient PEFT/LoRA vLLM weight synchronization under DeepSpeed ZeRO-3. This prevents OOMs during the gathering of model parameters before merging adapters—a critical update for distributed RLHF.
*   **PR [#5765](https://github.com/huggingface/trl/pull/5765):** Replaces the deprecated `use_transformers_paged` argument with native continuous batching in GRPO. Crucially, it fixes a bug where logprobs were silently set to `None`, restoring proper importance-sampling correction.
*   **PR [#5759](https://github.com/huggingface/trl/pull/5759):** Updates GRPO quickstart docs to set `max_completion_length=1024`. The previous default of 256 truncated 97-99% of DeepMath-103K completions, resulting in silent training failures (zero reward/loss).
*   **PR [#5758](https://github.com/huggingface/trl/pull/5758):** Implements anonymous telemetry via `huggingface_hub.send_telemetry` in the base trainer class to track the usage of various TRL trainers (e.g., `SFTTrainer`, `GRPOTrainer`).

**Templates and Parallelism**
*   **PR [#5764](https://github.com/huggingface/trl/pull/5764):** Adds a training-specific chat template for **Qwen3-VL** utilizing `&#123;&#37; generation &#37;&#125;` markers to ensure `return_assistant_tokens_mask=True` functions correctly for assistant-only loss masking.
*   **PR [#5331](https://github.com/huggingface/trl/pull/5331) [CLOSED]:** An older PR attempting to add Tensor Parallelism (`tp_plan="auto"`) to the SFT script via accelerate config, which was closed today.

## 5. Why This Project Matters in Today's RL Landscape
As of 2026, post-training (RLHF, DPO, GRPO) has become the primary differentiator in LLM and VLM capabilities. TRL remains the foundational framework for this ecosystem. Today's activity highlights the exact growing pains of the industry: as RL algorithms are applied to massive MoE models (like GptOss) and complex Vision-Language models (like Gemma4 and Qwen3-VL), **memory efficiency at scale** is the primary bottleneck. The community's rapid iteration on DeepSpeed/vLLM synchronization, tensor parallelism, and batched generation logging ensures that TRL remains usable for real-world distributed alignment pipelines.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-05-14 | **Project:** [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

Activity in the OpenRLHF repository over the past 24 hours shows a quiet but focused development cycle, with community members actively addressing distributed execution edge cases and DeepSpeed integration bugs.

### 1. Today's Highlights
*   No new releases were cut today.
*   One active issue regarding Ray version compatibility for multi-node training.
*   One targeted PR submitted to fix learning rate scheduler argument handling in DeepSpeed.

### 2. Releases
*   **None.** The repository has not published a new release in the last 24 hours. 

### 3. Important Issues
*   **Ray 2.55.0 Incompatibility in Multi-Node Setups** | [OpenRLHF/OpenRLHF Issue #1236](https://github.com/OpenRLHF/OpenRLHF/issues/1236)
    *   **Context:** A user reported that multi-node training via `ray job submit` using the hybrid engine script (`train_vlm_math_hybrid_engine.sh`) fails when using `ray==2.55.0`. 
    *   **Significance:** Distributed RLHF training heavily relies on Ray for actor scheduling and resource management across nodes. Breaking changes or regressions in newer Ray versions represent critical bottlenecks for scaling LLM alignment workflows.

### 4. Key PR Progress
*   **Fix: LR Scheduler `min_lr_rate` Kwarg Handling** | [OpenRLHF/OpenRLHF PR #1238](https://github.com/OpenRLHF/OpenRLHF/pull/1238) (Author: `matteolippi`)
    *   **Context:** This PR addresses a bug introduced in PR #1221. The issue occurred in `DeepspeedStrategy._ds_init_train_model` (`openrlhf/utils/deepspeed/deepspeed.py`), where `min_lr_rate` was unconditionally passed to `transformers.get_scheduler` via `scheduler_specific_kwargs`. 
    *   **Significance:** Not all learning rate schedulers accept the `min_lr_rate` argument. Conditionally passing this parameter ensures robustness and prevents crashing during the initialization of the DeepSpeed training strategy, a core requirement for stable PPO/DPO training loops.

### 5. Why This Project Matters in Today's RL Landscape
In the modern LLM alignment stack, scaling Reinforcement Learning from Human Feedback (RLHF) from single-GPU proofs-of-concept to distributed multi-node clusters remains a massive engineering hurdle. OpenRLHF serves as a critical open-source bridge, integrating complex distributed frameworks like Ray with memory-efficient training engines like DeepSpeed. 

Today's updates—specifically the focus on multi-node Ray orchestration and flexible DeepSpeed scheduler initialization—highlight the exact type of granular, infrastructure-level maintenance required to make stable, distributed LLM alignment accessible to the broader open-source community.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Daily Digest: verl
**Date:** 2026-05-14 | **Project:** [verl](https://github.com/volcengine/verl) | **Issues:** 10 updated | **PRs:** 26 updated | **Releases:** 0

---

## 1. Today's Highlights
The verl ecosystem is undergoing a significant architectural expansion, heavily trending toward **hardware diversification** and **fully asynchronous RL pipelines**. Today's activity features critical bug fixes for multimodal models (Qwen3-VL), foundational work to support Cambricon MLU and Ascend NPU backends, and several enhancements to decouple rollout from training in async agent loops.

## 2. Releases
*   **None.** No new stable or development releases were cut in the last 24 hours.

## 3. Important Issues
*   **Agent RL Instability (Qwen3.5/3.6 35B-A3B):** Users report training crashes around 80-130 steps during multi-turn tool-calling Agent RL due to a spike in malformed tool calls. ([Issue #6252](https://github.com/volcengine/verl/issues/6252))
*   **FSDP Attention Mask Bug:** A confirmed bug occurs in FSDP when `use_remove_padding` is set to `False`. ([Issue #6278](https://github.com/volcengine/verl/issues/6278))
*   **Qwen3-VL Device Placement:** Training `Qwen3-VL-8B` with FSDP results in a `RuntimeError` due to unexpected CPU/CUDA tensor splits in `pos_embed`. ([Issue #4906](https://github.com/volcengine/verl/issues/4906))
*   **Async RL Logprobs Inconsistency:** Contributors are investigating a critical mismatch between processed (post-temperature/top-k) vs. raw logprobs between the rollouter and trainer in fully async pipelines. ([Issue #6240](https://github.com/volcengine/verl/issues/6240))

## 4. Key PR Progress
**Architectural & Pipeline Updates:**
*   **Standalone Log Prob Server ([PR #5990](https://github.com/volcengine/verl/pull/5990)):** Decouples `old_log_probs` computation from the actor training engine in the fully async pipeline, preventing the need to constantly save/restore actor weights.
*   **Multi-Trajectory Agent Loop ([PR #6271](https://github.com/volcengine/verl/pull/6271)):** Introduces support for multiple trajectories within a single rollout in the fully-async agent loop.
*   **vLLM Multimodal Bypass ([PR #6245](https://github.com/volcengine/verl/pull/6245)):** Creates an opt-in bridge to pass preprocessed Qwen multimodal tensors directly to the vLLM rollout server, bypassing the in-engine MM processor for faster throughput.
*   **Unified Hardware Abstraction ([PR #6086](https://github.com/volcengine/verl/pull/6086)):** Implements a plugin-based engine system to support multi-chip hardware (CUDA, NPU, MLU, MUSA).

**Hardware Diversification (Ascend NPU & Cambricon MLU):**
*   **Cambricon MLU Support ([PR #6327](https://github.com/volcengine/verl/pull/6327)):** Officially introduces Cambricon MLU backend support to the framework.
*   **Ascend Liger-Kernel Integration ([PR #6244](https://github.com/volcengine/verl/pull/6244)):** Enables Liger-Kernel optimization for Ascend NPUs.
*   **Qwen3.5-27B/35B Megatron on Ascend ([PR #6318](https://github.com/volcengine/verl/pull/6318)):** Adds the necessary Megatron launch scripts for large MoE models on NPU.

**Critical Bug Fixes:**
*   **FSDP Checkpointing Fix ([PR #6334](https://github.com/volcengine/verl/pull/6334)):** Resolves a bug where tied parameters (`embed_tokens` / `lm_head`) were duplicated in `safetensors` during HF saves because FSDP gathers un-alias tied params.
*   **Sequence Parallel Fused Kernels Fix ([PR #6268](https://github.com/volcengine/verl/pull/6268)):** Fixes a shape mismatch where fused-forward functions incorrectly re-rolled SP-sliced inputs when `ulysses_sequence_parallel_size > 1`.

## 5. Why This Project Matters in Today's RL Landscape
As LLMs evolve into complex multimodal and agentic systems (like Qwen3.5 and tool-calling MoEs), RL frameworks must adapt to severe computational bottlenecks. **verl** is pushing the boundary on two critical fronts:
1.  **Asynchronous Decoupling:** By separating rollout, reward, log-prob, and training engines (e.g., PRs #5990, #6271), verl maximizes hardware utilization, which is strictly necessary for stable multi-turn agent RL at scale.
2.  **Hardware Agnosticism:** With initiatives like plugin-based engine overrides and rapid integration of NPU/MLU backends, verl is future-proofing post-training infrastructure against GPU scarcity, enabling distributed RL across heterogeneous compute environments.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Open-Source Ecosystem Daily Digest: 2026-05-14
**Project Spotlight:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity on May 14th was heavily focused on advancing Group Relative Policy Optimization (GRPO) infrastructure. The AllenAI team is actively optimizing inference-training pipelines, specifically addressing how vLLM interacts with OLMo-core, refining token-level attention for packed sequences, and introducing difficulty curriculum learning.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
No issues were updated in the last 24 hours. 

## 4. Key PR Progress
A total of 10 PRs saw updates today, dominated by GRPO enhancements and infrastructure robustness:

*   **GRPO Inference & Logprob Accuracy:**
    *   [PR #1678](https://github.com/allenai/open-instruct/pull/1678) (Closed): Reworked GRPO rollout scoring to utilize processed vLLM logprobs, ensuring sampled-token calculations correctly account for sampling transforms like temperature.
    *   [PR #1670](https://github.com/allenai/open-instruct/pull/1670) (Open): Fixed intra-document attention for packed sequences by passing `doc_lens` and `max_doc_lens` directly into OLMo-core's forward pass.
*   **Curriculum Learning & Training Dynamics:**
    *   [PR #1694](https://github.com/allenai/open-instruct/pull/1694), [PR #1693](https://github.com/allenai/open-instruct/pull/1693), [PR #1692](https://github.com/allenai/open-instruct/pull/1692) (Open): A patchset by contributor `undfined` introducing a difficulty map builder, curriculum sampler, and overall difficulty curriculum for GRPO training.
    *   [PR #1679](https://github.com/allenai/open-instruct/pull/1679) (Open): Refactored `compute_grpo_loss` to simplify `clipfrac` outputs, laying the groundwork for the implementation of new GRPO-variant losses.
*   **Observability & Infrastructure:**
    *   [PR #1690](https://github.com/allenai/open-instruct/pull/1690) (Closed): Improved telemetry by tracking granular per-group generation times and renaming trainer wait metrics for clearer bottleneck analysis.
    *   [PR #1469](https://github.com/allenai/open-instruct/pull/1469) (Closed): Enforced checkpoint requirements for DPO and GRPO training on Beaker restarts to prevent accidental fresh starts and wasted compute.
*   **HF Export & Code Refactoring:**
    *   [PR #1671](https://github.com/allenai/open-instruct/pull/1671) (Open): Rewrote the `save_state_dict_as_hf` pipeline to ensure the OLMo-to-Hugging Face conversion is mathematically verified at startup.
    *   [PR #1669](https://github.com/allenai/open-instruct/pull/1669) (Closed): Extracted `maybe_evaluate` and deduped token counting utilities to unify the eval flow across distinct GRPO implementations (`grpo.py` and `grpo_fast.py`).

## 5. Why This Project Matters in Today's RL Landscape
In the modern RLHF/RLAIF ecosystem, infrastructure dictates model quality as much as algorithmic design. `open-instruct` serves as a critical bridge between cutting-edge base models (OLMo) and production-grade inference engines (vLLM). 

Today's updates highlight two major industry trends: 
1. **Precision in Packed Sequences:** As context windows expand, sequence packing is mandatory for compute efficiency, but it complicates attention masks and logprob tracking during RL rollouts. The OLMo-core updates ensure RL fine-tuning remains mathematically sound at scale.
2. **Curriculum RL:** The introduction of difficulty-based samplers reflects a broader shift away from static RL datasets, moving toward dynamic curriculums that stabilize policy updates during the tricky reward-optimization phases of LLM training.

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

# RL Open-Source Daily Digest: Gymnasium
**Date:** 2026-05-14

Here is your daily brief on the Farama-Foundation/Gymnasium repository.

### 1. Today's Highlights
Activity over the last 24 hours was focused on maintenance and type-safe API enhancements. The community addressed a type-annotation discrepancy in vectorized environment wrappers and expanded the official third-party ecosystem to include a new supply chain optimization environment. There were no new software releases.

### 2. Releases
**No new releases** were recorded in the last 24 hours. 

### 3. Important Issues
*   **[#1580 [OPEN] `RecordVideo` vector wrapper has incorrect `step` return type annotation](https://github.com/Farama-Foundation/Gymnasium/issues/1580)**
    *   *Details:* Author `jingkaimori` identified that the `RecordVideo` wrapper for vector environments incorrectly annotates the `step` function return type as `tuple[ObsType, SupportsFloat, bool, bool, dict[str, Any]]`. Because it delegates to `VectorEnv`, the actual runtime return type is an array-based tuple (`tuple[ObsType, ArrayType, ArrayType, ArrayType, dict[str, Any]]`), causing issues for static type checkers.

### 4. Key PR Progress
*   **[#1581 [OPEN] fix(wrappers): correct RecordVideo vector step return type annotation](https://github.com/Farama-Foundation/Gymnasium/pull/1581)**
    *   *Details:* Author `voidborne-d` quickly submitted a patch to resolve Issue #1580. The PR updates the type hints in `gymnasium/wrappers/vector/rendering.py` to accurately reflect the `VectorEnv` canonical signature, ensuring type-safety for downstream users utilizing vectorized video rendering.
*   **[#1579 [CLOSED] Add gym-invmgmt to third-party environments](https://github.com/Farama-Foundation/Gymnasium/pull/1579)**
    *   *Details:* A proposal by `r2barati` to add `gym-invmgmt` (an inventory management and supply chain optimization environment) to the official third-party registry. The PR was closed without being merged in this iteration, though the environment remains available on GitHub and PyPI.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium (the continuation of OpenAI Gym) remains the foundational API standard for single-agent reinforcement learning in Python. While today's updates are minor bug fixes rather than major feature drops, they highlight the ecosystem's current maturation phase. Correcting type hints (like the vector `RecordVideo` fix) is critical for integrating RL environments seamlessly into modern, large-scale ML pipelines that rely heavily on strict static type checking (e.g., using `mypy` or Pyright). Furthermore, the steady influx of domain-specific third-party environments like `gym-invmgmt` demonstrates Gymnasium's ongoing role as the universal bridge between general RL algorithms and highly specific industry applications.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

No activity in the last 24 hours.

</details>