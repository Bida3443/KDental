"use client"


import {motion} from "framer-motion";

import Image from "next/image";
import Doctor from "../../public/Doctor1.png";

export default function SectionOne() {
  return (
    <div className="flex flex-col justify-center bg-white gap-10 pt-10">
      <div className="flex lg:flex-row flex-col gap-10 lg:gap-20 justify-center items-center ">
        <div className="order-2 lg:order-1">
          <Image
            src={Doctor}
            alt="Background"
            className="rounded-lg w-full max-w-[420px] lg:max-w-[600px]
 object-cover"
            objectFit="cover"
            width={500}
            height={400}
          />
        </div>

        <div className="text-black w-full max-w-xl px-4 order-1 lg:order-2 m-5">
          <div className="">
            {" "}
            <motion.h1 
            initial= {{ y: 100, opacity: 0 }}
            animate= {{ y: 0, opacity: 1 }}
            transition={{duration: 0.9, ease: "easeOut"}}
            
            className="bg-blue-700 rounded-xl text-white w-fit font-bold px-6 py-3 mb-4 flex justify-center text-center">
              About Premium Smile Dental Clinic:
            </motion.h1>
            <motion.h2 
            initial= {{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{duration: 0.9, ease: "easeOut"}}
            viewport={{once:true}}

            className="leading-7 md:leading-8 text-justify mb-4">
              At Premium Smile Dental Clinic, we believe that a confident smile can change everything. Located in the heart of Ogba, Ikeja, Lagos, we are committed to providing modern, affordable, and compassionate dental care for individuals and families across Nigeria.
            </motion.h2> 
            <h1 className="font-bold text-blue-700 mb-3">Our mission: </h1>
            <motion.p 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.9, ease: "easeOut"}}
            viewport={{once:true}}

            className="leading-7 md:leading-8 text-justify">
              To ensure every patient leaves fully satisfied. Your satisfaction is our pride. Whether you are dealing with scattered teeth, missing teeth, or any other dental concern, our goal is to restore your smile with comfort, precision, and care.
            </motion.p>
          </div>
        </div>
      </div>

    </div>
  );
}
