<a name="readme-top"></a>

# LearnHub - your all-in-one Learning Management System.

![LearnHub - your all-in-one Learning Management System.](/.github/images/img_main.png "LearnHub - your all-in-one Learning Management System.")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/learnhub?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/learnhub/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/learnhub/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/learnhub?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/learnhub/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/learnhub?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/learnhub/commits "Github commits")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://learnhub-lms.vercel.app/ "Vercel status")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/learnhub?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/learnhub/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/learnhub?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/learnhub/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of this app.

```bash
learnhub/
  |- app/
    |-- (auth)/
        |--- (routes)/
        |--- sign-in/[[...sign-in]]/
        |--- sign-up/[[...sign-up]]/
        |--- layout.tsx
    |-- (course)/coures/[courseId]
        |--- _components/
        |--- chapters/[chapterId]
          |---- _components/
          |---- page.tsx
        |--- layout.tsx
        |--- page.tsx
    |-- (dashboard)/
        |--- _components/
        |--- (routes)/
          |---- (root)/
            |----- _components/
            |----- page.tsx
          |---- search/
            |----- _components/
            |----- page.tsx
          |---- teacher/
            |----- analytics/
            |----- courses/
            |----- create/
            |----- layout.tsx
          |---- layout.tsx
        |--- layout.tsx
    |-- api/
        |--- courses/
          |---- [courseId]/
            |----- attachments/
            |----- chapters/
            |----- checkout/
            |----- publish/
            |----- unpublish/
            |----- route.ts
          |---- route.ts
        |--- uploadthing/
          |---- core.ts
          |---- route.ts
        |--- webhook/
          |---- route.ts
    |-- favicon.ico
    |-- globals.css
    |-- layout.tsx
  |- components/
    |-- modals/
    |-- providers/
    |-- ui/
    |-- banner.tsx
    |-- course-card.tsx
    |-- course-progress.tsx
    |-- course-list.tsx
    |-- editor.tsx
    |-- file-upload.tsx
    |-- icon-badge.tsx
    |-- navbar-routes.tsx
    |-- preview.tsx
    |-- search-input.tsx
  |- config/
    |-- index.ts
  |- hooks/
    |-- use-confetti-store.ts
    |-- use-debounce.ts
  |- lib/
    |-- db.ts
    |-- format.ts
    |-- stripe.ts
    |-- teacher.ts
    |-- uploadthing.ts
    |-- utils.ts
  |- prisma/
    |-- schema.prisma
  |- public/
    |-- logo.svg
  |- scripts/
    |-- seed.ts
  |- .env
  |- .env.example
  |- .eslintrc.json
  |- .gitignore
  |- components.json
  |- environment.d.ts
  |- middleware.ts
  |- next.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in root directory.
4. Contents of `.env`:

```env
# .env

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk auth urls
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# aiven database url
DATABASE_URL="mysql://<username>:<password>@<host>:<port>/learnhub?ssl-mode=REQUIRED"

# uploadthing keys
UPLOADTHING_SECRET=sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
UPLOADTHING_APP_ID=xxxxxxxxx

# app base url
NEXT_PUBLIC_APP_BASE_URL=http://localhost:3000

# mux keys
MUX_TOKEN_ID=xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
MUX_TOKEN_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/xxxxxxxxxxxxxxxxxx

# stripe api key & webhook secret
STRIPE_API_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# teacher id (go to dashboard.clerk.com and copy your desired user id)
NEXT_PUBLIC_TEACHER_ID=user_xxxxxxxxxxxxxxxxxxxxxxxxx
```

5. Clerk Configuration

- Visit the Clerk Dashboard at [dashboard.clerk.com](https://dashboard.clerk.com/).

- Create a new project and obtain the Publishable Key and Secret Key.

- Set up authentication URLs in the Clerk Dashboard and update `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` values in the `.env` file.

- Replace `/sign-in`, `/sign-up`, and the redirect URLs with the actual URLs configured in your Clerk Dashboard.

  ```env
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
  ```

6. MySQL DB URI

- Replace `<username>`, `<password>`, `<host>`, and `<port>` in the DATABASE_URL with your Aiven MySQL database credentials.

```env
DATABASE_URL="mysql://<username>:<password>@<host>:<port>/learnhub?ssl-mode=REQUIRED"
```

7. Mux Configuration

- Visit the Mux Dashboard at [dashboard.mux.com](https://dashboard.mux.com/) to obtain your `MUX_TOKEN_ID` and `MUX_TOKEN_SECRET`. Update these values in your `.env` file.

8. Stripe Configuration

- Visit the Stripe Dashboard at [dashboard.stripe.com](https://dashboard.stripe.com/) and sign in or create an account.

- Obtain your Stripe API Key. You can find this under the "Developers" section.

- Create a webhook endpoint in the Stripe Dashboard:

  - Navigate to the "Developers" section and then to "Webhooks."
  - Click on "Add endpoint" and enter the following details:
    - **Endpoint URL:** `http://localhost:3000/api/webhooks/stripe` (Update this URL based on your deployment environment)
    - **Events to send:** Select "checkout.session.completed" and any other events you want to handle in your application.
  - Save the webhook endpoint.

- After saving, copy the "Signing secret" from the newly created webhook endpoint.

- Update the `.env` file with the Stripe API Key and Webhook Secret:

```env
STRIPE_API_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

9. App Base URL

```env
NEXT_PUBLIC_APP_BASE_URL=http://localhost:3000
```

10. Uploadthing Keys

To obtain Uploadthing keys, follow these steps:

1. **Sign up for an Uploadthing account:**

   - Visit [Uploadthing](https://uploadthing.com/) and create an account.

2. **Create a new application:**

   - Log in to your Uploadthing account.
   - Navigate to the dashboard and create a new application.

3. **Get Secret and App ID:**

   - Once the application is created, find or generate the Secret and App ID.

```env
UPLOADTHING_SECRET=sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
UPLOADTHING_APP_ID=XXXXXXXXX
```

11. Clerk Teacher ID

- Visit the Clerk Dashboard at [dashboard.clerk.com](https://dashboard.clerk.com/). Go to users tab and update Teacher ID with any user id you created to be able to create new courses. Update `NEXT_PUBLIC_TEACHER_ID` in your `.env` file.

12. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

13. **Run the Seed Script:**
    In the same terminal, run the following command to execute the seed script:

```bash
npx ts-node scripts/seed.ts
```

This command uses `npx` to execute the TypeScript file (`scripts/seed.ts`) directly using `ts-node` and writes category data in mysql database.

14. **Verify Data in Database:**
    Once the script completes, check your MySQL database to ensure that the category data has been successfully seeded.

15. Now app is fully configured 👍 and you can start using this app using `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![Modern UI/UX](/.github/images/img1.png "Modern UI/UX")

![Course Setup](/.github/images/img2.png "Course Setup")

![Chapter Creation](/.github/images/img3.png "Chapter Creation")

![Watch Chapters](/.github/images/img4.png "Watch Chapters")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![Prisma](https://skillicons.dev/icons?i=prisma "Prisma")](https://prisma.io/ "Prisma") [![MySQL](https://skillicons.dev/icons?i=mysql "MySQL")](https://www.mysql.com/ "MySQL")

## :wrench: Stats

[![Stats for LearnHub](/.github/images/stats.svg "Stats for LearnHub")](https://pagespeed-insights-svg.glitch.me/?url=https://learnhub-lms.vercel.app/ "Stats for LearnHub")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and dependencies that are used in LearnHub.

- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs): ^4.29.1
- [@hello-pangea/dnd](https://www.npmjs.com/package/@hello-pangea/dnd): ^16.5.0
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers): ^3.3.3
- [@mux/mux-node](https://www.npmjs.com/package/@mux/mux-node): ^7.3.3
- [@mux/mux-player-react](https://www.npmjs.com/package/@mux/mux-player-react): ^2.3.1
- [@prisma/client](https://www.npmjs.com/package/@prisma/client): ^5.7.1
- [@radix-ui/react-alert-dialog](https://www.npmjs.com/package/@radix-ui/react-alert-dialog): ^1.0.5
- [@radix-ui/react-checkbox](https://www.npmjs.com/package/@radix-ui/react-checkbox): ^1.0.4
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog): ^1.0.5
- [@radix-ui/react-dropdown-menu](https://www.npmjs.com/package/@radix-ui/react-dropdown-menu): ^2.0.6
- [@radix-ui/react-label](https://www.npmjs.com/package/@radix-ui/react-label): ^2.0.2
- [@radix-ui/react-popover](https://www.npmjs.com/package/@radix-ui/react-popover): ^1.0.7
- [@radix-ui/react-progress](https://www.npmjs.com/package/@radix-ui/react-progress): ^1.0.3
- [@radix-ui/react-separator](https://www.npmjs.com/package/@radix-ui/react-separator): ^1.0.3
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot): ^1.0.2
- [@tanstack/react-table](https://www.npmjs.com/package/@tanstack/react-table): ^8.11.3
- [@uploadthing/react](https://www.npmjs.com/package/@uploadthing/react): ^6.1.0
- [axios](https://www.npmjs.com/package/axios): ^1.6.3
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority): ^0.7.0
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.0
- [cmdk](https://www.npmjs.com/package/cmdk): ^0.2.0
- [lucide-react](https://www.npmjs.com/package/lucide-react): ^0.303.0
- [next](https://www.npmjs.com/package/next): 14.0.4
- [query-string](https://www.npmjs.com/package/query-string): ^8.1.0
- [react](https://www.npmjs.com/package/react): ^18
- [react-confetti](https://www.npmjs.com/package/react-confetti): ^6.1.0
- [react-dom](https://www.npmjs.com/package/react-dom): ^18
- [react-hook-form](https://www.npmjs.com/package/react-hook-form): ^7.49.2
- [react-icons](https://www.npmjs.com/package/react-icons): ^4.12.0
- [react-quill](https://www.npmjs.com/package/react-quill): ^2.0.0
- [recharts](https://www.npmjs.com/package/recharts): ^2.10.3
- [sonner](https://www.npmjs.com/package/sonner): ^1.3.1
- [stripe](https://www.npmjs.com/package/stripe): ^14.11.0
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^2.2.0
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate): ^1.0.7
- [uploadthing](https://www.npmjs.com/package/uploadthing): ^6.1.1
- [zod](https://www.npmjs.com/package/zod): ^3.22.4
- [zustand](https://www.npmjs.com/package/zustand): ^4.4.7
- [@types/node](https://www.npmjs.com/package/@types/node): ^20
- [@types/react](https://www.npmjs.com/package/@types/react): ^18
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): ^18
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.0.1
- [eslint](https://www.npmjs.com/package/eslint): ^8
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next): 14.0.4
- [postcss](https://www.npmjs.com/package/postcss): ^8
- [prisma](https://www.npmjs.com/package/prisma): ^5.7.1
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.3.0
- [typescript](https://www.npmjs.com/package/typescript): ^5

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Flearnhub "Tweet")
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCNAz_hUVBG2ZUN8TVm0bmYw "Subscribe my Channel")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/learnhub&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/learnhub&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/learnhub&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/learnhub&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
