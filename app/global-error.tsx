"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F6F1E8",
          color: "#0F1F33",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: 24,
        }}
      >
        <main>
          <h1 style={{ fontSize: 32, margin: 0 }}>Something went wrong.</h1>
          <p style={{ marginTop: 16, maxWidth: 420, lineHeight: 1.6 }}>
            Refresh the page or try again. If it keeps happening, email
            bitbridgeco@gmail.com.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 24,
              minHeight: 48,
              padding: "0 24px",
              background: "#C45C26",
              color: "#fff",
              border: 0,
              borderRadius: 6,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
