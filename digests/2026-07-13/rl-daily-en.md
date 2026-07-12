# RL Open Source Daily Digest 2026-07-13

> Generated: 2026-07-12 22:14 UTC | Projects covered: 15

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
The July 13, 2026 digest reveals an RL open-source landscape clearly bifurcated along two primary axes: **LLM Post-Training/Alignment (RLHF/GRPO)** and **Traditional/MARL Environments & Agents**. The most intense engineering velocity is occurring in LLM-focused frameworks (verl, TRL, slime, AReaL), where developers are fighting massive distributed system bottlenecks. Meanwhile, traditional RL libraries (Gymnasium, PettingZoo, CleanRL) are entering a mature maintenance and standardization phase, focusing on API reliability, pedagogical clarity, and safety monitoring.

## Activity Comparison

| Project | Issues | PRs | Releases | Signal |
| :--- | :--- | :--- | :--- | :--- |
| **verl** | 75 updated | 5 active | 0 | **High Momentum:** Dominating distributed infra & async RL pipelines. |
| **TRL** | 3 active | 6 active | 0 | **High Momentum:** Core algorithmic refinements & vLLM stability. |
| **PettingZoo** | 3 active | 4 active | 0 | **Maturing:** Pruning dead environments, enforcing strict typing. |
| **Gymnasium** | 1 active | 3 active | 0 | **Maturing:** UI bug squashing, expanding robotics ecosystem. |
| **slime** | 1 active | 3 active | 0 | **Targeted Fixes:** Hardening PPO numerical stability & NPU/CUDA support. |
| **AReaL** | 1 active | 2 active | 0 | **Feature Development:** Advancing multi-teacher distillation. |
| **CleanRL** | 1 active | 2 active | 0 | **Maturing:** Standardizing governance; prioritizing single-file integrity. |
| **rl_games** | 0 active | 3 active | 0 | **Performance:** Optimizing hot-loops for massive GPU physics sims. |
| **OpenRLHF** | 1 active | 1 active | 0 | **Stability:** Maintaining enterprise readiness. |
| **Tianshou** | 1 active | 1 active | 0 | **Stability:** Standardizing governance and exploring safety hooks. |
| **torchtune** | 0 active | 1 active | 0 | **Optimization:** Massive low-level kernel speedups for inference. |
| **ROLL** | 1 active | 0 active | 0 | **Stalled:** Debugging agentic LR scheduling architectures. |
| **Stable Baselines3**| 0 active | 2 closed | 0 | **Maintenance:** Strict filtering of automated/bot PRs. |
| **Open Instruct / ROCK**| 0 active | 0 active | 0 | **Dormant:** No activity. |

## Shared Research & Engineering Directions

**Research & Algorithmic Signals**
*   **Reward Hacking & Alignment Safety:** There is a coordinated, cross-ecosystem push to detect reward hacking. User `Aarav500` opened identical feature requests in Gymnasium (#1619), CleanRL (#563), OpenRLHF (#1263), and Tianshou (#1302) to track entropy collapse, KL-vs-reference acceleration, and advantage distribution drift. 
*   **Advanced GRPO Loss Refinement:** Teams are refining GRPO accuracy. TRL introduced `dapo_zv` (#6365) to filter zero-variance reward groups, while AReaL introduced configurable PPO actor loss aggregation modes (#1443) to stabilize policy gradient reduction.
*   **On-Policy & Multi-Teacher Distillation:** Frameworks are moving beyond standard RLHF. AReaL is pioneering multi-teacher weighted mixtures (#1400), while TRL is expanding same-family distillation with tool-calling support in GOLD (#6328).

**Engineering & Infrastructure Signals**
*   **Distributed System Overhead is the True Bottleneck:** The focus has shifted from pure compute to networking. verl is pioneering delta weight sync over NCCL (#6974) and fully asynchronous pipelines (#7021), while slime is fixing memory offloading for next-gen CUDA/NPU hardware (#2186, #2199).
*   **Inference & Generation Hot-Loops:** Accelerating rollouts is a top priority. torchtune fused RoPE kernels via Triton for up to 23x speedups (#2970), and verl integrated EAGLE3 speculative decoding (#5925).
*   **Numerical Stability at Scale:** LLM-scale RL is highly prone to NaNs and gradient blow-ups. slime clamped PPO log-ratios (#2198), TRL patched vLLM colocate NaN crashes (#6166), and rl_games fixed environment autoreset data leakage in PPO (#362).

## Differentiation Analysis
*   **LLM Scaling vs. GPU Physics Simulation:** verl, TRL, and OpenRLHF are hyper-focused on disaggregating LLM training and inference actors across massive multi-node clusters. Conversely, rl_games is differentiating by optimizing traditional continuous control PPO/SAC for massively parallel, GPU-resident physics simulators (MJLab/MuJoCo) using `bf16` autocasting (#360).
*   **Abstraction vs. Readability:** TRL provides the "batteries-included" bridge for HuggingFace users, actively adapting to new model architectures (e.g., patching Qwen3.5 `<think>` tags). CleanRL, however, strictly protects its single-file pedagogical simplicity, ensuring new features (like safety monitors) are decoupled from core algorithm files.
*   **Ecosystem Roles:** Farama Foundation projects (Gymnasium, PettingZoo) serve as universal API standards. Frameworks like verl, TRL, and AReaL consume these APIs but differentiate by providing the complex, distributed Ray/Megatron infrastructure required to actually train Foundation Models.

## Community Momentum & Maturity
*   **Surging Leaders:** **verl** is absorbing the most complex engineering heat in the ecosystem right now (75 issues updated in 24h), cementing itself as the premier framework for production-scale LLM RL. **TRL** maintains high velocity as the accessible, de facto bridge for standard practitioners.
*   **Maturing Governance:** Multiple projects (CleanRL #564, Tianshou #1303, Gymnasium #1629) are processing standardizations like Contributor Covenants and Changelogs. This marks a transition from scrappy research code to enterprise-ready maturity.
*   **Anti-Bot Sentiment:** A distinct trend is the active rejection of automated, LLM-generated PRs. Stable Baselines3 (#2266), Gymnasium, and PettingZoo maintainers are aggressively closing template-skipping bot PRs, ensuring human-vetted reliability.

## Trend Signals
*   **The Rise of Agentic RL:** The industry is shifting from single-turn prompt/response RL to multi-step agentic workflows. Alibaba's ROLL is explicitly targeting this via `AgentNativeStepEnvManager` (though currently stalled by LR scheduling issues, #407), while verl is heavily optimizing queue agent-loop batch submissions (#7021).
*   **Asynchronous Decoupling is Mandatory:** Sync RL training pipelines leave expensive GPUs idle during long text-generation rollouts. The future is fully asynchronous—exemplified by verl's `FullyAsyncRollouter`—which decouples rollout generation from parameter updates.
*   **Heterogeneous Hardware Adaptation:** Hard-coded dependencies are dying. Slime's transition to support NPUs and IPv6 networking, alongside AReaL's FSDP memory management for next-gen Qwen architectures, signals that modern RL libraries must dynamically adapt to bleeding-edge, non-standardized hardware topologies.

---

## RL Project Reports

<details>
<summary><strong>ROLL</strong> — <a href="https://github.com/alibaba/ROLL">alibaba/ROLL</a></summary>

Here is the RL open-source ecosystem daily digest for Alibaba ROLL based on the provided GitHub data.

### 📰 RL Ecosystem Daily Digest: Alibaba ROLL (2026-07-13)

**1. Today's Highlights**
The Alibaba ROLL repository experienced minimal surface-level activity over the past 24 hours, with zero new merges, releases, or newly opened issues. The ecosystem's focus remains centered around an ongoing, high-value discussion regarding step-level agentic training and learning rate (LR) scheduling stability.

**2. Releases**
*   **No new releases** reported in the last 24 hours. 

**3. Important Issues**
*   🔴 **#407 [OPEN] LR scheduler exhausts early in agentic training with AgentNativeStepEnvManager**
    *   **Author:** shamanez
    *   **Activity:** Updated 2026-07-12 (5 comments to date).
    *   **Summary:** A critical bug for agentic RL workflows where the learning rate scheduler exhausts its step budget prematurely and decays to zero mid-training. This occurs specifically when using the step-level environment manager (`AgentNativeStepEnvManager`). 
    *   **Why it matters:** In multi-step agentic pipelines, an exhausted LR budget halts policy optimization before the training run completes, silently breaking long-horizon RL tasks.
    *   **Link:** [alibaba/ROLL Issue #407](https://github.com/alibaba/ROLL/issues/407)

**4. Key PR Progress**
*   **No active PR updates** in the last 24 hours. Development velocity appears paused, though the ongoing discussion in Issue #407 suggests underlying architectural brainstorming regarding how environment steps and optimizer steps are decoupled.

**5. Why This Project Matters in Today's RL Landscape**
As the RL landscape aggressively shifts toward training LLM agents for complex, multi-step tool use and reasoning (e.g., Agentic RL), the underlying infrastructure must handle the decoupling of environment interactions and gradient updates. ROLL’s introduction of managers like `AgentNativeStepEnvManager` highlights the industry's push to support step-level environment dynamics. Solving the friction points revealed in Issue #407 is crucial for the open-source community; stable LR scheduling across asynchronous, long-horizon agent tasks is a foundational requirement for training the next generation of autonomous AI agents.

</details>

<details>
<summary><strong>ROCK</strong> — <a href="https://github.com/alibaba/ROCK">alibaba/ROCK</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>slime</strong> — <a href="https://github.com/THUDM/slime">THUDM/slime</a></summary>

Here is the RL ecosystem daily digest for `THUDM/slime` based on the provided GitHub data.

### 1. Today's Highlights
Activity over the last 24 hours is heavily focused on numerical stability and hardware compatibility. Developer **EazyReal** led the charge with three targeted bug fixes addressing edge cases in PPO and distributed NPU setups. Meanwhile, a critical issue regarding CUDA 13 runtime compatibility in memory offloading continues to gain attention.

### 2. Releases
*   **No new releases** were published in the last 24 hours.

### 3. Important Issues
*   **[Bug] `offload_train` fails on CUDA 13** ([Issue #2186](https://github.com/THUDM/slime/issues/2186))
    *   **Status:** Open (Updated 2026-07-12)
    *   **Summary:** When utilizing `--offload-train` on the Megatron backend, the `ray/actor_group.py` script sets `LD_PRELOAD` for `torch_memory_saver`. Currently, it selects the `.so` file based on a hard-coded filename list (prioritizing `cu12`). This breaks environments running CUDA 13 (`libcudart.so.12: cannot open shared object file`), highlighting a need to update the runtime detection logic to support newer CUDA versions.

### 4. Key PR Progress
*   **[CLOSED] fix(ppo): clamp log-ratios before exp()** ([PR #2198](https://github.com/THUDM/slime/pull/2198))
    *   **Author:** EazyReal
    *   **Summary:** Prevents gradient contamination by clamping exponent inputs to +/-20 before exponentiating log-ratios in PPO policy loss and the low-variance KL estimator. Safely allows existing non-finite training guards to catch NaNs.
*   **[OPEN] fix(npu): bracket IPv6 hosts in distributed init methods** ([PR #2199](https://github.com/THUDM/slime/pull/2199))
    *   **Author:** EazyReal
    *   **Summary:** Extends previous IPv6 fixes to older pinned code (Slime v0.2.2 `npu_patch`). It properly brackets bare IPv6 addresses in TCP init methods across actor, critic, and weight-update components, ensuring stable distributed rendezvous.
*   **[OPEN] fix: guard zero rollout temperature logprob scaling** ([PR #2197](https://github.com/THUDM/slime/pull/2197))
    *   **Author:** EazyReal
    *   **Summary:** Resolves a division-by-zero error (resulting in NaNs/Infinities) that occurred during greedy decoding (temperature = 0). The fix conditionally skips logprob scaling by temperature only when the temperature is exactly zero.

### 5. Why This Project Matters in Today's RL Landscape
As Reinforcement Learning pipelines scale to accommodate massive LLMs, infrastructure edge cases become primary bottlenecks. The issues and PRs addressed today highlight the exact challenges defining the modern RL ecosystem:
1.  **Numerical Stability at Scale:** As seen in [PR #2198](https://github.com/THUDM/slime/pull/2198) and [PR #2197](https://github.com/THUDM/slime/pull/2197), high-throughput PPO training is highly susceptible to gradient blow-ups from un-clamped exponentials or zero-division scaling during greedy rollouts. 
2.  **Heterogeneous Hardware Support:** The ongoing CUDA 13 migration ([Issue #2186](https://github.com/THUDM/slime/issues/2186)) and IPv6/NPU patches ([PR #2199](https://github.com/THUDM/slime/pull/2199)) demonstrate that robust RL frameworks cannot hard-code dependencies. They must dynamically support bleeding-edge accelerators (like NPUs) and diverse network topologies to power next-generation distributed training workloads.

</details>

<details>
<summary><strong>AReaL</strong> — <a href="https://github.com/inclusionAI/AReaL">inclusionAI/AReaL</a></summary>

**AReaL (inclusionAI) RL Ecosystem Daily Digest — 2026-07-13**

### 1. Today's Highlights
Activity in the AReaL ecosystem over the past 24 hours was primarily focused on core algorithm enhancements and engineering troubleshooting. Two open feature PRs saw updates, focusing on advanced distillation techniques and PPO optimization flexibility. Meanwhile, community discussions highlight ongoing growing pains with memory management for newer model architectures.

### 2. Releases
*   **No New Releases:** There have been 0 new version tags or releases in the last 24 hours. The project continues its development on the main branch.

### 3. Important Issues
*   **Memory Regression / FSDP Offload Failure on Newer Models ([Issue #1319](https://github.com/areal-project/AReaL/issues/1319))** [CLOSED]
    *   **Context:** A user reported severe Out-Of-Memory (OOM) issues when upgrading from Qwen3-4B to Qwen3.5-4B. 
    *   **Technical Breakdown:** Despite having `fsdp.offload_params` enabled for both Actor and Reference models, the Reference model's VRAM usage plateaus at ~50GB and fails to offload dynamically. This highlights a potential compatibility or behavioral regression in how AReaL handles FSDP memory management for next-generation model architectures. 

### 4. Key PR Progress
*   **Multi-Teacher On-Policy Distillation ([PR #1400](https://github.com/areal-project/AReaL/pull/1400))**
    *   **Focus:** Expanding AReaL's knowledge distillation framework.
    *   **Value:** Upgrades the single-teacher paradigm to support a multi-teacher weighted mixture during on-policy distillation. This provides practitioners with finer control to blend distinct domain-expert models into a single RL-trained student actor.
*   **PPO Actor Loss Aggregation Modes ([PR #1443](https://github.com/areal-project/AReaL/pull/1443))**
    *   **Focus:** Core RLHF/PPO training mechanics.
    *   **Value:** Introduces configurable actor loss aggregation modes. Crucially, this PR achieves this while preserving AReaL’s `TrainEngine.train_batch` distributed normalizer contract, ensuring that distributed training stability is not compromised when modifying the `PolicyGradientReduction` objective.

### 5. Why This Project Matters in Today's RL Landscape
As the open-source community pushes toward training larger, more capable LLMs using Reinforcement Learning from Human Feedback (RLHF) and mathematical reasoning, memory bottlenecks (as seen in Issue #1319) remain the primary blocker for researchers without massive compute clusters. AReaL remains a critical ecosystem because it directly addresses distributed RL challenges at scale. Enhancements like multi-teacher distillation (#1400) and flexible PPO loss aggregation (#1443) demonstrate the project's commitment to pushing the cutting edge of post-training techniques, making it a vital infrastructure piece for the next generation of open-source AI development.

</details>

<details>
<summary><strong>TRL</strong> — <a href="https://github.com/huggingface/trl">huggingface/trl</a></summary>

Here is the daily reinforcement learning ecosystem digest for TRL.

### 1. Today's Highlights
* **Data Streaming & Memory Safety:** Major refactoring efforts are underway to support `IterableDataset` (streaming) across GRPO, RLOO, and ORPO trainers, alongside crucial fixes to prevent in-place mutation of environment prompts in online RL loops.
* **Advanced RL Loss Functions:** Introduction of a new GRPO loss type (`dapo_zv`) designed to boost accuracy by filtering out zero-variance reward groups. 
* **Chat Template Crisis Averted:** Critical patches were merged to fix corrupted reasoning blocks (`<think>` tags) when using Qwen3-family models in TRL's training chat templates.
* **Expanding Distillation (GOLD/SDFT):** Active development in tool-calling support for the GOLD trainer and experimental integration of Dual On-Policy Distillation (DOPD) for SDFT.

### 2. Releases
* **None.** No new stable versions were published in the last 24 hours. The team remains focused on merging feature branches into the `main` development branch.

### 3. Important Issues
* **🚨 GRPO vLLM Colocate NaN Crash ([#6166](https://github.com/huggingface/trl/issues/6166)):** An active, high-priority bug where GRPO training crashes if vLLM returns a NaN logprob. The `extract_logprobs` utility converts NaNs to `None`, which subsequently crashes `torch.tensor()` during the scoring phase. 
* **💬 Qwen3.5 Chat Template Corruption ([#6361](https://github.com/huggingface/trl/issues/6361)):** A critical issue affecting Qwen3.5+ models where TRL's prefix-preserving training templates fail to properly parse self-generated reasoning blocks, effectively corrupting the training data. *(Addressed in PR #6363)*.
* **🛡️ Reward Hacking Monitoring ([#6350](https://github.com/huggingface/trl/issues/6350)):** A closed feature request discussing the addition of optional hooks to track KL-vs-reference acceleration, entropy collapse, and advantage-distribution drift during GRPO/DPO training.

### 4. Key PR Progress
* **Advanced GRPO Accuracy ([#6365](https://github.com/huggingface/trl/pull/6365)):** Introduces `dapo_zv`, a custom loss type that excludes sequences from zero-variance groups (where all completions get the exact same reward) from the loss denominator, preventing advantage calculation from diluting model accuracy.
* **Streaming Support Rollout ([#6351](https://github.com/huggingface/trl/pull/6351), [#6230](https://github.com/huggingface/trl/pull/6230)):** Unifies dataset handling to support `IterableDataset` in GRPO, RLOO, and ORPO trainers, allowing memory-efficient streaming for massive RL datasets.
* **Immutable RL Environments ([#6364](https://github.com/huggingface/trl/pull/6364), [#6366](https://github.com/huggingface/trl/pull/6366)):** Fixes side-effects in GRPO and DPPO trainers where appending environment reset observations was mutating user input prompts in-place. 
* **Fixing Qwen3 Reasoning Blocks ([#6363](https://github.com/huggingface/trl/pull/6363)):** Fixes a logic error where training templates expected both `<think>` and `</think>` tags in self-generated text, whereas models only output the closing tag during generation.
* **GOLDTrainer Enhancements ([#6328](https://github.com/huggingface/trl/pull/6328), [#6359](https://github.com/huggingface/trl/pull/6359)):** Adds multi-turn tool-calling support for same-family distillation in GOLD, alongside a fix to correctly truncate on-policy prompts from the end rather than the start.

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts aggressively toward Reinforcement Learning with Human Feedback (RLHF) and pure Reinforcement Learning (RL) for reasoning (e.g., GRPO/DPO), **HuggingFace TRL has established itself as the de facto open-source bridge between theoretical RL research and production-scale training.** 

Today's digest highlights exactly why TRL is critical for the current landscape:
1. **Taming vLLM for Online RL:** Integrating high-throughput inference engines (vLLM) directly into training loops (colocate mode) is notoriously difficult. TRL is actively doing the heavy lifting to stabilize token generation, logprob extraction, and memory management (Issues #6166, PRs #6364).
2. **Algorithmic Refinement:** Implementing nuanced fixes—like ignoring zero-variance groups (PR #6365)—shows TRL's role in rapidly iterating on math-heavy algorithmic improvements derived from frontier labs (like DeepSeek's DAPO). 
3. **Model-Aware Infrastructure:** As models evolve to generate implicit reasoning chains (like Qwen3.5's `<think>` tags), TRL's focus on building resilient chat-template utilities ensures that open-source users can cleanly align newer LLM architectures without breaking their training pipelines.

</details>

<details>
<summary><strong>Tianshou</strong> — <a href="https://github.com/thu-ml/tianshou">thu-ml/tianshou</a></summary>

**Tianshou RL Ecosystem Daily Digest — 2026-07-13**

**1. Today's Highlights**
Activity in the Tianshou repository over the past 24 hours has been focused on project maintenance and community governance. The team and contributors are currently processing foundational ecosystem updates, including community health files and advanced feature discussions, with no new algorithmic deployments or releases in this cycle.

**2. Releases**
*   **No new releases** introduced in the last 24 hours. 

**3. Important Issues**
*   **[#1302](https://github.com/thu-ml/tianshou/issues/1302) [OPEN] New feature request: reward-hacking onset monitoring hooks** (Author: Aarav500)
    *   *Insight:* This issue proposes integrating monitoring hooks specifically designed to detect the onset of reward hacking. As Reinforcement Learning moves toward deploying more autonomous agents, reward hacking remains a critical alignment and safety bottleneck. Implementing native, callback-based monitoring for this would significantly bolster Tianshou’s utility for robust and safe RL research.

**4. Key PR Progress**
*   **[#1303](https://github.com/thu-ml/tianshou/pull/1303) [OPEN] docs: add community health files (CODE_OF_CONDUCT.md)** (Author: Mukller)
    *   *Insight:* This pull request aims to formalize project governance by introducing the Contributor Covenant v2.1 (`CODE_OF_CONDUCT.md`) and updating the README with contributor profile links. While not a technical code update, adopting standard open-source community health files is a crucial step for scalable, enterprise-ready project maturity, ensuring clear operational guidelines for a growing base of open-source contributors.

**5. Why This Project Matters in Today's RL Landscape**
Tianshou remains a premier deep reinforcement learning framework because of its modular, "less-is-more" architecture built on PyTorch. In today's RL landscape—where rapid prototyping and reproducibility are paramount—Tianshou provides researchers with transparent, easily hackable pipelines for standard algorithms like PPO, SAC, and DQN. Today's updates perfectly illustrate the project's dual focus: maintaining strict open-source governance (#1303) while actively entertaining advanced, safety-critical RL capabilities like reward-hacking detection (#1302).

</details>

<details>
<summary><strong>OpenRLHF</strong> — <a href="https://github.com/OpenRLHF/OpenRLHF">OpenRLHF/OpenRLHF</a></summary>

### 📊 RL Ecosystem Daily Digest: OpenRLHF
**Date:** 2026-07-13  
**Focus:** OpenRLHF (github.com/OpenRLHF/OpenRLHF)

---

#### 1. Today's Highlights
Activity in the OpenRLHF repository over the past 24 hours has been highly focused on quality assurance and training stability. The community saw a targeted bug fix merged via Pull Request, while ongoing discussions highlight a crucial, advanced feature request for detecting reward hacking during PPO and GRPO workloads.

#### 2. Releases
* **No new releases** were published in the last 24 hours. The project remains on its latest stable version.

#### 3. Important Issues
* **[#1263](https://github.com/OpenRLHF/OpenRLHF/issues/1263) [OPEN] Feature request: reward-hacking onset monitoring hooks during PPO/GRPO training**
  * **Author:** Aarav500
  * **Summary:** A proposal to integrate optional monitoring hooks directly into OpenRLHF’s PPO/GRPO trainers. The requested hooks aim to track early signals of reward hacking by monitoring KL-vs-reference acceleration, entropy-collapse trends, and advantage-distribution drift (measured via Wasserstein distance against a rolling baseline).
  * **Analyst Take:** As RLHF scales to complex reasoning tasks, reward hacking remains a primary bottleneck. Adding granular, statistical telemetry directly into the trainer loop is a highly relevant feature request that would significantly boost the framework's enterprise readiness.

#### 4. Key PR Progress
* **[#1264](https://github.com/OpenRLHF/OpenRLHF/pull/1264) [OPEN] Fix a small issue in OpenRLHF (#1243)**
  * **Author:** bglglzd
  * **Summary:** A targeted, narrowly-scoped bug fix resolving previously reported issue #1243. The contributor intentionally limited the PR's scope strictly to the affected area, ensuring no unintended side effects to the broader codebase.
  * **Status:** Currently open and pending review/maintainer validation.

#### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily toward reasoning models (e.g., OpenAI o1, Claude 3.5 Sonnet) trained via Reinforcement Learning (RL), OpenRLHF has cemented itself as a critical piece of open-source infrastructure. By providing a highly scalable, distributed framework for PPO, GRPO, and other RL algorithms, it allows developers to align Large Language Models (LLMs) without relying on proprietary black boxes. Today's digest perfectly encapsulates the ecosystem's current needs: maintaining rock-solid codebase stability (PR #1264) while pushing the boundaries of training observability and alignment safety to mitigate model collapse (Issue #1263).

</details>

<details>
<summary><strong>verl</strong> — <a href="https://github.com/volcengine/verl">volcengine/verl</a></summary>

Here is the RL open-source ecosystem daily digest for verl.

# 📊 RL Ecosystem Daily Digest: verl
**Date:** 2026-07-13  
**Repository:** [verl-project/verl](https://github.com/volcengine/verl) (formerly volcengine/verl)

---

### 1. Today's Highlights
The verl project is experiencing massive community engagement, with 75 issues updated in the last 24 hours. Development activity remains highly focused on system architecture and throughput, specifically optimizing asynchronous RL pipelines and reducing network bottlenecks in distributed weight synchronization. 

### 2. Releases
**No new releases** in the last 24 hours. The engineering focus is entirely on merging architectural improvements into the main branch (e.g., v1 trainer, fully asynchronous modes).

### 3. Important Issues
The most engaged issues highlight the community's active scaling efforts and the challenges of stabilizing large-scale RL training:
*   **Training Instability (Entropy & NaNs):** A highly upvoted issue (#2738) discusses the sudden, unexpected increase in entropy during GRPO training, causing model collapses. Similarly, users report `grad_norm` returning NaN after a few dozen steps (#2708) or outputting repetitive characters like `!!!!!` (#2626).
*   **Scaling & Inference Bottlenecks:** Users are actively troubleshooting multi-node scaling. Issue #2751 notes that vLLM generation speeds do not improve linearly when increasing node counts, while #2697 questions the lack of pipeline parallelism usage in Ray+vLLM inference setups. 
*   **Multi-turn & Multimodal Training:** There is strong community demand for robust implementations of multi-turn (ReAct-style) training (#2683) and multimodal training, with users noting that VLMs sometimes fail to process images during multi-turn rollouts (#2643).

### 4. Key PR Progress
Today's PRs reflect a massive push towards asynchronous execution and network I/O optimization:
*   **Asynchronous Pipeline Optimization:**
    *   [PR #7021](https://github.com/volcengine/verl/pull/7021): Queues agent-loop batch submissions so each worker processes chunks serially while maintaining prompt-level concurrency—preventing fire-and-forget rollout calls from overwhelming the system.
    *   [PR #7010](https://github.com/volcengine/verl/pull/7010): Fixes a critical state-lock issue in `FullyAsyncRollouter` where long-running rollouts would block parameter updates, serializing training behind the rollout tail.
    *   [PR #7020](https://github.com/volcengine/verl/pull/7020): Enabled `SkipManager` in the v1 sync trainer to adapt `param_sync_step` (Closed).
*   **Bandwidth & Throughput Enhancements:**
    *   [PR #6974](https://github.com/volcengine/verl/pull/6974): Introduces **Delta weight sync over NCCL**. By broadcasting only the parameters that changed (since RL updates leave >99% of BF16 weights untouched), this drastically cuts weight-sync traffic.
    *   [PR #5925](https://github.com/volcengine/verl/pull/5925): Integrates **EAGLE/EAGLE3 speculative decoding** for vLLM rollouts, a massive throughput win for inference-heavy RLHF loops.

### 5. Why This Project Matters in Today's RL Landscape
As the AI industry shifts heavily towards Reinforcement Learning (specifically algorithms like GRPO and PPO) to reasoning-train Large Language Models (e.g., DeepSeek-R1), the primary engineering bottleneck has shifted from pure compute to **distributed system overhead** (specifically, moving weights between training and inference engines). 

**verl** is currently solving the hardest infra problems in this space. By pioneering disaggregated rollout architectures, fully asynchronous training loops, and delta-based weight synchronization (as seen in today's PRs), verl prevents GPU idling during long text-generation rollouts. It has cemented itself as the premier open-source framework for production-scale post-training of foundation models.

</details>

<details>
<summary><strong>torchtune</strong> — <a href="https://github.com/pytorch/torchtune">pytorch/torchtune</a></summary>

### 📊 RL Ecosystem Daily Digest: torchtune
**Date:** 2026-07-13 | **Repository:** [pytorch/torchtune](https://github.com/pytorch/torchtune)

#### 1. Today's Highlights
Activity in the torchtune ecosystem over the last 24 hours was highly focused on performance optimization. With zero new issues or releases, the primary development centers on a newly opened PR that introduces massive inference and training speedups for positional embeddings via custom Triton kernels.

#### 2. Releases
**None.** 
No new versions were published in the last 24 hours. 

#### 3. Important Issues
**None.** 
Zero issues were created or updated within the last 24 hours, indicating a stable ecosystem or a temporary lull in user-reported bugs and feature requests.

#### 4. Key PR Progress
*   **[OPEN] #2970:** [feat: add optional torchembed fused Triton kernel for RotaryPositionalEmbeddings (8–23× faster)](https://github.com/meta-pytorch/torchtune/pull/2970) by `py-ai-dev`
    *   **Summary:** This PR introduces a `use_fused_kernel=True` flag to `RotaryPositionalEmbeddings` (RoPE). By integrating `torchembed` and `triton`, the forward pass now dispatches to a stride-aware kernel that entirely eliminates intermediate memory allocations.
    *   **Impact:** Delivers an 8–23× speedup for the embedding forward pass. The PR explicitly notes that default behavior remains unchanged, making this an opt-in, zero-risk performance boost for heavy workloads.

#### 5. Why This Project Matters in Today's RL Landscape
In modern Reinforcement Learning (particularly Reinforcement Learning from Human Feedback [RLHF] and self-play), compute bottlenecking during the inference and generation phases is a critical challenge. The environment, policy, and reward models often require processing vast amounts of sequence data. 

PR #2970 perfectly exemplifies why torchtune is vital to the RL ecosystem: it pushes low-level systems optimizations (like Triton-fused RoPE kernels) into accessible, high-level PyTorch abstractions. By eliminating memory overhead and accelerating positional embeddings by up to 23×, torchtune directly reduces the latency bottleneck in RLHF rollout phases, allowing researchers to iterate on alignment algorithms faster and more cost-effectively.

</details>

<details>
<summary><strong>Open Instruct</strong> — <a href="https://github.com/allenai/open-instruct">allenai/open-instruct</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CleanRL</strong> — <a href="https://github.com/vwxyzjn/cleanrl">vwxyzjn/cleanrl</a></summary>

# 📊 RL Open-Source Daily Digest: CleanRL
**Date:** 2026-07-13 | **Repository:** [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl)

### 1. Today's Highlights
CleanRL is experiencing a highly productive documentation and community health cycle. Over the last 24 hours, activity has been entirely focused on improving project maintainability and expanding safety-monitoring capabilities, with 2 open PRs addressing community files and documentation, and ongoing discussions around an advanced metric-tracking issue.

### 2. Releases
* **No new releases** in the last 24 hours. The repository remains stable on its current version.

### 3. Important Issues
* **[Issue #563](https://github.com/vwxyzjn/cleanrl/issues/563) [OPEN]** — *Optional monitoring callback for reward-hacking / training-instability signals* (by `Aarav500`)
  * **Context:** As RL algorithms scale, standard logged metrics (loss, entropy, KL divergence) often fail to capture emergent reward hacking or training collapse. 
  * **Proposal:** The author proposes an optional, standalone `cleanrl_utils/monitors.py` module. By keeping it decoupled from the core algorithm files, users could easily import it to track advanced instability signals without bloating the hallmark single-file algorithm implementations. The issue received its first comment yesterday, indicating active community engagement.

### 4. Key PR Progress
* **[PR #565](https://github.com/vwxyzjn/cleanrl/pull/565) [OPEN]** — *Polish docs and comments in cleanrl (#563)* (by `bglglzd`)
  * A tightly scoped patch that addresses documentation and comments related to the behaviors discussed in Issue #563.
* **[PR #564](https://github.com/vwxyzjn/cleanrl/pull/564) [OPEN]** — *docs: add community health files* (by `Mukller`)
  * A vital step for project maturity. This PR introduces a `CODE_OF_CONDUCT.md` (Contributor Covenant v2.1) and a `CHANGELOG.md` (Keep a Changelog format). This establishes clear Semantic Versioning tracking and standardized contributor guidelines, which are critical as the project's contributor base grows.

### 5. Why This Project Matters in Today's RL Landscape
In an era where RL libraries are becoming increasingly complex and heavily abstracted, CleanRL’s core value proposition remains its **single-file, highly readable implementations**. However, today's digest highlights a natural and important maturation phase for the framework:
1. **Algorithmic Safety vs. Simplicity:** The push for an optional reward-hacking monitor (Issue #563) underscores a broader industry challenge—how to integrate advanced alignment and safety tooling without sacrificing the pedagogical simplicity of single-file codebases. Decoupling these tools as proposed is a highly pragmatic solution.
2. **Open-Source Sustainability:** The introduction of community health files (PR #564) shows CleanRL doubling down on long-term maintainability. By standardizing contribution workflows and versioning, the project ensures it remains accessible and reliable for both cutting-edge researchers and the next generation of RL engineers.

</details>

<details>
<summary><strong>rl_games</strong> — <a href="https://github.com/Denys88/rl_games">Denys88/rl_games</a></summary>

## 1. Today's Highlights
The `rl_games` ecosystem saw no new issues or releases today, but maintained active development momentum with three significant PRs updated within the last 24 hours. The focus is heavily on **PPO/SAC correctness in vectorized environments**, resolving **multi-discrete action space bugs**, and **GPU simulation performance optimizations** (including MJLab/MuJoCo-Warp integration).

## 2. Releases
**None.** 
No new stable versions were cut in the last 24 hours. The project continues to push bleeding-edge changes via the `master` branch.

## 3. Important Issues
**None.** 
With 0 issues updated or opened in the last 24 hours, the repository is experiencing a quiet period in user-reported bugs, suggesting that recent merges are holding stable or that core maintainers are proactively fixing bugs via direct PRs.

## 4. Key PR Progress
Development activity is concentrated on patching data pipeline integrity and performance bottlenecks:

*   **[OPEN] [PR #362: PPO autoreset masking & scalar sigma](https://github.com/Denys88/rl_games/pull/362)** by `ViktorM`
    *   *Context:* Fixes a critical data leakage/corruption bug in PPO. When using `next_step-autoreset` environments (e.g., Envpool, native Gymnasium 1.x vector envs), the dummy transition generated during environment resets was being ingested as real training data.
    *   *Impact:* Ensures rollout integrity for continuous infinite-horizon training loops.
*   **[OPEN] [PR #361: Fix multi-discrete masked path & DiscretizeActions wrapper](https://github.com/Denys88/rl_games/pull/361)** by `Denys88`
    *   *Context:* Patches a crash in `ModelA2CMultiDiscrete.forward`. The previous NumPy slicing logic assumed equal chunk sizes, causing CUDA crashes when using heterogeneous multi-discrete action heads (e.g., `[3,5,7]`).
    *   *Impact:* Restores and stabilizes support for complex, heterogeneous action spaces often required in real-world gaming and robotics tasks.
*   **[CLOSED] [PR #360: PPO/SAC hot-loop performance & MJLab integration](https://github.com/Denys88/rl_games/pull/360)** by `ViktorM`
    *   *Context:* A massive batch PR that was finalized today. It introduces `bf16` autocast by default for GPU throughput, fixes RNN state handling, and validates integration with MJLab (MuJoCo-Warp).
    *   *Impact:* Massive latency reductions in algorithm hot-loops and first-class support for massive parallel GPU-based physics simulation.

## 5. Why This Project Matters in Today's RL Landscape
As the RL community shifts heavily toward massively parallel GPU-simulated environments (like Isaac Lab, MJX, and Envpool), traditional CPU-bound RL libraries become severe bottlenecks. 

Today's updates in `rl_games` prove its ongoing relevance as a high-performance, tensor-compute-first alternative to frameworks like Stable Baselines3. By explicitly addressing environment autoreset data corruption and enabling `bf16` autocasting natively, `rl_games` is actively adapting its PPO/SAC implementations to handle the unique data-throughput quirks of modern, million-step-per-second simulators. Furthermore, the patch to multi-discrete action spaces ensures it remains a top-tier choice for complex game AI, an area where it has historically dominated.

</details>

<details>
<summary><strong>Gymnasium</strong> — <a href="https://github.com/Farama-Foundation/Gymnasium">Farama-Foundation/Gymnasium</a></summary>

# 📊 RL Ecosystem Daily Digest: Gymnasium
**Date:** 2026-07-13
**Repository:** [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

---

### 1. Today's Highlights
Activity over the past 24 hours shows a strong focus on **tooling reliability** and **ecosystem expansion**. Core maintainers and contributors are actively squashing UI bugs in interactive utilities, while the community proposes new analytical wrappers to detect reward hacking—a trending topic in alignment-focused RL. 

### 2. Releases
* **No new releases** were published in the last 24 hours. 

### 3. Important Issues
* **[Proposal] Reward-hacking / reward-audit monitoring wrappers** | [Issue #1619](https://github.com/Farama-Foundation/Gymnasium/issues/1619)
  * **Author:** Aarav500
  * **Status:** Active discussion (14 comments)
  * **Summary:** A proposal to introduce opt-in wrappers for auditing reward signals during training and rollout. The goal is to track reward-distribution drift, entropy collapse, and reward-function versioning/hashing. As RL models scale, detecting when a policy is exploiting flawed reward functions is critical, making this a highly relevant ecosystem feature.

### 4. Key PR Progress
* **[OPEN] Fix Pygame utility Bugs in `play.py`** | [PR #1628](https://github.com/Farama-Foundation/Gymnasium/pull/1628)
  * **Author:** Ankush0077
  * **Summary:** Addresses multiple correctness and type-safety bugs in the interactive keyboard play utility (`gymnasium/utils/play.py`). It resolves floating-point type violations during Pygame window resizing, cumulative aspect-ratio scaling drift, `KEYUP` event crash risks, and zoom validation bugs.
* **[OPEN] Add `WireHarness-MultiGripper-RL` to Third-Party Environments** | [PR #1630](https://github.com/Farama-Foundation/Gymnasium/pull/1630)
  * **Author:** KishanThummar007
  * **Summary:** Expands Gymnasium's robotics ecosystem catalog by adding a MuJoCo-based environment for deformable cable physics and multi-gripper end-effector control. 
* **[CLOSED] docs: add community health files** | [PR #1629](https://github.com/Farama-Foundation/Gymnasium/pull/1629)
  * **Author:** Mukller
  * **Summary:** An automated/generated PR attempting to add standard open-source community health files (`CODE_OF_CONDUCT.md`, `CHANGELOG.md`). Closed by maintainers, indicating strict control over repository standardization.

### 5. Why This Project Matters in Today's RL Landscape
Gymnasium remains the de facto standard API for single-agent RL environments. Today's updates reflect the project's current lifecycle phase: ensuring robust infrastructure for researchers. By maintaining strict type-safety in interactive UI tools and fostering discussions around reward-hacking detection (Issue #1619), Gymnasium is directly supporting the RL community's shift toward more rigorous safety, alignment, and evaluation practices.

</details>

<details>
<summary><strong>PettingZoo</strong> — <a href="https://github.com/Farama-Foundation/PettingZoo">Farama-Foundation/PettingZoo</a></summary>

Here is the daily digest for the PettingZoo project. 

# 🧠 RL Ecosystem Daily Digest: PettingZoo
**Date:** 2026-07-13 | **Project:** [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo)

### 1. Today's Highlights
PettingZoo is undergoing active maintenance and structural refinement. The focus is split between improving codebase quality (proposing strict type checking) and optimizing environment utilities (adding configurable obstacles and benchmarking policies). A notable administrative push to remove dead/unused environments is underway in preparation for the next release cycle.

### 2. Releases
*   **No new releases** in the last 24 hours. The project is currently in a development/pre-release maintenance phase.

### 3. Important Issues
Several strategic discussions and proposals were updated:
*   **[Codebase Cleanup] Removing Unused Environments** ([#1383](https://github.com/Farama-Foundation/PettingZoo/issues/1383)): Lead maintainer `jkterry1` proposes removing `TicTacToe` and `Gin Rummy` due to virtually zero external usage. Interestingly, this coincides with the bumping of an old Tic Tac Toe logical bug ([#1332](https://github.com/Farama-Foundation/PettingZoo/issues/1332)), suggesting a pending deprecation rather than a fix.
*   **[Code Quality] Proposal: Pyright in strict mode** ([#1318](https://github.com/Farama-Foundation/PettingZoo/issues/1318)): A proposal to enforce strict type checking (`typeCheckingMode = "strict"`). The author notes there are currently 604 errors, suggesting a gradual, file-by-file PR approach to resolve them.
*   **[Ecosystem] Interest Check: Multi-agent reward-hacking environments** ([#1394](https://github.com/Farama-Foundation/PettingZoo/issues/1394)): A community proposal to add environments specifically designed to test multi-agent reward hacking and alignment via proxy rewards. 

### 4. Key PR Progress
Development activity today features environment customization and policy benchmarking:
*   **Configurable Pursuit Obstacles** ([PR #1393](https://github.com/Farama-Foundation/PettingZoo/pull/1393)): Introduces a `center_box_size=(width, height)` argument to the Pursuit environment, allowing users to define custom center obstacle dimensions or remove them entirely.
*   **KAZ Policy Benchmarks** ([PR #1395](https://github.com/Farama-Foundation/PettingZoo/pull/1395) & [PR #1384](https://github.com/Farama-Foundation/PettingZoo/pull/1384)): Two separate PRs addressing issue #1381 by adding deterministic and evolved predictive vector policies for the *Knights-Archers-Zombies (KAZ)* environment. Both include reproducible search/evaluation scripts and rendered GIFs.
*   **Automated Bot Activity** ([PR #1396](https://github.com/Farama-Foundation/PettingZoo/pull/1396)): A closed PR from an automated bot attempting to add generic community health files (`CODE_OF_CONDUCT.md`, `CHANGELOG.md`), which was promptly rejected by maintainers.

### 5. Why This Project Matters in Today's RL Landscape
PettingZoo is the industry-standard API for Multi-Agent Reinforcement Learning (MARL) within the Farama Foundation ecosystem. Today's digest highlights the natural growing pains of a maturing RL framework: balancing strict software engineering practices (Pyright integration) with domain-specific needs (reward-hacking test beds). By actively pruning dead environments (like TicTacToe) and standardizing benchmarks (KAZ policies), the maintainers are ensuring the library remains lightweight, reliable, and highly relevant for modern MARL researchers.

</details>

<details>
<summary><strong>Stable Baselines3</strong> — <a href="https://github.com/DLR-RM/stable-baselines3">DLR-RM/stable-baselines3</a></summary>

# RL Ecosystem Daily Digest: Stable Baselines3
**Date:** 2026-07-13

### 1. Today's Highlights
The Stable Baselines3 (SB3) repository experienced a quiet 24 hours with zero new issues and no new releases. However, maintainers remained vigilant in preserving repository integrity by swiftly closing two automated, non-compliant pull requests that failed to adhere to the project's contribution guidelines.

### 2. Releases
*   **No new releases** in the last 24 hours.

### 3. Important Issues
*   **No active issues** were reported or updated in the last 24 hours. This low friction is standard for mature, heavily utilized libraries like SB3, where most active development and debugging occur in PRs or long-term tracking issues.

### 4. Key PR Progress
Two PRs were updated and closed within the last 24 hours, both flagged for automated generation and missing required templates:

*   **[PR #2267](https://github.com/DLR-RM/stable-baselines3/pull/2267) [CLOSED]** by `bglglzd`
    *   *Context:* Proposed minor formatting and documentation cleanups. 
    *   *Action:* Closed by maintainers due to a failure to fill out the required PR template and suspected LLM-generated content. This highlights the project's strict stance on maintaining a human-curated, highly reviewed contribution standard.
*   **[PR #2266](https://github.com/DLR-RM/stable-baselines3/pull/2266) [CLOSED]** by `Mukller`
    *   *Context:* Proposed adding standard open-source community health files (e.g., `CHANGELOG.md`).
    *   *Action:* Closed for the same template and LLM-generation infractions as #2267. Maintainers are actively filtering out low-effort, bot-generated "contributions" that have become prevalent in modern open-source ecosystems.

### 5. Why This Project Matters in Today's RL Landscape
As the de facto standard implementation for Proximal Policy Optimization (PPO), Soft Actor-Critic (SAC), and other foundational Deep Reinforcement Learning algorithms, Stable Baselines3 serves as the backbone for thousands of academic papers, benchmark suites (e.g., Gymnasium, PettingZoo), and commercial RL prototypes. Today's maintenance log demonstrates a crucial step in keeping the RL ecosystem reliable: by actively rejecting automated, template-skipping PRs, the maintainers ensure that the library's documentation and core code remain strictly human-vetted, preventing subtle bugs or hallucinated documentation from entering production RL pipelines.

</details>