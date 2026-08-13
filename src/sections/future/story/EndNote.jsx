/**
 * footer — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function EndNote() {
  return (
    <footer id="contact" style={{ position: "relative", background: "#FFFFFF", borderTop: "1px solid rgba(21,24,28,.14)", padding: "clamp(44px,6vw,80px) clamp(20px,6vw,90px)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "26px", justifyContent: "space-between", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "#6C7075", lineHeight: "2.1" }}>
        <span style={{ color: "#15181C" }}>SM Associates Risk Management Pvt. Ltd.</span>
        <span>Established 2000 · Chennai · 19 branches</span>
        <span>Banks · NBFCs · HFCs · ARCs</span>
      </div>
    </footer>
  );
}
