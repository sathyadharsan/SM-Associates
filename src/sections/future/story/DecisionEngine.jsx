/**
 * 05b Decision engine — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function DecisionEngine() {
  return (
    <section data-track="" data-pin="" data-clip="" data-state="3" data-screen-label="05b Decision engine" style={{ "--p": "0", position: "relative", height: "300vh", background: "#FFFFFF", borderTop: "1px solid rgba(21,24,28,.1)" }}>
      <div style={{ position: "sticky", top: "0", height: "calc(100vh - 46px)", overflow: "hidden", display: "flex", alignItems: "center", padding: "74px 0 24px" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "radial-gradient(70% 60% at 50% 46%,rgba(0,114,188,calc(.04 + var(--p) * .07)),transparent 70%)" }}></div>
        <div data-scene="" style={{ position: "relative", width: "100%", maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(20px,6vw,90px)" }}>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 clamp(20px,2.6vw,34px)" }}>The engine underneath</p>
          <h2 style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,4.8vw,66px)", lineHeight: "1.04", letterSpacing: "-.02em", margin: "0", maxWidth: "20ch" }}>Every channel runs off one decision, not one schedule</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "1px", background: "rgba(21,24,28,.13)", marginTop: "clamp(34px,4.5vw,70px)", borderTop: "1px solid rgba(21,24,28,.13)", borderBottom: "1px solid rgba(21,24,28,.13)" }}>
            <div style={{ background: "#FFFFFF", padding: "clamp(20px,2.4vw,32px)", opacity: "calc(var(--p) * 6 - .2)" }}>
              <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9A9691", margin: "0 0 14px" }}>Signals in</p>
              <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "15.5px", lineHeight: "1.5", color: "#43474C", margin: "0" }}>Every delivery, read, reply, call outcome and visit, from every channel, into one case memory.</p>
            </div>
            <div style={{ background: "#FFFFFF", padding: "clamp(20px,2.4vw,32px)", opacity: "calc(var(--p) * 6 - 1)" }}>
              <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9A9691", margin: "0 0 14px" }}>Decision</p>
              <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "15.5px", lineHeight: "1.5", color: "#43474C", margin: "0" }}>One engine picks the next action per account: which channel, which hour, which language, which resource.</p>
            </div>
            <div style={{ background: "#FFFFFF", padding: "clamp(20px,2.4vw,32px)", opacity: "calc(var(--p) * 6 - 1.8)" }}>
              <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9A9691", margin: "0 0 14px" }}>Guardrails</p>
              <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "15.5px", lineHeight: "1.5", color: "#43474C", margin: "0" }}>Consent, permitted hours, contact limits and disclosures evaluated once, before anything is sent or dialled.</p>
            </div>
            <div style={{ background: "#FFFFFF", padding: "clamp(20px,2.4vw,32px)", opacity: "calc(var(--p) * 6 - 2.6)" }}>
              <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".2em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 14px" }}>Action out</p>
              <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "15.5px", lineHeight: "1.5", color: "#43474C", margin: "0" }}>Message, call, agent or doorstep. Escalation happens because a signal earned it, never because a list ran out.</p>
            </div>
          </div>
          <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "clamp(8px,1.6vw,20px)", marginTop: "clamp(24px,3vw,44px)" }}>
            <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".2em", textTransform: "uppercase", color: "#6C7075", whiteSpace: "nowrap" }}>Outcome</span>
            <span style={{ flex: "1", height: "1px", background: "linear-gradient(90deg,rgba(0,114,188,.9),rgba(21,24,28,.25))", transform: "scaleX(calc(.1 + var(--p) * .9))", transformOrigin: "right" }}></span>
            <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".2em", textTransform: "uppercase", color: "#0072BC", whiteSpace: "nowrap", opacity: "calc(var(--p) * 4 - 2)" }}>Back into the next decision</span>
          </div>
          <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(17px,2vw,26px)", lineHeight: "1.35", margin: "clamp(26px,3.2vw,48px) 0 0", maxWidth: "34ch", opacity: "calc(var(--p) * 4 - 2.2)" }}>The account is worked by one system with many hands, not by four teams moving at different speeds.</p>
        </div>
      </div>
    </section>
  );
}
