"use client";

// import {motion} from "framer-motion"

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to get a dental crown?",
    answer:
      "Getting a dental crown usually takes one to two visits, depending on the type of crown and the treatment method used.",
  },
  {
    question: "Is getting a dental crown painful?",
    answer:
      "The procedure is generally comfortable and performed under local anesthesia. Some mild sensitivity may occur afterward but usually settles within a few days.",
  },
  {
    question: "Can I eat normally with a dental crown?",
    answer:
      "Yes, once your crown is properly placed and adjusted, you can eat most foods comfortably. It is advised to avoid very hard or sticky foods to protect the crown.",
  },
  {
    question: "How often will I need check-ups after getting a dental crown?",
    answer:
      "Regular dental check-ups every 6 months are recommended to ensure the crown remains secure and your overall oral health stays in good condition.",
  },
  {
    question: "What types of dental crowns are available?",
    answer:
      "Dental crowns can be made from materials such as porcelain, ceramic, metal, or zirconia, depending on your dental needs and aesthetic preferences.",
  },
  {
    question: "How do I care for my dental crown?",
    answer:
      "Maintaining good oral hygiene is essential. Brush twice daily, floss regularly, and attend routine dental visits to keep your crown and surrounding teeth healthy.",
  },
  {
    question: "How long do dental crowns last?",
    answer:
      "With proper care and good oral hygiene, dental crowns can last many years. Your dentist will guide you on how to maintain them for long-term durability.",
  },
  {
    question: "How much do dental crowns typically cost in Your clinic?",
    answer:
      "The cost of dental crowns depends on the type of crown, materials used, and your specific dental needs. Prices range from affordable options to more advanced restorations.",
  },
];




export default function CrownQuestion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="px-0 sm:px-0 lg:px-0">
    <div className="w-full flex justify-center px-4 py-6 sm:p-10 bg-amber-50">
      <div className="bg-white p-4 sm:p-6 max-w-full rounded-lg shadow-lg w-full sm:max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-700">
          Dental Crown Most Popular FAQs
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
