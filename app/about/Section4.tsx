import Image from "next/image";
import Pic6 from "../../public/Pic 6.jpg";


export default function SectionFour () {
    return(
        <div>
            <div
  className="w-full bg-fixed bg-cover bg-center py-20"
 
>
     <Image
        //   src={Pic6}
        //   alt="Background"
        //   className=""
        //   objectFit="contain"
        // //   width={800}
        // //   height={500}
        src={Pic6}
                alt="background"
                // fill
                className=""
                width={900}
                 height={200}
                objectFit="cover"

          
          // className="rounded-xl"
          // objectFit="cover"
          // width={500}
          // height={800}
        />
  {/* Main Wrapper */}
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-white px-6 md:px-12">

    {/* LEFT BLUE PANEL */}
    <div className="bg-blue-500/80 p-8 rounded-md md:w-1/3 mb-10 md:mb-0">
      <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
      <p className="leading-7 text-sm md:text-base">
        A small river named Duden flows by their place and supplies it with
        the necessary regalia.
      </p>
    </div>

    {/* RIGHT STAT BOXES */}
    <div className="flex flex-wrap gap-10 justify-center md:justify-end w-full md:w-2/3">

      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-semibold">14</h3>
        <p className="text-sm opacity-90">Years of Experience</p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-semibold">4,500</h3>
        <p className="text-sm opacity-90">Qualified Dentist</p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-semibold">4,200</h3>
        <p className="text-sm opacity-90">Happy Smiling Customers</p>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-semibold">320</h3>
        <p className="text-sm opacity-90">Patients Per Year</p>
      </div>

    </div>
  </div>
</div>

        </div>

    );
}