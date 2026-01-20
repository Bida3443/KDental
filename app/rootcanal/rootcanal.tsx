"use client"

import {motion} from "framer-motion";

import Image from "next/image";
import scaling from "../../public/scaling.jpg";
// import Scaling from "./page";


export default function RootSec() {
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
               className="lg:text-4xl text-[30px]  text-blue-700 font-bold border-b-2 border-b-blue-700">Root Canal Theraphy</motion.h1>
        <p 
        //  initial={{ x: -100, opacity: 0 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}

        className="flex leading-7 text-justify">
        Root canal therapy is recommended when deep tooth decay, infection, or trauma reaches the inner pulp of the tooth, causing pain, sensitivity, swelling, or abscess formation. When the pulp becomes damaged, bacteria can spread within the tooth and to surrounding tissues if left untreated. Root canal therapy is designed to remove the infected tissue, eliminate bacteria, and preserve the natural tooth, helping to restore comfort and prevent further oral health complications. <br />

        The root canal process begins with a thorough dental examination and digital X-rays to assess the extent of the infection and plan the most effective treatment. During the procedure, the infected pulp is carefully removed, and the inside of the tooth is cleaned, disinfected, and sealed to protect it from future infection. Modern techniques and anesthesia are used to ensure the treatment is comfortable and as pain-free as possible. <br />

        After root canal therapy, the treated tooth is restored, often with a dental filling or crown, to strengthen it and return full function. Clear aftercare instructions will be provided to support proper healing and long-term success. With appropriate care, a tooth treated with root canal therapy can last for many years, allowing you to enjoy a healthy, pain-free smile with confidence.
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
