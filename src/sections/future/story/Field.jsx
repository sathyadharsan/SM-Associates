/**
 * 09 Field — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function Field() {
  return (
    <section data-track="" data-pin="" data-clip="" data-state="6" data-screen-label="09 Field" style={{ "--p": "0", position: "relative", height: "260vh", background: "#FFFFFF", borderTop: "1px solid rgba(21,24,28,.1)" }}>
      <div style={{ position: "sticky", top: "0", height: "calc(100vh - 46px)", overflow: "hidden", display: "flex", alignItems: "center", padding: "74px 0 24px" }}>
        <div data-scene="" style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,6vw,90px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(36px,6vw,90px)", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 clamp(20px,2.6vw,34px)" }}>Stage 06 · Field <span style={{ color: "#9A9691" }}>[FIELD]</span></p>
            <h2 style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(30px,5vw,70px)", lineHeight: "1.04", letterSpacing: "-.02em", margin: "0", maxWidth: "16ch" }}>The doorstep, earned rather than defaulted to</h2>
            <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(16px,1.6vw,22px)", lineHeight: "1.55", color: "#43474C", maxWidth: "34ch", margin: "clamp(22px,2.6vw,34px) 0 0" }}>A visit is planned into a route and evidenced by the system, not written up afterwards.</p>
            <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(16px,1.6vw,22px)", lineHeight: "1.55", color: "#43474C", maxWidth: "34ch", margin: "clamp(18px,2vw,26px) 0 0", opacity: "calc(var(--p) * 4 - 1.6)" }}>Our executives tap one screen and get on with their day. The lender receives proof rather than a claim.</p>
          </div>
          <div style={{ justifySelf: "end", width: "min(100%,400px)", border: "1px solid rgba(21,24,28,.14)", background: "rgba(255,255,255,.62)", padding: "clamp(20px,2.4vw,30px)" }}>
            <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".22em", textTransform: "uppercase", color: "#6C7075", margin: "0 0 20px" }}>Visit record · captured</p>
            <div style={{ display: "grid", gap: "13px", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".1em" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", paddingBottom: "11px", borderBottom: "1px solid rgba(21,24,28,.1)", opacity: "calc(var(--p) * 6 - .3)" }}><span style={{ color: "#6C7075" }}>Location</span><span>Arrival, departure</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", paddingBottom: "11px", borderBottom: "1px solid rgba(21,24,28,.1)", opacity: "calc(var(--p) * 6 - 1)" }}><span style={{ color: "#6C7075" }}>Dwell time</span><span>Recorded</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", paddingBottom: "11px", borderBottom: "1px solid rgba(21,24,28,.1)", opacity: "calc(var(--p) * 6 - 1.7)" }}><span style={{ color: "#6C7075" }}>Photograph</span><span>Attached</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", opacity: "calc(var(--p) * 6 - 2.4)" }}><span style={{ color: "#6C7075" }}>LAN-06471</span><span style={{ color: "#0072BC" }}>Visited</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
