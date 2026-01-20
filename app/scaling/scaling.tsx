"use client"

import {motion} from "framer-motion";

import Image from "next/image";
import scaling from "../../public/scaling.jpg";
// import Scaling from "./page";


export default function ScalingSec() {
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
               className="lg:text-4xl text-[35px]  text-blue-700 font-bold border-b-2 border-b-blue-700">Scaling And Polishing </motion.h1>
        <p 
        //  initial={{ x: -100, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}

        className="flex leading-7 text-justify">
        At our dental clinic, we understand how plaque, tartar buildup, and stained teeth can affect your oral health and confidence. That is why we offer professional teeth scaling and polishing to remove harmful deposits, protect your gums, and restore the natural brightness of your smile. Regular scaling and polishing help prevent gum disease, tooth decay, and bad breath. <br />

        Your teeth scaling and polishing treatment begins with a thorough dental examination to assess your teeth and gums. Our dental clinic uses modern equipment to gently remove plaque and tartar from above and below the gum line, followed by polishing to smooth the teeth and reduce future buildup, ensuring a comfortable and refreshing experience. <br />

        After the procedure, our dental clinic will provide simple oral care advice to help maintain your results and keep your smile healthy. Regular scaling and polishing visits are recommended to support long-term oral health, leaving you with cleaner teeth, healthier gums, and a brighter, more confident smile.
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
        src={scaling}
        width={600}
        height={700}   
        style={{objectFit:"cover"}}
         />
      </motion.div>
    </div>
  );
}
