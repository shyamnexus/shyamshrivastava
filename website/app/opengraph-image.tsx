import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.name} — ${site.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#020617",
          color: "#f8fafc",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#60a5fa",
            fontWeight: 600,
          }}
        >
          {site.title}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#94a3b8",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            Building intelligent embedded products across Linux, IoT, AI
            surveillance, and medical devices.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#64748b",
            fontSize: 24,
          }}
        >
          <span>Embedded Systems · IoT · Product Leadership</span>
          <span style={{ color: "#3b82f6" }}>shyam.</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
