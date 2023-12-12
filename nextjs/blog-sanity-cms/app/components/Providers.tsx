"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
