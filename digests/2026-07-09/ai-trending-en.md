# AI Open Source Trends 2026-07-09

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-08 22:18 UTC

---

Here is the structured AI Open Source Trends Report based on the GitHub data from 2026-07-09.

### 1. Today's Highlights
Today's open-source AI landscape is overwhelmingly dominated by the **"Agentic Skills & Context Optimization"** meta-trend. The GitHub trending list is exploding with modular skill packs (like [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)) and context/tooling managers designed to give coding agents (Claude Code, Codex, Cursor) persistent memory and system-level access. There is a massive push towards **local, zero-dependency AI infrastructure**, evidenced by high-growth projects like [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) and [alibaba/zvec](https://github.com/alibaba/zvec) shaking up the vector DB and memory space. Furthermore, the community is aggressively reverse-engineering frontier models, with massive engagement around leaked system prompts ([asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)) to understand how industry leaders structure their agent logic.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure (frameworks, SDKs, dev tools, sandbox)
*   **[TencentCloud/CubeSandbox](https://github.com/TencentCloud/CubeSandbox)** | Rust | ⭐0 (+555 today)
    A lightweight, instant, and secure sandbox environment specifically built for executing AI agent code safely.
*   **[alibaba/zvec](https://github.com/alibaba/zvec)** | C++ | ⭐14,365 (+370 today)
    A lightning-fast, in-process vector database written in C++, offering a highly efficient alternative to heavy, distributed vector engines.
*   **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** | TypeScript | ⭐0 (+351 today)
    Delivers fully local, long-term memory for AI agents via a 4-tier pipeline with zero external API dependencies.
*   **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** | C# | ⭐0 (+1712 today)
    A purpose-built CLI suite allowing AI agents to natively read, edit, and automate Word, Excel, and PowerPoint files without requiring Office installed.
*   **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)** | TypeScript | ⭐0 (+20 today)
    A Model Context Protocol (MCP) server providing AI assistants with terminal control, file system search, and diff editing.

#### 🤖 AI Agents / Workflows (frameworks, automation, skills)
*   **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** | JavaScript | ⭐0 (+1322 today)
    A collection of production-grade engineering skills explicitly designed to augment AI coding agents.
*   **[obra/superpowers](https://github.com/obra/superpowers)** | Shell | ⭐0 (+999 today)
    An agentic skills framework and software development methodology that successfully translates human workflows into agent capabilities.
*   **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** | Python | ⭐211,544 [topic:llm]
    A highly adaptable, open-source agent framework designed to grow and scale alongside user requirements.
*   **[affaan-m/ECC](https://github.com/affaan-m/ECC)** | JavaScript | ⭐227,398 [topic:llm]
    A performance optimization system for agent harnesses, bringing skills, instincts, and memory to Claude Code, Codex, and Cursor.
*   **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** | JavaScript | ⭐86,791 [topic:llm]
    A highly popular Claude Code skill that drastically cuts token usage (by 65%) by compressing prompts into highly efficient formats.

#### 📦 AI Applications (vertical solutions, specific tools)
*   **[ruvnet/RuView](https://github.com/ruvnet/RuView)** | Rust | ⭐0 (+793 today)
    Turns commodity WiFi signals into real-time spatial intelligence and vital sign monitoring without requiring cameras or video pixels.
*   **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** | Python | ⭐0 (+948 today)
    An application that downloads, frame-extracts, and transcribes videos, seamlessly handing the synthesized context to Claude for analysis.
*   **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** | Python | ⭐0 (+373 today)
    A specialized agent application that autonomously researches and synthesizes summaries across Reddit, X, YouTube, HN, and Polymarket.
*   **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | Python | ⭐37,747 [topic:ai-agent]
    An AI solution that generates fully editable PowerPoint presentations (with native shapes and charts) from any document.

#### 🧠 LLMs / Training (models, prompt resources, evaluation)
*   **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** | JavaScript | ⭐0 (+1226 today)
    A massive, regularly updated repository of extracted system prompts from frontier models like Claude Fable 5, ChatGPT 5.5 Thinking, and Gemini 3.5 Flash.
*   **[ollama/ollama](https://github.com/ollama/ollama)** | Go | ⭐175,750 [topic:llm]
    The go-to local inference engine supporting 2026 frontier and open-weight models like Kimi-K2.6, GLM-5.1, and DeepSeek.
*   **[open-compass/opencompass](https://github.com/open-compass/opencompass)** | Python | ⭐7,173 [topic:llm-model]
    A comprehensive LLM evaluation platform supporting a massive range of models over 100+ datasets.

#### 🔍 RAG / Knowledge (retrieval, memory layers, context management)
*   **[topoteretes/cognee](https://github.com/topoteretes/cognee)** | Python | ⭐27,355 [topic:vector-db]
    An open-source AI memory platform utilizing self-hosted knowledge graph engines to give agents persistent, long-term memory.
*   **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** | JavaScript | ⭐86,449 [topic:rag]
    A context management tool that captures agent session data, compresses it, and injects it as relevant context into future sessions.
*   **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** | Python | ⭐57,872 [topic:rag]
    A library and proxy that compresses tool outputs and RAG chunks by up to 95% before they reach the LLM, saving massive amounts of tokens.
*   **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** | Python | ⭐80,390 [topic:rag]
    A coding assistant skill that transforms local folders, codebases, and database schemas into queryable knowledge graphs.

---

### 3. Trend Signal Analysis
Today's GitHub trending data reveals a distinct paradigm shift: **the era of "Agentic Skills & Context Optimization" has fully arrived.** Instead of building monolithic AI models, the open-source community is hyper-focused on augmenting CLI-based coding agents (like Claude Code and Codex) with modular, swappable "skills." Projects like *addyosmani/agent-skills* and *obra/superpowers* are gaining massive traction, proving that developers want to customize agent behaviors dynamically.

A major new tech stack direction emerging is **Extreme Context Compression & Local Memory**. With API costs and context windows being primary bottlenecks, tools that optimize tokens (like *caveman*, which compresses prompts, and *headroom*, which compresses tool outputs) are scaling to hundreds of thousands of stars. Furthermore, we see a hard pivot away from cloud APIs toward zero-dependency local stacks. Tencent's local agent memory pipeline and Alibaba's C++ in-process vector DB (*zvec*) highlight an industry demand for secure, instantly deployable, enterprise-grade AI infrastructure that doesn't rely on external endpoints. 

These trends are deeply connected to recent LLM releases, specifically Anthropic's Claude "Fable/Opus" series and OpenAI's "ChatGPT 5.5 Thinking." The massive popularity of *asgeirtj/system_prompts_leaks* shows developers reverse-engineering these proprietary models to understand their tool-calling and reasoning structures. Consequently, open-source frameworks like *ECC* and *Hermes Agent* are rapidly integrating these leaked blueprints to create highly optimized, self-evolving agent harnesses.

---

### 4. Community Hot Spots
*   **Agent Skills Ecosystem:** The explosive growth of projects like [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) and [obra/superpowers](https://github.com/obra/superpowers) signals that "prompt engineering" has evolved into "skill engineering." Developers should watch this space for standardized ways to package and share agent capabilities.
*   **Extreme Context Compression:** With projects like [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) and [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) hitting massive star counts, context-window optimization is the most valuable currency in the agent space right now.
*   **Local-First Agent Memory:** The battle for persistent agent memory is heating up. [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) and [topoteretes/cognee](https://github.com/topoteretes/cognee) offer compelling, zero-dependency alternatives to cloud-based memory layers.
*   **Physical/Domestic AI Agents:** [ruvnet/RuView](https://github.com/ruvnet/RuView) (WiFi spatial intelligence) and [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) (Office automation for agents) show that open-source AI is successfully breaking out of the browser to manipulate physical signals and local enterprise files.