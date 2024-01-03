import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import "./globals.css";
import { ToastProvider } from "@/components/providers/toaster-provider";

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
          <aside>
            <ToastProvider />
          </aside>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
