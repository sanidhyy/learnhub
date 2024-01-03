import { generateComponents } from "@uploadthing/react";

import type { AppFileRouter } from "@/app/api/uploadthing/core";

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<AppFileRouter>();
