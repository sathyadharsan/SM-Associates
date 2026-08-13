/**
 * 11 The line — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function TheLine() {
  return (
    <section data-track="" data-pin="" data-clip="" data-dark="" data-state="7" data-screen-label="11 The line" style={{ "--p": "0", position: "relative", height: "340vh", background: "#0B0D10", color: "#F2F1ED" }}>
      <div style={{ position: "sticky", top: "0", height: "calc(100vh - 46px)", overflow: "hidden", display: "flex", alignItems: "center", padding: "74px 0 24px" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "radial-gradient(70% 60% at 50% 50%,rgba(242,241,237,calc(.03 + var(--p) * .06)),transparent 70%)" }}></div>
        <div data-scene="" style={{ position: "relative", width: "100%", maxWidth: "1080px", margin: "0 auto", padding: "0 clamp(20px,6vw,90px)" }}>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#4EA8E4", margin: "0 0 clamp(22px,3vw,40px)" }}>The line we will not cross</p>
          <div style={{ position: "relative" }}>
            <h2 style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(32px,5.6vw,82px)", lineHeight: "1.03", letterSpacing: "-.025em", margin: "0", maxWidth: "20ch", transform: "translate3d(0,calc(var(--p) * -90px),0)" }} data-beat="">Our systems can detect distress. We have built this so that we cannot use it.</h2>
            <div data-stack="" data-beat="" style={{ position: "absolute", top: "0", left: "0", right: "0", transform: "translate3d(0,calc(90px - var(--p) * 120px),0)" }}>
              <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(242,241,237,.5)", margin: "0 0 clamp(20px,2.6vw,32px)" }}>A distress signal may do three things, and nothing else</p>
              <div style={{ display: "grid", gap: "clamp(14px,1.8vw,22px)" }}>
                <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(22px,3.2vw,44px)", lineHeight: "1.16", margin: "0" }}>Bring a human onto the call.</p>
                <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(22px,3.2vw,44px)", lineHeight: "1.16", margin: "0" }}>Open a hardship conversation.</p>
                <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(22px,3.2vw,44px)", lineHeight: "1.16", margin: "0", color: "#4EA8E4" }}>Stop the escalation.</p>
              </div>
              <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(242,241,237,.5)", margin: "clamp(24px,3vw,40px) 0 0", lineHeight: "2" }}>Wired into the system, not written into a policy someone could amend.</p>
            </div>
            <div data-stack="" data-beat="" style={{ position: "absolute", top: "0", left: "0", right: "0", transform: "translate3d(0,calc(80px - var(--p) * 90px),0)" }}>
              <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(26px,4vw,58px)", lineHeight: "1.14", letterSpacing: "-.02em", margin: "0", maxWidth: "26ch" }}>A borrower in trouble should find that our systems become gentler, never sharper.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
