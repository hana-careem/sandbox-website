---
name: ruflo-toolkit
description: "Reference bundle of 39 Ruflo/claude-flow skills covering AgentDB, swarm orchestration, GitHub automation, hooks, SPARC, and v3 architecture. Use for any Ruflo, claude-flow, or agent-swarm/meta-harness development task."
---

# Ruflo Toolkit

A bundled reference library of the skills shipped inside the [Ruflo](https://github.com/ruvnet/ruflo) (formerly Claude Flow) repository's `.claude/skills/` directory. Ruflo is an agent meta-harness for Claude Code and Codex — it adds specialized agents, swarm coordination, a vector memory system (AgentDB), hooks-based automation, and GitHub workflow tooling on top of Claude Code.

This skill itself does not contain workflow instructions in its body. Instead, it's an index: read this table of contents, pick the reference file(s) that match the task, and load only those into context. Each reference file is a complete, standalone skill (its own frontmatter, instructions, and examples) originally authored for use inside a Ruflo project.

**When to use this skill:** the user is working inside a Ruflo/claude-flow repo, building an agent swarm system, using AgentDB for vector memory or reinforcement learning, wiring up Claude Code hooks, running SPARC-methodology development, or automating GitHub workflows (code review, releases, issue triage) with swarm coordination.

## How to use this index

1. Identify which category below matches the task.
2. Open only the specific `references/<file>.md` file(s) needed — don't load the whole bundle.
3. Follow that file's own instructions as if it were the active skill.
4. If a task spans categories (e.g. "optimize AgentDB and wire it into a swarm"), load each relevant file in turn.

## Reference index by category

### AgentDB (vector memory & learning)
- `references/agentdb-vector-search.md` — semantic search, RAG, similarity matching
- `references/agentdb-memory-patterns.md` — session memory, long-term storage, stateful agents
- `references/agentdb-optimization.md` — quantization, HNSW indexing, batch ops, scaling to millions of vectors
- `references/agentdb-advanced.md` — QUIC sync, multi-database management, distributed systems
- `references/agentdb-learning.md` — 9 reinforcement-learning algorithms (Q-Learning, SARSA, Actor-Critic, Decision Transformer, etc.)
- `references/reasoningbank-agentdb.md` — trajectory tracking, verdict judgment, memory distillation on AgentDB
- `references/reasoningbank-intelligence.md` — adaptive learning, pattern recognition, meta-cognitive systems

### Swarm & agent orchestration
- `references/swarm-orchestration.md` — multi-agent swarms, dynamic topology, parallel task execution
- `references/swarm-advanced.md` — advanced swarm coordination patterns
- `references/hive-mind-advanced.md` — security-auditor-flavored hive-mind coordination
- `references/dual-mode/` — dual-mode agent spawn/coordinate/collect patterns (README.md, dual-spawn.md, dual-coordinate.md, dual-collect.md)
- `references/worker-integration.md` — worker-agent task dispatch and performance tracking
- `references/worker-benchmarks.md` — worker system benchmarking

### Claude Code integration & automation
- `references/hooks-automation.md` — pre/post task hooks, session management, git integration, neural pattern training
- `references/pair-programming.md` — driver/navigator AI pair programming, TDD, real-time verification
- `references/verification-quality.md` — quality verification workflows
- `references/performance-analysis.md` — performance analysis tooling
- `references/stream-chain.md` — stream-JSON chaining for multi-agent pipelines
- `references/skill-builder.md` — generating React components (TypeScript, hooks, tests, Storybook)
- `references/agentic-jujutsu.md` — Jujutsu (jj) version control workflows for agentic development
- `references/browser.md` — AI-optimized browser automation snapshots

### GitHub workflow automation
- `references/github-code-review.md` — swarm-powered code review
- `references/github-project-management.md` — issue swarm handling and task creation
- `references/github-release-management.md` — release workflows, emergency hotfix process
- `references/github-workflow-automation.md` — monorepo coordination, custom swarm actions
- `references/github-multi-repo.md` — multi-repository coordination

### SPARC methodology
- `references/sparc-methodology.md` — Specification, Pseudocode, Architecture, Refinement, Completion workflow

### Flow Nexus platform (cloud swarm/neural deployment)
- `references/flow-nexus-platform.md` — platform overview
- `references/flow-nexus-swarm.md` — cloud-based swarm deployment, event-driven workflows
- `references/flow-nexus-neural.md` — training/deploying neural networks in E2B sandboxes

### Ruflo v3 architecture (internal ADR implementation)
These are specific to implementing or extending Ruflo's own v3 codebase (Domain-Driven Design, ADR-numbered decisions) — use only when the task is modifying Ruflo/claude-flow itself, not for building unrelated products with it.
- `references/v3-ddd-architecture.md` — DDD bounded-context architecture, microkernel pattern
- `references/v3-core-implementation.md` — core module implementation, dependency injection
- `references/v3-integration-deep.md` — agentic-flow integration (ADR-001), de-duplication
- `references/v3-memory-unification.md` — unifying memory systems into AgentDB (ADR-006, ADR-009)
- `references/v3-mcp-optimization.md` — MCP transport layer, connection pooling, sub-100ms targets
- `references/v3-performance-optimization.md` — Flash Attention speedup, search/memory benchmarks
- `references/v3-security-overhaul.md` — security architecture, CVE remediation
- `references/v3-cli-modernization.md` — CLI/hooks modernization
- `references/v3-swarm-coordination.md` — 15-agent hierarchical mesh coordination across ADRs

## Notes on provenance

These reference files were extracted verbatim from a user-supplied copy of the `ruflo-main` repository (`.claude/skills/`). They reflect that project's own internal conventions (its MCP tool names, CLI commands, ADR numbering, hook config) — treat file contents as documentation of how *that* codebase expects things to be done, not as generic best practices to apply outside a Ruflo context.
