"use client";

// import {motion} from "framer-motion"

import { useState } from "react";

const faqs = [
  {
    question: "How long does braces treatment usually last?",
    answer:
      "The length of treatment depends on how complex your dental alignment is and the type of braces used. In most cases, treatment can last anywhere from 12 to 36 months. Your orthodontist will outline a timeline that suits your specific condition.",
  },
  {
    question: "Is it normal to feel discomfort when wearing braces?",
    answer:
      "Some mild soreness or pressure may occur, especially after adjustments, but this typically fades within a few days as your mouth adapts.",
  },
  {
    question: "Can I continue eating my favorite foods with braces?",
    answer:
      "Yes, you can still enjoy most foods, but it is recommended to avoid very hard, sticky, or chewy items that could damage the braces.",
  },
  {
    question: "How frequently will I need orthodontic check-ups?",
    answer:
      "Most patients are scheduled for follow-up visits every 4 to 6 weeks to adjust the braces and monitor progress.",
  },
  {
    question: "What is the difference between Invisalign and regular braces?",
    answer:
      "Invisalign treatment uses clear, removable aligners, while traditional braces rely on fixed metal or ceramic brackets to straighten teeth.",
  },
  {
    question: "How can I keep my teeth clean while wearing braces?",
    answer:
      "Good oral hygiene involves brushing carefully after meals, flossing daily, and using special interdental brushes to clean around brackets and wires.",
  },
  {
    question: "What happens once my braces are removed?",
    answer:
      "After braces are taken off, you will be given retainers to help maintain your new smile and prevent teeth from shifting back.",
  },
  {
    question: "How much do braces typically cost in Lagos?",
    answer:
      "The cost of braces varies depending on the type of treatment and the clinic. Prices generally range from affordable options to more premium plans.",
  },
];


export default function SectionnTTwo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="px-0 sm:px-0 lg:px-0">
    <div className="w-full flex justify-center px-4 py-6 sm:p-10 bg-amber-50">
      <div className="bg-white p-4 sm:p-6 max-w-full rounded-lg shadow-lg w-full sm:max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-700">
          Cosmetics Braces Most Popular FAQs
        </h2>

        {faqs.map((faq, index) => (
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
              <span className="text-left pr-3  break-words">{faq.question}</span>

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
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
