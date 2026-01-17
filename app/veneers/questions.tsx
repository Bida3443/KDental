"use client";

// import {motion} from "framer-motion"

import { useState } from "react";


const veneerFaqs = [
  {
    question: "What are dental veneers?",
    answer:
      "Dental veneers are thin, custom-made shells designed to cover the front surface of teeth. They improve the appearance of teeth by enhancing color, shape, size, and overall alignment.",
  },
  {
    question: "Who can benefit from dental veneers?",
    answer:
      "Veneers are ideal for individuals with chipped, stained, uneven, or slightly misaligned teeth who want a brighter and more uniform smile.",
  },
  {
    question: "Are dental veneers permanent?",
    answer:
      "Veneers are considered a long-term solution, as a small amount of enamel is usually removed during placement. With proper care, they can last for many years.",
  },
  {
    question: "Does getting veneers hurt?",
    answer:
      "The procedure is generally comfortable. Some patients may experience mild sensitivity during or after treatment, but it usually subsides quickly.",
  },
  {
    question: "How long does the veneer procedure take?",
    answer:
      "The process typically requires two to three visits, including consultation, preparation, and final placement of the veneers.",
  },
  {
    question: "How long do dental veneers last?",
    answer:
      "With good oral hygiene and regular dental visits, veneers can last between 10 to 15 years or even longer.",
  },
  {
    question: "Can veneers look natural?",
    answer:
      "Yes, veneers are designed to closely match the natural appearance of your teeth, blending seamlessly with your smile.",
  },
  {
    question: "How do I care for my veneers?",
    answer:
      "Maintaining veneers involves brushing and flossing daily, avoiding excessive pressure on the teeth, and attending regular dental check-ups.",
  },
];



export default function Question () {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (  
    <div className="px-0 sm:px-0 lg:px-0">
    <div className="w-full flex justify-center px-4 py-6 sm:p-10 bg-amber-50">
      <div className="bg-white p-4 sm:p-6 max-w-full rounded-lg shadow-lg w-full sm:max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-700">
          Cosmetics Braces Most Popular FAQs
        </h2>

        {veneerFaqs.map((faq, index) => (
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
