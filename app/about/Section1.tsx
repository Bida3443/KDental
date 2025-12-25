import Image from "next/image";
import Doctor from "../../public/Doctor1.png";

export default function SectionOne() {
  return (
    <div className="flex flex-col justify-center bg-white gap-10 pt-10">
      <div className="flex lg:flex-row flex-col space-x-20 justify-center items-center ">
        <div>
          <Image
            src={Doctor}
            alt="Background"
            className="rounded-xl m-5 items-center"
            objectFit="cover"
            width={500}
            height={400}
          />
        </div>

        <div className="text-black w-100 m-5">
          <div className="">
            {" "}
            <h1 className="bg-blue-700 rounded-xl text-white w-80 font-bold p-3 flex justify-center items-center text-center font">
              About Premium Smile Dental Clinic:
            </h1>
            <h2 className="leading-10 text-justify">
              At Premium Smile Dental Clinic, we believe that a confident smile can change everything. Located in the heart of Ogba, Ikeja, Lagos, we are committed to providing modern, affordable, and compassionate dental care for individuals and families across Nigeria.
            </h2> 
            <h1 className="font-bold leading-10 text-blue-700">Our mission: </h1>
            <p className="leading-10 text-justify">
              To ensure every patient leaves fully satisfied. Your satisfaction is our pride. Whether you are dealing with scattered teeth, missing teeth, or any other dental concern, our goal is to restore your smile with comfort, precision, and care.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
