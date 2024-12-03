import { cn } from "@/lib/utils";
import { NavbarItemPropsType } from "./type";
import { ChevronDown } from "lucide-react";
import { HelpDropDown } from "./help-dropdown";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CoinSwapIcon } from "@/icons";

export const NavbarItem = ({ text, isOpen, child }: NavbarItemPropsType) => {
  return (
    <div className="flex cursor-pointer items-center gap-2">
      {child ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center  gap-2">
              <p className={cn("text-nowrap font-semibold")}>{text}</p>
              <ChevronDown
                width={21}
                height={21}
                className={cn(
                  `transition-transform duration-300`,
                  isOpen ? "rotate-180" : "rotate-0"
                )}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-5">
            <HelpDropDown data={data} />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <p className={cn("text-nowrap font-semibold")}>{text}</p>
      )}
    </div>
  );
};

const data = [
  {
    title: "Спот арилжаа",
    icon: <CoinSwapIcon />,
    desc: "Спот арилжаа",
  },
  {
    title: "Фьючерс арилжаа",
    icon: <CoinSwapIcon />,
    desc: "Фьючерс арилжаа",
  },
];
