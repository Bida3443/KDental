import NavBar from "../src/component/Nav"

export default function Hero () {
    return (
        <div className="flex flex-row relative">
        
          <div className="absolute top-15 left-1/2 transform -translate-x-1/2 z-50 w-[70%] flex flex-row justify-center items-center text-center bg-blue-400 p-5 px-10 rounded-md">
            <NavBar />
        
          </div>
        
          <div className="w-full h-[80vh] bg-amber-900">

          </div>
        </div>
    );
}