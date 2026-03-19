## Why

将界面上的 "面具" 术语重命名为 "智能助手"，使产品术语更加贴近用户认知，"智能助手" 比 "面具" 更能准确描述这一功能的价值——为用户提供预设的智能对话角色。

## What Changes

- 将中文界面中所有 "面具" 相关文本替换为 "智能助手"
- 主要涉及 `app/locales/cn.ts` 简体中文翻译文件
- 可能涉及 `app/locales/tw.ts` 繁体中文翻译文件（面具 → 智慧助手）

## Capabilities

### New Capabilities

无新增功能。

### Modified Capabilities

- `i18n-translations`: 修改中文翻译术语，将 "面具" 相关条目改为 "智能助手"

## Impact

- **受影响文件**:
  - `app/locales/cn.ts` - 简体中文翻译
  - `app/locales/tw.ts` - 繁体中文翻译（可选）
- **不影响代码逻辑**: 仅涉及 UI 展示文本的变更
- **不影响其他语言**: 英文及其他语言保持 "Mask" 不变
