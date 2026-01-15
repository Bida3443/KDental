
"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhatsappChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <a
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all"
      >
        <Image 
        src="/whatsapp.png" 
        alt="WhatsApp"
        width={40}
        height={40}
        className=" cursor-pointer" />
        
      </a>

      {/* Popup Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 bg-white w-72 rounded-lg shadow-xl p-4 text-black animate-slide-up">
          <h3 className="font-semibold text-lg">Chat with Our Dentist</h3>
          <p className="text-sm text-gray-600 mt-1">
            Hi! 👋 How can we help you today?
          </p>

          <a
            href="https://wa.me/2347037813135?text=Hello%20Doctor,%20I%20need%20a%20consultation."
            target="_blank"
            className="block mt-4 bg-green-500 text-white text-center py-2 rounded-md font-semibold hover:bg-green-600 transition-all"
          >
            Start WhatsApp Chat
          </a>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 text-sm text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      )}

      {/* Animation (Tailwind custom) */}
      <style jsx>{`
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}


