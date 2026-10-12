#!/bin/bash
# 手动规则扫描：Taste Skill + Emil 的规则
# 用法：bash scan-manual.sh <src目录>
set -e

SRC="${1:-src}"
OUT="manual-report.txt"

if [ ! -d "$SRC" ]; then
  echo "❌ 目录不存在：$SRC"
  exit 1
fi

EXCLUDE="--exclude-dir=node_modules --exclude-dir=.next --exclude-dir=out --exclude-dir=.git --exclude-dir=dist --exclude-dir=build"

echo "=== VGO 手动规则扫描 ===" > "$OUT"
echo "扫描目录：$SRC" >> "$OUT"
echo "时间：$(date)" >> "$OUT"
echo "" >> "$OUT"

echo "── 1. 英文 em-dash（Taste Skill 9.G 硬禁止）──" >> "$OUT"
echo "注意：中文破折号「——」不算违规，仅英文 em-dash（—）和 en-dash（–）算" >> "$OUT"
grep -rn $EXCLUDE -P "[a-zA-Z0-9]\x{2014}[a-zA-Z0-9]|[a-zA-Z0-9]\x{2013}[a-zA-Z0-9]" "$SRC" --include='*.tsx' --include='*.ts' --include='*.css' >> "$OUT" 2>/dev/null || echo "  ✅ 无" >> "$OUT"
echo "" >> "$OUT"

echo "── 2. emoji 当图标（Taste Skill 9.E 硬禁止）──" >> "$OUT"
grep -rn $EXCLUDE 'icon: *"[🔧🏪👤💬🎁🔩🚗💆🐕🧹🏗️🔨🏃💼]"' "$SRC" --include='*.tsx' >> "$OUT" 2>/dev/null || echo "  ✅ 无" >> "$OUT"
echo "" >> "$OUT"

echo "── 3. transition-all（Emil 审查清单）──" >> "$OUT"
grep -rn $EXCLUDE "transition-all" "$SRC" --include='*.tsx' >> "$OUT" 2>/dev/null || echo "  ✅ 无" >> "$OUT"
echo "" >> "$OUT"

echo "── 4. 三列等宽卡片（Taste Skill 9.C）──" >> "$OUT"
grep -rn $EXCLUDE "grid-cols-3" "$SRC" --include='*.tsx' >> "$OUT" 2>/dev/null || echo "  ✅ 无" >> "$OUT"
echo "" >> "$OUT"

echo "── 5. 纯黑 #000000（Taste Skill 9.A）──" >> "$OUT"
echo "注意：bg-black/20 是半透明，不算违规；仅 bg-black 和 #000000 算" >> "$OUT"
grep -rn $EXCLUDE "#000000\|bg-black\([^/]\|$\)" "$SRC" --include='*.tsx' --include='*.css' >> "$OUT" 2>/dev/null || echo "  ✅ 无" >> "$OUT"
echo "" >> "$OUT"

echo "── 6. 霓虹光晕（Taste Skill 9.A）──" >> "$OUT"
grep -rn $EXCLUDE "shadow-\[.*rgba.*0\.[5-9]" "$SRC" --include='*.tsx' >> "$OUT" 2>/dev/null || echo "  ✅ 无" >> "$OUT"
echo "" >> "$OUT"

echo "── 7. animate-bounce（Emil）──" >> "$OUT"
grep -rn $EXCLUDE "animate-bounce" "$SRC" --include='*.tsx' >> "$OUT" 2>/dev/null || echo "  ✅ 无" >> "$OUT"
echo "" >> "$OUT"

echo "── 8. duration 超 300ms（Emil）──" >> "$OUT"
grep -rn $EXCLUDE "duration-\[[3-9][0-9][0-9]\|duration-\[[0-9]\{4,\}\]" "$SRC" --include='*.tsx' >> "$OUT" 2>/dev/null || echo "  ✅ 无" >> "$OUT"
echo "" >> "$OUT"

# 严重度分级
P0=$(grep -c "^$SRC" "$OUT" 2>/dev/null || echo 0)
echo "── 统计 ──" >> "$OUT"
echo "总命中行数：$P0" >> "$OUT"
echo "" >> "$OUT"
echo "── 严重度分级 ──" >> "$OUT"
echo "P0（硬禁止，立即修）：em-dash、emoji 图标" >> "$OUT"
echo "P1（影响观感）：transition-all、三列卡片、纯黑、霓虹" >> "$OUT"
echo "P2（加分项）：animate-bounce、超长 duration" >> "$OUT"

cat "$OUT"
echo ""
echo "报告已存：$OUT"
