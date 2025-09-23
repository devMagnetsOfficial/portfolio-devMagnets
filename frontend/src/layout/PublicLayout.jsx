import LeftMenu from "../component/LeftMenu"
import RightMenu from "../component/RightMenu"
import Footer from "../component/Footer"
import { Outlet } from "react-router-dom"

export default function PublicLayout() {
    return (<>
        <div className="flex justify-between bg-dark">
            <LeftMenu />
            <div className="flex-1 overflow-scroll md:pr-[50px] ">
                <div className="flex-1 h-[100vh] p-4 md:p-8">
                    <div className=" mt-[60px] md:mt-0">
                        <Outlet />
                    </div>
                    <Footer />
                </div>


            </div>
            <RightMenu />
        </div>


    </>)
}