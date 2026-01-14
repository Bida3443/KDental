// export default function EmblaCarousel () {
//  

"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import review1 from "../../public/review.jpg";
import review2 from "../../public/caroline.jpg";
import review3 from "../../public/Premium.png";
import review4 from "../../public/Doctor1.png";
import review5 from "../../public/caroline.jpg";
import review6 from "../../public/Before.png";

const slides = [
  { image: review1 },
  { image: review2 },
  { image: review3 },
  { image: review4 },
  { image: review5 },
  { image: review6 },
];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  // 👉 PREV
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // 👉 NEXT
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden">
      <Image
      src={review5}
      alt="Backgrond image"
      fill
      className="w-full h-full opacity-10 z-20"
      style={{objectFit:"cover"}}
      />
      <div className="absolute w-full h-full bg-blue-400 " />
      <div className="relative p-5">
        <h1 className="bg-red-600 flex text-black justify-center font-bold text-[30px]">Google Review</h1>
      </div>
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* Slides */}
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={slide.image}
                  alt="carousel image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PREV BUTTON */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-3 rounded-full hover:bg-black"
      >
        ‹
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-3 rounded-full hover:bg-black"
      >
        ›
      </button>
    </div>
  );
}
