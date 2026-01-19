import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import BridgeHero from "./hero";
import EmblaCarousel from "../braces/emblacarousel";
import BridgeQuestion from "../braces/question";
import FooterSection from "../src/component/footer";


export default function Bridge () {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <BridgeHero/>
            <EmblaCarousel/>
            <BridgeQuestion/>
            <FooterSection/>

        </div>
    )
};



