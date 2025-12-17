// import Image from "next/image";
import ImageTextRow from "./src/component/info";
import BackgroundSlider from "./src/component/Bgslider";
import NavBar from "./src/component/Nav";
import SectionTwo from "./src/component/section2";
import SectionThree from "./src/component/Section3";
import SectionFour from "./src/component/section4";
import SectionFive from "./src/component/section5";
import SectionSix from "./src/component/secyion6";
import SectionSeven from "./src/component/section7";
import FooterSection from "./src/component/footer";



export default function Home() {
  return (
    <div>
{/* <div className="" > */}
  <ImageTextRow />
  {/* <div>sssssss</div>
  <div>ddddddd</div>
  <div>mmmmmmm</div>
  <div>ppppppp</div> */}

{/* </div> */}

<div className="flex flex-row relative">

  <div className="absolute top-15 left-1/2 transform -translate-x-1/2 z-50 w-[70%] flex flex-row justify-center items-center text-center bg-blue-400 p-5 px-10 rounded-md">
    <NavBar />

  </div>

  <BackgroundSlider />
</div>

<div className="flex flex-row items-center justify-center bg-white w-full space-y-5 pb-10">

  <SectionTwo />

</div>

<div className="flex justify-center items-center">
  <SectionThree/>
</div>

<div className="flex flex-col bg-white">
  <SectionFour/>
</div>

<div className="bg-white ">
  <SectionFive/>
</div>

<div className="bg-white ">
  <SectionSix/>
</div>
    <div className="bg-blue-600">
      <SectionSeven />
    </div>

    <footer>
      <FooterSection />
    </footer>
</div>

  );
}
