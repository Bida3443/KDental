import Hiero from "./hiero";
import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import SsectionOnnee from "./section1";
import FooterSection from "../src/component/footer";
import BeforeAfterr from "./beforeafter";
// import Embla from "./embla";
import Question from "./question";
import EmblaCarousel from "../braces/emblacarousel";


export default function Implant() {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <Hiero/>
            <SsectionOnnee/>
            <BeforeAfterr/>
            <EmblaCarousel/>

            {/* <Embla/> */}
            <Question/>
            <FooterSection/>

        </div>
    );
}



