import { NextRequest, NextResponse } from "next/server";

export function handleUrlMiddleware(
  request: NextRequest,
  response: NextResponse,
) {
  const { pathname } = request.nextUrl;

  // Only modify requests for browser navigation
  const isBrowserRequest = request.headers.get("sec-fetch-dest") === "document";
  if (!isBrowserRequest) {
    return response;
  }

  // Extract the first segment after the region for navigation tracking
  const urlFirstPart = pathname.split("/")[2] || "";

  // Set a cookie for tracking navigation state
  response.cookies.set("nav-item", urlFirstPart);

  return response;
}
