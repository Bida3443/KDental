"use client"

import {motion} from "framer-motion";

import Image from "next/image";
import Extraction from "../../public/Extractionn.jpg";


export default function ExtractionSec() {
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
               className="text-4xl text-blue-700 font-bold border-b-2 border-b-blue-700">Premium Extraction</motion.h1>
        <p 
        //  initial={{ x: -100, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}

        className="flex leading-7 text-justify">
         At our dental clinic, we understand how much dental pain or discomfort can affect your daily life, which is why we offer professional dental extraction to safely remove problematic teeth and restore your oral health. Dental extraction may be necessary for severely decayed teeth, damaged teeth, impacted teeth, or teeth that are causing pain, infection, or crowding. <br />

         Our dental clinic will guide you through every step of the extraction process, ensuring your comfort and safety at all times. Removing a troublesome tooth can help relieve pain, prevent infection from spreading, improve oral function, and protect the health of surrounding teeth and gums. <br />

         Your dental extraction journey will begin with a thorough dental examination and digital X-rays so we can clearly assess the condition of the tooth and determine the most appropriate treatment approach. After this assessment, our dental clinic will explain whether a simple extraction or a surgical extraction is required and answer all your questions before treatment begins. <br />

         Dental extraction can be performed for both children and adults when necessary, and the procedure is carefully planned to minimize discomfort. Our clinic uses modern techniques and effective anesthesia to ensure a smooth and gentle experience. <br />

         After the extraction, our dental clinic will provide clear aftercare instructions to support proper healing and reduce the risk of complications. Follow-up visits may be scheduled to monitor recovery and ensure your mouth is healing well. In the end, our dental clinic aims to restore your comfort, protect your oral health, and help you maintain a healthier, pain-free smile you can feel confident about every day.
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
        src={Extraction}
        width={600}
        height={700}   
        style={{objectFit:"cover"}}
         />
      </motion.div>
    </div>
  );
}
