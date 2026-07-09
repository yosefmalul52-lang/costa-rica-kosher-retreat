import type { ReactNode } from "react";
import { FadeUp } from "../motion/PremiumReveal";

type PageShellProps = {
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
};

export default function PageShell({ eyebrow, title, body, children }: PageShellProps) {
  return (
    <div className="bg-surface min-h-screen select-text">
      <section className="pt-28 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeUp>
            <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest">
              {eyebrow}
            </span>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-6">{title}</h1>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">{body}</p>
          </FadeUp>
        </div>
        {children}
      </section>
    </div>
  );
}
