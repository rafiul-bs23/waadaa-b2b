import { NextRequest, NextResponse } from "next/server";

// import { handleLanguageMiddleware } from '@/middlewares/handle-language-middleware';
import { handleUrlMiddleware } from "@/middlewares/handle-url-middleware";

// export const defaultRegion = 'bd';
export const defaultPath = "home";

export function middleware(request: NextRequest) {
  let response = NextResponse.next();

  // response = handleLanguageMiddleware(request, response);

  response = handleUrlMiddleware(request, response);

  return response;
}

export const config = {
  matcher: ["/:path*", "/:region/user/:path*"],
};
