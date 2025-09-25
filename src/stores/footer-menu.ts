export interface MenuItem {
  name: string;
  link: string;
  icon?: string;
  children?: MenuItem[];
}

export interface SocialLink {
  name: string;
  link: string;
  icon: string;
}

export interface FooterConfig {
  brand: {
    logo?: string;
    companyName: string;
    description: string;
  };
  quickLinks: MenuItem[];
  supportLinks: MenuItem[];
  socialLinks: SocialLink[];
  copyright: string;
}

export const defaultFooterConfig: FooterConfig = {
  brand: {
    companyName: "Next.js",
    description: "Building the future with innovative solutions and cutting-edge technology.",
  },
  quickLinks: [
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ],
  supportLinks: [
    {
      name: "Help Center",
      link: "/help",
    },
    {
      name: "Contact Support",
      link: "/contact",
    },
    {
      name: "Documentation",
      link: "https://nextjs.org/docs",
    },
    {
      name: "API Reference",
      link: "https://nextjs.org/docs/api-reference",
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      link: "https://github.com/vercel/next.js",
      icon: "github",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/nextjs",
      icon: "twitter",
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/company/vercel",
      icon: "linkedin",
    },
    {
      name: "Email",
      link: "mailto:contact@nextjs.org",
      icon: "email",
    },
  ],
  copyright: "© 2024 Next.js. All rights reserved.",
};

export const getFooterConfig = (): FooterConfig => {
  return defaultFooterConfig;
};
