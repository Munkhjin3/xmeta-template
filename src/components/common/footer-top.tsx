import React from 'react'
import { Container } from './container'
import { Button, Typography } from '../ui'
import Image from 'next/image'

export const FooterTop = () => {
  return (
    <div className='w-full'>
      <div className="w-full border-t"/>
    <Container containerClassName='!mt-0'>
        <div className='flex flex-col gap-10 border-x px-7 pt-10 items-center'>
            <div className='flex flex-col gap-4 items-center max-w-[500px]'>
                <Typography variant={'title'}>
                Trade Now
                </Typography>
                <Typography >
                Trade cryptocurrencies safely, quickly, and easily.
                </Typography>
                <Button className='w-full'>
                Яг одоо бүртгүүлэх
                </Button>
            </div>
            <Image src='/footer.png' alt='' width={0} height={0} sizes='100vw' className='w-full'/>
        </div>
    </Container>
    </div>
  )
}
