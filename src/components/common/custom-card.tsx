import { Card } from "../ui/card";
import {
  ArrowRight,
  CreditCard,
  Percent,
  ShieldPlus,
  Headphones,
  MoveRight,
} from "lucide-react";
import { Container } from "./container";
import { Typography } from "../ui";
import Image from "next/image";
import Link from "next/link";
import { cloneElement } from "react";
export const CustomCard = () => {
  return (
    <Container>
      <Typography variant={"heading2"} className="!text-start w-full">
        Биднийг сонгох шалтгаан
      </Typography>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {data.map((e, i) => (
          <div className="w-full group" key={i}>
            <Card
              className="relative  max-md:flex-col overflow-hidden max-md:items-center md:h-[350px] rounded-2xl w-full flex  bg-gradient-to-r from-[#734CDB] to-[#2F176E] dark:dark-little-card"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2F176E] to-[#734CDB] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10"></div>
              <div className="relative z-20 flex flex-col justify-between gap-6 pl-8 pt-8 pb-6">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-6 items-start">
                    <Typography
                      variant={"heading2"}
                      className="!text-white  text-2xl lg:text-3xl font-semibold"
                    >
                      {e.title}
                    </Typography>
                    <div className="border rounded-lg p-2 group-hover:bg-white bg-white/10 transition-colors">
                      {cloneElement(e.icon, {
                        className:
                          "text-white group-hover:text-black transition-colors",
                        size: 20
                      })}
                    </div>
                  </div>
                  <Typography className="!text-white text-lg lg:text-xl font-light">
                    {e.desc}
                  </Typography>
                </div>
                <Link
                  href={""}
                  className="border bg-transparent hover:bg-white/60 w-fit p-2 relative inline-flex items-center justify-start overflow-hidden rounded-lg group-hover:bg-white transition-all duration-500 ease-in-out group-hover:pl-16"
                >
                  <div className="absolute flex gap-2 px-2 opacity-0 group-hover:opacity-100 left-0 -translate-x-12 duration-200 text-white group-hover:text-black ease-out group-hover:translate-x-0">
                    Дэлгэрэнгүй
                    <MoveRight className="group-hover:-rotate-45 text-black transition-all duration-500" />
                  </div>
                  <ArrowRight className="group-hover:-rotate-45 group-hover:opacity-0 group-hover:ml-12 text-white group-hover:text-black transition-all duration-500" />
                </Link>
              </div>
              <Image
                src={e.img}
                alt=""
                className="relative z-10 w-[300px] md:w-1/2 h-full group-hover:scale-110 transition-all duration-500 object-cover"
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
    icon: <CreditCard />,
    img: "/card/phones.png",
  },
  {
    title: "Хамгийн бага Шимтгэл ",
    desc: "X-Meta биржийг ашиглан хамгийн бага буюу 0.1%-ийн шимтгэлтэйгээр арилжаарай.",
    icon: <Percent />,
    img: "/card/phone.png",
  },
  {
    title: "24/7 Хэрэглэгчийн Туслах",
    desc: "Бид хэрэглэгчдийнхээ аюулгүй байдлыг дээд зэргээр хангаж хэрэглэгч болгоны хөрөнгийг Binance SAFU сангаар хамгаалдаг.",
    icon: <Headphones />,
    img: "/card/mac.png",
  },
  {
    title: "Аюулгүй байдал",
    desc: "Хүссэн үедээ хэрэглэгчийн туслахтай холбогдон асуудлаа шийдвэрлүүлээрэй.",
    icon: <ShieldPlus />,
    img: "/card/screen.png",
  },
];
