import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import ReplacementSec from "./replacement";
import ReplacementHero from "./hero";
import EmblaCarousel from "../braces/emblacarousel";


export default function Replacement() {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <ReplacementHero/>
            <ReplacementSec/>
            <EmblaCarousel/>

        </div>
    )
}