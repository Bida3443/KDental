"use client";
import Image from "next/image";

import {useState, useEffect} from "react";
import pic1 from "../../../public/Pic 1.jpg"
import pic3 from "../../../public/Pic 3.jpg"
import pic2 from "../../../public/Pic 2.jpg"
 
export default function BackgroundSlider() {

    const images = [
        {item: pic1},
        {item: pic2},
        {item: pic3}
        // "Pic 1.jpg",
        // "Pic 2.jpg",
        // "Pic 3.jpg",
    ];

    const [currentIndex, setCurrentIndex]= useState(0);

    useEffect (() =>{
        const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

   return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((img, index) => (
        <Image 
            key={index}
            src={img.item}
            alt=""
            className={`${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } absolute transition-opacity duration-1000 ease-in-out top-0 left-0 w-full`}
          fill
          objectFit="cover"
        />
        // <div
        //   key={index}
        //   className={``}
        //   style={{
        //     backgroundImage: `url(${img})`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //   }}
        // ></div>
      ))}

      {/* Content overlay (optional) */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">
          Prime Smile Dental Clinic
        </h1>
      </div>
    </div>
  );
}
    
    

