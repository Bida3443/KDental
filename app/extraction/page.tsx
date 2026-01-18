import Heroe from "./heroe";
import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";
import ExtractionSec from "./extraction";


export default function Extraction () {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>   
            <Heroe/>
            <ExtractionSec/>
        </div>
    )
}