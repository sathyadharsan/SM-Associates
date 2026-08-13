/**
 * 12 Lender view — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function LenderView() {
  return (
    <section data-track="" data-pin="" data-clip="" data-state="8" data-screen-label="12 Lender view" style={{ "--p": "0", position: "relative", height: "220vh", background: "#FFFFFF" }}>
      <div style={{ position: "sticky", top: "0", height: "calc(100vh - 46px)", overflow: "hidden", display: "flex", alignItems: "center", padding: "74px 0 24px" }}>
        <div data-scene="" style={{ position: "relative", width: "100%", maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(20px,6vw,90px)" }}>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 clamp(20px,2.6vw,34px)" }}>What the lender sees</p>
          <h2 style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,4.6vw,64px)", lineHeight: "1.05", letterSpacing: "-.02em", margin: "0", maxWidth: "20ch" }}>Visible while it is happening</h2>
          <div style={{ border: "1px solid rgba(21,24,28,.14)", background: "rgba(255,255,255,.55)", marginTop: "clamp(34px,4.5vw,64px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr .9fr", gap: "clamp(10px,2vw,26px)", padding: "14px clamp(16px,2.2vw,28px)", borderBottom: "1px solid rgba(21,24,28,.14)", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".2em", textTransform: "uppercase", color: "#6C7075" }}><span>Account</span><span>Attempt</span><span>Result</span><span>State</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr .9fr", gap: "clamp(10px,2vw,26px)", padding: "14px clamp(16px,2.2vw,28px)", borderBottom: "1px solid rgba(21,24,28,.08)", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".08em", color: "#6C7075", opacity: "calc(var(--p) * 6 - .2)" }}><span>LAN-06468</span><span>WhatsApp</span><span>Read</span><span>Contacted</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr .9fr", gap: "clamp(10px,2vw,26px)", padding: "14px clamp(16px,2.2vw,28px)", borderBottom: "1px solid rgba(21,24,28,.08)", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".08em", color: "#6C7075", opacity: "calc(var(--p) * 6 - .8)" }}><span>LAN-06470</span><span>Voice</span><span>Human joined</span><span>Spoken to</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr .9fr", gap: "clamp(10px,2vw,26px)", padding: "14px clamp(16px,2.2vw,28px)", borderBottom: "1px solid rgba(21,24,28,.08)", background: "rgba(0,114,188,calc(var(--p) * .1))", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".08em", color: "#15181C", opacity: "calc(var(--p) * 6 - 1.4)" }}><span style={{ color: "#0072BC" }}>LAN-06471</span><span>Field visit</span><span>Paid in full</span><span style={{ color: "#0072BC" }}>Closed</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr .9fr", gap: "clamp(10px,2vw,26px)", padding: "14px clamp(16px,2.2vw,28px)", borderBottom: "1px solid rgba(21,24,28,.08)", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".08em", color: "#6C7075", opacity: "calc(var(--p) * 6 - 2)" }}><span>LAN-06473</span><span>SMS</span><span>Delivered</span><span>Contacted</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr .9fr", gap: "clamp(10px,2vw,26px)", padding: "14px clamp(16px,2.2vw,28px)", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".08em", color: "#6C7075", opacity: "calc(var(--p) * 6 - 2.6)" }}><span>LAN-06479</span><span>Intake</span><span>Returned</span><span>Rejected</span></div>
          </div>
          <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(16px,1.7vw,23px)", lineHeight: "1.5", color: "#43474C", margin: "clamp(26px,3vw,44px) 0 0", maxWidth: "40ch", opacity: "calc(var(--p) * 4 - 1.8)" }}>Not a spreadsheet assembled at month end. What was attempted, through which channel, with what result, and what it cost.</p>
        </div>
      </div>
    </section>
  );
}
