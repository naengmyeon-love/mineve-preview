import Link from "next/link";
import { footerContent, navigation } from "../data/site";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top page-shell">
        <div className="site-footer__statement">
          <p className="wordmark">{footerContent.company.name}</p>
          <h2>{footerContent.company.signature}</h2>
          <address>{footerContent.company.location}</address>
        </div>
        <NewsletterForm />
      </div>
      <div className="site-footer__directory page-shell">
        <div>
          <p className="footer-label">Explore</p>
          <nav aria-label="푸터 주요 메뉴">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <p className="footer-label">Customer Care</p>
          <nav aria-label="고객센터 및 정책 메뉴">
            {footerContent.customerCare.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <p className="footer-label">Country / Language</p>
          <LocaleSwitcher />
        </div>
        <div>
          <p className="footer-label">Social</p>
          <div className="site-footer__social" aria-label="소셜 채널">
            {footerContent.social.map((item) => <button type="button" key={item} disabled>{item}</button>)}
          </div>
        </div>
      </div>
      <div className="site-footer__bottom page-shell">
        <span>© 2026 MINEVE</span>
        <span>Minerals through Jeju</span>
      </div>
    </footer>
  );
}
