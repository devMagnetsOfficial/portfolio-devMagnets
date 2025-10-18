import { useState } from "react"



import { useEffect } from 'react'
import AddProject from "./AddProject";
export default function Portfolio() {
    const [isProjectHover, setProjectHover] = useState()

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
    // admin functionality
    const [isAdmin, setAdmin] = useState(true)
    // remove projects from backend
    const deleteProject = async (id) => {
        const confirm = window.confirm('are you sure you want to delete this project')
        if (!confirm) return
        try {
            const req = await fetch(`${backend}/portfolio/remove/${id}`, {
                method: 'DELETE'
            })
            const res = await req.json()
            if (res.success) {
                alert('project is deleted')
                fetchProjects()
            }
            else {
                alert('error in backend while deleting the project from database')
            }
        } catch (err) {
            console.log('err while deleting project' + err)
        }
    }
    const [selectProject, setSelectProject] = useState(false)
    const [Project, setProjectDetail] = useState({
        title: "",
        description: "",
        category: "",
        link: "",
        img: ""
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setProjectDetail((prev) => ({ ...prev, [name]: value }))
        console.log(Project)
    }
    const [modify,setModify]=useState()

    // add project in db
    const addProjectsOnSubmit = async (e) => {
        e.preventDefault()
        const endPoint=selectProject=='new project'?'add':'modify'
        const data=selectProject=='new project'?Project:{...Project,id:modify}
        try {
            const req = await fetch(`${backend}/portfolio/${endPoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const res = await req.json()
            if (res.success) {
                alert('project added')
                fetchProjects()
                setSelectProject(false)
            }
            else {
                console.log('fail to add project due to backend issue' + JSON.stringify(res.err))
            }

        } catch (err) {
            console.log('err while adding addproject' + err)
        }
    }
    // update projecs in db



    return (<>
        <div className="capitalize text-textPrimary text-center">
            <h1 className="text-2xl">explore our portfolio</h1>
            <span className="text-xs">discover our projects, creativity, and the work that defines our journey</span>
        </div>

        {
            selectProject &&
            <AddProject onChange={onChange} addProjectsOnSubmit={addProjectsOnSubmit} Project={Project} selectProject={selectProject} setSelectProject={setSelectProject} />
        }

        <div className=" capitalize text-textPrimary mt-5 ">
            {/* filter */}
            <ul className="grid grid-cols-2 text-xs gap-2 lg:grid-cols-5  lg:text-sm  mb-5">
                <li>All categories</li>
                <li>web templates</li>
                <li>ui elements</li>
                <li>logos</li>
                <li>drawing</li>
            </ul>
            <div className="mx-auto text-xs text-green-60 flex justify-end items-end  w-full m-5" >
                <div className="bg-green-400  px-8 py-2 rounded-3xl hover:bg-green-600 hover:text-green-400 g" onClick={() => setSelectProject('new project')}>add</div>
            </div>

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
                                    <div className="flex">
                                        <div className="mx-auto text-xs text-red-600 bg-red-400 w-fit px-4 py-2 rounded-3xl hover:bg-red-600 hover:text-red-400" onClick={() => deleteProject(project._id)}>delete</div>
                                        <div className="mx-auto text-xs text-green-600 bg-green-400 w-fit px-4 py-2 rounded-3xl hover:bg-green-600 hover:text-green-400" onClick={() => {
                                            setSelectProject('modify project')
                                            setModify(project._id)
                                        }}>modify</div>
                                    </div>
                                </div>
                            }
                        </div>

                    ))
                }
            </div>

        </div>

    </>)
}