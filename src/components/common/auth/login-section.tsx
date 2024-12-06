import { Typography } from "@/components/ui";
import Image from "next/image";

export const LoginSecion = () => {
  return (
    <div className="w-full max-md:hidden flex flex-col gap-5 items-center">
      <div className="max-w-[614px] flex flex-col gap-28">
        <div className="w-full flex-col flex gap-3">
          <Typography variant={"heading2"}>Trade with confidence</Typography>
          <Typography>
            Your funds are always backed 1:1 on X-meta with our regularly
            published audits on our Proof of Reserves
          </Typography>
        </div>
        <div className="w-full">
          <Image src={"/auth/image.png"} alt="" width={754} height={542} />
        </div>
      </div>
    </div>
  );
};
