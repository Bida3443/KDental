"use client"

import { motion } from "framer-motion";
// import NavBar from "../src/component/Nav";
import Image from "next/image";
import Implant from "../../public/implants.jpg";


export default function Hiero() {

   return (
          <div>
              <div className=" flex flex-row relative">
              
                          <div className="w-full lg:h-[70vh] h-[40vh] relative">
                                              <Image
                                                                  src={Implant}
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
                                            <h1 className="lg:text-3xl text-[20px] font-bold mb-5 flex justify-center">Replace Missing Teeth with <br/> Advanced Dental Implant Solutions</h1>
                                   <a
                                   className="bg-blue-700 lg:p-3 p-2 lg:px-7 px-5 rounded-md text-white lg:text-[20px] text-[10px] font-bold items-center transition-all duration-300 ease-in-out
                                                  hover:bg-white hover:text-blue-700 hover:scale-105 hover:shadow-lg"
                                       href="/implant"
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
//     return(
      
//         <div>
//                     <div className=" flex flex-row relative">
                      
//                                 <div className="w-full lg:h-[70vh] h-[40vh] relative">
//                                                     <Image
//                                                                         src={Implant}
//                                                                         alt="Background"
//                                                                         fill
//                                                                         className="w-full h-full"
//                                                                         style={{objectFit:"cover"}}
//                                                                         // objectFit="cover"
//                                                                       />
//                                              <div className="absolute w-full h-full bg-black opacity-70 z-20" />

//                                                <motion.div 
//                                                initial={{ y: 80, opacity: 0 }}
//   animate={{ y: 0, opacity: 1 }}
//   transition={{ duration: 0.9, ease: "easeOut" }}
//                                                className="absolute inset-0 z-30 flex flex-col justify-center items-start text-white mt-10 px-4">
//                                         <h1 className="text-3xl font-bold mb-3 flex justify-center">Replace Missing Teeth with <br/> Advanced Dental Implant Solutions</h1>
//                                          <a
//                                          className="bg-blue-700 p-3 px-7 rounded-md text-white text-[20px] target: font-bold items-center transition-all duration-300 ease-in-out
//                                                         hover:bg-white hover:text-blue-700 hover:scale-105 hover:shadow-lg"
//                                              href="/book"
//                                             >
//                                               BOOK A CONSULTATION
//                                               </a>
                                        
//                                       </motion.div>

//                                 </div>
//                                 </div>
//                 </div>
//     );
// }



