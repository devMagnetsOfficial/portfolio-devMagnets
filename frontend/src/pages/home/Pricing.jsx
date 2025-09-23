import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
export default function Pricing() {
    return (<>
        <div className=" w-full mt-5 capitalize">
            <div className="text-xl text-textPrimary capitalize mb-5">price plans</div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 ">


                <div className=" text-textPrimary flex flex-col items-center gap-8 p-8 text-sm bg-white/10">
                    <h1 className="">Starter Price</h1>
                    <h2 className="text-2xl">$ <span className="text-accent font-semibold">free</span> hour <span className="text-accent font-semibold">*</span></h2>
                    <ul className="flex flex-col items-center gap-4">
                        <li className="flex gap-2 items-center "><FaCheck className="text-xs text-accent" /> <span>ui design</span></li>
                        <li className="flex gap-2 items-center "><FaCheck className="text-xs text-accent" /> <span>web development</span></li>
                        <li className="flex gap-2 items-center text-textSecondary"><FaXmark className="text-xs text-accent" /> <span>logo design</span></li>
                        <li className="flex gap-2 items-center text-textSecondary"><FaXmark className="text-xs text-accent" /> <span>seo optiization</span></li>
                        <li className="flex gap-2 items-center text-textSecondary"><FaXmark className="text-xs text-accent" /> <span>wordpress integration</span></li>
                    </ul>
                    <div className="flex flex-col items-center">
                        <button type="button" className="w-fit text-accent uppercase">order now &gt;</button>
                        <p className="text-xs text-textSecondary">* Free only when ordering paid services</p>
                    </div>
                </div>


                <div className=" text-textPrimary flex flex-col items-center gap-8 p-8 text-sm bg-white/10">
                    <h1 className="">Hour Payment</h1>
                    <h2 className="text-2xl">$ <span className="text-accent font-semibold">29</span> hour <span className="text-accent font-semibold">*</span></h2>
                    <ul className="flex flex-col items-center gap-4">
                        <li className="flex gap-2 items-center "><FaCheck className="text-xs text-accent" /> <span>ui design</span></li>
                        <li className="flex gap-2 items-center "><FaCheck className="text-xs text-accent" /> <span>web development</span></li>
                        <li className="flex gap-2 items-center text-textSecondary"><FaXmark className="text-xs text-accent" /> <span>logo design</span></li>
                        <li className="flex gap-2 items-center text-textSecondary"><FaXmark className="text-xs text-accent" /> <span>seo optiization</span></li>
                        <li className="flex gap-2 items-center text-textSecondary"><FaXmark className="text-xs text-accent" /> <span>wordpress integration</span></li>
                    </ul>
                    <div className="flex flex-col items-center">
                        <button type="button" className="w-fit text-accent uppercase">order now &gt;</button>
                    </div>
                </div>


                <div className=" text-textPrimary flex flex-col items-center gap-8 p-8 text-sm bg-white/10">
                    <h1 className="">Full Time</h1>
                    <h2 className="text-2xl">$ <span className="text-accent font-semibold">2999</span> hour <span className="text-accent font-semibold">*</span></h2>
                    <ul className="flex flex-col items-center gap-4">
                        <li className="flex gap-2 items-center "><FaCheck className="text-xs text-accent" /> <span>ui design</span></li>
                        <li className="flex gap-2 items-center "><FaCheck className="text-xs text-accent" /> <span>web development</span></li>
                        <li className="flex gap-2 items-center text-textSecondary"><FaXmark className="text-xs text-accent" /> <span>logo design</span></li>
                        <li className="flex gap-2 items-center text-textSecondary"><FaXmark className="text-xs text-accent" /> <span>seo optiization</span></li>
                        <li className="flex gap-2 items-center text-textSecondary"><FaXmark className="text-xs text-accent" /> <span>wordpress integration</span></li>
                    </ul>
                    <div className="flex flex-col items-center">
                        <button type="button" className="w-fit text-accent uppercase">order now &gt;</button>
                    </div>
                </div>


            </div>
        </div>
    </>)
}