"use client";
import Image from "next/image";
import Link from "next/link";
import { useNavbarConfig } from "./nav-data";
import { NavbarItem } from "./nav-item";
import { Button } from "../ui";
import { Smartphone, CircleHelp, Moon } from "lucide-react";
import { ReactNode, useState } from "react";
import { DownloadDropdown } from "./download-dropdown";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { HelpDropDown } from "./help-dropdown";
import { HeadphonesIcon, Searchicon, TicketIcon } from "@/icons";
import { Currency } from "./currency";
import { Market } from "./market";
import { NavbarItemsMobile } from "./nav-bar-item-mobile";
import { Hamburger } from "./hamburger";
export const Navbar = () => {
  const listNavItems = useNavbarConfig();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
  };
  return (
    <div className="w-full border items-center  justify-between py-5 px-8 flex">
     {hamburgerOpen && <NavbarItemsMobile toggleHamburger={toggleHamburger}
          hamburgerOpen={hamburgerOpen} list={listNavItems} />}
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
            src={"/navbar/vector.png"}
            alt=""
            width={0}
            className="w-[2px] h-12"
            height={0}
          />
        </div>
        <div className="flex gap-4 max-md:hidden">
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
        <div  className="flex items-center max-lg:hidden gap-2">
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
    href: "/",
    variant: "outline",
  },
  {
    title: "Бүртгүүлэх",
    href: "/",
    variant: "default",
    className: "bg-gradient-to-r from-[#462989] to-[#734CDB] px-10 ",
  },
];
const data = [
  {
    title: "Support Center",
    icon: <HeadphonesIcon />,
  },
  {
    title: "My tickets",
    icon: <TicketIcon />,
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
    icon: <Searchicon color="#6D55D1" />,
    child: <Market />,
  },
  {
    icon: <CircleHelp color="#6D55D1" />,
    child: <HelpDropDown data={data} />,
  },
  {
    icon: <Moon size={24} color="#6D55D1" />,
    child: <DownloadDropdown />,
  },
];
