import React from "react";
import { Container } from "./container";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button, Typography } from "../ui";

export const BigCard = () => {
  return (
    <Container>
      <Card className="bg-gradient-to-r w-full flex max-sm:justify-center pt-10 h-[600px] justify-between gap-10  dark:dark-card">
        <div className="md:pl-8 flex flex-col justify-center gap-6 py-10">
          <Typography className="text-white" variant={"title"}>
            Trade{" "}
            <span className="font-light">
              {" "}
              <br />
              Anywhere,Anytime
            </span>
          </Typography>
          <Typography className="text-white">
            Аппликейшн ашиглан мэдээлэлтэй ойр байгаарай
          </Typography>
          <div className="flex flex-col md:flex-row gap-2">
            {data.map((e, i) => (
              <Button key={i} className="bg-black border gap-2 rounded-lg py-6 items-center px-2 flex w-full ">
                <Image
                  src={e.src}
                  alt=""
                  width={30}
                  height={30}
                />
                <div className="flex flex-col">
                  <Typography className="text-white text-start !text-xs">{e.title}</Typography>
                  <Typography className="text-white font-bold">
                    {e.heading}
                  </Typography>
                </div>
              </Button>
            ))}
          </div>
        </div>{" "}
        <Image
          src={"/card/frame.png"}
          alt=""
          className="w-full max-sm:hidden object-cover "
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
