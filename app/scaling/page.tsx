import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import ScalingHero from "./hero";
import ScalingSec from "./scaling";
import EmblaCarousel from "../braces/emblacarousel";
import ScalingPolish from "./scalingquestion";
import FooterSection from "../src/component/footer";





export default function Scaling () {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <ScalingHero/>
            <ScalingSec/>
            <EmblaCarousel/>
            <ScalingPolish/>
            <FooterSection/>

        </div>
    )
}


