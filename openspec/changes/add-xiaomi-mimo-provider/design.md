## Context

NextChat 已有完善的多 Provider 架构，每个 LLM Provider 包含：
1. 客户端实现（`app/client/platforms/{provider}.ts`）
2. 服务端代理路由（`app/api/{provider}.ts`）
3. 配置存储（`app/store/access.ts`、`app/config/server.ts`）
4. 认证处理（`app/api/auth.ts`）
5. UI 设置组件（`app/components/settings.tsx`）

小米 MiMo 的 API 完全兼容 OpenAI 格式（`/v1/chat/completions`），因此可以直接复用 DeepSeek 等已有 OpenAI 兼容 Provider 的实现模式。

## Goals / Non-Goals

**Goals:**
- 实现小米 MiMo 作为完整的 LLM Provider，与现有 Provider 体验一致
- 支持 streaming 和非流式调用
- 支持通过环境变量和 UI 配置 API Key 和 Endpoint

**Non-Goals:**
- 不实现语音（TTS）功能
- 不实现独立的模型列表查询 API（使用常量定义的模型列表即可）
- 不修改现有的 Provider 架构模式

## Decisions

### 1. 复用 DeepSeek 模式
**选择**：以 DeepSeek 的实现为模板，因为两者都是 OpenAI 兼容 API，实现最简洁。
**原因**：MiMo 的 `base_url`、`chat.completions.create` 调用方式与 DeepSeek 完全一致，无需特殊处理。

### 2. Base URL 默认值
**选择**：默认端点为 `https://api.xiaomimimo.com/v1`
**原因**：与用户提供的一致，作为客户端默认值，用户也可以在设置中自定义。

### 3. 模型列表
**选择**：暂定义 mimo-v2-pro 为主要模型
**原因**：当前用户提供的示例中使用此模型，后续可根据小米官方文档扩展。

### 4. Provider 命名
**选择**：`XiaomiMiMo`（枚举值）/ `xiaomimimo`（路径和 ID）
**原因**：遵循项目现有命名惯例，如 `DeepSeek`/`deepseek`、`SiliconFlow`/`siliconflow`。

## Risks / Trade-offs

- [模型列表可能不完整] → 后续可根据小米官方文档补充更多模型
- [API 格式可能有细微差异] → 基于 OpenAI 兼容标准，如有差异可通过配置调整

## Migration Plan

无需数据迁移，纯新增功能。部署后用户在设置中选择 XiaomiMiMo Provider，配置 API Key 即可使用。

## Open Questions

- 小米是否提供模型列表查询 API？
- 是否有免费额度/rate limit 限制？
