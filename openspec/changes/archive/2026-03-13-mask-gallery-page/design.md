## Context

NextChat 使用 HashRouter 进行路由管理，路由定义在 `app/constant.ts` 的 `Path` 枚举中。当前已有 `/masks` 路由用于管理智能助手（编辑、删除等），但缺少一个简洁的展示页面。

智能助手数据来源：
- `useMaskStore.getAll()` - 获取所有智能助手（用户自定义 + 内置）
- 内置智能助手 ID 从 `BUILTIN_MASK_ID` (100000) 开始

## Goals / Non-Goals

**Goals:**
- 创建独立的智能助手画廊页面
- 以卡片列表形式展示所有可用智能助手
- 点击卡片跳转到 `/#/new-chat?mask={id}` 开始对话

**Non-Goals:**
- 不实现智能助手的编辑功能（已有 `/masks` 页面）
- 不实现搜索或筛选功能（保持简洁）
- 不修改现有 `/masks` 页面

## Decisions

### 1. 路由路径选择
- **决定**: 使用 `/mask-gallery` 作为新页面路径
- **理由**: 与现有 `/masks` 区分，语义清晰

### 2. 页面布局
- **决定**: 使用简单的列表布局展示智能助手卡片，全屏显示（隐藏侧边栏）
- **理由**: 与现有 UI 风格保持一致，复用 `styles["mask-item"]` 等样式。全屏展示提供更好的浏览体验。

### 3. 跳转方式
- **决定**: 使用 `window.location.hash` 直接跳转
- **理由**: 项目使用 HashRouter，需要通过 hash 路由跳转

### 4. 侧边栏处理
- **决定**: 在 mask-gallery 页面完全隐藏侧边栏
- **理由**: 提供沉浸式的智能助手浏览体验，类似 Auth 页面的处理方式

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|----------|
| 与现有 /masks 页面功能重叠 | 明确定位：/mask-gallery 是展示入口，/masks 是管理入口 |
