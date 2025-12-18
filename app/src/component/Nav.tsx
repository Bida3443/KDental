// "use client";

// // import { link } from "fs";
// import Link from "next/link";

// import { motion } from "framer-motion";
// import React, {useState} from "react";

// import Image from "next/image";
// import Premium from "../../../public/Premium.png";
// // import { constants } from "buffer";

// export default function NavBar() {
  
//   const nav = [
//     {
//       svg: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 640 640"
//           className="w-4 fill-white"
//         >
//           {/* <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /> */}
//         </svg>
//       ),
//       text: "Contact",
//       link: "/contact",
//     },
//     {
//       svg: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 640 640"
//           className="w-4 fill-white"
//         >
//           {/* <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /> */}
//         </svg>
//       ),
//       text: "About Us",
//       link: "/about",
//     },
//     {
//       svg: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 640 640"
//           className="w-4 fill-white"
//         >
//           {/* <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /> */}
//         </svg>
//       ),
//       text: "Gallery",
//       link: "/gallery",
//     },
//     {
//       svg: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 640 640"
//           className="w-4 fill-white"
//         >
//           {/* <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /> */}
//         </svg>
//       ),
//       text: "Services",
//       link: "/service",
//     },
//   ];

//   return (
    
      
//     <motion.div
//       initial={{ x: 200, opacity: 0 }} // starts from left
//       animate={{ x: 0, opacity: 1 }} // slides into position
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="flex flex-row justify-between items-center w-[70%]  absolute top-15 left-1/2 transform -translate-x-1/2 z-50 text-center bg-blue-400 p-5 px-10 rounded-md"
//     >
//       <Link href="/" className="flex items-center">
//         <Image
//           src={Premium}
//           alt="Logo"
//           width={60}
//           height={60}
//           className="hover:scale-105 bg-white rounded-lg p-1 transition-transform cursor-pointer"
//         />
//       </Link>

//       <div className="flex flex-row justify-center items-center w-fit space-x-6">
//         {nav.map((nav, index) => (
//           <div
//             key={index}
//             className="flex flex-row items-center hover:text-gray-900 hover:scale-110"
//           >
//             {nav.svg}
//             <a className="text-2xl" href={nav.link} target="_blank">
//               {nav.text}
//             </a>  
//           </div>
          

//         ))}
        
//       </div>
//       <a
//         className="bg-white p-3 px-15 rounded-md text-blue-700 text-[20px] target: font-bold items-center transition-transform duration-300 hover:scale-105 hover:bg-blue-700 hover:text-white"
//         href="/book"
//       >
//         BOOK NOW
//       </a>
        
         
    

//     </motion.div>

    
//   );
// }

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Premium from "../../../public/Premium.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { text: "Contact", link: "/contact" },
    { text: "About Us", link: "/about" },
    { text: "Gallery", link: "/gallery" },
    { text: "Services", link: "/service" },
  ];

  return (
    <>
      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden fixed top-5 left-0 w-full z-50 flex justify-between items-center px-6">
        <Link href="/" className="flex items-center">
          <Image
            src={Premium}
            alt="Logo"
            width={50}
            height={50}
            className="bg-white rounded-lg p-1"
          />
        </Link>

        <div className="lg:hidden fixed top-5 right-5 z-50">
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white cursor-pointer text-3xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden fixed top-0 left-0 w-full h-screen bg-blue-400 z-40 flex flex-col items-center justify-center space-y-6 text-white"
        >
          {/* <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src={Premium}
              alt="Logo"
              width={70}
              height={70}
              className="bg-white  rounded-lg p-2"
            />
          </Link> */}

          {nav.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:text-black hover:scale-110 transition"
            >
              {item.text}
            </Link>
          ))}

          <a
            href="/book"
            onClick={() => setIsOpen(false)}
            className="bg-white p-3 px-10 rounded-md text-blue-700 text-[20px] font-bold transition-transform duration-300 hover:scale-105 hover:bg-blue-700 hover:text-white"
          >
            BOOK NOW
          </a>
        </motion.div>
      )}

      {/* ================= DESKTOP NAVBAR (UNCHANGED) ================= */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:flex flex-row justify-between items-center w-[70%] absolute top-15 left-1/2 transform -translate-x-1/2 z-50 text-center bg-blue-400 p-5 px-10 rounded-md"
      >
        
        <Link href="/" className="flex items-center">
          <Image
            src={Premium}
            alt="Logo"
            width={60}
            height={60}
            className="hover:scale-105 bg-white rounded-lg p-1 transition-transform cursor-pointer"
          />
        </Link>

        <div className="flex flex-row justify-center items-center w-fit space-x-6">
          {nav.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center hover:text-gray-900 hover:scale-110"
            >
              <a className="text-2xl" href={item.link}>
                {item.text}
              </a>
            </div>
          ))}
        </div>

        <a
          className="bg-white p-3 px-15 rounded-md text-blue-700 text-[20px] font-bold transition-transform duration-300 hover:scale-105 hover:bg-blue-700 hover:text-white"
          href="/book"
        >
          BOOK NOW
        </a>
      </motion.div>
    </>
  );
}

