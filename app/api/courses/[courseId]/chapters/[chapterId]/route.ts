import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    const { isPublished, ...values } = await req.json();

    if (!userId) return new NextResponse("Unauthorized.", { status: 401 });

    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!ownCourse) return new NextResponse("Unauthorized.", { status: 401 });

    console.log({ params });

    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        ...values,
      },
    });

    // TODO: Handle video upload

    return NextResponse.json(chapter, { status: 200 });
  } catch (error: unknown) {
    console.log("[COURSES_CHAPTER_ID]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}
