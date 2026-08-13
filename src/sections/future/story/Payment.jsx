/**
 * 10 Payment — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function Payment() {
  return (
    <section data-track="" data-pin="" data-clip="" data-state="7" data-screen-label="10 Payment" style={{ "--p": "0", position: "relative", height: "240vh", background: "#FFFFFF", borderTop: "1px solid rgba(21,24,28,.1)" }}>
      <div style={{ position: "sticky", top: "0", height: "calc(100vh - 46px)", overflow: "hidden", display: "flex", alignItems: "center", padding: "74px 0 24px" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "radial-gradient(60% 50% at 50% 45%,rgba(255,255,255,calc(.4 + var(--p) * .5)),transparent 72%)" }}></div>
        <div data-scene="" style={{ position: "relative", width: "100%", maxWidth: "1080px", margin: "0 auto", padding: "0 clamp(20px,6vw,90px)" }}>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 clamp(20px,2.6vw,34px)" }}>Payment and closure</p>
          <h2 style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(30px,5.4vw,78px)", lineHeight: "1.02", letterSpacing: "-.024em", margin: "0", maxWidth: "18ch" }}>The moment a payment lands, everything stops</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: "1px", background: "rgba(21,24,28,.13)", marginTop: "clamp(36px,5vw,70px)", borderTop: "1px solid rgba(21,24,28,.13)", borderBottom: "1px solid rgba(21,24,28,.13)" }}>
            <div style={{ background: "#FFFFFF", padding: "clamp(20px,2.2vw,28px)" }}><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px", color: "#6C7075" }}>SMS</p><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".14em", margin: "0", opacity: "calc(var(--p) * 6 - .2)" }}>Stopped</p></div>
            <div style={{ background: "#FFFFFF", padding: "clamp(20px,2.2vw,28px)" }}><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px", color: "#6C7075" }}>WhatsApp</p><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".14em", margin: "0", opacity: "calc(var(--p) * 6 - .8)" }}>Stopped</p></div>
            <div style={{ background: "#FFFFFF", padding: "clamp(20px,2.2vw,28px)" }}><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px", color: "#6C7075" }}>Voice queue</p><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".14em", margin: "0", opacity: "calc(var(--p) * 6 - 1.4)" }}>Removed</p></div>
            <div style={{ background: "#FFFFFF", padding: "clamp(20px,2.2vw,28px)" }}><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px", color: "#6C7075" }}>Field route</p><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".14em", margin: "0", opacity: "calc(var(--p) * 6 - 2)" }}>Withdrawn</p></div>
            <div style={{ background: "#FFFFFF", padding: "clamp(20px,2.2vw,28px)" }}><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 10px", color: "#0072BC" }}>Case</p><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".14em", margin: "0", color: "#0072BC", opacity: "calc(var(--p) * 6 - 2.6)" }}>Settled</p></div>
          </div>
          <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(17px,2.1vw,28px)", lineHeight: "1.35", margin: "clamp(28px,3.5vw,54px) 0 0", maxWidth: "36ch", opacity: "calc(var(--p) * 4 - 2)" }}>Being chased for money already paid is the fastest way to turn a resolved account into a complaint.</p>
        </div>
      </div>
    </section>
  );
}
