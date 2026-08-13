/**
 * 01 Hero — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function Hero() {
  return (
    <section data-track="" data-pin="" data-clip="" data-state="0" data-screen-label="01 Hero" style={{ "--p": "0", position: "relative", height: "240vh", background: "#FFFFFF" }}>
      <div style={{ position: "sticky", top: "0", height: "calc(100vh - 46px)", overflow: "hidden", display: "flex", alignItems: "center", padding: "74px 0 24px" }}>
        <div data-scene="" style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px,6vw,90px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(36px,6vw,90px)", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 clamp(22px,3vw,38px)" }}>The Next Chapter</p>
            <h1 style={{ fontFamily: "'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(38px,7vw,98px)", lineHeight: ".98", letterSpacing: "-.025em", margin: "0", textWrap: "balance", transform: "translate3d(0,calc(var(--p) * -80px),0)", opacity: "calc(1 - var(--p) * 1.4)" }}>Recovery, rebuilt around the borrower</h1>
            <p data-reveal="" style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(17px,1.7vw,24px)", lineHeight: "1.5", color: "#43474C", maxWidth: "34ch", margin: "clamp(26px,3vw,44px) 0 0", opacity: "calc(.9 - var(--p) * 2)", transform: "translate3d(0,calc(var(--p) * -50px),0)" }}>Not how do we chase harder. What does this person need in order to pay.</p>
            <a href="#intake" data-reveal="" style={{ display: "inline-block", marginTop: "clamp(30px,3.5vw,46px)", padding: "18px 38px", border: "1px solid #0072BC", color: "#0072BC", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11.5px", letterSpacing: ".22em", textTransform: "uppercase", whiteSpace: "nowrap", transition: "background .3s ease,color .3s ease", opacity: "calc(.9 - var(--p) * 2.4)" }} className="fut-cta-outline">See how it works</a>
          </div>
          <div style={{ justifySelf: "end", width: "min(100%,400px)", transform: "translate3d(0,calc(var(--p) * -140px),0) scale(calc(1 - var(--p) * .06))" }}>
            <div style={{ position: "relative" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: "14px -14px -18px 14px", background: "rgba(21,24,28,.07)", filter: "blur(18px)" }}></div>
              <div style={{ position: "relative", background: "#F7F6F3", border: "1px solid rgba(21,24,28,.14)", padding: "clamp(22px,2.4vw,32px)" }}>
                <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10px", letterSpacing: ".22em", color: "#6C7075", margin: "0 0 18px", textTransform: "uppercase" }}>Lender file · received</p>
                <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "clamp(20px,2.4vw,30px)", letterSpacing: ".06em", margin: "0" }}>LAN-06471</p>
                <div style={{ height: "1px", background: "rgba(21,24,28,.14)", margin: "22px 0 18px" }}></div>
                <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11px", letterSpacing: ".14em", color: "#0072BC", margin: "0", textTransform: "uppercase" }}>Awaiting validation</p>
              </div>
            </div>
            <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".18em", color: "#6C7075", margin: "22px 0 0", lineHeight: "1.9", textTransform: "uppercase" }}>One account, followed to closure</p>
          </div>
        </div>
      </div>
    </section>
  );
}
