"use client";

import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Container = ({ children, className = "", maxWidth = "xl" }: ContainerProps) => {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full"
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClasses[maxWidth]} ${className}`}>
      {children}
    </div>
  );
};

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header = ({ children, className = "" }: HeaderProps) => {
  return (
    <header className={`py-6 ${className}`}>
      {children}
    </header>
  );
};

interface MainProps {
  children: ReactNode;
  className?: string;
}

const Main = ({ children, className = "" }: MainProps) => {
  return (
    <main className={`flex-1 ${className}`}>
      {children}
    </main>
  );
};

interface FooterProps {
  children: ReactNode;
  className?: string;
}

const Footer = ({ children, className = "" }: FooterProps) => {
  return (
    <footer className={`py-6 ${className}`}>
      {children}
    </footer>
  );
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const Section = ({ children, className = "", padding = "md" }: SectionProps) => {
  const paddingClasses = {
    none: "",
    sm: "py-4",
    md: "py-8",
    lg: "py-16"
  };

  return (
    <section className={`${paddingClasses[padding]} ${className}`}>
      {children}
    </section>
  );
};

export { Container, Header, Main, Footer, Section };
export type { ContainerProps, HeaderProps, MainProps, FooterProps, SectionProps };
