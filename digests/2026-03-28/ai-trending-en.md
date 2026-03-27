# AI Open Source Trends 2026-03-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-03-27 22:04 UTC

---

# AI Open Source Ecosystem Trends Report (2026-03-28)

## 1. Today's Highlights
Today's trending data reveals a decisive shift from generalized AI models to **agentic orchestration and specialized skills**. The top trending repositories are overwhelmingly focused on wrapping powerful LLMs (like Claude and GPT) into actionable workflows, exemplified by the surge in **"Deep Research" agents** (e.g., *last30days-skill*) and **developer-centric orchestration tools** (e.g., *oh-my-claudecode*). There is also a notable resurgence in **multimodal productivity**, specifically high-speed voice transcription (*insanely-fast-whisper*) and advanced document OCR (*chandra*), signaling that the infrastructure for "omni-modal" agents is maturing rapidly.

---

## 2. Top Projects by Category

### 🤖 AI Agents / Workflows
*The dominant category today, focusing on autonomy, orchestration, and "skills" for AI agents.*

*   **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [Python] ⭐+2,824 (today)
    *   An AI agent skill that synthesizes grounded research from Reddit, X, YouTube, and HN; representative of the exploding "Deep Research" agent meta.
*   **[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)** [TypeScript] ⭐+1,402 (today)
    *   A "Teams-first" multi-agent orchestration tool for Claude Code, highlighting the trend toward collaborative AI coding squads rather than single assistants.
*   **[virattt/dexter](https://github.com/virattt/dexter)** [TypeScript] ⭐+673 (today)
    *   An autonomous agent specifically designed for deep financial research, illustrating the shift toward domain-specific vertical agents.
*   **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐+2,797 (today)
    *   An agentic skills framework and development methodology; implies a move toward standardizing how agents interact with software development lifecycles.
*   **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** [TypeScript] ⭐29,809 (total)
    *   A frontend infrastructure for agents and Generative UI; critical for developers building user-facing agent applications.

### 🔧 AI Infrastructure
*Foundational tools, runtimes, and interfaces that power AI applications.*

*   **[Vaibhavs10/insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper)** [Jupyter Notebook] ⭐+1,075 (today)
    *   A high-speed voice recognition tool gaining traction as voice becomes a primary interface for modern agents.
*   **[datalab-to/chandra](https://github.com/datalab-to/chandra)** [Python] ⭐+913 (today)
    *   An OCR model specializing in complex tables and handwriting; solves a critical bottleneck in document-based RAG pipelines.
*   **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** [Python] ⭐+320 (today)
    *   Microsoft's new open-source frontier Voice AI, expanding the ecosystem of human-like audio interfaces.
*   **[onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx)** [Python] ⭐+512 (today)
    *   An open-source AI platform (Chat + RAG) designed to work with every LLM, serving as a neutral aggregation layer.

### 🔍 RAG / Knowledge
*Systems focused on memory, retrieval, and contextual understanding.*

*   **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** [Python] ⭐23,123 (total)
    *   A "Vectorless" document index for reasoning-based RAG; suggests a potential counter-trend to pure vector databases using structured reasoning.
*   **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** [Python] ⭐73,201 (total)
    *   A massive toolkit turning PDFs/images into structured data for AI; essential for enterprise RAG adoption.

### 📦 AI Applications
*End-user facing solutions and specific vertical implementations.*

*   **[hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam)** [Python] ⭐+1,546 (today)
    *   Real-time face swap and deepfake tool; continues to hold high popularity in the creative/content generation space.
*   **[saturndec/waoowaoo](https://github.com/saturndec/waoowaoo)** [TypeScript] ⭐10,533 (total)
    *   An industrial-grade AI platform for controllable film production; showcases the maturation of generative video beyond short clips.

### 🧠 LLMs / Training
*Core model training, scientific discovery, and evaluation.*

*   **[SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2)** [Python] ⭐+125 (today)
    *   Automated scientific discovery via agentic tree search; a cutting-edge example of using AI to generate novel research.
*   **[open-compass/opencompass](https://github.com/open-compass/opencompass)** [Python] ⭐6,802 (total)
    *   A standardization platform for LLM evaluation, vital for benchmarking the influx of new open-source models.

---

## 3. Trend Signal Analysis

**1. The Rise of "Synthesis Agents"**
The explosive growth of `last30days-skill` (+2.8k stars) and `dexter` indicates a market pivot. We are moving beyond "Chat with PDF" to **"Synthesis Agents"**—autonomous systems that crawl the live web (Reddit, X, Polymarket) to generate grounded, research-heavy summaries. This suggests users are demanding high-signal, verified intelligence rather than just creative text generation.

**2. The "Claude Code" Ecosystem**
The emergence of `oh-my-claudecode` and `everything-claude-code` signals that **Anthropic's "Claude Code" tooling** is becoming a dominant platform for developer automation. Unlike general-purpose agents, these tools are specifically optimized for coding workflows, indicating a fragmentation of the agent market into "coding agents" vs. "research agents."

**3. Multimodal Bottlenecks are Breaking**
The trending status of `chandra` (OCR) and `insanely-fast-whisper` (Audio) suggests that while LLMs are text-capable, the industry is now aggressively fixing the "input bottleneck." Making handwriting, complex tables, and audio instantly readable by LLMs is the current infrastructure priority to enable true multimodal agents.

---

## 4. Community Hot Spots

*   **Agentic Research Skills:** Developers should watch `last30days-skill` as a template for building "web-aware" research agents that bypass traditional search APIs.
*   **Claude Code Orchestration:** `oh-my-claudecode` is a hot spot for teams looking to implement multi-agent coding workflows using Anthropic's latest models.
*   **Document Parsing:** `chandra` is a key project for anyone struggling with unstructured data (handwriting/tables) in RAG pipelines.
*   **Voice Interfaces:** `VibeVoice` and `insanely-fast-whisper` represent the rapid commoditization of high-speed voice interaction for AI apps.