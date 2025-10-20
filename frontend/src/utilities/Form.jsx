import { MdClose } from "react-icons/md"
import InputTag from "./InputTag"
export default function Form({ onSubmit, actionText,onChange, fields, setFormOpen,data }) {

    return (<>
        <div className="bg-dark/70 backdrop-blur-lg w-full h-full inset-0 absolute z-[119]"></div>
        <form onSubmit={onSubmit} className="mb-5 bg-card p-5 gap-5 md:gap-10 min-h-[49vh] flex flex-col absolute h-fit md:w-[50vw] inset-0 m-10 md:m-auto z-[120]">
            <div className="flex justify-between capitalize text-xl md:text-2xl text-gray-300 items-center">
                <h1>add service</h1>
                <MdClose className="w-6 h-6 hover:bg-gray-400/20 hover:text-dark rounded-xl cursor-pointer" onClick={() => setFormOpen(false)} />
            </div>
            {fields.map((field, idx) => (
                <div key={idx}>
                    <InputTag name={field.name} type={field.type} onChange={onChange} Icon={field.Icon} value={data[field.name]} />
                </div>
            ))}

            <button type="submit" className="bg-accent w-fit px-10 py-2 capitalize text-dark font-semibold" >{actionText}</button>
        </form>
    </>)
}