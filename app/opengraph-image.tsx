import { ImageResponse } from "next/og";

// Real PNG OG image (1200x630) — replaces the unsupported SVG.
// Social platforms (LinkedIn, Facebook, X) cannot render SVG OG images;
// next/og renders this to PNG at the edge. Applies site-wide automatically.
export const runtime = "edge";
export const alt = "Seovize — Semantic SEO & Social Media Systems for Texas & U.S. brands";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1020",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row — brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "#14B8A6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0B1020",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            SV
          </div>
          <div
            style={{
              color: "#F8FAFC",
              fontSize: "26px",
              fontWeight: 700,
              letterSpacing: "0.28em",
            }}
          >
            SEOVIZE
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#F8FAFC",
              fontSize: "82px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Build authority.
          </div>
          <div
            style={{
              color: "#14B8A6",
              fontSize: "82px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Capture demand.
          </div>
        </div>

        {/* bottom row — services + accent */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ color: "#CBD5E1", fontSize: "28px", fontWeight: 500 }}>
            Semantic SEO · Local SEO · Social Media Systems
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ width: "44px", height: "8px", borderRadius: "4px", background: "#14B8A6" }} />
            <div style={{ width: "20px", height: "8px", borderRadius: "4px", background: "#38BDF8" }} />
            <div style={{ width: "12px", height: "8px", borderRadius: "4px", background: "#F97316" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
