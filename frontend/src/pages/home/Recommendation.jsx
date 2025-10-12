import { FaStar } from "react-icons/fa6";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { useState,useEffect } from "react";
import Recommendations from "./recommendData";


export default function Recommendation() {

const [screenWidth,setScreenWidth]=useState(window.innerWidth)
const settingscreenWidth=()=>{
    return setScreenWidth(window.innerWidth)
}
useEffect(()=>{
    window.addEventListener('resize',settingscreenWidth)

},[])
    const totalReview = (Recommendations.length)
    const [sidx, setIdx] = useState(1);
    const star = (rate, element) => {
        let stars = []
        for (let i = 1; i <= rate; i++) {
            stars.push(<span key={i}>{element}</span>)
        }
        return stars
    }
    const rightSlide = () => {
        setIdx((sidx + 1) % totalReview)
        console.log(sidx)
    }
    const leftSlide = () => {
        setIdx((sidx - 1 + totalReview) % totalReview)
        console.log(sidx)
    }
    const customSlide=(idx)=>{
        setIdx(idx)
    }
    const isvisible = (idx) => {
        return (sidx === idx ||
            ((screenWidth >= 768) && sidx === (idx + 1) % totalReview)
        )
    }


    return (<>
        <div className=" w-full mt-5 capitalize">
            <div className="text-xl text-textPrimary capitalize ">Recommendations</div>
            {/* cards conatiner */}
            <div className=" flex items-center gap-[15px]  h-[300px] w-full justify-center">

                {/* cards */}
                {
                    Recommendations.map((items, idx) => (
                        isvisible(idx) && (
                            <div key={idx} className=" flex w-[100%]  md:w-[50%] lg:w-[50%]  flex-shrink-0  flex-col gap-4 p-8 text-sm bg-white/10 min-h-[70%]  relative ">
                                <div className="flex justify-between items-center">
                                    <div className="text-textPrimary">
                                        <h1 className="font-semibold " >{items.name}</h1>
                                        <h2 className="text-textSecondary">{items.designation}</h2>
                                    </div>
                                    <div className="w-[50px] lg:w-[70px] bg-dark  overflow-hidden aspect-[1/1] rounded-[100%] absolute right-5 lg:right-10 -top-4 ">
                                        <img className="w-full h-full " src="https://pics.craiyon.com/2023-12-13/y2y9z8iKQp-lMupp8bBypg.webp" alt="" />
                                    </div>
                                </div>
                                <p className="text-textSecondary">{items.desc}</p>
                                <div className="flex gap-1  w-fit px-2 py-1 rounded-2xl bg-dark">
                                    {star(items.rate, < FaStar className="text-accent" />)}
                                </div>
                            </div>
                        )

                    ))
                }


            </div>

            {/* slider with button  */}
            <div className=" text-textPrimary flex justify-between mb-5">
                <div className="flex gap-2">
                    {Recommendations.map((element, idx) => (
                        <span key={idx} onClick={()=>customSlide(idx)} className={`cursor-pointer transition-all duration-300 ease-in-out  w-5 rounded-xl h-1  font-bold ${isvisible(idx) ? 'bg-accent' : 'bg-gray-300'}`}>
                        </span>
                    ))}
                </div>

                <div className="flex text-textSecondary items-center gap-3">
                    <FaLessThan onClick={leftSlide} className="text-gray-500 hover:text-white" />
                    <FaGreaterThan onClick={rightSlide} className="text-gray-500 hover:text-white" />
                </div>
            </div>

        </div>
    </>)

}