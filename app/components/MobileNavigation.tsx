"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { navigation } from "../data/site";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && panelRef.current) {
        const focusable = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((element) => !element.hasAttribute("hidden"));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div id="mobile-navigation" className={`mobile-nav ${open ? "mobile-nav--open" : ""}`} aria-hidden={!open}>
      <button className="mobile-nav__backdrop" type="button" onClick={onClose} tabIndex={-1} aria-label="메뉴 닫기" />
      <aside ref={panelRef} className="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="모바일 메뉴">
        <div className="mobile-nav__header">
          <span className="wordmark">MINEVE</span>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="메뉴 닫기">
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav aria-label="모바일 주요 메뉴">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={onClose} tabIndex={open ? 0 : -1}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-nav__secondary">
          <Link href="/search" onClick={onClose} tabIndex={open ? 0 : -1}>Search</Link>
          <Link href="/account" onClick={onClose} tabIndex={open ? 0 : -1}>Account</Link>
          <Link href="/cart" onClick={onClose} tabIndex={open ? 0 : -1}>Bag (0)</Link>
        </div>
        <LocaleSwitcher />
      </aside>
    </div>
  );
}
