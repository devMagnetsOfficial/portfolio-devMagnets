import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import mail from "../../utilities/mail";
import { steps,mentors } from "./mentoshipData";
export default function Mentorship() {


    const [messageSentStatus, setMessageSentStatus] = useState(false)
    const Form_Variable = { name: '', mail: '', message: '', phoneNo: '' }
    const [Form, SetForm] = useState(Form_Variable)
    const onChange = (e) => {
        const { name, value } = e.target
        SetForm((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = async (e) => {
        setMessageSentStatus(true)
        e.preventDefault()
        await mail(Form, 'mentorship')
        e.target.reset()
        SetForm(Form_Variable)
        setMessageSentStatus(false)
    }

    return (<>
        <div className="capitalize text-textPrimary text-center  ">
            <h1 className="text-2xl ">join our mentorship program</h1>
            <span className="text-xs">learn from experienced mentors and accleate your career growth</span>
        </div>
        {/* meet our mentor */}
        {/* how it works section */}
        <div className=" w-full my-5 capitalize">
            <div className="text-xl text-textPrimary capitalize mb-5 text-center">meet our mentors</div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                {
                    mentors.map((e, idx) => (
                        <div key={idx} className=" flex flex-col gap-2 px-8 py-4 text-sm  bg-white/10 hover-effect items-center">
                            <img src={e.img} alt="" className="w-[100px] h-[100px] rounded-[100%] object-cover" />
                            <h1 className="text-textPrimary text-xl">{e.name}</h1>
                            <p className="text-textSecondary">{e.designation}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* how it works section */}
        <div className=" w-full my-5 capitalize">
            <div className="text-xl text-textPrimary capitalize mb-5 text-center">how it works</div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                {
                    steps.map((e, idx) => (
                        <div key={idx} className=" flex flex-col gap-4 px-8 py-4 text-sm  bg-white/10 hover-effect">
                            <h1 className="text-textPrimary text-lg md:text-xl">step {e.step}</h1>
                            <p className="text-textSecondary">{e.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* apply for mentorship */}
        <div className=" text-textPrimary capitalize ">
            <h1 className="text-xl mb-5">Apply for Mentorship</h1>

            <form onSubmit={handleSubmit} className="mb-5 bg-card p-5   gap-5 md:gap-10 min-h-[49vh] flex flex-col">
                <label htmlFor="name" className="flex items-center">
                    <div className="w-10 h-10 bg-dark  flex items-center justify-center"><FaUser className="text-lg " /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type="text" onInput={onChange} name="name" id="name" placeholder="Name" />
                </label>
                <label htmlFor="mail" className="flex items-center">
                    <div className="w-10 h-10 bg-dark flex items-center justify-center"><MdEmail className="text-lg" /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type="text" onInput={onChange} name="mail" id="mail" placeholder="Mail" />
                </label>
                <label htmlFor="phoneNo" className="flex items-center">
                    <div className="w-10 h-10 bg-dark flex items-center justify-center"><MdPhoneInTalk className="text-lg" /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type='tel' onInput={onChange} name="phoneNo" id="phoneNo" placeholder="Phone Number" />
                </label>
                <label htmlFor="message" className="flex re">
                    <div className="w-10  bg-dark   flex pt-4 justify-center"><FaMessage className="text-lg" /></div>
                    <textarea className="min-h-[200px] pl-4 pt-2 bg-darkGray w-full h-10" onInput={onChange} name="message" id="message" placeholder="Goal / Message"></textarea>
                </label>
                <button type={'submit'} className="bg-accent w-fit px-10 py-2 capitalize text-dark font-semibold ">
                    {messageSentStatus ? 'Applying please wait...' : 'Apply'}
                </button>

            </form>

        </div>

    </>)
}