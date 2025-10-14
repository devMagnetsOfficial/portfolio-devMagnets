import Education from "./Education"
import Work from "./Work"
export default function History() {
    return (<>
        <div className="capitalize text-textPrimary text-center ">
            <h1 className="text-2xl">my journey</h1>
            <span className="text-xs">a timeline of my education and professional experience</span>
        </div>
        <div className="grid grid-cols-1 w-[80vw] lg:grid-cols-2">
            <Education />
            <Work />

        </div>
    </>)
}