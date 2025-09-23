import { ReactTyped } from "react-typed"
export default function Intro() {
    return (<>
        <div className=" bg-dark  ">
            <div className=" min-h-[50%] grid md:grid-cols-[1.5fr_1fr] grid-cols-1  bg-white/10 p-2">
                <div className=" flex flex-col justify-around md:p-[60px]">
                    <div className="text-5xl text-textPrimary text-center ">
                        Discover my Amazing Art Space!
                    </div>
                    <div className="text-textPrimary italic"> &lt; <span className="text-accent font-semibold">code</span> &gt;
                        I build {" "}
                        <ReactTyped className='text-textSecondary text-xl' strings={["MERN Stack Developer ",
                            "React Enthusiast ",
                            "Open Source Contributor "]} typeSpeed={100} backSpeed={100} loop />

                        &lt; <span className="text-accent font-semibold">code</span> &gt; </div>
                    <div className="bg-accent w-fit px-8 py-4 capitalize ">explore now</div>
                </div>
                <div className=" hidden md:flex justify-center items-center ">
                    <img src="https://arter.bslthemes.com/wp-content/uploads/2020/09/face-2.png" alt="" className="" />
                </div>
            </div>

            <div className="mt-5 min-h-[10%] grid grid-cols-2 md:grid-cols-4">
                <div className="  flex gap-5  items-center text-textPrimary ">
                    <span className="text-accent text-2xl font-semibold">10+ </span>years experience
                </div>
                <div className="  flex gap-5  items-center text-textPrimary ">
                    <span className="text-accent text-2xl font-semibold">143 </span>completed projects
                </div>
                <div className="  flex gap-5  items-center text-textPrimary">
                    <span className="text-accent text-2xl font-semibold">114 </span>happy customers
                </div>
                <div className="  flex gap-5  items-center text-textPrimary">
                    <span className="text-accent text-2xl font-semibold">20+ </span>honors and awards
                </div>
            </div>
        </div>
    </>)
}