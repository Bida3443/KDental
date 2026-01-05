

"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import review from "../../public/review.jpg";

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
    Autoplay({ delay: 3500, stopOnInteraction: true })
  )

  return (
    <div className="w-full bg-blue-100 py-8">
      <div className="flex justify-center items-center text-center lg:text-[30px] md:text-[30px] text-[20px] pb-5 text-blue-700 font-bold">
        <h1>Google Reviwews</h1>
      </div>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="relative w-full max-w-6xl mx-auto px-4"
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 px-1"
            >
              <Card className="h-[300px] w-[240px] mx-auto rounded-2xl overflow-hidden relative">
                <CardContent className="absolute inset-0 p-4">
                  <Image
                    src={review}
                    alt="Review"
                    fill
                    // height={260}
                    
                    className="object-cover rounded-2xl"
                    sizes=""
                    priority
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute -left-6 z-50 bg-blue-500 shadow-md border" />
        <CarouselNext className="absolute -right-6 z-50 bg-blue-500  shadow-md border" />
      </Carousel>
    </div>
  




// export default function Caro() {
//    const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   )


//   return (
//     <div className="w-full flex overflow-x-hidden justify-center bg-blue-100 h-full py-3 md:py-6">
//       < Carousel  plugins={[plugin.current]}
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset} 
//         className="w-full max-w-3xl mx-auto px-3 md:px-4"
//         >
//       <CarouselContent className="flex">

//          {/* {review.map((items, index) => (

//                 ))} */}

//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem
//            key={index} 
//            className="basis-full md:basis-1/2 lg:basis-1/3 px-1 md:px-2">
//             <div className="p-1"
//             > 
//               <Card className="h-[220px] md:h-[260px] lg:h-[280px] overflow-hidden rounded-xl">
                
//                 <CardContent className=" relative h-full p-0">
              
//                   <Image
//                   src={review}
//                   alt=""
//                   className="object-cover"
//                   sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
//                   priority
              
                  
//                   />
               
               
//                  {/* <span className="text-lg md:text-2xl font-semibold">{index + 1}</span> */}

//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious/>
//       <CarouselNext />
//     </Carousel>
//     </div>
  );
}
