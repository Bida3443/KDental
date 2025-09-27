import Image from "next/image";
import ImageTextRow from "./src/component/info";
import BackgroundSlider from "./src/component/Bgslider";

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

<div className="flex flex-row">

  <BackgroundSlider />
</div>
</div>

  );
}
