"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import type { Locale } from "@/core/i18n/config";
import { locales } from "@/core/i18n/config";
import { sharedType } from "@/core/typography";
import { cn } from "@/lib/utils";

export const LOCALE_SCROLL_KEY = "locale-switch-scroll";

type LocaleSwitcherProps = {
  locale: Locale;
};

function subscribeHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  return () => window.removeEventListener("hashchange", onStoreChange);
}

function getHashSnapshot() {
  return window.location.hash;
}

function getHashServerSnapshot() {
  return "";
}

function localeHref(target: Locale, hash: string) {
  return `/${target}${hash}`;
}

function saveScrollPosition() {
  sessionStorage.setItem(LOCALE_SCROLL_KEY, String(window.scrollY));
}

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const hash = useSyncExternalStore(subscribeHash, getHashSnapshot, getHashServerSnapshot);

  return (
    <div className={cn(sharedType.localeSwitcher, "flex items-center gap-1")}>
      {locales.map((target, index) => (
        <span key={target} className="contents">
          {index > 0 ? <span className="text-[#9aa3ae]">|</span> : null}
          <Link
            href={localeHref(target, hash)}
            scroll={false}
            onClick={saveScrollPosition}
            className={cn(
              "px-1 transition-colors",
              locale === target ? "text-white" : "text-[#9aa3ae] hover:text-white",
            )}
            aria-current={locale === target ? "true" : undefined}
          >
            {target.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
