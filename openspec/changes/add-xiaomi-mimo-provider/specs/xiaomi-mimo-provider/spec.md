## ADDED Requirements

### Requirement: Xiaomi MiMo Provider 可用
系统 SHALL 将小米 MiMo 注册为可用的 LLM Provider，出现在 Provider 选择列表中。

#### Scenario: Provider 出现在列表中
- **WHEN** 用户打开设置界面的 Provider 选择器
- **THEN** 列表中包含 "XiaomiMiMo" 选项

### Requirement: API Key 配置
系统 SHALL 允许用户通过设置界面或环境变量配置小米 MiMo 的 API Key。

#### Scenario: 通过 UI 配置 API Key
- **WHEN** 用户选择 XiaomiMiMo Provider 并输入 API Key
- **THEN** API Key 保存到 access store，后续请求携带该 Key

#### Scenario: 通过环境变量配置 API Key
- **WHEN** 环境变量 `XIAOMIMIMO_API_KEY` 已设置
- **THEN** 服务端使用该 Key 作为系统级 API Key，无需用户手动配置

### Requirement: Endpoint 配置
系统 SHALL 允许用户自定义小米 MiMo 的 API 端点地址。

#### Scenario: 使用默认端点
- **WHEN** 用户未配置自定义端点
- **THEN** 系统使用默认端点 `https://api.xiaomimimo.com/v1`

#### Scenario: 自定义端点
- **WHEN** 用户在设置中输入自定义端点地址
- **THEN** 系统使用用户配置的端点发送请求

### Requirement: 流式对话
系统 SHALL 支持通过小米 MiMo 进行流式对话。

#### Scenario: 发起流式对话
- **WHEN** 用户选择 XiaomiMiMo Provider 并发送消息
- **THEN** 系统以流式方式接收模型响应，实时显示在聊天界面

### Requirement: 非流式对话
系统 SHALL 支持通过小米 MiMo 进行非流式对话。

#### Scenario: 发起非流式对话
- **WHEN** 用户配置为非流式模式并发送消息
- **THEN** 系统等待完整响应后一次性显示

### Requirement: 认证鉴权
系统 SHALL 支持服务端认证逻辑，正确传递小米 MiMo 的 API Key。

#### Scenario: 服务端使用系统 API Key
- **WHEN** 服务端配置了 `XIAOMIMIMO_API_KEY` 环境变量
- **THEN** 代理请求时使用系统 API Key 代替客户端 Key

#### Scenario: 服务端未配置 API Key
- **WHEN** 服务端未配置环境变量
- **THEN** 代理请求时使用客户端传递的 API Key
