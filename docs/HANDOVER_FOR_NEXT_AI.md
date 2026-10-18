# VGO 3.0 交接说明（重建版）

> **文件性质**：本文件为重建版。原件缺失（2026-10-18 经 ls 与 find 双证不存在）。
> **重建依据**：docs/ENGINEERING_CONSTITUTION.md、docs/PROJECT_REGISTER.md、
> docs/CODE_AUDIT_RULES.md、docs/PC-2_PRE_ACTION_CHECKLIST.md、
> docs/KNOWN_PITFALLS.md、docs/PROJECT_ROADMAP.md、
> docs/VGO_3.0_MASTER_PLAN.md、docs/reports/2026-10-18-daily-report.md。
> **不冒充原件**：若日后找到原件，以原件为准，本文件归档。

## 1. 项目定位

VGO Malaysia 上门服务平台，7 个部署单元：
1. 后端 API（server/，Fastify 5 + Supabase）
2. 官网（website/，Next.js 15 + Tailwind v4）
3. 客户端 App（vgo-service mode=customer）
4. 商家端 App（mode=merchant）
5. 师傅端 App（mode=tech）
6. 运营后台（mode=hub，含 admin 子路由）
7. 移动运营（mode=mobile-hub）

## 2. 核心铁律（不可违背）

- **D9 终端事实**：终端输出是唯一事实来源，台账只是记录。两者不符以终端为准。
- **D10 语言规范**：代码标识符、注释、Commit 全英文；用户文案必须走 i18n，禁组件内硬编码。
- **PC-2 执行原则**：删除/归档/合并前必须查引用、dry-run、留回滚路径。
- **KP-9 环境红线**：Termux 只写代码/Git/tsc，严禁本地 next dev / next build，构建走 Vercel。
- **CA-1**：零引用不等于无用，归档前查 7 种隐形引用。
- **CA-2**：归档不删除，用 git mv 进 _archive/，保留历史。

## 3. 环境与工具约束

- 开发终端：手机 Termux（aarch64，缺原生 SWC）
- 临时脚本：放 .tmp-* 目录，已 gitignore
- 备份：放 .bak-visual/ 或 _archive/，已 gitignore
- 禁 exit 1（Termux 闪退）；长文本用单引号 heredoc（KP-8）
- 类型检查：./node_modules/.bin/tsc --noEmit
- 禁止在 node_modules 外使用 npx next 等本地 bin 裸命令（KP-6）

## 4. 当前基线（2026-10-18）

- 4 仓库全部独立并推送：vgo-3.0（release/3.0）、vgo-service（main）、
  vgo-server、vgo-malaysia（audit/vgo-source-20261017）
- 工作区全绿，ESLint 0 error，Next.js 15.5.7
- i18n：translations.ts 三语（zh/en/ms），17 个 layout 已用 generateMetadata + cookie
- 安全：7 密钥双层 AES-256 存 /storage/emulated/0/vgo-secrets-vault/
- 5 处 OTP/PIN 已改 crypto.randomInt

## 5. 文档索引（读什么、何时读）

| 场景 | 必读 |
|---|---|
| 任何改动前 | PC-2_PRE_ACTION_CHECKLIST.md |
| 删除/归档前 | CODE_AUDIT_RULES.md（CA-1 至 CA-20） |
| 踩坑排查 | KNOWN_PITFALLS.md（KP-1 至 KP-9，KP-8 见 PC-2 附录） |
| 决策与债务 | PROJECT_REGISTER.md（D/G/T/R 编号体系） |
| 阶段推进 | PROJECT_ROADMAP.md |
| 视觉重构 | taste-skill、emil-design-eng、ui-ux-pro-max |

## 6. 已知技术债（现行）

- T3 npm audit 8 漏洞（7 high / 1 critical）→ 阶段 5
- T2 krackedmaps ^0.2.0 来源不明 → 阶段 3
- T4 sharp 在 Termux 兼容性未验证 → 阶段 4
- T5 3.0 无 .env 文件 → 阶段 3
- T10 图片商用授权未确认 → 阶段 5
- T11 PDPA 合规未核 → 阶段 5
- T15 navigation.ts / site.config.ts 零引用待 CA-1 二次确认
- T16 src/app 21 页面硬编码中文 → 阶段 4 系统性 i18n 化
- T23 git 历史含旧密钥 → 上线前 / 加人 / 转公开时清理
- T28 三仓库无 LICENSE（主体：Ventus Reflexology）
- PainPointWall 遗留：t(item.sceneKey) 变量传参类型安全待 tsc 复验

## 7. 遗留需求池

- R8 ComingSoon 未来功能占位
- R9 ServiceModal 未接线
- R12 hub / mobile-hub 合并（需产品决策）
- R13 招募页表单闭环（阶段 3）
- T38 马来文深度本地化审校（阶段 4）

## 8. 工作流 SOP

1. 开机体检：./scripts/vgo-check.sh
2. 读本文件 + PROJECT_ROADMAP
3. 按 WBS 阶段推进，不跳步
4. 每步：专业判断 → 取证 → 执行 → 验证 → 台账回填
5. 每完成核心任务：更新 PROJECT_REGISTER.md

## 9. 交接注意事项

- 不擅自改 URL、导航标签、表单字段名（破 SEO 与分析）
- 不擅自换品牌色与 Logo
- 密钥暂不轮换（触发条件见 PROJECT_REGISTER T23）
- 任何「以为」先变成终端命令再说

---
重建日期：2026-10-18
重建人：AI 技术总监
