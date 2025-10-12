import LeftMenu from "../component/LeftMenu"
import RightMenu from "../component/RightMenu"
import Footer from "../component/Footer"
import { Outlet } from "react-router-dom"

export default function PublicLayout() {
    return (<>
        <div className="flex justify-between bg-dark">
            <LeftMenu />
            <div className="flex-1 overflow-scroll  ">

                <div className="flex-1 h-[100vh]  pt-0 lg:p-8">


                  <div  >
                    <div className=" h-[70px] mb-6 sticky w-full md:hidden top-0 left-0  z-[10]  text-xs bg-darkGray font-semibold capitalize flex items-center justify-center ">
                    </div>
                     <div className="p-4">
                        <Outlet/>
                     </div>
                  </div>


                    <Footer />
                </div>


            </div>

            <RightMenu />

        </div>


    </>)
}