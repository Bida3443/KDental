
"use client";
import { useState } from "react";

import {motion} from "framer-motion";

export default function SectionEleven() {


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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };


  return (

    <div className="bg-white px-4 py-10">
      <div className="w-full max-w-4xl mx-auto bg-blue-700 text-white rounded-2xl  px-5 py-8 sm:px-8 lg:p-10 ">
      <motion.h1 
      initial={{x: 10, opacity: 1}}
      whileInView={{x: 10, opacity: 1}}
      transition={{duration: 0.9, ease: "easeOut"}}
      className="text-center lg:text-3xl text-[25px] font-bold mb-8">Send us a Message</motion.h1>

      <motion.form
      // initial={{y: 40, opacity: 1}}
      // whileInView={{y: 40, opacity: 1}}
      // transition={{duration: 0.9, ease: "easeOut"}}
      
      onSubmit={handleSubmit} className="space-y-6">
        {/* Grid for 2-column fields */}
        <div className="flex lg:flex-row flex-col lg:gap-10 gap-5">
          {/* Name */}
          <div>
            <label className="block justify-start mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className=" max-w-4xl p-3 px-15 bg-white rounded-lg  text-black outline-none"
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
              className="w-full p-3 bg-white rounded-lg text-black outline-none"
              onChange={handleChange}
              value={form.phone}
            />
          </div>
        </div>

        {/* Email + Call Time */}
        <div className="flex lg:flex-row flex-col lg:gap-10 gap-5">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 bg-white rounded-lg text-black outline-none"
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
              className="w-full p-3 bg-white rounded-lg text-black outline-none"
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
        <button
          type="submit"
          className="bg-black px-8 py-3 mb-3 rounded-full text-white text-lg"
        >
          Send
        </button>
      </motion.form>
    </div>
    </div>
  );
  }
