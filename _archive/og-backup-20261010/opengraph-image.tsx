import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "V'GO - 有事不用愁，上门找 V'GO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1B2A47 0%, #2A3F63 60%, #FF6600 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 32,
            background: "white",
            color: "#1B2A47",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 72,
            fontWeight: 900,
            marginBottom: 32,
          }}
        >
          V
        </div>
        <div style={{ fontSize: 84, fontWeight: 900, letterSpacing: -2, marginBottom: 12 }}>
          V&apos;GO
        </div>
        <div style={{ fontSize: 36, fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: 8 }}>
          有事不用愁，上门找 V&apos;GO
        </div>
        <div style={{ fontSize: 22, color: "rgba(255,255,255,0.65)", marginTop: 16 }}>
          马来西亚上门服务平台 · 维修 · 清洁 · 按摩 · 跑腿
        </div>
        <div style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", marginTop: 24 }}>
          Smart. Simple. Sorted.
        </div>
      </div>
    ),
    { ...size }
  );
}
