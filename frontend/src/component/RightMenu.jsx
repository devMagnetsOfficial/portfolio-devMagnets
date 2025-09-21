
import { NavLink } from 'react-router-dom'
import { useState } from "react"
import { MdMenu, MdClose } from 'react-icons/md'
export default function RightMenu() {

    const [isMenubarClicked, setMenubarClicked] = useState(false)
    const setMenubar = () => {
        setMenubarClicked(!isMenubarClicked)
    }
    return (<>
        {/* <LeftMenu/> */}
        <div className={`bg-darkGray h-[100vh] ${isMenubarClicked ? 'w-[250px]' : 'w-[70px]'} transition-all duration-1000 ease-in-out absolute right-0 `}>
            <div className={`bg-dark flex ${isMenubarClicked ? 'pl-4' : 'justify-center'} h-[100px] items-center`}>
                {isMenubarClicked ?
                    <MdClose className="text-2xl text-textSecondary" onClick={setMenubar} />
                    :
                    <MdMenu className="text-2xl text-textSecondary" onClick={setMenubar} />
                }

            </div>

            <div className="flex justify-center  items-center  text-textSecondary uppercase  min-h-[100px]">
                {isMenubarClicked ?
                    <>
                        <div className="flex flex-col w-full">
                            <div className="mt-[100px]  w-full p-5 text-sm ">
                                <ul className="flex flex-col gap-2 ">
                                    <NavLink to='/' className={({ isActive }) => (isActive ? 'text-white font-semibold' : '')}>Home</NavLink>
                                    <NavLink to='/portfolio' className={({ isActive }) => (isActive ? 'text-[white]  font-semibold' : '')}>Portfolio</NavLink>
                                    <NavLink to='/history' className={({ isActive }) => (isActive ? 'text-white  font-semibold' : '')}>History</NavLink>
                                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-white  font-semibold' : '')}>Blog</NavLink>
                                    <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-white  font-semibold' : '')}>Contact</NavLink>
                                </ul>
                            </div>
                            <hr className="bg-textSecondary w-full h-[1px] my-5" />
                            <div className=" w-full p-5 text-sm ">
                                <ul className="flex flex-col gap-2 ">
                                    <NavLink to='/donate' className={({ isActive }) => (isActive ? 'text-white font-semibold' : '')}>donate</NavLink>
                                    <NavLink to='/mentorship' className={({ isActive }) => (isActive ? 'text-[white]  font-semibold' : '')}>MentorShip</NavLink>
                                   </ul>
                            </div>


                        </div>  </>
                    :
                    <>
                        <span className={`origin-center transition-transform duration-1000 ease-in-out ${isMenubarClicked?'rotate-0':'rotate-90'}`}>home</span>
                    </>}
            </div>


        </div>

    </>)
}