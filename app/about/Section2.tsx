"use client";
import { useState } from "react";
import Image from "next/image";
import Pic3 from "../../public/Pic 3.jpg";

type TabKey = "who" | "strengths" | "promise" | "what";

export default function SectionTwo() {
  const [active, setActive] = useState<TabKey>("who");

  const tabs: { id: TabKey; label: string }[] = [
    { id: "who", label: "Who We Are" },
    { id: "strengths", label: "Our Strengths" },
    { id: "promise", label: "Our Promise" },
    { id: "what", label: "What We Do" },
  ];

  const content: Record<TabKey, React.ReactNode> = {
    who: (
      <>
        <h1 className="font-bold lg:text-2xl text-[15px] mb-4 text-blue-700">
          We Offer High Quality Services
        </h1>
        <p className="text-gray-700 lg:leading-10 leading-7 text-justify">
          Premium Smile Dental Clinic is built on a foundation of compassion,
          modern care, affordability, and honesty. Our team of skilled and
          experienced dentists is committed to creating an environment where
          every patient feels welcomed, understood, and genuinely cared for.
          From the moment you step through our doors, we aim to make your
          experience comfortable, relaxed, and reassuring. We believe that
          dental care should not feel intimidating, and we work hard to ensure
          you always feel safe, informed, and confident in the treatment you
          receive.
        </p>
      </>
    ),

    strengths: (
      <>
        <h1 className="font-bold lg:text-2xl text-[15px] mb-4 text-blue-700">
          What Makes Our Clinic Remarkably Different
        </h1>
        <p className="text-gray-700 lg:leading-10 leading-7 text-justify">
          What sets us apart is our ability to combine advanced dental
          technology with a warm and attentive team focused on your comfort. We
          use modern equipment that enhances safety, accuracy, and treatment
          results, while ensuring that every visit is smooth and stress-free.
          Our staff is trained to provide supportive and friendly care,
          answering your questions and guiding you through every step. We
          maintain affordable pricing without reducing the quality of our
          service, and we apply gentle, painless techniques that help make each
          visit a positive experience. These strengths reflect our ongoing
          commitment to excellence and patient satisfaction.

        </p>
      </>
    ),

    promise: (
      <>
        <h1 className="font-bold lg:text-2xl text-[15px] mb-4 text-blue-700">
          Our Commitment to Your Comfort and Confidence
        </h1>
        <p className="text-gray-700 lg:leading-10 leading-7 text-justify line-height: 4">
          At Premium Smile Dental Clinic, our promise is to treat you with the
          same level of care and respect we would offer our own family. We take
          time to listen, understand your concerns, and tailor treatments that
          suit your needs and lifestyle. We prioritize clear communication, so
          you always know what to expect and feel confident in your decisions.
          Our team is dedicated to creating a supportive atmosphere where your
          comfort, health, and happiness come first. Your smile is important to
          us, and we promise to put our best into every appointment to ensure
          you leave feeling satisfied and well-cared for.
        </p>
      </>
    ),
              
    what: (
      <>
        <h1 className="font-bold lg:text-2xl text-[15px] mb-4 text-blue-700">
          Comprehensive Dental Care for Every Smile
        </h1>
        <p className="text-gray-700 lg:leading-10 leading-7 text-justify space-y-4">
          We provide a complete range of dental services designed to support a
          healthy, confident, and beautiful smile. From teeth alignment and
          replacement of missing teeth to cosmetic and restorative treatments,
          our clinic offers solutions for both simple and complex dental needs.
          We also provide dependable general dental care for adults and
          children, ensuring that your oral health is always in good hands.
          Whether you need a quick routine check-up or a full smile
          transformation, we are here to deliver quality treatment, modern
          techniques, and sincere care that you can trust.
        </p>
      </>
    ),
  };
  return (
    <div className="bg-white px-4 py-6 md:px-8 lg:p-10 rounded-lg pt-15 ">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`pb-2 lg:text-[20px] flex flex-row text-[6px] ${
              active === tab.id
                ? "text-white bg-blue-700 px-4 py-2 rounded-md"
                : "text-blue-700 hover:text-white p-2 rounded-md hover:bg-blue-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-10 mt-8">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2">{content[active]}</div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={Pic3}
            width={650}
            height={450}
            alt="Dental Clinic Chair"
            className="rounded-lg w-full object-cover"
            objectFit="cover"
          />
        </div>
      </div>
    </div>

   
  );
}
