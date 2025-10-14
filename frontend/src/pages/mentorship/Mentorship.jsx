import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
export default function Mentorship() {
    const steps = [
        { step: 1, desc: 'sign up and tail us your learning goals.' },
        { step: 2, desc: 'get matched with a mentor based on your needs.' },
        { step: 3, desc: 'start one-on-one mentorship sessions and grow.' }
    ]
    const mentors = [
        { name: 'amit', designation: 'web development', img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/east-indian-young-man-matthew-bamberg.jpg' },
        { name: 'rahul kumar', designation: 'ui/ux design', img: 'https://tse4.mm.bing.net/th/id/OIP.7ak06e3GyqJthLFeoMkWCQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3' },
        { name: 'aansh singh', designation: 'data science', img: 'https://yt3.googleusercontent.com/ytc/AIdro_kXOPTxg8lLuMgEwEpN0WdyjLt17VkEMq_c7-EpVx45qNM=s900-c-k-c0x00ffffff-no-rj' }
    ]
    const [Form, SetForm] = useState({ name: '', mail: '', message: '', phoneNo: '' })
    const onChange = (e) => {
        const { name, value } = e.target
        SetForm((prev) => ({ ...prev, [name]: value }))

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:2030/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Form)
            })
            const response = await res.json()
            if (response.success) {
                alert('message send successfully')
            }
            else {
                alert('message fail to send!')
            }

        } catch (err) {
            console.log('err', err)
        }
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

            <form onSubmit={handleSubmit} className="mb-5 bg-card p-5  gap-10 min-h-[49vh] flex flex-col">
                <label htmlFor="name" className="flex items-center">
                    <div className="w-10 h-10 bg-dark  flex items-center justify-center"><FaUser className="text-lg " /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type="text" onChange={onChange} name="name" id="name" placeholder="Name" />
                </label>
                <label htmlFor="mail" className="flex items-center">
                    <div className="w-10 h-10 bg-dark flex items-center justify-center"><MdEmail className="text-lg" /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type="text" onChange={onChange} name="mail" id="mail" placeholder="Mail" />
                </label>
                <label htmlFor="phoneNo" className="flex items-center">
                    <div className="w-10 h-10 bg-dark flex items-center justify-center"><MdPhoneInTalk className="text-lg" /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type='tel' onChange={onChange} name="phoneNo" id="phoneNo" placeholder="Phone Number" />
                </label>
                <label htmlFor="message" className="flex re">
                    <div className="w-10  bg-dark   flex pt-4 justify-center"><FaMessage className="text-lg" /></div>
                    <textarea className="min-h-[200px] pl-4 pt-2 bg-darkGray w-full h-10" onChange={onChange} name="message" id="message" placeholder="Goal / Message"></textarea>
                </label>
                <button type={'submit'} className="bg-accent w-fit px-10 py-2 capitalize text-dark font-semibold ">Apply</button>

            </form>

        </div>

    </>)
}