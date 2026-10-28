import type { Metadata } from "next";
import { Enquire, PageHero, Photo } from "@/components/editorial";
import { EnquiryForm } from "@/components/interactions";
import { photos, site } from "@/lib/site";
export const metadata: Metadata = { title: "Contact" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="A BEAUTIFUL CONVERSATION"
        title="Let’s create something"
        italic="extraordinary."
        image={photos.couple}
      />
      <section className="section form-section">
        <div className="form-intro">
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2>
            It begins with
            <br />
            <em>a hello.</em>
          </h2>
          <p>
            Share a little of your story, and the celebration you imagine. Your
            enquiry opens a conversation, not a booking.
          </p>
          <Enquire
            subject="a wedding celebration"
            label="SAY HELLO ON WHATSAPP"
          />
          <dl className="contact-details">
            <dt>EMAIL</dt>
            <dd>{site.email}</dd>
            <dt>INSTAGRAM</dt>
            <dd>{site.instagram}</dd>
          </dl>
          <Photo src={photos.flowers} alt="Romantic floral arrangement" />
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}
