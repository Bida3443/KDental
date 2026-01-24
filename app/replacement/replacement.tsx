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
               className="lg:text-4xl text-[35px]  text-blue-700 font-bold border-b-2 border-b-blue-700">Premium Extraction</motion.h1>
        <p 
        //  initial={{ x: -100, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}

        className="flex leading-7 text-justify">
         At our dental clinic, we understand how dental pain, infection, or damaged teeth can affect your comfort and confidence. That is why we offer professional dental extraction to safely remove problematic teeth and restore your oral health. Dental extraction may be recommended for severely decayed, broken, impacted, or painful teeth that can no longer be saved. <br />

        Your dental extraction journey begins with a thorough dental examination and digital X-rays so we can clearly understand your condition and plan the safest treatment. Our dental clinic uses modern techniques and effective anesthesia to ensure a gentle and comfortable extraction experience for both children and adults. <br />
    
        After the extraction, our dental clinic will provide clear aftercare instructions to support proper healing and prevent complications. Follow-up visits may be scheduled to monitor recovery, ensuring you heal comfortably and return to a healthier, pain-free smile you can feel confident about every day.
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
