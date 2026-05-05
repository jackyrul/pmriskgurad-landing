export const SITE_URL = "https://pmriskguard.com";

export const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/faq",
  "/login",
  "/pricing",
  "/privacy",
  "/signup",
] as const;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
