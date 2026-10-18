# VGO 3.0 全局工程宪法 (Engineering Constitution)

本文件是 VGO 3.0 平台的最高工程指导原则。所有 AI 代理、开发人员必须严格遵守。

## 第一部分：核心纪律 (The Core Laws)
- **D9 终端事实原则**：终端命令的输出是唯一事实来源。任何假设、记忆、口头结论都必须被终端命令验证。
- **D10 代码语言规范**：所有代码标识符、注释、Git Commit 必须使用英文。用户界面的多语言文案必须通过 `i18n` 处理，严禁在组件中硬编码中文。
- **PC-2 执行原则**：任何删除、归档、合并操作前，必须先运行引用检查、dry-run，并确保有回滚路径。

## 第二部分：架构避坑指南 (Architecture Pitfalls)
1. **Next.js 服务端读取限制**：
   - 禁止在带有 `"use client"` 的文件中导出常量并给服务端组件（如 `generateMetadata`）使用，会导致运行时报错。
   - 解决方案：纯数据必须抽离到无 `"use client"` 的独立文件（如 `src/lib/translations.ts`）。
2. **Vercel 部署拦截防范**：
   - 构建前必须确保 ESLint 0 Error（运行 `ESLINT_USE_FLAT_CONFIG=false ./node_modules/.bin/eslint src`）。
   - 必须使用无已知高危漏洞的 Next.js 版本（目前锁定 15.5.7，修复 CVE-2025-66478）。
3. **Termux 环境限制 (KP-9)**：
   - 手机 Termux 仅用于写代码、Git 提交和 `tsc` 类型检查。
   - 严禁在 Termux 上运行 `next build` 或 `next dev`，因缺少原生 SWC 绑定，会触发 `disablePageConfig` 崩溃。
   - 部署与构建必须在云端（Vercel）进行。

## 第三部分：密钥与资产安全 (Security)
1. 所有 `.env` 密钥文件必须双层加密，存放于手机存储的 `/storage/emulated/0/vgo-secrets-vault/`。
2. 解密逻辑：先输入【外层密码】解 layer2，再输入【内层密码】解 layer1。
3. 严禁将任何密码、Token 写入代码库、Chat 对话或明文文档。

## 第四部分：相关规则索引
- 代码审计规则：`docs/CODE_AUDIT_RULES.md` (CA 规则)
- 故障模式知识库：`docs/KNOWN_PITFALLS.md` (KP 规则)
- 平台路线图：`docs/PROJECT_ROADMAP.md` (WBS 阶段)
