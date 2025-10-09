import LeftMenu from "../component/LeftMenu"
import RightMenu from "../component/RightMenu"
import Footer from "../component/Footer"
import { Outlet } from "react-router-dom"

export default function PublicLayout() {
    return (<>
        <div className="flex justify-between bg-dark">
            <LeftMenu />
            <div className="flex-1 overflow-scroll lg:pr-[50px] ">

                <div className="flex-1 h-[100vh] p-4 lg:p-8">
                    <div className="fixed  top-0 left-0 z-[1]  w-full bg-dark h-[70px] "></div>
                    <div className=" mt-[70px]">
                        <Outlet />
                    </div>

                    <Footer />
                </div>


            </div>
            <RightMenu />
        </div>


    </>)
}