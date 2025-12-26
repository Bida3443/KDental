"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long is the typical duration of wearing braces?",
    answer:
      "The treatment duration varies based on the complexity of your case and the chosen type of braces, typically ranging from 12 to 36 months. Your orthodontist will provide a personalized timeline tailored to your needs.",
  },
  {
    question: "Will wearing braces cause discomfort?",
    answer:
      "Braces may cause mild discomfort during adjustments, but it usually subsides within a few days.",
  },
  {
    question: "Can I still enjoy my favorite foods with braces?",
    answer:
      "Yes, but you may need to avoid overly hard or sticky foods to protect your brackets.",
  },
  {
    question: "How often do I need to visit the orthodontist during treatment?",
    answer:
      "Visits are typically every 4 to 6 weeks for adjustments and monitoring.",
  },
  {
    question: "What distinguishes Invisalign from traditional braces?",
    answer:
      "Invisalign uses clear removable aligners, while traditional braces use fixed metal or ceramic brackets.",
  },
  {
    question: "How do I maintain oral hygiene while wearing braces?",
    answer:
      "Brush and floss thoroughly, and use interdental brushes to clean around brackets.",
  },
  {
    question: "What happens after braces removal?",
    answer:
      "You'll receive retainers to maintain your new alignment and prevent shifting.",
  },
  {
    question: "What is the cost of braces in Lagos?",
    answer:
      "Costs vary based on the type of braces and clinic, usually ranging from moderate to premium pricing.",
  },
];

export default function SectionnTTwo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="px-4 sm:px-6 lg:px-0">
    <div className="w-full flex justify-center py-10 bg-amber-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
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
              className={`w-full flex justify-between items-center px-4 py-3 rounded-md font-medium
    ${
      openIndex === index ? "bg-blue-700 text-black" : "bg-blue-500 text-white"
    }`}
            >
              <span>{faq.question}</span>

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
