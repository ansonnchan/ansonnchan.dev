import SiteShell from "@/components/SiteShell";

const contacts = [
  { label: "email", value: "ac1800@student.ubc.ca", href: "mailto:ac1800@student.ubc.ca", icon: "/assets/icons/mail-icon.png", className: "contact-card-mail" },
  { label: "github", value: "github.com/ansonnchan", href: "https://github.com/ansonnchan", icon: "/assets/icons/github_icon.png", className: "contact-card-github" },
  { label: "linkedin", value: "linkedin.com/in/ansonnchan", href: "https://www.linkedin.com/in/ansonnchan", icon: "/assets/icons/linkedin-icon.png", className: "contact-card-linkedin" },
  { label: "résumé", value: "view my résumé", href: "/resume", icon: "/assets/icons/resume-download.png", className: "contact-card-resume" }
];

export default function ContactsPage() {
  return (
    <SiteShell showFooter={false}>
      <div className="contacts-page">
        <p className="eyebrow">seeking summer '27 internships ᝰ</p>
        <h1>let&apos;s connect</h1>
        <div className="contact-grid">
          {contacts.map((contact) => (
            <a
              className="contact-card"
              href={contact.href}
              key={contact.label}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              target={contact.href.startsWith("http") || contact.href === "/resume" ? "_blank" : undefined}
            >
              <span className={`contact-card-icon ${contact.className}`}>
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
