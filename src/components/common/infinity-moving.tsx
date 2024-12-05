'use client'
import { useEffect, useRef } from 'react';
import { Container } from './container'
import Image from 'next/image'
import { useTheme } from "next-themes";

export const InfinityMoving = () => {
  const { theme } = useTheme();

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
    const images = theme === 'dark' ? imgsblack : imgs;
  return (
    <Container className='flex flex-col gap-5'>
      <div className="w-full h-full flex overflow-hidden">
        <div ref={scrollRef} className="flex gap-10 w-full overflow-hidden ">
          {images.map((e, i) => (
            <Image key={i} src={e} alt="" className="w-auto" width={200} height={70} />
          ))}
          {images.map((e, i) => (
            <Image key={i + images.length} src={e} alt="" className="w-auto" width={200} height={70} />
          ))}
        </div>
      </div>
      <div className="w-full h-full flex overflow-hidden">
        <div ref={reverseScrollRef} className="flex gap-10 w-full overflow-hidden">
          {images.map((e, i) => (
            <Image key={i} src={e} alt="" className="w-auto" width={200} height={70} />
          ))}
          {images.map((e, i) => (
            <Image key={i + images.length} src={e} alt="" className="w-auto" width={200} height={70} />
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
const imgsblack = [
  '/companys/1-black.png',
  '/companys/2-black.png',
  '/companys/3-black.png',
  '/companys/4-black.png',
  '/companys/5-black.png'
]