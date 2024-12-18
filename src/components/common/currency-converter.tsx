"use client";
import { useEffect, useState } from "react";
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
  { code: "MNT", label: "Mongolian Tugrik", img: "/region/mn.png", symbol: "₮" },
  { code: "USD", label: "US Dollar", img: "/region/us.png", symbol: "$" },
  { code: "USDT", label: "Tether", img: "/region/t.png", symbol: "₮" },
  { code: "BTC", label: "Bitcoin", img: "/bitcoin.png", symbol: "₿" },
];

export const CurrencyConverter = () => {
  const [sourceAmount, setSourceAmount] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("MNT");
  const [targetCurrency, setTargetCurrency] = useState("USDT");

  const [conversionRate, setConversionRate] = useState(0.033); 
  const [convertedAmount, setConvertedAmount] = useState("");

  const selectedSourceCurrency = CURRENCIES.find(
    (c) => c.code === sourceCurrency
  );
  const selectedTargetCurrency = CURRENCIES.find(
    (c) => c.code === targetCurrency
  );

  useEffect(() => {
    if (!sourceAmount || isNaN(Number(sourceAmount))) {
      setConvertedAmount("");
      return;
    }
    const amount = (Number(sourceAmount) * conversionRate).toFixed(2);
    setConvertedAmount(amount);
  }, [sourceAmount, sourceCurrency, targetCurrency, conversionRate]);

  const handleSourceAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSourceAmount(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 relative">

      <Card className="rounded-3xl">
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
                onValueChange={setSourceCurrency}
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
                            className="h-full w-full rounded-full"
                            alt={currency.code}
                            width={100}
                            height={100}
                          />
                        </div>
                        <Typography className="font-bold dark:!text-white !text-black">
                          {currency.code}
                        </Typography>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="border w-fit px-4 py-2 rounded-lg">
                <Typography className="dark:!text-white !text-black">
                  {selectedSourceCurrency?.label || "Select a currency"}
                </Typography>
              </div>
            </div>

            <div className="relative flex items-center">
              <Input
                placeholder={`0${selectedSourceCurrency?.symbol || ""}`}
                type="number"
                value={sourceAmount}
                onChange={handleSourceAmountChange}
                className="!text-2xl pr-10 p-0 text-black text-end dark:text-white w-fit border-none bg-transparent focus:outline-none !placeholder-black dark:!placeholder-white"
              />
            </div>
          </div>

          <div className="border-t px-4 py-6 flex justify-between">
            <Typography className="dark:!text-white !text-black">
              Estimated Price:
            </Typography>
            <Typography className="dark:!text-white !text-black">
              1 {selectedTargetCurrency?.code} = 3522.05
            </Typography>
          </div>
        </div>
      </Card>


      <div className="absolute top-[45%] left-1/2  -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <div className="rounded-full bg-gradient-to-r from-[#462989] to-[#734CDB] p-4">
          <RepeatIcon width={37} height={37} />
        </div>
      </div>


      <Card className="rounded-3xl">
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
                onValueChange={setTargetCurrency}
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
                            className="h-full w-full rounded-full"
                            alt={currency.code}
                            width={100}
                            height={100}
                          />
                        </div>
                        <Typography className="font-bold dark:!text-white !text-black">
                          {currency.code}
                        </Typography>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="border w-fit px-4 py-2 rounded-lg">
                <Typography className="dark:!text-white !text-black">
                  {selectedTargetCurrency?.label || "Select a currency"}
                </Typography>
              </div>
            </div>

            <Typography className="!text-2xl !text-black dark:!text-white">
              {convertedAmount
                ? `${convertedAmount} ${selectedTargetCurrency?.symbol}`
                : `0 ${selectedTargetCurrency?.symbol}`}
            </Typography>
          </div>
        </div>
        <div className="border-t px-4 py-6 flex justify-between">
            <Typography className="dark:!text-white !text-black">
              Estimated Price:
            </Typography>
            <Typography className="dark:!text-white !text-black">
              1 {selectedTargetCurrency?.code} = 3522.05
            </Typography>
          </div>
      </Card>

      <Button className="py-7" variant={"outline"}>
        Buy {targetCurrency}
      </Button>
    </div>
  );
};
