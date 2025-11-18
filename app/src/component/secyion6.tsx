"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import slider1 from "../../../public/slider1.jpg";
import slider2 from "../../../public/slider2.jpg";
import slider3 from "../../../public/slider3.jpg";
import slider4 from "../../../public/slider4.jpg";
import slider5 from "../../../public/slider5.jpg";
import slider6 from "../../../public/slider6.jpg";

// const images = [
//   "/images/slide1.jpg",
//   "/images/slide2.jpg",
//   "/images/slide3.jpg",
//   "/images/slide4.jpg",
//   "/images/slide5.jpg",
//   "/images/slide6.jpg",
// ];

export default function ImageSlider() {
  const images = [
    { item: slider1 },
    { item: slider2 },
    { item: slider3 },
    { item: slider4 },
    { item: slider5 },
    { item: slider6 },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  // Determine visible slides (3 at a time)
  const visibleSlides = [
    images[index % images.length],
    images[(index + 1) % images.length],
    images[(index + 2) % images.length],
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-[30px] justify-center items-center text-black font-bold">
        <h1 className="m-10">Explore the Elegance Of Our Dental Clinic</h1>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-10 items-center py-6">
        {/* Slider container */ }
        <div className="flex justify-center w-full gap-4 transition-transform duration-700 ease-in-out">
          {visibleSlides.map((img, i) => (
            <div
              key={i}
              className="w-[30%] h-[350px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <Image
                src={img.item}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>

// {/* <div data-hs-carousel='{
//   "loadingClasses": "opacity-0",
//   "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
//   "slidesQty": {
//     "xs": 1,
//     "lg": 3
//   }
// }' className="relative">
//   <div className="hs-carousel w-full overflow-hidden bg-blue-500 rounded-lg">
//     <div className="relative min-h-72 -mx-1">

//       <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700">
//         <div className="hs-carousel-slide px-1">
//           <div className="flex justify-center h-full bg-gray-100 p-6">
//             <span className="self-center text-sm text-gray-800 transition duration-700">First slide</span>
//           </div>
//         </div>
//         <div className="hs-carousel-slide px-1">
//           <div className="flex justify-center h-full bg-gray-200 p-6">
//             <span className="self-center text-sm text-gray-800 transition duration-700">Second slide</span>
//           </div>
//         </div>
//         <div className="hs-carousel-slide px-1">
//           <div className="flex justify-center h-full bg-gray-300 p-6">
//             <span className="self-center text-sm text-gray-800 transition duration-700">Third slide</span>
//           </div>
//         </div>
//         <div className="hs-carousel-slide px-1">
//           <div className="flex justify-center h-full bg-gray-100 p-6">
//             <span className="self-center text-sm text-gray-800 transition duration-700">Fourth slide</span>
//           </div>
//         </div>
//         <div className="hs-carousel-slide px-1">
//           <div className="flex justify-center h-full bg-gray-200 p-6">
//             <span className="self-center text-sm text-gray-800 transition duration-700">Fifth slide</span>
//           </div>
//         </div>
//         <div className="hs-carousel-slide px-1">
//           <div className="flex justify-center h-full bg-gray-300 p-6">
//             <span className="self-center text-sm text-gray-800 transition duration-700">Sixth slide</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-s-lg">
//     <span className="text-2xl" aria-hidden="true">
//       <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="m15 18-6-6 6-6"></path>
//       </svg>
//     </span>
//     <span className="sr-only">Previous</span>
//   </button>
//   <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg">
//     <span className="sr-only">Next</span>
//     <span className="text-2xl" aria-hidden="true">
//       <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="m9 18 6-6-6-6"></path>
//       </svg>
//     </span>
//   </button>

//   <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 gap-x-2"></div>
// </div>
//  */}
  );
}
