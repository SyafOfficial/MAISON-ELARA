import type { Metadata } from "next";
import { Enquire, PageHero } from "@/components/editorial";
import { InvitationPreview } from "@/components/interactions";
import { photos } from "@/lib/site";
export const metadata: Metadata = { title: "Digital Wedding Invitations" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="THE DIGITAL INVITATION ATELIER"
        title="An elegant beginning"
        italic="to your celebration."
        image={photos.flowers}
      />
      <section className="section">
        <InvitationPreview />
        <div className="three-columns invitation-features">
          <div>
            <p className="eyebrow">01 / YOUR STYLE</p>
            <h3>A personal visual language</h3>
            <p>
              From contemporary editorial to botanical romance, imagine an
              announcement that feels like you.
            </p>
          </div>
          <div>
            <p className="eyebrow">02 / EVERY SCREEN</p>
            <h3>Considered for mobile</h3>
            <p>
              Elegant proportions, readable details, and an experience designed
              for the way your guests discover it.
            </p>
          </div>
          <div>
            <p className="eyebrow">03 / A WARM WELCOME</p>
            <h3>An RSVP concept</h3>
            <p>
              A visual exploration of a graceful reply. This showcase does not
              collect or manage guest responses.
            </p>
          </div>
        </div>
        <Enquire
          subject="digital wedding invitations"
          label="ENQUIRE ABOUT DIGITAL INVITATIONS"
        />
      </section>
    </>
  );
}
