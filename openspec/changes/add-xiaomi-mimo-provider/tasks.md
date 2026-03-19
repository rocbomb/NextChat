## 1. 常量和枚举定义

- [x] 1.1 在 `app/constant.ts` 添加 `XIAOMI_BASE_URL` 常量（`https://api.xiaomimimo.com/v1`）
- [x] 1.2 在 `app/constant.ts` 的 `ApiPath` 枚举中添加 `XiaomiMiMo = "/api/xiaomimimo"`
- [x] 1.3 在 `app/constant.ts` 的 `ServiceProvider` 枚举中添加 `XiaomiMiMo = "XiaomiMiMo"`
- [x] 1.4 在 `app/constant.ts` 的 `ModelProvider` 枚举中添加 `XiaomiMiMo = "XiaomiMiMo"`
- [x] 1.5 在 `app/constant.ts` 添加 `XiaomiMiMo` 配置对象（ExampleEndpoint, ChatPath）
- [x] 1.6 在 `app/constant.ts` 添加 `xiaomiMiMoModels` 模型列表数组
- [x] 1.7 在 `app/constant.ts` 的 `DEFAULT_MODELS` 数组中添加小米 MiMo 模型映射

## 2. 客户端实现

- [x] 2.1 创建 `app/client/platforms/xiaomimimo.ts`，实现 `LLMApi` 接口
- [x] 2.2 实现 `path()` 方法，解析 `accessStore.xiaomimimoUrl` 作为 base URL
- [x] 2.3 实现 `chat()` 方法，复用 OpenAI 兼容的流式请求逻辑
- [x] 2.4 实现 `extractMessage()`、`speech()`、`usage()`、`models()` 方法

## 3. 服务端代理

- [x] 3.1 创建 `app/api/xiaomimimo.ts`，实现服务端请求代理
- [x] 3.2 实现 OPTIONS 预检、认证鉴权、请求转发、流式响应处理
- [x] 3.3 在 `app/api/[provider]/[...path]/route.ts` 注册路由处理器

## 4. 配置存储

- [x] 4.1 在 `app/store/access.ts` 添加 `DEFAULT_XIAOMIMIMO_URL` 常量
- [x] 4.2 在 `app/store/access.ts` 的 `DEFAULT_ACCESS_STATE` 添加 `xiaomimimoUrl` 和 `xiaomimimoApiKey` 字段
- [x] 4.3 在 `app/store/access.ts` 添加 `isValidXiaomiMiMo()` 验证方法
- [x] 4.4 在 `app/store/access.ts` 的 `isAuthorized()` 中添加小米 MiMo 判断

## 5. 服务端配置

- [x] 5.1 在 `app/config/server.ts` 的 `ProcessEnv` 类型中添加 `XIAOMIMIMO_URL` 和 `XIAOMIMIMO_API_KEY`
- [x] 5.2 在 `app/config/server.ts` 添加 `isXiaomiMiMo` 检测标识和配置返回值

## 6. 认证处理

- [x] 6.1 在 `app/api/auth.ts` 的 `switch (modelProvider)` 中添加 `ModelProvider.XiaomiMiMo` case

## 7. UI 设置

- [x] 7.1 在 `app/components/settings.tsx` 添加小米 MiMo 配置组件（Endpoint + API Key 输入）
- [x] 7.2 在 `app/locales/cn.ts` 添加小米 MiMo 的 i18n 文案
- [x] 7.3 在 `app/locales/en.ts` 添加小米 MiMo 的 i18n 文案

## 8. ClientApi 注册

- [x] 8.1 在 `app/client/api.ts` 导入 `XiaomiMiMoApi`
- [x] 8.2 在 `app/client/api.ts` 的 `ClientApi` 构造函数 switch 中添加 `ModelProvider.XiaomiMiMo` case
- [x] 8.3 在 `app/client/api.ts` 的 `getClientApi()` 中添加 `ServiceProvider.XiaomiMiMo` case
- [x] 8.4 在 `app/client/api.ts` 的 `getHeaders()` 中添加小米 MiMo 的 API Key 逻辑
