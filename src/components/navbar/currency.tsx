'use client'
import Image from "next/image";
import { Input, Typography } from "../ui";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Currency = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [searchQueryLanguage, setSearchQueryLanguage] = useState('');
  const [searchQueryCurrency, setSearchQueryCurrency] = useState('');

  const filteredLang = lang.filter(e => 
    e.title.toLowerCase().includes(searchQueryLanguage.toLowerCase())
  );

  const filteredCurrency = lang.filter(e => 
    e.currenc.toLowerCase().includes(searchQueryCurrency.toLowerCase())
  );

  return (
    <div className="flex">
      <div className="border-r p-3 flex flex-col gap-4">
        <Typography>Language</Typography>
        <Input 
          placeholder="Хайлт хийх" 
          value={searchQueryLanguage} 
          onChange={(e) => setSearchQueryLanguage(e.target.value)} 
        />
        <div className="flex flex-col gap-4">
          {filteredLang.map((e, i) => (
            <div
              key={i}
              className={cn(`flex gap-4 cursor-pointer`, selectedLanguage === e.title && 'text-primary font-bold')}
              onClick={() => setSelectedLanguage(e.title)}
            >
              <Image
                src={e.img}
                alt={e.title}
                width={24}
                height={24}
                className="rounded-full"
              />
              <p>{e.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 flex flex-col gap-4">
        <Typography>Currency</Typography>
        <Input 
          placeholder="Хайлт хийх" 
          value={searchQueryCurrency} 
          onChange={(e) => setSearchQueryCurrency(e.target.value)} 
        />
        <div className="flex flex-col gap-4">
          {filteredCurrency.map((e, i) => (
            <div
              key={i}
              className={cn(`flex gap-2 cursor-pointer`, selectedCurrency === e.currenc && 'text-primary font-bold')}
              onClick={() => setSelectedCurrency(e.currenc)}
            >
              <p>{e.currenc}</p> - <p>{e.symbol}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const lang = [
  {
    img: "/region-flag/US.png",
    title: "English",
    currenc: "USD",
    symbol: "$",
  },
  {
    img: "/region-flag/MN.png",
    title: "Mongolia",
    currenc: "MNT",
    symbol: "₮",
  },
];
