import ImageTextRow from "../src/component/info";
import Bhero from "./bhero";
import SectionOnnee from "./section1";
import Question from "./question";
// import EmblaCarousel from "./carousel"
import Caro from "./caro";
import BeforeAfter from "./section2"
// import NavBar from "../src/component/Nav";
import FooterSection from "../src/component/footer";



export default function Braces() {
    return (
        <div>
            <ImageTextRow/>
            <Bhero/>
            <SectionOnnee/>
            <BeforeAfter/>
            <Caro/>
            <Question/>
            <FooterSection/>
        </div>
    );
}