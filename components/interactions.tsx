"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  QrCode,
  ScanLine,
  X,
} from "lucide-react";
import { collections, photos, site, whatsapp } from "@/lib/site";
const enhancements = [
  "Premium floral arrangements",
  "Personalized wedding stationery",
  "Custom welcome signage",
  "Luxury gift presentation",
  "Additional decorative styling",
  "Guest experience enhancements",
];
export function EnquiryForm({ bespoke = false }: { bespoke?: boolean }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div>
      {bespoke && (
        <div className="enhancements">
          <p className="eyebrow">01 / COLLECTION ENHANCEMENTS</p>
          <h2>
            The details that
            <br />
            <em>make it yours.</em>
          </h2>
          <p>
            Explore illustrative additions. Select a detail to include it in
            your enquiry.
          </p>
          <div className="enhancement-options">
            {enhancements.map((item) => (
              <button
                key={item}
                aria-pressed={selected.includes(item)}
                onClick={() =>
                  setSelected((s) =>
                    s.includes(item)
                      ? s.filter((x) => x !== item)
                      : [...s, item],
                  )
                }
              >
                <span>{item}</span>
                {selected.includes(item) ? <Check size={17} /> : <span>+</span>}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="form-header">
        <p className="eyebrow">
          {bespoke
            ? "02 / PERSONAL BESPOKE REQUESTS"
            : "A CONVERSATION STARTS HERE"}
        </p>
        <h2>
          {bespoke ? "Tell us your" : "Let’s imagine"}{" "}
          <em>{bespoke ? "vision." : "together."}</em>
        </h2>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const msg = [
            `Hello Maison Élára, I would like to discuss ${bespoke ? "my bespoke wedding vision" : "a celebration"}.`,
            ...Array.from(data.entries())
              .filter(([, v]) => String(v).trim())
              .map(([k, v]) => `${k}: ${String(v).trim()}`),
            selected.length ? `Enhancements: ${selected.join(", ")}` : "",
          ]
            .filter(Boolean)
            .join("\n");
          setMessage(msg);
          setStatus(
            "Your enquiry is ready. Continue to WhatsApp to review and send it. Nothing has been stored or booked.",
          );
        }}
        className="enquiry-form"
      >
        <div className="form-grid">
          <label>
            FULL NAME *
            <input
              name="Name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Your full name"
            />
          </label>
          <label>
            CONTACT NUMBER *
            <input
              name="Contact number"
              type="tel"
              autoComplete="tel"
              required
              pattern={String.raw`[+0-9\s\(\)\.\-]{7,25}`}
              maxLength={25}
              placeholder="+44 …"
              title="Enter a contact number with 7–25 characters"
            />
          </label>
          <label>
            EMAIL ADDRESS <span>(OPTIONAL)</span>
            <input
              name="Email"
              type="email"
              autoComplete="email"
              maxLength={254}
              placeholder="you@example.com"
            />
          </label>
          <label>
            PREFERRED COLLECTION
            <select name="Collection" defaultValue="Still exploring">
              <option>Still exploring</option>
              {collections.map((c) => (
                <option key={c.slug}>{c.name}</option>
              ))}
              <option>Digital Invitations</option>
              <option>QR Gallery Experience</option>
            </select>
          </label>
          <label>
            EVENT DATE <span>(OPTIONAL)</span>
            <input name="Event date" type="date" />
          </label>
          <label className="full-field">
            {bespoke ? "CUSTOMIZATION REQUIREMENTS" : "YOUR VISION"} *
            <textarea
              required
              name="Requirements"
              rows={4}
              maxLength={2500}
              placeholder="A place, a feeling, a little detail you’ve always imagined…"
            />
          </label>
          <label className="full-field">
            ADDITIONAL NOTES <span>(OPTIONAL)</span>
            <textarea
              name="Additional notes"
              rows={2}
              maxLength={1000}
              placeholder="Anything else you would like to share"
            />
          </label>
        </div>
        <p className="fine-print">
          Your details are used only to prepare a WhatsApp message in your
          browser. We do not save enquiries. You choose whether to send the
          message on WhatsApp.
        </p>
        <button className="button dark" type="submit">
          DISCUSS MY VISION <ArrowUpRight size={16} />
        </button>
        <div aria-live="polite">
          {status && (
            <div className="form-success">
              <Check size={20} />
              <p>{status}</p>
              <a
                className="text-link"
                href={whatsapp(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                CONTINUE TO WHATSAPP <ArrowUpRight size={16} />
              </a>
            </div>
          )}
        </div>
        {!site.configured && (
          <p className="fine-print">
            WhatsApp contact is not yet configured. Your enquiry can be
            prepared, but cannot be delivered to a business number yet.
          </p>
        )}
      </form>
    </div>
  );
}
const categories = [
  "All",
  "Ceremony",
  "Reception",
  "Floral Details",
  "Wedding Stationery",
  "Bespoke Styling",
  "Intimate Moments",
];
const items = [
  {
    image: "/images/wildflower-hero.webp",
    category: "Ceremony",
    title: "Wildflower / A glasshouse romance",
  },
  {
    image: "/images/nocturne-hero.webp",
    category: "Reception",
    title: "Nocturne / The evening unfolds",
  },
  {
    image: "/images/townhouse-hero.webp",
    category: "Bespoke Styling",
    title: "The Townhouse / Afternoon light",
  },
  {
    image: "/images/wildflower-detail.webp",
    category: "Floral Details",
    title: "Wildflower / Meadow at the table",
  },
  {
    image: photos.detail,
    category: "Wedding Stationery",
    title: "The paper atelier",
  },
  {
    image: photos.couple,
    category: "Intimate Moments",
    title: "A moment for two",
  },
  {
    image: "/images/nocturne-detail.webp",
    category: "Reception",
    title: "Nocturne / By candlelight",
  },
  {
    image: "/images/townhouse-detail.webp",
    category: "Bespoke Styling",
    title: "The Townhouse / A place for you",
  },
];
export function Gallery({ compact = false }: { compact?: boolean }) {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const close = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const galleryItems = compact ? items.slice(0, 6) : items;
  const filtered = galleryItems.filter(
    (x) => category === "All" || x.category === category,
  );
  useEffect(() => {
    if (active === null) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    close.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((a) => (a === null ? null : (a + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setActive((a) =>
          a === null ? null : (a + filtered.length - 1) % filtered.length,
        );
      if (e.key === "Tab") {
        e.preventDefault();
        const buttons =
          document.querySelectorAll<HTMLButtonElement>(".lightbox button");
        const idx = Array.from(buttons).indexOf(
          document.activeElement as HTMLButtonElement,
        );
        buttons[
          (idx + (e.shiftKey ? buttons.length - 1 : 1)) % buttons.length
        ]?.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", key);
      opener.current?.focus();
    };
  }, [active, filtered.length]);
  return (
    <>
      <p className="concept-note">
        Concept / reference imagery. These are not completed customer projects.
      </p>
      {!compact && (
        <div className="gallery-filters" aria-label="Filter gallery">
          {categories.map((c) => (
            <button
              key={c}
              className={category === c ? "active" : ""}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="masonry">
        {filtered.map((item, i) => (
          <button
            key={item.title}
            onClick={(e) => {
              opener.current = e.currentTarget;
              setActive(i);
            }}
            aria-label={`View ${item.title}`}
          >
            <div className="gallery-image">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 600px) 100vw, 33vw"
              />
            </div>
            <span>
              {item.category}
              <ArrowUpRight size={16} />
            </span>
            <h3>{item.title}</h3>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              ref={close}
              className="lightbox-close"
              onClick={() => setActive(null)}
              aria-label="Close image viewer"
            >
              <X />
            </button>
            <button
              className="lightbox-prev"
              onClick={() =>
                setActive((active + filtered.length - 1) % filtered.length)
              }
              aria-label="Previous image"
            >
              <ArrowLeft />
            </button>
            <div className="lightbox-image">
              <Image
                src={filtered[active].image}
                alt={filtered[active].title}
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
              />
              <p>
                {filtered[active].title} — {active + 1} / {filtered.length}
              </p>
            </div>
            <button
              className="lightbox-next"
              onClick={() => setActive((active + 1) % filtered.length)}
              aria-label="Next image"
            >
              <ArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export function QRDemo() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step !== 1) return;
    const t = setTimeout(() => setStep(2), 1500);
    return () => clearTimeout(t);
  }, [step]);
  return (
    <div className="qr-demo">
      <div className="qr-stage">
        <Image
          src={photos.table}
          alt="Sample wedding table arrangement"
          fill
          sizes="60vw"
        />
        <div className="qr-card">
          <span className="eyebrow">MAISON ÉLARA</span>
          <h3>
            A moment
            <br />
            <em>to remember.</em>
          </h3>
          <div className={`qr-symbol ${step === 1 ? "scanning" : ""}`}>
            <QrCode size={100} strokeWidth={1} />
            {step === 1 && <span />}
          </div>
          <p>TABLE No. 01</p>
          <small>ILLUSTRATIVE QR CARD · DEMO ONLY</small>
        </div>
      </div>
      <div className="qr-controls">
        <p className="eyebrow">AN INTERACTIVE CONCEPT</p>
        <h2>
          One scan.
          <br />
          <em>A thousand memories.</em>
        </h2>
        <p>
          Imagine a beautiful card at your table, opening a thoughtfully curated
          collection of photographs from the celebration.
        </p>
        <ol>
          <li>A personal card, styled to your setting.</li>
          <li>A simple scan with your phone.</li>
          <li>A gallery of moments to revisit.</li>
        </ol>
        <button
          className="button dark"
          disabled={step === 1}
          onClick={() => setStep(step === 2 ? 0 : 1)}
        >
          <ScanLine size={18} />
          {step === 0
            ? "SIMULATE A SCAN"
            : step === 1
              ? "SIMULATING SCAN…"
              : "RESET DEMONSTRATION"}
        </button>
        <p className="fine-print">
          This simulation does not use your camera. The sample symbol is
          decorative. Production photo storage, guest access, and table
          assignment require separate backend development.
        </p>
        <div aria-live="polite">
          {step === 2 && (
            <p className="scan-success">
              <Check size={18} /> Demo gallery revealed below.
            </p>
          )}
        </div>
      </div>
      {step === 2 && (
        <div className="demo-gallery">
          <p className="eyebrow">TABLE 01 / THE DEMONSTRATION GALLERY</p>
          <Gallery compact />
        </div>
      )}
    </div>
  );
}
export function InvitationPreview() {
  const [style, setStyle] = useState(0);
  const designs = [
    {
      label: "The Botanical",
      names: "Amelia & Oliver",
      date: "SATURDAY, 12 JUNE 2027",
      className: "botanical",
    },
    {
      label: "The Editorial",
      names: "Isabelle & James",
      date: "SUNDAY, 18 JULY 2027",
      className: "editorial",
    },
    {
      label: "The Minimalist",
      names: "Sophia & Alexander",
      date: "SATURDAY, 14 AUGUST 2027",
      className: "minimal",
    },
  ];
  const d = designs[style];
  return (
    <div className="invitation-showcase">
      <div className="invitation-controls">
        <p className="eyebrow">A PERSONAL FIRST IMPRESSION</p>
        <h2>
          Beautifully sent.
          <br />
          <em>Fondly anticipated.</em>
        </h2>
        <p>
          A digital keepsake, imagined with the same care as the celebration
          itself. Explore three invitation directions.
        </p>
        <div
          className="invitation-tabs"
          role="tablist"
          aria-label="Invitation style"
        >
          {designs.map((x, i) => (
            <button
              role="tab"
              aria-selected={style === i}
              aria-controls="invitation-panel"
              id={`invitation-tab-${i}`}
              tabIndex={style === i ? 0 : -1}
              key={x.label}
              onClick={() => setStyle(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  const n = (i + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                  setStyle(n);
                  document.getElementById(`invitation-tab-${n}`)?.focus();
                }
              }}
            >
              {x.label}
              <ArrowUpRight size={15} />
            </button>
          ))}
        </div>
        <p className="fine-print">
          Fictional names and dates. Design previews only; RSVP is a visual
          concept.
        </p>
      </div>
      <div className="phone-scene">
        <div className="phone-mockup">
          <div className="phone-island" />
          <div
            role="tabpanel"
            id="invitation-panel"
            aria-labelledby={`invitation-tab-${style}`}
            className={`invitation-design ${d.className}`}
          >
            <span className="invitation-flower">❧</span>
            <p>TOGETHER WITH THEIR FAMILIES</p>
            <h3>
              {d.names.split(" & ")[0]}
              <em>&</em>
              {d.names.split(" & ")[1]}
            </h3>
            <p>
              JOYFULLY INVITE YOU TO CELEBRATE
              <br />
              THEIR WEDDING
            </p>
            <span className="invitation-rule" />
            <p>{d.date}</p>
            <span className="invitation-rsvp">KINDLY RSVP</span>
            <small>DESIGN CONCEPT · NON-INTERACTIVE</small>
          </div>
        </div>
        <span className="phone-caption">THE ART OF A BEAUTIFUL BEGINNING</span>
      </div>
    </div>
  );
}
