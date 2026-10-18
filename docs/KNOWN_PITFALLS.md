# VGO 3.0 故障模式知识库（Known Pitfalls）

**建立：** 2026-10-18
**规则：** 每遇到一个新坑，追加一条，编号递增。症状原文照抄，便于搜索。

## 快速索引（症状关键词 → 编号）
| 症状关键词 | 编号 |
|---|---|
| `event not found` | KP-1 |
| 规则写了但仍被忽略 / `check-ignore` 命中 | KP-2 |
| `unknown option '--webpack'` | KP-3 |
| `unknown field disablePageConfig` | KP-4 |
| `Permission denied` 写 /tmp | KP-5 |
| `sh: 1: next: not found` | KP-6 |
| `createProject not supported by wasm` | KP-7 |

---

## KP-1：bash 历史扩展导致 `!` 报错
- **症状：** `bash: !.env.example: event not found`
- **关键词：** event not found / 感叹号 / history expansion
- **根因：** 交互式 bash 默认开启历史扩展，`!` 在双引号内也会被解析
- **错误做法：** `set +H` 写在同一 `&&` 链里——bash 先解析整行再执行，`set +H` 来不及生效
- **正确做法：** 用 `node -e` 写文件；或 `set +H` 单独一行执行；或用单引号 heredoc
- **验证：** 命令不报 `event not found`，文件含预期字符串

---

## KP-2：gitignore 规则顺序（last-match-wins）
- **症状：** `!.env.example` 写了，`git check-ignore -v` 仍命中；`git add` 报 `paths are ignored`
- **关键词：** gitignore 例外无效 / check-ignore / 仍被忽略
- **根因：** gitignore 后写覆盖前写。例外在 `xxx*` 之前就被盖掉
- **错误做法：** 例外写在文件开头或中间
- **正确做法：** 例外 `!filename` 放在所有匹配它的忽略规则之后，通常文件末尾
- **验证：** `git check-ignore -q` 返回非 0；`git ls-tree origin/branch` 能看到文件

---

## KP-3：Next.js CLI 不认 `--webpack`
- **症状：** `error: unknown option '--webpack'`
- **关键词：** unknown option webpack
- **根因：** 某些 Next 15.x 小版本 CLI 未注册该独立标志
- **错误做法：** 在 dev 脚本里硬加 `--webpack`
- **正确做法：** 移除 `--turbopack`，让 Next 自动回退 Webpack；或换 CLI 支持该标志的版本
- **验证：** `next dev` 无该报错，出现 `✓ Ready` 且编译不报 SWC 错

---

## KP-4：`disablePageConfig` 与 SWC 平台包缺失
- **症状：** `unknown field disablePageConfig at line 1 column 3632`，反复出现，清缓存无效
- **关键词：** disablePageConfig / fallback-build-manifest / SWC
- **根因：** Android/Termux aarch64 缺原生 `@next/swc-*`，Turbopack 无法工作
- **错误做法：** 反复 `rm -rf .next`；装 `@next/swc-linux-arm64-gnu`（glibc 与 bionic 不兼容）
- **正确做法：** 装 `@next/swc-wasm-nodejs@<与next完全同版本>`；dev 脚本不含 `--turbopack`；必要时降级 Next 15.3.5
- **验证：** 编译出现 `✓ Compiled /`，无 `disablePageConfig`

---

## KP-5：Termux `/tmp` 写入被拒
- **症状：** `bash: /tmp/xxx.js: Permission denied`，随后 `MODULE_NOT_FOUND`
- **关键词：** Permission denied / tmp / MODULE_NOT_FOUND
- **根因：** Termux 的 `/tmp` 权限受限，不可写
- **错误做法：** 临时脚本写 `/tmp/`
- **正确做法：** 写项目内临时目录（如 `.tmp-patch/`），用完 `rm -rf`
- **验证：** 脚本可执行，项目无残留

---

## KP-6：npm run 找不到本地 bin
- **症状：** `sh: 1: next: not found`，但 `node_modules/.bin/next` 存在
- **关键词：** next not found / PATH / npm run
- **根因：** Termux 下 `npm run` 的 PATH 未含 `node_modules/.bin`
- **错误做法：** 脚本里直接写 `next`
- **正确做法：** 写 `./node_modules/.bin/next`，或 `node ./node_modules/next/dist/bin/next`
- **验证：** 命令可直接执行，`next --version` 正常

---

## KP-7：Turbopack WASM 功能缺失
- **症状：** `turbo.createProject is not supported by wasm bindings`
- **关键词：** createProject / wasm bindings
- **根因：** WASM 版 Turbopack 不完整，Android 无法启用
- **正确做法：** 放弃 Turbopack，用 Webpack（见 KP-3/KP-4）
- **验证：** 启动无该报错

## KP-9 Termux 无法编译 Next 15 页面（2026-10-18）
- **症状**：dev server 能启动（✓ Ready），但编译页面时崩溃
  - `unknown field disablePageConfig at line 1 column 3592`
  - `ENOENT .next/fallback-build-manifest.json`
  - 21 字节 `500 Internal Server Error`
- **关键词**：disablePageConfig / fallback-build-manifest / Termux 编译
- **根因**：Termux aarch64 缺原生 SWC/Turbopack 绑定，WASM 回退功能不完整
- **无效做法**：
  - `rm -rf .next`（已试）
  - 装 `@next/swc-wasm-nodejs@15.5.4`（已装，仍报错）
  - 降级 Next 到 15.3.5（未尝试，但不是根本解）
  - `--webpack` 标志（15.5.4 CLI 不识别）
  - `NEXT_DISABLE_TURBOPACK=1`（环境变量无效）
- **正确做法**：
  1. **Termux 只做开发与静态验证**：写代码、`tsc --noEmit`、`node --check`、git、静态分析
  2. **生产构建走云端**：Vercel（website）、Cloudflare（vgo-service）、云服务器（server）
  3. **不要**在 Termux 上跑 `next dev` 或 `next build`——浪费时间和精力
- **验证**：`tsc --noEmit` 退出码 0 即代码正确；运行时验证在云端做
