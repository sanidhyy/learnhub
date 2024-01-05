import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import { extractRouterConfig } from "uploadthing/server";

import { appFileRouter } from "@/app/api/uploadthing/core";
import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { siteConfig } from "@/config";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#007DFC",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* confetti provider */}
          <ConfettiProvider />

          {/* sonner toast */}
          <ToastProvider />

          {/* uploadthing ssr plugin to prevent hydration errors */}
          <NextSSRPlugin routerConfig={extractRouterConfig(appFileRouter)} />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
