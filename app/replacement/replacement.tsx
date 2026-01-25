"use client"

import {motion} from "framer-motion";

import Image from "next/image";
import Replacement from "../../public/Replacement.jpg";


export default function ReplacementSec() {
  return (
    <div
    className="flex lg:flex-row flex-col gap-10 bg-white p-6 justify-center items-center pt-15 text-black">
      <div className="flex flex-col lg:w-2/4 w-full gap-6">
          <div
          >
             <motion.h1
               initial={{ x: -100, opacity: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="lg:text-4xl text-[20px]  text-blue-700 font-bold border-b-2 border-b-blue-700"> Replacement Of Missing Teeth</motion.h1>
        <p 
        //  initial={{ x: -100, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}

        className="flex leading-7 text-justify">
         Missing teeth can affect your ability to chew comfortably, speak clearly, and smile with confidence. Replacing missing teeth helps restore normal function, improve appearance, and protect your overall oral health. Professional tooth replacement solutions are designed to fill gaps, prevent surrounding teeth from shifting, and support proper bite alignment. <br />

         The tooth replacement process begins with a thorough dental examination and digital X-rays to assess your oral condition and determine the most suitable treatment option. Depending on your needs, replacement options may include dental bridges, dental implants, or removable dentures, all carefully planned to restore comfort and functionality. <br />

         After your tooth replacement treatment, clear care instructions will be provided to help maintain your restoration and support long-term oral health. Follow-up visits may be scheduled to ensure proper fit and comfort, allowing you to enjoy a complete, healthy, and confident smile every day. dghbbgy
        </p>
          </div>

      </div>
      
      <motion.div 

        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
       >

        <Image
        alt=""
        src={Replacement}
        width={600}
        height={700}   
        style={{objectFit:"cover"}}
         />
      </motion.div>
    </div>
  );
}
