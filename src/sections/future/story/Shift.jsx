/**
 * 02 The shift — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function Shift() {
  return (
    <section data-track="" data-pin="" data-clip="" data-state="0" data-screen-label="02 The shift" style={{ "--p": "0", position: "relative", height: "260vh", background: "#FFFFFF", borderTop: "1px solid rgba(21,24,28,.1)" }}>
      <div style={{ position: "sticky", top: "0", height: "calc(100vh - 46px)", overflow: "hidden", display: "flex", alignItems: "center", padding: "74px 0 24px" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "radial-gradient(70% 60% at 50% 50%,rgba(255,255,255,.75),transparent 70%)" }}></div>
        <div data-scene="" style={{ position: "relative", width: "100%", maxWidth: "900px", margin: "0 auto", padding: "0 clamp(20px,6vw,60px)", textAlign: "center" }}>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 clamp(24px,3vw,44px)" }}>The assumption we removed</p>
          <div style={{ position: "relative" }}>
            <h2 data-beat="" style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,4.6vw,64px)", lineHeight: "1.08", letterSpacing: "-.02em", margin: "0", transform: "translate3d(0,calc(var(--p) * -60px),0)" }}>Collections assumes recovery is a function of pressure.</h2>
            <h2 data-stack="" data-beat="" style={{ position: "absolute", top: "0", left: "0", right: "0", fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,4.6vw,64px)", lineHeight: "1.08", letterSpacing: "-.02em", margin: "0", transform: "translate3d(0,calc(60px - var(--p) * 90px),0)" }}>Four different problems. One of them answers to pressure.</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "clamp(10px,2vw,26px)", marginTop: "clamp(40px,6vw,90px)", flexWrap: "wrap", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".18em", textTransform: "uppercase", color: "#6C7075" }}>
            <span style={{ opacity: "calc(var(--p) * 6 - 1.2)" }}>Forgot</span>
            <span style={{ opacity: "calc(var(--p) * 6 - 1.8)" }}>Paid late</span>
            <span style={{ opacity: "calc(var(--p) * 6 - 2.4)" }}>Lost a job</span>
            <span style={{ color: "#0072BC", opacity: "calc(var(--p) * 6 - 3)" }}>Must choose</span>
          </div>
        </div>
      </div>
    </section>
  );
}
