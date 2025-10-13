import { useState } from "react"
import projects from "./projects";
export default function Portfolio() {
    const [isProjectHover, setProjectHover] = useState(null)

    return (<>
        <div className=" capitalize text-textPrimary  ">
            {/* contact information */}
            <h1 className="text-2xl mb-5">portfolio</h1>
            {/* filter */}
            <ul className="grid grid-cols-2 text-xs gap-2 lg:grid-cols-5  lg:text-sm  mb-5">
                <li>All categories</li>
                <li>web templates</li>
                <li>ui elements</li>
                <li>logos</li>
                <li>drawing</li>
            </ul>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    projects.map((project, idx) => (
                        <div key={idx} onMouseEnter={() => setProjectHover(idx)} onMouseLeave={() => setProjectHover(null)} className="min-h-[250px]  relative overflow-hidden">
                            <img className="w-full h-full object-cover" src={project.img} alt="" />
                            {
                                isProjectHover === idx &&
                                <div className=" font-semibold min-h-[50px]  p-5 absolute bottom-0 bg-dark/70 w-full ">
                                    <h1>{project.title}</h1>
                                    <div className="text-xs text-gray-400 " >{project.description}</div>
                                    
                                    <a href={project.link} className="text-sm text-accent cursor-pointer hover:border-b-2 pb-1 w-fit border-accent ">link &gt;</a>
                                </div>
                            }
                        </div>

                    ))
                }
            </div>

        </div>

    </>)
}