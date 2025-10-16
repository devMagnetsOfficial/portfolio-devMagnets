import { useState } from "react"
// import projects from "./projects";
import { useEffect } from 'react'
export default function Portfolio() {
    const [isProjectHover, setProjectHover] = useState()
    const [deleteProjects, setProjectForDelete] = useState()
    const [projects, setProjects] = useState([])
    // fetch project from backend
    const backend = 'http://localhost:2030'
    const fetchProjects = async () => {
        console.log('fetching projects ....')
        try {
            const req = await fetch(`${backend}/portfolio/fetch`, {
                method: 'GET'
            })
            const res = await req.json()
            if (res.success) {
                setProjects(res.projects)
            }
            else {
                console.log('err in backend while fetching projects from databse')
            }
        } catch (err) {
            console.log('err (while fetching the projects list)' + err)
        }
    }
    useEffect(() => {
        fetchProjects()
    }, [])
    // remove projects from backend
    

    return (<>
        <div className="capitalize text-textPrimary text-center">
            <h1 className="text-2xl">explore our portfolio</h1>
            <span className="text-xs">discover our projects, creativity, and the work that defines our journey</span>
        </div>

        <div className=" capitalize text-textPrimary mt-5 ">
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
                                    <div className="mx-auto text-xs text-red-600 bg-red-400 w-fit px-4 py-2 rounded-3xl hover:bg-red-600 hover:text-red-400">delete</div>
                                </div>
                            }
                        </div>

                    ))
                }
            </div>

        </div>

    </>)
}