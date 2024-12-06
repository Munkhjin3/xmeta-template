"use client";
import { AnnouncementIcon, ArrowNarrowRight } from "@/icons";
import { Container } from "./container";
import { Typography } from "../ui";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/media-query";

export const Announcement = () => {
  const { isMobile } = useMediaQuery();
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerSlide = isMobile ? 2 : 4; 
  const getCurrentSlideImages = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return data.slice(startIndex, startIndex + itemsPerSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        (prevSlide + 1) % Math.ceil(data.length / itemsPerSlide)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, itemsPerSlide]);

  return (
    <Container>
      <div className="w-full flex flex-col items-center gap-6">
        <div className="flex items-center justify-start gap-3 w-full">
          <div className="flex items-center gap-3">
            <AnnouncementIcon />
            <Typography className="!text-black dark:!text-white font-semibold">IHC Trading competition</Typography>
            <Typography className="!text-sm">2024/10/28</Typography>
            <ArrowNarrowRight/>
          </div>
          <div className="bg-red-500/10 text-[#F04438] px-2 rounded-md border border-red-600">
            🔥 HOT
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-3">
          {getCurrentSlideImages().map((e, i) => (
            <Image
              key={i}
              src={e}
              alt=""
              className=" w-full "
              sizes="100vw"
              width={200}
              height={200}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(data.length / 4) }).map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-14 rounded-full cursor-pointer transition ${
                index === currentSlide ? "bg-primary" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </Container>
  );
};
const data = [
  "/annoucement/1.jpeg",
  "/annoucement/2.png",
  "/annoucement/3.png",
  "/annoucement/4.png",
  "/annoucement/2.png",
  "/annoucement/3.png",
  "/annoucement/1.jpeg",
  "/annoucement/4.png",
];
