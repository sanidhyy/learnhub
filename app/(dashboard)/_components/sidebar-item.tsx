"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  blank?: boolean;
};

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
  blank = false,
}: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      target={blank ? "_blank" : "_self"}
      rel={blank ? "noreferrer noopener" : undefined}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />

        {label}
      </div>

      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-500 h-full transition-all",
          isActive && "opacity-100"
        )}
        aria-hidden
      />
    </Link>
  );
};
