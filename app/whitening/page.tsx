import HeroWhite from "./hero";
import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import TeethWhitening from "./white";
import WhiteBefore from "./whiteBefore";

export default function Whitening () {

    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <HeroWhite/>
            <TeethWhitening/>
            <WhiteBefore/>
        </div>
    )
}