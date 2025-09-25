export interface MenuItem {
  name: string;
  link: string;
  icon?: string;
  children?: MenuItem[];
}

export interface NavbarConfig {
  mainItems: MenuItem[];
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
};

export const getMenuItems = (): MenuItem[] => {
  return defaultNavbarConfig.mainItems;
};
