"use client"
import Image from "next/image";
import { PageTitle } from "@/components/page-title";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className={`font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 ${
      isMobile ? "p-4 pb-16" : "p-8 pb-20 sm:p-20"
    }`}>
      <PageTitle title="Home" />
      <main className={`flex flex-col gap-8 row-start-2 items-center ${
        isMobile ? "items-center w-full" : "sm:items-start"
      }`}>
        <div className="flex flex-col items-center gap-6">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={isMobile ? 150 : 180}
            height={isMobile ? 32 : 38}
            priority
          />
        </div>

        <Card className={`${isMobile ? "w-full" : "max-w-2xl"}`} variant="outlined">
          <CardHeader className={isMobile ? "p-4" : "p-6"}>
            <CardTitle className={`${isMobile ? "text-center" : "text-center sm:text-left"}`}>
              Get Started
            </CardTitle>
            <CardDescription className={`${isMobile ? "text-center" : "text-center sm:text-left"}`}>
              Welcome to your Next.js application
            </CardDescription>
          </CardHeader>
          <CardContent className={isMobile ? "p-4 pt-0" : "p-6 pt-0"}>
            <ol className={`font-mono list-inside list-decimal text-sm/6 ${
              isMobile ? "text-center" : "text-center sm:text-left"
            }`}>
              <li className="mb-2 tracking-[-.01em]">
                Get started by editing{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                  src/app/page.tsx
                </code>
                .
              </li>
              <li className="tracking-[-.01em]">
                Save and see your changes instantly.
              </li>
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
            onClick={() => window.open("https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", "_blank")}
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </Button>
          <Button
            variant="outline"
            size={isMobile ? "md" : "lg"}
            className={`${isMobile ? "w-full" : ""}`}
            onClick={() => window.open("https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", "_blank")}
          >
            Read our docs
          </Button>
        </div>
      </main>
      <footer className={`row-start-3 flex flex-wrap items-center justify-center ${
        isMobile ? "gap-4 flex-col" : "gap-6 flex-row"
      }`}>
        <Button
          variant="ghost"
          size="sm"
          className={`${isMobile ? "w-full justify-start" : ""} gap-2`}
          onClick={() => window.open("https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", "_blank")}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`${isMobile ? "w-full justify-start" : ""} gap-2`}
          onClick={() => window.open("https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", "_blank")}
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`${isMobile ? "w-full justify-start" : ""} gap-2`}
          onClick={() => window.open("https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", "_blank")}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </Button>
      </footer>
    </div>
  );
}
