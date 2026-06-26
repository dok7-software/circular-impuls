"use client";

import { useEffect } from "react";
import type { Locale } from "@/core/i18n/config";
import { LOCALE_SCROLL_KEY } from "@/components/i18n/locale-switcher";

export function SetHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const saved = sessionStorage.getItem(LOCALE_SCROLL_KEY);
    if (saved === null) return;

    sessionStorage.removeItem(LOCALE_SCROLL_KEY);
    const y = Number(saved);
    if (Number.isNaN(y)) return;

    requestAnimationFrame(() => {
      window.scrollTo(0, y);
    });
  }, [locale]);

  return null;
}
