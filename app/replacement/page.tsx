import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import ReplacementSec from "./replacement";
import ReplacementHero from "./hero";
import EmblaCarousel from "../braces/emblacarousel";
import ReplaceQuestion from "./replacequestion";
import FooterSection from "../src/component/footer";


export default function Replacement() {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <ReplacementHero/>
            <ReplacementSec/>
            <EmblaCarousel/>
            <ReplaceQuestion/>
            <FooterSection/>

        </div>
    )
}