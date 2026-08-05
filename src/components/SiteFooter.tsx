export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="footer-quote">“Penguins may stumble, but they always get back up and waddle on.”</p>
      <nav aria-label="Social links" className="footer-socials">
        <a href="mailto:ac1800@student.ubc.ca" aria-label="Email Anson">
          <img alt="" aria-hidden="true" src="/assets/icons/mail-icon.png" />
        </a>
        <a href="https://www.linkedin.com/in/ansonnchan" aria-label="Anson on LinkedIn" rel="noreferrer" target="_blank">
          <img alt="" aria-hidden="true" src="/assets/icons/linkedin-icon.png" />
        </a>
        <a href="https://github.com/ansonnchan" aria-label="Anson on GitHub" rel="noreferrer" target="_blank">
          <img alt="" aria-hidden="true" src="/assets/icons/github_icon.png" />
        </a>
        <a href="/resume" aria-label="View Anson's résumé" rel="noreferrer" target="_blank">
          <img alt="" aria-hidden="true" src="/assets/icons/resume-download.png" />
        </a>
      </nav>
      <p className="footer-copy">© 2026 Anson Chan</p>
    </footer>
  );
}
