import { auth } from "@clerk/nextjs";
import { NextResponse, type NextRequest } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  _req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      courseId: string;
    }>;
  },
) {
  try {
    const { courseId } = await params;
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized.", { status: 401 });

    const course = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });

    if (!course) return new NextResponse("Not found.", { status: 404 });

    const hasPublishedChapter = course.chapters.some(
      (chapter) => chapter.isPublished,
    );

    if (
      !course.title ||
      !course.description ||
      !course.imageUrl ||
      !course.categoryId ||
      !hasPublishedChapter
    )
      return new NextResponse("Missing required fields.", { status: 401 });

    const publishedCourse = await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedCourse, { status: 200 });
  } catch (error: unknown) {
    console.log("[COURSE_ID_PUBLISH]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}
