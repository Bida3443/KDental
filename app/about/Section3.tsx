"use client"

import {motion} from "framer-motion";

import Image from "next/image";
import caroline from "../../public/Doctor2.jpg";

export default function SectionThree() {
  return (
    <div 
    className="w-full flex flex-col md:flex-row h-auto md:h-[480px]">
      {/* LEFT IMAGE */}
      <div 
      // initial={{ y: -100, opacity: 0  }}
      // whileInView={{ y: 0, opacity: 0 }}
      // transition={{ duration: 0.9, ease: "easeOut" }}
      // viewport={{ once:true }}
      className="w-full md:w-1/2 h-[300px] md:h-full relative flex justify-center">
        <Image
          src={caroline}
          alt="Dentist"
        //   fill
          className="bg-blue-700"
          objectFit="contain"
          width={800}
          height={500}

          // alt="Background"
          // className="rounded-xl"
          // objectFit="cover"
          // width={500}
          // height={800}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-10 flex flex-col justify-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2">
          Premium Smile Dental Care with a Personal Touch
        </h2>
        <p className="text-sm mb-8 opacity-90 leading-6">
          We offer friendly, patient-centered care designed to make every visit feel comfortable
        </p>

        {/* Feature Items */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex items-start gap-4 group">
            <div className="w-10 h-10 flex items-center justify-center border border-white/60 rotate-45 rounded-md cursor-pointer transition-transform duration-300 group-hover:rotate-[225deg] ">
              <div className="-rotate-45 transition-transform duration-300">✓</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Well Experienced Dentist
              </h3>
              <p className="text-sm opacity-90">
                We offer care from trained and experienced dentists
who focus on precision, comfort, and patient trust
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4 group">
            <div className="w-10 h-10 flex items-center justify-center border border-white/60 rotate-45 rounded-md cursor-pointer transition-transform duration-300 group-hover:rotate-[225deg]">
              <div className="-rotate-45 ]">
                ✓
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                High Technology Facilities
              </h3>
              <p className="text-sm opacity-90">
                Our clinic uses modern dental tools and equipment
to ensure safe, accurate, and efficient treatment
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4 group">
            <div className="w-10 h-10 flex items-center justify-center border border-white/60 rotate-45 rounded-md cursor-pointer transition-transform duration-300 group-hover:rotate-[225deg]">
              <div className="-rotate-45">✓</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Comfortable Clinics</h3>
              <p className="text-sm opacity-90">
               We create a calm and welcoming environment
designed to make every visit stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
