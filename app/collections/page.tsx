import type { Metadata } from "next";
import { CollectionGrid, PageHero } from "@/components/editorial";
export const metadata: Metadata = { title: "The Collections" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="THE COLLECTIONS"
        title="Three worlds."
        italic="One personal story."
        description="A glasshouse in bloom. A room after dark. A London house filled with light. Find the atmosphere that feels like you."
      />
      <section className="section">
        <CollectionGrid />
        <p className="concept-note">
          Original collection concepts by Maison Élára. Each explores a distinct
          creative direction.
        </p>
      </section>
    </>
  );
}
