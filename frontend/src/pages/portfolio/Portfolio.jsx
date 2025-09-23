import { useState } from "react"
export default function Portfolio() {
    const [isProjectHover, setProjectHover] = useState(false)
    const ProjectHover = () => {
        setProjectHover(!isProjectHover)
    }
    return (<>
        <div className=" capitalize text-textPrimary">
            {/* contact information */}
            <h1 className="text-xl mb-5">portfolio</h1>
            {/* filter */}
            <ul className="grid grid-cols-2 text-xs gap-2 md:grid-cols-5  md:text-sm  mb-5">
                <li>All categories</li>
                <li>web templates</li>
                <li>ui elements</li>
                <li>logos</li>
                <li>drawing</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div onMouseEnter={ProjectHover} onMouseLeave={ProjectHover} className="min-h-[250px]  relative ">
                    <img className="w-full h-full" src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    {
                        isProjectHover &&
                        <div className=" font-semibold min-h-[70px]  p-5 absolute bottom-0 bg-dark w-full">
                            <h1>fitness trainer ui card</h1>
                            <span className="text-accent cursor-pointer hover:border-b-2 pb-1 border-accent ">read more &gt;</span>
                        </div>
                    }
                </div>

                <div onMouseEnter={ProjectHover} onMouseLeave={ProjectHover} className="min-h-[250px]  relative ">
                    <img className="w-full h-full" src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    {
                        isProjectHover &&
                        <div className="font-semibold min-h-[70px]  p-5 absolute bottom-0 bg-dark w-full">
                            <h1>fitness trainer ui card</h1>
                            <span className="text-accent cursor-pointer hover:border-b-2 pb-1 border-accent ">read more &gt;</span>
                        </div>
                    }
                </div>

                <div onMouseEnter={ProjectHover} onMouseLeave={ProjectHover} className="min-h-[250px]  relative ">
                    <img className="w-full h-full" src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    {
                        isProjectHover &&
                        <div className="font-semibold min-h-[70px]  p-5 absolute bottom-0 bg-dark w-full">
                            <h1>fitness trainer ui card</h1>
                            <span className="text-accent cursor-pointer hover:border-b-2 pb-1 border-accent ">read more &gt;</span>
                        </div>
                    }
                </div>

                <div onMouseEnter={ProjectHover} onMouseLeave={ProjectHover} className="min-h-[250px]  relative ">
                    <img className="w-full h-full" src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    {
                        isProjectHover &&
                        <div className="font-semibold min-h-[70px]  p-5 absolute bottom-0 bg-dark w-full">
                            <h1>fitness trainer ui card</h1>
                            <span className="text-accent cursor-pointer hover:border-b-2 pb-1 border-accent ">read more &gt;</span>
                        </div>
                    }
                </div>

                <div onMouseEnter={ProjectHover} onMouseLeave={ProjectHover} className="min-h-[250px]  relative ">
                    <img className="w-full h-full" src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    {
                        isProjectHover &&
                        <div className="font-semibold min-h-[70px]  p-5 absolute bottom-0 bg-dark w-full">
                            <h1>fitness trainer ui card</h1>
                            <span className="text-accent cursor-pointer hover:border-b-2 pb-1 border-accent ">read more &gt;</span>
                        </div>
                    }
                </div>
                
                <div onMouseEnter={ProjectHover} onMouseLeave={ProjectHover} className="min-h-[250px]  relative ">
                    <img className="w-full h-full" src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    {
                        isProjectHover &&
                        <div className="font-semibold min-h-[70px]  p-5 absolute bottom-0 bg-dark w-full">
                            <h1>fitness trainer ui card</h1>
                            <span className="text-accent cursor-pointer hover:border-b-2 pb-1 border-accent ">read more &gt;</span>
                        </div>
                    }
                </div>
                
                <div onMouseEnter={ProjectHover} onMouseLeave={ProjectHover} className="min-h-[250px]  relative ">
                    <img className="w-full h-full" src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    {
                        isProjectHover &&
                        <div className="font-semibold min-h-[70px]  p-5 absolute bottom-0 bg-dark w-full">
                            <h1>fitness trainer ui card</h1>
                            <span className="text-accent cursor-pointer hover:border-b-2 pb-1 border-accent ">read more &gt;</span>
                        </div>
                    }
                </div>

            </div>

        </div>

    </>)
}