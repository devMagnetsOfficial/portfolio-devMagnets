import { FaDownload, FaGithub, FaLinkedin, FaCheck } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

export default function App() {
  return (<>
    <div className=" capitalize w-[300px] text-white text-sm  bg-[#1f2937] border-2 h-[100vh] border-black  ">


      {/* brief bio */}
      <div className="bg-[#1f2937] flex items-center justify-center h-[30%]  ">
        <div className="flex flex-col items-center gap-2">
          <img className="w-[100px] rounded-[100%]" src="https://pics.craiyon.com/2023-12-13/y2y9z8iKQp-lMupp8bBypg.webp" alt="" />
          <h1 className="text-lg font-semibold">abhishek singh</h1>
          <div className="text-[#cacace] ">
            <p>mern developer</p>
            <p>ui/ux designer</p>
          </div>
        </div>
      </div>

      {/* scroll inside brief bio and social media link */}
      <div className="h-[65%] p-4 overflow-scroll overflow-x-hidden bg-[#54595f] ">

        {/* basic address and detail */}
        <div className=" flex flex-col gap-2 my-5">
          <div className="flex justify-between">
            <span className="font-semibold">Residence</span>
            <span>India</span>
          </div>
          <div className="flex justify-between ">
            <span className="font-semibold">City</span>
            <span>Noida</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">age</span>
            <span>20</span>
          </div>
        </div>

        <hr className="bg-gray-100 w-full h-[1px] my-5" />

        {/* langauge progress bar */}
        <div className=" flex gap-5">

          <div className="flex flex-col  items-center w-fit">
            <svg className="w-16 h-16 ">
              <circle cx='50%' cy='50%' r='40%' fill="none" stroke="gray" stroke-width='4px' />
              <circle cx='50%' cy='50%' r='40%' fill="none" stroke="gold" stroke-width='4px' strokeLinecap="round" strokeDasharray={2 * Math.PI * 40} strokeDashoffset={2 * Math.PI * 40 * 0.6} />
              <text x="50%" y="50%" textAnchor="middle" dy='8px' className=" fill-white">40%</text>
            </svg>
            <span>English</span>
          </div>
          <div className="flex flex-col  items-center  w-fit">
            <svg className="w-16 h-16 ">
              <circle cx='50%' cy='50%' r='40%' fill="none" stroke="gray" stroke-width='4px' />
              <circle cx='50%' cy='50%' r='40%' fill="none" stroke="gold" stroke-width='4px' strokeLinecap="round" strokeDasharray={2 * Math.PI * 40} strokeDashoffset={2 * Math.PI * 40 * 0.6} />
              <text x="50%" y="50%" textAnchor="middle" dy='8px' className=" fill-white">40%</text>
            </svg>
            <span>Hindi</span>
          </div>
      

        </div>

        <hr className="bg-gray-100 w-full h-[1px] my-5" />

        {/* language progress bar */}
        <div className="flex flex-col gap-5">

          <div >
            <div className="flex justify-between">
              <span className="font-semibold">html</span>
              <span>90%</span>
            </div>
            <div className="w-full h-2 border-2 border-black overflow-hidden">
              <div className="bg-yellow-200 w-[90%] h-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-semibold">css</span>
              <span>90%</span>
            </div>
            <div className="w-full h-2 border-2 border-black overflow-hidden">
              <div className="bg-yellow-200 w-[90%] h-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-semibold">js</span>
              <span>90%</span>
            </div>
            <div className="w-full h-2 border-2 border-black overflow-hidden">
              <div className="bg-yellow-200 w-[90%] h-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-semibold">express</span>
              <span>90%</span>
            </div>
            <div className="w-full h-2 border-2 border-black overflow-hidden">
              <div className="bg-yellow-200 w-[90%] h-full"></div>
            </div>
          </div>

        </div>

        <hr className="bg-gray-100 w-full h-[1px] my-5" />

        {/* check list */}
        <div className="">
          <div className="flex items-center gap-5">
            <FaCheck className="text-yellow-300" />mern stack
          </div>
          <div className="flex items-center gap-5">
            <FaCheck className="text-yellow-300" />e-commerce
          </div>
          <div className="flex items-center gap-5">
            <FaCheck className="text-yellow-300" />erp
          </div>
          <div className="flex items-center gap-5">
            <FaCheck className="text-yellow-300" />custom websolution
          </div>
        </div>

        <hr className="bg-gray-100 w-full h-[1px] my-5" />

        {/* download cv button */}
        <div>
          <button className="flex gap-2  w-full items-center" type="button">
            <span>Download cv</span>
            <FaDownload className="text-xs" />
          </button>
        </div>

        <hr className="bg-gray-100 w-full h-[1px] my-5" />


      </div>

      {/* social media link */}
      <div className="bg-[#1f2937] h-[5%] flex  items-center">
        <ul className="flex justify-center gap-5  w-full  ">
          <li><a href=""><FaGithub /></a></li>
          <li><a href=""><FaSquareXTwitter /></a></li>
          <li><a href=""><FaSquareInstagram /></a></li>
          <li><a href=""><FaLinkedin /></a></li>
        </ul>
      </div>



    </div>


  </>)
}