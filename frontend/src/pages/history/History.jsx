import Education from "./Education"
import Work from "./Work"
export default function History() {
    return (<>
        <div className="grid grid-cols-1 w-[80vw] lg:grid-cols-2">
            <Education />
            <Work />

        </div>
    </>)
}