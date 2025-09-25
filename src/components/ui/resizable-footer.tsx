"use client";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

interface FooterProps {
  children: React.ReactNode;
  className?: string;
}

interface FooterBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface FooterLinksProps {
  items: {
    name: string;
    link: string;
    icon?: string;
  }[];
  className?: string;
  title: string;
}

interface FooterSocialProps {
  items: {
    name: string;
    link: string;
    icon: string;
  }[];
  className?: string;
}

interface FooterBrandProps {
  logo?: string;
  companyName: string;
  description: string;
  className?: string;
}

export const Footer = ({ children, className }: FooterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.footer
      ref={ref}
      className={cn("relative inset-x-0 bottom-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.footer>
  );
};

export const FooterBody = ({ children, className, visible }: FooterBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 -4px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "none",
        y: visible ? -10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto w-full max-w-7xl bg-transparent px-4 py-8 lg:px-8 dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const FooterBrand = ({ companyName, description, className }: FooterBrandProps) => {
  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      <div className="flex items-center space-x-2">
        <span className="text-xl font-semibold text-black dark:text-white">
          {companyName}
        </span>
      </div>
      <p className="max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};

export const FooterLinks = ({ items, className, title }: FooterLinksProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      <h3 className="text-sm font-semibold text-black dark:text-white">
        {title}
      </h3>
      <div className="flex flex-col space-y-2">
        {items.map((item, idx) => (
          <a
            key={`footer-link-${idx}`}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="relative text-sm text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            {hovered === idx && (
              <motion.div
                layoutId="footer-hovered"
                className="absolute -left-2 top-0 h-full w-1 rounded-full bg-primary-500"
              />
            )}
            <span className="relative">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export const FooterSocial = ({ items, className }: FooterSocialProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <IconBrandGithub className="h-5 w-5" />;
      case "twitter":
        return <IconBrandTwitter className="h-5 w-5" />;
      case "linkedin":
        return <IconBrandLinkedin className="h-5 w-5" />;
      case "email":
        return <IconMail className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      <h3 className="text-sm font-semibold text-black dark:text-white">
        Follow Us
      </h3>
      <div className="flex space-x-4">
        {items.map((item, idx) => (
          <a
            key={`social-link-${idx}`}
            href={item.link}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-primary-900 dark:hover:text-primary-400"
            aria-label={item.name}
          >
            {getIcon(item.icon)}
          </a>
        ))}
      </div>
    </div>
  );
};

export const FooterBottom = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("border-t border-neutral-200 dark:border-neutral-800", className)}>
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export const FooterCopyright = ({ 
  text, 
  className 
}: { 
  text: string; 
  className?: string; 
}) => {
  return (
    <p className={cn("text-center text-sm text-neutral-500 dark:text-neutral-400", className)}>
      {text}
    </p>
  );
};
