import NavBar from "../src/component/Nav";
import Image from "next/image";
import erfan from "../../public/erfan.jpg";


export default function Hero () {
    return(
        <div className="flex flex-row relative">
                
                  <div className="absolute top-15 left-1/2 transform -translate-x-1/2 z-50 w-[70%] flex flex-row justify-center items-center text-center bg-blue-400 p-5 px-10 rounded-md">
                    <NavBar />
                
                  </div>
                
                  <div className="w-full h-[80vh]">
                    <Image
                                        src={erfan}
                                        alt="Background"
                                        fill
                                        className="w-full h-full"
                                        objectFit="cover"
                                      />
             <div className="absolute w-full h-full bg-black opacity-50 z-20" />
        
                  </div>
                </div>
    );
}