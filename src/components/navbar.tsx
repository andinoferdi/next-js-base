"use client";

import { useState } from "react";
import { getNavbarConfig } from "@/stores/navbar-menu";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const DemoNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarConfig = getNavbarConfig();
  const { mainItems: menuItems, logo, ctaButton } = navbarConfig;

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo logo={logo} />
        <NavItems items={menuItems} onItemClick={handleItemClick} />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <NavbarButton variant={ctaButton.variant} href={ctaButton.href}>
            {ctaButton.text}
          </NavbarButton>
        </div>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo logo={logo} />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle isOpen={isOpen} onClick={toggleMobileMenu} />
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
              onClick={handleItemClick}
            >
              {item.name}
            </a>
          ))}
          <NavbarButton variant={ctaButton.variant} href={ctaButton.href} className="mt-4">
            {ctaButton.text}
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};
