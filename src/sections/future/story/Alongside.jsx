/**
 * 08 Systems alongside — ported from the approved Claude Design layout.
 * Scroll state arrives as the --p custom property set by useFutureScroll.
 */
export default function Alongside() {
  return (
    <section data-track="" data-state="5" data-screen-label="08 Systems alongside" style={{ "--p": ".5", position: "relative", background: "#FFFFFF", overflow: "hidden" }}>
      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "clamp(90px,13vh,170px) clamp(20px,6vw,90px)" }}>
        <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "10.5px", letterSpacing: ".24em", textTransform: "uppercase", color: "#0072BC", margin: "0 0 clamp(20px,2.6vw,34px)" }}>Working alongside</p>
        <h2 style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontWeight: "400", fontSize: "clamp(28px,4.4vw,60px)", lineHeight: "1.05", letterSpacing: "-.02em", margin: "0", maxWidth: "20ch" }}>Always running, never in the foreground</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1px", background: "rgba(21,24,28,.13)", marginTop: "clamp(40px,5vw,80px)", borderTop: "1px solid rgba(21,24,28,.13)", borderBottom: "1px solid rgba(21,24,28,.13)" }}>
          <div style={{ background: "#FFFFFF", padding: "clamp(22px,2.6vw,34px)" }}><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11.5px", letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 12px" }}>Quality assurance</p><p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "15px", lineHeight: "1.55", color: "#43474C", margin: "0" }}>Sampling today. We are building towards every call.</p></div>
          <div style={{ background: "#FFFFFF", padding: "clamp(22px,2.6vw,34px)" }}><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11.5px", letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 12px" }}>Sentiment</p><p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "15px", lineHeight: "1.55", color: "#43474C", margin: "0" }}>Trajectory of a conversation, not a flat score.</p></div>
          <div style={{ background: "#FFFFFF", padding: "clamp(22px,2.6vw,34px)" }}><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11.5px", letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 12px" }}>Coaching</p><p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "15px", lineHeight: "1.55", color: "#43474C", margin: "0" }}>What the best four or five people do, taught to everyone.</p></div>
          <div style={{ background: "#FFFFFF", padding: "clamp(22px,2.6vw,34px)" }}><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11.5px", letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 12px" }}>Field assurance</p><p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "15px", lineHeight: "1.55", color: "#43474C", margin: "0" }}>Verified, not assumed. Spoofed locations do not pass.</p></div>
          <div style={{ background: "#FFFFFF", padding: "clamp(22px,2.6vw,34px)" }}><p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "11.5px", letterSpacing: ".2em", textTransform: "uppercase", margin: "0 0 12px", color: "#0072BC" }}>Economics</p><p style={{ fontFamily: "'Iowan Old Style',Palatino,Georgia,serif", fontSize: "15px", lineHeight: "1.55", color: "#43474C", margin: "0" }}>What each account cost to recover. We are building towards it.</p></div>
        </div>
      </div>
    </section>
  );
}
