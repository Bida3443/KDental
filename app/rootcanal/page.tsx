import ImageTextRow from "../src/component/info"
import NavBar from "../src/component/Nav"
import RootHero from "./hero"
import RootSec from "./rootcanal"
import EmblaCarousel from "../braces/emblacarousel"


export default function RootCanal() {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <RootHero/>
            <RootSec/>
            <EmblaCarousel/>
        </div>
    )
}

