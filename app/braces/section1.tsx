import {motion} from "framer-motion";

import Image from "next/image";
import Braces from "../../public/braces2.jpg";



export default function SectionOnnee() {
  return (
    <div
    className="flex flex-row gap-10 bg-white p-6 justify-center items-center pt-15 text-black">
      <motion.div  initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      className=" flex flex-col w-150 gap-6">
        <h1 className="text-4xl text-blue-700 font-bold border-b-2 border-b-blue-700">Premium Braces</h1>
        <p className="flex leading-7 text-justify">
          At our dental clinic, we understand how much a confident smile can
          change your life, and that is why we offer braces to help correct
          crooked teeth, gaps, and bite issues such as overbite, underbite, and
          crossbite. <br /> Our dental clinic will guide you through every step of the
          journey, making sure your teeth are properly aligned for better
          chewing, clearer speech, easier cleaning, and an overall healthier
          mouth. <br /> Our dental clinic will begin your braces treatment with a
          thorough dental examination and digital scans so we can understand
          your exact needs. After this, we wll help you choose the best type of
          braces for your lifestyle whether metal braces, ceramic braces, or
          clear aligners. Braces can be arranged as soon as your assessment is
          complete, and while children usually start between ages 7 and 14,
          adults can begin treatment at any time. <br />
          Our dental clinic will also explain your treatment timeline clearly. Most patients complete their
          braces in 6 to 12 months for mild alignment, 12 to 18 months for
          moderate cases, and 18 to 24 months or more for more complex
          corrections. Throughout your treatment, our clinic will schedule
          visits every 4 to 6 weeks to adjust your braces, track your progress,
          and ensure you remain comfortable. In the end, our dental clinic will
          help you achieve a healthier, more balanced, and more attractive
          smile one that you wll be proud to share every day.
        </p>
      </motion.div>
      <motion.div 
       initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        <Image
        alt=""
        src={Braces}
        width={600}
        height={700} 
        style={{objectFit:"cover"}}
                 />
      </motion.div>
    </div>
  );
}
