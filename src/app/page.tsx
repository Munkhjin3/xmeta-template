import { BigCard, CustomCard, FooterTop, InfinityMoving, Market } from "@/components";



export default function Home() {
  return (
    <div className="w-full flex flex-col gap-20" >
      <Market/>
      <CustomCard/>
      <BigCard/>
      <InfinityMoving/>
      <FooterTop/>
    </div>
  );
}
