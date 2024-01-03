"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { appFileRouter } from "@/app/api/uploadthing/core";
import { toast } from "sonner";

type FileUploadProps = {
  onChange: (url?: string) => void;
  endpoint: keyof typeof appFileRouter;
};

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      onUploadError={(error: Error) => {
        toast.error("Something went wrong.");
        console.log("[FILE_UPLOAD]: ", error?.message);
      }}
    />
  );
};
