import { parse } from "cookie";
import { NextRequest, NextResponse } from "next/server";

import { defaultPath, defaultRegion } from "@/middleware";

import { getAllAlpha_2 } from "@/utils/country-by-currency-name-with-phone";

import { SiteSettingsStoreState } from "@/types/stores/site-settings-store";

export function handleLanguageMiddleware(
  request: NextRequest,
  response: NextResponse,
) {
  const acceptedRegions = getAllAlpha_2();
  const { pathname } = request.nextUrl;

  // Allow authentication callbacks to pass through
  if (pathname.startsWith("/api/auth/callback/")) {
    return response;
  }

  // Check if it's a browser request
  const isBrowserRequest = request.headers.get("sec-fetch-dest") === "document";
  if (!isBrowserRequest) {
    return response;
  }

  // Extract cookies
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = parse(cookieHeader);
  const siteSettingsCookie = cookies["site-settings"];

  let region = defaultRegion;

  if (siteSettingsCookie) {
    try {
      const siteSettings = JSON.parse(siteSettingsCookie) as {
        state: SiteSettingsStoreState;
      };
      if (
        siteSettings.state?.region &&
        acceptedRegions.includes(siteSettings.state.region)
      ) {
        region = siteSettings.state.region;
      }
    } catch (error) {
      console.error("Failed to parse site-settings cookie:", error);
    }
  }

  const parts = pathname.split("/");

  // 🔹 If already in a valid region-based URL, don’t redirect
  if (parts.length > 1 && acceptedRegions.includes(parts[1])) {
    return response;
  }

  // 🔹 Redirect `/` to `/[region]/home`
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${region}/${defaultPath}`;
    return NextResponse.redirect(url);
  }

  // 🔹 Redirect `/[region]` to `/[region]/home`
  if (parts.length === 2 && acceptedRegions.includes(parts[1])) {
    const url = request.nextUrl.clone();
    url.pathname = `/${parts[1]}/${defaultPath}`;
    return NextResponse.redirect(url);
  }

  // 🔹 If no region is found, add it dynamically
  if (parts.length > 1 && !acceptedRegions.includes(parts[1])) {
    const url = request.nextUrl.clone();
    url.pathname = `/${region}${pathname}`;
    return NextResponse.redirect(url);
  }

  return response;
}
