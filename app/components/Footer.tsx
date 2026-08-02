import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top page-shell">
        <div>
          <p className="wordmark">MINEVE</p>
          <p>Minerals through Jeju<br />SALT · RENEW · REST</p>
        </div>
        <nav aria-label="푸터 탐색">
          <p>Explore</p>
          <Link prefetch={false} href="/collections">Collections</Link>
          <Link prefetch={false} href="/our-story">Our Story</Link>
          <Link prefetch={false} href="/notes">Notes</Link>
          <Link prefetch={false} href="/shop">Shop</Link>
        </nav>
        <nav aria-label="고객 안내">
          <p>Customer Service</p>
          <Link prefetch={false} href="/contact">Contact</Link>
          <Link prefetch={false} href="/shipping">Shipping & Returns</Link>
          <Link prefetch={false} href="/privacy">Privacy</Link>
          <Link prefetch={false} href="/terms">Terms</Link>
        </nav>
        <div>
          <p>Follow us</p>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">Pinterest ↗</a>
        </div>
      </div>
      <div className="site-footer__bottom page-shell">
        <span>© 2026 MINEVE</span><span>Jeju, Republic of Korea</span><span>Minerals through Jeju</span>
      </div>
    </footer>
  );
}
