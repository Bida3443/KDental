import Image from "next/image";
import caroline from "../../public/caroline.jpg"

export default function SectionThree () {
    return (
            <div className="flex flex-col justify-center items-center bg-white text-black h-screen">
                <div> <h1>What is the best way for us to serve?</h1></div>
                <div>flexible payment option</div>
                <div className="flex flex-row gap-6 w-400">
                    <div>
                    <Image
                    src={caroline}
            alt="Background"
            className="rounded-xl "
            objectFit="cover"
            width={500}
            height={600}
                        />
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsam aliquid magni et est deserunt, recusandae, libero dolorum ab maxime architecto omnis laboriosam! Corporis, cumque nostrum! Delectus magni illum voluptas.</div>
                </div>
            </div>
    );
}