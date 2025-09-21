
import { NavLink } from 'react-router-dom'
import { useState } from "react"
import { MdMenu, MdClose } from 'react-icons/md'
export default function RightMenu() {

    const [isMenubarClicked, setMenubarClicked] = useState(false)
    const setMenubar = () => {
        setMenubarClicked(!isMenubarClicked)
    }

    return (<>

        <div className={`bg-darkGray   ${isMenubarClicked ? 'w-[250px] h-[100vh]' : 'w-[50px] h-[0px] '} transition-width duration-1000 ease-in-out absolute    right-0`}>
            <div className={`bg-dark flex ${isMenubarClicked ? 'pl-4' : 'justify-center'} h-[70px] items-center`}>
                {isMenubarClicked ?
                    <MdClose className="md:text-2xl text-textSecondary" onClick={setMenubar} />
                    :
                    <MdMenu className="md:text-2xl text-textSecondary" onClick={setMenubar} />
                }

            </div>

            <div className="flex justify-center   items-center  text-textSecondary uppercase  min-h-[100px]">
               {!isMenubarClicked&& <div className={` rotate-90 md:block  hidden`}>home</div>}

                {isMenubarClicked &&
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
                        </div>
                    </>
                }
            </div>


        </div>

    </>)
}