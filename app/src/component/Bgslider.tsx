"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import Pic1 from "../../../public/Pic 1.jpg";
import Pic3 from "../../../public/Pic 3.jpg";
import Pic2 from "../../../public/Pic 2.jpg";
import Pic6 from "../../../public/Pic 6.jpg";

export default function BackgroundSlider() {
  const images = [
    { item: Pic1 },
    { item: Pic2 },
    { item: Pic3 },
    { item: Pic6 },
    // "Pic 1.jpg",
    // "Pic 2.jpg",
    // "Pic 3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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
            index === currentIndex ? "opacity-40" : "opacity-0"
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
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col space-y-6">
        <h1 className="text-white text-5xl font-medium">
          Prime Smile Dental Clinic
        </h1>
        <h1 className=" text-4xl font-bold">Dental Clinic In Lagos</h1>
        <p className="text-2xl font-normal">
          "Bring Smiles To Life, Your Favourite Dentist Is Here"
        </p>

        <button className="bg-blue-600 px-10 py-4 font-bold hover:drop-shadow-lg transform transition duration-300 ease-in-out rounded-md hover:text-black flex flex-row justify-center items-center space-x-2">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 640 640"
           className="w-7 fill-white stroke-white">
            <path d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z" />
          </svg>
          Book An Appointment
        </button>
      </div>
    </div>
  );
}
