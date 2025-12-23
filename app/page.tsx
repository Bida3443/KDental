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

  <ImageTextRow />
  <NavBar />
  <BackgroundSlider/>
  <SectionTwo />
  <SectionThree/>
  <SectionFour/>
  <SectionFive/>
  <SectionSix/>
  <SectionSeven />
  <FooterSection />
    
</div>

  );
}
