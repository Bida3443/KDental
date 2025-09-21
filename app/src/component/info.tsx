import image from "next/image";

export default function ImageTextRow() {
  const items = [
    {
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
      ),
      text: "Opening Mon-Fri 09:00AM-17:00PM Sat 10:00am-15:00pm",
      link: "#",
    },
    { svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
      ), text: "Ogba, Ikeja Lagos", link: "#" },
    { svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
      ), text: "+2347033347978", link: "#" },
  ];

  return (
    <div className="flex  gap-6 p-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center w-50 h-50 gap-3 bg-gray-100 p-1 rounded-lg shadow"
        >
          {item.svg}
          <a href={item.link} className="text-gray-800 font-medium">
            {item.text}
          </a>
        </div>
      ))}
    </div>
  );
}
