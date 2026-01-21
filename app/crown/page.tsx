import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import CrownHero from "./hero";
import EmblaCarousel from "../braces/emblacarousel";
import FooterSection from "../src/component/footer";
import CrownSec from "./crown";
import CrownQuestion from "./crownquestion";



export default function RootCanal() {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <CrownHero/>
            <CrownSec/>
            <CrownQuestion/>
            <EmblaCarousel/>
            <FooterSection/>

        </div>
    )
}
