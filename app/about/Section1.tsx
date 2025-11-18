import Image from "next/image";
import Doctor from "../../public/Doctor1.png";

export default function SectionOne() {
  return (
    <div className="flex flex-row justify-center bg-white gap-6">
      <div>
        <Image
          src={Doctor}
          alt="Background"
          className="rounded-xl m-5"
          objectFit="cover"
          width={500}
          height={400}
        />
      </div>
      <div className="text-black w-100 m-5">
        <div>
          {" "}
          <h1 className="bg-blue-700 rounded-xl text-white p-3 w-40 flex justify-center items-center text-center font">
            About The Doctor:
          </h1>
          <h2 className="leading-10">
            Dr. Bamise Kehinde Oluwole is a highly skilled and dedicated Dentist
            and Oral Health Practitioner with four years of clinical experience
            focused on restoring and maintaining beautiful, healthy smiles. His
            practice is built on precision, advanced techniques, and patient
            comfort.
          </h2>
          <h1>Pioneering Education Dr. Bamise Kehinde Oluwole
            <p>
               He received a rigorous and
              integrated medical education, earning the Bachelor of Medicine,
              Bachelor of Surgery (M.B.Ch.B.) degree from the prestigious
              Obafemi Awolowo University (OAU), Ile-Ife, Nigeria. While the
              M.B.Ch.B. provides a broad medical foundation, his specialization
              and focus on Dental Surgery equips him with specific expertise in:
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}
