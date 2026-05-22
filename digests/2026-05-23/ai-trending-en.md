# AI Open Source Trends 2026-05-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-05-22 22:17 UTC

---

# AI Open-Source Ecosystem Trend Report (2026-05-23)

## Step 1 & 2: AI Filtering & Categorization
*General tools without direct AI application (e.g., Odoo, yt-dlp) have been excluded. The remaining projects have been categorized into primary functional groups.*

---

## 1. Today's Highlights

Today's GitHub trending data reveals a massive paradigm shift toward **Context Engineering and Agentic Orchestration**. The AI community is hyper-focused on optimizing how coding agents understand codebases and maintain persistent memory, as evidenced by the explosive popularity of knowledge graph builders like [Understand-Anything](https://github.com/Lum1104/Understand-Anything) and [codegraph](https://github.com/colbymchenry/codegraph). The Model Context Protocol (MCP) ecosystem is maturing rapidly, with official tooling bridging browser environments and enterprise frameworks to AI agents. Meanwhile, the open-source agent framework space is experiencing intense competition, led by NousResearch's [hermes-agent](https://github.com/NousResearch/hermes-agent) which focuses on scalable multi-agent swarms and self-learning architectures.

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Dev Tools, MCPs, Inference Engines)
*   [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) ⭐+3688 today | Pre-indexed code knowledge graphs for AI coding agents (Claude Code, Codex, Cursor) that drastically reduce token usage and tool calls.
*   [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) ⭐+2556 today | The official Anthropic-managed directory for high-quality Claude Code plugins, signaling standardized agentic extensions.
*   [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) ⭐+499 today | An MCP server that gives coding agents direct control over Chrome DevTools, expanding web automation capabilities.
*   [dotnet/skills](https://github.com/dotnet/skills) ⭐+391 today | Official repository providing specialized skills to assist AI coding agents with .NET and C# development.
*   [ollama/ollama](https://github.com/ollama/ollama) ⭐172,039 total | The go-to local inference engine, now seamlessly supporting the latest frontier models like Kimi-K2.5 and GLM-5.
*   [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐80,746 total | The industry standard for high-throughput, memory-efficient LLM inference and serving.

### 🤖 AI Agents / Workflows
*   [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐163,081 total | The leading agent orchestration platform featuring self-learning swarm intelligence and native Claude/Codex integration.
*   [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) ⭐62,038 total | A highly popular nano "agent harness" demonstrating how to build robust agentic loops from scratch using just Bash.
*   [ruvnet/ruflo](https://github.com/ruvnet/ruflo) ⭐54,166 total | An enterprise-grade platform for deploying multi-agent swarms and autonomous conversational workflows.
*   [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐188,523 total | An agent harness performance optimization system adding instincts, memory, and security to CLI coding agents.
*   [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) ⭐31,674 total | The defining frontend stack for building generative UI and cross-framework agents (React/Angular).

### 📦 AI Applications
*   [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) ⭐+1391 today | Turns any code into an interactive, queryable knowledge graph, dominating today's trending for developer productivity.
*   [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) ⭐+455 today | A highly optimized terminal AI coding agent featuring hash-anchored edits and LSP integration.
*   [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) ⭐38,489 total | A zero-cost LLM-driven application for multi-market (A/H/US) intelligent stock analysis and dashboarding.
*   [browser-use/browser-use](https://github.com/browser-use/browser-use) ⭐95,129 total | A wildly popular application making websites accessible for AI agents via seamless web automation.

### 🧠 LLMs / Training
*   [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) ⭐+988 today | A trending educational repo focused on building and shipping core AI engineering components from the ground up.
*   [huggingface/transformers](https://github.com/huggingface/transformers) ⭐160,879 total | The foundational model-definition framework for state-of-the-art machine learning.
*   [jingyaogong/minimind](https://github.com/jingyaogong/minimind) ⭐50,415 total | An incredibly fast approach to training a 64M-parameter LLM completely from scratch in just 2 hours.
*   [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐95,391 total | The quintessential educational resource for understanding LLM architecture and training.

### 🔍 RAG / Knowledge
*   [zilliztech/claude-context](https://github.com/zilliztech/claude-context) ⭐11,525 total | A vital vector-search MCP that turns an entire codebase into RAG context for coding agents.
*   [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐77,499 total | A persistent memory layer capturing agentic sessions and injecting relevant context into future runs.
*   [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐81,050 total | A cutting-edge RAG engine that deeply integrates OCR and agent capabilities for superior LLM context.
*   [safishamsi/graphify](https://github.com/safishamsi/graphify) ⭐51,758 total | Transforms diverse data (code, SQL, images) into queryable knowledge graphs for AI assistants.

---

## 3. Trend Signal Analysis

Today's GitHub data strongly signals a shift from foundational model training toward **Context Engineering and Agentic Tooling**. The most explosive growth is occurring in tools that act as "glue" between LLMs and development environments. Projects like [codegraph](https://github.com/colbymchenry/codegraph) and [Understand-Anything](https://github.com/Lum1104/Understand-Anything) are gaining massive traction by solving the "context window bottleneck"—pre-processing codebases into knowledge graphs to reduce token consumption and API costs for coding agents. 

Furthermore, we are seeing the **rapid maturation of the Model Context Protocol (MCP)**. The presence of official tools like [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) and [claude-plugins-official](https://github.com/anthropics/claude-plugins-official) indicates that major tech players are standardizing how agents interact with external systems. 

In the model layer, inference engines like [ollama](https://github.com/ollama/ollama) are updating rapidly to host newly released open-weight models (e.g., Kimi-K2.5, GLM-5), showing that local-first execution remains a priority. Meanwhile, the appearance of **"Agent Harnesses"** (like [ECC](https://github.com/affaan-m/ECC) and [learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)) highlights a new architectural direction: rather than relying purely on an LLM provider's backend, developers are building lightweight orchestration layers that optimize agent memory, security, and tool-calling efficiency at the client level.

## 4. Community Hot Spots

*   **Agentic Memory & Persistence:** Projects like [claude-mem](https://github.com/thedotmack/claude-mem) and [graphify](https://github.com/safishamsi/graphify) highlight a strong developer need for AI agents that remember past sessions and self-correct over time.
*   **Graph-Based Context:** [codegraph](https://github.com/colbymchenry/codegraph) gaining nearly 4,000 stars in a single day proves that treating code as a graph is currently perceived as the most effective way to navigate complex codebases.
*   **MCP Standardization:** The rise of dedicated MCP bridges (e.g., Chrome DevTools, .NET skills) means developers should start treating MCP integration as a mandatory skillset for AI application building.
*   **Agent Security & Performance:** [affaan-m/ECC](https://github.com/affaan-m/ECC) crossing 188k total stars indicates that as agents become more autonomous, the community is heavily prioritizing harness security, instinctual tooling, and performance optimization.