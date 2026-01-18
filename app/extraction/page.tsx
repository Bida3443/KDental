import Heroe from "./heroe";
import ImageTextRow from "../src/component/info";
import NavBar from "../src/component/Nav";


export default function Extraction () {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>   
            <Heroe/>
        </div>
    )
}