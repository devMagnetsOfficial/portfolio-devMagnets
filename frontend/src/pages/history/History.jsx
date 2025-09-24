import Education from "./Education"
import Work from "./Work"
export default function History() {
    return (<>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <Education />
            <Work />

        </div>
    </>)
}