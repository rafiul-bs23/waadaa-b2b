// @/types/stores/site-settings-store
import { SupportedLanguage } from "@/types/hooks/i18n";
import { NAV_SEARCH_VIEW } from "@/types/layouts/nav";

// Ensure that SupportedLanguage and ProductCardPropsType['listType'] are defined correctly
export interface SiteSettingsStoreState {
  navSearchView: NAV_SEARCH_VIEW;
  showBackDrop: boolean;
  region: string;
  defaultRegion: string;
  language: SupportedLanguage;
  fallBackLanguage: SupportedLanguage;
}

export interface SiteSettingsStoreAction {
  setNavSearchView: (viewName: NAV_SEARCH_VIEW) => void;
  setShowBackDrop: (value: boolean) => void;
  setLanguage: (language: SupportedLanguage) => void;
  setRegion: (region: string) => void;
}

export interface SiteSettingsStore
  extends SiteSettingsStoreState,
    SiteSettingsStoreAction {}
