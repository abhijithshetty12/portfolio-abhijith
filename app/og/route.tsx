import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

function clampSection(section: string | null): string {
  const v = (section ?? "").trim().toLowerCase();
  if (!v) return "home";
  if (["home", "about", "skills", "experience", "projects", "contact"].includes(v)) return v;
  return "home";
}

function getSectionLabel(section: string): string {
  switch (section) {
    case "about":
      return "About";
    case "skills":
      return "Skills";
    case "experience":
      return "Experience";
    case "projects":
      return "Projects";
    case "contact":
      return "Contact";
    case "home":
    default:
      return "Space Portfolio";
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const section = clampSection(url.searchParams.get("section"));
  const label = getSectionLabel(section);

  // You can replace these with your own font/image assets if desired.
  // For maximum portability, we use pure vector-like drawing and gradients.
  const name = "Abhijith Shetty";
  const tagline = "Full Stack • Space Themed Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(123,92,255,0.55), rgba(3,0,20,0) 55%), radial-gradient(circle at 85% 30%, rgba(0,229,255,0.35), rgba(3,0,20,0) 50%), linear-gradient(180deg, #030014 0%, #050024 100%)",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, " +
            "Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
          color: "#E9E7FF",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#6D5BFF",
                  boxShadow: "0 0 18px rgba(109,91,255,0.7)",
                }}
              />
              <div style={{ fontSize: 20, fontWeight: 750, letterSpacing: 0.2 }}>{label}</div>
            </div>
            <div style={{ fontSize: 18, opacity: 0.85, lineHeight: 1.3 }}>{tagline}</div>
          </div>

          {/* Right badge */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 22,
              background: "rgba(109,91,255,0.12)",
              border: "1px solid rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "inset 0 0 0 1px rgba(0,229,255,0.08)",
            }}
          >
            <div style={{ fontSize: 42, fontWeight: 900, color: "#A79BFF" }}>AS</div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 54, fontWeight: 900, letterSpacing: -0.8, color: "#FFFFFF" }}>
            {name}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(0,229,255,0.08)",
                border: "1px solid rgba(0,229,255,0.22)",
                color: "#BDF7FF",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              Next.js
            </div>
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#E9E7FF",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              @vercel/og
            </div>
          </div>
          <div style={{ fontSize: 14, opacity: 0.75 }}>
            Generated preview image for link sharing
          </div>
        </div>

        {/* Subtle star dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "radial-gradient(circle at 10% 30%, rgba(255,255,255,0.35) 0 1px, rgba(0,0,0,0) 2px)," +
              "radial-gradient(circle at 40% 70%, rgba(255,255,255,0.25) 0 1px, rgba(0,0,0,0) 2px)," +
              "radial-gradient(circle at 75% 55%, rgba(255,255,255,0.3) 0 1px, rgba(0,0,0,0) 2px)," +
              "radial-gradient(circle at 90% 20%, rgba(0,229,255,0.35) 0 1px, rgba(0,0,0,0) 2px)",
            opacity: 0.9,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // Ensure image is crisp on clients
      // Note: ImageResponse uses internal SVG-like rendering.
      // Fonts: use system fonts for portability.
    }
  );
}

