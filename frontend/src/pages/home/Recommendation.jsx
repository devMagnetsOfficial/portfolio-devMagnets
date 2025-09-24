import { FaStar } from "react-icons/fa6";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";

export default function Recommendation() {
    const Recommendation = [
        { name: 'web development', designation: 'author', desc: 'lorem10', rate: 3 },
        { name: 'web development', designation: 'author', desc: 'lorem10', rate: 5 },
        { name: 'web development', designation: 'author', desc: 'lorem10', rate: 4 },
        { name: 'web development', designation: 'author', desc: 'lorem10', rate: 5 },
        { name: 'web development', designation: 'author', desc: 'lorem10', rate: 4 },
        { name: 'web development', designation: 'author', desc: 'lorem10', rate: 4 },
        { name: 'web development', designation: 'author', desc: 'lorem10', rate: 5 },
        { name: 'web development', designation: 'author', desc: 'lorem10', rate: 4 }
    ]
    const star = (rate, element) => {
        let stars = []
        for (let i = 1; i <= rate; i++) {
            stars.push(<span key={i}>{element}</span>)
        }
        return stars
    }
    const scrollRef = useRef(null)
    
  const scrollToIndex = (index) => {

    const cardWidth = scrollRef.current.offsetWidth / 2; // one "step"
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scrollLeft = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < Recommendation.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };
    const [activeIndex, setActiveIndex] = useState(4);
    return (<>
        <div className=" w-full mt-5 capitalize">
            <div className="text-xl text-textPrimary capitalize ">Recommendations</div>
            {/* cards conatiner */}
            <div ref={scrollRef}
                onScroll={() => {
                    const scrollPosition = scrollRef.current.scrollLeft;
                    const cardWidth = scrollRef.current.offsetWidth / 2;
                    const index = Math.round(scrollPosition / cardWidth);
                  

                    setActiveIndex(index);
                }}
                className=" flex items-center gap-[15px]  h-[300px] overflow-x-scroll overflow-y-visible">

                {/* cards */}
                {
                    Recommendation.map((items, idx) => (
                        <div key={idx} className=" flex w-[calc(100%-30px)] lg:w-[calc(50%-30px)]  flex-shrink-0  flex-col gap-4 p-8 text-sm bg-white/10 min-h-[70%]  relative ">
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
                    ))
                }


            </div>

            {/* slider with button  */}
            <div className=" text-textPrimary flex justify-between mb-5">
                <div className="flex gap-2">
                    {Recommendation.map((element, i) => (
                        <span key={i} onClick={()=>{scrollToIndex(i)}} className={i === activeIndex ? "cursor-pointer transition-all duration-300 ease-in-out bg-accent w-5 rounded-xl h-1  font-bold" : "cursor-pointer w-2 h-1 bg-gray-400 rounded-xl"}>
                        </span>
                    ))}
                </div>

                <div className="flex text-textSecondary items-center gap-3">
                    <FaLessThan onClick={scrollLeft}   className={`${activeIndex === 0 ? "text-gray-500 cursor-not-allowed" : "text-textPrimary cursor-pointer"}`} />
                    <FaGreaterThan onClick={scrollRight}  className={`${activeIndex === Recommendation.length-1  ? "text-gray-500 cursor-not-allowed" : "text-textPrimary cursor-pointer"}`} />
                </div>
            </div>

        </div>
    </>)

}