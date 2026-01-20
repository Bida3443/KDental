import ImageTextRow from "../src/component/info"
import NavBar from "../src/component/Nav"
import RootHero from "./hero"
import RootSec from "./rootcanal"
import EmblaCarousel from "../braces/emblacarousel";
import RootTherapy from "./rootquestion";
import FooterSection from "../src/component/footer";


export default function RootCanal() {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <RootHero/>
            <RootSec/>
            <EmblaCarousel/>
            <RootTherapy/>
            <FooterSection/>
            
        </div>
    )
}

