# VGO 官网设计扫描报告

日期：2026-10-12
扫描工具：设计扫描工具包 v1.5.1
扫描范围：vgo-landing / src

## 结果总览

| 来源 | 问题数 |
|---|---|
| Impeccable 自动 | 23 |
| 手动规则 | 222 行命中 |

## Impeccable 发现（23个）

| 类型 | 数量 | 严重度 |
|---|---|---|
| gradient-text | 15 | warning |
| gray-on-color | 5 | warning |
| side-tab | 2 | warning |
| bounce-easing | 1 | warning |

## 手动规则发现（222行）

| 类型 | 数量 | 技能依据 |
|---|---|---|
| em-dash（—） | 100+ | Taste Skill 9.G |
| emoji 当图标 | 3 | Taste Skill 9.E |
| transition-all | 80+ | Emil 审查清单 |
| 三列等宽卡片 | 22 | Taste Skill 9.C |
| bg-black（纯黑） | 11 | Taste Skill 9.A |
| 霓虹光晕 | 14 | Taste Skill 9.A |
| animate-bounce | 1 | Emil |

## 工具包缺陷（本次发现）

1. em-dash 检测把中文破折号「——」和英文 em-dash「—」混在一起
   - Taste Skill 只禁英文 em-dash
   - 中文破折号是中文标点，不该被禁
2. 没排除 node_modules / .next
3. merge.sh 硬编码文件名
4. 没有"忽略清单"机制
5. 报告没有严重度分级
6. 没有修复建议

## 文件清单

- impeccable-report.json（原始报告）
- manual-report.txt（手动扫描原始结果）
- 合并报告.md（合并后）
- README.md（本文件）
