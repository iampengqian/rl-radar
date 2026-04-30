# RL Open Source Daily Digest 2026-05-01

> Generated: 2026-04-30 22:15 UTC | Projects covered: 15

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
The open-source Reinforcement Learning (RL) ecosystem on 2026-05-01 is sharply divided between the rapid, heavy engineering required for LLM post-training (RLHF/GRPO) and the stable, maintenance-phase of classic algorithmic RL. The primary axis of innovation is currently centered around orchestrating multi-billion parameter Mixture of Experts (MoE) models, managing complex heterogeneous compute clusters, and resolving numerical instabilities between distributed training and inference engines.

## Activity Comparison
The vast majority of developmental velocity today belongs to the LLM post-training frameworks. Projects outside this niche saw little to no activity. 

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 4 | 8 | 0 | Enterprise hardware expansion (Intel/Ascend/ARM); Advanced MoE memory optimization. |
| **AReaL** | 4 | 7 | 0 | Deep infrastructure debugging (FSDP precision traps, RPC memory leaks). |
| **TRL** | 3 | 9 | 0 | Expanding multimodal/VLM support and hardening CI/numerical stability. |
| **slime** | 5 | 6 | 0 | Resolving distributed context parallelism and inference-training orchestration. |
| **OpenRLHF** | 2 | 2 | 0 | Architectural modernization; migrating away from DeepSpeed to AutoModel/FSDP. |
| **Open Instruct** | 0 | 5 | 0 | Refactoring GRPO infrastructure for native vLLM weight syncs. |
| **Gymnasium** | 1 | 1 | 0 | Routine maintenance; bug fixes in physics collision engines. |
| **Stable Baselines3**| 1 | 1 | 0 | Upstream dependency management for Gymnasium 1.3.0 release. |
| **ROLL** | 0 | 1 | 0 | Hardware diversification via Huawei Ascend NPU support. |
| **ROCK** | 0 | 1 | 0 | DevEx improvements (CLI logging/verbosity standardization). |
| **CleanRL / PettingZoo / rl_games / Tianshou / torchtune** | 0 | 0 | 0 | No activity. |

## Shared Research & Engineering Directions

**Research Signals**
*   **MoE Inference-Training Discrepancies:** Frameworks are actively solving instabilities caused by MoE architectures during RL loops. AReaL is pioneering "Rollout Routing Replay" (R3) to force alignment between inference routing and async training.
*   **Advanced Policy Corrections:** New algorithmic strategies are emerging to stabilize post-training. Open Instruct introduced the "IcePop" algorithm for unified off-policy corrections, while verl is pushing multi-output trajectories for multi-turn agent loops.
*   **Multimodal RLHF:** Training pipelines are rapidly adapting to Vision Language Models (VLMs). TRL is optimizing SFT loss mechanisms specifically for VLMs, while verl and slime are troubleshooting massive VLMs like Qwen3-VL-235B and GLM5.

**Engineering & Infrastructure Signals**
*   **The Great DeepSpeed Migration:** The ecosystem is aggressively shedding DeepSpeed dependency. OpenRLHF is replacing it with HuggingFace `AutoModel`, while Open Instruct and verl pivot heavily toward PyTorch FSDP/FSDP2 and Megatron backends.
*   **Compute Fractoring & Hardware Enablement:** Hardware agnosticism is a top priority. verl, AReaL, and ROLL simultaneously rolled out support, fixes, or dockerfiles for Intel XPU and Huawei Ascend NPUs to bypass GPU supply constraints.
*   **Precision & Memory Traps:** Managing Out-Of-Memory (OOM) errors and silent numerical drift is dominating engineering hours. AReaL patched critical FSDP optimizer state downcasting (bf16 vs fp32), TRL overhauled CI memory leakage, and verl implemented Quantization-Aware Training (QAT) and advanced Megatron offloading to prevent host OOMs.

## Differentiation Analysis
*   **verl vs. OpenRLHF vs. slime:** These projects compete in the high-end, distributed RLHF orchestration space. **verl** differentiates via extreme hardware extensibility (custom support for ARM, Intel, Ascend) and multi-turn agent loops. **slime** focuses heavily on bridging high-performance third-party backends (Megatron-LM) and managing extreme context parallelism. **OpenRLHF** is currently uniquely focused on fundamental architectural shifts by stripping out DeepSpeed in favor of native AutoModel integrations.
*   **TRL vs. Open Instruct:** While both deal with post-training, **TRL** serves as the accessible, upper-stack toolkit heavily integrated with the HuggingFace hub (focusing on templates, VLM handling, and accessible SFT/DPO). Conversely, **Open Instruct** operates closer to the metal, focusing on low-level distributed GRPO optimizations, wall-clock timing, and vLLM native APIs.
*   **Classic vs. Post-Training RL:** There is a stark developmental contrast. Projects like **Stable Baselines3** and **Gymnasium** are in mature maintenance phases, focused purely on API stability and backward compatibility. They are entirely decoupled from the distributed inference, MoE, and memory-leak fires dominating the LLM-focused frameworks.

## Community Momentum & Maturity
*   **Hyper-Active LLM Orchestration:** Frameworks like verl, AReaL, and slime show massive momentum driven by enterprise needs (e.g., Qwen and GLM teams actively committing). The complexity of the issues resolved indicates a highly specialized, professional engineering base actively pushing trillion-parameter scaling boundaries.
*   **Mature Stability:** Gymnasium and Stable Baselines3 exhibit standard open-source maturity. Their activity is purely defensive—patching deprecations and fixing physics bugs—demonstrating that classic RL APIs are fundamentally "solved" infrastructure.
*   **Corporate Backing:** Activity is heavily consolidated around corporate-backed projects (Hugging Face, Volcengine, Alibaba, Allen AI), indicating that the barrier to entry for developing competitive RL infrastructure is higher than ever.

## Trend Signals
*   **VLMs are the New Text:** Multimodal post-training is no longer an afterthought. Frameworks are treating Vision Language Models as first-class citizens, driving rapid refactors of chat templates, SFT losses, and memory management.
*   **Inference-First Training:** Bugs related to inference engines (vLLM vs. SGLang rollout discrepancies, token corruptions, and cross-doc attention mismatches) are dominating the trackers. The performance of the RL pipeline is now bottlenecked by inference orchestration rather than the training step itself.
*   **FSDP2 Supremacy:** The coordinated migration away from DeepSpeed toward PyTorch FSDP/FSDP2 and Megatron-FSDP hybrids signals that the community has standardized on newer native sharding techniques for massive scale.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for May 1, 2026, based on the ROLL repository activity.

### 1. Today's Highlights
*   **Hardware Diversification:** The primary activity in the ROLL ecosystem revolves around expanding hardware compatibility. A recently merged Pull Request introduces native support for Huawei Ascend NPUs, signaling a move toward diversified compute architectures for large-scale reinforcement learning (RL) training.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **No new or updated issues** were recorded in the last 24 hours, indicating a stable development cycle with no newly reported blockers or bugs.

### 4. Key PR Progress
*   **[CLOSED] [#428 feat: add npu dockerfile and useage](https://github.com/alibaba/ROLL/pull/428)**
    *   **Author:** UsernameFull
    *   **Summary:** This PR integrates infrastructure support for deploying ROLL on Huawei Ascend NPUs (specifically targeting the Atlas 900 A2 and A3 PODc clusters). It introduces `Dockerfile.A2` and accompanying documentation, allowing practitioners to seamlessly run Reinforcement Learning from Verifier Rewards (RLVR) and other RL pipelines on Ascend hardware. 

### 5. Why This Project Matters in Today's RL Landscape
In the current RL landscape—increasingly dominated by the scaling laws of Reinforcement Learning from Human/AI Feedback (RLHF/RLVR) and reasoning models (like DeepSeek-R1 and OpenAI o1)—infrastructure agility is a critical bottleneck. 

ROLL (RL for Original and Large-scale Learning) serves as a high-performance framework designed to orchestrate complex RL workloads over massive LLM deployments. Today's update, specifically [PR #428](https://github.com/alibaba/ROLL/pull/428), highlights a broader industry trend: **compute fracturing**. As global demand for AI training clusters outpaces GPU supply, frameworks that offer out-of-the-box, containerized support for alternative accelerators (like Huawei Ascend NPUs) become invaluable. By bridging the software gap for heterogeneous hardware, ROLL lowers the barrier to entry for large-scale post-training and reasoning model development.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Open-Source Ecosystem Daily Digest: ROCK
**Date:** 2026-05-01 | **Project:** [alibaba/ROCK](https://github.com/alibaba/ROCK)

## 1. Today's Highlights
Activity on the ROCK repository over the past 24 hours was highly focused on developer experience (DevEx) and tooling. The ecosystem saw no new releases or active issues, but an existing Pull Request aimed at overhauling CLI logging and verbosity controls received attention. 

## 2. Releases
* **No new releases** recorded in the last 24 hours.

## 3. Important Issues
* **No active issues** updated in the last 24 hours. 

## 4. Key PR Progress
The primary development focus is currently on standardizing command-line interactions:
* **[PR #907](https://github.com/alibaba/ROCK/pull/907) [OPEN]**: *feat(cli): add -v verbosity control and unify log level management*
  * **Author:** berstpander
  * **Summary:** This PR transitions the `-v` argument from dead code to a fully functional, count-based verbosity flag (`-v`, `-vv`, `-vvv`) mapped to standard log levels (WARNING, INFO, DEBUG). It also patches two underlying bugs in the `config_log()` function.
  * **Analysis:** Implementing unified log level management is a critical enhancement for debugging complex, distributed RL training runs, preventing standard outputs from being flooded with unfiltered tensor metrics.

## 5. Why This Project Matters in Today's RL Landscape
In the modern RL landscape, engineering and infrastructure overhead often bottleneck research iteration. Alibaba's ROCK serves as a vital, scalable framework designed to abstract away the complexities of distributed RL training. While today's updates are tool-centric, refining the CLI logging interface (PR #907) directly addresses a known pain point in Reinforcement Learning: tracing system-level bugs and environment step metrics during massive parallel training runs. Robust, standardized observability tools are essential for maintaining and debugging state-of-the-art open-source RL training loops.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Open-Source Ecosystem Daily Digest: slime
**Date:** 2026-05-01 | **Project:** [THUDM/slime](https://github.com/THUDM/slime)

## 1. Today's Highlights
Activity around the Slime framework (a large-scale RLHF/post-training infrastructure) remains highly focused on hardware adaptability and complex parallelism. Key discussions today revolve around Context Parallelism (CP) bugs, expanding NPU support for models like Qwen3.5, and critical roll-out generation bugs (corrupted first tokens). Under the hood, maintainers are actively merging fixes for PPO value offloading and bridging unsupported model architectures. 

## 2. Releases
No new releases were published today. The ecosystem remains on the latest stable branch.

## 3. Important Issues
*   **Context Parallelism (CP) Token Scramble ([#1871](https://github.com/THUDM/slime/issues/1871)):** A significant bug was reported where `--allgather-cp` silently scrambles token order due to a mismatch between legacy "zigzag" CP layouts and newer "contiguous" layouts in `hf_attention.py`.
*   **SGLang Rollout Corruption ([#1853](https://github.com/THUDM/slime/issues/1853)):** Users noted that GLM5 SGLang rollouts intermittently produce corrupted/gibberish first tokens. This is a critical issue for RL reward consistency.
*   **Hardware Expansion Inquiry - NPU ([#1821](https://github.com/THUDM/slime/issues/1821)):** A user inquired about porting Qwen3.5 post-training to Huawei Ascend NPU910B cards, highlighting the community's push for hardware-agnostic RL training. 
*   **MTP + CP Incompatibility ([#1870](https://github.com/THUDM/slime/issues/1870)):** Queries on whether Multi-Token Prediction (MTP) layers for GLM-5 can be jointly trained, given current incompatibilities with `allgather_cp`.
*   **Megatron-Bridge Module Missing ([#1711](https://github.com/THUDM/slime/issues/1711)):** Continued reports of `ModuleNotFoundError` for `peft_bridge.py` when using third-party Megatron-Bridge forks for Qwen 35.

## 4. Key PR Progress
*   **PPO Value Offloading Fix ([#1882](https://github.com/THUDM/slime/pull/1882)):** Opened today by `lilei199908`, this PR addresses underlying bugs in PPO value offloading, which is crucial for memory management during massive RL batch processing.
*   **Resilient HF Model Saving ([#1881](https://github.com/THUDM/slime/pull/1881)):** Opened today by `WangHong-yang`, this PR introduces a fallback mechanism for `--save-hf`. If `AutoBridge` fails for unsupported architectures, it now automatically converts saved `torch_dist` checkpoints to HuggingFace safetensors.
*   **Distributed POST Actor Concurrency ([#1880](https://github.com/THUDM/slime/pull/1880)):** Fixes a miscalculation in per-actor concurrency for distributed POST mode, ensuring proper workload distribution across Ray nodes.
*   **Qwen3.6 & Docker Upgrades ([#1884](https://github.com/THUDM/slime/pull/1884), [#1874](https://github.com/THUDM/slime/pull/1874)):** CI images are being updated to include SGLang `v0.5.10.post1` and integrate testing for the newer Qwen3.6 architecture.
*   **Qwen3 dtype Fix ([#1883](https://github.com/THUDM/slime/pull/1883)):** A quick patch to replace a non-existent `get_current_dtype` with `torch.get_default_dtype()` for the `qwen3_next` backend.

## 5. Why This Project Matters in Today's RL Landscape
As LLMs scale to massive MoE architectures (e.g., GLM5-744B, Qwen3.5), the bottleneck in Reinforcement Learning from Human Feedback (RLHF) has shifted from pure compute to distributed orchestration. **Slime** acts as a crucial bridge between high-performance inference engines (like SGLang) and massive distributed training backends (like Megatron-LM). 

Today's digest perfectly illustrates the current challenges in modern post-training: avoiding token corruption during high-throughput rollouts, managing sequence lengths that exceed GPU memory limits (via `get_capped_partitions`), and developing robust Context Parallelism. By actively patching distributed concurrency workflows (Ray actors) and CPU/GPU memory offloading for PPO, Slime provides the essential infrastructure required to stabilize RL training on trillion-parameter scale models.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# AReaL RL Daily Digest — 2026-05-01

## 1. Today's Highlights
Activity on 2026-05-01 was dominated by **infrastructure stability and memory leak fixes**, alongside significant architectural feature development. The community merged key fixes for distributed RPC tensor management and Megatron VLM memory optimization, while advancing critical PRs for dependency upgrades (Megatron-core, SGLang, vLLM, Transformers) and MoE routing replay. A new critical bug was reported regarding optimizer state dtype silently degrading to bf16 under FSDP.

---

## 2. Releases
**None.** The repository has not published a new release in the last 24 hours. The current development seems heavily focused on stability and feature accumulation, potentially aligning with the April/May 2026 release cycle mentioned in recent PRs.

---

## 3. Important Issues
*Total Issues Updated: 9 | Key Themes: Distributed Memory Leaks, Optimizer Precision, Backend Compatibility*

*   🔴 **FSDP Optimizer State dtype Silently Downcasted (Created Today):**
    [Issue #1292](https://github.com/inclusionAI/AReaL/issues/1292) reports a critical late-stage convergence plateau. When using the FSDP backend with `actor.dtype: bfloat16`, `torch.optim.AdamW` silently initializes optimizer states (`exp_avg`, `exp_avg_sq`) in **bf16** instead of fp32, leading to ~3× worse convergence compared to DeepSpeed-ZeRO3 or Megatron backends.
*   🟠 **RTensor Unbounded Memory Leaks (VLM / Long-Running Training):**
    Following up on a recently closed VLM crash bug ([Issue #1209](https://github.com/inclusionAI/AReaL/issues/1209)), a new issue ([Issue #1296](https://github.com/inclusionAI/AReaL/issues/1296)) was opened today. Non-DP-head ranks are accumulating unbound `_storage` entries in `RTensor`, causing OOM crashes.
*   🟡 **vLLM vs. SGLang Training Stability:**
    [Issue #1290](https://github.com/inclusionAI/AReaL/issues/1290) highlights that GRPO on GSM8K remains stable on SGLang but collapses or becomes highly unstable when using vLLM as the inference backend.
*   💡 **RFC: Ray Core RDT for Weight Syncing:**
    [Issue #1243](https://github.com/inclusionAI/AReaL/issues/1243) proposes integrating Ray Core RDT (Remote Direct Memory Transfer) to accelerate weight syncing, keeping backward compatibility by isolating the backend in `areal/experimental/`.

---

## 4. Key PR Progress
*Total PRs Updated: 11 | Key Themes: Memory Leak Mitigation, MoE Stability, Dependency Bumps*

*   🛠️ **RTensor Memory Leak Mitigated:**
    To address the OOM issues above, [PR #1297](https://github.com/inclusionAI/AReaL/pull/1297) (Open) gates `RTensor.remotize` strictly to DP-head ranks, preventing non-DP workers from filling node-local storage unnecessarily. This pairs with the recently merged [PR #1282](https://github.com/inclusionAI/AReaL/pull/1282) which fixed a related `_fetch_buffer` leak on cross-node consumers.
*   🚀 **April 2026 Dependency Upgrade ([High Priority]):**
    [PR #1206](https://github.com/inclusionAI/AReaL/pull/1206) is actively adapting the codebase to breaking API changes for the April 2026 cycle: bumping `megatron-core`, `sglang`, `vllm`, and `transformers`. This directly correlates with today's closed [PR #1280](https://github.com/inclusionAI/AReaL/pull/1280), which patched `apply_chat_template` to handle `transformers>=5.0` returning a dict instead of a list.
*   🧠 **MoE Training Stabilization (Rollout Routing Replay):**
    [PR #1207](https://github.com/inclusionAI/AReaL/pull/1207) implements R3 (Rollout Routing Replay) for MoE models. It records expert routing indices during inference and forces replay during async RL training to eliminate routing discrepancy instabilities.
*   ⚡ **Archon ZERO1 + Dynamic Tree Attention (DTA):**
    [PR #1287](https://github.com/inclusionAI/AReaL/pull/1287) adds a consolidated ZERO1 + DTA path, wiring tree-training mode and a trie/stack engine for Archon, featuring runnable GSM8K/Task configs.
*   🔧 **LoRA Checkpoint Bootstrapping & Routing Fix:**
    [PR #1241](https://github.com/inclusionAI/AReaL/pull/1241) now allows FSDP training to bootstrap natively from adapter-only HF checkpoints. Meanwhile, [PR #1238](https://github.com/inclusionAI/AReaL/pull/1238) stabilizes versioned LoRA routing in vLLM by preventing in-flight requests from losing their route mapping during dynamic updates.

---

## 5. Why This Project Matters in Today's RL Landscape
In the modern RLHF/post-training ecosystem, scaling LLM and VLM training reliably across massive distributed clusters remains the primary engineering bottleneck. AReaL's current activity perfectly highlights the "bleeding edge" problems of 2026: 
1. **Low-Level Precision & Memory Traps:** As seen in [Issue #1292](https://github.com/inclusionAI/AReaL/issues/1292), the intersection of mixed-precision training and fully sharded data parallelism (FSDP) is still fraught with silent performance degradation traps.
2. **Inference-Training Discrepancies:** The struggle to achieve parity between vLLM and SGLang backends ([Issue #1290](https://github.com/inclusionAI/AReaL/issues/1290)) and the novel "Rollout Routing Replay" for MoE models ([PR #1207](https://github.com/inclusionAI/AReaL/pull/1207)) show that RL post-training is fundamentally constrained by how accurately the training step mimics the inference engine's behavior.
3. **Complex Orchestration:** Features like dynamic tree attention (Archon) and Ray Core RDT integration prove that the next generation of RL frameworks require deep, hardware-level network optimizations to sync multi-billion parameter weights efficiently.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL Ecosystem
**Date:** 2026-05-01 | **Repository:** [huggingface/trl](https://github.com/huggingface/trl)

## 1. Today's Highlights
Activity in the TRL repository over the last 24 hours was heavily focused on **infrastructure stability** and **expanding multimodal/VLM support**. Engineers tackled persistent CI/CD Out-Of-Memory (OOM) errors and pushed several key Pull Requests to refine SFT loss computations and chat templates for modern architectures like Gemma 3, Cohere2, and Qwen3.5. 

## 2. Releases
*   **No new releases** were published today.

## 3. Important Issues
*   **Persistent SFT Training Bug in Llama 3.2:** [Issue #5138](https://github.com/huggingface/trl/issues/5138) `[OPEN]` remains a critical focal point. Users report improper training during SFT on `Llama-3.2-3B-Instruct`, specifically tied to recent library updates that deprecated `DataCollatorForCompletionOnly` for completion-only loss calculation.
*   **Tokenization Mismatch in Qwen 3.5:** [Issue #5213](https://github.com/huggingface/trl/issues/5213) `[CLOSED]` highlighted a prompt/completion tokenization mismatch when fine-tuning `Qwen3.5-9B`.
*   **CI Instability:** [Issue #5207](https://github.com/huggingface/trl/issues/5207) `[CLOSED]` logged frequent CUDA OOM errors during CI test runs, specifically within `TestDPOTrainer::test_train_toolcall_data`.

## 4. Key PR Progress
A total of 12 PRs saw updates today, led by significant contributions from `qgallouedec` and `albertvillanova`:

*   **Optimizing SFT Loss & Memory:** 
    *   [PR #5676](https://github.com/huggingface/trl/pull/5676) `[OPEN]` introduces chunked NLL loss for PEFT in SFT, showing major benchmark improvements in memory management.
    *   [PR #5684](https://github.com/huggingface/trl/pull/5684) `[OPEN]` extends this chunked NLL loss capability to Vision Language Models (VLMs).
*   **Fixing CI OOM Errors:** `albertvillanova` submitted a barrage of fixes for [Issue #5207](https://github.com/huggingface/trl/issues/5207), including reducing batch sizes for VLM tests ([PR #5687](https://github.com/huggingface/trl/pull/5687)), shrinking tiny Gemma3 image sizes ([PR #5680](https://github.com/huggingface/trl/pull/5680)), and clearing GPU memory leaks from traceback frame locals ([PR #5681](https://github.com/huggingface/trl/pull/5681)).
*   **New Chat Templates:** Support is being prepped for the next generation of models. [PR #5685](https://github.com/huggingface/trl/pull/5685) `[OPEN]` adds a Gemma 3 training template (`assistant_only_loss=True`), while [PR #5675](https://github.com/huggingface/trl/pull/5675) `[OPEN]` adds `&#123;&#37; generation &#37;&#125;` markers for Cohere2.
*   **Quality Assurance:** [PR #5686](https://github.com/huggingface/trl/pull/5686) `[CLOSED]` introduced training-invariance tests to detect numerical drift caused by gradient accumulation normalization or attention-impl divergence (eager ↔ FA2). Additionally, [PR #5615](https://github.com/huggingface/trl/pull/5615) `[CLOSED]` deployed a dedicated testing suite for the new `DistillationTrainer`.

## 5. Why This Project Matters in Today's RL Landscape
As Large Language Models (LLMs) and Vision Language Models (VLMs) converge, post-training techniques like Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO) are the primary differentiators for model quality. 

Today's TRL activity demonstrates the dual reality of the modern RL stack: 
1. **The rise of complex multimodal RLHF:** The ongoing shifts to fix VLM SFT loss mechanisms and standardize processor/tokenizer handling (e.g., [PR #5561](https://github.com/huggingface/trl/pull/5561)) prove that adapting text-native RL pipelines to image-text models is a massive, ongoing engineering challenge.
2. **The silent danger of numerical drift:** The introduction of training-invariance tests ([PR #5686](https://github.com/huggingface/trl/pull/5686)) addresses a critical but often ignored problem in open-source RL: kernel-level attention divergence silently shifting loss trajectories. By hardening the CI pipeline against OOMs and numerical leaks, Hugging Face is ensuring that TRL remains a stable, production-grade engine for the next generation of reasoning and multimodal models.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# RL Open-Source Daily Digest: OpenRLHF
**Date:** 2026-05-01

Here is your daily briefing on the OpenRLHF ecosystem based on the latest GitHub activity.

### 1. Today's Highlights
*   **Architecture Modernization:** A significant structural shift is underway as the community pushes to replace DeepSpeed with HuggingFace `AutoModel` backend (PR #1226). 
*   **Colocated Engine Fixes:** Active development is happening to fix vLLM GPU allocation and initialization deadlocks for tensor-parallel engines running in colocated environments.
*   **Qwen 3.5 Integration:** Users are already testing the framework against the newest Qwen 3.5 models, uncovering weight-loading discrepancies that affect generation accuracy.

### 2. Releases
*   **No new releases** were cut in the last 24 hours. 

### 3. Important Issues
*   **Missing weights for Qwen 3.5** ([Issue #1232](https://github.com/OpenRLHF/OpenRLHF/issues/1232))
    *   **Author:** RushDon | **Created:** 2026-04-30
    *   **Context:** When training with the hybrid engine (`train_vlm_math_hybrid_engine.sh`), weight updates in vLLM are resulting in corrupted/incorrect generated samples for `Qwen3_5ForConditionalGeneration`. This points to a likely mismatch in model architecture expectations or missing weight mappings during the vLLM weight-sync phase.
*   **vLLM `sleep` initialization failure** ([Issue #1162](https://github.com/OpenRLHF/OpenRLHF/issues/1162))
    *   **Author:** cafeii | **Created:** 2025-12-23
    *   **Context:** An older but active issue detailing a script failure when initializing multi-GPU PPO training with Ray. The bug specifically triggers when vLLM attempts to call `sleep` during the actor/reference model initialization phases. 

### 4. Key PR Progress
*   **Replace Deepspeed backend with Automodel** ([PR #1226](https://github.com/OpenRLHF/OpenRLHF/pull/1226))
    *   **Author:** hijkzzz | **Updated:** 2026-04-30
    *   **Significance:** This is a major architectural PR. Moving away from DeepSpeed in favor of native HuggingFace `AutoModel` support reflects a broader industry trend of shifting away from DeepSpeed toward more flexible, merged training backends (like PyTorch FSDP2). 
*   **Fix vLLM GPU allocation for colocated tensor-parallel engines** ([PR #1231](https://github.com/OpenRLHF/OpenRLHF/pull/1231))
    *   **Author:** fuyuan-li | **Updated:** 2026-04-30
    *   **Significance:** Directly addresses [Issue #1162](https://github.com/OpenRLHF/OpenRLHF/issues/1162). The fix correctly routes the `num_gpus` value within `create_vllm_engines`, which is critical for preventing NCCL/Ray deadlocks when RL actors and vLLM inference engines share the same physical GPUs.

### 5. Why This Project Matters in Today's RL Landscape
In the current RLHF/RLAIF landscape, the primary bottleneck for post-training LLMs is orchestrating distributed RL workloads (generating rollouts, computing rewards, and updating policy/reference models) across massive GPU clusters. 

OpenRLHF serves as a critical bridge in the open-source ecosystem. It allows developers to seamlessly integrate high-throughput inference engines (vLLM) with distributed training frameworks. The issues and PRs from today perfectly illustrate the cutting-edge challenges in RL post-training: managing complex GPU memory boundaries (colocation), synchronizing weights rapidly between training and inference engines, and keeping up with the rapid release cadence of new base models (like Qwen 3.5). Furthermore, the migration away from DeepSpeed ([PR #1226](https://github.com/OpenRLHF/OpenRLHF/pull/1226)) signals that the open-source community is aggressively pursuing more robust, modern infrastructure for LLM alignment.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

# RL Open-Source Ecosystem Daily Digest: verl
**Date:** 2026-05-01

## 1. Today's Highlights
The verl ecosystem is experiencing a massive surge in hardware expansion and multi-turn agent capabilities. Over the last 24 hours, the repository saw 30 updated Pull Requests and 9 active Issues. The core themes of the day are **multi-hardware enablement** (Intel XPU, Ascend NPU fixes, and ARM Aarch64 updates) and **advanced memory optimization** for large-scale MoE (Mixture of Experts) models. Roadmap discussions for 26Q2 also indicate a strong pivot toward multi-modal generation RL and Megatron-FSDP integrations.

## 2. Releases
No new releases were detected in the last 24 hours. The community remains actively focused on merging architectural improvements and bug fixes into the main branch.

## 3. Important Issues
*   **Qwen MoE Colocated Checkpointing Request ([#6225](https://github.com/verl-project/verl/issues/6225)):** Engineers from the Qwen team requested a colocated checkpoint engine for hybrid weight synchronization. This is critical for training massive MoE models (e.g., Qwen3.5-35B-A3B, Qwen3-VL-235B) using the Megatron + SGLang strategy.
*   **Ascend NPU Instability ([#6211](https://github.com/verl-project/verl/issues/6211) & [#6224](https://github.com/verl-project/verl/issues/6224)):** Routing Replay (R3 mode) is causing massive inter-node data transfers and timeouts on Ascend A2 clusters. Additionally, `vllm_ascend` 0.13.0 is failing to replace `ApplyRotaryEmb` during rollout initialization.
*   **vLLM Performance Regression on GB200 ([#5964](https://github.com/verl-project/verl/issues/5964)):** An ongoing bug tracking a performance drop when upgrading from vLLM 0.17 to 0.18 on ARM-based Aarch64 GB200 nodes, despite training reward curves remaining correct.
*   **Qwen3.5 Tool Calling Instability ([#6223](https://github.com/verl-project/verl/issues/6223)):** The 35B-A3B model exhibits unstable tool call formatting during token-in-token-out rollouts with `enable_thinking=False`, an issue not present in the 9B variant.

## 4. Key PR Progress
*   **Intel XPU End-to-End Support ([#6119](https://github.com/verl-project/verl/pull/6119)):** Introduction of full Intel XPU (Arc Pro / Data Center GPU Max) support for GRPO, PPO, and SFT training using FSDP + vLLM, significantly broadening verl's hardware vendor support.
*   **Advanced Memory & QAT Optimizations ([#6229](https://github.com/verl-project/verl/pull/6229), [#6193](https://github.com/verl-project/verl/pull/6193)):** PR [#6229](https://github.com/verl-project/verl/pull/6229) introduces Quantization-Aware Training (QAT) with FP8 (w8a8 & w8a16). Meanwhile, the closed PR [#6193](https://github.com/verl-project/verl/pull/6193) fixed a critical 2x peak host-memory regression in Megatron model offloading, preventing OOMKills on large models.
*   **Multi-Turn Agent & Async Fixes ([#6228](https://github.com/verl-project/verl/pull/6228), [#6227](https://github.com/verl-project/verl/pull/6227), [#6076](https://github.com/verl-project/verl/pull/6076)):** Merged efforts to support multi-output trajectories in async reward scoring, fix validation dumps for multi-output rollouts, and restore validation capabilities in fully asynchronous elastic training environments.
*   **Megatron-FSDP & vLLM Upgrades ([#5423](https://github.com/verl-project/verl/pull/5423), [#6222](https://github.com/verl-project/verl/pull/6222)):** Ongoing development to support Megatron-FSDP as a training backend ([#5423](https://github.com/verl-project/verl/pull/5423)) and bumping aarch64 vLLM to 0.18.0 ([#6222](https://github.com/verl-project/verl/pull/6222)).

## 5. Why This Project Matters in Today's RL Landscape
As the post-training RLHF/GRPO landscape shifts heavily toward massive MoE architectures (like DeepSeek and Qwen3.5) and multi-modal agents, verl is cementing itself as the hardware-agnostic orchestration layer of choice. By aggressively solving cross-platform memory bottlenecks (Megatron offloading), enabling low-precision QAT, and providing robust multi-turn agent loop frameworks, verl is actively bridging the gap between experimental LLM research and production-grade, distributed RL workloads.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Open-Source Ecosystem Daily Digest: 2026-05-01
**Focus:** [allenai/open-instruct](https://github.com/allenai/open-instruct)

## 1. Today's Highlights
Activity on May 1st centers entirely on optimizing the GRPO (Group Relative Policy Optimization) infrastructure. Contributor **finbarrtimbers** drove today's updates, submitting multiple PRs aimed at migrating Open Instruct's RL training loops to vLLM's new native weight synchronization API. The focus is heavily on fixing step-0 weight sync bugs, aligning metrics across different GRPO implementations, and reducing I/O bottlenecks during checkpointing.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **0 issues updated** in the last 24 hours. There is no new community bug reporting or feature request activity to report for today.

## 4. Key PR Progress
All activity today comes from active Pull Requests aiming to stabilize the `grpo` training paths:

*   **[PR #1649](https://github.com/allenai/open-instruct/pull/1649) [OPEN]: Native Weight Sync for `grpo.py`** 
    Following up on a previous migration to vLLM's native weight sync API, this PR ensures the standard `grpo.py` script functions correctly and brings its metrics/behavior into strict parity with the optimized `grpo_fast.py`.
*   **[PR #1642](https://github.com/allenai/open-instruct/pull/1642) [OPEN]: Step-0 Weight Sync & Attention Fixes**
    A critical bugfix for the FSDP2/olmo-core GRPO path. It resolves a triple-fault in the step-0 weight sync mechanism. Crucially, it also fixes a massive discrepancy in `val/tis_clipfrac` (previously ~570x higher than the HuggingFace reference) caused by `grpo.py` running cross-doc attention during per-step logprob recomputation while vLLM was running intra-doc.
*   **[PR #1650](https://github.com/allenai/open-instruct/pull/1650) [OPEN]: Unified Off-Policy Correction**
    Introduces the "IcePop" algorithm and establishes a unified interface for off-policy corrections, expanding the library's RL algorithmic toolkit.
*   **[PR #1648](https://github.com/allenai/open-instruct/pull/1648) [OPEN]: GRPO Metric Alignment**
    An ongoing effort to match metrics generated by `grpo.py` (the olmo-core actor path) with `grpo_fast.py`.
*   **[PR #1647](https://github.com/allenai/open-instruct/pull/1647) [OPEN]: Checkpointing Overhead Reduction**
    Refactors the training loop to cut redundant work. Inline checkpoint-state saving was moved out of `run_training` and into a new `maybe_save_checkpoint_state` helper within `one_training_step`. This properly attributes the wall-clock time to `time/saving` metrics, preventing training step timing from being skewed by I/O.

## 5. Why This Project Matters in Today's RL Landscape
As LLMs rely more heavily on RL from Human/AI Feedback (RLHF) and post-training reasoning paradigms (like GRPO), the efficiency of the underlying RL infrastructure dictates model iteration speed. Today's PRs highlight a maturing ecosystem where the focus has shifted from *basic implementation* to *distributed systems optimization*. 

By debugging cross-doc attention discrepancies ([PR #1642](https://github.com/allenai/open-instruct/pull/1642)) and moving compute-heavy models like Olmo-core to native vLLM weight synchronization ([PR #1649](https://github.com/allenai/open-instruct/pull/1649)), Open Instruct is solving critical memory and compute bottlenecks. Furthermore, the introduction of unified off-policy correction frameworks ([PR #1650](https://github.com/allenai/open-instruct/pull/1650)) makes this repo a highly relevant toolbox for researchers pushing the boundaries of sample-efficient RL algorithms in 2026.

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

# RL Open-Source Ecosystem Daily Digest: Gymnasium
**Date:** 2026-05-01 | **Project:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

### 1. Today's Highlights
Activity over the past 24 hours was minimal, characterized by routine maintenance and a new environment bug report. Only 1 issue was updated, and 1 PR was closed. No new software versions were released. 

### 2. Releases
**None.** 
There have been no new releases or tags published in the last 24 hours.

### 3. Important Issues
*   **[Bug] Physics Collision Error in `Pusher-v5`:** A newly opened issue ([#1576](https://github.com/Farama-Foundation/Gymnasium/issues/1576)) reports that the robot arm in the `Pusher-v5` environment is penetrating objects instead of executing proper physical collisions (e.g., pushing). This points to potential underlying glitches in the environment's physics engine or collision geometry, which could impact the reliability of continuous control benchmarks if validated.

### 4. Key PR Progress
*   **[MERGED/CLOSED] Static Typing in `envs.registration`:** PR [#1574](https://github.com/Farama-Foundation/Gymnasium/pull/1574) was closed after successfully adding missing type annotations (mostly return types) to the `gymnasium.envs.registration` module. While a minor patch, this reflects the project's ongoing commitment to codebase robustness and improving the developer experience for static type checkers (e.g., `mypy`).

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for single-agent reinforcement learning in Python. Even on slow development days, its stability is critical for the broader ML ecosystem. Physics bugs like the one reported in [#1576](https://github.com/Farama-Foundation/Gymnasium/issues/1576) are vital to address; because Gymnasium environments serve as primary benchmarks for novel RL algorithms, compromised environment physics can lead to flawed evaluation metrics or skewed algorithm comparisons. Meanwhile, continuous type-hinting improvements (as seen in [#1574](https://github.com/Farama-Foundation/Gymnasium/pull/1574)) ensure that modern RL pipelines maintain strict, error-free integrations when wrapping custom environments.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

### RL Open-Source Daily Digest: Stable Baselines3
**Date:** 2026-05-01

### 1. Today's Highlights
Stable Baselines3 (SB3) saw minimal but highly focused activity over the last 24 hours, centered entirely on maintaining compatibility with the newly released Gymnasium 1.3.0. The ecosystem is proactively addressing downstream breaking changes where legacy environments (like `Taxi-v3`) are being deprecated. 

### 2. Releases
*   **No new releases** were published for Stable Baselines3 in the last 24 hours.

### 3. Important Issues
*   **[Bug] Gymnasium 1.3.0 Deprecation Breaking Tests:** Issue [#2246](https://github.com/DLR-RM/stable-baselines3/issues/2246)
    *   **Author:** JonathanColetti
    *   **Summary:** The recent release of Gymnasium 1.3.0 has deprecated the classic `Taxi-v3` environment, causing certain SB3 test cases to fail. The author suggests implementing a workaround similar to the existing `_make_warmstart_cliffwalking` helper function used in `test_vec_normalize.py` to handle deprecated environment versions gracefully.

### 4. Key PR Progress
*   **[Compatibility] Fix Taxi-v3 deprecation in tests:** PR [#2247](https://github.com/DLR-RM/stable-baselines3/pull/2247)
    *   **Author:** JonathanColetti
    *   **Summary:** Opened in direct response to Issue #2246, this PR introduces a robust fallback mechanism for deprecated environments. It implements a `_make_env_safe(env_id, **kwargs)` wrapper function that catches `gym.error.DeprecatedEnv`. If an environment is deprecated, it checks a hardcoded fallback hash map to load the correct legacy version, ensuring test suites pass without compromising CI pipelines.

### 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the gold standard for reliable, accessible Reinforcement Learning implementations. While the core algorithms remain mature, today's activity highlights a critical, often overlooked pillar of the RL ecosystem: **infrastructure maintenance**. As upstream dependencies like Gymnasium (Farama Foundation) evolve and clean up legacy APIs, projects like SB3 act as the critical bridge ensuring that researchers and practitioners don't experience broken pipelines. PRs like #2247 demonstrate the project's ongoing commitment to stability, proving that robust error handling and backward compatibility are just as vital to the RL community as novel algorithmic releases.

</details>