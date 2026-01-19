"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import white from "../../public/Whitee.jpg";


export default function TeethWhitening() {
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
          Teeth Whitening
        </motion.h1>
        <motion.p  
         initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        
        className="flex leading-7 text-justify">
         A brighter, whiter smile can greatly enhance your confidence and overall appearance, which is why professional teeth whitening is one of the most effective cosmetic dental treatments available today. Advanced whitening solutions are designed to safely remove stubborn stains caused by food, beverages, smoking, and natural aging, helping your teeth look cleaner, fresher, and noticeably brighter. This treatment delivers visible results while maintaining the health and integrity of your natural teeth. <br />

        The teeth whitening process begins with a detailed dental assessment to ensure your teeth and gums are healthy and suitable for whitening. Based on the level of discoloration and your personal goals, the most appropriate whitening option will be recommended, whether that involves in-office whitening for fast, dramatic results or a customized take-home whitening plan for gradual improvement. Teeth whitening is a non-invasive procedure and is suitable for adults of all ages with good oral health. <br />

        Your whitening treatment plan will be explained clearly from start to finish. Most professional teeth whitening procedures follow a straightforward process: an initial evaluation, careful application of the whitening agent under controlled conditions, and noticeable improvement in tooth color. Depending on the method used, results can be achieved in a single visit or over a short period, allowing you to enjoy a brighter, more confident smile with minimal downtime. 
         

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
          src={white}
          width={600}
          height={900}
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}
