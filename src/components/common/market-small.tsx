import Image from "next/image";
import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Typography } from "../ui";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const MarkerSmall = () => {
  const topGainers = data.filter((e) => e.change > 0);
  const topLosers = data.filter((e) => e.change < 0);

  return (
    <div className="border flex flex-col justify-between rounded-md">

      <div>
        <div className="border-b flex justify-between border-green-400 p-4">
          <div className="flex gap-2 items-center">
            <Typography className="!text-[#32D583] font-bold">
              Top Gainers
            </Typography>
            <TrendingUp color="#32D583" />
          </div>
          <Button variant={"ghost"} className="text-gray-400">
            More
          </Button>
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
            {topGainers.map((e, i) => (
              <TableRow key={i}>
                <TableCell className="flex gap-2 items-center">
                  <Image src={e.icon} width={24} height={24} alt={e.title} />
                  <Typography className="font-bold dark:!text-white !text-black">
                    {e.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className="font-bold dark:!text-white !text-black">{e.price}</Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    className={cn("text-green-400", "font-semibold")}
                  >
                    +{e.change}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <div className="border-b flex justify-between p-4 border-red-400">
          <div className="flex gap-2 items-center">
            <Typography className="!text-[#F97066] font-bold">
              Top Losers
            </Typography>
            <TrendingDown color="#F97066" />
          </div>
          <Button variant={"ghost"} className="text-gray-400">
            More
          </Button>
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
            {topLosers.map((e, i) => (
              <TableRow key={i}>
                <TableCell className="flex gap-2 items-center">
                  <Image src={e.icon} width={24} height={24} alt={e.title} />
                  <Typography className="font-bold dark:!text-white !text-black">
                    {e.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className="font-bold dark:!text-white !text-black">{e.price}</Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    className={cn("text-red-400", "font-semibold")}
                  >
                    {e.change}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const header = ["Trading Pairs", "Last Traded Price", "24H Change"];

const data = [
  {
    icon: "/bitcoin.svg",
    title: "BTCUSD",
    price: "$28,457",
    change: -0.64,
  },
  {
    icon: "/eth.svg",
    title: "ETH",
    price: "$1,745",
    change: -0.32,
  },
  {
    icon: "/ihc.png",
    title: "IHC",
    price: "$28,457",
    change: +0.64,
  },
  {
    icon: "/eth.svg",
    title: "ETH",
    price: "$1,745",
    change: +0.32,
  },
  {
    icon: "/bitcoin.svg",
    title: "BTCUSD",
    price: "$28,457",
    change: +0.64,
  },
  {
    icon: "/shib.svg",
    title: "SHIB",
    price: "$1,745",
    change: -0.32,
  },
];
