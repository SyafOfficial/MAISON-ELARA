import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section empty-state">
      <p className="eyebrow">404 / A LITTLE DETOUR</p>
      <h1>
        Let’s find your
        <br />
        <em>beautiful beginning.</em>
      </h1>
      <Link className="button dark" href="/">
        RETURN TO THE MAISON ↗
      </Link>
    </section>
  );
}
