"use client";

import Image from "next/image";
import { getHomePageData, handleExternalLink } from "@/services/home";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PageTitle } from "@/components/page-title";

export default function Home() {
  const isMobile = useIsMobile();
  const data = getHomePageData();

  const handleLinkClick = (url: string) => {
    handleExternalLink(url);
  };

  return (
    <>
      <PageTitle title={data.title} />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src={data.logoConfig.src}
          alt={data.logoConfig.alt}
          width={isMobile ? data.logoConfig.width.mobile : data.logoConfig.width.desktop}
          height={isMobile ? data.logoConfig.height.mobile : data.logoConfig.height.desktop}
          priority
        />
        <Card variant="outlined" padding="sm" className="w-full max-w-2xl">
          <CardHeader padding="sm">
            <CardTitle size="sm" className="text-center sm:text-left">
              {data.instructions.title}
            </CardTitle>
            <CardDescription size="sm" className="text-center sm:text-left">
              {data.instructions.description}
            </CardDescription>
          </CardHeader>
          <CardContent padding="sm">
            <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left space-y-2">
              {data.instructions.steps.map((step, index) => (
                <li key={index} className="tracking-[-.01em]">
                  {step.includes("<code>") ? (
                    <>
                      {step.split("<code>")[0]}
                      <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                        {step.split("<code>")[1].split("</code>")[0]}
                      </code>
                      {step.split("</code>")[1]}
                    </>
                  ) : (
                    step
                  )}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button
            variant="default"
            size="responsive"
            onClick={() => handleLinkClick(data.actions.primary.url)}
            icon={
              <Image
                className="dark:invert"
                src={data.actions.primary.icon.src}
                alt={data.actions.primary.icon.alt}
                width={data.actions.primary.icon.width}
                height={data.actions.primary.icon.height}
              />
            }
            iconPosition="left"
          >
            {data.actions.primary.text}
          </Button>
          <Button
            variant="secondary"
            size="responsive"
            width="responsive"
            onClick={() => handleLinkClick(data.actions.secondary.url)}
          >
            {data.actions.secondary.text}
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {data.footerLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => handleLinkClick(link.url)}
            className="hover:underline hover:underline-offset-4"
            icon={
              <Image
                aria-hidden
                src={link.icon.src}
                alt={link.icon.alt}
                width={link.icon.width}
                height={link.icon.height}
              />
            }
            iconPosition="left"
          >
            {link.text}
          </Button>
        ))}
      </footer>
      </div>
    </>
  );
}
