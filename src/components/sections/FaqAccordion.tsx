import React from "react";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "../motion/PremiumReveal";

type FaqItem = { q: string; a: string; category?: string };

type FaqAccordionProps = {
  items: readonly FaqItem[];
  showCategory?: boolean;
};

export default function FaqAccordion({ items, showCategory = false }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <FadeUp key={item.q} delay={index * 0.04}>
            <div className="border border-surface-container-high bg-surface rounded-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-start cursor-pointer hover:bg-surface-container-low transition-colors"
                aria-expanded={isOpen}
              >
                <div>
                  {showCategory && item.category ? (
                    <span className="font-label-caps text-[10px] uppercase tracking-wider text-secondary block mb-1.5">
                      {item.category}
                    </span>
                  ) : null}
                  <h2 className="font-headline-sm text-base md:text-lg text-primary">{item.q}</h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-secondary shrink-0 mt-0.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen ? (
                <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.a}</p>
                </div>
              ) : null}
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}
