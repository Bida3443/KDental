import Image from "next/image";

import pic6 from "../../../public/Pic 6.jpg";

export default function FooterSection (){


    return (
          
      <div className="">
        <Image
        src={pic6}
        alt="background"
        fill
        className="w-full h-full"
        objectFit="cover"
        />

      </div>
    );
};


