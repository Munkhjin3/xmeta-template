
'use client'
import { Button, Input, Typography } from "@/components/ui";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import  { useState } from "react";

export const LoginInputSection = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  return (
    <div className="w-full flex flex-col gap-5">
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
      <Typography className="text-end">Нууц үгээ мартсан</Typography>
      <div className="w-full mt-9">
        <Button className="w-full">Нэвтрэх</Button>
      </div>
    </div>
  );
};
