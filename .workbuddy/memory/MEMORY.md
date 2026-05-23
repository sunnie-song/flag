# Project Memory

## 小程序图片引用规则

微信小程序 WXSS 中的 `background-image` **不支持本地路径**（如 `/pages/xxx/images/bg.png`）。
只能使用以下三种方式：
1. **远程网络图片**（https:// 开头）
2. **base64 编码**
3. **`<image>` 标签**（推荐用于本地图片）

如果需要把远程图片改成本地，必须同时把 CSS 中的 `background-image` 方案改为 `<image>` 标签方案。
