"use client";

// import {motion} from "framer-motion"

import { useState } from "react";

const implantFaqs = [
  {
    question: "What are dental implants?",
    answer:
      "Dental implants are permanent replacements for missing teeth. They consist of a titanium post placed in the jawbone, which acts as a strong foundation for a natural-looking crown.",
  },
  {
    question: "Who is a good candidate for dental implants?",
    answer:
      "Most adults with healthy gums and sufficient jawbone can receive dental implants. A thorough dental examination will determine if implants are suitable for your oral condition.",
  },
  {
    question: "Is the dental implant procedure painful?",
    answer:
      "The procedure is performed under local anesthesia, so pain is minimal. Some mild discomfort may occur after the surgery, but it is usually manageable with prescribed medication.",
  },
  {
    question: "How long does the dental implant process take?",
    answer:
      "The complete process typically takes between 3 to 6 months. This allows time for the implant to bond with the jawbone before the final crown is placed.",
  },
  {
    question: "How long do dental implants last?",
    answer:
      "With proper oral hygiene and regular dental check-ups, dental implants can last many years and often a lifetime.",
  },
  {
    question: "Can dental implants look and feel like natural teeth?",
    answer:
      "Yes, dental implants are designed to closely match the appearance and function of natural teeth, allowing you to eat, speak, and smile with confidence.",
  },
  {
    question: "How do I care for my dental implants?",
    answer:
      "Caring for implants is similar to caring for natural teeth. Regular brushing, flossing, and routine dental visits are essential to keep them in excellent condition.",
  },
  {
    question: "What is the cost of dental implants in Lagos?",
    answer:
      "The cost of dental implants varies depending on the number of implants needed and the treatment plan. Your dentist will provide a detailed estimate after an assessment.",
  },
];



export default function SectionnTTwo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="px-0 sm:px-0 lg:px-0">
    <div className="w-full flex justify-center px-4 py-6 sm:p-10 bg-amber-50">
      <div className="bg-white p-4 sm:p-6 max-w-full rounded-lg shadow-lg w-full sm:max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-700">
          Dental Implants Most Popular FAQs
        </h2>

        {implantFaqs.map((implant, index) => (
          <div key={index} className="mb-3">
            
            {/* <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full text-left px-4 py-3 rounded-md font-medium 
              ${
                openIndex === index
                  ? "bg-blue-700 text-white"
                  : "bg-blue-700 text-black"
              }`}
            >
              {faq.question}
            </button> */}

            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full flex justify-between items-center gap-3 px-4 py-3 rounded-md font-medium
    ${
      openIndex === index ? "bg-blue-700 text-black" : "bg-blue-500 text-white"
    }`}
            >
              <span className="text-left pr-3  break-words">{implant.question}</span>

              {/* Dropdown arrow */}
              <svg
                className={`w-5 h-5 transition-transform duration-300 cursor-pointer
      ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openIndex === index && (
              <div className="bg-white text-gray-700 p-4 rounded-md border border-blue-300 mt-1">
                {implant.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
