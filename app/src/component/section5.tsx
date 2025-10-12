import Image from "next/image";

import Doctor1 from "../../../public/Doctor1.png"
import Doctor2 from "../../../public/Doctor2.jpg"

export default function SectionFive () {
const Doctor = [
  {doctor:Doctor1},
  {doctor:Doctor2},
];
    return(

          // <div>
          //   {Doctor.map((img,index) => (

          //     <div></div>

          //   ))};

          // </div>

        <div className="flex flex-col justify-center items-center font-bold">
            <h1 className="text-black text-[40px] m-10">Meet The Dentist In Lagos</h1>
            
            <div className="flex flex-row space-x-3">
                <div className="relative group overflow-hidden rounded-xl">
                
                <Image
                      src="/Doctor1.png"
                      alt="Dentist attending to patient"
                      className="rounded-xl m-5 transition-transform duration-500 group-hover:scale-110"
                      width={500} 
                    height={400} 
                      
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold text-[20px] ">
                      
                      <a className="hover:underline text-center" href="#" >Dr.Kehinde Bamise<br/>CEO</a>
                      
                    </div> 
            </div>
            <div className="relative group overflow-hidden rounded-xl">
                
                <Image
                      src="/Doctor2.jpg"
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


