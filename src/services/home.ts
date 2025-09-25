import { type HomePageData } from "@/types/home";

export const getHomePageData = (): HomePageData => {
  return {
    title: "Home",
    description: "This is a Next.js project",
    logoConfig: {
      src: "/next.svg",
      alt: "Next.js logo",
      width: {
        mobile: 150,
        desktop: 180,
      },
      height: {
        mobile: 32,
        desktop: 38,
      },
    },
    instructions: {
      title: "Get Started",
      description: "Welcome to your Next.js application",
      steps: [
        "Get started by editing <code>src/app/page.tsx</code>.",
        "Save and see your changes instantly.",
      ],
    },
    actions: {
      primary: {
        text: "Deploy now",
        url: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        icon: {
          src: "/vercel.svg",
          alt: "Vercel logomark",
          width: 20,
          height: 20,
        },
      },
      secondary: {
        text: "Read our docs",
        url: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        icon: {
          src: "/docs.svg",
          alt: "Docs icon",
          width: 16,
          height: 16,
        },
      },
    },
    footerLinks: [
      {
        text: "Learn",
        url: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        icon: {
          src: "/file.svg",
          alt: "File icon",
          width: 16,
          height: 16,
        },
      },
      {
        text: "Examples",
        url: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        icon: {
          src: "/window.svg",
          alt: "Window icon",
          width: 16,
          height: 16,
        },
      },
      {
        text: "Go to nextjs.org →",
        url: "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
        icon: {
          src: "/globe.svg",
          alt: "Globe icon",
          width: 16,
          height: 16,
        },
      },
    ],
  };
};

export const handleExternalLink = (url: string): void => {
  window.open(url, "_blank", "noopener,noreferrer");
};
