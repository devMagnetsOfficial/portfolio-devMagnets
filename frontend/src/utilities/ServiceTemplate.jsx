import {  MdTitle, MdDescription } from "react-icons/md"

import Form from "./Form"
export default function ServiceTemplate({ setFormOpen,field, onSubmit,onChange, data }) {

    return (<>
        <div className="bg-dark/70 backdrop-blur-lg w-full h-full inset-0 absolute z-[119]"></div>
        <Form actionText='add service' fields={field} setFormOpen={setFormOpen}  onSubmit={onSubmit} onChange={onChange} data={data} />

    </>)
}