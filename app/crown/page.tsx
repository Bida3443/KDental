import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import CrownHero from "./hero";
import EmblaCarousel from "../braces/emblacarousel";



export default function RootCanal() {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <CrownHero/>
            <EmblaCarousel/>

        </div>
    )
}