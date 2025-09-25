"use client";
import {
  Footer,
  FooterBody,
  FooterBrand,
  FooterLinks,
  FooterSocial,
  FooterBottom,
  FooterCopyright,
} from "@/components/ui/resizable-footer";
import { getFooterConfig } from "@/stores/footer-menu";

export default function FooterDemo() {
  const footerConfig = getFooterConfig();

  return (
    <Footer>
      <FooterBody>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FooterBrand
            companyName={footerConfig.brand.companyName}
            description={footerConfig.brand.description}
          />
          
          <FooterLinks
            title="Quick Links"
            items={footerConfig.quickLinks}
          />
          
          <FooterLinks
            title="Support"
            items={footerConfig.supportLinks}
          />
          
          <FooterSocial
            items={footerConfig.socialLinks}
          />
        </div>
      </FooterBody>
      
      <FooterBottom>
        <FooterCopyright text={footerConfig.copyright} />
      </FooterBottom>
    </Footer>
  );
}
