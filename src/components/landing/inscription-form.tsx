"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/core/i18n/config";
import type { Dictionary } from "@/core/i18n/types";
import { cn } from "@/lib/utils";

type InscriptionFormProps = {
  locale: Locale;
  form: Dictionary["cta"]["form"];
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-[#7e8893] outline-none transition-colors focus:border-brand-green/60 focus:ring-1 focus:ring-brand-green/40";

export function InscriptionForm({ locale, form }: InscriptionFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName") || undefined,
          email: formData.get("email"),
          phone: formData.get("phone"),
          project: formData.get("project"),
          message: formData.get("message"),
          locale,
          consent: formData.get("consent") === "on",
          website: formData.get("website"),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-xl text-left"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-sm font-medium text-[#c4ccd5]">
            {form.firstName} *
          </span>
          <input
            type="text"
            name="firstName"
            required
            autoComplete="given-name"
            className={inputClassName}
          />
        </label>

        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-sm font-medium text-[#c4ccd5]">
            {form.lastName}
          </span>
          <input
            type="text"
            name="lastName"
            autoComplete="family-name"
            className={inputClassName}
          />
        </label>

        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-sm font-medium text-[#c4ccd5]">
            {form.email} *
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={inputClassName}
          />
        </label>

        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-sm font-medium text-[#c4ccd5]">
            {form.phone} *
          </span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            className={inputClassName}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-[#c4ccd5]">
            {form.project} *
          </span>
          <input
            type="text"
            name="project"
            required
            className={inputClassName}
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-[#c4ccd5]">
            {form.message} *
          </span>
          <textarea
            name="message"
            required
            rows={4}
            className={cn(inputClassName, "resize-y min-h-28")}
          />
        </label>
      </div>

      <label className="absolute -left-[9999px]" aria-hidden tabIndex={-1}>
        <span>Website</span>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-left">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-brand-green"
        />
        <span className="text-sm leading-snug text-[#aeb6c0]">{form.consent}</span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className="mt-6 w-full rounded-full bg-brand-green px-10 py-4 text-base font-bold text-[#06140c] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? form.submitting : form.submit}
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm font-medium text-brand-green" role="status">
          {form.success}
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-400" role="alert">
          {form.error}
        </p>
      )}
    </form>
  );
}
