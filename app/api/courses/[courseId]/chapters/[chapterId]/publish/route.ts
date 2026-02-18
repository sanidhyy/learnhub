import { auth } from "@clerk/nextjs";
import { NextResponse, type NextRequest } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  _req: NextRequest,
  { params }: { params: Promise<{ courseId: string; chapterId: string }> },
) {
  try {
    const { chapterId, courseId } = await params;
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized.", { status: 401 });

    const ownCourse = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!ownCourse) return new NextResponse("Unauthorized.", { status: 401 });

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        courseId: courseId,
      },
    });

    const muxData = await db.muxData.findUnique({
      where: {
        chapterId: chapterId,
      },
    });

    if (
      !chapter ||
      !muxData ||
      !chapter.title ||
      !chapter.description ||
      !chapter.videoUrl
    )
      return new NextResponse("Missing required fields.", { status: 400 });

    const publishedChapter = await db.chapter.update({
      where: {
        id: chapterId,
        courseId: courseId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedChapter, { status: 200 });
  } catch (error: unknown) {
    console.log("[CHAPTER_PUBLISH]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}
