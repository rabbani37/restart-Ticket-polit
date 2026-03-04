
const Banner = () => {
    return (
       <div className="pb-20 pt-40 ">
         <div className=" grid md:grid-cols-2 grid-cols-1 gap-7">
            {/* in-progress */}
            <div className=" rounded grid  max-w-2xl h-62 relative bg-linear-to-tl from-[#9F62F2]  to-[#632EE3] ">
                <div className="inset-0 absolute bg-[url('./vector1.png')] bg-no-repeat bg-left  "></div>
                <div className=" place-items-center my-auto text-white">
                    <p className="text-xl">In-Progress</p>
                    <h2 className="text-6xl">0</h2>
                </div>
                <div className="inset-0 absolute bg-[url('./vector1.png')] bg-no-repeat  bg-left  transform scale-x-[-1] ] "></div>
            </div>

            {/* Resolved */}
            <div className=" rounded grid  max-w-2xl h-62 relative bg-linear-to-r from-[#00827A]  to-[#54CF68] ">
                <div className="inset-0 absolute bg-[url('./vector1.png')] bg-no-repeat bg-left  "></div>
                <div className=" place-items-center my-auto text-white">
                    <p className="text-xl">In-Progress</p>
                    <h2 className="text-6xl">0</h2>
                </div>
                <div className="inset-0 absolute bg-[url('./vector1.png')] bg-no-repeat  bg-left  transform scale-x-[-1] ] "></div>
            </div>

        </div>
       </div>
    );
};

export default Banner;