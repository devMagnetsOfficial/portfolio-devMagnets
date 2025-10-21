import {  MdTitle, MdDescription } from "react-icons/md"

import Form from "../../../utilities/Form"
export default function ServiceTemplate({ setFormOpen, onSubmit,onChange, data }) {
    const field = [
        { name: 'title', type: 'text', Icon: MdTitle },
        { name: 'description', type: 'text', Icon: MdDescription }
    ]
    return (<>
        <div className="bg-dark/70 backdrop-blur-lg w-full h-full inset-0 absolute z-[119]"></div>
        <Form actionText='add service' fields={field} setFormOpen={setFormOpen}  onSubmit={onSubmit} onChange={onChange} data={data} />

    </>)
}