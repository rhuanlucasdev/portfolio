"use client";

import { useLanguage } from "@/contexts/language-context";
import en from "@/lib/i18n/en";
import pt from "@/lib/i18n/pt";

const translations = {
  en,
  pt,
};

export const useTranslations = () => {
  const { language } = useLanguage();
  return translations[language];
};
