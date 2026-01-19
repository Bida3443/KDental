"use client";

// import {motion} from "framer-motion"

import { useState } from "react";


const WhiteFaqs = [
  {
    question: "What is teeth whitening?",
    answer:
      "Teeth whitening is a cosmetic dental treatment that lightens the color of your teeth by removing stains and discoloration caused by food, drinks, smoking, and aging.",
  },
  {
    question: "Who is a good candidate for teeth whitening?",
    answer:
      "Teeth whitening is suitable for adults with healthy teeth and gums who want to improve the brightness of their smile. A dental assessment is recommended before treatment.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional teeth whitening is safe when performed or supervised by a dental professional. The procedure is designed to protect your enamel and gums.",
  },
  {
    question: "Does teeth whitening cause pain or sensitivity?",
    answer:
      "Some patients may experience temporary tooth sensitivity during or after whitening, but this usually subsides within a short time.",
  },
  {
    question: "How long does a teeth whitening procedure take?",
    answer:
      "In-office teeth whitening typically takes about 45 to 90 minutes, while take-home whitening kits may be used over several days or weeks.",
  },
  {
    question: "How long do teeth whitening results last?",
    answer:
      "Results can last from several months to a few years, depending on oral hygiene habits, diet, and lifestyle choices such as smoking or drinking staining beverages.",
  },
  {
    question: "Will my teeth look natural after whitening?",
    answer:
      "Yes, teeth whitening enhances your natural tooth color, resulting in a brighter smile without looking artificial.",
  },
  {
    question: "How do I maintain my whitening results?",
    answer:
      "Maintaining results involves good oral hygiene, limiting staining foods and drinks, avoiding smoking, and attending regular dental check-ups.",
  },
];




export default function WhiteQuestion () {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (  
    <div className="px-0 sm:px-0 lg:px-0">
    <div className="w-full flex justify-center px-4 py-6 sm:p-10 bg-amber-50">
      <div className="bg-white p-4 sm:p-6 max-w-full rounded-lg shadow-lg w-full sm:max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-700">
          Teeth whitening Most Popular FAQs
        </h2>

        {WhiteFaqs.map((faq, index) => (
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
