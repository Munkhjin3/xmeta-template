import { Card } from "../ui/card";
import {
  ArrowRight,
  CreditCard,
  Percent,
  ShieldPlus,
  Headphones,
  ArrowRightIcon,
} from "lucide-react";
import { Container } from "./container";
import { Typography } from "../ui";
import Image from "next/image";
import Link from "next/link";
import { cloneElement } from "react";
import { cn } from "@/lib/utils";

export const CustomCard = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-3">
        {data.map((e, i) => (
          <div className="w-full group" key={i}>
            <Card
              className="relative overflow-hidden w-full h-full flex max-h-[300px] bg-gradient-to-r from-[#734CDB] to-[#2F176E]"
              key={i}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2F176E] to-[#734CDB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>
              <div className="relative z-20 flex flex-col justify-between gap-5 pl-5 pt-5 pb-4">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-4 items-center">
                    <Typography variant={"heading3"} className="!text-white">
                      {e.title}
                    </Typography>
                    <div className="border rounded-lg p-2 group-hover:bg-white bg-white/10 transition-colors">
                      {cloneElement(e.icon, {
                        className:
                          "text-white group-hover:text-black transition-colors",
                      })}
                    </div>
                  </div>
                  <Typography className="!text-white">{e.desc}</Typography>
                </div>
                <Link
                  href={""}
                  className="border flex bg-transparent hover:bg-white/60 rounded-lg w-fit transition-all duration-300 p-2"
                >
                  <p className="hidden group-hover:block text-white">
                    Дэлгэрэнгүй
                  </p>
                  <ArrowRight
                    className="group-hover:-rotate-45 transition-all duration-100"
                    color="white"
                  />
                </Link>
              </div>
              <Image
                src={e.img}
                alt=""
                className="relative z-10 w-1/2 max-sm:hidden group-hover:scale-125 transition-all duration-300	 object-cover pr-2"
                sizes="100vw"
                width={0}
                height={0}
              />
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
};
const data = [
  {
    title: "Крипто Интеграци",
    desc: "Банкны данснаас төгрөгийн орлого хийх үед автоматаар USDT буюу Tether болон хувирч, таны X-Meta дахь хэтэвчинд ороx болно",
    icon: <CreditCard size={20} />,
    img: "/card/phones.png",
  },
  {
    title: "Хамгийн бага Шимтгэл ",
    desc: "X-Meta биржийг ашиглан хамгийн бага буюу 0.1%-ийн шимтгэлтэйгээр арилжаарай.",
    icon: <Percent size={20} />,
    img: "/card/phone.png",
  },
  {
    title: "24/7 Хэрэглэгчийн Туслах",
    desc: "Бид хэрэглэгчдийнхээ аюулгүй байдлыг дээд зэргээр хангаж хэрэглэгч болгоны хөрөнгийг Binance SAFU сангаар хамгаалдаг.",
    icon: <Headphones size={20} />,
    img: "/card/mac.png",
  },
  {
    title: "24/7 Хэрэглэгчийн Туслах",
    desc: "Хүссэн үедээ хэрэглэгчийн туслахтай холбогдон асуудлаа шийдвэрлүүлээрэй.",
    icon: <ShieldPlus size={20} />,
    img: "/card/screen.png",
  },
];
