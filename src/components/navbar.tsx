"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { getNavbarData } from "@/stores/menu-item";

export function AppNavbar() {
  const navbarData = getNavbarData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSecondaryAction = () => {
    if (navbarData.buttons.secondary.action) {
      navbarData.buttons.secondary.action();
    }
  };

  const handlePrimaryAction = () => {
    if (navbarData.buttons.primary.action) {
      navbarData.buttons.primary.action();
    }
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navbarData.menuItems} />
          <div className="flex items-center gap-4">
            <NavbarButton 
              variant="secondary"
              onClick={handleSecondaryAction}
            >
              {navbarData.buttons.secondary.text}
            </NavbarButton>
            <NavbarButton 
              variant="primary"
              onClick={handlePrimaryAction}
            >
              {navbarData.buttons.primary.text}
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navbarData.menuItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  handleSecondaryAction();
                  setIsMobileMenuOpen(false);
                }}
                variant="secondary"
                className="w-full"
              >
                {navbarData.buttons.secondary.text}
              </NavbarButton>
              <NavbarButton
                onClick={() => {
                  handlePrimaryAction();
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full"
              >
                {navbarData.buttons.primary.text}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
