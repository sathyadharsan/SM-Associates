/**
 * FuturePage — /future
 *
 * The complete cinematic scroll experience: six acts, eighteen scenes,
 * one continuous story. This file is intentionally thin — it only
 * sequences the acts, each of which owns its own scroll mechanics and
 * mobile/reduced-motion fallback. See the individual Act components in
 * src/sections/future/ for the storytelling detail behind each beat,
 * and the published director's treatment for the full scene-by-scene
 * direction this implements.
 *
 * Deliberately does not end in a CTA, a contact link, or any clickable
 * element beyond the site's own persistent header/footer — the brief
 * for this page is explicit that the story simply ends.
 */

import { ScrollProgressBar } from '../components/PremiumUIEffects';
import ActI_TheWorldWeKnow from '../sections/future/ActI_TheWorldWeKnow';
import ActII_TheBreakingPoint from '../sections/future/ActII_TheBreakingPoint';
import ActIII_IntelligenceAwakens from '../sections/future/ActIII_IntelligenceAwakens';
import ActIV_HumansAndIntelligence from '../sections/future/ActIV_HumansAndIntelligence';
import ActV_ConnectedEcosystem from '../sections/future/ActV_ConnectedEcosystem';
import ActVI_Part1 from '../sections/future/ActVI_Part1';
import ActVI_Part2 from '../sections/future/ActVI_Part2';
export default function FuturePage() {
  return (
    <div className="bg-white relative">
      {/* Every act's own heading is an h2 — deliberately, since none of
          them is "the" page title, each is one beat in a continuous
          story. Screen readers and search engines still need exactly
          one h1 identifying the page itself, so this one is visually
          hidden rather than inserted into the visual design. */}
      <h1 className="sr-only">The Future of Recovery — SM Associates</h1>
      <ScrollProgressBar />
      <ActI_TheWorldWeKnow />
      <ActII_TheBreakingPoint />
      <ActIII_IntelligenceAwakens />
      <ActIV_HumansAndIntelligence />
      <ActV_ConnectedEcosystem />
      <div id="future-act-6">
        <ActVI_Part1 />
        <ActVI_Part2 />
      </div>
    </div>
  );
}
