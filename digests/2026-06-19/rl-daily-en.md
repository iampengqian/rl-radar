# RL Open Source Daily Digest 2026-06-19

> Generated: 2026-06-18 22:34 UTC | Projects covered: 15

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
The June 19, 2026, digest data reveals an open-source Reinforcement Learning (RL) landscape hyper-focused on Large Language Model (LLM) alignment and Agentic RL. While classic Deep RL frameworks (Gymnasium, SB3, CleanRL) remain quiet or limited to maintenance, the engineering epicenter has shifted to Post-Training and RLHF frameworks (TRL, veRL, AReaL, OpenRLHF, ROLL, slime). These projects are aggressively tackling the hardware and algorithmic bottlenecks required to scale multi-turn tool-using agents, massive Mixture-of-Experts (MoE) models, and next-generation hardware (B200s, Ascend NPUs).

## Activity Comparison
The development load is highly concentrated among the top LLM-focused RL frameworks, which are dealing with massive scaling complexities, while traditional RL environments and classic algorithmic libraries remain stable or dormant.

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **TRL** | 14 | 43 | 0 | Intense focus on MoE stability, memory efficiency, and AsyncGRPO alignment. |
| **veRL** | 3 | 8 | 0 | Scaling agentic rollouts, decoupled async training, and hardware agnosticism. |
| **ROCK** | 2 | 5 | 0 | Enterprise cloud-native hardening (K8s, containerd) and TS/Python SDK parity. |
| **slime** | 2 | 5 | 0 | Next-gen GPU (B200) deadlocks and asymptotic memory optimization for PPO. |
| **AReaL** | 1 | 5 | 0 | Pioneering FP8 rollouts and prefill-decode disaggregation for memory-bound RL. |
| **OpenRLHF** | 1 | 4 | 0 | Refining length penalties for multi-turn agentic workflows and DS/PyTorch fixes. |
| **ROLL** | 1 | 2 | 1 | Major leap into multimodal (Video/Audio RLVR) and hardware expansion (AMD/NPU). |
| **Open Instruct**| 0 | 1 | 0 | SFT memory optimization via Liger fused linear cross-entropy. |
| **SB3** | 0 | 1 | 0 | Low-level memory optimization and rollout buffer dtype consistency. |
| **CleanRL** | 0 | 0 | 0 | No activity. |
| **Gymnasium** | 0 | 0 | 0 | No activity. |
| **PettingZoo** | 0 | 0 | 0 | No activity. |
| **rl_games** | 0 | 0 | 0 | No activity. |
| **Tianshou** | 0 | 0 | 0 | No activity. |
| **torchtune** | 0 | 0 | 0 | No activity. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals:**
*   **Agentic Multi-Turn RL:** Frameworks are evolving from single-turn outputs to complex tool-calling workflows. *OpenRLHF* is isolating action tokens from tool-return tokens for accurate length penalties, while *veRL* introduces "Continuous Token" designs for seamless token-in/token-out agent loops.
*   **RLVR & Reasoning Optimization:** *TRL* is expanding Reinforcement Learning with Verifiable Rewards (RLVR) via rule-based functions (e.g., concise reasoning and repetition penalties), while *AReaL* and *ROLL* introduce specialized math/reasoning configs and multimodal RLVR.

**Engineering & Infrastructure Signals:**
*   **Extreme Memory & Network Optimization:** Post-training frameworks are fighting VRAM bottlenecks. *TRL* and *slime* are chunking/gathering cross-entropy logits, *Open Instruct* uses fused linear CE, and *AReaL* implements online BF16-to-FP8 quantization for weight syncs.
*   **Decoupled & Async RL Workflows:** To maximize cluster utilization, frameworks are fully decoupling rollout generation from training. *AReaL* utilizes Prefill-Decode (PD) disaggregation, while *veRL* and *TRL* refine fully async training loops (e.g., SGLang delta weight syncing).
*   **Hardware & Backend Diversification:** Ecosystems are moving away from pure Nvidia reliance. *veRL* and *ROLL* expand Ascend NPU and AMD support, while *slime* and *veRL* actively debug next-gen architectures like B200s, DeepSeekV4, and GLM5.

## Differentiation Analysis
*   **TRL:** Acts as the foundational HuggingFace standard. It differentiates by tightly integrating community needs (rule-based rewards) and HF model architectures (native MoE aux loss support, PEFT fixes).
*   **veRL & AReaL:** Both are heavily infra-focused but with distinct angles. *veRL* owns hardware agnosticism (Megatron, Ascend) and complex multi-turn token management. *AReaL* leads in cutting-edge inference optimization (FP8 rollouts, PD disaggregation).
*   **ROCK:** Operates at a different OSI layer. Instead of algorithms, it provides the distributed, cloud-native orchestration backbone (Kubernetes, containerd, SDK lifecycle) required to run massive RL trials.
*   **ROLL:** Stands out by aggressively pushing the boundary beyond text into Video/Audio multimodal RLHF and MTP (Multi-Token Prediction), supported by a major v0.3.0 release.
*   **SB3 & Classic Libraries:** Focused on stability, backward compatibility, and traditional applied RL (robotics/gaming), serving as a reliable contrast to the breakneck speed of LLM RLHF frameworks.

## Community Momentum & Maturity
The open-source RL ecosystem is clearly stratifying. 
*   **Hyper-growth / Bleeding Edge:** Projects like TRL, veRL, and AReaL show massive PR velocity driven by immediate enterprise needs to train reasoning models and agents. They are currently absorbing the brunt of community trial-and-error (e.g., debugging B200 deadlocks, OOM profiling).
*   **Enterprise Maturation:** ROCK and ROLL show strong momentum toward production readiness. The addition of OpenTelemetry in ROLL and K8s/containerd hardening in ROCK signal that RL is moving from ephemeral research clusters to permanent, observable enterprise infrastructure.
*   **Stable / Dormant Foundation:** CleanRL, Gymnasium, and Tianshou continue to serve massive download numbers as educational and applied RL standards, but their lack of daily commits reflects an ecosystem whose innovation center of gravity has fully pivoted to LLM post-training. 

## Trend Signals
1.  **The Death of the Single-Turn RLHF Pipeline:** The technical focus has irreversibly shifted toward multi-turn Agentic RL, requiring frameworks to build out "Continuous Token" loops, specialized reward masks, and asynchronous tool calling.
2.  **Inference-Training Convergence:** The strict boundary between training and inference is dissolving. Techniques like BF16-to-FP8 online weight transfers, SGLang delta syncs, and PD disaggregation indicate that RL scalability is now an inference-engineering problem as much as a training problem.
3.  **Logit Memory Bottlenecks:** As context lengths explode for reasoning models, computing cross-entropy and log-probs across massive vocabularies causes silent OOMs. The industry is rallying around fused/chunked CE implementations to bypass standard `lm_head` projections.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for ROLL (alibaba/ROLL) on 2026-06-19.

### 1. Today's Highlights
* **Major Version Release:** ROLL has officially shipped **v0.3.0**, marking a significant expansion from traditional text-based RLHF into multimodal territory.
* **Broadened Hardware Ecosystem:** The update introduces expanded compatibility for NPU and AMD hardware, alongside strengthened `mcore_adapter` capabilities, reflecting a push toward vendor-agnostic RL infrastructure.
* **Agent & Telemetry Upgrades:** The release debuts AgentRunner 2.0 for flexible multi-agent interaction and integrates OpenTelemetry for advanced RL observability.

### 2. Releases
* **[v0.3.0](https://github.com/alibaba/ROLL/releases/tag/v0.3.0)** 
  ROLL's latest iteration introduces several cutting-edge features tailored for modern RL scaling:
  * **Multimodal RLVR:** Added comprehensive training support for Video and Audio RLHF/RLVR, integrating specific reward mechanisms (e.g., Video-R1 reward).
  * **Advanced Training Architectures:** Introduced Multi-Token Prediction (MTP) training, Router Replay, and Multi-Teacher On-Policy Distillation (OPD).
  * **Agent Decoupling:** Rolled out AgentRunner 2.0 to abstract and decouple agent interaction logic, enabling more complex, flexible multi-turn agent training.
  * **Observability:** Native OpenTelemetry support for granular tracking of distributed RL workloads.

### 3. Important Issues
* **[#464 - 🚀 [2026/06/18] Recent Updates Summary for ROLL Project](https://github.com/alibaba/ROLL/issues/464)** `[OPEN]`
  Authored by PanAndy, this issue serves as the official community anchor for the v0.3.0 release. It outlines the technical roadmap and feature breakdown (Video RLVR, AgentRunner 2.0, MTP, etc.) and actively invites open-source community collaboration and feedback on the newly expanded capabilities.

### 4. Key PR Progress
* **[#463 - (feat): publish v0.3.0](https://github.com/alibaba/ROLL/pull/463)** `[CLOSED / MERGED]`
  Authored by PanAndy, this PR finalizes the codebase cutoff for the v0.3.0 deployment. The successful merge of this PR officially pushes the new multimodal, telemetry, and hardware adaptation features into the main branch.

### 5. Why This Project Matters in Today's RL Landscape
The Reinforcement Learning from Human Feedback (RLHF) landscape is rapidly evolving from static text alignment toward dynamic, multimodal, and agentic systems. ROLL v0.3.0 positions itself directly at the center of this transition. By introducing **Video/Audio RLVR**, ROLL provides essential infrastructure for training next-generation multimodal foundation models. Furthermore, the shift toward heterogeneous hardware support (NPU/AMD) is a critical step for the open-source community, reducing reliance on tightly constrained GPU supply chains. With the addition of AgentRunner 2.0 and OpenTelemetry, ROLL is bridging the gap between traditional offline model training and scalable, observable, and interactive RL agent environments.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

Here is the daily digest for the ROCK (alibaba/ROCK) ecosystem for June 19, 2026.

### 1. Today's Highlights
* **Versioning & Docs**: The ecosystem is actively stabilizing around the recent v1.9.0/v1.9.2 tags, focusing on aligning documentation and bumping the core `rl-rock` package.
* **TypeScript SDK Maturation**: A massive push towards cross-language parity is underway, with the TypeScript SDK receiving over 400 new tests and critical lifecycle management features.
* **Container & Infrastructure Hardening**: Significant engineering effort is being directed toward enterprise deployment readiness, specifically addressing container image format compatibilities (OCI) and storage/disk quota limitations in Kubernetes and containerd environments.

### 2. Releases
* **No new releases** were published in the last 24 hours. However, Issue/PR #1131 and #1132 confirm the core library version was officially bumped to `1.9.2` via `pyproject.toml`. 

### 3. Important Issues
* **#1135 [OPEN] fix(admin): mirror image probe misses OCI-format images** 
  * *Insight*: A critical integration bug where the `_http_probe_manifest` strictly requested `application/vnd.docker.distribution.manifest.v2+json`. This caused OCI-format images to return 404 errors during probing, despite being valid and pull-able. 
  * *Link*: [alibaba/ROCK Issue #1135](https://github.com/alibaba/ROCK/issues/1135)
* **#1133 [CLOSED] docs: add v1.9.0 documentation and update README release table**
  * *Insight*: Addressed the lagging public-facing documentation, officially snapshotting the `1.9.x` docs (including `zh-Hans` translations) and registering them as the latest version.
  * *Link*: [alibaba/ROCK Issue #1133](https://github.com/alibaba/ROCK/issues/1133)

### 4. Key PR Progress
* **#1137 feat(ts-sdk): align TypeScript SDK with Python SDK**
  * *Impact*: Achieves feature parity between the Python and TypeScript SDKs across 8 modules. Introduces a robust Job/Trial execution system, adding 400+ tests to ensure enterprise-grade reliability for TS users.
  * *Link*: [alibaba/ROCK PR #1137](https://github.com/alibaba/ROCK/pull/1137)
* **#1136 fix(admin): support OCI manifest format in mirror image probe**
  * *Impact*: Direct fix for Issue #1135. Expands the `Accept` header in the manifest API probe to support all four standard Docker and OCI manifest media types.
  * *Link*: [alibaba/ROCK PR #1136](https://github.com/alibaba/ROCK/pull/1136)
* **#1095 feat(archive): integrate archive lifecycle into sandbox state machine**
  * *Impact*: Introduces a comprehensive 6-state lifecycle (`pending` / `running` / `stopped` / `archiving` / `archived` / `deleted`) to the sandbox state machine, a crucial update for long-term RL data retention and resource cleanup.
  * *Link*: [alibaba/ROCK PR #1095](https://github.com/alibaba/ROCK/pull/1095)
* **#1124 feat(deployments): add XFS project quota fallback for containerd image store**
  * *Impact*: Solves disk limitation (`disk_limit_rootfs`) failures when operating in modern containerd environments by dynamically applying `xfs_quota` to the overlay UpperDir. 
  * *Link*: [alibaba/ROCK PR #1124](https://github.com/alibaba/ROCK/pull/1124)
* **#1130 feat(k8s): transport image auth to k8s**
  * *Impact*: Enhances deployment security by encrypting and passing custom image registry auth details to Kubernetes via annotations (temporarily bypassing k8s secret CRs for engineering velocity).
  * *Link*: [alibaba/ROCK PR #1130](https://github.com/alibaba/ROCK/pull/1130)

### 5. Why This Project Matters in Today's RL Landscape
Modern Reinforcement Learning requires highly distributed, fault-tolerant infrastructure to handle massive trial-and-error loops and environment simulations. Today's updates to ROCK highlight its critical role in the RL landscape: 
1. **Multi-Language Support**: By aligning the TypeScript SDK with Python (PR #1137), ROCK allows engineering teams to build RL orchestration backends in Node.js while keeping ML training pipelines in Python.
2. **State & Lifecycle Management**: The new 6-state sandbox machine (PR #1095) reflects the reality that RL environments are stateful and require complex archiving logic for checkpointing and replay buffers.
3. **Cloud-Native Readiness**: Fixes around OCI image formats (PR #1136) and containerd disk quotas (PR #1124) prove that ROCK is actively maturing to support enterprise-grade Kubernetes deployments, moving beyond experimental clusters into production-grade multi-tenant environments.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the daily reinforcement learning ecosystem digest for **THUDM/slime**.

### 1. Today's Highlights
* **Performance & Architecture:** A significant PPO performance PR (#2076) was updated, aiming to resolve Out-of-Memory (OOM) errors by reducing the asymptotic size of log-prob/entropy cross-entropy calculations.
* **Feature & Codebase Trimming:** New support for `top_p` masking was introduced (#2102), while legacy `bshd` support is being deprecated/removed (#2100) to streamline the codebase.
* **Large Scale Training Bottlenecks:** Developers running distributed training on next-gen hardware (8x B200s) and large MoE models (Qwen 35B A3B) continue to face rollout phase deadlocks and SGLang version incompatibilities.

### 2. Releases
* **None.** No new releases were published in the last 24 hours.

### 3. Important Issues
* **[Hang] Training Deadlock on B200s:** [Issue #1487](https://github.com/THUDM/slime/issues/1487) reports training hanging indefinitely after the rollout phase on an 8× NVIDIA B200 setup (CP=4, TP=2). The system stalls during the transition to the training phase, highlighting potential distributed synchronization bottlenecks with next-gen GPUs.
* **[Bug] SGLang Version Conflict:** [Issue #2091](https://github.com/THUDM/slime/issues/2091) highlights garbled outputs during the second rollout of a Qwen3.6 35B A3B model using `slime-v0.3.0` and the `sglang:v0.5.12` image. Downgrading to `slime-v0.2.4` and `sglang:v0.5.9` resolves the issue, indicating a regression in newer SGLang integrations.

### 4. Key PR Progress
* **[OPEN] perf(ppo): Gather response/loss-mask rows before log-prob+entropy CE** ([PR #2076](https://github.com/THUDM/slime/pull/2076)) by @Mantissagithub. A crucial optimization that supersedes #2011. Instead of just reducing the constant factor of log-prob calculations, this PR reduces the asymptotic size, directly targeting severe OOM issues during PPO updates.
* **[OPEN] Support top_p mask** ([PR #2102](https://github.com/THUDM/slime/pull/2102)) by @zhuzilin. Introduces nucleus sampling masking for better generation control during rollouts. 
* **[CLOSED] Remove bshd support** ([PR #2100](https://github.com/THUDM/slime/pull/2100)) by @zhuzilin. Sunsets `bshd` support. This will temporarily break VLM examples, with a refactor planned for the near future.
* **[CLOSED] examples: add CISPO custom loss** ([PR #2026](https://github.com/THUDM/slime/pull/2026)) by @kekmodel. Reworks CISPO support into an example-first custom loss rather than hardcoding a new advantage estimator, keeping the core framework lightweight.
* **[CLOSED] docs: drop dangling Dr.GRPO custom-reducer example reference** ([PR #2096](https://github.com/THUDM/slime/pull/2096)) by @EazyReal. Cleans up documentation by removing references to a non-existent `Dr.GRPO` reducer, fixing a silent failure point in Pydantic configurations.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source community pushes the boundaries of Reinforcement Learning from Human Feedback (RLHF) and advanced reasoning, **slime** serves as a critical, high-throughput testbed for integrating LLM training (Megatron-LM) with high-speed inference engines (SGLang). 

Today's digest highlights the exact growing pains of the 2026 RL landscape:
1. **Next-Gen Hardware Integration:** Optimizing memory (as seen in the asymptotic OOM fix in PR #2076) and resolving synchronization deadlocks on NVIDIA's B200 architecture (Issue #1487).
2. **MoE Model Complexity:** Navigating the intricacies of training massive Mixture-of-Experts (MoE) models like Qwen3.6 35B A3B. 
3. **Ecosystem Coupling:** The friction between RL frameworks and fast-evolving inference backends like SGLang (Issue #2091). Projects like slime provide the vital abstraction layer needed to stabilize and benchmark these cutting-edge components.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

### 📊 RL Ecosystem Daily Digest: AReaL
**Date:** 2026-06-19

#### 1. Today's Highlights
*   **Infrastructure & Inference Scaling:** Heavy focus on optimizing the RL rollout/inference phase. The ecosystem is actively pushing boundaries in PD (Prefill-Decode) disaggregation and FP8 compute to solve memory-bound bottlenecks in autoregressive decoding.
*   **Algorithm & API Expansions:** Introduction of new highly-optimized RL configs (IcePop/KPop) and critical compatibility fixes for OpenAI tool-calling APIs with HuggingFace templates.
*   **Activity:** 5 active PRs and 1 tracked issue updated. No new releases.

#### 2. Releases
*   **None** for 2026-06-19.

#### 3. Important Issues
*   **[#1378](https://github.com/inclusionAI/AReaL/issues/1378) [Feature] [V1] FSDP BF16 Training + SGLang FP8 Rollout** *(Author: ZiyiTsang)*
    *   **Context:** This issue tracks the effort to enable FP8 block-wise quantization for SGLang rollouts while maintaining FSDP BF16 training. It includes strict safety checklists to ensure existing training configs remain unbroken, highlighting the project's commitment to backward compatibility while pushing quantization boundaries.

#### 4. Key PR Progress
*   **[#1364](https://github.com/inclusionAI/AReaL/pull/1364) feat[v2]: Support PD Disaggregation: DP=2(1P1D),TP=n** *(Author: ZiyiTsang)*
    *   *Significance:* Tackles low GPU utilization during decoding by splitting inference into specialized Prefill and Decode roles. This is a critical architectural shift for accelerating RLHF rollouts.
*   **[#1379](https://github.com/inclusionAI/AReaL/pull/1379) feat[v1]: fp8 weight transfer from fsdp bf16 to sglang fp8** *(Author: ZiyiTsang)*
    *   *Significance:* Implements the feature tracked in #1378. Introduces an online BF16-to-FP8 quantization kernel that runs right before NCCL broadcast to SGLang, vastly reducing the memory footprint and network overhead of weight syncing.
*   **[#1424](https://github.com/inclusionAI/AReaL/pull/1424) docs: add IcePop/KPop feature introduction** *(Author: guojiapub)*
    *   *Significance:* Formally documents the new IcePop and KPop configurations for Math & Reasoning tasks, expanding the out-of-the-box algorithmic toolkit available to RL researchers.
*   **[#1411](https://github.com/inclusionAI/AReaL/pull/1411) fix(openai): render tool-call arguments as a mapping for HF chat templates** *(Author: EazyReal)*
    *   *Significance:* Resolves a brittle integration point between OpenAI wire formats (JSON strings) and HuggingFace mappings (e.g., for Qwen3 Coder), ensuring reliable agentic RL training loops.
*   **[#1161](https://github.com/inclusionAI/AReaL/pull/1161) feat(infra): Support for proxy server through RayScheduler** *(Author: hlyli)*
    *   *Significance:* Enhances distributed infrastructure by allowing proxy servers via a new `RayHTTPLauncher` actor, providing better orchestration for forked HTTP workers in complex compute clusters.

#### 5. Why This Project Matters in Today's RL Landscape
In the current post-training landscape, the bottleneck has shifted from purely scaling compute to **efficient memory and network utilization**. AReaL is demonstrating acute awareness of this by bridging the gap between training and inference (rollouts). By aggressively pioneering **PD Disaggregation** and **BF16-to-FP8 online weight transfers** with SGLang, AReaL is solving the exact memory-bound inefficiencies that plague autoregressive decoding in RLHF. Furthermore, their rapid integration of agentic API fixes (tool-calling) and new reasoning configs (IcePop/KPop) positions AReaL as a highly practical, production-ready framework for modern LLM alignment.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the daily reinforcement learning ecosystem digest for TRL.

# 🥣 TRL Daily Digest: 2026-06-19

## 1. Today's Highlights
The TRL ecosystem is experiencing a massive consolidation and alignment phase, specifically targeting the **AsyncGRPO** and **MoE (Mixture of Experts)** architectures. With 43 PRs updated and 14 issues refreshed in the last 24 hours, development is highly active. Key themes include memory optimization (chunked losses, MoE aux loss), aligning the experimental async trainer with the stable `GRPOTrainer`, and expanding rule-based reward functions for RLVR (Reinforcement Learning with Verifiable Rewards).

## 2. Releases
**None.** No new stable releases were cut in the last 24 hours. The project remains focused on merging architectural improvements and bug fixes into the main branch.

## 3. Important Issues
Several critical bugs and architectural limitations were discussed or closed:
* **MoE & PEFT Crash Resolved ([#5222](https://github.com/huggingface/trl/issues/5222)):** Fixed a crash where `DPOTrainer`'s ref adapter crashed with PEFT `target_parameters` (required for fused `nn.Parameter` tensors in Transformers 5.x MoE models).
* **Memory & OOM Profiling ([#6102](https://github.com/huggingface/trl/issues/6102)):** Identified that `test_gkd_trainer_with_liger` intermittently OOMs the T4 CI runners, causing cascading test failures. A fix was immediately proposed and closed in PR [#6103](https://github.com/huggingface/trl/pull/6103).
* **Agentic RL Support Requested ([#5444](https://github.com/huggingface/trl/issues/5444)):** An open feature request to support asynchronous tool calls in the experimental `AsyncRolloutWorker`. 
* **SFT Silent Failure ([#3927](https://github.com/huggingface/trl/issues/3927)):** Open bug report indicating that `assistant_only_loss=True` fails silently when sequence length > `max_length`.

## 4. Key PR Progress
Developers merged several high-impact PRs and pushed forward experimental capabilities:
* **MoE Load Balancing ([#6085](https://github.com/huggingface/trl/pull/6085)):** Added `router_aux_loss_coef`, defaulting MoE auxiliary loss to `0.001`. This fundamentally improves fine-tuning stability for MoE models.
* **Memory & Throughput Optimizations:**
  * **Chunked DPO Loss ([#5853](https://github.com/huggingface/trl/pull/5853)):** WIP MVP that computes per-token log-probs in chunks, bypassing full `lm_head` projections to save peak activation memory.
  * **Memory Leak Patch ([#5765](https://github.com/huggingface/trl/pull/5765)):** Replaced deprecated `use_transformers_paged` with continuous batching, fixing a bug where the old branch silently bypassed importance-sampling correction by setting `logprobs = None`.
  * **Compute Optimization ([#6046](https://github.com/huggingface/trl/pull/6046)):** Removed redundant `.contiguous()` calls from the shift logits/labels pattern, optimizing the causal LM forward pass.
* **Expanding RLVR Rewards:** Added practical rule-based reward functions including `get_cosine_scaled_reward` for concise reasoning ([#6066](https://github.com/huggingface/trl/pull/6066)) and `get_repetition_penalty_reward` ([#6058](https://github.com/huggingface/trl/pull/6058)).
* **AsyncGRPO Alignment:** A series of PRs ([#6013](https://github.com/huggingface/trl/pull/6013), [#6019](https://github.com/huggingface/trl/pull/6019), [#6020](https://github.com/huggingface/trl/pull/6020), [#6021](https://github.com/huggingface/trl/pull/6021)) systematically aligning variable names, clipping metrics, and configuration defaults between the stable `GRPOTrainer` and `AsyncGRPOTrainer`. 

## 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts aggressively toward reasoning models (e.g., OpenAI o1/o3, DeepSeek-R1) and agentic workflows, post-training RL has become the most critical bottleneck. TRL is positioning itself as the de-facto open-source standard for this transition. 

Today's digest reveals TRL is proactively tackling the three hardest scaling challenges of modern RL: 
1. **MoE architectures:** Integrating aux losses natively ensures that popular sparse models (like Mixtral and DeepSeek) remain stable during PPO/GRPO.
2. **Async RLVR:** Systematically aligning `AsyncGRPO` capabilities enables faster, non-blocking environment interactions, which is mandatory for multi-step agentic tool-use.
3. **VRAM Constraints:** By introducing chunked losses and fixing silent memory leaks in paged batching, TRL ensures that sequence-length scaling (crucial for long context reasoning traces) doesn't immediately OOM enterprise hardware.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

# 🧠 RL Daily Digest: OpenRLHF
**Date:** 2026-06-19

### 1. Today's Highlights
Today's development in OpenRLHF focuses heavily on **agentic RL** and **LoRA stability**. The community is actively refining how multi-turn tool-calling trajectories are evaluated for length penalties, alongside critical patches to ensure LoRA fine-tuning remains compatible with the latest PyTorch 2.10 and DeepSpeed environments.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Important Issues
*   **[#1243](https://github.com/OpenRLHF/OpenRLHF/issues/1243) [OPEN] Exclude tool response tokens from length calculation**
    *   **Author:** `thevasudev_gupta`
    *   **Context:** When training "agentic" models with tools, the `overlong_penalty` buffer incorrectly calculates length. It currently uses the raw span from the first to the last action token (`experience.response_length`), which erroneously includes intermediate tool-call tokens. 
    *   **Proposal:** Utilize `action_mask` or `action_ranges` to calculate the actual action length, preventing the model from being unfairly penalized for executing necessary tool calls.

### 4. Key PR Progress
*   **[#1255](https://github.com/OpenRLHF/OpenRLHF/pull/1255) [OPEN] Fix response length calculation for multi-turn training**
    *   Addresses Issue #1243. Submits a fix where `response_length` in `_process_response_into_experience` is now computed using `action_mask.sum()` instead of the token span. This correctly isolates actual action tokens from tool-return tokens.
*   **[#1252](https://github.com/OpenRLHF/OpenRLHF/pull/1252) [CLOSED] Duplicate PR for action_mask fix**
    *   An initial/closed iteration of PR #1255 addressing the same multi-turn length calculation logic. 
*   **[#1254](https://github.com/OpenRLHF/OpenRLHF/pull/1254) & [#1253](https://github.com/OpenRLHF/OpenRLHF/pull/1253) [CLOSED] Filter empty param groups for PyTorch 2.10 LoRA compatibility**
    *   Addresses a critical optimizer crash (from Issue #1225). In LoRA SFT, parameters (`lora_A`, `lora_B`) typically don't match `no_decay_name_list` patterns, leaving the zero-weight-decay group empty. This triggers a crash in DeepSpeed's `_configure_optimizer` when running on PyTorch 2.10. The PRs add logic to filter out empty parameter groups before passing them to the LR scheduler.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source AI community shifts from static single-turn Supervised Fine-Tuning (SFT) to complex, agentic Reinforcement Learning (RL), frameworks must evolve to handle multi-turn tool usage. OpenRLHF is at the forefront of this transition. 

Today's focus on distinguishing between *action tokens* and *tool response tokens* (Issue #1243) is a prime example of this evolution. If frameworks naively apply length penalties to raw sequences, models are disincentivized from using tools—a fatal flaw for training effective Agents. Furthermore, by actively patching deep integration bugs with DeepSpeed and PyTorch 2.10 (PRs #1253, #1254), OpenRLHF ensures that memory-efficient techniques like LoRA remain stable and scalable for modern RLHF workloads.

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL ecosystem daily digest for **veRL** on 2026-06-19.

### 1. Today's Highlights
The veRL ecosystem is experiencing a massive surge in two key domains: **Agentic Multi-Turn RL** and **Asynchronous/Fully-Decoupled Training**. Today’s updates reveal a heavy engineering push toward optimizing rollout mechanisms (e.g., continuous tokens for multi-turn agents) and stabilizing fully async RL workflows across diverse hardware backends like Ascend NPUs. Notably, the community has merged support for next-generation models like DeepSeekV4 and GLM5 via Megatron Lite.

### 2. Releases
No new releases were recorded in the last 24 hours. The project appears to be stabilizing features and infrastructure post-v0.8.0.

### 3. Important Issues
*   **Hardware & Scaling Bottlenecks (Ascend & Qwen3):** Issue [#6792](https://github.com/verl-project/verl/issues/6792) reports OOM errors when deploying a 235B teacher model for OPD/FSDP distillation on Ascend 910b3 NPUs, highlighting the ongoing memory challenges in large-scale distillation.
*   **Asynchronous Training Anomalies:** Issue [#6780](https://github.com/verl-project/verl/issues/6780) identifies a critical divergence in veRL's `fully_async_policy` mode. On-policy mode (trigger=1, staleness=0) is converging much faster than standard `main_ppo` training, prompting an investigation into async metric logging and step alignment.
*   **Agentic Rollout Mechanism RFC:** Issue [#6719](https://github.com/verl-project/verl/issues/6719) proposes a "Continuous Token" design for multi-turn AgentLoop rollouts, aiming to move beyond basic prompt preservation to support complex token-in/token-out agent workflows.

### 4. Key PR Progress
*   **Rollout & Infrastructure Enhancements:**
    *   [PR #6794](https://github.com/verl-project/verl/pull/6794): Introduces **delta weight sync** for SGLang rollouts, drastically reducing trainer-to-rollout broadcast overhead by only syncing changed parameters.
    *   [PR #6779](https://github.com/verl-project/verl/pull/6779): Implements the Continuous Token mechanism requested in issue #6719 for multi-turn agentic rollouts.
    *   [PR #6689](https://github.com/verl-project/verl/pull/6689): Drafts an integration of prefix-tree **MAGI attention** to deduplicate shared prefixes in SFT/GRPO training, optimizing KV-cache usage.
*   **Async Trainer Fixes:**
    *   [PR #6684](https://github.com/verl-project/verl/pull/6684) and [PR #6796](https://github.com/verl-project/verl/pull/6796) fix critical bugs in the fully async trainer, including an issue where learning rates were stuck at 0 due to unsynced optimizer total steps, and misaligned metric logging.
*   **Hardware & Backend Support (Ascend & Megatron):**
    *   [PR #6791](https://github.com/verl-project/verl/pull/6791): Adds backend documentation and launchers for **DeepSeekV4, GLM5, and KimiK2.5** via Megatron Lite.
    *   [PR #6711](https://github.com/verl-project/verl/pull/6711) & [PR #6787](https://github.com/verl-project/verl/pull/6787): Significantly expand CI and E2E testing infrastructure for Huawei Ascend (A2 to A3 migration).
    *   [PR #6526](https://github.com/verl-project/verl/pull/6526): Optimizes Megatron memory footprint by aligning optimizer states and DDP grad buckets with model precision (bf16).

### 5. Why This Project Matters in Today's RL Landscape
veRL is rapidly cementing its position as the most hardware-agnostic and agentic-ready RL framework in the open-source space. While earlier RL frameworks focused strictly on single-turn PPO/GRPO for standard LLMs, veRL's current development trajectory directly tackles the three hardest blockers in modern AI scaling:
1.  **Agentic Workflows:** Fully supporting token-level continuity for multi-turn rollouts.
2.  **Hardware Agnosticism:** Deep native integration with Ascend NPUs alongside standard Nvidia GPUs, offering viable alternatives for infrastructure-constrained regions and enterprises.
3.  **Decoupled Async Efficiency:** Pioneering fully async training loops (where rollout generation and model training happen completely concurrently) combined with highly optimized weight syncing (like SGLang delta updates) to achieve unprecedented cluster utilization.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

# RL Ecosystem Daily Digest: Open Instruct
**Date:** 2026-06-19

### 1. Today's Highlights
Activity in the `open-instruct` repository over the past 24 hours has been highly focused, characterized by a single but technically significant Pull Request update. There were no new releases, issue filings, or issue updates.

### 2. Releases
None. (No new releases in the last 24 hours).

### 3. Important Issues
None. (0 issues updated or opened in the last 24 hours).

### 4. Key PR Progress
*   **PR [#1714](https://github.com/allenai/open-instruct/pull/1714) [CLOSED]** by `ReinforcedKnowledge`
    *   **Focus:** Infrastructure & Efficiency Optimization.
    *   **Summary:** This PR integrates `olmo-core`'s highly optimized LM head loss implementations into `open-instruct` by introducing a `loss_implementation` parameter in `ModelConfig`. It specifically enables Liger's `fused_linear` (FLCE) for SFT (Supervised Fine-Tuning) workflows. 
    *   **Technical Impact:** By applying this before the transformer model is built, the PR bypasses standard memory bottlenecks. Crucially, the update is scoped exclusively to SFT (when labels are passed to the model) and does not interfere with DPO (Direct Preference Optimization), which computes losses externally.

### 5. Why This Project Matters in Today's RL Landscape
In the modern Reinforcement Learning from Human Feedback (RLHF) pipeline, the SFT phase serves as the critical initialization for downstream reward modeling and RL alignment (e.g., PPO, DPO). As model context lengths grow, memory efficiency during the forward/backward pass becomes a severe bottleneck. 

PR #1714's integration of Liger kernel's fused linear cross-entropy is highly relevant to the RL ecosystem because:
1.  **Memory Optimization:** Fused linear CE drastically reduces GPU memory footprint during SFT by avoiding the materialization of massive logits. This allows practitioners to train larger base models or use longer context windows.
2.  **RLHF Integrity:** By carefully scoping the optimization to only SFT and explicitly avoiding DPO's loss computation, the PR ensures that RL alignment algorithms remain mathematically unaffected and stable.
3.  **Ecosystem Synergy:** It demonstrates seamless interoperability between the open-source AI2 (`olmo-core` / `open-instruct`) ecosystem and HuggingFace's optimization libraries (`liger-kernel`), pushing the boundary of efficient, open-source post-training stacks.

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

**RL Ecosystem Daily Digest: Stable Baselines3**
**Date:** 2026-06-19

Here is the daily analytical breakdown of the Stable Baselines3 (SB3) repository activity.

### 1. Today's Highlights
Activity in the Stable Baselines3 repository over the last 24 hours was minimal but featured a significant backend update. A long-standing pull request concerning memory optimization and dtype consistency in rollout buffers was officially closed. No new issues or releases were recorded.

### 2. Releases
*   **None.** There have been no new version pushes or tags in the last 24 hours. 

### 3. Important Issues
*   **None.** Zero new issues were opened or updated within the last 24 hours, indicating a stable period for user-reported bugs or feature requests.

### 4. Key PR Progress
*   **[CLOSED] [#2163 Use proper `dtype` for `RolloutBuffer` storage](https://github.com/DLR-RM/stable-baselines3/pull/2163)**
    *   **Author:** Trenza1ore
    *   **Analysis:** This PR addresses a crucial technical inconsistency between on-policy and off-policy memory management. Previously, `RolloutBuffer` (used by on-policy algorithms like PPO/A2C) handled tensor types differently than `ReplayBuffer` (used by off-policy algorithms like SAC/TD3). This update enforces a unified storage dtype. Crucially, it maintains **backward compatibility** by automatically casting returned `actions` back to `torch.float32` for `RolloutBuffer`. This is a vital architectural step that reduces memory overhead and prevents silent dtype-mismatch bugs during large-scale distributed training.

### 5. Why This Project Matters in Today's RL Landscape
In the modern Reinforcement Learning ecosystem, Stable Baselines3 continues to serve as the foundational "batteries-included" library for both academia and industry. While the frontier of RL research is dominated by complex, rapidly changing paradigms (like LLM-alignment via RLHF/DPO and massive multi-agent systems), SB3 remains the gold standard for reliable, rigorously tested implementations of classic Deep RL algorithms (PPO, SAC, TD3). 

PRs like #2163 demonstrate the project's ongoing commitment to low-level memory optimization and architectural consistency. By ensuring robust backward compatibility while quietly improving backend efficiency, SB3 allows researchers and engineers to iterate on applied RL problems without constantly battling framework-level bugs or breaking changes.

</details>