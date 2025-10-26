import { useState } from "react";
import { FetchService } from "../../utilities/fetchCall";
import { useEffect } from "react";
import Btn from "../../utilities/Btn";
export default function Mails() {
    const backend = import.meta.env.VITE_BACKEND
    const [email, SetEmail] = useState([])
    const [filter, setFilter] = useState('contact')

    const changeFilter = (x) => {
        setFilter(x)
    }
    const fetchEmail = async () => {
        const req = await fetch(`${backend}/mail/fetch`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ filter })
        })
        const res = await req.json()
        SetEmail(res)
    }
    useEffect(() => {
        fetchEmail()
    }, [filter])
    const delEmail = async (id) => {
        const req = await fetch(`${backend}/mail/remove/${id}/${filter}`, {
            method: 'DELETE'
        })
        const res = await req.json()
        if (res.success) {
            alert('email deleted')
        }
        else {
            alert(res.err)
        }
    }
    return (
        <>
            <div className="capitalize text-textPrimary text-center">
                <h1 className="text-2xl">explore your emails</h1>
                <span className="text-xs">
                    view messages from contact, donation, and mentorship forms
                </span>
            </div>

            <div className="capitalize text-textPrimary mt-5">
                {/* Filter */}
                <ul className="grid grid-cols-2 text-xs gap-2 lg:grid-cols-3 lg:text-sm mb-5 text-center">
                    {['contact', 'donate', 'mentorship'].map((e, idx) => (
                        <li key={idx} className={`  border rounded-xl p-2  transition-all cursor-pointer ${filter === e ? 'bg-accent text-dark font-semibold' : 'bg-accent/10 hover:bg-accent  hover:text-bg'}`} onClick={() => changeFilter(e)}>
                            {e}
                        </li>
                    ))}

                </ul>
            </div>
            <div className=" text-center capitalize my-6 text-accent">  {filter} Email</div>


            {
                email.length != 0 ?
                    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                        {email.map((e, idx) => (
                            <div key={idx} className=" flex flex-col gap-4 p-8 text-sm bg-white/10 hover-effect">
                                <h1 className="text-textPrimary text-center">{e.name} <br /> ( {e.mail} )</h1>

                                <p className="text-textSecondary">{e.message}</p>
                                <div className="flex items-center justify-between">
                                    <a href={`mailto:${e.mail}`} className="w-fit text-accent uppercase hover:border-b-2 border-accent">reply&gt;</a>
                                    <Btn color='red' text='delete' onClick={
                                        () => {
                                            delEmail(e._id)
                                            fetchEmail()
                                        }
                                    } />
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <div className="capitalize text-white text-center ">no {filter} mails 🥲</div>
            }

        </>
    );
}
