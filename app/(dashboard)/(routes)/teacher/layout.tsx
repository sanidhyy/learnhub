import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

import { isTeacher } from "@/lib/teacher";

const TeacherLayout = ({ children }: PropsWithChildren) => {
  const { userId } = auth();

  if (!isTeacher(userId)) return redirect("/");
  return <>{children}</>;
};

export default TeacherLayout;
