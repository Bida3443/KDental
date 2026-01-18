"use client";

// import {motion} from "framer-motion"

import { useState } from "react";

const Extfaqs = [
 {
  question: "When is dental extraction necessary?",
  answer:
    "Dental extraction is recommended when a tooth is severely decayed, damaged, infected, impacted, or causing pain and cannot be saved with other treatments.",
},
{
  question: "Is dental extraction painful?",
  answer:
    "The procedure is performed under local anesthesia, so you should not feel pain during the extraction. Some mild discomfort after the procedure is normal and can be managed with medication.",
},
{
  question: "How long does a dental extraction take?",
  answer:
    "Most simple extractions take between 20 and 40 minutes, while surgical extractions may take longer depending on the complexity of the case.",
},
{
  question: "How long does it take to heal after a tooth extraction?",
  answer:
    "Initial healing usually takes a few days, while complete healing of the extraction site can take one to two weeks, depending on your oral health and aftercare.",
},
{
  question: "What should I avoid after a dental extraction?",
  answer:
    "After extraction, it is best to avoid hard foods, smoking, alcohol, and vigorous rinsing for the first few days to support proper healing.",
},
{
  question: "What can I eat after a tooth extraction?",
  answer:
    "Soft foods such as yogurt, soup, mashed foods, and smoothies are recommended for the first few days after extraction.",
},
{
  question: "Are follow-up visits required after dental extraction?",
  answer:
    "In some cases, a follow-up visit may be scheduled to check healing and ensure there are no complications.",
},
{
  question: "How much does dental extraction cost in Lagos?",
  answer:
    "The cost of dental extraction varies based on whether the procedure is simple or surgical and the condition of the tooth. Prices range from affordable to more advanced treatment options.",
},


];

export default function Exquetion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="px-0 sm:px-0 lg:px-0">
    <div className="w-full flex justify-center px-4 py-6 sm:p-10 bg-amber-50">
      <div className="bg-white p-4 sm:p-6 max-w-full rounded-lg shadow-lg w-full sm:max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-6 text-blue-700">
          Surgical Extraction Most Popular FAQs
        </h2>

        {Extfaqs.map((faq, index) => (
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
