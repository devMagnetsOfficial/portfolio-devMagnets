export default function Btn({ color, text, onClick }) {
    return (<>
        <div className={`bg-${color}-400 px-8 text-sm py-2 rounded-3xl hover:bg-${color}-600 hover:text-${color}-400 cursor-pointer text-dark `} onClick={onClick}>{text}</div>
    </>)
}