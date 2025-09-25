export interface HomePageData {
  title: string;
  description: string;
  logoConfig: {
    src: string;
    alt: string;
    width: {
      mobile: number;
      desktop: number;
    };
    height: {
      mobile: number;
      desktop: number;
    };
  };
  instructions: {
    title: string;
    description: string;
    steps: string[];
  };
  actions: {
    primary: ActionButton;
    secondary: ActionButton;
  };
  footerLinks: FooterLink[];
}

export interface ActionButton {
  text: string;
  url: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface FooterLink {
  text: string;
  url: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}
