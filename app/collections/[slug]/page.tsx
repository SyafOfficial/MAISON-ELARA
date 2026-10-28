import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { collections, photos } from "@/lib/site";
import { PageHero, Photo, Enquire, TextLink } from "@/components/editorial";
export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: collections.find((c) => c.slug === slug)?.name || "Collection",
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = collections.find((c) => c.slug === slug);
  if (!c) notFound();
  return (
    <>
      <PageHero
        eyebrow="THE MAISON COLLECTIONS"
        title={c.name}
        italic={c.subtitle}
        image={c.image}
      />
      <section className="section collection-detail">
        <div>
          <p className="eyebrow">AN EXPRESSION OF YOU</p>
          <h2>{c.description}</h2>
          <p className="concept-note">
            Illustrative concept content — no prices, availability, or real
            services are promised.
          </p>
        </div>
        <div>
          <p>
            Envision a celebration shaped by considered textures, beautiful
            proportions, and the people who matter most. This collection is a
            starting point for a personal visual story.
          </p>
          <ul className="feature-list">
            {c.features.map((f, i) => (
              <li key={f}>
                <span>0{i + 1}</span>
                {f}
              </li>
            ))}
          </ul>
          <Enquire subject={`the ${c.name} Collection`} />
        </div>
      </section>
      <section className="section detail-gallery">
        <Photo src={photos.detail} alt="Fine wedding details" />
        <Photo src={c.image} alt={`${c.name} concept inspiration`} />
        <Photo src={photos.couple} alt="Intimate wedding moment" />
      </section>
      <section className="section customization-callout">
        <p className="eyebrow">MAKE IT YOUR OWN</p>
        <h2>
          A little more <em>you.</em>
        </h2>
        <p>{c.customization}</p>
        <TextLink href="/customization">EXPLORE PERSONALIZATION</TextLink>
      </section>
    </>
  );
}
