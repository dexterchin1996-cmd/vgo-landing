#!/bin/bash
# 合并 Impeccable + 手动规则报告
set -e

IMPECCABLE_FILE="${1:-impeccable-report/impeccable-report.json}"
MANUAL_FILE="${2:-manual-report.txt}"
OUT="合并报告.md"

if [ ! -f "$IMPECCABLE_FILE" ]; then
  echo "❌ 找不到 Impeccable 报告：$IMPECCABLE_FILE"
  exit 1
fi

echo "# VGO 完整设计审查报告" > "$OUT"
echo "" >> "$OUT"
echo "生成：$(date)" >> "$OUT"
echo "" >> "$OUT"

echo "## 一、Impeccable 自动扫描结果" >> "$OUT"
echo "" >> "$OUT"

if command -v python3 &>/dev/null; then
  python3 -c "
import json
with open('$IMPECCABLE_FILE') as f:
    data = json.load(f)
print(f'总问题数：{len(data)}')
print()
from collections import Counter
c = Counter(item.get('antipattern', 'unknown') for item in data)
print('按类型统计：')
for k, v in c.most_common():
    print(f'- {k}: {v}')
" >> "$OUT"
else
  echo "（需要 python3 才能解析）" >> "$OUT"
fi

echo "" >> "$OUT"
echo "## 二、手动规则扫描结果" >> "$OUT"
echo "" >> "$OUT"
echo '```' >> "$OUT"

if [ -f "$MANUAL_FILE" ]; then
  cat "$MANUAL_FILE" >> "$OUT"
else
  echo "（未找到 $MANUAL_FILE）" >> "$OUT"
fi

echo '```' >> "$OUT"
echo "" >> "$OUT"
echo "## 三、结论" >> "$OUT"
echo "" >> "$OUT"
echo "两个来源不重叠，必须合并才是完整清单。" >> "$OUT"

echo "✅ 合并完成：$OUT"
