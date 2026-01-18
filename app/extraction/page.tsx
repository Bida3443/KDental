import Heroe from "./heroe";
import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import ExtractionSec from "./extraction";
import EmblaCarousel from "../braces/emblacarousel";
import Exquetion from "./exquestion";
import FooterSection from "../src/component/footer";


export default function Extraction () {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>   
            <Heroe/>
            <ExtractionSec/>
            <EmblaCarousel/>
            <Exquetion/>
            <FooterSection/>

        </div>
    )
}