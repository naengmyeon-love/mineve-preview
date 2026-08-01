"use client";

import { useState } from "react";

export function LocaleSwitcher() {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<"KR" | "EN">("KR");

  return (
    <div className="locale-switcher">
      <button
        type="button"
        className="locale-switcher__trigger"
        aria-label="언어 및 지역 선택"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {locale} <span aria-hidden="true">⌄</span>
      </button>
      {open && (
        <div className="locale-switcher__menu" role="listbox" aria-label="언어 및 지역">
          <button
            type="button"
            role="option"
            aria-selected={locale === "KR"}
            onClick={() => { setLocale("KR"); setOpen(false); document.documentElement.lang = "ko"; }}
          >
            한국어 / 대한민국
          </button>
          <button
            type="button"
            role="option"
            aria-selected={locale === "EN"}
            onClick={() => { setLocale("EN"); setOpen(false); document.documentElement.lang = "en"; }}
          >
            English / Global
          </button>
        </div>
      )}
    </div>
  );
}
