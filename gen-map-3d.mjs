import { renderSVG } from "krackedmaps";
import { REGIONS } from "./src/data/regions.ts";
import fs from "fs";

const svg = renderSVG({ theme: "blueprint", withDistricts: false });

const html = `<!DOCTYPE html>
<html lang="zh-MY">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>VGO 全马覆盖地图 · 3D</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 100%; overflow-x: hidden; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;
    background: radial-gradient(ellipse at 50% 0%, #1a1f3a 0%, #0a0d1a 50%, #000 100%);
    color: #E8EAED;
    min-height: 100vh;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }

  /* 星空背景 */
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 20% 30%, #fff, transparent),
      radial-gradient(1px 1px at 60% 70%, #fff, transparent),
      radial-gradient(1px 1px at 80% 15%, #fff, transparent),
      radial-gradient(1px 1px at 35% 85%, #fff, transparent),
      radial-gradient(2px 2px at 90% 50%, #FFB347, transparent),
      radial-gradient(1px 1px at 10% 60%, #fff, transparent),
      radial-gradient(1px 1px at 45% 20%, #fff, transparent);
    background-size: 200% 200%;
    opacity: 0.6;
    animation: starDrift 60s linear infinite;
    pointer-events: none;
    z-index: 0;
  }
  @keyframes starDrift {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-50px, -50px); }
  }

  /* 网格背景 */
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,102,0,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,102,0,0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse at 50% 50%, black 0%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 50%, black 0%, transparent 75%);
    pointer-events: none;
    z-index: 0;
  }

  .wrapper { position: relative; z-index: 1; max-width: 560px; margin: 0 auto; }

  h1 {
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 4px;
    background: linear-gradient(90deg, #FF6600, #FFB347, #FFCC33);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
    filter: drop-shadow(0 0 20px rgba(255,102,0,0.5));
  }
  .sub {
    font-size: 11px;
    color: #FFB347;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 24px;
    opacity: 0.7;
  }

  /* 3D 舞台 */
  .stage {
    perspective: 1200px;
    perspective-origin: 50% 40%;
    position: relative;
    padding: 40px 0;
  }

  /* 扫描雷达线 */
  .stage::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #FF6600, #FFB347, #FF6600, transparent);
    box-shadow: 0 0 20px #FF6600, 0 0 40px #FF6600;
    animation: scanLine 4s ease-in-out infinite;
    z-index: 10;
    pointer-events: none;
  }
  @keyframes scanLine {
    0% { top: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  /* 3D 地图容器 */
  .map-3d {
    position: relative;
    transform: rotateX(38deg) rotateZ(-4deg);
    transform-style: preserve-3d;
    transition: transform .6s ease;
    animation: mapFloat 6s ease-in-out infinite;
  }
  @keyframes mapFloat {
    0%, 100% { transform: rotateX(38deg) rotateZ(-4deg) translateZ(0); }
    50% { transform: rotateX(36deg) rotateZ(-4deg) translateZ(15px); }
  }

  .map-3d svg {
    width: 100%;
    height: auto;
    display: block;
    filter: drop-shadow(0 30px 60px rgba(255,102,0,0.3));
  }

  /* SVG 州样式 */
  .map-3d svg [data-slug] {
    cursor: pointer;
    transition: all .3s ease;
    stroke-width: 0.8;
  }

  /* 已开通：霓虹绿 + 多层发光 */
  .state-live {
    fill: url(#gradLive) !important;
    stroke: #10FFB0 !important;
    stroke-width: 1.5 !important;
    filter: drop-shadow(0 0 6px #10B981) drop-shadow(0 0 14px rgba(16,185,129,0.8));
    animation: neonPulse 2.5s ease-in-out infinite;
  }
  @keyframes neonPulse {
    0%, 100% {
      filter: drop-shadow(0 0 4px #10B981) drop-shadow(0 0 10px rgba(16,185,129,0.6));
    }
    50% {
      filter: drop-shadow(0 0 10px #10B981) drop-shadow(0 0 24px rgba(16,185,129,1));
    }
  }

  /* 即将开通：金色脉冲 */
  .state-coming {
    fill: url(#gradComing) !important;
    stroke: #FFCC33 !important;
    stroke-width: 1 !important;
    filter: drop-shadow(0 0 5px #FFB347);
    animation: goldPulse 2s ease-in-out infinite;
  }
  @keyframes goldPulse {
    0%, 100% { opacity: .75; filter: drop-shadow(0 0 3px #FFB347); }
    50% { opacity: 1; filter: drop-shadow(0 0 12px #FFCC33); }
  }

  /* 计划中：暗蓝 */
  .state-planned {
    fill: rgba(40, 50, 80, .4) !important;
    stroke: rgba(100, 120, 180, .3) !important;
    opacity: 0.7;
  }

  /* 悬停放大 */
  .map-3d svg [data-slug]:hover {
    transform: translateZ(20px);
    filter: drop-shadow(0 0 20px #FFCC33) brightness(1.3);
  }

  /* 图例 */
  .legend {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin: 28px auto 16px;
    font-size: 11px;
    color: #CBD5E1;
    letter-spacing: 1px;
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background: rgba(20, 30, 50, .6);
    border: 1px solid rgba(100, 120, 180, .3);
    border-radius: 999px;
    backdrop-filter: blur(10px);
  }
  .legend-dot { width: 8px; height: 8px; border-radius: 50%; }
  .legend-live .legend-dot { background: #10B981; box-shadow: 0 0 8px #10B981, 0 0 16px #10B981; }
  .legend-coming .legend-dot { background: #F59E0B; box-shadow: 0 0 8px #F59E0B; }
  .legend-planned .legend-dot { background: #4B5563; }

  /* 城市面板 */
  .panel {
    margin-top: 16px;
    padding: 18px;
    background: linear-gradient(135deg, rgba(20,30,50,0.9), rgba(10,15,30,0.9));
    border: 1px solid rgba(255,179,71,0.3);
    border-radius: 16px;
    display: none;
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 40px rgba(255,102,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05);
    animation: panelIn .4s ease;
  }
  @keyframes panelIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .panel.on { display: block; }
  .panel h3 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 12px;
    color: #FFB347;
    letter-spacing: 1px;
  }
  .panel .cities { display: flex; flex-wrap: wrap; gap: 6px; }
  .panel .city {
    font-size: 11px;
    padding: 5px 11px;
    border-radius: 999px;
    background: linear-gradient(135deg, #10B981, #059669);
    color: white;
    font-weight: 700;
    box-shadow: 0 0 12px rgba(16,185,129,0.5);
  }
  .panel .city.soon {
    background: linear-gradient(135deg, #F59E0B, #D97706);
    box-shadow: 0 0 12px rgba(245,158,11,0.5);
  }
  .panel .city.later {
    background: rgba(50, 65, 90, .8);
    color: #94A3B8;
    box-shadow: none;
  }
  .panel .close {
    float: right;
    cursor: pointer;
    color: #64748B;
    font-size: 22px;
    line-height: 1;
    padding: 0 6px;
  }
  .panel .close:hover { color: #FF6600; }

  footer {
    text-align: center;
    font-size: 10px;
    color: #475569;
    margin-top: 28px;
    letter-spacing: 2px;
  }
</style>
</head>
<body>

<div class="wrapper">
  <h1>VGO MALAYSIA</h1>
  <p class="sub">SERVICE COVERAGE MAP · 2026</p>

  <div class="stage">
    <div class="map-3d" id="mapWrap">
      ${svg}
    </div>
  </div>

  <div class="legend">
    <div class="legend-item legend-live"><span class="legend-dot"></span>LIVE</div>
    <div class="legend-item legend-coming"><span class="legend-dot"></span>COMING</div>
    <div class="legend-item legend-planned"><span class="legend-dot"></span>PLANNED</div>
  </div>

  <div class="panel" id="panel">
    <span class="close" onclick="closePanel()">×</span>
    <h3 id="panelTitle">—</h3>
    <div class="cities" id="panelCities"></div>
  </div>

  <footer>VGO · SABAH 2026 · EXPANDING NATIONWIDE</footer>
</div>

<script>
  const REGIONS = ${JSON.stringify(REGIONS.map(s => ({ id: s.id, zh: s.label.zh, en: s.label.en, status: s.status, cities: s.cities.map(c => ({ id: c.id, zh: c.label.zh, status: c.status })) })))};

  document.querySelectorAll("[data-slug]").forEach(el => {
    const slug = el.getAttribute("data-slug");
    const region = REGIONS.find(r => r.id === slug);
    if (!region) return;
    el.classList.add("state-" + region.status);
    el.addEventListener("click", () => {
      document.getElementById("panelTitle").textContent = region.zh + " · " + region.en;
      const cities = document.getElementById("panelCities");
      cities.innerHTML = region.cities.length
        ? region.cities.map(c => \`<span class="city \${c.status !== "live" ? (c.status === "coming" ? "soon" : "later") : ""}">\${c.zh}</span>\`).join("")
        : "<span style=\\"color:#64748B;font-size:12px;\\">暂无城市数据</span>";
      document.getElementById("panel").classList.add("on");
    });
  });
  function closePanel() { document.getElementById("panel").classList.remove("on"); }
</script>
</body>
</html>`;

fs.writeFileSync("/sdcard/Download/vgo-图/malaysia-map-3d.html", html);
console.log("OK - malaysia-map-3d.html 生成完成");
console.log("大小: " + Math.round(html.length / 1024) + " KB");
