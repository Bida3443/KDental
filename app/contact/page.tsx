import Herro from "./herro";
import ImageTextRow from "../src/component/info";
import SectionEleven from "./section11";
import SectionTwelve from "./section12";
import SectionThirteen from "./section13";
import NavBar from "../src/component/Nav";

export default function Contact () {
    return <>
    <ImageTextRow/>

    <div className="">
<NavBar/>
        <Herro />
    </div>
        
     <SectionEleven/>
     <SectionTwelve />
     <SectionThirteen />
  
    </> 
    
}