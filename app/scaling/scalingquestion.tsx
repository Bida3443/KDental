"use client";

// import {motion} from "framer-motion"

import { useState } from "react";

const faqs = [
  {
    question: "How often should scaling and polishing be done?",
    answer:
      "Scaling and polishing are usually recommended every 6 months to maintain healthy teeth and gums, though some patients may need more frequent cleanings depending on their oral health.",
  },
  {
    question: "Is scaling and polishing painful?",
    answer:
      "The procedure is generally comfortable. Some patients may feel mild sensitivity during or after treatment, but this usually settles quickly.",
  },
  {
    question: "Can I eat normally after scaling and polishing?",
    answer:
      "Yes, you can eat normally after the procedure, although it is advisable to avoid very hot, cold, or staining foods for a short period if your teeth feel sensitive.",
  },
  {
    question: "How long does scaling and polishing take?",
    answer:
      "Most scaling and polishing appointments take between 30 and 60 minutes, depending on the amount of plaque and tartar buildup.",
  },
  {
    question: "What is the difference between scaling and polishing?",
    answer:
      "Scaling removes plaque and tartar buildup from the teeth and below the gum line, while polishing smooths the tooth surface to reduce future buildup and improve appearance.",
  },
  {
    question: "How can I maintain my results after scaling and polishing?",
    answer:
      "Good oral hygiene, including brushing twice daily, flossing regularly, and attending routine dental check-ups, helps maintain clean teeth and healthy gums.",
  },
  {
    question: "Does scaling and polishing whiten teeth?",
    answer:
      "Scaling and polishing remove surface stains and buildup, which can make teeth appear brighter, but it is not the same as professional teeth whitening.",
  },
  {
    question: "How much does scaling and polishing cost in Lagos?",
    answer:
      "The cost of scaling and polishing varies depending on the clinic and the condition of your teeth, with prices ranging from affordable to more advanced care options.",
  },
];



export default function ScalingPolish() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="px-0 sm:px-0 lg:px-0">
    <div className="w-full flex justify-center px-4 py-6 sm:p-10 bg-amber-50">
      <div className="bg-white p-4 sm:p-6 max-w-full rounded-lg shadow-lg w-full sm:max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-700">
          Scaling And Polishing Most Popular FAQs
        
        </h2>

        <div className="flex flex-">

        </div>


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
