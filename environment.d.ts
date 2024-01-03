// This file is needed to support autocomplete for process.env

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // aiven database url
      DATABASE_URL: string;

      // uploadthing keys
      UPLOADTHING_SECRET: string;
      UPLOADTHING_APP_ID: string;

      // app base url
      NEXT_PUBLIC_APP_BASE_URL: string;
    }
  }
}
