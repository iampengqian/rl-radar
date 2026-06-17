# AI Open Source Trends 2026-06-18

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-17 22:30 UTC

---

Here is the AI Open Source Trends Report for 2026-06-18.

### 1. Today's Highlights
Today's GitHub trending landscape is overwhelmingly dominated by the **"Agentic Skills" and "Agent Harness" ecosystem**, specifically optimizations and frameworks built around AI coding assistants like Claude Code and Codex. We are seeing a massive shift from foundational model training to **maximizing agent performance** through context management, token reduction, and skill libraries. RAG (Retrieval-Augmented Generation) is undergoing a structural evolution, moving from simple vector retrieval to persistent **knowledge graphs** and cross-session memory systems. Additionally, specialized vertical agents for web scraping, video production, and financial trading are reaching production-grade maturity.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
*   **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** | ⭐ N/A (+718 today)
    A high-performance code intelligence MCP server that indexes codebases into a persistent knowledge graph, achieving sub-millisecond queries with 99% fewer tokens.
*   **[ollama/ollama](https://github.com/ollama/ollama)** | ⭐ 174,398 | *Topic: llm*
    The leading local inference engine, now heavily trending as it adds support for frontier open-weight models like Kimi-K2.6, GLM-5.1, and gpt-oss.
*   **[vllm-project/vllm](https://github.com/vllm-project/vllm)** | ⭐ 83,191 | *Topic: llm*
    The industry-standard high-throughput and memory-efficient inference and serving engine for large language models.
*   **[Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy)** | ⭐ 507 | *Topic: llm-model*
    A universal LLM gateway offering OpenAI/Anthropic-compatible endpoints with multi-provider translation and intelligent load-balancing.

#### 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
*   **[obra/superpowers](https://github.com/obra/superpowers)** | ⭐ N/A (+1,205 today)
    An agentic skills framework and software development methodology that is rapidly gaining traction as a practical way to manage AI coding workflows.
*   **[affaan-m/ECC](https://github.com/affaan-m/ECC)** | ⭐ 217,262 | *Topic: llm*
    An agent harness performance optimization system that adds skills, instincts, memory, and security to AI coding assistants like Claude Code and Cursor.
*   **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** | ⭐ 33,094 (+1,154 today) | *Topic: ai-agent*
    A CLI tool that gives AI agents the ability to read and search the entire internet (Twitter, Reddit, YouTube, etc.) with zero API fees.
*   **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** | ⭐ 74,055 | *Topic: llm*
    A brilliantly absurd but highly effective Claude Code skill that cuts 65% of tokens by forcing the agent to communicate in condensed, "caveman" syntax.
*   **[zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)** | ⭐ 45,383 | *Topic: ai-agent*
    A highly extensible, lightweight open-source super AI assistant and agent harness that self-evolves with memory and multi-model support.

#### 📦 AI Applications (specific apps, vertical solutions)
*   **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** | ⭐ N/A (+71 today)
    The world's first open-source, agentic video production system featuring 12 pipelines and over 500 agent skills.
*   **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** | ⭐ 42,954 | *Topic: ai-agent*
    An LLM-powered A/H/US stock analysis system that aggregates market data and real-time news to generate automated trading dashboards.
*   **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | ⭐ 28,810 | *Topic: ai-agent*
    A specialized agent that converts any document into a fully editable, native PowerPoint presentation with AI voiceovers.
*   **[OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB)** | ⭐ 69,331 | *Topic: ml*
    A comprehensive financial data platform tailored for human analysts, quants, and newly integrated AI agents.

#### 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
*   **[google-research/timesfm](https://github.com/google-research/timesfm)** | ⭐ N/A (+712 today)
    Google's pretrained time-series foundation model, signaling a major trend of applying LLM architectures to non-text numerical forecasting.
*   **[huggingface/transformers](https://github.com/huggingface/transformers)** | ⭐ 161,674 | *Topic: ml*
    The foundational model-definition framework for state-of-the-art machine learning in text, vision, audio, and multimodal.
*   **[alexzhang13/rlm](https://github.com/alexzhang13/rlm)** | ⭐ N/A (+37 today)
    A general plug-and-play inference library for Recursive Language Models (RLMs), hinting at new architectural shifts beyond standard Transformers.
*   **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** | ⭐ 264 | *Topic: llm-model*
    A reliable, minimal, and scalable library focused on the stable pretraining of foundation and world models.

#### 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)
*   **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** | ⭐ 82,982 | *Topic: rag*
    A persistent context layer that captures everything an agent does during sessions, compresses it, and injects it into future interactions.
*   **[safishamsi/graphify](https://github.com/safishamsi/graphify)** | ⭐ 68,683 | *Topic: rag*
    An AI coding assistant skill that turns local code, schemas, docs, and media into a queryable knowledge graph.
*   **[topoteretes/cognee](https://github.com/topoteretes/cognee)** | ⭐ 17,883 | *Topic: vector-db*
    An open-source AI memory platform that provides self-hosted, long-term knowledge graph memory across agent sessions.
*   **[alibaba/zvec](https://github.com/alibaba/zvec)** | ⭐ 10,802 | *Topic: vector-db*
    A lightweight, lightning-fast, in-process vector database optimized for embedded AI use cases.

---

### 3. Trend Signal Analysis
**Explosive Attention on "Agent Harnesses" & Skill Frameworks:**
The most explosive community attention today is focused on optimizing AI coding assistants (like Claude Code and Codex). Rather than building new base models, developers are creating "harnesses" (like [affaan-m/ECC](https://github.com/affaan-m/ECC)) and "skills" (like [obra/superpowers](https://github.com/obra/superpowers)). The ecosystem views the AI coding agent not as a static chat interface, but as a modular virtual machine that requires memory, token optimization, and injected methodologies. The viral traction of [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman), which saves tokens by forcing AI to output compressed "caveman" text, highlights how seriously the community is treating context window economics.

**The Evolution of RAG to Knowledge Graphs:**
Vector databases are no longer the sole standard for retrieval. We are seeing a distinct shift toward persistent memory and knowledge graphs. Tools like [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) and [safishamsi/graphify](https://github.com/safishamsi/graphify) emphasize relational context over pure semantic similarity.

**Connection to Recent Industry Events:**
The data heavily reflects the industry's shift toward the **Model Context Protocol (MCP)** and the dominance of advanced CLI-based coding agents. The explicit mention of compatibility with "Claude Code, Codex, OpenCode" across dozens of top repositories proves that Anthropic and OpenAI's recent CLI agent releases have successfully spawned a massive secondary ecosystem of plug-and-play developer tools.

---

### 4. Community Hot Spots
*   **Agentic Skills Marketplaces:** Projects like [obra/superpowers](https://github.com/obra/superpowers) and [mattpocock/skills](https://github.com/mattpocock/skills) (which gained a massive +1,570 stars today) show that developers want pre-configured, shareable prompt/methodology libraries for their local agents.
*   **Universal Context & Memory Layers:** Managing state across sessions is the current holy grail of agent dev. [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) and [topoteretes/cognee](https://github.com/topoteretes/cognee) are providing critical infrastructure to make agents "remember" past interactions efficiently.
*   **Zero-API Web Scraping for Agents:** Giving agents autonomous web-browsing capabilities without paying enterprise API fees is highly sought after. [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) (+1,154 stars today) is riding this wave perfectly.
*   **Beyond-Text Foundation Models:** [google-research/timesfm](https://github.com/google-research/timesfm) (+712 stars today) is a strong signal that the "Foundation Model" playbook is successfully migrating from NLP into time-series and numerical forecasting.