import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { WebMcpProvider } from "@/components/webmcp-provider";
import { withBasePath } from "@/lib/with-base-path";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pmriskguard.com"),
  title: {
    default: "PM Risk Guard - Risk Guardrails for Polymarket",
    template: "%s | PM Risk Guard",
  },
  description:
    "Privacy-first browser guardrails for Polymarket. Monitor risk score, set limits, and trigger cooling-off protection for safer trading decisions.",
  keywords: [
    "Polymarket",
    "risk guardrails",
    "responsible trading",
    "cooling-off",
    "self-exclusion",
    "trading risk score",
    "browser extension",
    "wallet risk monitoring",
  ],
  authors: [{ name: "PM Risk Guard" }],
  creator: "PM Risk Guard",
  publisher: "PM Risk Guard",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: withBasePath("/favicon/favicon.ico"), sizes: "48x48" },
      { url: withBasePath("/favicon/favicon.svg"), type: "image/svg+xml" },
      { url: withBasePath("/favicon/favicon-96x96.png"), sizes: "96x96", type: "image/png" },
      { url: withBasePath("/favicon/favicon.svg"), type: "image/svg+xml" },
      { url: withBasePath("/favicon/favicon.ico") },
    ],
    apple: [{ url: withBasePath("/favicon/apple-touch-icon.png"), sizes: "180x180" }],
    shortcut: [{ url: withBasePath("/favicon/favicon.ico") }],
  },
  openGraph: {
    title: "PM Risk Guard - Risk Guardrails for Polymarket",
    description:
      "Monitor risk behavior, configure cooling-off policy, and block risk-increasing actions during high-risk moments.",
    siteName: "PM Risk Guard",
    images: [
      {
        url: withBasePath("/og-image.png"),
        width: 1200,
        height: 630,
        alt: "PM Risk Guard extension screenshots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Risk Guard - Risk Guardrails for Polymarket",
    description:
      "Privacy-first guardrails for Polymarket trading: risk score, cooling-off, risk budget, and self-exclusion.",
    images: [withBasePath("/og-image.png")],
    creator: "@pmriskguard",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <WebMcpProvider />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
