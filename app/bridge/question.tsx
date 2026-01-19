"use client";

// import {motion} from "framer-motion"

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to get a dental bridge?",
    answer:
      "The process usually takes two to three visits over a few weeks, depending on the type of dental bridge and your individual treatment needs.",
  },
  {
    question: "Is getting a dental bridge painful?",
    answer:
      "The procedure is generally comfortable and performed under local anesthesia. Some mild sensitivity may occur afterward but usually settles within a few days.",
  },
  {
    question: "Can I eat normally with a dental bridge?",
    answer:
      "Yes, once your bridge is fully placed and adjusted, you can eat most foods comfortably. It is advised to avoid very hard or sticky foods to protect the bridge.",
  },
  {
    question: "How often will I need check-ups after getting a dental bridge?",
    answer:
      "Regular dental check-ups are recommended every 6 months to ensure the bridge remains secure and your oral health stays in good condition.",
  },
  {
    question: "What types of dental bridges are available?",
    answer:
      "Dental bridges can be made from materials such as porcelain, ceramic, or metal, and may include traditional bridges, cantilever bridges, or implant-supported bridges.",
  },
  {
    question: "How do I care for my dental bridge?",
    answer:
      "Maintaining good oral hygiene is essential. Brush twice daily, floss carefully around the bridge, and attend regular dental visits to keep your bridge and surrounding teeth healthy.",
  },
  {
    question: "How long do dental bridges last?",
    answer:
      "With proper care and good oral hygiene, dental bridges can last many years. Your dentist will advise you on how to maintain them for long-term durability.",
  },
  {
    question: "How much do dental bridges typically cost in Lagos?",
    answer:
      "The cost of dental bridges depends on the type of bridge, materials used, and your specific dental needs. Prices range from affordable options to more advanced restorations.",
  },
];



export default function BridgeQuestion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="px-0 sm:px-0 lg:px-0">
    <div className="w-full flex justify-center px-4 py-6 sm:p-10 bg-amber-50">
      <div className="bg-white p-4 sm:p-6 max-w-full rounded-lg shadow-lg w-full sm:max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-700">
          Dental Bridge Most Popular FAQs
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
