"use client"
import {useState} from "react"

import {motion} from "framer-motion";


export default function SectionnOne () {
        const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "Routine Dental Checkup",
    date: "",
    time: "9:00 AM",
    bestTime: "As Soon As Possible",
    patients: "1",
    hearAbout: "Google Search",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
    
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
    
  //   console.log("Form Submitted:", form);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setIsLoading(true);

  try {
    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    console.log("Status:", res.status);
    console.log("Response:", data);

    if (!res.ok) {
      setIsLoading (false)
      alert(data.message || "Validation failed");
      return; // ⛔ STOP execution here
    }
    setIsLoading (false)
    alert("Appointment request sent successfully!");

  } catch (error) {
    console.error("Frontend error:", error);
    setIsLoading (false)
    alert("Something went wrong");
  }
};


    return(

        <div>

             <section className="py-16 bg-white">
      {/* Page Title */}
      <div className="text-center mb-10 px-4 ">
        <motion.h2 
        initial={{x: -30, opacity: 1}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 0.9, ease: "easeOut"}}
        
        className="lg:text-3xl text-2xl font-semibold text-blue-700">
          Premium Smile Dental Clinic in Lagos
        </motion.h2>

        <motion.p 
        initial={{x: 30, opacity: 1}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 0.9, ease: "easeOut"}}

        
        className="lg:max-w-4xl max-w-2x1 mx-auto leading-7 mt-3 lg:justify-center text-justify text-gray-700">
          Premium Smile Dental Clinic is a leading dental practice in Lagos, Nigeria, dedicated to delivering exceptional oral care and beautiful smiles. We pride ourselves on creating happy, healthy, and confident smiles using advanced, cutting-edge dental technologies.
        Your comfort, safety, and satisfaction remain our top priority as we provide world-class dental solutions right here in Lagos, Nigeria.
        </motion.p>   
      </div>  

      {/* FORM CARD */}
      <div className="px-4 sm:px-6 lg:px-0">
      <div className=" lg:max-w-4xl max-w-2xl mx-auto w-full bg-blue-700 text-white rounded-2xl px-5 py-8 sm:px-8 lg:p-10 shadow-lg">
        <motion.h1
        initial={{y: 100, opacity: 1}}      
        whileInView={{y: 1, opacity: 1}}    
        transition={{duration: 0.9, ease: "easeOut"}}
        className="text-center text-3xl font-bold mb-8">Send us a Message</motion.h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* GRID START */}
          <div className="grid grid-cosls-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-white rounded-lg text-black"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-medium">Phone Number</label>
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 bg-white rounded-lg text-black"
                value={form.phone}
                onChange={handleChange}
              />
            </div>


            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-white rounded-lg text-black"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            {/* Treatment */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Treatment Expected
              </label>
              <select
                name="treatment"
                className="w-full p-3 bg-white rounded-lg text-black"
                value={form.treatment}
                onChange={handleChange}
              >
                <option>Routine Dental Checkup</option>
                <option>Teeth Whitening</option>
                <option>Scaling and polishing</option>
                <option>Braces</option>
                <option>Venners</option>
                <option>Dental Implants</option>
                <option>Extraction</option>
                <option>Dental Bridge</option>
                <option>Crown</option>
                <option>Root Canal Therapy</option>
                <option>Replacement Of missing Teeth</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block mb-2 text-sm font-medium">Preferred Date</label>
              <input
                name="date"
                type="date"
                className="w-full p-3 bg-white rounded-lg text-black"
                value={form.date}
                onChange={handleChange}
              />
            </div>

            {/* Time */}
            <div>
              <label className="block mb-2 text-sm font-medium">Preferred Time</label>
              <select
                name="time"
                className="w-full p-3 bg-white rounded-lg text-black"
                value={form.time}
                onChange={handleChange}
              >
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>12:00 PM</option>
                <option>3:00 PM</option>
              </select>
            </div>

            {/* Best Time */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                What Is The Best Time To Call You?
              </label>
              <select
                name="bestTime"
                className="w-full p-3 bg-white rounded-lg text-black"
                value={form.bestTime}
                onChange={handleChange}
              >
                <option>As Soon As Possible</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>

            {/* Patients */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Number Of Patient(s)
              </label>
              <select
                name="patients"
                className="w-full p-3 bg-white rounded-lg text-black"
                value={form.patients}
                onChange={handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                
              </select>
            </div>

            {/* How Did You Hear About Us */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium">
                How Did You Hear About Us?
              </label>
              <select
                name="hearAbout"
                className="w-full p-3 bg-white rounded-lg text-black"
                value={form.hearAbout}
                onChange={handleChange}
              >
                <option>Google Search</option>
                <option>Instagram</option>
                <option>TikTok</option>
                <option>Facebook</option>
                <option>Referral</option>
                <option>Walk-In</option>
              </select>
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium">
                Notes / Other Enquiries
              </label>
              <textarea
                name="notes"
                placeholder="Notes / Other Enquiries"
                className="w-full p-3 bg-white rounded-lg text-black h-32"
                value={form.notes}
                onChange={handleChange}
              ></textarea>
            </div>

          </div>

          {/* BUTTON */}
          <motion.button
          type= "submit"
          disabled= {isLoading}
          animate={{
        opacity: isLoading ? 0.6 : [1, 0.7, 1],
        boxShadow: isLoading ? "none" : [
      "0 0 0 rgba(0,0,0,0)",
      "0 0 20px rgba(59,130,246,0.8)",
      "0 0 0 rgba(0,0,0,0)",
    ],
  }}
        transition={{
        duration: 1.5,
        repeat: isLoading ? 0 : Infinity,
        ease: "easeInOut",
  }}
            
            className="bg-black px-10 py-3 rounded-full text-white text-lg hover:bg-gray-900"
            
          >
            {isLoading ? " sending..." : "send"}

          </motion.button>
        </form>
      </div>
      </div>
    </section>
        </div>
  );
  }


