# VGO 3.0 · 2026-10-18 详细技术附件

本文件是日报的补充，记录逐项状态、未完成原因、风险细节。
所有结论以终端输出为准（D9）。

---

# 第一部分：完整任务清单

## A. 已完成（有终端证据）

| # | 任务 | 证据 | 仓库 |
|---|---|---|---|
| A01 | website 打冻结 tag | v2.x-final-20261018 → 974317a | vgo-3.0 |
| A02 | website 全量备份 | 8.1M tar.gz，恢复演练 269=269 | - |
| A03 | website 45 改动入库 | commit 974317a | vgo-3.0 |
| A04 | 建 3.0 worktree | ~/vgo-3.0，分支 release/3.0 | - |
| A05 | 结构地图（简版+全量） | 269 文件全覆盖 | vgo-3.0 |
| A06 | 配置可解析校验 | package/tsconfig/next/vercel 全过 | vgo-3.0 |
| A07 | 软链接性质核验 | 2 个均指向项目内 .agents/ | vgo-3.0 |
| A08 | 组件资产盘点 | 37 个全扫 | vgo-3.0 |
| A09 | PainPoints 归档 | git mv 至 _archive/ | vgo-3.0 |
| A10 | PainPointWall i18n 重写 | 8 key × 3 语，零硬编码，tsc 通过 | vgo-3.0 |
| A11 | eslint 版本对齐 | 16.3.6 → 15.5.4，lock 同步 | vgo-3.0 |
| A12 | .env.example 入库 | gitignore 例外到末尾 | vgo-3.0 |
| A13 | CA 审计规则 | CA-1 至 CA-20 | vgo-3.0 |
| A14 | 故障模式库 | KP-1 至 KP-8 | vgo-3.0 |
| A15 | vgo-service 首次入库 | bf78e4e，584 文件 | vgo-service |
| A16 | vgo-service 清理 .bak | 85 文件移出追踪，-10,271 行 | vgo-service |
| A17 | vgo-service 打基线 tag | v1.0-baseline-* 两个 | vgo-service |
| A18 | vgo-service 建远程 | 私有仓库，main=bb6cc5d | vgo-service |
| A19 | PC-1 检查清单 | 5 项 | vgo-service |
| A20 | PC-2 检查清单 | 5 阶段 17 项 | vgo-service |
| A21 | vgo-service 台账 | PROJECT_REGISTER.md | vgo-service |
| A22 | .env.production 移出追踪 | commit 9b245d5 | vgo-malaysia |
| A23 | 密钥保险箱建立 | 7 文件双层 AES-256 | 外部 |
| A24 | 解密验证 | B_OK + A_OK + MATCH | 外部 |
| A25 | 明文清理 | 7 明文 + 7 layer1 删除 | 外部 |
| A26 | 提示词卡 | 保险箱外，kW@ / CkWid | 外部 |
| A27 | vgo-service 移出父仓库 | 491 文件，消除双重管理 | vgo-malaysia |
| A28 | 忽略 skills-lock.json | commit ce14157 | vgo-malaysia |
| A29 | 资产文档入库 | 33 文件，commit 91cb15b | vgo-malaysia |
| A30 | OTP/PIN 安全修复 | 5 处 Math.random → crypto | vgo-malaysia |
| A31 | 根仓库 30 改动清零 | 工作区=0 | vgo-malaysia |
| A32 | 三个仓库全部推远程 | 本地=远程 | 全部 |

## B. 进行中

| # | 任务 | 当前状态 | 阻塞点 |
|---|---|---|---|
| B01 | 日报分发到三仓库 | 报告已写，未提交 | 等待执行 |

## C. 未开始（今日登记）

| # | 任务 | 原因 | 建议时机 |
|---|---|---|---|
| C01 | server/ 建独立仓库 | 密钥事件打断 | 明日第一项 |
| C02 | T16 about 页面 i18n 试点 | 时间不足 | 明日第二项 |
| C03 | T18 修正 appMode 版权 | 低优先级 | 明日第三项 |
| C04 | T15 data 零引用确认 | 需完整 CA-1 检测 | 明日第四项 |
| C05 | R12 hub/mobile-hub 合并 | 需产品决策 | 待定 |
| C06 | T23 git 历史清理 | 触发条件未到 | 上线前 |

---

# 第二部分：未完成项详细分析

## C01 · server/ 建独立仓库

**为什么重要**
server 是下单、派单、付款的中枢。当前靠父仓库追踪，没有独立版本控制，没有独立 tag，没有独立台账。

**当前风险**
1. 4 个 .bak 文件（server.js.bak-before-bayarcash 等）说明改动靠手工备份
2. 无独立基线 tag，无法单独回滚 server 而不影响父仓库
3. PM2 生产进程直接读这个目录，改错无法独立恢复

**解决路径**
1. cd server && git init
2. 建 .gitignore（排除 *.bak、.env*、node_modules）
3. 首次提交
4. 打 tag server-v1.0-baseline
5. 建远程私有仓库
6. 父仓库 git rm --cached server/，加 gitignore

**预计工时** 20 分钟

**风险** 中。PM2 正在运行，需确认不中断服务。

---

## C02 · T16 about 页面 i18n 试点

**为什么重要**
src/app 21 个页面普遍硬编码中文。about 页面是典型：metadata 重复 3 次、内容 10+ 条、values 6 条全硬编码。不改，马来文和英文用户看到的是中文。

**当前问题规模**
- 21 个页面
- 每页平均 10-15 条文案
- 预计 200-300 条 key × 3 语 = 600-900 条翻译

**为什么今天没做**
1. 未定 key 命名规范（about_mission_t 还是 about.mission.title）
2. metadata i18n 需用 generateMetadata，涉及架构改动
3. 需先做 1 个页面验证方案，再批量推广

**试点方案（明日）**
1. 选 about 页面
2. 定 key 命名规范
3. 改 layout.tsx 用 generateMetadata
4. 改 page.tsx 用 useLang
5. 验证三语切换
6. 记录为模板

**预计工时** 试点 40 分钟，批量 1-2 天

**风险** 低。about 非首屏，改错不影响转化。

---

## C03 · T18 修正 appMode.ts 版权

**问题**
vgo-service/src/lib/appMode.ts 第 2 行：`Copyright (c) 2026 Ventus Reflexology. All Rights Reserved.`

**影响**
1. 版权主体错误，将来法律文件不认
2. 说明代码可能从其他项目复制而来，需确认是否有其他遗留

**解决** 改为 `Copyright (c) 2026 VGO Malaysia. All Rights Reserved.`

**预计工时** 5 分钟

**风险** 零。纯文本修改。

---

## C04 · T15 data 文件零引用二次确认

**问题**
src/data/navigation.ts、site.config.ts 在初扫中显示零引用。

**为什么不能直接归档**
1. 可能是通过 `@/data/navigation` 引用，grep 模式未匹配
2. 可能是配置驱动（组件名写在配置里）
3. 可能是未来功能占位

**需做的检测（CA-1 七种）**
1. 静态 import ✓（已查，0）
2. 动态 import()
3. lazy/dynamic
4. 配置驱动
5. 全项目字符串提及（docs/scripts/根配置）
6. 大小写变体
7. 测试/Storybook

**预计工时** 15 分钟

**风险** 低。只读检测。

---

## C05 · R12 hub/mobile-hub 合并落地

**已定方案**
- hub = Operations Console，桌面完整（19 页）
- mobile-hub = Ops Mobile，审批+监控+速查（8 页）
- admin（9 页）归 hub 子路由
- 原则：逻辑唯一，界面分化

**未做的原因**
需产品决策：
1. 哪些页面从 mobile-hub 移回 hub
2. 哪些保留为移动专属
3. 新建哪些统一 API 层

**建议流程**
1. 列 mobile-hub 8 页清单
2. 逐页标注：保留 / 移回 / 合并
3. 确认后批量调整

**预计工时** 2-3 天（需决策前置）

**风险** 中。涉及路由调整和用户习惯改变。

---

## C06 · T23 git 历史清理

**问题**
vgo-service/.env.production 在 vgo-malaysia 历史 4 个 commit 中存在。

**为什么延后**
1. 仓库 PRIVATE
2. 密钥未换（决策：未上线，不换）
3. 清历史需 filter-repo 重写，风险高于收益

**触发条件**
①上线前 ②加第二人协作 ③仓库转公开

**清理方案（条件触发时）**
1. git filter-repo --path vgo-service/.env.production --invert-paths
2. 强制推送所有分支
3. 通知所有克隆者重新克隆

---

# 第三部分：风险登记

## R-01 · PM2 生产进程依赖未版本控制代码

**严重度** 中
**现状** server/server.js 被 PM2 直接运行，父仓库有追踪但无独立基线
**风险** 改错无法独立回滚
**缓解** C01 建立 server 独立仓库

## R-02 · git 历史含旧密钥

**严重度** 低（PRIVATE + 未上线）
**现状** 4 个 commit 含 .env.production 旧值
**触发换新** 上线前 / 加人 / 转公开
**缓解** 已加密保险箱，旧值未使用

## R-03 · src/app 21 页面硬编码中文

**严重度** 高（面向马来西亚市场）
**现状** 马来文/英文用户看到中文
**缓解** C02 试点 + 批量

## R-04 · npm audit 8 漏洞

**严重度** 中（7 high / 1 critical）
**现状** 未修
**缓解** 阶段 3 统一处理

## R-05 · 依赖来源不明

**严重度** 中
**现状** krackedmaps ^0.2.0 来源未查
**缓解** 阶段 3 审计

## R-06 · 版权主体错误

**严重度** 低（法律层面）
**现状** appMode.ts 写 Ventus Reflexology
**缓解** C03 修正

## R-07 · 图片商用授权未确认

**严重度** 高（法律层面）
**现状** public/assets 大量图片
**缓解** 阶段 5 核实

## R-08 · PDPA 合规未核

**严重度** 高（马来西亚法律）
**现状** 有法律页，未核完整性
**缓解** 阶段 5

---

# 第四部分：技术债务明细

| 编号 | 内容 | 位置 | 影响 | 处理阶段 |
|---|---|---|---|---|
| T1 | eslint 版本错配 | vgo-3.0 | 已修复 | ✅ |
| T2 | krackedmaps 来源不明 | 根+website | 供应链风险 | 阶段3 |
| T3 | npm audit 8 漏洞 | 全部 | 安全 | 阶段5 |
| T4 | sharp Termux 兼容 | vgo-3.0 | 图片优化可能失效 | 阶段4 |
| T5 | .env.example | vgo-3.0 | 已修复 | ✅ |
| T12 | AboutVGO 数字墙丢失风险 | vgo-3.0 | 功能缺失 | 待产品 |
| T13 | PainPointWall 硬编码 | vgo-3.0 | 已修复 | ✅ |
| T14 | ParticleField 移除 | vgo-3.0 | 视觉特效缺失 | 待产品 |
| T15 | data 零引用未确认 | vgo-3.0 | 可能误判 | C04 |
| T16 | app 页硬编码中文 | vgo-3.0 | 多语言缺失 | C02 |
| T18 | appMode 版权错 | vgo-service | 法律风险 | C03 |
| T19 | .bak 清理 | vgo-service | 已修复 | ✅ |
| T23 | git 历史旧密钥 | vgo-malaysia | 条件触发 | 上线前 |
| T25 | Math.random | vgo-malaysia | 已修复 | ✅ |

---

# 第五部分：需求登记池

| 编号 | 需求 | 状态 | 归属 |
|---|---|---|---|
| R1 | ABC 三 AI 造成重复文件 | ✅ 收尾 | - |
| R2 | AI 代码地图工具 | ⏸ | 阶段4后 |
| R3 | 3.0 自包含 | ✅ | - |
| R4 | 外包交接包 | ⏸ | 阶段6 |
| R5 | 旧测试/废弃整理 | ✅ 部分 | - |
| R6 | 长期记忆不遗漏 | ✅ 持续 | - |
| R7 | 登记册持久化 | ✅ | - |
| R8 | ComingSoon 未来功能 | ⏸ | 待产品 |
| R9 | ServiceModal 未接线 | ⏸ | 待产品 |
| R10 | 5-8 号资产建立 | ⏸ | 阶段3/6 |
| R11 | admin 是否独立 | ✅ 归属 hub | - |
| R12 | hub/mobile-hub 合并 | ⏸ | C05 |

---

# 第六部分：明日执行计划

## 上午（60 分钟）

**09:00-09:20 · C01 server 独立仓库**
1. 检查 PM2 状态
2. server/ git init
3. .gitignore（排除 .bak/.env/node_modules）
4. 首次提交 + tag
5. 建远程私有仓库
6. 父仓库移出追踪

**09:20-09:40 · C02 T16 about 试点**
1. 读 about/layout.tsx 与 page.tsx
2. 定 key 命名规范
3. 改 layout 用 generateMetadata
4. 改 page 用 useLang
5. 验证三语

**09:40-09:45 · C03 版权修正**
1. 改 appMode.ts 第 2 行
2. 提交

**09:45-10:00 · C04 T15 二次确认**
1. 7 种检测
2. 出结论
3. 归档或保留

## 下午（视情况）

**C05 R12 合并方案**
- 列 mobile-hub 8 页清单
- 逐页标注
- 等产品确认

**C02 批量推广**
- 试点通过后
- 21 页分批

---

# 第七部分：流程改进记录

## 今日新增规则

| 编号 | 规则 | 触发事件 |
|---|---|---|
| PC-2 R1 | P0-1 区分 M/??/D | ?? docs/ 阻塞清理 |
| PC-2 R3 | commit 前确认 diff --cached | 36 文件误入 commit |
| PC-2 R4 | git rm --cached 后清空 index | 删除状态未提交 |
| KP-8 | 反引号用 heredoc | event not found |

## 今日失误统计

| 类型 | 次数 | 已修正 |
|---|---|---|
| 命令语法错误 | 4 | ✅ |
| 逻辑顺序错误 | 2 | ✅ |
| 提交范围失控 | 2 | ✅ |
| 概念混淆 | 3 | ✅ |
| **合计** | **11** | **✅ 全部** |

## 失误根因

1. **想一次做完** → 长脚本出错概率高
2. **未先取证就动手** → 反复返工
3. **未区分概念** → 提示词/密码混用
4. **未验证 index 状态** → 连带提交

## 改进措施（写入 PC-2）

1. 脚本不超过 30 行
2. 每步先读后写
3. 概念先定义再使用
4. 提交前必看 diff --cached

---

# 第八部分：数据汇总

## 代码规模

| 仓库 | 文件数 | 行数（提交时） |
|---|---|---|
| vgo-3.0 | 269 | 57,046 |
| vgo-service | 584 → 501 | 57,046 |
| vgo-malaysia | 1,422 | - |

## commit 数

| 仓库 | 今日 commit |
|---|---|
| vgo-3.0 | 4 |
| vgo-service | 5 |
| vgo-malaysia | 5 |
| **合计** | **14** |

## 文档产出

| 类型 | 数量 | 行数 |
|---|---|---|
| 工程规范 | 5 | 约 400 |
| 台账 | 3 | 约 150 |
| 日报 | 1 | 336 |
| 详细附件 | 1 | 本文件 |
| 架构地图 | 2 | 337 + 193 |
| 文件清单 | 1 | 271 |

## 安全处置

| 项 | 数量 |
|---|---|
| 密钥文件加密 | 7 |
| 敏感文件移出追踪 | 1 |
| 安全代码修复 | 5 处 |
| 仓库权限核查 | 3 |

---

**附件完毕。本文件与日报配套，所有数据可在 git log、终端输出中复核。**
