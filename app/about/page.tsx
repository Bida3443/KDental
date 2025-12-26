import ImageTextRow from "../src/component/info";
import Hero from "./hero";
import NavBar from "../src/component/Nav";
import SectionOne from "./Section1";
import SectionTwo from "./Section2";
import SectionThree from "./Section3";
// import SectionFour from "./Section4";
import Footer from "../src/component/footer";

export default function About () {
    return  <>
        <ImageTextRow />
        <NavBar/>
        <Hero />
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        {/* <SectionFour/> */}
        <Footer/>
        </>
}


