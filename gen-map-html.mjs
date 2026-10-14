import { renderSVG } from "krackedmaps";
import { REGIONS } from "./src/data/regions.ts";
import fs from "fs";

const svg = renderSVG({ theme: "blueprint", withDistricts: false });

const html = `<!DOCTYPE html>
<html lang="zh-MY">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>VGO 全马覆盖地图</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif; background: #0F1620; color: #E8EAED; padding: 20px; min-height: 100vh; }
  h1 { font-size: 22px; font-weight: 900; margin-bottom: 6px; text-align: center; color: #fff; }
  .sub { font-size: 12px; color: #94A3B8; margin-bottom: 20px; text-align: center; }
  .map-container { max-width: 500px; margin: 0 auto; background: #122031; border-radius: 20px; padding: 16px; overflow: hidden; }
  .map-container svg { width: 100%; height: auto; display: block; }
  .map-container svg [data-slug] { cursor: pointer; transition: fill .3s ease, filter .3s ease; }
  .state-live { fill: #10B981 !important; filter: drop-shadow(0 0 8px rgba(16,185,129,.6)); animation: breathe 3s ease-in-out infinite; }
  @keyframes breathe { 0%,100% { filter: drop-shadow(0 0 6px rgba(16,185,129,.4)); } 50% { filter: drop-shadow(0 0 18px rgba(16,185,129,.95)); } }
  .state-coming { fill: #F59E0B !important; animation: pulse 2s ease-in-out infinite; }
  @keyframes pulse { 0%,100% { opacity: .85; } 50% { opacity: 1; } }
  .state-planned { fill: #4B5563 !important; opacity: .6; }
  .legend { display: flex; justify-content: center; gap: 18px; margin: 20px auto 12px; font-size: 12px; color: #CBD5E1; }
  .legend-item { display: flex; align-items: center; gap: 6px; }
  .legend-dot { width: 10px; height: 10px; border-radius: 50%; }
  .legend-live .legend-dot { background: #10B981; box-shadow: 0 0 8px #10B981; }
  .legend-coming .legend-dot { background: #F59E0B; }
  .legend-planned .legend-dot { background: #4B5563; }
  .panel { max-width: 500px; margin: 16px auto 0; padding: 16px; background: #1A2332; border-radius: 16px; border: 1px solid #334155; display: none; }
  .panel.on { display: block; }
  .panel h3 { font-size: 16px; font-weight: 900; margin-bottom: 10px; color: #fff; }
  .panel .cities { display: flex; flex-wrap: wrap; gap: 6px; }
  .panel .city { font-size: 12px; padding: 4px 10px; border-radius: 999px; background: #10B981; color: white; font-weight: 700; }
  .panel .city.soon { background: #F59E0B; }
  .panel .city.later { background: #334155; color: #94A3B8; }
  .panel .close { float: right; cursor: pointer; color: #64748B; font-size: 20px; line-height: 1; padding: 0 6px; }
  footer { text-align: center; font-size: 11px; color: #64748B; margin-top: 24px; }
</style>
</head>
<body>
  <h1>VGO 全马覆盖地图</h1>
  <p class="sub">16 州 · 点击查看城市 · 数据源 regions.ts</p>
  <div class="map-container" id="mapWrap">${svg}</div>
  <div class="legend">
    <div class="legend-item legend-live"><span class="legend-dot"></span>已开通</div>
    <div class="legend-item legend-coming"><span class="legend-dot"></span>即将开通</div>
    <div class="legend-item legend-planned"><span class="legend-dot"></span>计划中</div>
  </div>
  <div class="panel" id="panel">
    <span class="close" onclick="closePanel()">×</span>
    <h3 id="panelTitle">—</h3>
    <div class="cities" id="panelCities"></div>
  </div>
  <footer>Total: 16 states</footer>
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

fs.writeFileSync("/sdcard/Download/vgo-图/malaysia-map.html", html);
console.log("OK - malaysia-map.html 生成完成");
console.log("大小: " + Math.round(html.length / 1024) + " KB");
console.log("SVG 长度: " + svg.length + " 字符");
