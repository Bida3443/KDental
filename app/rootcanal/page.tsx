import ImageTextRow from "../src/component/info"
import NavBar from "../src/component/Nav"
import RootHero from "./hero"
import RootSec from "./rootcanal"


export default function RootCanal() {
    return(
        <div>
            <ImageTextRow/>
            <NavBar/>
            <RootHero/>
            <RootSec/>
        </div>
    )
}