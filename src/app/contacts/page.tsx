import SiteShell from "@/components/SiteShell";
import { contactCards } from "@/data/contacts";

export default function ContactsPage() {
  return (
    <SiteShell showFooter={false}>
      <div className="contacts-page">
        <p className="eyebrow">seeking summer 2027 internships ᝰ</p>
        <h1>let&apos;s connect</h1>
        <div className="contact-grid">
          {contactCards.map((contact) => (
            <a
              className="contact-card"
              href={contact.href}
              key={contact.label}
              rel={contact.openInNewTab ? "noreferrer" : undefined}
              target={contact.openInNewTab ? "_blank" : undefined}
            >
              <span className={`contact-card-icon ${contact.iconClassName}`}>
                <img alt="" aria-hidden="true" src={contact.icon} />
              </span>
              <span className="contact-card-label">{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
