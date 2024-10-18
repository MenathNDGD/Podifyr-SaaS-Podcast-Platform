<div align="center">
  <br />
     <a href="#" target="_blank">
        <img src="public/icons/auth-logo.png" alt="Podifyr">
      </a>
  <br />
  <h1 align="center">AI-Powered SaaS Podcast Platform</h1>
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Convex-black?style=for-the-badge&logoColor=white&logo=convex&color=FF6F61" alt="convex" />
    <img src="https://img.shields.io/badge/-OpenAI-black?style=for-the-badge&logoColor=white&logo=openai&color=412991" alt="openai" />
    <img src="https://img.shields.io/badge/Clerk-6C47FF.svg?style=for-the-badge&logo=Clerk&logoColor=white" alt="clerk" />
    <img src="https://img.shields.io/badge/shadcn/ui-000000.svg?style=for-the-badge&logo=shadcn/ui&logoColor=white" alt="shadcn" />
  </div>
  <br/>
   <div align="center">
     Podifyr is a SaaS podcast platform built with Next.js, Shadcn UI, Tailwind CSS, and Clerk for user authentication. It leverages the OpenAI API for advanced features, Uploadstuff for file uploading, and Convex for real-time data management. A modern, user-friendly solution for creating, managing, and sharing podcasts.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

A cutting-edge AI-powered SaaS platform that enables users to create, discover, and enjoy podcasts with advanced features like text-to-audio conversion with multi-voice AI, podcast thumbnail Image generation and seamless playback.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Convex
- OpenAI
- Clerk
- ShadCN
- Tailwind CSS

## <a name="features">🔋 Features</a>

🎯 **Robust Authentication**: Secure and reliable user login and registration system.

🎯 **Modern Home Page**: Showcases trending podcasts with a sticky podcast player for continuous listening.

🎯 **Discover Podcasts Page**: Dedicated page for users to explore new and popular podcasts.

🎯 **Fully Functional Search**: Allows users to find podcasts easily using various search criteria.

🎯 **Create Podcast Page**: Enables podcast creation with text-to-audio conversion, AI image generation, and previews.

🎯 **Multi Voice AI Functionality**: Supports multiple AI-generated voices for dynamic podcast creation.

🎯 **Profile Page**: View all created podcasts with options to delete them.

🎯 **Podcast Details Page**: Displays detailed information about each podcast, including creator details, number of listeners, and transcript.

🎯 **Podcast Player**: Features backward/forward controls, as well as mute/unmute functionality for a seamless listening experience.

🎯 **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/MenathNDGD/Podifyr-SaaS-Podcast-Platform.git
cd Podifyr-SaaS-Podcast-Platform
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` or `.env` in the root of your project and add the following content:

```env
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Clerk Webhook
CLERK_WEBHOOK_SECRET=D

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# OpenAI
OPENAI_API_KEY=
```

Replace the placeholder values with your actual Convex & Clerk credentials. You can obtain these credentials by signing up on the [Convex](https://www.convex.dev/) and [Clerk](https://clerk.com/) websites.

**Running the Project**

Run the development server for Node

```bash
npm run dev
```

Run the development server for corvex

```bash
npx convex dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
