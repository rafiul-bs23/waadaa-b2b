"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { NAV_SEARCH_VIEW } from "@/types/layouts/nav";
import {
  SiteSettingsStore,
  SiteSettingsStoreState,
} from "@/types/stores/site-settings-store";

// Initial state
const initialState: SiteSettingsStoreState = {
  region: "bd",
  defaultRegion: "bd",
  language: "en",
  fallBackLanguage: "en",
  navSearchView: NAV_SEARCH_VIEW.Hidden,
  showBackDrop: false,
};

// Custom cookie storage implementation
const cookieStorage = {
  getItem: (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null; // Ensure it returns null if undefined
    return null;
  },
  setItem: (name: string, value: string): void => {
    document.cookie = `${name}=${value}; path=/; max-age=31536000`; // expires in 1 year
  },
  removeItem: (name: string): void => {
    document.cookie = `${name}=; path=/; max-age=0`; // remove the cookie
  },
};

const useSiteSettingsStore = create(
  persist<SiteSettingsStore>(
    (set) => ({
      ...initialState,

      setNavSearchView: (viewName) => set({ navSearchView: viewName }),
      setShowBackDrop: (show) => set({ showBackDrop: show }),
      setLanguage: (language) => set({ language }),
      setRegion: (region) => set({ region }),
    }),
    {
      name: "site-settings", // name of the cookie
      storage: createJSONStorage(() => cookieStorage), // use cookieStorage instead of sessionStorage or localStorage
      partialize: (state) => ({
        ...state,
        ...initialState,
        region: state.region,
        defaultRegion: state.defaultRegion,
        language: state.language,
        fallBackLanguage: state.fallBackLanguage,
      }),
    },
  ),
);

export default useSiteSettingsStore;
