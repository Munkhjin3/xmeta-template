"use client";
import { cn } from "@/lib/utils";
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  Grip,
  Landmark,
  Logs,
  WalletMinimal,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

export const SideBar = () => {
  const [index, setIndex] = useState(-1);
  const handleExpand = useCallback((item: number) => {
    setIndex(item);
  }, []);
  return (
    <div className="min-w-72 flex flex-col border-r">
      <Link
        className="py-6 px-8 border-b flex gap-3 items-center"
        href={"/dashboard"}
      >
        <Grip strokeWidth={1} /> <p>Хянах самбар</p>
      </Link>
      {navItems.map((item, i) => {
        return (
          <div className="border-b" key={i}>
            <div
              className="py-6 pl-8 pr-4 flex items-center justify-between"
              onClick={() => handleExpand(i)}
            >
              <div className="flex gap-3">
                {item.icon} <p>{item.title}</p>
              </div>
              {index === i ? <ChevronUp /> : <ChevronDown />}
            </div>
            {index === i &&
              item.subItem.map(({ title, href, icon }, subIndex) => (
                <Link
                  key={subIndex}
                  className={cn(
                    "py-4 pl-12 pr-8 flex gap-3 items-center",
                    subIndex === 0 && "pt-0"
                  )}
                  href={href}
                >
                  {icon}
                  <p>{title}</p>
                </Link>
              ))}
          </div>
        );
      })}
    </div>
  );
};

const navItems = [
  {
    icon: <Landmark strokeWidth={1} />,
    title: "Банкны шилжүүлэг",
    href: "/dashboard",
    subItem: [
      {
        icon: <ArrowDown strokeWidth={1} />,
        title: "Орлого",
        href: "/dashboard",
      },
      {
        icon: <ArrowUp strokeWidth={1} />,
        title: "Зарлага",
        href: "/dashboard",
      },
    ],
  },
  {
    icon: <WalletMinimal strokeWidth={1} />,
    title: "Хэтэвч",
    href: "/dashboard",
    subItem: [
      {
        icon: <ArrowDown strokeWidth={1} />,
        title: "Орлого",
        href: "/dashboard",
      },
    ],
  },
  {
    icon: <Logs strokeWidth={1} />,
    title: "Захиалга",
    href: "/dashboard",
    subItem: [
      {
        icon: <ArrowDown strokeWidth={1} />,
        title: "Орлого",
        href: "/dashboard",
      },
    ],
  },
];
