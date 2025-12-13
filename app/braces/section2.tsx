import Image from "next/image";
import Before from "../../public/Before.png";

export default function BeforeAfter() {
    return(
        <div className="flex flex-col justify-center items-center p-5 gap-10 bg-white pb-10">
            <div>
                <h1 className="text-4xl font-bold text-blue-700">Braces: Before, Progress and After</h1>
                <div className="border-2 border-blue-700 w-50 mx-auto M-5 flex items-center mt-5 justify-center"></div>

            </div>
            <div className="flex flex-row gap-20">
                <div>
                <Image
                src={Before}
                alt=""
                style={{objectFit:"cover"}}
                width={300}
                height={500}
                className="rounded-xl"
                />
                <div></div>

            </div>
            <div>
                <Image
                src={Before}
                alt=""
                style={{objectFit:"cover"}}
                width={300}
                height={500}
                className="rounded-xl"
                />
            </div>
            </div>
        </div>
    );
}