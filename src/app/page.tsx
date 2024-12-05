import {
  Announcement,
  BigCard,
  CustomCard,
  FooterTop,
  Hero,
  InfinityMoving,
  Market,
} from "@/components";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-14">
      <Hero/>
 
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
