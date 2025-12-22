import Image from "next/image";

import Doctor1 from "../../../public/Doctor1.png"
import Doctor2 from "../../../public/Doctor2.jpg"

export default function SectionFive () {

    return(

        <div className="flex flex-col justify-center items-center font-bold">
            <h1 className="text-black text-center lg:text-[40px] text-[30px] m-10">Meet The Dentist In Lagos</h1>
            
            <div className="flex flex-row justify-center px-4 w-full gap-4">
                <div className="relative group overflow-hidden rounded-xl w-1/2 sm:w-[220px] md:w-[280] lg:w-[500px]">
                
                <Image
                      src={Doctor1}
                      alt="Dentist attending to patient"
                      className="rounded-xl w-full h-auto transition-transform duration-500 group-hover:scale-110"
                      width={500} 
                      height={400} 
                      style={{ objectFit: "cover" }}
                      // objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold text-[16px] sm:text-[18px] lg:text-[20px]">
                      
                      <a className="hover:underline text-center" href="/about" >Dr.Kehinde Bamise<br/>CEO</a>
                      
                    </div> 
            </div> 
            <div className="relative group overflow-hidden rounded-xl w-1/2 sm:w-[220px] md:w-[280px] lg:w-[500px]">
                
                <Image
                      src={Doctor2}
                      alt="Dentist attending to patient"
                      className="rounded-xl w-full h-auto transition-transform duration-500 group-hover:scale-110"
                      width={500} 
                      height={400} 
                      objectFit="cover" 
                    />                          
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold text-[16px] sm:text-[18px] lg:text-[20px]">
                      <a className="hover:underline text-center" href="/about">Dr.Kehinde Bamise <br />CEO</a>
                      
                    </div>
            </div>
            
            </div>
        </div>
        


    );
}


