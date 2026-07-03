import type { Dictionary } from "@/core/i18n/types";
import { heroType } from "@/core/typography";
import { HeroPartnerLogo } from "@/components/landing/hero-partner-logo";
import { cn } from "@/lib/utils";

type HeroCollaboratorsProps = {
  content: Dictionary["collaborators"];
  className?: string;
};

export function HeroCollaborators({ content, className }: HeroCollaboratorsProps) {
  return (
    <div className={cn("flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5 lg:gap-6", className)}>
      <p className={cn(heroType.fundedBy, "shrink-0 text-[#c4ccd5]")}>{content.title}</p>
      <div className="flex flex-wrap items-center gap-4 sm:gap-5 lg:gap-6">
        <HeroPartnerLogo
          src={content.pallarsActiuLogo.src}
          alt={content.pallarsActiuLogo.alt}
          width={246}
          height={74}
          className="h-12 max-w-[min(100%,11rem)] sm:h-14 lg:h-16"
        />
        <span className="hidden h-12 w-px bg-white/12 sm:block lg:h-16" aria-hidden />
        <HeroPartnerLogo
          src={content.phimisterLogo.src}
          alt={content.phimisterLogo.alt}
          width={282}
          height={88}
          className="h-12 max-w-[min(100%,12.5rem)] sm:h-14 lg:h-16"
        />
      </div>
    </div>
  );
}
