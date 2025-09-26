"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PageTitle } from "@/components/page-title";

export default function NotFound() {
  return (
    <>
      <PageTitle title="404 - Page Not Found" />
      <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card variant="outlined" className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={25}
              className="dark:invert"
            />
          </div>
          <CardTitle size="lg" className="text-6xl font-bold text-muted-foreground">
            404
          </CardTitle>
          <CardDescription size="lg" className="text-xl">
            Page Not Found
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="default">
              <Link href="/">
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="javascript:history.back()">
                Go Back
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      </div>
    </>
  );
}
