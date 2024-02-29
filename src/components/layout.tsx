"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children ?? null}</ThemeProvider>;
}

export default Layout;