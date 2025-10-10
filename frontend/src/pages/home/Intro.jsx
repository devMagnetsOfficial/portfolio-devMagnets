import { ReactTyped } from "react-typed";
import stats from "./introData";
export default function Intro() {


    return (<>
        <div className=" bg-dark  ">
            <div className=" min-h-[50%] grid lg:grid-cols-[1.5fr_1fr] grid-cols-1  bg-white/10 p-2">
                <div className=" flex flex-col justify-around lg:p-[60px] gap-5 p-5">
                    <div className="text-3xl md:text-5xl text-textPrimary text-center ">
                        Discover my Amazing Art Space!
                    </div>
                    <div className="text-textPrimary italic "> &lt; <span className="text-accent font-semibold">code</span> &gt;
                        
                        I build {" "}
                        <br />
                        <ReactTyped className='text-textSecondary text-xl' strings={["MERN Stack Developer ",
                            "React Enthusiast ",
                            "Open Source Contributor "]} typeSpeed={100} backSpeed={100} loop />
                        <br />
                        &lt; <span className="text-accent font-semibold">code</span> &gt; </div>
                    <div className="bg-accent w-fit px-4 py-2 md:px-8 md:py-4 capitalize ">explore now</div>
                </div>
                <div className=" hidden lg:flex justify-center items-center ">
                    <img src="https://arter.bslthemes.com/wp-content/uploads/2020/09/face-2.png" alt="" className="" />
                </div>
            </div>

            <div className="mt-5 min-h-[10%] grid grid-cols-2 lg:grid-cols-4">
                {
                    stats.map((elem, idx) => (
                        <div key={idx} className="  flex gap-5  items-center text-textPrimary ">
                            <span className="text-accent  text-2xl font-semibold">{elem.value} </span>
                            <span className="text-sm capitalize">
                            {elem.label}
                            </span>
                        </div>
                    ))
                }


            </div>
        </div>
    </>)
}