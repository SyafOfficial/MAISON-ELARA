"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="section empty-state">
      <p className="eyebrow">A MOMENTARY PAUSE</p>
      <h1>
        Let’s try
        <br />
        <em>that again.</em>
      </h1>
      <p>We couldn’t load this experience. Please try again.</p>
      <button className="button dark" onClick={reset}>
        TRY AGAIN ↗
      </button>
    </section>
  );
}
