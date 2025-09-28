import Image from "next/image";
import ImageTextRow from "./src/component/info";
import BackgroundSlider from "./src/component/Bgslider";
import NavBar from "./src/component/Nav";

export default function Home() {
  return (
    <div>
<div className="flex flex-row justify-center items-center text-white-500 p-3 space-x-50 bg-blue-600 border-b-2 border-white" >
  <ImageTextRow />
  {/* <div>sssssss</div>
  <div>ddddddd</div>
  <div>mmmmmmm</div>
  <div>ppppppp</div> */}

</div>

<div className="flex flex-row relative">

  <div className="absolute top-15 left-1/2 transform -translate-x-1/2 z-50 flex flex-row justify-center items-center text-center bg-blue-400 p-5 rounded-md">
    <NavBar />

  </div>

  <BackgroundSlider />
</div>
</div>

  );
}
