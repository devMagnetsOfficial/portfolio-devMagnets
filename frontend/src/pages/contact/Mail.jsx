import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
export default function Mail() {
    const [Form, SetForm] = useState({ name: '', mail: '', message: '' })
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
            else{
                alert('message fail to send!')
            }

        } catch (err) {
            console.log('err', err)
        }
    }
    return (<>
        <div className=" text-textPrimary capitalize ">
            <h1 className="text-xl mb-5">contact information</h1>

            <form onSubmit={handleSubmit} className="mb-5 bg-card p-5  gap-10 min-h-[49vh] flex flex-col">
                <label htmlFor="name" className="flex items-center">
                    <div className="w-10 h-10 bg-dark  flex items-center justify-center"><FaUser className="text-lg " /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type="text" onChange={onChange} name="name" id="name" placeholder="Name" />
                </label>
                <label htmlFor="mail" className="flex items-center">
                    <div className="w-10 h-10 bg-dark flex items-center justify-center"><MdEmail className="text-lg" /></div>
                    <input className="bg-darkGray w-full h-10 pl-4" type="text" onChange={onChange} name="mail" id="mail" placeholder="Mail" />
                </label>
                <label htmlFor="message" className="flex re">
                    <div className="w-10  bg-dark   flex pt-4 justify-center"><FaMessage className="text-lg" /></div>
                    <textarea className="min-h-[200px] pl-4 pt-2 bg-darkGray w-full h-10" onChange={onChange} name="message" id="message" placeholder="Message"></textarea>
                </label>
                <button type={'submit'} className="bg-accent w-fit px-10 py-2 capitalize text-dark font-semibold ">send message</button>

            </form>

        </div>

    </>)
}