"use client";
import React from "react";
import { Container } from "./container";
import { CurrencyConverter } from "./currency-converter";
import dynamic from "next/dynamic";
import Spline from "@splinetool/react-spline";
const Herocontent = dynamic(
  () =>
    import("@/components/common/hero-content").then(
      (components) => components.Herocontent
    ),
  {
    ssr: false,
  }
);
export const Hero = () => {
  return (
    <div className="w-full mt-20 relative  pt-14">
      <div className=" w-full flex flex-col justify-between ">

        <Container className="bg-transparent">
          <div className="grid lg:grid-cols-2 w-full h-full ">
            <Herocontent />
            <div className="w-full max-lg:hidden">
              <CurrencyConverter />
            </div>
          </div>
        </Container>  
        <div className="h-[800px] w-full absolute -z-10 flex flex-col justify-between -bottom-[0] overflow-hidden  ">
          {/* <Image
            src={"/globe.png"}
            className="w-full"
            sizes="100vw"
            alt=""
            width={0}
            height={0}
          /> */}
          <Spline
          className="w-full absolute -bottom-[200px]"
            scene="https://prod.spline.design/CZUxncE98IfRSBKA/scene.splinecode"
          />
        </div>

        <div className="text-transparent border-t h-10 mt-20  dark:bg-[#0A0A0A] bg-white  rounded-t-2xl"></div>
      </div>
    </div>
  );
};
