"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "../data/site";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const supportsOverlay = ["/", "/salt", "/renew", "/rest"].includes(pathname);
  const useOverlay = supportsOverlay && !scrolled;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    window.setTimeout(() => menuButtonRef.current?.focus(), 0);
  }, []);

  return (
    <>
      <header
        className={`site-header ${useOverlay ? "site-header--overlay" : "site-header--surface"} ${scrolled ? "site-header--scrolled" : ""}`}
      >
        <div className="site-header__inner page-shell">
          <Link href="/" className="site-header__brand" aria-label="MINEVE 홈으로 이동">
            <span className="wordmark">MINEVE</span>
            <span className="site-header__signature">Minerals through Jeju</span>
          </Link>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="site-header__tools">
            <Link href="/search" aria-label="사이트 검색">Search</Link>
            <Link href="/account" aria-label="계정 페이지">Account</Link>
            <Link href="/cart" aria-label="장바구니, 상품 0개">Bag (0)</Link>
            <LocaleSwitcher />
          </div>
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span>Menu</span>
            <span className="menu-button__lines" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </header>
      <MobileNavigation open={menuOpen} onClose={closeMenu} />
    </>
  );
}
