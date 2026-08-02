"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { label: "Collections", href: "/collections" },
  { label: "Story", href: "/our-story" },
  { label: "Notes", href: "/notes" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overlay = ["/", "/collections/salt", "/collections/renew", "/collections/rest", "/salt", "/renew", "/rest"].includes(pathname) && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`site-header ${overlay ? "site-header--overlay" : "site-header--surface"}`}>
        <div className="site-header__inner">
          <Link className="wordmark" href="/" aria-label="MINEVE 홈">MINEVE<small>Minerals through Jeju</small></Link>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            {nav.map((item) => <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>{item.label}</Link>)}
          </nav>
          <div className="header-tools">
            <Link href="/shop">Shop</Link>
            <Link href="/cart">Cart <span>0</span></Link>
          </div>
          <button className="menu-toggle" type="button" aria-label={open ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span>{open ? "Close" : "Menu"}</span><i /><i />
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        <nav aria-label="모바일 메뉴">
          {nav.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</Link>)}
          <Link href="/shop" onClick={() => setOpen(false)}><span>04</span>Shop</Link>
        </nav>
        <div><p>제주의 미네랄을,<br />매일의 균형으로.</p><small>JEJU · KOREA</small></div>
      </div>
    </>
  );
}
