import { createNextRouteHandler } from "uploadthing/next";

import { appFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: appFileRouter,
  config: {
    uploadthingId: process.env.UPLOADTHING_APP_ID,
    uploadthingSecret: process.env.UPLOADTHING_SECRET,
    callbackUrl: `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/uploadthing`,
  },
});
