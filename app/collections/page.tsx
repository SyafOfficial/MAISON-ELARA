import type { Metadata } from "next";
import { CollectionGrid, PageHero } from "@/components/editorial";
export const metadata: Metadata = { title: "The Collections" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="THE COLLECTIONS"
        title="A celebration."
        italic="Uniquely yours."
        description="Three expressions of beauty. Endless ways to make them your own."
      />
      <section className="section">
        <CollectionGrid />
        <p className="concept-note">
          Illustrative concept content. Collections represent creative
          directions, not confirmed commercial packages or services.
        </p>
      </section>
    </>
  );
}
