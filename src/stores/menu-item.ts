export interface MenuItem {
  name: string;
  link: string;
}

export interface NavbarData {
  menuItems: MenuItem[];
  buttons: {
    secondary: {
      text: string;
      action?: () => void;
    };
    primary: {
      text: string;
      action?: () => void;
    };
  };
}

export const getNavbarData = (): NavbarData => {
  return {
    menuItems: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
    buttons: {
      secondary: {
        text: "Login",
        action: () => {
          // Handle login action
          console.log("Login clicked");
        },
      },
      primary: {
        text: "Get Started",
        action: () => {
          // Handle get started action
          console.log("Get Started clicked");
        },
      },
    },
  };
};
