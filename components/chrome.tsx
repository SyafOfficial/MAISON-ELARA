"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/lib/site";
export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.dataset.hydrated = "true";
  }, []);
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const items = panel.current?.querySelectorAll<HTMLElement>("a,button");
    items?.[0]?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab" && items?.length) {
        const first = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <>
      <header
        className={`header ${scrolled || pathname !== "/" ? "solid" : ""}`}
      >
        <Link href="/" className="wordmark" aria-label="Maison Élára home">
          MAISON ÉLARA<span>THE ART OF CELEBRATION</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.slice(1, 4).map(([n, p]) => (
            <Link
              key={p}
              href={p}
              aria-current={pathname === p ? "page" : undefined}
            >
              {n}
            </Link>
          ))}
          <Link href="/gallery">The Journal</Link>
        </nav>
        <div className="header-actions">
          <Link className="enquire-nav" href="/contact">
            LET’S CREATE <ArrowUpRight size={13} />
          </Link>
          <button
            ref={toggle}
            onClick={() => setOpen(!open)}
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="full-menu"
          >
            <Menu size={23} />
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            id="full-menu"
            ref={panel}
            className="full-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="menu-top">
              <span className="eyebrow">MAISON ÉLARA / EXPLORE</span>
              <button
                onClick={() => {
                  setOpen(false);
                  toggle.current?.focus();
                }}
                aria-label="Close navigation"
              >
                <X />
              </button>
            </div>
            <nav>
              {navigation.map(([n, p], i) => (
                <Link onClick={() => setOpen(false)} href={p} key={p}>
                  <small>0{i + 1}</small>
                  {n}
                  <ArrowUpRight size={22} />
                </Link>
              ))}
            </nav>
            <p>Where Every Moment Becomes Timeless.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export function Intro() {
  const [show, setShow] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!reduced && !sessionStorage.getItem("elara-intro")) {
      const start = setTimeout(() => setShow(true), 0);
      const end = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("elara-intro", "seen");
      }, 2400);
      return () => {
        clearTimeout(start);
        clearTimeout(end);
      };
    }
  }, [reduced]);
  const close = () => {
    setShow(false);
    sessionStorage.setItem("elara-intro", "seen");
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: ".03em" }}
            animate={{ opacity: 1, letterSpacing: ".12em" }}
            transition={{ duration: 1 }}
            className="intro-logo"
          >
            MAISON ÉLARA
          </motion.div>
          <motion.span
            className="intro-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3 }}
          />
          <p>Where Every Moment Becomes Timeless.</p>
          <button onClick={close}>SKIP INTRO ↗</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <span className="eyebrow">A BEAUTIFUL BEGINNING</span>
          <h2>
            Your story.
            <br />
            <em>Our inspiration.</em>
          </h2>
        </div>
        <Link
          className="circle-link"
          href="/contact"
          aria-label="Start a conversation"
        >
          <ArrowUpRight size={36} />
        </Link>
      </div>
      <div className="footer-middle">
        <Link className="wordmark" href="/">
          MAISON ÉLARA<span>WHERE EVERY MOMENT BECOMES TIMELESS.</span>
        </Link>
        <nav aria-label="Footer navigation">
          {navigation.slice(1).map(([n, p]) => (
            <Link key={p} href={p}>
              {n}
            </Link>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} MAISON ÉLARA — A Portfolio Concept by
          NESNOVA.
        </span>
        <span>IMAGINED WITH INTENTION. CRAFTED WITH CARE.</span>
      </div>
      <p className="fine-print">
        Creative direction & development by NESNOVA — Web Development & Digital
        Solutions.
      </p>
    </footer>
  );
}
