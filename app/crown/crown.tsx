"use client"

import {motion} from "framer-motion";

import Image from "next/image";
import Crown from "../../public/Crownn.jpg";


export default function CrownSec() {
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
               className="lg:text-4xl text-[35px]  text-blue-700 font-bold border-b-2 border-b-blue-700">Premium Crown</motion.h1>
        <p 
        //  initial={{ x: -100, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}

        className="flex leading-7 text-justify">
         Damaged, weakened, or worn teeth can affect both your comfort and confidence. That is why we offer professional dental crowns to protect compromised teeth, restore their strength, and improve their appearance. Dental crowns are commonly recommended for cracked teeth, large fillings, worn teeth, or teeth that have undergone root canal treatment. <br />

         Your dental crown treatment begins with a thorough dental examination and digital X-rays so we can assess the condition of the tooth and plan the most suitable restoration. Our dental clinic carefully prepares the tooth and uses high-quality materials to create a custom-made crown that fits comfortably and blends naturally with your smile. <br />

         After your dental crown is placed, our dental clinic will provide clear care instructions to help maintain your restoration and support long-term oral health. Follow-up visits may be scheduled to ensure proper fit and function, allowing you to enjoy a stronger, healthier, and more confident smile every day.
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
        src={Crown}
        width={600}
        height={700}   
        style={{objectFit:"cover"}}
         />
      </motion.div>
    </div>
  );
}
