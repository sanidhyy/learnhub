"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";

import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Button size="sm" variant="ghost" asChild>
            <Link href="/">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Link>
          </Button>
        ) : (
          isTeacher(userId) && (
            <Button size="sm" variant="ghost" asChild>
              <Link href="/teacher/courses">Teacher mode</Link>
            </Button>
          )
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};
