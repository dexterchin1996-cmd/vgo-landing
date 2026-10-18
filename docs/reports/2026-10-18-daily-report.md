# VGO 3.0 平台重构 · 今日工作报告

**日期：** 2026-10-18
**执行人：** 技术总监（AI）+ 项目负责人
**证据来源：** 全部为终端输出

---

## 一、执行摘要

完成 4 个部署单元版本控制止血、1 次安全事件处置、1 套工程规范体系建立。共 12 个 commit，分布 3 个仓库，全部已推送。

| 指标 | 数量 |
|---|---|
| 处理仓库 | 3 |
| 产生 commit | 12 |
| 建立工程文档 | 7 |
| 修复技术债务 | 6（T1/T5/T13/T19/T23/T25） |
| 归档组件 | 1 |
| 加密保护密钥文件 | 7 |
| 安全修复代码点 | 5 |

---

## 二、项目范围重新定义

### 2.1 纠正

初始定义为"官网重构"，取证后确认平台为 7 个部署单元。

| # | 部署单元 | 位置 | 技术栈 | 规模 |
|---|---|---|---|---|
| 1 | 后端 API | server/ + 根 package.json | Fastify 5 + Supabase | 3.5M |
| 2 | 官网 | website/ | Next.js 15 + Tailwind 4 | 575M |
| 3 | 客户端 App | vgo-service mode=customer | Next.js + PWA | 947M（共用） |
| 4 | 商家端 App | mode=merchant | 同上 | 同上 |
| 5 | 师傅端 App | mode=tech | 同上 | 同上 |
| 6 | 运营后台 | mode=hub（含 admin 9 页） | 同上 | 同上 |
| 7 | 移动运营 | mode=mobile-hub | 同上 | 同上 |

### 2.2 后台定位定稿

hub 与 mobile-hub 不是重复，是两种工作场景。

| 项 | hub（Operations Console） | mobile-hub（Ops Mobile） |
|---|---|---|
| 场景 | 桌面，长时间操作 | 手机，碎片时间 |
| 功能 | 完整（19 页） | 审批+监控+速查（8 页） |
| 原则 | 逻辑唯一，界面分化 | 同左 |

admin（9 页）确认为 hub 子路由，非独立部署。

---

## 三、各单元止血详情

### 3.1 website

| 项 | 结果 |
|---|---|
| 分支 | release/3.0（worktree ~/vgo-3.0） |
| 远程 | vgo-landing，已同步 |
| 冻结 tag | v2.x-final-20261018 → 974317a |
| 全量备份 | 8.1M tar.gz，恢复演练 269=269 |
| 架构 | 21 路由 / 90 源文件 / 40+ 组件 |

### 3.2 vgo-service

| 项 | 结果 |
|---|---|
| 初始化 | git init → bf78e4e（584 文件，57,046 行） |
| 清理 | T19：85 个 .bak 与 old_backup/ 移出追踪 |
| 基线 tag | v1.0-baseline-20261018、v1.0-baseline-clean-20261018 |
| 远程 | 私有仓库，main = bb6cc5d |
| 台账 | vgo-service/docs/PROJECT_REGISTER.md |

### 3.3 vgo-malaysia（根仓库）

| 项 | 结果 |
|---|---|
| 分支 | audit/vgo-source-20261017 |
| 远程 | 已推送，HEAD = 240cec5 |
| 处理改动 | 30 → 0 |
| 结构变更 | vgo-service 移出父仓库（491 文件），消除双重管理 |

---

## 四、安全事件处置（T23）

### 4.1 事件

vgo-service/.env.production 被父仓库追踪，.gitignore 第 82 行显式放行。历史提交 4 次，存在于 origin/main。

### 4.2 处置

| 步骤 | 结果 |
|---|---|
| 移出追踪 | git rm --cached，commit 9b245d5 |
| 修正 gitignore | 删除放行规则 |
| 密钥保险箱 | 7 文件双层 AES-256，存 /storage/emulated/0/vgo-secrets-vault/ |
| 验证 | B_OK + A_OK + MATCH |
| 明文清理 | 7 明文 + 7 layer1 已删 |
| 提示词卡 | 保险箱外，kW@ / CkWid |

### 4.3 决策

暂不换密钥。触发换新：①上线前 ②加第二人协作 ③仓库转公开。

### 4.4 教训（KP-8）

3 次命令失误：git commit -- path 无法提交删除状态；sed 双占位符同值；exit 1 导致 logout。已修正，规则写入 PC-2。

---

## 五、代码质量修复

### 5.1 安全修复（T25）

server/server.js 5 处 Math.random() → crypto.randomInt()：

| 行 | 用途 |
|---|---|
| 3234 | 订单 ID 兜底 |
| 3793 | OTP 验证码 |
| 3910 | 重置密码 OTP |
| 5838 | 师傅占位手机号 |
| 9519 | 订单确认 PIN |

剩余 9 处经核实为非敏感（日志 ID、时间戳偏移）。commit 240cec5。

### 5.2 i18n 修复（T13）

PainPointWall.tsx 重写：6 处硬编码中文 → 全部 t()；新增 8 key × 3 语 = 24 条；零非 ASCII；tsc 退出码 0；保留滚动视差，两层文案。

### 5.3 配置修复

| 编号 | 内容 |
|---|---|
| T1 | eslint-config-next 16.3.6 → 15.5.4，lock 同步 |
| T5 | .env.example 入库，gitignore 例外到末尾 |

---

## 六、资产盘点（R1）

37 个组件全扫。

| 文件 | 判定 | 依据 |
|---|---|---|
| PainPoints.tsx | 归档 | CA-5：4 张场景图与 PainPointWall 一致 |
| AboutVGO.tsx | 保留 | 独有数字墙（T12） |
| ComingSoon.tsx | 保留 | 未来功能占位（R8） |
| ParticleField.tsx | 保留 | 被移除的 Canvas 背景（T14） |
| ServiceModal.tsx | 保留 | 未接线，仍活跃修改（R9） |

关键纠正：初始判断 5 个可归档，经 CA-1 七种检测 + CA-5 等价性核查后仅 1 个。避免 4 个功能丢失。

---

## 七、工程规范体系（新建）

| 文件 | 内容 | 位置 |
|---|---|---|
| PROJECT_REGISTER.md | D1-D10、G1-G7、T1-T25、R1-R12 | vgo-3.0/docs/ |
| CODE_AUDIT_RULES.md | CA-1 至 CA-20，7 组 | vgo-3.0/docs/ |
| KNOWN_PITFALLS.md | KP-1 至 KP-8 | vgo-3.0/docs/ |
| PC-1_PRE_ACTION_CHECKLIST.md | 5 项初版 | vgo-service/docs/ |
| PC-2_PRE_ACTION_CHECKLIST.md | 5 阶段 17 项 + 失败处理 | vgo-service/docs/ |
| ARCHITECTURE_TREE_FULL.txt | 269 文件全覆盖 | vgo-3.0/docs/ |
| FILE_INVENTORY.txt | 资产盘点底稿 | vgo-3.0/docs/ |

PC-2 五阶段：前置确认、安全核查、执行规范、验证、收尾。
核心原则：终端是唯一事实来源（D9）。

---

## 八、第一轮核验（G1-G7）

| 缺口 | 问题 | 修复 |
|---|---|---|
| G1 | tag 打早 | 重打至 974317a |
| G2 | 备份不含最终提交 | 重打 8.1M |
| G3 | 未做恢复演练 | 验证 269=269 |
| G4 | 未推送 | release/3.0 = 974317a |
| G5 | 地图覆盖 55% | 全量 269/269 |
| G6 | 配置未验证 | 4 配置全过 |
| G7 | 软链接性质未定 | 均指向项目内 |

7/7 全部结案。

---

## 九、commit 清单

### vgo-3.0（release/3.0）

| commit | 内容 |
|---|---|
| 0d4792b | refactor: i18n 合并 + PainPoints 归档 |
| 5ae408d | chore: eslint 对齐 + .env.example |
| b6f4894 | fix: .env.example 追踪例外 |
| c2b6549 | docs: 故障模式知识库 |

### vgo-service（main）

| commit | 内容 |
|---|---|
| bf78e4e | chore: initial commit（584 文件） |
| 54ce754 | chore: T19 清理 .bak（-10,271 行） |
| 9488315 | docs: PC-1/PC-2 清单 |
| 057e60c | fix: 反引号修复 + KP-8 |
| bb6cc5d | docs: 项目登记册 |

### vgo-malaysia（audit/vgo-source-20261017）

| commit | 内容 |
|---|---|
| 9b245d5 | security: 移出 .env.production |
| 9f54f1b | chore: vgo-service 移出父仓库 |
| ce14157 | chore: 忽略 skills-lock.json |
| 91cb15b | docs: 资产与文档入库 |
| 240cec5 | security: Math.random → crypto.randomInt |

---

## 十、遗留事项

### 10.1 待处理

| 编号 | 内容 | 阶段 |
|---|---|---|
| T16 | src/app 21 页面硬编码中文 i18n 化 | 阶段4 |
| T18 | appMode.ts 版权改 VGO | 阶段3 |
| T15 | navigation/site.config 零引用确认 | 阶段4 |
| R12 | hub/mobile-hub 合并落地 | 待排期 |
| T23 | git 历史清理（条件未到） | 延后 |
| — | server/ 建独立仓库 | 待排期 |
| — | 4 个保留组件产品决策 | 待用户 |

### 10.2 技术债务

| 编号 | 内容 |
|---|---|
| T2 | krackedmaps ^0.2.0 来源不明 |
| T3 | npm audit 8 漏洞（7 high / 1 critical） |
| T4 | sharp 在 Termux 兼容性 |
| T10 | 图片商用授权 |
| T11 | PDPA 合规声明 |

---

## 十一、经验教训

### 11.1 有效做法

1. PC-2 检查清单：dry-run 发现实际 85 个文件而非预估 40，避免遗漏。
2. CA-5 等价性核查：阻止 4 个有独有功能的组件被误删。
3. D9 终端事实来源：多次发现台账与终端不符。
4. 小步提交：每个 commit 只做一件事。

### 11.2 失误记录

| 失误 | 已登记 |
|---|---|
| 解密顺序写反 | KP-8 |
| sed 双占位符同值 | PC-2 R1 |
| exit 1 导致 logout | PC-2 附录 |
| git commit -- path 无法提交删除 | PC-2 R4 |
| 未查 index 就提交 | PC-2 R3 |
| 未先问提示词就写脚本 | 本报告 |

### 11.3 新增规则

- R1：P0-1 区分 M / ?? / D
- R3：commit 前确认 git diff --cached 只含目标
- R4：git rm --cached 后清空 index 再精确暂存
- KP-8：反引号用 heredoc + String.fromCharCode 规避

---

## 十二、当前系统状态

### 12.1 版本控制

| 仓库 | 本地 | 远程 | 分支 | 工作区 |
|---|---|---|---|---|
| vgo-3.0 | 是 | 是 | release/3.0 | 干净 |
| vgo-service | 是 | 是（私有） | main | 干净 |
| vgo-dev | 是 | 是 | audit/vgo-source-20261017 | 0 |

### 12.2 密钥安全

| 项 | 状态 |
|---|---|
| 保险箱 | 7 个 .layer2 + README |
| 位置 | /storage/emulated/0/vgo-secrets-vault/ |
| 解密验证 | B_OK + A_OK + MATCH |
| 提示词卡 | 保险箱外 |
| git 隔离 | 不在任何仓库 |
| 运行时明文 | 4 个保留，600 权限 |

### 12.3 备份

| 项 | 位置 |
|---|---|
| 2.x 全量 | vgo-2.x-baseline-20261018-1419.tar.gz（129M） |
| 3.0 全量 | vgo-3.0-baseline-20261018-1439.tar.gz（8.1M） |
| vgo-service | GitHub 私有仓库 |
| vgo-malaysia | GitHub audit/ 分支 |

---

## 十三、明日建议

| 顺序 | 任务 | 预估 |
|---|---|---|
| 1 | server/ 建独立仓库 + 清理 4 个 .bak | 20 分钟 |
| 2 | T16 试点：about 页面 i18n | 40 分钟 |
| 3 | T18：修正 appMode.ts 版权 | 5 分钟 |
| 4 | T15：data 零引用二次确认 | 15 分钟 |

---

## 十四、结论

今日核心价值：

1. 4 个单元从无版本控制/双重管理变为独立仓库 + 远程备份 + 干净基线。
2. 1 次密钥泄露风险完成处置，7 个密钥文件双层加密。
3. 5 处 OTP/PIN 安全漏洞修复，从可预测改为密码学安全。
4. 建立 3 套工程规范，后续操作有据可依。
5. 资产盘点避免 4 个功能组件误删。

当前状态：所有代码有版本控制、有远程备份、有台账、有规范。地基干净，可进入下一阶段。

报告完毕。
