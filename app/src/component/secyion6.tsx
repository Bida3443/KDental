"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.jpg",
];



export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
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


            <div className="relative w-full overflow-hidden py-6">
      {/* Slider container */}
      <div className="flex justify-center gap-4 transition-transform duration-700 ease-in-out">
        {visibleSlides.map((img, i) => (
          <div
            key={i}
            className="w-[30%] h-[350px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
          >
            <img
              src={img}
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
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>

        </div>
        

    )
}