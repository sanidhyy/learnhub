import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse, type NextRequest } from "next/server";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ courseId: string; attachmentId: string }> },
) {
  try {
    const { attachmentId, courseId } = await params;
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized.", { status: 401 });

    const courseOwner = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!courseOwner) return new NextResponse("Unauthorized.", { status: 401 });

    const attachment = await db.attachment.delete({
      where: {
        courseId: courseId,
        id: attachmentId,
      },
    });

    return NextResponse.json(attachment, { status: 200 });
  } catch (error: unknown) {
    console.log("[ATTACHMENT_ID]: ", error);
    return new NextResponse("Internal Server Error.", { status: 500 });
  }
}
