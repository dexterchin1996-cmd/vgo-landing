# VGO 3.0 核心工程资产总索引 (Asset Index)

本文件是 VGO 3.0 平台所有经验、规范、技术技巧、工作流和待办清单的总目录。

## 1. 工程纪律与规范 (Rules & Standards)
- [全局工程宪法](ENGINEERING_CONSTITUTION.md) : 核心纪律(D9/D10)、Next.js避坑、密钥安全规范。
- [代码审计规则](CODE_AUDIT_RULES.md) : 20条 CA 规则，防止误删代码（零引用≠无用）。
- [前置执行清单](PC-2_PRE_ACTION_CHECKLIST.md) : 5阶段17项，任何删除操作前的强制检查。
- [项目登记册](PROJECT_REGISTER.md) : D1-D10 决策、G1-G7 核验、R1-R15 需求池。

## 2. 经验与技术技巧 (Experience & Pitfalls)
- [故障知识库 (KP)](KNOWN_PITFALLS.md) : 9大技术坑记录（KP-9 Termux编译限制、Bash反引号等）。
- 核心突破记录：服务端 `generateMetadata` 读取客户端常量失败，已通过拆分 `translations.ts` 解决。
- Vercel 部署排障 SOP：清理 WASM 包、升级 Next.js 15.5.7 绕过 CVE 拦截、ESLint 0 Error 强制门禁。

## 3. 开发计划与待办清单 (Roadmap & Backlog)
- [全流程工作清单 (WBS)](PROJECT_ROADMAP.md) : 涵盖基建、视觉、转化、本地化、上线 5 大阶段。
- 下一阶段重点 (阶段2) : UI/UX 视觉重构、Hero 首屏设计、响应式微交互。
- 遗留技术债待办 (见项目登记册) :
  - R13: 招募页表单及API对接
  - T38: 马来文深度本地化审校
  - T28: 补齐LICENSE版权文件

## 4. 自动化工具 (Automation)
- [每日状态核对脚本](../scripts/vgo-check.sh) : 4大仓库状态、WBS进度、资产完整性、防跳跃校验。
