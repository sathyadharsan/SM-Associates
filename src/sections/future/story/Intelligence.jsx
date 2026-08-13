/**
 * 05 Intelligence — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function Intelligence() {
  return (
    <section data-track="" data-pin="" data-clip="" data-state="3" data-screen-label="05 Intelligence" style={{ "--p": "0", position: "relative", height: "280vh", background: "#FFFFFF", borderTop: "1px solid rgba(21,24,28,.1)" }}>
      <div style={{ position: "sticky", top: "0", height: "calc(100vh - 46px)", overflow: "hidden", display: "flex", alignItems: "center", padding: "74px 0 24px" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: "-20% -10%", backgroundImage: "radial-gradient(rgba(21,24,28,.17) 1px,transparent 1.4px)", backgroundSize: "26px 26px", transform: "translate3d(0,calc(var(--p) * -140px),0) scale(calc(1 + var(--p) * .15))", WebkitMaskImage: "radial-gradient(70% 60% at 58% 46%,#000,transparent 74%)", maskImage: "radial-gradient(70% 60% at 58% 46%,#000,transparent 74%)" }}></div>
        <div data-scene="" style={{ position: "relative", width: "100%", maxWidth: "1120px", margin: "0 auto", padding: "0 clamp(20px,6vw,90px)" }}>
          <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 clamp(20px,2.6vw,34px)" }}>Stage 03 · Intelligence <span style={{ color: "#9A9691" }}>[SIGNAL]</span></p>
          <h2 style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,4.4vw,60px)", lineHeight: "1.06", letterSpacing: "-.02em", margin: "0 0 clamp(34px,5vw,64px)", maxWidth: "22ch" }}>Four questions, answered before we spend anything</h2>
          <div style={{ display: "grid", gap: "clamp(16px,2vw,26px)" }}>
            <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(21px,3vw,42px)", lineHeight: "1.2", margin: "0", opacity: "calc(var(--p) * 5 - .1)", transform: "translate3d(calc(40px - var(--p) * 100px),0,0)" }}>Would they pay anyway?</p>
            <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(21px,3vw,42px)", lineHeight: "1.2", margin: "0", opacity: "calc(var(--p) * 5 - .9)", transform: "translate3d(calc(40px - var(--p) * 100px),0,0)" }}>When will they actually answer?</p>
            <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(21px,3vw,42px)", lineHeight: "1.2", margin: "0", opacity: "calc(var(--p) * 5 - 1.7)", transform: "translate3d(calc(40px - var(--p) * 100px),0,0)" }}>Will a conversation change anything?</p>
            <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(21px,3vw,42px)", lineHeight: "1.2", margin: "0", color: "#0072BC", opacity: "calc(var(--p) * 5 - 2.5)", transform: "translate3d(calc(40px - var(--p) * 100px),0,0)" }}>Unwilling, or unable?</p>
          </div>
          <p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "clamp(16px,1.5vw,20px)", lineHeight: "1.6", color: "#43474C", maxWidth: "44ch", margin: "clamp(34px,4vw,56px) 0 0", opacity: "calc(var(--p) * 4 - 2.4)" }}>The last one decides everything downstream. Unable is not solved by a firmer voice.</p>
        </div>
      </div>
    </section>
  );
}
