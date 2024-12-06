"use client";
import {
  Announcement,
  BigCard,
  CustomCard,
  FooterTop,
  Hero,
  Market,
} from "@/components";
import dynamic from "next/dynamic";

const InfinityMoving = dynamic(
  () =>
    import("@/components/common/infinity-moving").then(
      (components) => components.InfinityMoving
    ),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-14">
      <Hero />
      <Announcement />
      <Market />
      <div>
        <CustomCard />
        <BigCard />
      </div>
      <InfinityMoving />
      <FooterTop />
    </div>
  );
}
