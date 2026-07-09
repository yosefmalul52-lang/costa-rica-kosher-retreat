import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { pageSeo, type SeoPageKey } from "../content/seo";

function upsertMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function usePageSeo(pageKey: SeoPageKey) {
  const { language } = useLanguage();
  const seo = pageSeo[language][pageKey];

  React.useEffect(() => {
    document.title = seo.title;
    document.documentElement.lang = language === "he" ? "he" : "en";
    upsertMeta("description", seo.description);
  }, [language, pageKey, seo.title, seo.description]);
}
