import Image from 'next/image'
import { ScanLine } from 'lucide-react';
import { Typography } from '@/components/ui';

export const LoginQr = () => {
  return (
    <div className='w-full flex flex-col items-center gap-12 h-full'>
            <div className="w-full flex gap-5">
          <Image src={"/auth/qr.png"} alt="" width={200} height={200} />
          <Image src={"/auth/phone.png"} alt="" width={200} height={200} />

        </div>
        <div className='flex gap-3 items-center  justify-center'>
            <ScanLine color='#6D55D1'/>
            <Typography className='!text-xs text-start max-w-[300px]'>Tap the profile icon in the X-Meta app 
            and select the top right icon to scan the QR code</Typography>
        </div>
    </div>
  )
}
