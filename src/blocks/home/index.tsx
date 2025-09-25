"use client"
import Image from "next/image";
import { PageTitle } from "@/components/page-title";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getHomePageData, handleExternalLink } from "@/services/home";

export default function Home() {
  const isMobile = useIsMobile();
  const data = getHomePageData();

  return (
    <div className={`font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 ${
      isMobile ? "p-4 pb-16" : "p-8 pb-20 sm:p-20"
    }`}>
      <PageTitle title={data.title} />
      <main className={`flex flex-col gap-8 row-start-2 items-center ${
        isMobile ? "items-center w-full" : "sm:items-start"
      }`}>
        <div className="flex flex-col items-center gap-6">
          <Image
            className="dark:invert"
            src={data.logoConfig.src}
            alt={data.logoConfig.alt}
            width={isMobile ? data.logoConfig.width.mobile : data.logoConfig.width.desktop}
            height={isMobile ? data.logoConfig.height.mobile : data.logoConfig.height.desktop}
            priority
          />
        </div>

        <Card className={`${isMobile ? "w-full" : "max-w-2xl"}`} variant="outlined">
          <CardHeader className={isMobile ? "p-4" : "p-6"}>
            <CardTitle className={`${isMobile ? "text-center" : "text-center sm:text-left"}`}>
              {data.instructions.title}
            </CardTitle>
            <CardDescription className={`${isMobile ? "text-center" : "text-center sm:text-left"}`}>
              {data.instructions.description}
            </CardDescription>
          </CardHeader>
          <CardContent className={isMobile ? "p-4 pt-0" : "p-6 pt-0"}>
            <ol className={`font-mono list-inside list-decimal text-sm/6 ${
              isMobile ? "text-center" : "text-center sm:text-left"
            }`}>
              {data.instructions.steps.map((step, index) => (
                <li key={index} className={`${index < data.instructions.steps.length - 1 ? "mb-2" : ""} tracking-[-.01em]`}>
                  {step.includes("<code>") ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: step.replace(
                          "<code>src/app/page.tsx</code>",
                          '<code class="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">src/app/page.tsx</code>'
                        )
                      }}
                    />
                  ) : (
                    step
                  )}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <div className={`flex gap-4 items-center ${
          isMobile ? "flex-col w-full" : "flex-col sm:flex-row"
        }`}>
          <Button
            variant="primary"
            size={isMobile ? "md" : "lg"}
            className={`${isMobile ? "w-full" : ""} gap-2`}
            onClick={() => handleExternalLink(data.actions.primary.url)}
          >
            <Image
              className="dark:invert"
              src={data.actions.primary.icon.src}
              alt={data.actions.primary.icon.alt}
              width={data.actions.primary.icon.width}
              height={data.actions.primary.icon.height}
            />
            {data.actions.primary.text}
          </Button>
          <Button
            variant="outline"
            size={isMobile ? "md" : "lg"}
            className={`${isMobile ? "w-full" : ""}`}
            onClick={() => handleExternalLink(data.actions.secondary.url)}
          >
            {data.actions.secondary.text}
          </Button>
        </div>
      </main>
      <footer className={`row-start-3 flex flex-wrap items-center justify-center ${
        isMobile ? "gap-4 flex-col" : "gap-6 flex-row"
      }`}>
        {data.footerLinks.map((link, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`${isMobile ? "w-full justify-start" : ""} gap-2`}
            onClick={() => handleExternalLink(link.url)}
          >
            <Image
              aria-hidden
              src={link.icon.src}
              alt={link.icon.alt}
              width={link.icon.width}
              height={link.icon.height}
            />
            {link.text}
          </Button>
        ))}
      </footer>
    </div>
  );
}
