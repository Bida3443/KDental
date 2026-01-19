import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import BridgeHero from "./hero";
import EmblaCarousel from "../braces/emblacarousel";
import BridgeQuestion from "./question";
import FooterSection from "../src/component/footer";
import BridgeSec from "./bridge";



export default function Bridge () {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <BridgeHero/>
            <BridgeSec/>
            <EmblaCarousel/>
            <BridgeQuestion/>
            <FooterSection/>

        </div>
    )
};



