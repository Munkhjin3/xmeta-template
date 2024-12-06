"use client";
import { Button, Input, Typography } from "@/components/ui";
import { Checkbox } from "@/components/ui/checkbox";
import { LockIcon } from "@/icons";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const SignupSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col max-w-[600px] gap-5">
        <div className="flex w-full  max-w-[600px] max-md:flex-col justify-between  gap-5   ">
          <Typography variant={"heading2"}>Бүртгүүлэх</Typography>
          <div className="border  rounded-xl items-center flex gap-2 p-1">
            <LockIcon />{" "}
            <Typography className="!text-black dark:!text-white !text-sm">
              URL баталгаажуулалт:
              <span className="text-green-500">https://</span>
              www.x-meta.com
            </Typography>
          </div>
        </div>
     <div className="flex flex-col gap-3">
     <div className="border w-full rounded-lg px-3 py-2 flex items-center">
          <Mail />
          <Input
            type="email"
            className="border-none"
            placeholder="user@x-meta.com"
          />
        </div>
        <div className="border w-full rounded-lg px-3 py-2 flex items-center">
          <Lock aria-hidden="true" className="mr-2 text-gray-500" />
          <Input
            type={showPassword ? "text" : "password"}
            className="border-none focus:outline-none flex-1"
            placeholder="Нууц үг"
            aria-label="Password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
            className="ml-2"
          >
            {showPassword ? (
              <EyeOff className="text-gray-500" />
            ) : (
              <Eye className="text-gray-500" />
            )}
          </button>
        </div>
        <div>
          {data.map((e, i) => (
            <div key={i}>
              <Typography>{e}</Typography>
            </div>
          ))}
        </div>
     </div>
        <div className="flex justify-start items-center space-x-2  ">
          <Checkbox className="rounded-full" id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none underline cursor-pointer text-[#475467] "
          >
            Би үйлчилгээний нөхцөлийг уншиж танилцан
          </label>
        </div>
        <div className="w-full flex flex-col items-center gap-6">
          <Button variant={"outline"} className="w-full">
            Бүртгүүлэх
          </Button>
          <Link href={"/login"} className="text-primary">
            Би бүртгэлтэй нэвтрэх
          </Link>
        </div>
      </div>
    </div>
  );
};
const data = [
  "Дор хаяж 8 тэмдэгт",
  "Дор хаяж 1 тоо",
  "Дор хаяж 1 том үсэг",
  "Дор хаяж 1 тусгай тэмдэгт ",
];
