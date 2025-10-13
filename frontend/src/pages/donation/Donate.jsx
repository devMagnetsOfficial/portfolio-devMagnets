import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { PiHandHeartFill } from "react-icons/pi";
import { RiSubtractFill } from "react-icons/ri";
export default function Donate() {
    const [Form, SetForm] = useState({ name: '', mail: '', message: '', amount: 100 })

    const onChange = (e) => {
        const { name, value } = e.target
        SetForm((prev) => ({ ...prev, [name]: value }))

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('http://localhost:2030/donate', {
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
        <div className=" text-textPrimary capitalize ">
            <div className="mb-5 flex flex-col gap-2 ">
                <div className="flex items-center gap-2 text-xl justify-center">
                    <PiHandHeartFill className="text-3xl" />
                    <h1 className="text-2xl"> support our cause</h1>
                </div>
                <p className="text-xs text-gray-200">Your donation helps us continue our work and reach more people. Thank you for your support!</p>

            </div>
            
            <form onSubmit={handleSubmit} className="mb-5 bg-card p-5  gap-10 min-h-[49vh] flex flex-col">
                <label htmlFor="name" className="flex items-center">
                    <div className="w-10 h-10 bg-dark  flex items-center justify-center"><FaUser className="text-lg " /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type="text" onChange={onChange} name="name" id="name" placeholder="Name" />
                </label>
                <label htmlFor="mail" className="flex items-center">
                    <div className="w-10 h-10 bg-dark flex items-center justify-center"><MdEmail className="text-lg" /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type="text" onChange={onChange} name="mail" id="mail" placeholder="Mail" />
                </label>
                <label htmlFor="amount" className="flex items-center">
                    <div className="w-10 h-10 bg-dark flex items-center justify-center"><TbCoinRupeeFilled className="text-lg" /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type="number" onChange={onChange} name="amount" id="amount" placeholder='100' />
                </label>





                <label htmlFor="message" className="flex re">
                    <div className="w-10  bg-dark   flex pt-4 justify-center"><FaMessage className="text-lg" /></div>
                    <textarea className="min-h-[200px] pl-4 pt-2 bg-darkGray w-full h-10" onChange={onChange} name="message" id="message" placeholder="Message"></textarea>
                </label>

                <span className="flex items-center gap-2 italic text-xs">
                    You're about to Donate
                    <div className="flex items-center gap-2 bg-green-500/80 px-2 py-1 rounded-xl italic w-fit"><TbCoinRupeeFilled className="text-xl" />{Form.amount} </div>
                    INR to devMagnets!
                </span>

                {/* submit button */}
                <button type={'submit'} className=" bg-accent w-fit px-10 py-2 capitalize text-dark font-semibold flex gap-2 items-center ">
                    <span>Donate Now</span>
                </button>

            </form>

        </div>
    </>
    )
}