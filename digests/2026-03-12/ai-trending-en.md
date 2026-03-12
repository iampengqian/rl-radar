# AI Open Source Trends 2026-03-12

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-03-12 03:19 UTC

---

# AI Open Source Ecosystem Trends Report (2026-03-12)

## 1. Today's Highlights
The GitHub trending landscape today is overwhelmingly dominated by the "Agentic Agency" paradigm. The top spot belongs to **agency-agents**, a shell-based framework promising a complete AI agency with specialized, personality-driven experts, signaling a shift from single-task bots to complex role-playing agent teams. Closely following is **MiroFish**, a "Swarm Intelligence Engine" for universal prediction, and **NousResearch/hermes-agent**, emphasizing agents that "grow" with the user. This trend suggests the community is moving rapidly from static LLM interactions toward dynamic, self-organizing multi-agent systems. Additionally, **Alibaba's Page-Agent** highlights a specific focus on natural language control for web GUIs, bridging the gap between agents and browser automation.

---

## 2. Top Projects by Category

### 🤖 AI Agents / Workflows
*Primary Focus: Multi-agent orchestration, autonomous workflows, and browser control.*

- **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** [Shell] ⭐6,167 (+6,167 today)
  - **Why:** Today’s #1 project. It introduces a "complete AI agency" concept with specialized personas (e.g., "frontend wizards," "reality checkers"), reflecting the massive demand for production-ready multi-agent team structures.

- **[666ghj/MiroFish](https://github.com/666ghj/MiroFish)** [Python] ⭐2,907 (+2,907 today)
  - **Why:** A trending "Universal Swarm Intelligence Engine." It applies swarm theory to general prediction tasks, offering an alternative architecture to standard transformer-based reasoning.

- **[alibaba/page-agent](https://github.com/alibaba/page-agent)** [TypeScript] ⭐1,215 (+1,215 today)
  - **Why:** A major release from Alibaba. It acts as an in-page GUI agent, allowing developers to control web interfaces via natural language rather than brittle selectors.

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐1,234 (+1,234 today)
  - **Why:** From the creators of the Hermes model series. This project focuses on "agentic growth," implying mechanisms for long-term memory and adaptive skill acquisition.

- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐1,483 (+1,483 today)
  - **Why:** Described as an "agentic skills framework," it likely provides the methodology and scripts required to give LLMs actionable capabilities in a dev environment.

- **[virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund)** [Python] ⭐636 (+636 today)
  - **Why:** A perennial favorite that continues to trend. It demonstrates a multi-agent collaboration setup specifically tailored for financial analysis and trading logic.

### 🔧 AI Infrastructure
*Primary Focus: Evaluation, observability, and deployment tooling.*

- **[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)** [TypeScript] ⭐718 (+718 today)
  - **Why:** An essential tool for the "Agent Era." It provides pentesting and vulnerability scanning specifically for AI agents and RAGs, addressing the growing security concerns around autonomous systems.

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐164,889 (Topic Search)
  - **Why:** The standard for local LLM inference. It remains a backbone technology, recently expanding support to newer models like Kimi-K2.5 and GLM-5.

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** [Python] ⭐72,883 (Topic Search)
  - **Why:** High-throughput inference engine. It is the go-to solution for production deployments of high-volume agent workloads.

### 📦 AI Applications
*Primary Focus: End-user tools, chat interfaces, and vertical implementations.*

- **[fishaudio/fish-speech](https://github.com/fishaudio/fish-speech)** [Python] ⭐313 (+313 today)
  - **Why:** State-of-the-art (SOTA) open-source Text-to-Speech. As voice interfaces for agents become critical, low-latency, high-quality TTS engines like Fish Speech are seeing renewed interest.

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** [TypeScript] ⭐41,277 (Topic Search)
  - **Why:** A robust desktop client that unifies access to various LLMs and agents, serving as a "command center" for power users.

### 🔍 RAG / Knowledge
*Primary Focus: Memory, context management, and retrieval.*

- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** [Python] ⭐13,161 (Topic Search)
  - **Why:** Billed as an "Engine for AI Agent Memory." It addresses the critical bottleneck in current agents: retaining and retrieving context efficiently over long sessions.

- **[run-llama/llama_index](https://github.com/run-llama/llama_index)** [Python] ⭐47,603 (Topic Search)
  - **Why:** The leading framework for connecting custom data to LLMs, now heavily pivoting towards "Document Agents" that can parse and reason over complex files.

- **[yichuan-w/LEANN](https://github.com/yichuan-w/LEANN)** [Python] ⭐10,295 (Topic Search)
  - **Why:** A research gem (MLsys2026) focused on "RAG on Everything" with 97% storage savings, crucial for running efficient local agents.

---

## 3. Trend Signal Analysis

**1. The Rise of the "Agency" Framework**
The most significant signal today is the explosive growth of **msitarzewski/agency-agents** and **NousResearch/hermes-agent**. We are witnessing a transition from "Chatbots" (single turn) to "Agentic Workflows" (tool use) and now to **"Agencies"** (multi-agent teams with distinct personalities and specializations). The fact that a Shell-script based framework (`agency-agents`) is outpacing Python/TypeScript projects suggests that developers are prioritizing *process orchestration* and *system integration* over raw model logic.

**2. Swarm Intelligence as a Counter-Current**
While transformers dominate, **MiroFish** (Swarm Intelligence) trending at #2 indicates a growing interest in non-transformer architectures for problem-solving. Swarms offer robustness and distributed computing benefits that centralized LLMs struggle with. This aligns with the "Agentic" trend but approaches it from a bio-inspired computing angle.

**3. GUI Agents are Maturing**
The presence of **Alibaba/page-agent** in the trending list marks a strategic pivot towards "Computer Use" (a la Claude 3.5 Sonnet's computer use). Developers are building agents that don't just browse the web (like **browser-use**) but specifically manipulate DOM elements within a page to execute software workflows.

**4. Security & Ops for Agents**
**promptfoo**'s re-emergence in trending highlights a maturing market. As agents get more autonomy, the need for "Red teaming," "pentesting," and deterministic evaluation of non-deterministic systems becomes the primary concern for enterprise adoption.

---

## 4. Community Hot Spots

*   **Role-Based Agent Systems:** With **agency-agents** trending, developers should look into "Persona Prompting" and frameworks that allow distinct agent roles (e.g., a "Project Manager" agent supervising a "Coder" agent).
*   **Swarm Engine Architecture:** Keep an eye on **MiroFish**. If it delivers on "predicting anything" via swarm logic, it could become a staple for forecasting and complex decision-making agents alongside traditional LLMs.
*   **Browser/DOM Manipulation:** **Page-Agent** and **browser-use** indicate that "Natural Language to GUI" is the next major interface disruption. Building wrappers for existing web apps is a high-value area right now.
*   **Agent Memory Engines:** **Cognee** and **claude-mem** are solving the "amnesia" problem of LLMs. Implementing a robust memory layer (Vector DB + Knowledge Graph) is becoming the differentiator between a toy agent and a useful one.