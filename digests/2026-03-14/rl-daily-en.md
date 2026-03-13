# RL Open Source Daily Digest 2026-03-14

> Generated: 2026-03-13 22:04 UTC | Projects covered: 15

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
The RL open-source ecosystem on 2026-03-14 displays a clear bifurcation. The dominant activity is concentrated in the **Large Language Model (LLM) post-training** sector, with intense focus on **Qwen3.5 integration**, **Vision-Language Model (VLM) stability**, and **distributed training performance (Async/Megatron)**. Frameworks like `verl`, `TRL`, and `slime` are driving these high-compute efforts.

In contrast, the "classic" deep RL and general tooling layers (e.g., `CleanRL`, `Gymnasium`, `OpenRLHF`) saw negligible activity. The exception is `Stable Baselines3`, which is making a significant architectural update to continuous control. Meanwhile, infrastructure projects like `ROCK` and `ROLL` are addressing hardware portability (Ascend NPUs, Alpine/musl), signaling a shift toward production deployment in diverse environments.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | High (Qwen3.5 demand, scaling limits) | High (NeMo, Atropos, fixes) | 0 | **Dominant**. Core framework for large-scale distributed RLHF. |
| **TRL** | High (VLM DPO crashes) | High (VLM fixes, DGPO/VESPO) | 0 | **High**. Critical fixes for multi-modal alignment; rapid algo adoption. |
| **slime** | Medium (Perf regressions, Megatron) | Medium (Qwen3.5, patches) | 0 | **High**. Focus on MFU/CP bottlenecks for SOTA models. |
| **ROCK** | Low (All closed) | High (Alpine/musl, SDK) | 0 | **High**. Infrastructure hardening for portability. |
| **AReaL** | Low (Leaks, feature requests) | High (VLM GRPO, Docker) | 0 | **Medium**. Stabilizing multimodal training stacks. |
| **Open Instruct** | 0 | Medium (GRPO, FlashAttn3) | 0 | **Medium**. Scaling GRPO on next-gen hardware. |
| **SB3** | Low (Feature requests) | Low (Beta dist. implementation) | 0 | **Medium**. Architectural shift for continuous actions. |
| **ROLL** | Low (Checkpointing issues) | Low (Ascend docs) | 0 | **Low**. Maintenance and hardware expansion. |
| **torchtune** | Low (Strategic discussion) | 0 | 0 | **Low**. Strategic planning phase. |
| **Others** | 0 | 0 | 0 | *Dormant* |

## Shared Research & Engineering Directions

**Research Signals**
*   **GRPO Dominance:** Group Relative Policy Optimization is solidifying as the standard for LLM alignment, with active implementations in `verl` (Atropos/FlowGRPO), `TRL` (DGPO refactors), and `Open Instruct` (distributed actors).
*   **Multi-Modal Alignment:** The focus has shifted from text-only RLHF to Vision-Language Models (VLMs). `TRL` and `AReaL` are heavily patching DPO and GRPO trainers to handle image tokens and prevent silent data corruption.
*   **Mathematical Robustness:** `Stable Baselines3` is moving toward Beta Distributions to solve bias in bounded action spaces, while `TRL` is integrating new algorithms like VESPO and DGPO (ICLR 2026).

**Engineering & Infrastructure Signals**
*   **Qwen3.5 Everywhere:** All major LLM-RL frameworks (`verl`, `slime`, `TRL`) are prioritizing support for the Qwen3.5 series, marking it as the current reference model for SOTA training.
*   **Backend Fragmentation vs. Integration:** `verl` is decoupling training from rollout (NeMo, vLLM, TensorRT), while `slime` is doubling down on Megatron-LM optimization.
*   **Hardware Diversification:** Projects are moving beyond NVIDIA/H100 standardization. `Open Instruct` merged Flash Attention 3 support, while `ROLL` and `ROCK` are adding support for Huawei Ascend NPUs and Alpine/musl environments.

## Differentiation Analysis

*   **verl vs. TRL:** `verl` positions itself as the **production-scale orchestrator**, focusing on "Fully Async" pipelines and backend modularity (NeMo/Megatron). `TRL` acts as the **agile research bridge**, rapidly integrating bleeding-edge algorithms (VESPO, DGPO) and focusing on HuggingFace ecosystem integration (VLM stability).
*   **slime vs. OpenRLHF/Open Instruct:** `slime` differentiates through **low-level performance optimization** (e.g., MFU regression fixes, Context Parallelism) specifically for massive models like DeepSeek V3. `Open Instruct` focuses on **OLMo-core integration** and hardware efficiency (FlashAttn3) rather than low-level distributed backend engineering.
*   **Infrastructure Layers:** `ROCK` and `ROLL` are distinct from the training frameworks. They provide the **substrate**—container management, sandboxing, and NPU compatibility—targeting enterprise deployment rather than algorithm research.

## Community Momentum & Maturity

*   **Mature & Stable:** `Stable Baselines3` maintains high maturity, focusing on correctness (Beta distributions) over feature churn. `torchtune` is in a strategic maintenance/reflection phase.
*   **High Velocity:** `verl`, `TRL`, and `slime` show the highest momentum, driven by the rapid release cycles of LLMs (Qwen3.5, DeepSeek V3). Issue trackers are busy with performance regressions and scaling bugs typical of fast-moving targets.
*   **Infrastructure Maturation:** `ROCK` and `AReaL` show signs of maturing into production-ready tools, resolving low-level bugs (socket leaks, musl support) that enable the higher-level frameworks to function.

## Trend Signals

*   **The Rise of "Async" and "Omni-modal":** `verl`'s push for "Fully Async" and "Omni-modal" support suggests the field is moving away from synchronous, text-only training loops toward high-throughput, multi-modal pipelines.
*   **Silent Data Corruption Awareness:** The identification of "silent data corruption" in VLM DPO training (dropping image tokens) in `TRL` highlights a growing awareness of subtle alignment failures in multi-modal models.
*   **Hardware Portability:** The specific focus on Alpine/musl (`ROCK`) and Ascend NPUs (`ROLL`) suggests a strategic move to deploy RL workloads in more constrained or cost-effective environments, breaking the dependency on standard cloud GPU VMs.
*   **AI-Assisted Core Dev:** The explicit mention of "zed + claude" in `SB3` commit messages signals that AI coding assistants are now standard tools even for core, high-integrity library development.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

# RL Daily Digest: ROLL
**Date:** 2026-03-14 | **Project:** [alibaba/ROLL](https://github.com/alibaba/ROLL)

## 1. Today's Highlights
The ROLL ecosystem is expanding its hardware compatibility and addressing stability issues. The key developments include a move to support **Huawei Ascend** NPUs via documentation updates and ongoing troubleshooting for **Megatron**-based model saving. Activity was low regarding code merges, with no new releases.

## 2. Releases
*   **Status:** No new releases detected in the last 24 hours.

## 3. Important Issues
*   **Megatron Training Stability:** Issue [#167](https://github.com/alibaba/ROLL/issues/167) remains **OPEN**. Users are reporting critical failures during checkpoint saving (step 100) in distributed ActorWorker setups. This suggests potential persistence bottlenecks in large-scale training scenarios.
*   **Environment Setup:** Issue [#373](https://github.com/alibaba/ROLL/issues/373) was recently **CLOSED**. It highlighted dependency conflicts between ROLL's requirements and `opentelemetry-sdk` within the `ray[default]` package on Mac architectures.

## 4. Key PR Progress
*   **Hardware Acceleration Support:** PR [#374](https://github.com/alibaba/ROLL/pull/374) proposes adding documentation for **Huawei Ascend** hardware support.
    *   **Technical Detail:** The PR aligns the codebase with `vllm==0.13.0` standards, specifically updating imports to `vllm.lora.lora_model.LoRAModel`.
    *   **Significance:** This indicates a strategic push to decouple ROLL from pure GPU dependency, targeting the NPU ecosystem.

## 5. Why This Project Matters in Today's RL Landscape
ROLL (RL On ray Language models) serves as a critical bridge between Large Language Models (LLMs) and distributed Reinforcement Learning. By leveraging Ray for orchestration, it addresses the scalability issues inherent in aligning massive models. The current focus on fixing **Megatron** checkpointing and expanding to **Ascend NPUs** signals a maturity phase aimed at enterprise reliability and hardware diversification beyond standard NVIDIA clusters.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

# RL Daily Digest: ROCK (alibaba/ROCK)
**Date:** 2026-03-14

## 1. Today's Highlights
The ROCK ecosystem saw significant activity in **SDK robustness and environment compatibility** over the last 24 hours. Key developments include the closure of multiple tickets regarding **OSS file downloads** and **scheduler logging**, alongside the merging of a critical PR enabling **Alpine/musl support**. One significant feature PR regarding `ImageBuilder` remains under active review.

## 2. Releases
*   **No new releases** recorded for 2026-03-14.

## 3. Important Issues
The team focused on enhancing API capabilities and fixing infrastructure bugs. All issues reported in the last 24h have been resolved:
*   **[#631](https://github.com/alibaba/ROCK/issues/631) & [#629](https://github.com/alibaba/ROCK/issues/629) [SDK & API]:** Requests for `download_file` demos/tests and `download_by_oss` functionality. Both enhancements were raised and immediately resolved, indicating a push to stabilize data retrieval APIs.
*   **[#625](https://github.com/alibaba/ROCK/issues/625) [Sandbox]:** Addressed incorrect log paths in the scheduler. This fix is crucial for debugging distributed RL training tasks.

## 4. Key PR Progress
Activity was high with 7 updates, focusing on implementation and compatibility:
*   **Merged - Compatibility ([#624](https://github.com/alibaba/ROCK/pull/624)):** A critical update for the `rocklet` component, adding support for **Alpine/musl**, Nix, and older glibc versions. This involves complex detection logic and symlink management to ensure the ROCK agent runs smoothly on minimal or non-standard Linux distros.
*   **Merged - SDK Features:**
    *   [PR #632](https://github.com/alibaba/ROCK/pull/632): Implemented download file demos and test cases (closes #631).
    *   [PR #630](https://github.com/alibaba/ROCK/pull/630): Added download response models and OSS scripts (closes #629).
*   **Merged - Bug Fixes:**
    *   [PR #628](https://github.com/alibaba/ROCK/pull/628): Fixed the scheduler task log path (refs #625).
*   **Open - Infrastructure ([#615](https://github.com/alibaba/ROCK/pull/615)):** A pending feature to add an `ImageBuilder` for `env_dir` Docker builds within the builder sandbox. This aims to streamline environment creation for RL workflows.

## 5. Why This Project Matters in Today's RL Landscape
In the current Reinforcement Learning landscape, the bottleneck has shifted from algorithm design to **infrastructure scalability**. ROCK addresses this by providing a robust, container-native environment management system.
*   **Portability:** Today’s merge of Alpine/musl support ([PR #624](https://github.com/alibaba/ROCK/pull/624)) is a game-changer for deploying RL agents in lightweight, edge-computing or containerized environments where standard glibc is absent.
*   **Data Logistics:** The new OSS download features solve a common pain point in distributed RL: reliably fetching model checkpoints and training data from cloud storage into isolated sandboxes.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

# RL Daily Digest: slime
**Date:** 2026-03-14

## 1. Today's Highlights
Activity in the **slime** repository remains high with a focus on expanding LLM support and stabilizing distributed training backends. Key developments include the introduction of **Qwen3.5-4B** support and critical patches for **DeepSeek V3** and **GLM-4.6V**. However, maintainers and users are actively debugging significant performance regressions and infrastructure bugs related to Megatron bridges and Context Parallelism (CP).

## 2. Releases
*   **No new releases** recorded in the last 24 hours.

## 3. Important Issues
*   **Critical Performance Regression (DeepSeek V3):** Issue [#1717](https://github.com/THUDM/slime/issues/1717) reports a **5x MFU (Model FLOPs Utilization) regression** when training DeepSeek V3/R1. The bottleneck is isolated to a memory check introduced in commit `796d1e4` within `_wrap_low_level_call`, which impacts performance heavily when Context Parallelism (CP) is enabled.
*   **Infrastructure Instability (Megatron-Bridge & Qwen):** Users are encountering `ModuleNotFoundError` and bridging issues with the Qwen 35 Megatron setup ([#1711](https://github.com/THUDM/slime/issues/1711), [#1723](https://github.com/THUDM/slime/issues/1723)).
*   **Training Instability (VLM Multi-turn):** Issue [#1724](https://github.com/THUDM/slime/issues/1724) notes abnormal reward curves in the `geo3k_multi_turn` example, where rewards fail to increase from the baseline.
*   **Feature Request:** Community demand is growing for **LoRA support in GRPO** training ([#1202](https://github.com/THUDM/slime/issues/1202)).

## 4. Key PR Progress
*   **New Model Support:** PR [#1721](https://github.com/THUDM/slime/pull/1721) introduces configuration scripts for **Qwen3.5-4B**, leveraging existing core plugins.
*   **Bug Fixes (Closed):**
    *   PR [#1720](https://github.com/THUDM/slime/pull/1720) fixed `rope_theta` resolution for models like GLM-4.6V that nest parameters in dictionaries, preventing config validation errors.
    *   PR [#1463](https://github.com/THUDM/slime/pull/1463) removed FSDP from the VLM multi-turn example, standardizing on Megatron-LM as the sole backend.
*   **Docker & Patching:** PR [#1722](https://github.com/THUDM/slime/pull/1722) merged patches for GLM4.6v, Kimi K2.5, and DSA CP.

## 5. Why This Project Matters in Today's RL Landscape
**slime** (by THUDM) is establishing itself as a high-performance, production-grade framework for post-training large language models (LLMs). Unlike general-purpose RL libraries, slime focuses on the unique challenges of **RLHF/RLAIF at scale**, specifically optimizing for complex distributed backends like Megatron-LM. The current activity around **DeepSeek V3** and **Qwen3.5** integration highlights its role as a cutting-edge testbed for the latest SOTA architectures, tackling low-level performance bottlenecks (MFU, CP) that are critical for training billion-parameter models efficiently.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

# RL Daily Digest: AReaL
**Date:** 2026-03-14

## 1. Today's Highlights
Activity on the AReaL repository remains high with a focus on **infrastructure stability** and **multimodal extensibility**. Key developments include the patching of resource leaks in networking utilities and significant strides in supporting Vision-Language Models (VLMs) via SGLang and vLLM backends. The ecosystem also saw efforts to modernize dependency management with updated Docker configurations.

## 2. Releases
*   **No new releases** detected in the last 24 hours.

## 3. Important Issues
*   **Resource Leak in Network Utils:** Issue [#1031](https://github.com/inclusionAI/AReaL/issues/1031) identified a file descriptor leak in `is_port_free()` where sockets remain open on `bind` failure. A fix is already proposed (see PR #1032).
*   **Dynamic Inference Scaling:** Issue [#1026](https://github.com/inclusionAI/AReaL/issues/1026) proposes dynamic scaling of vLLM workers during training to auto-adjust resources, a critical feature for efficient large-scale RLHF.
*   **VLM Training Support:** Issue [#1028](https://github.com/inclusionAI/AReaL/issues/1028) requests support for **LLaVA-OneVision-1.5** (Rice ViT + Qwen3), signaling community demand for multimodal RL capabilities.

## 4. Key PR Progress
*   **Infrastructure & Stability:**
    *   PR [#1032](https://github.com/inclusionAI/AReaL/issues/1032) fixes the socket leak and corrects traceback handling in `RLTrainer`/`SFTTrainer` exit methods.
    *   PR [#1019](https://github.com/inclusionAI/AReaL/issues/1019) (Merged) unified RPC error response keys to `"error"`, ensuring consistency between server and scheduler logic.
    *   PR [#921](https://github.com/inclusionAI/AReaL/issues/921) (Merged) promoted the OpenAI-compatible client to production (`areal/infra/`), adding secure API key auth.
*   **Multimodal & Training:**
    *   PR [#1027](https://github.com/inclusionAI/AReaL/issues/1027) (Merged) fixed 7 bugs blocking VLM GRPO training on GPU, including PIL image serialization for FSDP + SGLang backends.
    *   PR [#1021](https://github.com/inclusionAI/AReaL/issues/1021) (Merged) resolved a LoRA versioning bug in `update_weights_lora_xccl` affecting `OpenAIServingModels`.
*   **Optimizations:**
    *   PR [#1010](https://github.com/inclusionAI/AReaL/issues/1010) bumped core dependencies (SGLang, vLLM, Megatron) and restructured Dockerfiles for torch version compatibility (2.9.1 vs 2.10.0).
    *   PR [#1033](https://github.com/inclusionAI/AReaL/issues/1033) introduced opt-in support for loading kernels (e.g., flash-attn) via the Hugging Face `kernels` library.

## 5. Why This Project Matters in Today's RL Landscape
AReaL is positioning itself as a robust, production-ready framework for post-training and RLHF. By resolving low-level infrastructure bugs (socket leaks, RPC consistency) and merging critical support for **VLM GRPO training**, the project is lowering the barrier to entry for complex multimodal alignment. The promotion of OpenAI-compatible clients and secure proxies indicates a shift towards modular, distributed RL systems that can easily integrate into existing inference architectures.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

# RL Daily Digest: TRL (Transformer Reinforcement Learning)
**Date:** 2026-03-14

## 1. Today's Highlights
Activity in the TRL repository today focused heavily on **Vision-Language Model (VLM) stability** and **Multi-Modal alignment**. Key efforts targeted fixing silent data corruption and crashes in `DPOTrainer` when handling VLM inputs. Additionally, significant contributions were merged regarding GRPO optimization and developer environment standardization.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Important Issues
*   **VLM Training Stability in DPO:** Three related issues highlighted critical regressions in `DPOTrainer` for Vision-Language Models.
    *   [#5283](https://github.com/huggingface/trl/issues/5283): `DPOTrainer` crashes with `IndexError` when `max_length` is set due to shape mismatches in sequence-aligned side-inputs (e.g., masks).
    *   [#5285](https://github.com/huggingface/trl/issues/5285): **Silent data corruption** occurs if `truncation_mode="keep_end"` is used; image tokens are dropped from the sequence.
    *   [#5277](https://github.com/huggingface/trl/issues/5277) (Closed): `mm_token_type_ids` (crucial for 3D-RoPE models like Qwen2.5-VL) were being silently ignored.
*   **vLLM Compatibility:** Issue [#5269](https://github.com/huggingface/trl/issues/5269) reports a persistent integration failure between the latest TRL main branch and vLLM 0.17.0 during GRPO training with Qwen3.5.
*   **Distributed Training:** Question raised in [#5282](https://github.com/huggingface/trl/issues/5282) regarding whether `use_liger_gkd_loss` breaks DDP gradient sync by unwrapping the student model.

## 4. Key PR Progress
*   **VLM Fixes (Merged & Open):**
    *   [Merged] [#5279](https://github.com/huggingface/trl/pull/5279): Fixed the silent dropping of `mm_token_type_ids` in DPO VLM training.
    *   [Open] [#5284](https://github.com/huggingface/trl/pull/5284): Proposed fix to truncate sequence-aligned side-inputs properly to resolve crash #5283.
    *   [Open] [#5286](https://github.com/huggingface/trl/pull/5286): Implements a `ValueError` to prevent silent corruption when using `keep_end` truncation with VLMs.
*   **Algorithmic Enhancements:**
    *   [Merged] [#5276](https://github.com/huggingface/trl/pull/5276): Refactored dataloader logic in `GRPOTrainer` and `RLOOTrainer` to reduce code duplication.
    *   [Open] [#5102](https://github.com/huggingface/trl/pull/5102): Introduces DGPO (ICLR 2026) support to the GRPO trainer.
    *   [Open] [#5199](https://github.com/huggingface/trl/pull/5199): Implements VESPO (Variational Sequence-Level Soft Policy Optimization).
*   **Tooling & Infrastructure:**
    *   [Merged] [#5281](https://github.com/huggingface/trl/pull/5281): Fixed `accuracy_reward` crashes in asynchronous training by detecting non-main threads.
    *   [Open] [#5189](https://github.com/huggingface/trl/pull/5189): Major refactor replacing AI-generated packing logic with a vectorized implementation.

## 5. Why This Project Matters in Today's RL Landscape
TRL continues to serve as the critical bridge between generative Large Language/Vision models and state-of-the-art Reinforcement Learning algorithms. Today's focus on fixing **VLM support in DPO** underscores the ecosystem's shift beyond text-only RLHF toward **multi-modal alignment**. Furthermore, the integration of new algorithms like **VESPO** and **DGPO** demonstrates TRL's role as the de facto standard for rapidly implementing and distributing cutting-edge RL research (e.g., ICLR 2026 papers) to the broader open-source community.

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

# RL Daily Digest: verl
**Date:** 2026-03-14

## 1. Today's Highlights
The verl ecosystem is seeing intense activity surrounding the integration of **Qwen3.5** and the stabilization of the **Fully Async Policy** framework. Community demand for Qwen3.5 support is high, while developers are actively merging features for diverse training engines (NeMo, vLLM-Omni) and rollout backends (TensorRT-LLM). Significant efforts are also directed toward fixing distributed training hangs (NCCL) and memory management in SFT pipelines.

## 2. Releases
*   **No new releases** recorded in the last 24 hours. The community remains focused on the stability of the `v1.0.0-rc0` / `v0.7.0` cycle.

## 3. Important Issues
*   **High Demand for Qwen3.5 Support:** A feature request for Qwen3.5 support ([#5460](https://github.com/volcengine/verl/issues/5460)) has garnered **40 upvotes**, indicating strong community interest in adapting the framework for this model series.
*   **Fully Async Performance & Stability:** Users report that **Mode 3** in the fully async pipeline has poor performance despite low resource idle rates ([#5458](https://github.com/volcengine/verl/issues/5458)). Additionally, issues persist with NCCL timeouts during FSDP training on Qwen3-next ([#5414](https://github.com/volcengine/verl/issues/5414)).
*   **vLLM Compatibility Block:** Users attempting to use the R3 feature with `verl 0.7.0` are facing version conflicts; upgrading to vLLM 0.16.0 causes crashes ([#5586](https://github.com/volcengine/verl/issues/5586)).
*   **v1.0.0-rc0 Scaling Limit:** A new bug report indicates that `v1.0.0-rc0` fails when `tensor_model_parallel_size` exceeds 8 ([#5585](https://github.com/volcengine/verl/issues/5585)).

## 4. Key PR Progress
*   **New Training Engines:** A significant PR adds **NeMo-Automodel** as an alternative training engine ([#5407](https://github.com/volcengine/verl/pull/5407)), expanding verl's modularity beyond native FSDP and Megatron.
*   **Algorithm & Env Integration:** Integration of the **Atropos** RL environment with GRPO is in progress ([#5520](https://github.com/volcengine/verl/pull/5520)), alongside support for **FlowGRPO** for Qwen-Image training ([#5297](https://github.com/volcengine/verl/pull/5297)).
*   **Performance & Fixes:**
    *   SFT Trainer stability improved by running **Garbage Collection (gc)** regularly to prevent step-time spikes ([#5549](https://github.com/volcengine/verl/pull/5549)).
    *   Fixed a `RuntimeError` in FSDP2 with activation offloading ([#5513](https://github.com/volcengine/verl/pull/5513)).
    *   Compatibility fixes for **TRT-LLM** rollout with Qwen VL models ([#5583](https://github.com/volcengine/verl/pull/5583)).

## 5. Why This Project Matters in Today's RL Landscape
VeRL (Volcengine RL) is establishing itself as a production-grade, multi-backend RL framework capable of handling massive models (e.g., DeepSeek-V3, Qwen3). By decoupling the training engine (supporting Megatron, FSDP, and now NeMo) from the rollout engine (vLLM, TensorRT-LLM), it addresses a critical fragmentation problem in the open-source RLHF ecosystem. The current push for **Fully Async** training and **Omni-modal** support (image/audio) positions verl as a direct competitor to frameworks like trl and OpenRLHF, specifically targeting high-throughput, distributed training scenarios on large clusters.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

Here is the RL Daily Digest for **torchtune** on **2026-03-14**.

### 1. Today's Highlights
Activity in the `torchtune` repository was minimal over the last 24 hours, with zero new PRs, merged updates, or releases. The sole point of activity centers on a critical discussion regarding the long-term maintenance and strategic direction of the library, highlighted by a significant issue update.

### 2. Releases
**No new releases.**
There have been no tagged versions or updates in the last 24 hours.

### 3. Important Issues
*   **[IMPORTANT] The Future of torchtune ([#2883](https://meta-pytorch/torchtune/issues/2883))**
    *   **Context:** This pivotal issue, authored by core maintainer @ebsmothers, addresses the library's trajectory following its success in democratizing LLM fine-tuning.
    *   **Status:** The issue was updated on 2026-03-13, sparking continued discussion (18 comments total).
    *   **Significance:** This thread acts as a manifesto for the project's future, indicating potential shifts in architecture, supported recipes for modern post-training techniques (crucial for RL workflows like RLHF), or changes in maintenance modes.

### 4. Key PR Progress
**No activity.**
No pull requests were opened, updated, or merged in the last 24 hours.

### 5. Why This Project Matters in Today's RL Landscape
While primarily a fine-tuning library, **torchtune** remains a critical infrastructure component in the modern RL ecosystem, specifically for **Reinforcement Learning from Human Feedback (RLHF)** and **Direct Preference Optimization (DPO)**.
*   **Accessibility:** It lowered the barrier to entry for training LLMs on consumer hardware, allowing RL researchers to experiment with preference alignment techniques without enterprise-grade cloud budgets.
*   **Recipe-Driven Approach:** By providing modular "recipes," it bridges the gap between raw model weights and production-ready aligned models.
*   **Current Relevance:** The strategic discussions in Issue #2883 suggest the library is at an inflection point, potentially adapting to the convergence of supervised fine-tuning (SFT) and reinforcement learning in next-gen model development.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Daily Digest: Open Instruct
**Date:** 2026-03-14

## 1. Today's Highlights
Activity in the last 24 hours focused exclusively on expanding training capabilities and hardware optimization. Key updates include the integration of **Flash Attention 3** for H100/H800 architectures and significant movement on **Group Relative Policy Optimization (GRPO)** infrastructure. Additionally, a new effort has begun to implement **offline distillation** pipelines.

## 2. Releases
No new releases were recorded today.

## 3. Important Issues
No issues were updated in the last 24 hours.

## 4. Key PR Progress
*   **Hardware Optimization (Closed):** [PR #1526](https://github.com/allenai/open-instruct/pull/1526) merged support for `flash-attn-3`. This enables auto-detection and usage of Flash Attention 3 on H100/H800 GPUs for DPO training (and soon GRPO), optimizing memory and throughput on next-gen hardware.
*   **GRPO Orchestration (Open):** [PR #1399](https://github.com/allenai/open-instruct/pull/1399) introduces the main entry point (`grpo.py`) and debug scripts for GRPO. This is the final piece of the "PR 5 of 5" series aimed at fully integrating GRPO into the OLMo-core Trainer ecosystem.
*   **GRPO Distributed Actors (Open):** [PR #1398](https://github.com/allenai/open-instruct/pull/1398) implements `PolicyTrainerOLMoCoreProcess`. This Ray actor is critical for scaling GRPO training across multi-node, multi-GPU environments.
*   **Offline Distillation (Open):** [PR #1525](https://github.com/allenai/open-instruct/pull/1525) initiated "Part One" of a distillation rollout. It focuses on compression helpers for logit capture, laying the groundwork for teacher-student model training using vLLM.

## 5. Why This Project Matters in Today's RL Landscape
As of 2026, the standard for RLHF (Reinforcement Learning from Human Feedback) has shifted from simple PPO implementations to more stable, memory-efficient algorithms like **GRPO**. Open Instruct remains a critical open-source barometer for these shifts. By integrating **Flash Attention 3** and Ray-based distributed actors, the project is addressing the two biggest bottlenecks in modern RL: **compute efficiency** on H100s and **scalability** across clusters. The move toward structured offline distillation also reflects the industry trend of decoupling teacher generation from student training to reduce training instability.

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

# RL Daily Digest: Stable Baselines3 (2026-03-14)

## 1. Today's Highlights
The dominant theme for Stable Baselines3 (SB3) today is **action distribution enhancement**. Significant movement occurred regarding the integration of **Beta Distributions** for continuous action spaces. This shift aims to address long-standing limitations regarding Gaussian clipping and training stability in bounded environments. Additionally, discussions emerged regarding the persistence of replay buffers across training runs.

## 2. Releases
*   **Status:** No new releases detected in the last 24 hours.

## 3. Important Issues
*   **Feature: BetaDistribution for Bounded Actions (#2142)** [OPEN]
    *   **Context:** This issue proposes integrating `BetaDistribution` to replace standard Gaussian policies for bounded action spaces.
    *   **Impact:** Cited research (Petrazzini & Antonelo, 2021) suggests this mitigates bias caused by clipping Gaussian tails at action boundaries (-1, 1), potentially improving training stability. This addresses user complaints seen in older issues (e.g., #722) where outputs were frequently hard-clipped.
    *   **Link:** [Issue #2142](https://github.com/DLR-RM/stable-baselines3/issues/2142)

*   **Feature: Cross-run Experience Persistence (#2226)** [OPEN]
    *   **Context:** A request to allow `BaseCallback` mechanisms to persist experience (replay buffer) across distinct `model.learn()` calls.
    *   **Impact:** Currently, episodic data is lost between runs. This feature would allow better warm-starting for complex manipulation tasks (e.g., FetchPush-v4).
    *   **Link:** [Issue #2226](https://github.com/DLR-RM/stable-baselines3/issues/2226)

## 4. Key PR Progress
*   **[WIP] Beta Distribution Support for PPO (#2228)** [OPEN]
    *   **Analysis:** Submitted by maintainer @araffin, this PR directly implements the feature requested in Issue #2142. The commit message notes the use of "zed + claude," indicating AI-assisted code generation is being leveraged in the core development loop.
    *   **Significance:** This represents a significant architectural shift for PPO, moving away from squashed Gaussians for bounded problems.
    *   **Link:** [PR #2228](https://github.com/DLR-RM/stable-baselines3/pull/2228)

*   **Changelog Update (#2227)** [CLOSED]
    *   **Analysis:** Routine maintenance updating documentation for the broader SB3 ecosystem.
    *   **Link:** [PR #2227](https://github.com/DLR-RM/stable-baselines3/pull/2227)

## 5. Why This Project Matters in Today's RL Landscape
Stable Baselines3 remains the industry standard for reliable, modular Reinforcement Learning implementations. While newer frameworks often prioritize bleeding-edge features, SB3’s focus on **algorithmic stability and reproducibility** makes it the go-to for applied RL.

**Today's Insight:** The introduction of Beta Distribution support (PR #2228) highlights a maturing understanding in the RL community: *mathematical constraints matter*. Moving from "hacking" Gaussian outputs (via tanh/clipping) to natively bounded probability distributions marks a step toward more sample-efficient and mathematically robust agents.

</details>