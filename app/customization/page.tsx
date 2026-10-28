import type { Metadata } from "next";
import { PageHero, Photo } from "@/components/editorial";
import { EnquiryForm } from "@/components/interactions";
import { photos } from "@/lib/site";
export const metadata: Metadata = { title: "Bespoke Customization" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="BESPOKE BY MAISON ÉLARA"
        title="Designed around"
        italic="your story."
        description="The smallest personal detail can make the most beautiful difference."
        image={photos.flowers}
      />
      <section className="section form-section">
        <div className="form-intro">
          <p className="eyebrow">A WORLD OF POSSIBILITY</p>
          <h2>
            Imagine it.
            <br />
            <em>Make it yours.</em>
          </h2>
          <p>
            Explore a palette of illustrative enhancements, then share the
            celebration you have in mind. This is where a personal creative
            conversation begins.
          </p>
          <p className="concept-note">
            Concept content. Enhancements are creative examples, not confirmed
            service offerings.
          </p>
          <Photo
            src={photos.detail}
            alt="Thoughtfully styled wedding details"
          />
        </div>
        <EnquiryForm bespoke />
      </section>
    </>
  );
}
