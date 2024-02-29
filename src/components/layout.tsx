"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children ?? <></> as ReactNode}</ThemeProvider>;
}

export default Layout;