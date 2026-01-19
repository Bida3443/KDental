import HeroWhite from "./hero";
import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import TeethWhitening from "./white";
import WhiteBefore from "./whiteBefore";
import EmblaCarousel from "../braces/emblacarousel";
import FooterSection from "../src/component/footer";
import WhiteQuestion from "./whitequestion";

export default function Whitening () {

    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <HeroWhite/>
            <TeethWhitening/>
            <WhiteBefore/>
            <EmblaCarousel/>
            <WhiteQuestion/>
            <FooterSection/>

        </div>
    )
}