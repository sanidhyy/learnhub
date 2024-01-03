// This file is needed to support autocomplete for process.env

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // clerk keys
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
      CLERK_SECRET_KEY: string;

      // aiven database url
      DATABASE_URL: string;
    }
  }
}
