export type SupportedLanguage = "en" | "bn";
export type TranslationJson = string | { [key: string]: TranslationJson };
export type TranslationResources = Record<
  SupportedLanguage,
  { translation: TranslationJson }
>;
export type Translations = Record<string, string | TranslationJson>;
