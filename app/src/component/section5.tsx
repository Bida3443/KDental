import Image from "next/image";

import Doctor1 from "../../../public/Doctor1.png"
import Doctor2 from "../../../public/Doctor2.jpg"

export default function SectionFive () {

    return(

        <div className="flex flex-col justify-center items-center font-bold">
            <h1 className="text-black text-center lg:text-[40px] text-[30px] m-10">Meet The Dentist In Lagos</h1>
            
            <div className="flex lg:flex-row flex-col gap-6">
                <div className="relative group overflow-hidden rounded-xl w-full max-w-[500px]">
                
                <Image
                      src={Doctor1}
                      alt="Dentist attending to patient"
                      className="rounded-xl m-5 transition-transform duration-500 group-hover:scale-110"
                      width={500} 
                    height={400} 
                      style={{ objectFit: "cover" }}
                      // objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold text-[20px] ">
                      
                      <a className="hover:underline text-center" href="#" >Dr.Kehinde Bamise<br/>CEO</a>
                      
                    </div> 
            </div>
            <div className="relative group overflow-hidden rounded-xl w-full max-w-[500px]">
                
                <Image
                      src={Doctor2}
                      alt="Dentist attending to patient"
                      className="rounded-xl m-5 transition-transform duration-500 group-hover:scale-110"
                      width={500} 
                      height={400} 
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold text-[20px]">
                      <a className="hover:underline text-center" href="#">Dr.Kehinde Bamise <br />CEO</a>
                      
                    </div>
            </div>
            
            </div>
        </div>
        


    );
}


