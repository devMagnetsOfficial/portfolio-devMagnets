

import ServiceTemplate from "./ServiceTemplate"
import { useEffect, useState } from "react"
export default function Service() {
    const backend = import.meta.env.VITE_BACKEND
    // to open or close the form
    const [isFormOpen, setFormOpen] = useState(false)

    // for add data from input tag
    const [ServiceData, setServiceData] = useState({ title: '', description: '' })
    // for display added data
    const [FetchServices, setFetchServices] = useState([])

    // handle input change
    const onChange = (e) => {
        const { name, value } = e.target
        setServiceData((prev) => ({ ...prev, [name]: value }))
        console.log(ServiceData)
    }
    // delete project

    const removeService = async (id) => {

        try {
            const req = await fetch(`${backend}/service/remove/${id}`, {
                method: 'DELETE'
            })
            const res = await req.json()
            if (res.success) {
                alert('service is deleted')
                FetchService()
            } else {
                console.log(res.err)
            }


        } catch (err) {
            console.log(err)
        }
    }
    // fetch project
    const FetchService = async () => {
        console.log('fetching services...')
        try {
            const req = await fetch(`${backend}/service/fetch`, {
                method: 'GET'
            })
            const res = await req.json()
            if (res.success) {
                setFetchServices(res.services)

            }

        } catch (err) {
            console.log(res.err)
        }
    }

    useEffect(() => {
        FetchService()
        console.log(FetchServices)
    }, [])


    // add request/modify
    // fetch project
    const FetchServiceOne = async (id) => {
        console.log('fetching services...')
        try {
            const req = await fetch(`${backend}/service/fetchOne`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
            const res = await req.json()
            if (res.success) {
                setServiceData(res.service[0])
            }
        } catch (err) {
            console.log(res.err)
        }
    }
    const [isModify, setModify] = useState()
    const addService = async (e) => {
        e.preventDefault()
        try {
            const isAdd = !isModify ? 'add' : 'modify'
            const url = `${backend}/service/${isAdd}`
            const data = !isModify ? ServiceData : { ...ServiceData, isModify }
            const method = !isModify ? 'POST' : 'PATCH'
            const req = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const res = await req.json()
            if (res.success) {
                if (isAdd) {
                    alert('service is added')
                }
                else {
                    alert('service is update')
                    setModify(false)
                }
                setFormOpen(false)
                FetchService()
            } else {
                console.log(res.err)
            }
        } catch (err) {
            console.log(err)
        }

    }

    return (<>
        {isFormOpen && <ServiceTemplate setFormOpen={setFormOpen} onChange={onChange} onSubmit={addService} data={ServiceData} />}

        <div className=" w-full mt-5 capitalize relative ">

            <div className="bg-green-400 px-8 text-sm py-2 rounded-3xl hover:bg-green-600 hover:text-green-400 cursor-pointer text-dark  absolute  right-0"
                onClick={() => {
                    setFormOpen(true)
                    setServiceData({ title: '', description: '' })
                }
                }
            >add  </div>

            <div className="text-xl text-textPrimary capitalize mb-5 ">my serivces</div>

            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                {
                    FetchServices.map((e, idx) => (
                        <div key={idx} className=" flex flex-col gap-4 p-8 text-sm bg-white/10 hover-effect">
                            <h1 className="text-textPrimary">{e.title}</h1>
                            <p className="text-textSecondary">{e.description}</p>
                            <a href="/contact" className="w-fit text-accent uppercase hover:border-b-2 border-accent">order now &gt;</a>
                            <div className="flex justify-between">
                                <div className="bg-red-400 px-8 text-sm py-2 rounded-3xl hover:bg-red-600 hover:text-red-400 cursor-pointer text-dark" onClick={async () => {
                                    removeService(e._id)
                                }}>delete </div>
                                <div className="bg-orange-400 px-8 text-sm py-2 rounded-3xl hover:bg-orange-600 hover:text-orange-400 cursor-pointer text-dark" onClick={async () => {
                                    setModify(e._id)
                                    await FetchServiceOne(e._id)
                                    setFormOpen(true)
                                }
                                }>modify </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    </>)
}