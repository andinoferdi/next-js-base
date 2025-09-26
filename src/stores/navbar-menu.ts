export interface MenuItem {
  name: string;
  link: string;
  icon?: string;
  children?: MenuItem[];
}

export interface NavbarConfig {
  mainItems: MenuItem[];
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    href: string;
  };
  ctaButton: {
    text: string;
    href: string;
    variant: "primary" | "secondary" | "dark" | "gradient";
  };
}

export const defaultNavbarConfig: NavbarConfig = {
  mainItems: [
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "Pricing", 
      link: "/pricing",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ],
  logo: {
    src: "https://assets.aceternity.com/logo-dark.png",
    alt: "logo",
    width: 30,
    height: 30,
    href: "/",
  },
  ctaButton: {
    text: "Get Started",
    href: "/login",
    variant: "primary",
  },
};

export const getMenuItems = (): MenuItem[] => {
  return defaultNavbarConfig.mainItems;
};

export const getNavbarConfig = (): NavbarConfig => {
  return defaultNavbarConfig;
};
