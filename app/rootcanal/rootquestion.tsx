"use client";

// import {motion} from "framer-motion"

import { useState } from "react";

const faqs = [
  {
    question: "When is root canal treatment necessary?",
    answer:
      "Root canal treatment is recommended when deep tooth decay, infection, or injury reaches the inner pulp of the tooth, causing pain, sensitivity, or swelling.",
  },
  {
    question: "Is root canal treatment painful?",
    answer:
      "Root canal treatment is performed under local anesthesia, so the procedure itself is not painful. Some mild discomfort afterward is normal and usually temporary.",
  },
  {
    question: "Can I eat normally after root canal treatment?",
    answer:
      "You can eat normally once the numbness wears off, but it is best to avoid hard or sticky foods until the treated tooth is fully restored.",
  },
  {
    question: "How long does root canal treatment take?",
    answer:
      "Most root canal treatments are completed in one or two visits, depending on the severity of the infection and the condition of the tooth.",
  },
  {
    question: "What happens during a root canal procedure?",
    answer:
      "During the procedure, the infected pulp is removed, the inside of the tooth is cleaned and disinfected, and the tooth is sealed to prevent further infection.",
  },
  {
    question: "How do I care for my tooth after root canal treatment?",
    answer:
      "Good oral hygiene, including brushing, flossing, and regular dental check-ups, helps protect the treated tooth and maintain long-term oral health.",
  },
  {
    question: "Will I need a crown after root canal treatment?",
    answer:
      "In many cases, a dental crown is recommended after root canal treatment to strengthen and protect the treated tooth from future damage.",
  },
  {
    question: "How much does root canal treatment cost in your clinic?",
    answer:
      "The cost of root canal treatment varies depending on the tooth involved and the complexity of the procedure, with prices ranging from affordable to more advanced treatment options.",
  },
];




export default function RootTherapy() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="px-0 sm:px-0 lg:px-0">
    <div className="w-full flex justify-center px-4 py-6 sm:p-10 bg-amber-50">
      <div className="bg-white p-4 sm:p-6 max-w-full rounded-lg shadow-lg w-full sm:max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-700">
          Root Canal Therapy Most Popular FAQs
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
