"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import veneer from "../../public/veneer.jpg"


export default function VeneerSection() {
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
          Premium Veneers
        </motion.h1>
        <motion.p  
         initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        
        className="flex leading-7 text-justify">
        At our dental clinic, we understand how much a bright, well-aligned, and confident smile can improve your quality of life, which is why we offer dental veneers to enhance the appearance of your teeth with natural-looking, durable, and long-lasting results. Our dental clinic will guide you through every step of your veneer journey, helping you achieve a whiter smile, improved tooth shape, better symmetry, and an overall more attractive and healthy-looking mouth. <br />

        Your veneer treatment will begin with a thorough consultation and detailed dental examination, including digital scans and smile analysis, to understand your facial features, tooth structure, and cosmetic goals. After this assessment, we will help you choose the most suitable veneer option for your smile—whether porcelain or composite veneers, covering a single tooth or creating a full smile makeover. <br />

        Dental veneers are minimally invasive and can often be completed within a short treatment timeframe. Our dental clinic will clearly explain each stage of the process, which typically includes smile planning, gentle tooth preparation, and precise placement of custom-made veneers. Once completed, your veneers will blend seamlessly with your natural teeth, giving you a confident, radiant smile that looks and feels completely natural.
         

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
          src={veneer}
          width={600}
          height={900}
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}
