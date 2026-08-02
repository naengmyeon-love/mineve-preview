import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead page-shell">
        <p className="kicker">Keep in touch</p>
        <h2>제주의 느린 소식을<br />받아보세요.</h2>
        <form className="newsletter">
          <label className="sr-only" htmlFor="newsletter-email">이메일</label>
          <input id="newsletter-email" type="email" placeholder="Email address" />
          <button type="submit" aria-label="뉴스레터 구독">↗</button>
        </form>
      </div>
      <div className="site-footer__grid page-shell">
        <div>
          <p className="wordmark">MINEVE</p>
          <p>Minerals through Jeju.<br />SALT · RENEW · REST</p>
        </div>
        <nav><p>Explore</p><Link href="/collections">Collections</Link><Link href="/our-story">Our Story</Link><Link href="/notes">Notes</Link><Link href="/shop">Shop</Link></nav>
        <nav><p>Customer</p><Link href="/contact">Contact</Link><Link href="/shipping">Shipping & Returns</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav>
        <div><p>Social</p><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest ↗</a></div>
      </div>
      <div className="site-footer__bottom page-shell"><span>© 2026 MINEVE</span><span>Jeju, Republic of Korea</span><span>상호명 마인브 · 사업자 정보는 정식 론칭 시 고지됩니다.</span></div>
    </footer>
  );
}
