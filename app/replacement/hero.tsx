"use client"

import { motion } from "framer-motion";

import Image from "next/image";
import Replacement from "../../public/Replacements.jpg";
// import NavBar from "../src/component/Nav";


export default function ReplacementHero() {
    return (
        <div>
            <div className=" flex flex-row relative">
            
                        <div className="w-full lg:h-[70vh] h-[40vh] relative">
                                            <Image
                                                                src={Replacement}
                                                                alt="Background"
                                                                fill
                                                                className="w-full h-full"
                                                                style={{objectFit:"cover"}}
                                                                // objectFit="cover"
                                                              />
                                     <div className="absolute w-full h-full bg-black opacity-70 z-20" />
                                       <div className="absolute inset-0 z-30 flex flex-col justify-center items-start text-white mt-10 px-4">
                                        <motion.div
                                                    initial={{ y: 80, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                        
                                        >
                                          <h1 className="lg:text-3xl text-[20px] font-bold mb-5 flex justify-center">Restore function and confidence <br /> by replacing missing teeth.


</h1>
                                 <a
                                 className="bg-blue-700 lg:p-3 p-2 lg:px-7 px-5 rounded-md text-white lg:text-[20px] text-[10px] font-bold items-center transition-all duration-300 ease-in-out
                                                hover:bg-white hover:text-blue-700 hover:scale-105 hover:shadow-lg"
                                     href="/book"
                                    >
                                      BOOK A CONSULTATION
                                      </a>

                                        </motion.div>

                              </div>
                                          </div>
                        </div>
        </div>

    );
}

