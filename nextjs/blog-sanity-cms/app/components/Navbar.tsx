"use client";

import Link from "next/link";
import { navItems } from "../lib/constants";
import { NavItem } from "../lib/interfaces";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GiMountainRoad } from "react-icons/gi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Title } from "./";

export const revalidate = 60;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`${
        pathname === "/"
          ? "absolute top-0 z-20 w-screen text-white"
          : "max-w-5xl text-black sm:px-6 lg:px-8"
      } mx-auto`}
    >
      <div
        className={`${
          pathname === "/" ? "mx-auto max-w-5xl sm:px-6 lg:px-8" : ""
        }`}
      >
        <div className="relative flex h-16 justify-between px-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full justify-start md:w-1/3">
              <Link href="/">
                <h1 className=" flex items-center justify-center gap-2 text-xl">
                  <GiMountainRoad />
                  {/* @ts-expect-error Server Component */}
                  <Title />
                </h1>
              </Link>
            </div>
            <div className="hidden w-1/3 md:block">
              <NavItems menuOpen={menuOpen} />
            </div>

            {/*  MOBILE */}
            {/* Burger Menu Button */}
            <div
              className={`${
                pathname === "/" && !menuOpen
                  ? "text-white  delay-300"
                  : "text-black"
              } absolute right-4 z-40 block cursor-pointer md:hidden`}
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <AiOutlineClose size="28px" />
              ) : (
                <AiOutlineMenu size="28px" />
              )}
            </div>
            {/* Animated Menu */}
            <div
              className={` fixed right-0 top-0 z-30 !h-screen w-screen bg-white text-black shadow-md transition-transform duration-500 md:hidden ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                transformOrigin: "right",
                transform: menuOpen ? "translateX(0)" : "translateX(100%)",
              }}
            >
              <NavItems
                closeMenu={() => setMenuOpen(false)}
                menuOpen={menuOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const NavItems = ({
  closeMenu,
  menuOpen,
}: {
  closeMenu?: () => void;
  menuOpen: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-end gap-10 p-6 pl-14 pt-16 text-2xl md:flex-row md:p-0 md:text-lg">
      {navItems.map((navItem: NavItem) => {
        const isActive = pathname === navItem.link;
        return (
          <div key={navItem.name}>
            <Link
              href={navItem.link}
              onClick={closeMenu} // Close the menu when a link is clicked
              className={`
          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"} ${
            pathname === "/" && !menuOpen ? "after:bg-white" : "after:bg-black"
          } relative  after:absolute after:bottom-0 after:left-0 after:h-[1.5px]   after:transition-all after:duration-300
        `}
              prefetch
            >
              {navItem.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
