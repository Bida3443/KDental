"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import implant from "../../public/implant.jpg";


export default function SsectionOnnee() {
  return (
    <div className="flex lg:flex-row flex-col gap-10 bg-white p-6 justify-center items-center pt-15 text-black">
      <div className=" flex flex-col lg:w-2/4 w-full gap-6"
      
        >
        <motion.h1 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}

        className="text-4xl text-blue-700 font-bold border-b-2 border-b-blue-700">
          Premium Dental Implants
        </motion.h1>
        <motion.p 
         initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        
        className="flex leading-7 text-justify">
          At our dental clinic, we understand how much a complete and confident
          smile can improve your quality of life, and that is why we offer
          dental implants to replace missing teeth with strong, natural-looking,
          and long-lasting solutions. Our dental clinic will guide you through
          every step of your implant journey, ensuring you regain full chewing
          strength, clearer speech, a balanced facial structure, and an overall
          healthier mouth. Our dental clinic will begin your dental implant
          treatment with a thorough examination and digital scans to understand
          your bone structure and specific needs. <br /> After this assessment, we will
          help you choose the most suitable implant option for your smile,
          whether you need a single implant, multiple implants, or a full-mouth
          restoration. Dental implants can be placed as soon as your evaluation
          and preparations are complete, and adults of any age can benefit from
          this treatment as long as their bone and gum health are adequate. Our
          dental clinic will also explain your treatment timeline clearly. Most
          implant treatments follow a simple, well-planned process: implant
          placement, healing and bone integration which usually takes about 3 to
          6 months, and finally placing the natural-looking crown once
          everything is fully supported. <br /> Throughout this period, our clinic will
          schedule follow-up visits to monitor your healing, ensure comfort, and
          guide you on proper care so your implants remain strong and stable. In
          the end, our dental clinic will help you restore your smile with
          dental implants that look, feel, and function like natural
          teeth—giving you the confidence to eat, speak, and smile freely every
          day.
        </motion.p>
      </div>
      <motion.div
      initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        >
        <Image
          alt=""
          src={implant}
          width={600}
          height={900}
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}
