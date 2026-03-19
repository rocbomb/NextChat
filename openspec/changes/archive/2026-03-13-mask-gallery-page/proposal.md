## Why

提供一个简洁的智能助手（Mask）画廊页面，让用户可以快速浏览所有可用的智能助手并一键启动对话。当前用户需要通过侧边栏或新建聊天页面才能选择智能助手，缺少一个独立的展示页面。

## What Changes

- 新增独立页面 `/mask-gallery`，展示所有可用智能助手列表
- 每个智能助手显示名称、头像和简介
- 点击智能助手后跳转到 `/#/new-chat?mask={id}` 直达链接
- 在路由配置中添加新路径

## Capabilities

### New Capabilities

- `mask-gallery`: 独立的智能助手画廊页面，展示所有可用智能助手列表，支持点击跳转到对话

### Modified Capabilities

无

## Impact

- **新增文件**:
  - `app/components/mask-gallery.tsx` - 画廊页面组件
- **修改文件**:
  - `app/constant.ts` - 添加 `MaskGallery` 路径枚举
  - `app/components/home.tsx` - 添加路由配置
- **依赖**:
  - `app/store/mask.ts` - 获取智能助手列表
  - `app/masks/index.ts` - 内置智能助手数据
