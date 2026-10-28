import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/lib/site";
import { PageHero, Photo, Enquire, TextLink } from "@/components/editorial";
import { Reveal } from "@/components/chrome";
export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  return {
    title: collection
      ? `${collection.name} — ${collection.chapter}`
      : "Collection",
    description: collection?.shortDescription,
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
  const next = collections[(collections.indexOf(c) + 1) % collections.length];
  return (
    <article className={`collection-world world-${c.slug}`}>
      <PageHero
        eyebrow={c.chapter}
        title={c.name}
        italic={c.subtitle}
        image={c.image}
        description={c.shortDescription}
      />
      <nav className="world-navigation" aria-label="Explore collection worlds">
        <span>THE COLLECTIONS</span>
        {collections.map((item) => (
          <Link
            key={item.slug}
            href={`/collections/${item.slug}`}
            aria-current={item.slug === slug ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <section className="section world-introduction">
        <Reveal>
          <p className="eyebrow">THE FEELING / {c.name}</p>
          <h2>{c.description}</h2>
        </Reveal>
        <Reveal>
          <p className="world-story">{c.story}</p>
          <dl className="world-facts">
            <div>
              <dt>THE ATMOSPHERE</dt>
              <dd>{c.atmosphere}</dd>
            </div>
            <div>
              <dt>THE SETTING</dt>
              <dd>{c.setting}</dd>
            </div>
            <div>
              <dt>THE MATERIALS</dt>
              <dd>{c.materials}</dd>
            </div>
          </dl>
        </Reveal>
      </section>
      <section className="section world-design">
        <Photo src={c.detailImage} alt={c.detailAlt} />
        <Reveal className="world-design-copy">
          <p className="eyebrow">THE DESIGN LANGUAGE</p>
          <h2>
            Every detail,
            <br />
            <em>in its element.</em>
          </h2>
          <div className="world-palette">
            {c.colours.map((colour) => (
              <span key={colour} style={{ backgroundColor: colour }} />
            ))}
            <p>{c.palette}</p>
          </div>
          <ul className="feature-list">
            {c.features.map((feature, i) => (
              <li key={feature}>
                <span>0{i + 1}</span>
                {feature}
              </li>
            ))}
          </ul>
          <Enquire subject={`the ${c.name} Collection — ${c.chapter}`} />
        </Reveal>
      </section>
      <section className="world-panorama">
        <Photo src={c.image} alt={c.imageAlt} />
        <span>{c.galleryCaption}</span>
      </section>
      <section className="section world-personal">
        <Reveal>
          <p className="eyebrow">YOUR OWN EXPRESSION</p>
          <h2>
            A world of its own.
            <br />
            <em>A story that’s yours.</em>
          </h2>
          <p>{c.customization}</p>
          <TextLink href="/customization">
            PERSONALISE {c.name.toUpperCase()}
          </TextLink>
        </Reveal>
        <div className="world-personal-details">
          {c.personalDetails.map((detail, i) => (
            <div key={detail}>
              <span>0{i + 1}</span>
              <h3>{detail}</h3>
            </div>
          ))}
        </div>
      </section>
      <Link className="next-world" href={`/collections/${next.slug}`}>
        <Photo src={next.image} alt={next.imageAlt} />
        <div>
          <p className="eyebrow">EXPLORE ANOTHER WORLD</p>
          <h2>
            {next.name} <ArrowUpRight size={35} />
          </h2>
          <span>{next.chapter}</span>
        </div>
      </Link>
    </article>
  );
}
