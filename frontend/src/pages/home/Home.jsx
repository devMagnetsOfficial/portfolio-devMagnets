import Intro from "./intro"
import Service from "./Service"
import Pricing from "./Pricing"
import Recommendation from "./Recommendation"
export default function Home() {
    return (<>
        <Intro />
        <Service />
        <Pricing />
        <Recommendation/>
    </>)
}