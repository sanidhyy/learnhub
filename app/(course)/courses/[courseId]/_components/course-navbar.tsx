import type { Chapter, Course, UserProgress } from "@prisma/client";

import { NavbarRoutes } from "@/components/navabar-routes";

import { CourseMobileSidebar } from "./course-mobile-sidebar";

type CourseSidebarProps = {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
};

export const CourseNavbar = async ({
  course,
  progressCount,
}: CourseSidebarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  );
};
