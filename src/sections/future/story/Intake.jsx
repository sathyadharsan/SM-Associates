/**
 * 03 Intake — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function Intake() {
  return (
    <section id="intake" data-track="" data-pin="" data-clip="" data-state="1" data-screen-label="03 Intake" style={{ "--p": "0", position: "relative", height: "240vh", background: "#FFFFFF", borderTop: "1px solid rgba(21,24,28,.1)" }}>
      <div style={{ position: "sticky", top: "0", height: "calc(100vh - 46px)", overflow: "hidden", display: "flex", alignItems: "center", padding: "74px 0 24px" }}>
        <div data-scene="" style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,6vw,90px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(36px,6vw,90px)", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 clamp(20px,2.6vw,34px)" }}>Stage 01 · Intake <span style={{ color: "#9A9691" }}>[INTAKE]</span></p>
            <h2 style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(30px,5vw,70px)", lineHeight: "1.04", letterSpacing: "-.02em", margin: "0", maxWidth: "18ch" }}>Nothing enters the system unchecked</h2>
            <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(16px,1.6vw,22px)", lineHeight: "1.55", color: "#43474C", maxWidth: "34ch", margin: "clamp(22px,2.6vw,34px) 0 0" }}>A failed row goes back to the lender with a reason, not into a queue.</p>
          </div>
          <div style={{ justifySelf: "end", width: "min(100%,420px)", border: "1px solid rgba(21,24,28,.14)", background: "rgba(255,255,255,.7)", padding: "clamp(20px,2.4vw,30px)" }}>
            <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".22em", textTransform: "uppercase", color: "#6C7075", margin: "0 0 20px" }}>Validation · LAN-06471</p>
            <div style={{ display: "grid", gap: "13px", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".1em" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", paddingBottom: "11px", borderBottom: "1px solid rgba(21,24,28,.1)", opacity: "calc(var(--p) * 6 - .2)" }}><span style={{ color: "#6C7075" }}>Number format</span><span>Valid</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", paddingBottom: "11px", borderBottom: "1px solid rgba(21,24,28,.1)", opacity: "calc(var(--p) * 6 - .8)" }}><span style={{ color: "#6C7075" }}>Amount present</span><span>Yes</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", paddingBottom: "11px", borderBottom: "1px solid rgba(21,24,28,.1)", opacity: "calc(var(--p) * 6 - 1.4)" }}><span style={{ color: "#6C7075" }}>Duplicate</span><span>None</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", paddingBottom: "11px", borderBottom: "1px solid rgba(21,24,28,.1)", opacity: "calc(var(--p) * 6 - 2)" }}><span style={{ color: "#6C7075" }}>Already paid</span><span>No</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", paddingBottom: "11px", borderBottom: "1px solid rgba(21,24,28,.1)", opacity: "calc(var(--p) * 6 - 2.6)" }}><span style={{ color: "#6C7075" }}>Address</span><span>Known good</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", opacity: "calc(var(--p) * 6 - 3.2)" }}><span style={{ color: "#6C7075" }}>Batch stamp</span><span style={{ color: "#0072BC" }}>Live case</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
