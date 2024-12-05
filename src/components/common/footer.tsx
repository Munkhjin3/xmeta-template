import Image from "next/image";
import { Button, Input, Typography } from "../ui";
import Link from "next/link";
import { MailIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t z-10">
      <div className="flex justify-between flex-col lg:flex-row gap-2 px-4 sm:px-10 xl:px-28 pb-16 pt-11 bg-white dark:bg-[#0A0A0A]">
        <div className="flex flex-col gap-8 max-w-[600px]">
          <Image src={"/x-meta.png"} alt="" width={200} height={100} />
          <Typography>
            Монгол улс, Улаанбаатар хот Сүхбаатар дүүрэг, 1 дүгээр хороо
            Олимпийн гудамж, Аюуд тауэр, 603 тоот
          </Typography>
          <Typography>Утас: 72727227</Typography>
          <Typography>Имэйл: Support@x-meta.com</Typography>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {data.map((e, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <Typography className="dark:!text-white !text-black !font-semibold">
                {e.title}
              </Typography>
              <div key={i} className="flex flex-col gap-2">
                {e.sub.map((e, i) => (
                  <Link href={e.href} key={i}>
                    <Typography
                      key={i}
                      className="!text-[#475467] !text-base !font-normal"
                    >
                      {e.title}
                    </Typography>
                  </Link>
                ))}
                {i == 2 && (
                  <div className="flex flex-col gap-1">
                    <div className="border flex items-center px-2 rounded-lg ">
                      <MailIcon color="#667085" size={18} />
                      <Input
                        className="border-0 px-1"
                        placeholder="Имэйл хаягаа оруулна уу ...."
                      />
                    </div>
                    <Button className="w-full">Subscribe</Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t px-4 sm:px-10 xl:px-28 py-4">
        <div className="flex items-center max-md:gap-5 max-md:justify-center flex-wrap justify-between">
          <Typography>
            Зохиогчийн эрхтэй X-Meta 2024, Бүх эрх хуулиар хамгаалагдсан
          </Typography>
          <div className="flex items-center flex-col md:flex-row gap-2">
            <Typography className="max-md:hidden">Коммюнити:</Typography>
            <div className="flex gap-2">
              {data2.map((e, i) => (
                <Button key={i} className="p-2" variant={"outline"}>
                  <Image
                    src={e}
                    alt=""
                    className="size-7"
                    width={0}
                    height={0}
                  />
                </Button>
              ))}
            </div>
            <Button className="bg-[#3B86C6]">
              <Image
                src={"/social/telegram.svg"}
                alt=""
                className="size-7"
                width={0}
                height={0}
              />
              Join ou telegram ( 3,066 subscribers )
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
const data = [
  {
    title: "Тухай",
    sub: [
      {
        title: "X-Meta эвент",
        href: "",
      },
      {
        title: "Үйлчилгээний нөхцөл",
        href: "",
      },
      {
        title: "Нууцлалын бодлого",
        href: "",
      },
      {
        title: "Бидний тухай",
        href: "",
      },
      {
        title: "Тайлан",
        href: "",
      },
      {
        title: "Зөвлөмж, гарын авлага",
        href: "",
      },
    ],
  },
  {
    title: "Бүтээгдэхүүн",
    sub: [
      {
        title: "Бирж",
        href: "",
      },
      {
        title: "Зах зээл",
        href: "",
      },
      {
        title: "X-Meta Эвент",
        href: "",
      },
      {
        title: "Утасны апп - IOS",
        href: "",
      },
      {
        title: "Утасны апп - Android",
        href: "",
      },
      {
        title: "Дотоодын виртуал хөрөнгө",
        href: "",
      },
    ],
  },
  {
    title: "Тусламж",
    sub: [
      {
        title: "Түгээмэл асуултууд",
        href: "",
      },
      {
        title: "Хэрэглэгчийн үйчилгээний төвтэй холбогдох",
        href: "",
      },
      {
        title: "Тогмтол мэдээлэл авах бол : ",
        href: "",
      },
    ],
  },
];

const data2 = [
  "/social/facebook.svg",
  "/social/instagram.svg",
  "/social/twitter.svg",
  "/social/youtube.svg",
];
