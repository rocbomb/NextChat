# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NextChat is a cross-platform AI chat assistant supporting multiple LLM providers (OpenAI, Anthropic Claude, Google Gemini, DeepSeek, Azure, Baidu, ByteDance, Alibaba, Tencent, Moonshot, iFlytek, XAI, ChatGLM, SiliconFlow, 302.AI). Built with Next.js 14, React 18, and Tauri for desktop apps.

## Development Commands

```bash
# Install dependencies
yarn install

# Development server (runs mask build watcher + Next.js dev)
yarn dev

# Production build
yarn build

# Linting
yarn lint

# Run tests
yarn test           # Interactive watch mode
yarn test:ci        # CI mode

# Desktop app (Tauri)
yarn app:dev        # Development
yarn app:build      # Build desktop app

# Build masks (prompt templates)
yarn mask
```

## Environment Setup

Create `.env.local` at project root with required API keys. See `.env.template` for all available options. Key variables:

- `OPENAI_API_KEY` - OpenAI API key
- `CODE` - Access password (comma-separated)
- `BASE_URL` - Override OpenAI API URL
- `ENABLE_MCP=true` - Enable MCP functionality

## Architecture

### Directory Structure

```
app/
├── api/           # Next.js API routes (one file per provider)
├── client/        # LLM client implementations
│   ├── api.ts     # Unified ClientApi interface
│   ├── controller.ts  # Request abort controllers
│   └── platforms/ # Provider-specific API clients (openai.ts, anthropic.ts, etc.)
├── store/         # Zustand state stores
│   ├── chat.ts    # Chat sessions & messages (largest store)
│   ├── config.ts  # App configuration
│   ├── access.ts  # API keys & access control
│   ├── mask.ts    # Prompt templates
│   └── plugin.ts  # Plugin management
├── components/    # React components
├── mcp/           # Model Context Protocol implementation
├── masks/         # Built-in prompt templates (built to public/masks.json)
├── locales/       # i18n translation files
├── utils/         # Utility functions
└── constant.ts    # App-wide constants, enums, paths
```

### State Management

Uses Zustand with IndexedDB persistence via `createPersistStore` in `app/utils/store.ts`. All stores use this pattern for consistent persistence and hydration.

### Multi-Provider Pattern

Each LLM provider has:
1. Client implementation in `app/client/platforms/{provider}.ts` implementing `ClientApi` interface
2. API route in `app/api/{provider}.ts` for server-side proxying
3. Provider enum values in `constant.ts` (`ServiceProvider`, `ModelProvider`, `ApiPath`)

Provider selection flows through:
- User config → `useAppConfig` store → `ModelProvider` → `getClientApi()` in `app/client/api.ts`

### Adding New LLM Provider

1. Add constants to `app/constant.ts` (base URL, ApiPath enum)
2. Create `app/client/platforms/{provider}.ts` implementing ClientApi
3. Create `app/api/{provider}.ts` API route
4. Register in `app/client/api.ts` `getClientApi()` switch
5. Add to `ModelProvider` enum in `constant.ts`

### Masks (Prompt Templates)

Built-in templates in `app/masks/` compiled by `yarn mask` to `public/masks.json`. Runtime custom masks stored via `useMaskStore`.

### Plugins System

OpenAPI-based plugins stored in `usePluginStore`. Uses `openapi-client-axios` to parse OpenAPI specs and generate function tools for LLM tool calling.

### MCP (Model Context Protocol)

Server-side MCP client in `app/mcp/`. Enable via `ENABLE_MCP=true` env var. Actions in `mcp/actions.ts`, client management in `mcp/client.ts`.

## Path Alias

TypeScript configured with `@/*` mapping to project root. Use `@/app/...` imports.

## Testing

Tests located in `test/` directory. Uses Jest with jsdom. Run single test file:

```bash
yarn test -- path/to/test.test.ts
```

## Key Files

- `app/constant.ts` - Central constants, paths, enums, default models
- `app/client/api.ts` - Unified LLM client interface
- `app/store/chat.ts` - Core chat state (sessions, messages, streaming)
- `app/components/chat.tsx` - Main chat UI component (~74KB, largest component)
- `app/components/settings.tsx` - Settings UI (~64KB)
