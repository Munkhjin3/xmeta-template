'use client'
import { Button, Input, Typography } from '../ui'
import { GiftIcon } from '@/icons'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export const Herocontent = () => {
  const { theme} = useTheme()
  const img = theme == 'dark' ? 'qr-white.svg' :'qr.svg'
  return (
    <div className="lg:max-w-[500px] flex flex-col   h-full  justify-between">
    <div className="flex gap-5 flex-col">
      <Typography
        variant={"title"}
        className=" font-semibold space-y-4  text-primary text-white "
      >
        Mongolia's #1
         cryptocurrency exchange
      </Typography>
      <Typography className='text-white'>
        Where every trade builds a better tomorrow
      </Typography>
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <GiftIcon  />
        <Typography className="text-white">
          Earn <span className="font-bold">Welcome Bonus</span> in 3
          simple steps
        </Typography>
      </div>
      <Input className="py-7" placeholder="Email / Phone" />
      <div  className="flex gap-2">
        <Button variant={'outline'} className="w-full py-7">Sign up for bonus</Button>
        <Button variant={"outline"} className="w-fit py-7">
          {" "}
          <Image src={img} width={32} height={32} alt="" />
        </Button>
        <Button variant={"outline"} className="w-fit py-7">
          <Image
            src={"/social/telegram-blue.svg"}
            width={32}
            height={32}
            alt=""
          />
        </Button>
      </div>
    </div>
  </div>
  )
}
