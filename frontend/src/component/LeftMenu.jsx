import { FaDownload, FaGithub, FaLinkedin, FaCheck } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

export default  function LeftMenu(){
    return(<>
       <div className="capitalize w-[300px] text-white text-sm   border-2 h-[100vh]  ">


      {/* brief bio */}
      <div className="bg-dark flex items-center justify-center h-[30%]  ">
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
      <div className="h-[65%] p-4 overflow-scroll overflow-x-hidden bg-darkGray ">

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
              <circle cx='50%' cy='50%' r='25' fill="none" stroke="gray"  strokeWidth='4px' />
              <circle cx='50%' cy='50%' r='25' fill="none" stroke="gold" strokeWidth='4px' strokeLinecap="round" strokeDasharray={2 * Math.PI * 25} strokeDashoffset={2 * Math.PI * 25*0.2} />
              <text x="50%" y="50%" textAnchor="middle" dy='8px' className=" fill-white">80%</text>
            </svg>
            <span>English</span>
          </div>

          <div className="flex flex-col  items-center  w-fit">
            <svg className="w-16 h-16 ">
              <circle cx='50%' cy='50%' r='25' fill="none" stroke="gray" strokeWidth='4px' />
              <circle cx='50%' cy='50%' r='25' fill="none" stroke="gold" strokeWidth='4px' strokeLinecap="round" strokeDasharray={2 * Math.PI * 25} strokeDashoffset={2 * Math.PI * 25 * 0} />
              <text x="50%" y="50%" textAnchor="middle" dy='8px' className=" fill-white">100%</text>
            </svg>
            <span>Hindi</span>
          </div>
          
      

        </div>

        <hr className="bg-gray-100 w-full h-[1px] my-5" />

        {/* language progress bar */}
        <div className="flex flex-col gap-5">

          <div >
            <div className="flex  justify-between">
              <span className="font-semibold">html</span>
              <span>90%</span>
            </div>
            <div className="w-full h-1 mt-2 overflow-hidden bg-dark">
              <div className="bg-accent w-[90%] h-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-semibold">css</span>
              <span>90%</span>
            </div>
            <div className="w-full h-1 mt-2  overflow-hidden bg-dark">
              <div className="bg-accent w-[90%] h-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-semibold">js</span>
              <span>90%</span>
            </div>
            <div className="w-full h-1 mt-2  overflow-hidden bg-dark">
              <div className="bg-accent w-[90%] h-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-semibold">express</span>
              <span>90%</span>
            </div>
            <div className="w-full h-1 mt-2   overflow-hidden bg-dark">
              <div className="bg-accent w-[90%] h-full"></div>
            </div>
          </div>

        </div>

        <hr className="bg-gray-100 w-full h-[1px] my-5" />

        {/* check list */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-5">
            <FaCheck className="text-accent" />mern stack
          </div>
          <div className="flex items-center gap-5">
            <FaCheck className="text-accent" />e-commerce
          </div>
          <div className="flex items-center gap-5">
            <FaCheck className="text-accent" />erp
          </div>
          <div className="flex items-center gap-5">
            <FaCheck className="text-accent" />custom websolution
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
      <div className="bg-dark h-[5%] flex  items-center">
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