import React from 'react'
import { Button, Input, Typography } from '../ui'
import { GiftIcon } from '@/icons'
import Image from 'next/image'

export const Herocontent = () => {
  return (
    <div className="md:max-w-[500px] flex flex-col   h-full  justify-between">
    <div className="flex gap-5 flex-col">
      <Typography
        variant={"title"}
        className=" font-semibold  text-primary dark:text-white "
      >
        Mongolia's #1 cryptocurrency exchange
      </Typography>
      <Typography>
        Where every trade builds a better tomorrow
      </Typography>
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <GiftIcon />
        <Typography className="text-white">
          Earn <span className="font-bold">Welcome Bonus</span> in 3
          simple steps
        </Typography>
      </div>
      <Input className="py-7" placeholder="Email / Phone" />
      <div className="flex gap-2">
        <Button className="w-full py-7">Sign up for bonus</Button>
        <Button variant={"outline"} className="w-fit py-7">
          {" "}
          <Image src={"/qr.svg"} width={32} height={32} alt="" />
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
