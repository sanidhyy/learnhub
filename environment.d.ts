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

      // mux keys
      MUX_TOKEN_ID: string;
      MUX_TOKEN_SECRET: string;

      // stripe api key & webhook secret
      STRIPE_API_KEY: string;
      STRIPE_WEBHOOK_SECRET: string;

      // teacher id (go to dashboard.clerk.com and copy your desired user id)
      NEXT_PUBLIC_TEACHER_ID: string;
    }
  }
}
