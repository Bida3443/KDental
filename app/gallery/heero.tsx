import NavBar from "../src/component/Nav"
import Image from "next/image";
import erfan from "../../public/erfan.jpg";

export default function Heero () {
    return (
               <div className=" flex flex-row relative">
            <div className="absolute top-15 left-1/2 transform -translate-x-1/2 z-50 w-[70%] flex flex-row justify-center items-center text-center bg-blue-400 p-5 px-10 rounded-md">
                <NavBar/>
            </div>

            <div className="w-full h-[70vh] relative">
                                <Image
                                                    src={erfan}
                                                    alt="Background"
                                                    fill
                                                    className="w-full h-full"
                                                    style={{objectFit:"cover"}}
                                                    // objectFit="cover"
                                                  />
                         <div className="absolute w-full h-full bg-black opacity-40 z-20" />
                           <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-white px-4">
                    <h1 className="text-3xl font-bold mb-3">Gallery</h1>
                    
                  </div>
                    
                              </div>
            </div>
    );
}