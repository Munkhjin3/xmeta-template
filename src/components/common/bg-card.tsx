import React from "react";
import { Container } from "./container";
import { Card } from "../ui/card";
import Image from "next/image";
import { Typography } from "../ui";

export const BigCard = () => {
  return (
    <Container>
      <Card className="bg-gradient-to-r w-full flex justify-between items-center">
        <div className="pl-8 flex flex-col gap-3">
          <Typography className="text-white" variant={"title"}>
            Trade{" "}
            <span className="font-normal">
              {" "}
              <br />
              Anywhere,Anytime
            </span>
          </Typography>
          <Typography className="text-white">
            Аппликейшн ашиглан мэдээлэлтэй ойр байгаарай
          </Typography>
          <div className="flex gap-2">
            {data.map((e, i) => (
              <div className="bg-black border gap-2 rounded-lg items-center p-2 px-3 flex w-fit">
                <Image
                  src={e.src}
                  alt=""
                  width={40}
                  height={40}
                />
                <div>
                  <Typography className="text-white !text-sm">{e.title}</Typography>
                  <Typography className="text-white font-bold">
                    {e.heading}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        <Image
          src={"/card/phones.png"}
          alt=""
          className="w-1/2 max-sm:hidden object-cover pr-2"
          sizes="100vw"
          width={0}
          height={0}
        />
      </Card>
    </Container>
  );
};
const data = [
  {
    title: "GET IT ON",
    heading: "Google Play",
    src: "/card/google.svg",
  },
  {
    title: "Download on the",
    heading: "App Store",
    src: "/card/apple.svg",
  },
  {
    title: "Available on",
    heading: "Galaxy Store",
    src: "/card/galaxy.svg",
  },
];
