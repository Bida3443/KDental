
import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import HeroVeneer from "./heroveneer";
import VeneerSection from "./veneersection";
import BeforeAndAfterr from "./Beforeandafter";
import Embler from "./embler";
import Question from "./questions";
import FooterSection from "../src/component/footer";


export default function Veneers(){
    return(
        <div>

            <ImageTextRow/>
            <NavBar/>
            <HeroVeneer/>
            <VeneerSection/>
            <BeforeAndAfterr/>
            <Embler/>
            <Question/>
            <FooterSection/>

        </div>
    )
}

