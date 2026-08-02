"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Collections", href: "/collections" },
  { label: "Story", href: "/our-story" },
  { label: "Notes", href: "/notes" },
  { label: "Shop", href: "/shop" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const overlayRoute = pathname === "/" || pathname.startsWith("/collections/") || ["/salt", "/renew", "/rest"].includes(pathname);
  const overlay = overlayRoute && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > Math.min(window.innerHeight * 0.45, 420));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${overlay ? "site-header--overlay" : "site-header--surface"}`}>
        <div className="site-header__inner">
          <Link prefetch={false} className="wordmark" href="/" aria-label="MINEVE 홈">MINEVE</Link>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            {navigation.map((item) => (
              <Link prefetch={false} key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>{item.label}</Link>
            ))}
          </nav>
          <Link prefetch={false} className="bag-link" href="/cart" aria-label="장바구니">Bag <span aria-hidden="true">0</span></Link>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
            <span>{open ? "Close" : "Menu"}</span><i /><i />
          </button>
        </div>
      </header>
      <div id="mobile-menu" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        <nav aria-label="모바일 메뉴">
          {navigation.map((item, index) => (
            <Link prefetch={false} key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</Link>
          ))}
          <Link prefetch={false} href="/cart" onClick={() => setOpen(false)}><span>05</span>Bag</Link>
        </nav>
        <p>제주의 미네랄을,<br />매일의 균형으로.<small>JEJU · KOREA</small></p>
      </div>
    </>
  );
}
