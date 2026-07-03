import Image from "next/image";
import type { Dictionary } from "@/core/i18n/types";
import { heroType } from "@/core/typography";
import { ButtonLink } from "@/components/landing/button-link";
import { Container } from "@/components/landing/container";
import { HeroPartnerLogo } from "@/components/landing/hero-partner-logo";
import { HeroCollaborators } from "@/components/landing/hero-collaborators";
import { HeroSectionMobile } from "@/components/landing/hero-section-mobile";
import { cn } from "@/lib/utils";

const heroContentClassName = "w-full max-w-3xl md:ml-10 lg:ml-20 xl:ml-28";

type HeroSectionProps = {
  content: Dictionary["hero"];
  collaborators: Dictionary["collaborators"];
};

export function HeroSection({ content, collaborators }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col overflow-x-hidden bg-[#0b0f14] sm:h-svh sm:overflow-hidden">
      <Image
        src="/images/hero.png"
        alt={content.imageAlt}
        fill
        priority
        className="object-cover object-center sm:object-bottom"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,11,15,.45)] via-[rgba(8,11,15,.35)] to-[rgba(8,11,15,.78)]" />

      <HeroSectionMobile content={content} collaborators={collaborators} />

      <div className="relative hidden min-h-0 flex-1 flex-col sm:flex">
        <Container
          variant="tight"
          className="relative z-10 flex shrink-0 flex-col py-6 pt-20 lg:py-8 lg:pt-24"
        >
          <div className={cn(heroContentClassName, "shrink-0")}>
            <div className="ml-12 inline-flex w-fit items-center gap-2.5 rounded-full border border-brand-green/55 bg-[rgba(8,11,15,.35)] px-5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_10px_#17d479]" />
              <span className={cn(heroType.badge, "text-[#cfe9d9]")}>{content.badge}</span>
            </div>
          </div>

          <div className={cn(heroContentClassName, "mt-3 shrink-0 lg:mt-4")}>
            <h1 className={cn(heroType.title, "mb-3 max-w-3xl text-white lg:mb-4")}>
              {content.titleLine1}
              <br />
              {content.titleArticle}
              <span className="text-brand-green">{content.titleHighlight}</span>
              {content.titleLine2 ? <> {content.titleLine2}</> : null}
            </h1>

            <p className={cn(heroType.subtitle, "mb-3 max-w-2xl text-[#dfe4ea]")}>
              {content.subtitle}
            </p>

            <p className={cn(heroType.subtitle, "mb-4 max-w-2xl text-[#dfe4ea] lg:mb-5")}>
              {content.subtitleLine2}
            </p>

            <ButtonLink href="#contacte" variant="secondary">
              {content.ctaPrimary}
            </ButtonLink>
          </div>
        </Container>

        <Container variant="tight" className="mt-auto shrink-0 pb-4 lg:pb-6">
          <div className="flex flex-wrap items-end justify-between gap-5 lg:gap-8">
            <HeroCollaborators content={collaborators} />

            <div className="flex flex-wrap items-end justify-end gap-5 lg:gap-8">
              <div className="text-left">
                <p
                  className={cn(
                    heroType.fundingNote,
                    "mb-2.5 max-w-[26rem] whitespace-pre-line text-[#9aa3ae]",
                  )}
                >
                  {content.fundingNote}
                </p>
                <p className={cn(heroType.fundedBy, "mb-2.5 text-[#c4ccd5]")}>
                  {content.fundedBy}
                </p>
                <div className="flex flex-col items-start gap-3">
                  <HeroPartnerLogo
                    src={content.fseLogo.src}
                    alt={content.fseLogo.alt}
                    className="h-[52px] max-w-[283px]"
                  />
                  <HeroPartnerLogo
                    src={content.generalitatLogo.src}
                    alt={content.generalitatLogo.alt}
                    className="h-[48px] max-w-[211px] sm:h-[52px]"
                  />
                </div>
              </div>

              <div className="text-left">
                <p className={cn(heroType.programBy, "mb-2.5 text-[#c4ccd5]")}>
                  {content.programBy}
                </p>
                <div className="flex flex-col items-start gap-2">
                  <HeroPartnerLogo
                    src={content.programaPrimerLogo.src}
                    alt={content.programaPrimerLogo.alt}
                    className="h-8 max-w-[140px]"
                  />
                  <HeroPartnerLogo
                    src={content.xeLogo.src}
                    alt={content.xeLogo.alt}
                    className="h-8 max-w-[140px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
