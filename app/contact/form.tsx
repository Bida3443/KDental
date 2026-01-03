"use client";

import { useState } from "react";

import {motion} from "framer-motion";

export default function ContactForm() {


const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    time: "As Soon As Possible",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

  try{
    const res = await fetch('/api/contact', {
      method: 'POST',
       headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify ({
        name: form.name,
        phone: form.phone,
        email: form.email,
        time: form.time,
        notes: form.notes,

      }),
     
    });
    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "something went wrong");
      return;
    }

  alert("Message sent successfully!");
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send message");
  } finally {
    setIsLoading(false); // API request ends
  }
};
    
  return (

    <div className="bg-white px-4 py-10">
      <div className="w-full max-w-4xl mx-auto bg-blue-700 text-white rounded-2xl  px-5 py-8 sm:px-8 lg:p-10 ">
      <h1 
      // initial={{x: 100, opacity: 1}}
      // whileInView={{x: 20, opacity: 1}}
      // transition={{duration: 0.9, ease: "easeOut"}}
      className="text-center lg:text-3xl text-[25px] font-bold mb-8">Send us a Message</h1>

      <form
      // initial={{y: 40, opacity: 1}}
      // whileInView={{y: 40, opacity: 1}}
      // transition={{duration: 0.9, ease: "easeOut"}}
      
      onSubmit={handleSubmit}  className="space-y-6">
        {/* Grid for 2-column fields */}
        <div className="flex lg:flex-row flex-col lg:gap-40 gap-10">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className=" max-w-4xl p-3 lg:w-6/4 w-full bg-white rounded-lg  text-black outline-none"
              onChange={handleChange}
              value={form.name}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-sm font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className=" p-3 lg:w-6/4 w-full bg-white rounded-lg text-black outline-none"
              onChange={handleChange}
              value={form.phone}
            />
          </div>
        </div>

        {/* Email + Call Time */}
        <div className="flex lg:flex-row flex-col lg:gap-40 gap-10">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"    
              name="email"
              placeholder="Email"
              className="lg:w-6/4 w-full p-3 bg-white rounded-lg text-black outline-none"
              onChange={handleChange}
              value={form.email}
            />
          </div>

          {/* Time */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              What Is The Best Time To Call You?
            </label>
            <select
              name="time"
              className="lg:w-6/4 w-full p-3 bg-white rounded-lg text-black outline-none"
              onChange={handleChange}
              value={form.time}
            >
              <option>As Soon As Possible</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Notes/ Other Enquiries
          </label>
          <textarea
            name="notes"
            placeholder="Notes/ Other Enquiries"
            className="w-full p-3 bg-white rounded-lg text-black outline-none h-32"
            onChange={handleChange}
            value={form.notes}
          ></textarea>
        </div>

        {/* Submit */}
        <motion.button
        animate={{
          // disabled={isLoading}
        opacity: [1, 0.7, 1],
        boxShadow: isLoading ? "none"  : [
      "0 0 0 rgba(0,0,0,0)",
      "0 0 20px rgba(59,130,246,0.8)",
      "0 0 0 rgba(0,0,0,0)",
    ],
  }}
        transition={{
        duration: 1.5,
        repeat: isLoading ? 0  : Infinity,
        ease: "easeInOut",
  }}
          type="submit"
          className="bg-black px-8 py-3 cursor-pointer rounded-full text-white text-lg"
          // {isLoading ? "Sending..." : "Send"}
        >
          Send
        </motion.button>
      </form>
    </div>
    </div>
  );
}
