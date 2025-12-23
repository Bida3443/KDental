import Herroo from "./herroo";
import NavBar from "../src/component/Nav";
import ImageTextRow from "../src/component/info";
import SectionnOne from "./sectionn1";
import SectionFifteen from "./sectionn2";
import FooterSection from "../src/component/footer";

export default function Book () {
    return(

    <div>
        <ImageTextRow/>
        <NavBar/>
        <Herroo/>
        <SectionnOne />
        <SectionFifteen/>
        <FooterSection/>
    
    </div>

    );
}