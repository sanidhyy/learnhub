import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import { extractRouterConfig } from "uploadthing/server";

import { appFileRouter } from "@/app/api/uploadthing/core";
import { ToastProvider } from "@/components/providers/toaster-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LearnHub",
  description:
    "Discover seamless learning with LearnHub - your all-in-one Learning Management System.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* sonner toast */}
          <aside>
            <ToastProvider />
          </aside>

          {/* uploadthing ssr plugin to prevent hydration errors */}
          <NextSSRPlugin routerConfig={extractRouterConfig(appFileRouter)} />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
