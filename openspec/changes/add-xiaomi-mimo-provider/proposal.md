## Why

小米 MiMo 是小米自研的大语言模型，提供 OpenAI 兼容的 API 接口。为了让更多用户能够在 NextChat 中使用小米的模型服务，需要添加对小米 MiMo 的支持。

## What Changes

- 新增小米 MiMo 作为 LLM Provider
- 支持通过 API Key 认证调用 `https://api.xiaomimimo.com/v1` 端点
- 支持流式响应（streaming）和非流式响应
- 在设置界面中提供 API Key 和 Endpoint 配置项
- 支持 mimo-v2-pro 等模型

## Capabilities

### New Capabilities

- `xiaomi-mimo-provider`: 小米 MiMo 作为完整的 LLM Provider 集成，包括客户端实现、服务端代理、配置存储和设置 UI

### Modified Capabilities

- （无）该变更不修改现有 Capability 的需求，仅新增 Provider

## Impact

- 新增文件：`app/client/platforms/xiaomimimo.ts`、`app/api/xiaomimimo.ts`
- 修改文件：`app/constant.ts`、`app/client/api.ts`、`app/store/access.ts`、`app/config/server.ts`、`app/api/auth.ts`、`app/api/[provider]/[...path]/route.ts`、`app/components/settings.tsx`、`app/locales/cn.ts`、`app/locales/en.ts`
- 无新增外部依赖
- API 接口兼容 OpenAI，复用现有的流式处理逻辑
