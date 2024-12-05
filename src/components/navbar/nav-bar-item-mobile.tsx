"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Typography,
} from "../ui";
import { NavbarItemMobilePropsType } from "./type";
import { CustomSheet } from "../common";
import { buttons } from "./navbar";
import Link from "next/link";
import { Moon } from "lucide-react";

export function NavbarItemsMobile({
  list,
  toggleHamburger,
  hamburgerOpen,
}: NavbarItemMobilePropsType) {
  return (
    <CustomSheet
      title=""
      className="w-full"
      isOpen={hamburgerOpen}
      setIsOpen={toggleHamburger}
    >
      <div className="flex items-center w-full gap-2 px-2">
        {buttons.map((e, i) => (
          <Link className="w-full" key={i} href={e.href}>
            <Button className="w-full" variant={e.variant}>
              {e.title}
            </Button>
          </Link>
        ))}
      </div>
      <Accordion type="single" collapsible className=" ">
        {list.map(({ title, mobileSubmenu }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger showIcon={mobileSubmenu && true} className="px-3">
              <div className="flex items-center gap-2">{title}</div>
            </AccordionTrigger>
            <AccordionContent>
              {mobileSubmenu?.map((e, i) => (
                <div key={i}>
                  <Link href={e.href}>
                    <div className="flex gap-2 py-4 pl-4">
                      <Typography>{e.title}</Typography>
                    </div>
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="">
      <div className="py-2 px-3 border border-t-0 flex justify-between items-center">
        <Typography className="!text-lg text-black dark:text-white">Theme</Typography>
        <Button variant={'outline'}><Moon size={24} color="#6D55D1" /></Button>
      </div>
      <div className="py-3 px-3 border border-t-0 flex justify-between items-center">
        <Typography className="!text-lg text-black dark:text-white">Download</Typography>
      </div>
      <div className="py-3 px-3 border border-t-0 flex justify-between items-center">
        <Typography className="!text-lg text-black dark:text-white">English</Typography>
      </div>
      </div>
  
    </CustomSheet>
  );
}


  