"use client";
import { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Typography,
} from "../ui";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { AreaChartComponent } from "./area-chart";
import Image from "next/image";

export const MarketBig = () => {
  const [active, setActive] = useState("Hot Derivatives");
  const handleTabChange = (tabName: string) => {
    setActive(tabName);
  };
  return (

      <div className="border w-full overflow-x-auto md:col-span-2 rounded-md ">
        <div className={"border-b flex justify-between items-center  "}>
          <div >
            {["Hot Derivatives", "24 h Gainers"].map((tabName) => (
              <Button
                key={tabName}
                variant={"ghost"}
                className={cn(
                  active == tabName &&
                    "border-b rounded-none text-primary !font-semibold hover:!text-primary border-primary"
                ,'py-9 ')}
                onClick={() => handleTabChange(tabName)}
              >
                {tabName}
              </Button>
            ))}
          </div>
          <Button variant={"ghost"}>More</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              {header.map((e, i) => (
                <TableHead key={i}>{e}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((e, i) => (
              <TableRow key={i}>
                <TableCell className="flex gap-2 items-center">
                  {" "}
                  <Image src={e.icon} width={24} height={24} alt="" />
                  <Typography className="font-semibold !text-black">
                    {e.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography>{e.price}</Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    className={cn(
                      e.change > 0 ? " text-green-400" : "text-red-400 ",
                      "font-semibold"
                    )}
                  >
                    {e.change > 0 && "+"}
                    {e.change}
                  </Typography>
                </TableCell>
                <TableCell className="w-[200px]">
                  {" "}
                  <AreaChartComponent
                    data={e.chart}
                    color={e.absoluteGain >= 0 ? "#32D583" : "#F97066"}
                  />
                </TableCell>
                <TableCell>
                  {" "}
                  <Button variant={"outline"}>Trade</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
  );
};
const header = [
  "Trading Pairs",
  "Last Traded Price",
  "24H Change",
  "Chart",
  "Trade",
];
const data = [
  {
    icon: "/bitcoin.svg",
    title: "BTCUSD",
    price: "$28,457",
    change: +0.64,
    chart: [
      { time: "00:00", value: 28000 },
      { time: "01:00", value: 15000 },
      { time: "01:00", value: 30000 },
      { time: "01:00", value: 27000 },
      { time: "01:00", value: 16000 },
      { time: "02:00", value: 50000 },
    ],
    absoluteGain: +0.64,
  },
  {
    icon: "/eth.svg",
    title: "ETH",
    price: "$1,745",
    change: -0.32,
    chart: [
      { time: "00:00", value: 1760 },
      { time: "01:00", value: 1755 },
      { time: "02:00", value: 1745 },
    ],
    absoluteGain: -0.32,
  },
  {
    icon: "/bitcoin.svg",
    title: "BTCUSD",
    price: "$28,457",
    change: +0.64,
    chart: [
      { time: "00:00", value: 28000 },
      { time: "01:00", value: 15000 },
      { time: "01:00", value: 30000 },
      { time: "01:00", value: 27000 },
      { time: "01:00", value: 16000 },
      { time: "02:00", value: 50000 },
    ],
    absoluteGain: +0.64,
  },
  {
    icon: "/eth.svg",
    title: "ETH",
    price: "$1,745",
    change: -0.32,
    chart: [
      { time: "00:00", value: 1760 },
      { time: "01:00", value: 1755 },
      { time: "02:00", value: 1745 },
    ],
    absoluteGain: -0.32,
  },
  {
    icon: "/bitcoin.svg",
    title: "BTCUSD",
    price: "$28,457",
    change: +0.64,
    chart: [
      { time: "00:00", value: 28000 },
      { time: "01:00", value: 15000 },
      { time: "01:00", value: 30000 },
      { time: "01:00", value: 27000 },
      { time: "01:00", value: 16000 },
      { time: "02:00", value: 50000 },
    ],
    absoluteGain: +0.64,
  },
  {
    icon: "/eth.svg",
    title: "ETH",
    price: "$1,745",
    change: -0.32,
    chart: [
      { time: "00:00", value: 1760 },
      { time: "01:00", value: 1755 },
      { time: "02:00", value: 1745 },
    ],
    absoluteGain: -0.32,
  },
  {
    icon: "/eth.svg",
    title: "ETH",
    price: "$1,745",
    change: -0.32,
    chart: [
      { time: "00:00", value: 1760 },
      { time: "01:00", value: 1755 },
      { time: "02:00", value: 1745 },
    ],
    absoluteGain: -0.32,
  },
];
