import React from 'react'
import { Container } from './container'
import { MarketBig } from './market-big'
import { MarkerSmall } from './market-small'

export const Market = () => {
  return (
    <Container>
        <div className='grid md:grid-cols-3 gap-3 w-full'>
        <MarkerSmall/>

            <MarketBig/>
        </div>
    </Container>
  )
}
