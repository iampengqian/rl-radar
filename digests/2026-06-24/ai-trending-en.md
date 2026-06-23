# AI Open Source Trends 2026-06-24

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-23 22:22 UTC

---

Here is the AI Open Source Trends Report based on GitHub's trending data for June 24, 2026.

### 1. Today's Highlights
Today's GitHub trending landscape is overwhelmingly dominated by the **"Agent Harness" paradigm**—specialized environments, skill libraries, and memory systems designed to supercharge AI coding assistants like Claude Code and Codex CLI. We are seeing a massive shift from building standalone AI applications to optimizing the underlying agentic workflows, specifically focusing on reducing token usage via persistent knowledge graphs and memory compression (e.g., `DeusData/codebase-memory-mcp` and `thedotmack/claude-mem`). Additionally, multimodal agent systems are hitting peak traction, with `calesthio/OpenMontage` turning coding assistants into full video production studios. This suggests the open-source community is laser-focused on creating the "operating systems" for AI developers.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure (Frameworks, SDKs, Inference, Dev Tools)
*   [**garrytan/gstack**](https://github.com/garrytan/gstack) [TypeScript] ⭐0 (+1012 today)
    Garry Tan's exact Claude Code setup featuring 23 opinionated tools acting as virtual C-suite roles for AI-driven engineering.
*   [**DeusData/codebase-memory-mcp**](https://github.com/DeusData/codebase-memory-mcp) [C] ⭐0 (+1299 today)
    A high-performance MCP server indexing codebases into a persistent knowledge graph, enabling sub-millisecond queries and saving 99% on LLM tokens.
*   [**vllm-project/vllm**](https://github.com/vllm-project/vllm) [Python] ⭐83,653 (Topic: llm)
    The industry-standard high-throughput and memory-efficient inference and serving engine for large language models.
*   [**ollama/ollama**](https://github.com/ollama/ollama) [Go] ⭐174,809 (Topic: llm)
    The easiest way to get up and running with frontier models like GPT-5.6, Kimi-K2.6, and local LLMs.

#### 🤖 AI Agents / Workflows (Agent Frameworks, Automation)
*   [**calesthio/OpenMontage**](https://github.com/calesthio/OpenMontage) [Python] ⭐0 (+3590 today)
    The world's first open-source agentic video production system, leveraging 12 pipelines and 500+ agent skills to turn AI coding assistants into a video studio.
*   [**affaan-m/ECC**](https://github.com/affaan-m/ECC) [JavaScript] ⭐220,473 [topic:llm] (+582 today)
    A comprehensive agent harness performance optimization system adding skills, instincts, and memory to CLIs like Claude Code and Cursor.
*   [**bytedance/deer-flow**](https://github.com/bytedance/deer-flow) [Python] ⭐73,865 [topic:llm] (+741 today)
    ByteDance's open-source long-horizon SuperAgent harness capable of researching, coding, and creating over spans of minutes to hours using sandboxes and subagents.
*   [**mukul975/Anthropic-Cybersecurity-Skills**](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) [Python] ⭐0 (+1040 today)
    A massive library of 817 structured cybersecurity skills mapped to MITRE ATT&CK and NIST, built specifically for AI coding agents.
*   [**NousResearch/hermes-agent**](https://github.com/NousResearch/hermes-agent) [Python] ⭐200,864 [topic:ai-agent] (+933 today)
    A highly adaptable, self-evolving open-source agent framework designed to grow continuously with the user's specific workflows.

#### 📦 AI Applications (Vertical Solutions, End-User Apps)
*   [**ZhuLinsen/daily_stock_analysis**](https://github.com/ZhuLinsen/daily_stock_analysis) [Python] ⭐46,964 [topic:ai-agent] (+1121 today)
    An LLM-powered multi-market stock analysis system offering real-time news, dashboards, and zero-cost automated scheduling.
*   [**palmier-io/palmier-pro**](https://github.com/palmier-io/palmier-pro) [Swift] ⭐0 (+1631 today)
    A native macOS video editor explicitly rebuilt from the ground up for AI-driven workflows and integrations.
*   [**jamiepine/voicebox**](https://github.com/jamiepine/voicebox) [TypeScript] ⭐0 (+1042 today)
    An open-source AI voice studio providing seamless cloning, dictation, and audio creation in one package.
*   [**CherryHQ/cherry-studio**](https://github.com/CherryHQ/cherry-studio) [TypeScript] ⭐47,716 [topic:ai-agent]
    A unified AI productivity studio offering smart chat and autonomous agents with access to 300+ frontier LLM assistants.

#### 🔍 RAG / Knowledge (Vector Databases, Memory, Retrieval)
*   [**thedotmack/claude-mem**](https://github.com/thedotmack/claude-mem) [JavaScript] ⭐83,925 [topic:rag]
    A persistent context layer that captures everything an agent does during a session, compresses it, and injects it intelligently into future sessions.
*   [**safishamsi/graphify**](https://github.com/safishamsi/graphify) [Python] ⭐71,163 [topic:rag]
    An AI coding skill that turns any folder of code, schemas, docs, or media into a highly queryable knowledge graph.
*   [**topoteretes/cognee**](https://github.com/topoteretes/cognee) [Python] ⭐20,191 [topic:vector-db]
    An open-source AI memory platform utilizing self-hosted knowledge graphs to give agents persistent long-term memory across sessions.
*   [**VectifyAI/PageIndex**](https://github.com/VectifyAI/PageIndex) [Python] ⭐33,340 [topic:vector-db]
    A document indexing tool pioneering "vectorless," reasoning-based RAG for highly accurate, structure-aware retrieval.

#### 🧠 LLMs / Training (Model Weights, Training Frameworks)
*   [**huggingface/transformers**](https://github.com/huggingface/transformers) [Python] ⭐161,846 [topic:ml]
    The core model-definition framework for state-of-the-art machine learning in text, vision, and audio.
*   [**galilai-group/stable-pretraining**](https://github.com/galilai-group/stable-pretraining) [Python] ⭐266 [topic:llm-model]
    A reliable, minimal, and highly scalable library specifically targeting the pretraining of foundation and world models.
*   [**thinkwee/AgentsMeetRL**](https://github.com/thinkwee/AgentsMeetRL) [HTML] ⭐1,631 [topic:llm-model]
    An awesome list and resource hub dedicated to the rapidly emerging field of Agentic Reinforcement Learning (RL).

---

### 3. Trend Signal Analysis
**The Age of the "Agent Harness" and MCP Ecosystem**
The most explosive signal today is the monumental shift from standalone chat interfaces to **Agent Harnesses and Orchestration**. Projects like `ECC`, `gstack`, and `OpenMontage` aren't just AI apps; they are meta-frameworks designed to optimize, secure, and specialize existing coding assistants (like Claude Code and Cursor). Developers are treating AI coding assistants not as finished products, but as raw reasoning engines that need to be wrapped in virtual "C-suite" tools (e.g., virtual Eng Managers, QA testers). 

**Context Compression & Knowledge Graphs over Vector DBs**
A major paradigm shift is occurring in the RAG/Memory space. We are seeing a distinct move *away* from standard vector databases toward **Knowledge Graphs and MCP (Model Context Protocol) servers**. `DeusData/codebase-memory-mcp` and `graphify` demonstrate that AI agents require structured, persistent relational data rather than just semantic vector chunks. Simultaneously, "context compression" (as seen in `headroom` and `claude-mem`) is becoming a critical infrastructural layer, allowing agents to run complex, multi-hour tasks without hitting token limits.

**Multimodal CLI & Industry Integration**
The open-source community is rapidly bridging the gap between text-based developer tools and rich media. `OpenMontage` using AI coding assistants to generate full video pipelines signals that multimodal capabilities are now deeply integrated into standard developer CLIs. This aligns with the recent releases of frontier models like GPT-5.6 and Kimi-K2.6, pushing open-source developers to build autonomous workflows that seamlessly handle video, voice (`voicebox`), and complex financial analysis (`TradingAgents`).

---

### 4. Community Hot Spots
*   **Agent Performance Optimization (ECC & gstack):** Developers should watch how these projects standardize AI workflows. By adding "instincts," "skills," and memory constraints to raw LLMs, they solve the hallucination and context-loss problems of long-horizon coding tasks.
*   **The MCP (Model Context Protocol) Standard:** With the rise of `claude-context` and `codebase-memory-mcp`, the community is rallying around MCP as the universal bridge to connect AI agents securely to local codebases and external tools without leaking raw data.
*   **Cybersecurity Skills for Agents:** `Anthropic-Cybersecurity-Skills` is a massive leap forward. Mapping 817 security skills to industry frameworks (MITRE ATT&CK) means AI agents can now be deployed as standardized, compliant security analysts rather than just script-kiddie bots.
*   **Agentic Media Generation:** The traction around `OpenMontage` and `palmier-pro` indicates a new trend: using deterministic text-based developer agents to control non-deterministic creative pipelines (video editing), bridging the gap between software engineering and content creation.