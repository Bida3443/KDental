// import { text } from "stream/consumers";

export default function SectionSeven() {
  const plane = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-7 fill-white stroke-white"
        >
          <path d="M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z" />
        </svg>
      ),
      text1: "Ogba, Ikeja Lagos",
      link: "#",
    },
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"
        className="w-7 fill-white stroke-white">
        <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/></svg>
      ),
      text1: "+2347033347978",
      link:"#",
    },
    {
      svg:(
        <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 640"
        className="w-7 fill-white stroke-white"><path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>
      ),
      text1:"Mondays-Saturdays 09:00AM-18:00PM",
      text2:"Sundays 1:30am-17:00pm",
      
    }
  ];

  return (
    <div className="flex lg:flex-row flex-col justify-between p-15 bg-blue-700">
      <div className="w-fit h-fit overflow-hidden md:justify-center shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31705.545586696113!2d3.3180001755887063!3d6.622907402157796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPrime%20Smile%20Dental%20Clinic%2C%2055%20Oyemekun%20St%2C%20off%20College%20Road%2C%20Ogba%2C%20Lagos%20101232%2C%20Lagos.!5e0!3m2!1sen!2sng!4v1760633830352!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" flex flex-col  space-y-10 ml-7 justify-center">
        <h1 className="font-bold text-[40px]">Our Clinic Location</h1>
         {plane.map((items, index)=> (

          <div key={index}
          className="flex flex-col border-b-2"
          
          >
           <div className="flex flex-row gap-2 space-y-7">
             <div className="order-2">{items.text1}</div>
            <div className="order-1">{items.text2}</div>
            <div className="order-0">{items.svg}</div>
           </div>

          </div>
        ))}
        
        
        {/* <h1>ffffffffff</h1> */}
      </div>
    </div>
  );
}
