// import NavBar from "../src/component/Nav";
import Image from "next/image";
import erfan from "../../public/erfan.jpg";

export default function Herro() {
  return (
    <div className=" overflow-hidden relative">
      <div className="flex flex-row relative justify-center">
        {/* <div className="absolute  top-15 left-1/2 transform -translate-x-1/2 z-50 w-[70%] flex flex-row justify-center items-center text-center bg-blue-400 p-5 px-10 rounded-md">
          <NavBar />
          
        </div> */}
        
        {/* <div className="flex justify-center items-center text-white font-bold">CONTACT US</div> */}
        

        <div className="w-full lg:h-[70vh] h-[40vh] relative">
          <Image
            src={erfan}
            alt="Background"
            fill
            className="w-full h-full"
            style={{ objectFit: "cover" }}
            // objectFit="cover"
            
          />
          <div className="relative w-full h-full bg-black opacity-40 z-20" />
          <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-white px-4">
        <h1 className="lg:text-5xl text-[24px] font-bold mb-3">Contact Us</h1>
        {/* <p className="text-lg max-w-2xl text-center">
          We are here to assist you. Reach out and let us help you today.
        </p> */}
      </div>

        </div>

      </div>
    </div>
  );
}
