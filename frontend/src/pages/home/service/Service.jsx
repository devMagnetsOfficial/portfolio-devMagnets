

import ServiceTemplate from "./ServiceTemplate"
import { useEffect, useState } from "react"
import { FetchService, removeService, FetchServiceOne, addService } from "../../../utilities/fetchCall"

export default function Service() {
    const backend = import.meta.env.VITE_BACKEND
    // to open or close the form
    const [isFormOpen, setFormOpen] = useState(false)
    // for add data from input tag
    const [ServiceData, setServiceData] = useState({ title: '', description: '' })
    // for display added data
    const [FetchServices, setFetchServices] = useState([])
    // for modifying 
    const [isModify, setModify] = useState()
    // handle input change
    const onChange = (e) => {
        const { name, value } = e.target
        setServiceData((prev) => ({ ...prev, [name]: value }))
        console.log(ServiceData)
    }
    // fetch all card 
    const fetchAllServiceCard = async () => {
        FetchService(`${backend}/service/fetch`, setFetchServices)
    }
    useEffect(() => {
        fetchAllServiceCard()
        console.log(FetchServices)
    }, [])



    // on submit for add or modfying data
    const submit = async (e) => {
        e.preventDefault()
        await addService(`${backend}/service`, isModify, setModify, ServiceData)
        setFormOpen(false)
        fetchAllServiceCard()
    }

    return (<>
        {isFormOpen && <ServiceTemplate setFormOpen={setFormOpen} onChange={onChange} onSubmit={submit} data={ServiceData} />}

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
                                    await removeService(`${backend}/service/remove`, e._id)
                                    fetchAllServiceCard()
                                }}>delete </div>
                                <div className="bg-orange-400 px-8 text-sm py-2 rounded-3xl hover:bg-orange-600 hover:text-orange-400 cursor-pointer text-dark" onClick={async () => {
                                    setModify(e._id)
                                    await FetchServiceOne(`${backend}/service/fetchOne`, e._id, setServiceData)
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