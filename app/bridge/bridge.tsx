"use client"

import {motion} from "framer-motion";

import Image from "next/image";
import Bridge from "../../public/Bridgee.jpg";


export default function BridgeSec() {
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
               className="lg:text-4xl text-[35px]  text-blue-700 font-bold border-b-2 border-b-blue-700">Dental Bridge</motion.h1>
        <p 
        //  initial={{ x: -100, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}

        className="flex leading-7 text-justify">
        At our dental clinic, we understand how missing or damaged teeth can affect your comfort, confidence, and ability to chew properly. That is why we offer professional dental bridges to replace missing teeth and restore the function and appearance of your smile. Dental bridges are designed to fill gaps left by missing teeth and help maintain proper bite alignment and facial structure. <br />

        Your dental bridge treatment begins with a thorough dental examination and digital X-rays so we can assess your oral health and determine the most suitable bridge option for your needs. Our dental clinic carefully prepares the supporting teeth and uses high-quality materials to create a strong, natural-looking bridge that blends seamlessly with your smile. <br />

        After your dental bridge is placed, our dental clinic will provide clear care instructions to help you maintain your restoration and protect your oral health. Follow-up visits may be scheduled to ensure proper fit and function, helping you enjoy a comfortable, confident, and complete smile every day.
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
        src={Bridge}
        width={600}
        height={700}   
        style={{objectFit:"cover"}}
         />
      </motion.div>
    </div>
  );
}
