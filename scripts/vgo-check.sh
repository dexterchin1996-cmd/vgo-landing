#!/bin/bash
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'
BASE_DIR=$(pwd)

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}    VGO 3.0 项目状态自动核对系统 v1.3${NC}"
echo -e "${BLUE}========================================${NC}"

# [1] 仓库状态检查
echo -e "\n[1] 检查 4 个核心仓库状态..."
check_repo() {
    local repo_path=$1
    local repo_name=$2
    if [ -e "$repo_path/.git" ]; then
        cd "$repo_path" || return
        local changes=$(git status --porcelain | wc -l)
        local ahead=$(git status -sb | grep -c "\[ahead")
        if [ "$changes" -eq 0 ]; then
            if [ "$ahead" -gt 0 ]; then
                echo -e "  ${YELLOW}⚠️  $repo_name: 干净，但有未推送的提交${NC}"
            else
                echo -e "  ${GREEN}✅ $repo_name: 干净且已同步${NC}"
            fi
        else
            echo -e "  ${RED}❌ $repo_name: 有 $changes 个未提交改动！${NC}"
        fi
        cd "$BASE_DIR" || return
    else
        echo -e "  ${RED}❌ $repo_name: Git 目录不存在${NC}"
    fi
}
check_repo "$HOME/vgo-3.0" "官网 (vgo-landing)"
check_repo "$HOME/vgo-dev/vgo-service" "APP端 (vgo-service)"
check_repo "$HOME/vgo-dev/server" "后端 (vgo-server)"
check_repo "$HOME/vgo-dev" "根目录 (vgo-malaysia)"

# [2] 核心资产完整性检查
echo -e "\n[2] 检查核心工程资产..."
ASSETS=(
    "docs/ENGINEERING_CONSTITUTION.md"
    "docs/PROJECT_ROADMAP.md"
    "docs/CODE_AUDIT_RULES.md"
    "docs/KNOWN_PITFALLS.md"
    "scripts/vgo-check.sh"
)
for asset in "${ASSETS[@]}"; do
    if [ -f "$asset" ]; then
        echo -e "  ${GREEN}✅ $asset 已落地${NC}"
    else
        echo -e "  ${RED}❌ $asset 丢失！必须立刻恢复${NC}"
    fi
done

# [3] 工作流进度检查
echo -e "\n[3] 工作流进度 (WBS)..."
ROADMAP="docs/PROJECT_ROADMAP.md"
if [ -f "$ROADMAP" ]; then
    DONE=$(grep -c "\- \[x\]" "$ROADMAP")
    TODO=$(grep -c "\- \[ \]" "$ROADMAP")
    echo -e "  已完成: ${GREEN}$DONE${NC} 项 | 待办: ${YELLOW}$TODO${NC} 项"
    FOCUS=$(awk '/\- \[ \]/ { found=1; exit } { if ($0 ~ /^## /) last_phase=$0 } END { if (found) print last_phase; else print "全部完成" }' "$ROADMAP")
    echo -e "  当前焦点: ${BLUE}$FOCUS${NC}"
    PHASE1_TODO=$(awk '/## 阶段 1/,/## 阶段 2/' "$ROADMAP" | grep -c "\- \[ \]")
    if [ "$PHASE1_TODO" -gt 0 ]; then
        echo -e "  ${RED}❌ 警告：阶段 1 还有 $PHASE1_TODO 个未完成项，请勿跳跃开发！${NC}"
    else
        echo -e "  ${GREEN}✅ 阶段 1 已全部完成，允许进入下一阶段。${NC}"
    fi
fi
echo -e "\n${BLUE}========================================${NC}\n"
