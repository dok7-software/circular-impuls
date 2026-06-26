import type { Dictionary } from "@/core/i18n/types";
import { methodologyType } from "@/core/typography";
import { Container } from "@/components/landing/container";
import { cn } from "@/lib/utils";

type MethodologySectionProps = {
  content: Dictionary["methodology"];
};

export function MethodologySection({ content }: MethodologySectionProps) {
  return (
    <section
      id="metodologia"
      className="flex min-h-screen items-center bg-brand-cream text-[#16202a]"
    >
      <Container className="w-full py-24 lg:py-30">
        <h2 className={cn(methodologyType.title, "mb-6")}>
          {content.titlePrefix}{" "}
          <span className="text-brand-green-dark">{content.titleHighlight}</span>
        </h2>
        <p className={cn(methodologyType.subtitle, "mb-16 text-[#3a2d52]")}>
          {content.subtitle}
        </p>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
          {content.steps.map((step, index) => (
            <div key={step.number}>
              <p
                className={cn(
                  methodologyType.stepNumber,
                  "mb-6",
                  index === 0 ? "text-brand-green-dark" : "text-[#c3b9a3]",
                )}
              >
                {step.number}
              </p>
              <div
                className="mb-7 h-1 rounded-sm"
                style={{
                  background:
                    step.progress === 100
                      ? "#1fa85c"
                      : `linear-gradient(90deg, #1fa85c ${step.progress}%, #d8cfbb ${step.progress}%)`,
                }}
              />
              <h3 className={cn(methodologyType.stepTitle, "mb-3.5")}>
                {step.title}
              </h3>
              <p className={cn(methodologyType.stepDescription, "text-[#5a6470]")}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
