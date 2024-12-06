"use client";
import { useState } from "react";
import { Card } from "../ui/card";
import { Button, Typography } from "../ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import Image from "next/image";
import { RepeatIcon } from "@/icons";

const CURRENCIES = [
  { code: "MNT", label: "Mongolian Tugrik", img: "/region/mn.png" },
  { code: "USD", label: "US Dollar", img: "/region/us.png" },
  { code: "USDT", label: "Tether", img: "/region/t.png" },
  { code: "BTC", label: "Bitcoin", img: "/bitcoin.png" },
];

export const CurrencyConverter = () => {
  const [sourceAmount, setSourceAmount] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("MNT");
  const [targetCurrency, setTargetCurrency] = useState("USDT");
  const [conversionRate, setConversionRate] = useState(0.033);
  const [convertedAmount, setConvertedAmount] = useState("");

  const handleSourceAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSourceAmount(value);

    if (!isNaN(Number(value))) {
      setConvertedAmount((Number(value) * conversionRate).toFixed(2));
    } else {
      setConvertedAmount("");
    }
  };

  const handleSourceCurrencyChange = (value: string) => {
    setSourceCurrency(value);
  };

  const handleTargetCurrencyChange = (value: string) => {
    setTargetCurrency(value);
  };

  return (
    <div className="flex flex-col gap-4 relative">
      <Card>
        <div className="p-4 border-b">
          <Typography className="text-lg font-medium dark:!text-white !text-black">
            Зарцуулах дүн
          </Typography>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between py-4 pl-4">
            <div className="flex w-full items-start flex-col gap-5">
              <Select
                value={sourceCurrency}
                onValueChange={handleSourceCurrencyChange}
              >
                <SelectTrigger className="w-fit border-none p-0">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {CURRENCIES.filter(
                    (currency) => currency.code !== targetCurrency
                  ).map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      <div className="flex items-center gap-2">
                        <div className="border rounded-lg p-1 h-8 w-8">
                          <Image
                            src={currency.img}
                            className="h-full w-full rounded-full "
                            alt={currency.img}
                            width={100}
                            height={100}
                          />
                        </div>
                        <Typography className="dark:!text-white !text-black">
                          {" "}
                          {sourceCurrency}
                        </Typography>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="border w-fit px-4 py-2 rounded-lg">
                <Typography className="dark:!text-white !text-black">
                  {CURRENCIES[0].label}
                </Typography>
              </div>
            </div>
            <div>
              <Input
                placeholder="0$"
                type="number"
                value={sourceAmount}
                onChange={handleSourceAmountChange}
                className="!text-2xl p-0 text-black text-end dark:text-white w-fit border-none bg-transparent focus:outline-none !placeholder-black dark:!placeholder-white"
              />
            </div>
          </div>
          <div className="border-t px-4 py-6 flex justify-between">
            <Typography className="dark:!text-white !text-black">
              Estimated Price:
            </Typography>
            <Typography className="dark:!text-white !text-black">
              1 USDT = 3522.05
            </Typography>
          </div>
        </div>
      </Card>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   flex justify-center items-center">
  <div className="rounded-full bg-gradient-to-r from-[#462989] to-[#734CDB] p-4 "><RepeatIcon width={37} height={37}/></div>
</div>
      <Card>
        <div className="p-4 border-b">
          <Typography className="text-lg font-medium dark:!text-white !text-black">
            Хүлээн авах дүн
          </Typography>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4">
            <div className="flex flex-col gap-4">
              <Select
                value={targetCurrency}
                onValueChange={handleTargetCurrencyChange}
              >
                <SelectTrigger className="w-fit border-none p-0 ">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {CURRENCIES.filter(
                    (currency) => currency.code !== sourceCurrency
                  ).map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      <div className="flex items-center gap-2">
                      <div className="border rounded-lg p-1 h-8 w-8">
                          <Image
                            src={currency.img}
                            className="h-full w-full rounded-full "
                            alt={currency.img}
                            width={100}
                            height={100}
                          />
                        </div>
                        <Typography className="dark:!text-white !text-black">
                          {" "}
                          {currency.label}
                        </Typography>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="border w-fit px-4 py-2 rounded-lg">
                <Typography className="dark:!text-white !text-black">
                  {targetCurrency}
                </Typography>
              </div>
            </div>
            <div>
              <Typography className="!text-2xl text-black dark:text-white">
                {convertedAmount || "0₮"}
              </Typography>
            </div>
          </div>
          <div className="border-t px-4 py-6 flex justify-between">
            <Typography className="dark:!text-white !text-black">
              Estimated Price:
            </Typography>
            <Typography className="dark:!text-white !text-black">
              1 USDT = 3522.05
            </Typography>
          </div>
        </div>
      </Card>
        <Button  className="py-7" variant={'outline'}>Buy USDT</Button>
    </div>
  );
};
