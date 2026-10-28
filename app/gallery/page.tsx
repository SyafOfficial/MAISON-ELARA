import type { Metadata } from "next";
import { PageHero } from "@/components/editorial";
import { Gallery } from "@/components/interactions";
import { photos } from "@/lib/site";
export const metadata: Metadata = { title: "Editorial Gallery" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="THE EDITORIAL GALLERY"
        title="An eye for beauty."
        italic="A feeling for detail."
        description="A visual notebook of textures, places, and moments that inspire our creative world."
        image={photos.venue}
      />
      <section className="section">
        <Gallery />
        <p className="fine-print">
          Original AI-generated editorial concept imagery. These scenes depict
          fictional settings and are not photographs of actual client events.
        </p>
      </section>
    </>
  );
}
