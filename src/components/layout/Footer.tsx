
import { portfolioContent } from "../../data/portfolioContent";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-shell footer-inner">
        <p>
          © {new Date().getFullYear()} {portfolioContent.name}
        </p>
        <div className="footer-links">
          {portfolioContent.socialLinks.map((social, index) => (
            <a
              key={`${social.href}-${index}`}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              Connect {index + 1}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
