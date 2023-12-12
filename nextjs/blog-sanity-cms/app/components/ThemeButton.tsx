"use client";

import { useTheme } from "next-themes";
import { BiSun, BiMoon } from "react-icons/bi";
import React, { useEffect, useState } from "react";

const ThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <BiSun size="24px" />
      ) : (
        <BiMoon size="24px" />
      )}
    </button>
  );
};

export default ThemeButton;
