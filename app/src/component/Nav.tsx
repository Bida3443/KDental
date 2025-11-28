import { link } from "fs";

export default function NavBar() {
  const nav = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-4 fill-white"
        >
          <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
        </svg>
      ),
      text: "Contact",    
      link: "/contact",          
    },
    {           
      svg: ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-4 fill-white"
        >
          <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
        </svg>
      ),
      text: "About Us",
      link: "/about",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-4 fill-white"
        >
          <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
        </svg>
      ),
      text: "Gallery",
      link: "gallery",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="w-4 fill-white"
        >
          <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
        </svg>
      ),
      text: "Services",
      link: "/service",
    },
  ];

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row justify-center items-center w-fit space-x-6">
        {nav.map((nav, index) => (
          <div
            key={index}
            className="flex flex-row items-center hover:text-gray-900 hover:scale-110"
          >
            {nav.svg}
            <a className="text-2xl" href={nav.link} target="_blank">
              {nav.text}
            </a>
          </div>
        ))}
      </div>
      <a
        className="bg-white p-3 px-15 rounded-md text-blue-700 text-[20px] target: font-bold items-center"
        href="/book "
      >
        BOOK NOW
      </a>
    </div>
  );
}
