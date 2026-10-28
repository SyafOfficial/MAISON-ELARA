import type { Metadata } from "next";
import { Enquire, PageHero } from "@/components/editorial";
import { QRDemo } from "@/components/interactions";
import { photos } from "@/lib/site";
export const metadata: Metadata = { title: "QR Gallery Experience" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="THE GALLERY EXPERIENCE / DEMONSTRATION"
        title="Every moment,"
        italic="beautifully remembered."
        image={photos.table}
      />
      <section className="section">
        <QRDemo />
        <div className="centered-cta">
          <Enquire
            subject="the QR wedding gallery experience"
            label="ENQUIRE ABOUT OUR GALLERY EXPERIENCE"
          />
        </div>
      </section>
    </>
  );
}
