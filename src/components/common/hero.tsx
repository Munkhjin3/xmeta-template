import Image from "next/image";
import React from "react";
import { Container } from "./container";
import { CurrencyConverter } from "./currency-converter";
import { Herocontent } from "./hero-content";

export const Hero = () => {
  return (
    <div className="w-full mt-20 relative  pt-14">
      <div className=" w-full flex flex-col justify-between ">
        <Container className="">
          <div className="grid md:grid-cols-2 w-full h-full ">
           <Herocontent/>
            <div className="w-full max-md:hidden">
            <CurrencyConverter/>
            </div>
          </div>
        </Container>
        <div className="h-[600px] w-full absolute -z-10 flex flex-col justify-between bottom-0  overflow-hidden">
          <Image
            src={"/globe.png"}
            className="w-full"
            sizes="100vw"
            alt=""
            width={0}
            height={0}
          />
        </div>
        <div className="text-transparent border-t h-10 mt-20  dark:bg-[#0A0A0A] bg-white  rounded-t-2xl"></div>
      </div>
    </div>
  );
};
