
import { Button } from "../ui"
import Image from "next/image"


export const DownloadDropdown = () => {
  return (
      <div className="w-full flex gap-4 px-4 items-center max-w-[450px] py-4 ">
        <Image src={'/navbar/qr.png'} className="w-32" sizes="100vw" alt="" width={0} height={0} />
        <div className="flex flex-col">
          <p className="text-lg">Point your camera at QR CODE TO GET XMETA App</p>
          <Button>More options</Button>
        </div>
      </div>
  )
}
