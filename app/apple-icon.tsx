import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: 180,
        height: 180,
        borderRadius: 40,
        background: "#0B1020",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 124,
          height: 124,
          borderRadius: 28,
          background: "#14B8A6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 68,
          fontWeight: 800,
          color: "#0B1020",
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-2px",
        }}
      >
        SV
      </div>
    </div>,
    size,
  );
}
