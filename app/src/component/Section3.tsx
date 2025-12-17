import Image from "next/image";

import carolina from "../../../public/caroline.jpg";

export default function SectionThree() {

//   const text = [
//   "Holistic Approach",
//   "Modern Equipment",
//   "Experienced Dentists",
//   "Affordable Care",        
//   "Comfortable Environment",
//   "Personalized Treatment",
//   "Emergency Services",
//   "Patient Satisfaction",
// ];

  const mark = [
    {
      
      text: "Holistic Approach"
    },
    {
      
      text: "Modern Equipment"
    },
    {
      
      text: "Experienced Dentists"
    },
    {
     
      text: "Affordable Care"
    },
    {
      
      text: "Comfortable Environment"
    },
    {
      
      text: "Personalized Treatment"
    },
    {
      
      text: "Emergency Services",
  
    },
    {
      
      text: "Patient Satisfaction",
  
    },
    
  ];

  return (
    <div className="relative flex flex-col justify-center h-screen w-full">
      <Image
        src={carolina}
        alt="Background"
        fill
        className="w-full h-full"
        objectFit="cover"
      />

      <div className="absolute w-full h-full bg-black opacity-90 z-20" />

      <div className="relative z-30">
        <h1 className="text-white text-4xl items-center text-center mt-5 mb-5 justify-center font-bold">
          Why Choose Us
        </h1>
      </div>
      <div className="flex flex-row z-40 justify-center space-x-70">
        <div className="flex flex-col justify-around text-justify items-start w-150">
          <h1 className="flex text-2xl mb-7 leading-10">
            At K Dental Clinic, we believe a healthy smile is more than just
            teeth, it is about confidence, comfort, and care. Choosing the right
            dentist is an important decision, and here is why patients in Ikeja
            and Ogba Lagos trust us.
          </h1>
          <h2 className="leading-10">
            Backed by years of professional experience, we deliver every service
            from simple cleaning to advanced procedures with skill and
            compassion. We also understand that many people feel anxious about
            dental visits, so we have created a calm, welcoming environment that
            prioritizes both comfort and safety, with strict hygiene standards.
            Most importantly, we are committed to making world-class dental care
            accessible by offering affordable services without compromising
            quality.
          </h2>
        </div>
        <div className="flex flex-col space-y-5 text-justify">
          {mark.map((item, index)=> (

         <div key={index}
         className="flex flex-row justify-items-start items-center space-x-4 text-justify"

          >
            <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 640"
        className="w-10 fill-blue-900"
        >
          
          <path d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 283 440.5 289.9 440C296.8 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z" />
        </svg>
            {item.text}
          </div>

          ))}
        </div>
      </div>
    </div>
  );
}
