"use client";
import Image from "next/image";
import Link from "next/link";
import { useNavbarConfig } from "./nav-data";
import { NavbarItem } from "./nav-item";
import { Button } from "../ui";
import { Smartphone, CircleHelp } from "lucide-react";
import { ReactNode, Suspense, useCallback, useState } from "react";
import { DownloadDropdown } from "./download-dropdown";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTheme } from "next-themes";
import { HelpDropDown } from "./help-dropdown";
import {
  HeadphonesIcon,
  MoonIcon,
  Searchicon,
  SunIcon,
  TicketIcon,
} from "@/icons";
import { Currency } from "./currency";
import { Market } from "./market";
import { NavbarItemsMobile } from "./nav-bar-item-mobile";
import { Hamburger } from "./hamburger";
export const Navbar = () => {
  const listNavItems = useNavbarConfig();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };

  const getVectorPath = useCallback(() => {
    return theme === "light" ? "/navbar/vector.png" : "/navbar/vector-black.png";
  }, [theme]);
  const data = [
    {
      title: "Support Center",
      icon: <HeadphonesIcon color={theme == "light" ? "#344054" : "white"} />,
    },
    {
      title: "My tickets",
      icon: <TicketIcon color={theme == "light" ? "#344054" : "white"} />,
    },
  ];
  const buttons2: Array<{
    title?: string;
    child: ReactNode;
    icon?: JSX.Element;
    className?: string;
    onClick?: () => void;
  }> = [
    {
      title: "Татах",
      icon: <Smartphone size={24} color="#6D55D1" />,
      child: <DownloadDropdown />,
    },
    {
      title: "ENG / USD-$",
      child: <Currency />,
    },
    {
      icon: <Searchicon color={theme == "light" ? "#344054" : "white"} />,
      child: <Market />,
    },
    {
      icon: <CircleHelp color={theme == "light" ? "#344054" : "white"} />,
      child: <HelpDropDown data={data} />,
    },
  ];
  const vector =
    theme == "dark" ? "/navbar/vector.png" : "/navbar/vector-black.png";
  return (
    <div className="w-full border fixed items-center  bg-white dark:bg-[#0A0A0A] z-50 justify-between py-5 px-8 flex">
      {hamburgerOpen && (
        <NavbarItemsMobile
          toggleHamburger={toggleHamburger}
          hamburgerOpen={hamburgerOpen}
          list={listNavItems}
        />
      )}
      <div className="flex gap-4">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image
              src={"/navbar/xmeta-logo.png"}
              alt=""
              width={0}
              className="w-10"
              sizes="100vw"
              height={0}
            />
          </Link>
          <Image
            src={getVectorPath()}
            alt=""
            width={0}
            className="w-[2px] h-12"
            height={0}
          />
        </div>
        <div className="flex gap-4 max-xl:hidden">
          {listNavItems.map(({ title, child }, index) => (
            <NavbarItem key={index + 1} text={title} child={child} />
          ))}
        </div>
      </div>
      <div className="flex gap-2  max-md:hidden">
        <div className="flex items-center gap-2">
          {buttons.map((e, i) => (
            <Link key={i} href={e.href}>
              <Button className={e.className} variant={e.variant}>
                {e.icon && e.icon} {e.title}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex items-center max-lg:hidden gap-2">
          {buttons2.map((e, i) => (
            <DropdownMenu key={i}>
              <DropdownMenuTrigger asChild>
                <Button className={cn(e.className)} variant={"outline"} key={i}>
                  {e.icon && e.icon} {e.title}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>{e.child}</DropdownMenuContent>
            </DropdownMenu>
          ))}
          <Suspense>
            <Button
              variant={"outline"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </Suspense>
        </div>
      </div>
      <Hamburger
        toggleHamburger={toggleHamburger}
        hamburgerOpen={hamburgerOpen}
      />
    </div>
  );
};

export const buttons: Array<{
  title: string;
  href: string;
  variant:
    | "link"
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost";
  icon?: JSX.Element;
  className?: string;
}> = [
  {
    title: "Нэвтрэх",
    href: "/login",
    variant: "outline",
  },
  {
    title: "Бүртгүүлэх",
    href: "/signup",
    variant: "default",
    className: "bg-gradient-to-r from-[#462989] to-[#734CDB] px-10 ",
  },
];
