// "use client"

// import Image from 'next/image';
// // import braces from "../../public/braces2.jpg";
// import erfan from "../../public/erfan.jpg";
// import caroline from "../../public/caroline.jpg";
// import Pic from "../../public/Pic 6.jpg";
// import Pic1 from "../../public/Pic 1.jpg";
// import Pic2 from "../../public/Pic 2.jpg";


// import React, { useEffect } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
// import Braces from './page';




// export default function Caro() {
//     const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

//     return(
       
//    < div className="embla bg-blue-700" ref={emblaRef}>
//       <div className="embla__container ">
//         <div className="embla__slide bg-red-600">
//           <Image
//           src={erfan}
//           alt=""
//           width={500}
//           height={100}
//           style={{objectFit:"cover"}}
//           />

//         </div>
//         <div className="embla__slide">
//           <Image
//           src={caroline}
//           alt=""
//           width={500}
//           height={100}
//           style={{objectFit:"cover"}}
//           />
//         </div>
//         <div className="embla__slide">
//           <Image
//           src={Pic}
//           alt=""
//           width={500}
//           height={100}
//           style={{objectFit:"cover"}}
//           />
//         </div>
//         <div className="embla__slide">
//           <Image
//           src={Pic1}
//           alt=""
//           width={500}
//           height={100}
//           style={{objectFit:"cover"}}
//           />
//         </div>
//         <div className="embla__slide">
//           <Image
//           src={Pic2}
//           alt=""
//           width={500}
//           height={100}
//           style={{objectFit:"cover"}}
//           />
//         </div>
//       </div>
//     </div>
//   );
    
// }

"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
// import Image from "next/image"
// import pic from "../../public/Pic 1.jpg"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,  
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Caro() {
   const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="w-full flex justify-center bg-blue-300 h-full">
      < Carousel  plugins={[plugin.current]} onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset} className="w-full max-w-3xl ">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                
                
                <CardContent className=" flex aspect-square items-center justify-center p-6">
                 <span className="text-2xl font-semibold">{index + 1}</span>
  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
    </div>
  );
}
