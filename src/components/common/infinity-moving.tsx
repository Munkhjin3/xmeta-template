'use client'
import { useEffect, useRef } from 'react';
import { Container } from './container'
import Image from 'next/image'

export const InfinityMoving = () => {
    const scrollRef = useRef(null);
    const reverseScrollRef = useRef(null);
  
    const infiniteScroll = (ref : React.RefObject<HTMLDivElement>, direction = 1) => {
      if (!ref.current) return;
      const container = ref.current;
  
      container.scrollLeft += direction; 
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2; 
      }
    };
  
    useEffect(() => {
      const scrollInterval = setInterval(() => infiniteScroll(scrollRef, 1), 16); 
      const reverseScrollInterval = setInterval(() => infiniteScroll(reverseScrollRef, -1), 16); 
  
      return () => {
        clearInterval(scrollInterval);
        clearInterval(reverseScrollInterval);
      };
    }, []);
  return (
    <Container className='flex flex-col gap-5'>
      <div className="w-full h-full flex overflow-hidden">
        <div ref={scrollRef} className="flex gap-10 w-full overflow-hidden ">
          {imgs.map((e, i) => (
            <Image key={i} src={e} alt="" className="w-auto" width={200} height={70} />
          ))}
          {imgs.map((e, i) => (
            <Image key={i + imgs.length} src={e} alt="" className="w-auto" width={200} height={70} />
          ))}
        </div>
      </div>
      <div className="w-full h-full flex overflow-hidden">
        <div ref={reverseScrollRef} className="flex gap-10 w-full overflow-hidden">
          {imgs.map((e, i) => (
            <Image key={i} src={e} alt="" className="w-auto" width={200} height={70} />
          ))}
          {imgs.map((e, i) => (
            <Image key={i + imgs.length} src={e} alt="" className="w-auto" width={200} height={70} />
          ))}
        </div>
      </div>
    </Container>

  )
}

const imgs = [
  '/companys/1.png',
  '/companys/2.png',
  '/companys/3.png',
  '/companys/4.png',
  '/companys/5.png'
]