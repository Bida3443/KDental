"use client";

// import {motion} from "framer-motion"

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to replace missing teeth?",
    answer:
      "The timeline depends on the replacement option chosen. Some treatments can be completed in a few visits, while others may take several weeks to ensure proper healing and fit.",
  },
  {
    question: "Is replacing missing teeth painful?",
    answer:
      "Tooth replacement procedures are planned for comfort and performed with appropriate anesthesia. Some mild discomfort may occur afterward, but it is usually temporary.",
  },
  {
    question: "Can I eat normally after replacing missing teeth?",
    answer:
      "Yes, once the replacement is fully placed and adjusted, you can eat most foods comfortably. Your dentist may advise avoiding very hard or sticky foods initially.",
  },
  {
    question: "How often will I need check-ups after replacing missing teeth?",
    answer:
      "Regular dental check-ups every 6 months are recommended to ensure the replacement remains secure and your oral health stays in good condition.",
  },
  {
    question: "What options are available for replacing missing teeth?",
    answer:
      "Missing teeth can be replaced using dental implants, dental bridges, or removable dentures, depending on your oral condition and treatment goals.",
  },
  {
    question: "How do I care for my tooth replacement?",
    answer:
      "Good oral hygiene is essential. Brushing twice daily, flossing regularly, and attending routine dental visits help maintain your replacement and surrounding teeth.",
  },
  {
    question: "How long do tooth replacements last?",
    answer:
      "With proper care and regular dental visits, tooth replacement solutions can last many years. Your dentist will advise you on how to maintain long-term durability.",
  },
  {
    question: "How much does replacement of missing teeth cost at your clinic?",
    answer:
      "The cost depends on the type of replacement, materials used, and your specific dental needs. Prices range from affordable options to more advanced treatments.",
  },
];





export default function ReplaceQuestion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="px-0 sm:px-0 lg:px-0">
    <div className="w-full flex justify-center px-4 py-6 sm:p-10 bg-amber-50">
      <div className="bg-white p-4 sm:p-6 max-w-full rounded-lg shadow-lg w-full sm:max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-700">
          Replacement Of Missing Teeth FAQs
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
