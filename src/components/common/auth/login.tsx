"use client";
import { Button, Typography } from "@/components/ui";
import { LockIcon } from "@/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { LoginQr } from "./login-qr";
import { LoginInputSection } from "./login-input-section";

export const Login = () => {
  const [active, setActive] = useState("И-Мэйл хаяг");
  const handleTabChange = (tabName: string) => {
    setActive(tabName);
  };
  const isActive = (tabName: string) => active === tabName;
  return (
    <div className="w-full flex flex-col gap-5 items-center">
      <div className="flex w-full max-md:flex-col  max-w-[500px] justify-between  gap-5   ">
        <Typography variant={"heading2"}>Нэвтрэх</Typography>
        <div className="border   rounded-xl items-center flex gap-2 p-1">
          <LockIcon />{" "}
          <Typography className="!text-black dark:!text-white !text-sm">
            URL баталгаажуулалт:<span className="text-green-500">https://</span>
            www.x-meta.com
          </Typography>
        </div>
      </div>
      <div className="w-full max-w-[500px] flex flex-col gap-5">
        <div>
          {["И-Мэйл хаяг", "QR Code"].map((tabName) => (
            <Button
              key={tabName}
              variant={"ghost"}
              className={cn(
                active == tabName &&
                  "border-b rounded-none text-primary !font-semibold hover:!text-primary border-primary",
                " "
              )}
              onClick={() => handleTabChange(tabName)}
            >
              {tabName}
            </Button>
          ))}
        </div>
        {isActive("И-Мэйл хаяг") && <LoginInputSection />}
        {isActive("QR Code") && <LoginQr />}
      </div>
    </div>
  );
};
