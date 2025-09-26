"use client";

import { useTitle } from "@/components/providers/title-provider";
import { useEffect } from "react";

interface TitleProps {
  title: string;
  children?: React.ReactNode;
}

export const Title = ({ title, children }: TitleProps) => {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);

  return children ? <>{children}</> : null;
};

export { useTitle } from "@/components/providers/title-provider";
