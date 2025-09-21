import LeftMenu from "../component/LeftMenu"
import RightMenu from "../component/RightMenu"
import Footer from "../component/Footer"
import { Outlet } from "react-router-dom"

export default function PublicLayout() {
    return (<>
        <div className="flex justify-between bg-dark">
            <LeftMenu />
            <div  className="flex-1 overflow-scroll md:pr-[50px] ">
                <div className="flex-1 h-[70px]"></div>
                <Outlet />
                <Footer />
            </div>
            <RightMenu />
        </div>


    </>)
}