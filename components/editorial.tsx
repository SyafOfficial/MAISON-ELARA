import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import { collections, photos, whatsapp, site } from "@/lib/site";
import { Reveal } from "./chrome";
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 700px) 100vw, 60vw"
        priority={priority}
      />
    </div>
  );
}
export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link className={`text-link ${light ? "light" : ""}`} href={href}>
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}
export function Enquire({
  subject,
  label = "ENQUIRE ABOUT THIS COLLECTION",
}: {
  subject: string;
  label?: string;
}) {
  return (
    <div className="enquiry-action">
      <a
        className="button dark"
        href={whatsapp(
          `Hello Maison Élára, I would like to enquire about ${subject}. Could you share more information?`,
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
        <ArrowUpRight size={16} />
      </a>
      {!site.configured && <small>WhatsApp contact to be confirmed.</small>}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  italic,
  description,
  image = photos.table,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <Photo
        src={image}
        alt="Editorial wedding setting with refined floral styling"
        priority
      />
      <div className="page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title}
          <br />
          <em>{italic}</em>
        </h1>
        {description && <p>{description}</p>}
      </div>
      <span className="hero-note">THE ART OF A PERSONAL CELEBRATION</span>
    </section>
  );
}
export function CollectionGrid() {
  return (
    <div className="collection-grid">
      {collections.map((c, i) => (
        <Reveal key={c.slug} className={`collection-item item-${i}`}>
          <Link href={`/collections/${c.slug}`} className="collection-photo">
            <Photo src={c.image} alt={c.imageAlt} />
            <span className="photo-index">
              0{i + 1} / {c.chapter}
            </span>
            <span className="photo-arrow">
              <ArrowUpRight />
            </span>
          </Link>
          <div className="collection-caption">
            <h3>
              <Link href={`/collections/${c.slug}`}>{c.name}</Link>
            </h3>
            <span>{c.chapter}</span>
          </div>
          <p className="collection-description">{c.shortDescription}</p>
          <div
            className="collection-palette"
            aria-label={`${c.name} palette: ${c.palette}`}
          >
            {c.colours.map((colour) => (
              <span key={colour} style={{ backgroundColor: colour }} />
            ))}
            <small>{c.palette}</small>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
export function AboutStory() {
  return (
    <section className="section about-section">
      <Reveal>
        <p className="eyebrow">THE MAISON PHILOSOPHY</p>
        <h2>
          Every love story
          <br />
          deserves an
          <br />
          <em>extraordinary setting.</em>
        </h2>
        <div className="about-copy">
          <span className="tiny-star">✦</span>
          <div>
            <p>
              Some moments are too meaningful to be ordinary. We imagine
              celebrations that feel as personal as the stories behind them —
              considered, quietly expressive, and beautifully yours.
            </p>
            <p>
              The Maison Élára creative approach brings thoughtful design,
              meaningful details, and timeless presentation into one personal
              story.
            </p>
            <TextLink href="/about">DISCOVER OUR STORY</TextLink>
          </div>
        </div>
      </Reveal>
      <Reveal className="about-image">
        <Photo
          src={photos.table}
          alt="An elegant wedding table layered with flowers and fine glassware"
        />
        <span className="image-caption">
          THE BEAUTY IS IN THE DETAILS. ALWAYS.
        </span>
        <div className="floating-caption">
          Thoughtfully curated.
          <br />
          <em>Beautifully remembered.</em>
        </div>
      </Reveal>
    </section>
  );
}
export function HomePage() {
  return (
    <>
      <section className="hero">
        <Photo
          src={photos.hero}
          alt="An intimate English townhouse reception with pale-blue linen and seasonal flowers"
          priority
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <Reveal>
            <p className="eyebrow">ENGLISH ROMANCE. A PERSONAL CELEBRATION.</p>
            <h1>
              Extraordinary
              <br />
              Celebrations.
              <br />
              <em>Timeless Memories.</em>
            </h1>
            <p className="hero-description">
              Curated wedding experiences, thoughtfully designed
              <br className="desktop-only" /> for life’s most unforgettable
              moments.
            </p>
            <div className="hero-buttons">
              <Link className="button ivory" href="/collections">
                EXPLORE COLLECTIONS <ArrowUpRight size={15} />
              </Link>
              <TextLink href="/about" light>
                DISCOVER OUR STORY
              </TextLink>
            </div>
          </Reveal>
        </div>
        <div className="hero-bottom">
          <a href="#philosophy" className="scroll-link">
            <ArrowDown size={16} />
            <span>SCROLL TO DISCOVER</span>
          </a>
          <span className="hero-location">
            A CELEBRATION OF LOVE. AN EXPRESSION OF YOU.
          </span>
          <span>01 — 03</span>
        </div>
        <div className="hero-side">THE ART OF CELEBRATION</div>
      </section>
      <div className="intro-strip">
        <span>INTENTION IN EVERY DETAIL</span>
        <span>✦</span>
        <span>BEAUTY IN EVERY MOMENT</span>
        <span>✦</span>
        <span>YOUR STORY, TIMELESSLY TOLD</span>
      </div>
      <div id="philosophy">
        <AboutStory />
      </div>
      <section className="section collection-section">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">THE COLLECTIONS</p>
            <h2>
              A celebration.
              <br />
              <em>Uniquely yours.</em>
            </h2>
          </div>
          <div>
            <p>
              From London glasshouses to intimate townhouse tables,
              <br />
              explore three distinctly different ways to celebrate.
            </p>
            <TextLink href="/collections">EXPLORE ALL COLLECTIONS</TextLink>
          </div>
        </Reveal>
        <CollectionGrid />
        <p className="fine-print">
          Three creative worlds, each with its own point of view.
        </p>
      </section>
      <section className="bespoke-banner">
        <Photo src={photos.venue} alt="Beautifully styled wedding reception" />
        <Reveal>
          <p className="eyebrow">BEYOND THE EXPECTED</p>
          <h2>
            Never ordinary.
            <br />
            <em>Always personal.</em>
          </h2>
          <p>
            A vision as individual as your love story.
            <br />
            Let’s imagine something that could only be yours.
          </p>
          <TextLink href="/customization" light>
            DISCOVER BESPOKE
          </TextLink>
        </Reveal>
      </section>
      <section className="section experience-section">
        <Reveal>
          <p className="eyebrow">THE FINISHING TOUCHES</p>
          <h2>
            Considered details.
            <br />
            <em>Lasting impressions.</em>
          </h2>
        </Reveal>
        <div className="experience-grid">
          {[
            [
              "01",
              "A beautiful first impression",
              "Digital invitations that set the tone for everything to come.",
              "/e-invitations",
            ],
            [
              "02",
              "Memories, brought together",
              "Discover our interactive QR wedding gallery concept.",
              "/qr-gallery",
            ],
            [
              "03",
              "The freedom to imagine",
              "Curated combinations and individual finishing touches.",
              "/combinations",
            ],
          ].map(([num, title, desc, path]) => (
            <Link key={path} href={path}>
              <span className="eyebrow">{num} / THE EXPERIENCE</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Plus size={21} />
            </Link>
          ))}
        </div>
      </section>
      <section className="journal-preview section">
        <Reveal>
          <p className="eyebrow">THE EDITORIAL</p>
          <h2>
            A world of <em>inspiration.</em>
          </h2>
          <TextLink href="/gallery">EXPLORE THE GALLERY</TextLink>
        </Reveal>
        <Photo
          src={photos.couple}
          alt="A romantic wedding moment in a garden"
        />
        <Photo src={photos.flowers} alt="Romantic floral wedding reference" />
      </section>
    </>
  );
}
