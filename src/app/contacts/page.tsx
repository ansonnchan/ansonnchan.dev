import SiteShell from "@/components/SiteShell";

const contacts = [
  { label: "email", value: "ac1800@student.ubc.ca", href: "mailto:ac1800@student.ubc.ca" },
  { label: "github", value: "github.com/ansonnchan", href: "https://github.com/ansonnchan" },
  { label: "linkedin", value: "linkedin.com/in/ansonnchan", href: "https://www.linkedin.com/in/ansonnchan" },
  { label: "résumé", value: "view my résumé", href: "/resume" }
];

export default function ContactsPage() {
  return (
    <SiteShell>
      <div className="contacts-page">
        <p className="eyebrow">say hello</p>
        <h1>let&apos;s connect</h1>
        <div className="contact-list">
          {contacts.map((contact) => (
            <a
              href={contact.href}
              key={contact.label}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              target={contact.href.startsWith("http") || contact.href === "/resume" ? "_blank" : undefined}
            >
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
