# VGO Malaysia · 官网

> 已上线 https://vgo-landing.vercel.app

## 快速开始
    cd ~/vgo-dev/vgo-landing
    NODE_OPTIONS=--max-old-space-size=1024 nohup npm run dev > dev.log 2>&1 &

## 技术栈
Next 16.3.6 + React 19.2.8 + TS 5.9.3 + Tailwind 4 + Motion + lucide-react
三语：中 / EN / BM（自动识别）

## 目录
    src/app/           8 页面
    src/components/    导航/弹窗/板块组件
    src/data/waitlist.ts   注册数据
    src/lib/i18n.tsx       三语

## 部署
push 到 GitHub → Vercel 自动部署

## 详细交接
../docs/v2/09-官网交接单.md

---

## 【2026-09-27 更新】

### 页面扩展到 12 个
新增 6 页：
- `/user-agreement`（用户服务协议）
- `/merchant-agreement`（商家合作协议）
- `/pro-agreement`（师傅合作协议）
- `/agent-agreement`（区域代理协议）
- `/verify-success`（邮箱验证成功）
- `/verify-failed`（邮箱验证失败）

### 新增组件
- `src/components/LegalShell.tsx` — 白底专业法律页（橙色竖条 + 大字正文 + 语言优先条款）
- `src/components/Cooperation.tsx` — 首页合作模式区块（3 卡 + CTA 进 /partner）

### 注册流程重构
原：选角色 → 账号 → 业务信息
新：角色介绍页 → 协议关卡（3 独立勾选）→ 账号 → 密码 → 业务信息

关键改动：
- 介绍页 4 角色差异化（客户橙 / 商家金 / 技术蓝 / 手艺人紫）+ 左右滑动切换
- 协议关卡 3 独立勾选 + 弹窗预览（必须滑到底才能勾）
- 弹窗底部双按钮：取消 / 我同意
- 关卡底部双按钮：不同意 / 同意并继续
- 成功页改为「请查收邮件」+ 重发按钮

### 邮箱验证系统
- 强制邮箱验证（用户必须点邮件链接才能登录 App）
- 后端新接口：
  - `GET /api/auth/verify-email?token=xxx`（重定向）
  - `POST /api/auth/resend-verify`（重发）
- 新邮件函数：`sendVerifyEmail`（4 角色 × 3 语差异化）
- waitlist 加字段：`emailVerified` `verifyToken` `verifyExpire`（24h）

### 法律文件体系（6 份）
- 统一用 LegalShell 白底专业版
- 每份含语言优先条款（英文为准，英/马双语）
- 每份含免责声明（10 项收益影响因素）
- 隐私政策 + 服务条款：英/马双语（PDPA 强制要求）

### 首页
- 新增「合作与加入」区块（3 张卡 + 查看详细合作方案按钮）
- 导航栏加「合作」入口

### 修复
- Roles / Merchant / FinalCTA 3 处按钮跳转 bug
- 全站移除私人邮箱，统一 support.vgo@gmail.com
- 全站移除手机号（法律页只保留邮箱）
- 后端 .gitignore 加 vgo-landing/（避免前端混进后端 repo）

### 当前 HEAD
- 前端：c37b942
- 后端：9601d77

### 常用命令
前端重启：
    cd ~/vgo-dev/vgo-landing && pkill -9 -f "next dev"; pkill -9 -f "next-server"; sleep 3; NODE_OPTIONS=--max-old-space-size=1024 nohup npm run dev > dev.log 2>&1 & sleep 15 && tail -5 dev.log

本地 build 验证（push 前必跑）：
    cd ~/vgo-dev/vgo-landing && NODE_OPTIONS=--max-old-space-size=1024 npm run build 2>&1 | tail -30

### Vercel 排查（部署失败时用）
Token: （请从 Vercel 后台生成，勿写入仓库）
项目 ID: （记在 .env.local 或本地文档）

### 待办（下次继续）
- P1：`/offers` 福利页 + 多福利弹窗（3 tab）
- P2：首页内容补全 + Admin 后台 + 邮件体系扩展（密码重置等）
- P3：Google Maps Embed
- 法务：律师审阅 6 份协议 + 任命 DPO + 确认 SSM 注册号
