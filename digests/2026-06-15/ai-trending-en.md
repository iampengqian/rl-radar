# AI Open Source Trends 2026-06-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-06-14 22:21 UTC

---

Here is the structured AI Open Source Trends Report based on the GitHub data provided for June 15, 2026.

### 1. Today's Highlights
Today's open-source AI ecosystem is overwhelmingly dominated by the rise of **Agentic Coding** and **AI Skill frameworks**. Instead of standalone chatbots, developers are shifting towards autonomous CLI agents and development harnesses like Claude Code and Codex, along with specialized "skills" to optimize their performance. Security has also taken center stage, highlighted by NVIDIA's `SkillSpector` trending today to audit these agentic tools. Furthermore, infrastructure is evolving to support persistent context and long-term memory, ensuring that AI agents can maintain state across complex, multi-session workflows.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure (Frameworks, SDKs, Inference engines, Dev tools)
*   [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) ⭐0 (+962 today)
    A security scanner designed specifically to detect vulnerabilities and malicious patterns in AI agent skills, addressing the urgent need for safety in autonomous systems.
*   [ollama/ollama](https://github.com/ollama/ollama) ⭐174,163
    The leading local inference engine enabling seamless deployment of frontier models like Kimi-K2.6, GLM-5.1, and DeepSeek on consumer hardware.
*   [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐82,848
    A high-throughput, memory-efficient inference and serving engine that remains the industry standard for deploying LLMs in production.
*   [andrewyng/aisuite](https://github.com/andrewyng/aisuite) ⭐0 (+290 today)
    An incredibly popular, simple, and unified Python interface that allows developers to easily swap and interact with multiple Generative AI providers.

#### 🤖 AI Agents / Workflows (Agent frameworks, Automation, Multi-agent systems)
*   [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐215,448
    The highest-starred project in the 7-day search; an agent harness performance optimization system providing skills, instincts, and security for tools like Cursor and Claude Code.
*   [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) ⭐184,939
    Continuing its massive community momentum, AutoGPT provides accessible, buildable tools for creating autonomous AI agents for everyone.
*   [browser-use/browser-use](https://github.com/browser-use/browser-use) ⭐98,816
    A crucial workflow bridge enabling AI agents to access websites, scrape data, and automate complex online tasks with human-like ease.
*   [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) ⭐72,476
    A highly viral Claude Code skill that drastically reduces token usage (by 65%) by forcing the LLM to communicate via highly compressed "caveman" speech.

#### 📦 AI Applications (Vertical solutions, Specific apps)
*   [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) ⭐86,129
    A sophisticated multi-agent LLM framework designed specifically for financial trading simulation and decision-making.
*   [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) ⭐77,051
    A premier open-source application driving autonomous AI software development, acting as a highly capable digital coworker.
*   [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐27,505
    An application that generates fully editable, native PowerPoint presentations (with audio narration) from any document using AI.

#### 🧠 LLMs / Training (Model weights, Training frameworks)
*   [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) ⭐193,477
    A frontier, self-evolving agent model designed to adapt and grow with the user over time.
*   [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐100,753
    The foundational machine learning framework powering the training of almost all modern open-source neural networks.
*   [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) ⭐598
    A curated resource repository focusing on the increasingly important niche of "machine unlearning" (removing specific data from trained LLMs).

#### 🔍 RAG / Knowledge (Vector DBs, Retrieval-augmented generation)
*   [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐82,716
    A leading open-source RAG engine that fuses advanced retrieval techniques with agent capabilities to create a superior context layer.
*   [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐82,254
    A persistent context layer that captures agent sessions, compresses them, and injects them back into future workflows, solving the "amnesia" problem.
*   [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) ⭐58,095
    A lightning-fast, Rust-based search engine bringing highly scalable, AI-powered hybrid search to applications.

---

### 3. Trend Signal Analysis
The most explosive community attention today is centered squarely on **Agentic Coding Harnesses and AI Skills**. The GitHub search data reveals a massive spike in tools explicitly built for environments like Claude Code, Codex, and Cursor (e.g., `affaan-m/ECC`, `JuliusBrussee/caveman`, and `santifer/career-ops`). Developers are no longer just building chat wrappers; they are creating modular "skills" to optimize token usage, automate complex CLI tasks, and allow different AI models to interface directly with the local filesystem and browser. 

A major new tech direction appearing for the first time is **Persistent Agent Memory & Context Compression**. Projects like `thedotmack/claude-mem` and `topoteretes/cognee` are gaining massive traction, proving that single-session LLMs are no longer sufficient. The ecosystem is building an external "hippocampus" for AI. 

Concurrently, we see the normalization of **Multi-Model Orchestration**. Andrew Ng’s `aisuite` trending today reflects a developer preference for provider-agnostic tools, allowing seamless switching between Claude, GPT, and local models via Ollama. Finally, this shift to autonomous agents has triggered a critical need for **Agentic Security**, underscored by NVIDIA's `SkillSpector` trending with nearly 1,000 stars today. As LLMs gain filesystem and web access, sandboxing and scanning their skills have become an urgent, immediate priority.

---

### 4. Community Hot Spots
*   **Agent Skills Ecosystem (`affaan-m/ECC` & `JuliusBrussee/caveman`):** The community is highly focused on optimizing CLI-based AI coding assistants. `ECC` provides a full performance harness, while `caveman` hilarously solves context limits by forcing LLMs to use fewer tokens via caveman-speak.
*   **Agentic Security (`NVIDIA/SkillSpector`):** As AI agents execute code and scrape the web autonomously, NVIDIA's scanner highlights a new market for open-source security tools that audit third-party agent plugins.
*   **Persistent Agent Memory (`thedotmack/claude-mem` & `mem0ai/mem0`):** A massive hotspot for developers looking to give their AI assistants long-term, cross-session memory without losing privacy or paying for massive prompt repetition. 
*   **Local Multi-Model Management (`andrewyng/aisuite`):** With the constant release of new models (Kimi-K2.6, GLM-5.1), tools that offer a unified API to quickly test and switch between models are seeing a major resurgence.