/**
 * 13 Close — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function Close() {
  return (
    <section data-track="" data-pin="" data-clip="" data-state="8" data-screen-label="13 Close" style={{ "--p": "0", position: "relative", height: "240vh", background: "#FFFFFF", borderTop: "1px solid rgba(21,24,28,.1)" }}>
      <div style={{ position: "sticky", top: "0", height: "calc(100vh - 46px)", overflow: "hidden", display: "flex", alignItems: "center", padding: "74px 0 24px" }}>
        <div data-scene="" style={{ position: "relative", width: "100%", maxWidth: "1080px", margin: "0 auto", padding: "0 clamp(20px,6vw,90px)" }}>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 clamp(22px,3vw,40px)", transform: "translate3d(0,calc(var(--p) * -50px),0)" }}>Why we are building this</p>
          <h2 style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(30px,5.2vw,74px)", lineHeight: "1.04", letterSpacing: "-.024em", margin: "0", maxWidth: "24ch", transform: "translate3d(0,calc(var(--p) * -50px),0)" }}>Recovery works best when it is intelligent, evidenced and humane. These are the same goal.</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(18px,3vw,36px)", alignItems: "center", marginTop: "clamp(40px,5vw,84px)", opacity: "calc(var(--p) * 4 - .8)" }}>
            <a href="#contact" style={{ display: "inline-block", padding: "19px 40px", background: "#0072BC", color: "#fff", fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11.5px", letterSpacing: ".22em", textTransform: "uppercase", whiteSpace: "nowrap", border: "1px solid #0072BC", transition: "background .3s ease,color .3s ease" }} className="fut-cta-solid">Start a conversation</a>
            <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".18em", textTransform: "uppercase", color: "#6C7075", margin: "0", lineHeight: "2" }}>LAN-06471 · closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
