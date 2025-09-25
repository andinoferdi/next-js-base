import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TitleProvider } from "@/components/providers/title-provider";
import NavbarDemo from "@/components/navbar";
import FooterDemo from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  description: "This is a Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <TitleProvider>
          <NavbarDemo />
          {children}
          <FooterDemo />
        </TitleProvider>
      </body>
    </html>
  );
}
