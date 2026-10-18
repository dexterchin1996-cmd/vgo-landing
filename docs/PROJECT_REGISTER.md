# VGO 3.0 项目登记册

**版本：** v1.0
**建立：** 2026-10-18
**规则：** 新发现即时登记；完成标 ✅；阶段节点版本 +1

## A. 决策
- D1 用 git worktree 建 3.0，不手工复制
- D2 3.0 必须自包含：零外部引用、零软链接、依赖全在项目内
- D3 旧版进 _archive/，稳定 1 个月后才删
- D4 Termux 只做开发，生产构建走云端
- D5 本地开发用 Webpack，不用 Turbopack
- D6 一次一件事，按阶段推进，不跳步
- D7 需求登记进池，按阶段执行
- D8 每次回复附台账摘要

## B. 已完成
- [x] 1. 2.x 打 tag：v2.x-final-20261018
- [x] 2. 2.x 全量备份：129MB tar.gz
- [x] 3. 45 个未提交改动入库：974317a
- [x] 4. 建 3.0 物理目录：~/vgo-3.0，分支 release/3.0
- [x] 5. 结构地图：docs/ARCHITECTURE_TREE.txt
- [x] 6. 骨架完整：21 路由 / 90 源文件 / 配置齐全

## C. 进行中
- [x] 7. 自包含体检（5 项全过，软链接均为内部链接）
- [ ] 8. 查清 2 个软链接

## D. 待办（按阶段）
- [ ] 阶段1 运行架构：生产环境选型、CI/CD
- [ ] 阶段2 版本与回滚：分支策略、回滚演练
- [ ] 阶段3 工程规范：依赖锁定、构建模式、质量门禁
- [ ] 阶段4 设计与内容：设计系统、内容层、图片策略
- [ ] 阶段5 质量与安全：性能预算、安全基线、监控
- [ ] 阶段6 发布运营：上线清单、交接包、签核

## E. 需求登记池
- R1 ABC 三 AI 异名同物/同名异物/僵尸文件 → 第 9-10 项
- R2 AI 代码地图工具 → 第 11 项后
- R3 3.0 自包含 → 进行中
- R4 外包交接包 → 第 12 项后
- R5 旧测试/废弃整理 → 第 10 项
- R6 长期记忆不遗漏 → 贯穿
- R7 登记册持久化 + 状态脚本 → 本次

## F. 风险与技术债务
- T1 ESLint 16.3.6 vs Next 15.5.4 错配 → 阶段3
- T2 krackedmaps ^0.2.0 来源不明 → 阶段3
- T3 npm audit 8 漏洞（7 high / 1 critical）→ 阶段5
- T4 sharp 在 Termux 兼容性未验证 → 阶段4
- T5 3.0 无 .env 文件 → 阶段3
- T6 2 个软链接未查清 → 当前
- T7 云端落后本地 575 文件 / 12440 行 → 阶段2
- T8 _archive/ 旧文件堆积 → 第 10 项
- T9 MAP.md 615KB 等非代码文件 → 第 10 项
- T10 图片商用授权未确认 → 阶段5
- T11 PDPA 合规声明未核 → 阶段5

## G. 更新机制
1. 每次回复开头附三行摘要
2. 完成即标 ✅ 并写证据
3. 新问题登记 F 区，编号递增
4. 新需求登记 E 区，编号递增
5. 阶段节点写盘并版本 +1
6. 本文件随 git 走，交外包必带

## H. 核验缺口（2026-10-18 第一轮核验）
- [x] G1 tag 已修复：v2.x-final-20261018 指向 974317a（2026-10-18）
- [x] G2 备份已重打：8.1M，含 974317a（2026-10-18）
- [x] G3 恢复演练通过：解压后 269 文件 = 源 269，关键文件齐全
- [x] G4 已推送云端：release/3.0 = 974317a，main 未被覆盖（2026-10-18）
- [x] G5 地图完整性验证：全量版 269 文件全覆盖，简版保留为 _L3.txt（2026-10-18）
- [x] G6 配置校验通过：package.json / tsconfig.json（纯JSON）/ next.config.js / vercel.json 全部可解析（2026-10-18）
- [x] G7 软链接已核验：2 个均指向项目内 .agents/，合格（2026-10-18）

## I. 核心规则
- D9 终端是唯一事实来源（SSOT）。台账只是记录，不是事实。台账与终端不符，以终端为准。

## J. 编码规范（2026-10-18）
- D10 代码用英文（文件名/变量名/函数名/注释/commit message/技术文档）；沟通用中文；产品文案走 i18n 多语言

## L. PainPointWall 合并重写（2026-10-18）
- 方案：两层文案（大字场景 + 小字平台痛点），保留滚动视差
- i18n 新增 8 key × 3 语 = 24 条：pain_wall_title / pain_wall_sub / pain_scene_1..4 / pain_wall_end_title / pain_wall_end_sub
- 备份：src/lib/i18n.tsx.bak-20261018-1508、src/components/PainPointWall.tsx.bak-20261018-1509
- 验证：零中文 ✅ / t() 8 次 ✅ / useLang import ✅ / 57 行
- 待验证 V1：t(item.sceneKey) 变量传参的类型安全，需装依赖后 tsc 复验

## M. R1 资产盘点收尾（2026-10-18）
- 扫描：37 个组件，排除 .claude/.grok/.agents/_archive/reports（CA-18）
- 归档：PainPoints.tsx（CA-5 等价性通过，图片等价，文案被 PainPointWall 新两层文案吸收）。修正：原记账超前于终端，2026-10-18 实际执行 git mv
- 保留：AboutVGO（T12 数字墙）、ComingSoon（R8 未来功能）、ParticleField（T14 粒子背景）、ServiceModal（R9 未接线）
- 新发现：T13 PainPointWall 曾硬编码中文（已修复）
- R1 状态：✅ 收尾

## N. src/app + src/data 扫描（2026-10-18）
- T15：src/data/navigation.ts、site.config.ts 零引用候选。CA-1 待二次确认（7 种隐形使用），阶段4处理
- T16：src/app 21 个页面层普遍硬编码中文（metadata + 内容），about/layout.tsx 同一文案重复3次。阶段4系统性 i18n 化
- 今日目标2：✅ 扫完登记，不深挖

## R13 招募页无表单（2026-10-18 登记）
- MerchantPage.tsx 435 行，TechnicianPage.tsx 459 行
- 均无 <form>、<input>、onSubmit、API 调用
- 性质：纯文案 + FAQ + 引导下载 App
- 待确认：设计如此（引导到 App）还是未完成（应补网页申请）
- 归属：阶段 4 设计与内容
- 不阻塞 3.0 落地

## R14 metadata i18n 架构决策（2026-10-18 登记）
- 现状：21 个 layout.tsx 全部静态中文 metadata
- 难题：generateMetadata 是服务端，拿不到 useLang 客户端状态
- 三方案：A. cookie 判断 B. URL 路由 C. 保持静态
- 影响：21 页面 SEO，非单页任务
- 归属：阶段 4，需产品决策
- 不阻塞 3.0 落地

## T26 const C 本地 i18n 迁移（2026-10-18 登记）
- 现状：about/page.tsx 有 const C（zh/en/ms 三层，约30条），功能完整
- 问题：与 lib/i18n.tsx 的 19 个 key 并存，两套系统
- 范围：21 页面都可能类似，是架构级债
- 归属：阶段 4 长期任务
- 不阻塞 3.0 落地

## T27 T16 试点结果（2026-10-18 完成）
- about/layout.tsx 文案重复 3 次 → 提取常量，现 1 次
- tsc 退出码 0
- 可复制到其他 20 个 layout.tsx

## T18 关闭（2026-10-18 用户确认）
- Ventus Reflexology 确认为 VGO 的合法注册运营公司
- 用户可见披露（contact、Footer）：合法，保留
- 代码版权注释（website 3 处 + vgo-service 210 处）：合法，保留
- 结论：不是技术债，是法律披露。T18 关闭。

## T28 LICENSE 缺失（2026-10-18 登记）
- 三仓库均无 LICENSE / COPYRIGHT 文件
- 商业项目上线前必须补，明确版权归属和使用限制
- 版权主体：Ventus Reflexology（已确认）
- 归属：阶段 6 上线前
- 不阻塞 3.0 开发

## R14 完成（2026-10-18）
- 17/17 layout 全部改为 generateMetadata + cookie 读取
- i18n.tsx 新增 key：about_meta_* (2) + 13 页 × 2 + merchant/technician × 2 + site_meta_* (2) = 34 条 × 3 语 = 102 条
- i18n.tsx 新增 setLangCookie helper，写入 vgo_lang cookie
- 运行时验证：Termux 无法跑 dev server（KP-9），留待 Vercel 部署验证
- 数据层验证通过（静态脚本）：key 齐全、cookie helper 定义+3处调用、layout 4项检查

## T30 完成（2026-10-18）
- 13 个子页 layout 批量去重 + i18n 化
- 全部 tsc 通过

## KP-9 已登记
- Termux 无法编译 Next 15 页面，只做 tsc/git/静态验证
- 生产构建走 Vercel / Cloudflare / 云服务器

## T26 决策（2026-10-18）：不迁移，登记保留
- const C 存在于 4 个页面：about / contact / ip-copyright / offers
- 三语功能正常，用户无感知
- i18n.tsx 已 1126 行，直接迁移会变 2000+ 行
- 拆分 i18n 是独立架构任务，需专门设计
- 决策：暂不迁移，等 i18n 拆分时一起做
- 不阻塞上线

## T31 offers 语言 bug 修复（2026-10-18）
- offers 原用本地 useState("zh")，语言切换只影响本页
- 改为 useLang()，切换全站生效
- commit 987dd84

## 阶段 2 · 首页重构进度（2026-10-18 晚）

### 已完成（有 commit 证据）

- 39eb19b feat(i18n): 新增 12 个 hero/trust 三语键（36 条）
- ce89624 fix(i18n): 移除 trust_fast_desc 的「30 分钟」承诺（铁律 15）
- 882416b feat(hero): 新建 Hero.tsx 组件（i18n 驱动）
- d8ec02a refactor(home): page.tsx 从 178 行减至 50 行，内联 Hero 移除
- a6a512a feat(design): 接入 Archivo 字体系统 + 全站胶片颗粒层
- fccee5a feat(hero): 补回次级 CTA + 新增 Proof Strip（3 条事实）
- 27f3119 feat(roles): Roles 扩为四类角色，新增渠道合作方
- a9c6c81 feat(pain-wall): 痛点墙从 4 场景扩至 8 场景，每卡加平台承诺标签
- f64d44a fix(reveal): Reveal 从时间驱动改为滚动驱动，修复「只显示一半」
- 3a057f6 feat(hero): Hero 改为 4 图场景轮播 + 修复 /how-it-works/intro 断链

### 本轮修复的缺陷

- **生产级断链**：主导航「使用流程」与 Hero 次级 CTA 均指向 /how-it-works/intro，
  但该路由 dynamicParams=false 且 VALID 仅三值，点击必定 404。已改指 /how-it-works/customer。
- **动画缺陷**：Reveal 用 useInView + 0.7s 时间驱动，滚动快时动画未完成即离屏，
  表现为「只显示一半」。已改为 useScroll 滚动驱动。

### 新增技术债 / 待办

- **T39 师傅真人照片缺失**：Hero 右侧「师傅群像」位现用 repair.jpg 占位，
  需真实师傅照片或团队合照，否则达不到「服务是人」的视觉表达。
- **T40 视频素材确认**：全仓库扫描 mp4/webm 结果为 0，此前记忆中的视频素材不在 vgo-3.0，
  需确认是否在其他仓库或需重新制作。
- **T41 占位页面核查**：/map-preview、/regions-preview 疑似预览页，需确认是否转为正式页。
- **T42 角色页覆盖**：/how-it-works/[role] 仅支持 customer/merchant/technician，
  渠道合作方（partner）暂无对应流程页，需评估是否新增。

### 素材盘点（2026-10-18 晚）

- public/scenes/：12 张问题场景图（全部已用上）
- public/features/：6 张服务类目图
- public/shared/：10 张共享场景图
- public/how-it-works/：角色流程配图
- 视频：0
- 字体：Archivo + Archivo Black（next/font 自托管）

## SEO 与结构收尾（2026-10-19 凌晨）

### 已完成

- 4b6d1b6 chore(seo): /coverage 登记进 sitemap
- d2b72dc chore(seo): 6 个服务页登记进 sitemap，verify 两页加 noindex

### 本轮审计结论

- robots.ts：正确，含 sitemap 引用 + verify 页 disallow
- 全站 href：无断链，全部指向有效路由
- sitemap 路由数：25（含 6 服务页 + /coverage）
- verify-success / verify-failed：已加 robots noindex，不进 sitemap

### T15 结案（2026-10-19）

- navigation.ts（21 行）与 site.config.ts（382B）确认零引用，7 种检测全过
- 按 CA-11 保留不删，登记待清理

### T43 数据不一致（2026-10-19 登记）

- site.config.ts 的 contact.email 为 hello@vgo.com.my
- layout.tsx jsonLd 与 README 记录为 support.vgo@gmail.com
- 两者不一致，site.config.ts 为死数据，未在任何页面使用
- 风险：将来误引用会导致联系方式错误
- 建议：后续统一为单一来源，或归档 site.config.ts
- 归属：阶段 3 内容层整理

### 当前 SEO 骨架完整度

- sitemap：25 路由，覆盖全部静态页 + 6 服务页
- robots：正确引用 sitemap，屏蔽 verify 与 api
- metadata：17 个 layout 全部 i18n 化
- 404 / error / global-error：齐全
- PWA manifest：已配置
- hreflang：layout 中已配置三语 alternates

结论：SEO 骨架达到国际标准官网要求，可进入内容层补全。

## 流程审计与批次修复（2026-10-19）

### 流程审计结论
- 死链 0、占位链接 0、TODO 0
- 内部链接用 next/link：全站清零
- 下拉菜单：补 onClick + aria-expanded，触屏键盘可用

### 本轮批次修复
- 2c68e57 下拉菜单无障碍 + 内部链接
- 62a12ee Waitlist 与 about 页改用 Link
- Navbar 冗余 isExternal 三元折叠

### 新登记
- T44 krackedmaps 依赖待移除：组件已归档但 package.json 仍有依赖。
  直接改会破坏 lock，Vercel 可能构建失败。需完整 npm install 环境处理。
- T45 partner 页 num 字段中文化：「6 大」「亚庇」「首批」「全马」等，
  英文与马来文用户会看到中文混搭。需改 i18n 键。
