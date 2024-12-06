"use client";
import { useState } from "react";
import { Input, Typography } from "../ui";
import { cn } from "@/lib/utils";
import { Searchicon } from "@/icons";
import Image from "next/image";

export const Market = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data[0]?.futuresPro.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="w-[500px] flex-col flex gap-4 p-3">
      <Typography>Хайлт хийх</Typography>
      <div className="border flex items-center px-2 rounded-md">
        <Searchicon />
        <Input
          className="border-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={data[0].futuresPro[0].title}
        />
      </div>
      <Typography className="!font-bold">Futures Pro</Typography>
      {filteredData?.map((item, index) => (
        <div className="flex justify-between items-center" key={index}>
          <div className="flex gap-2 items-center">
            <Image
              src={item.img}
              className="size-6"
              alt=""
              sizes="100vw"
              width={0}
              height={0}
            />
            <Typography className="!text-black dark:!text-white">
              {item.title}
            </Typography>
          </div>
          <div className="flex gap-4">
            <Typography className="!text-black  dark:!text-white">
              {item.price}
            </Typography>
            <Typography
              className={cn(
                item.procent > 0
                  ? " text-green-600"
                  : "text-red-600 font-semibold"
              )}
            >
              {item.procent > 0 && "+"}
              {item.procent}%
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

const data = [
  {
    futuresPro: [
      {
        img: "/bitcoin.png",
        title: "BTCUSD",
        price: "67,000.60$",
        procent: +0.64,
      },
      {
        img: "/bitcoin.png",
        title: "ETHUSD",
        price: "4,000.30$",
        procent: +1.12,
      },
      {
        img: "/bitcoin.png",
        title: "BTCUSD",
        price: "67,000.60$",
        procent: -0.64,
      },
      {
        img: "/bitcoin.png",
        title: "LTCUSD",
        price: "150.25$",
        procent: -0.64,
      },
    ],
  },
];
