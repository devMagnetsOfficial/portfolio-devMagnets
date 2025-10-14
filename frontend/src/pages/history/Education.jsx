import educations from "./educationData"
export default function Education() {
    return (<>
        <div className=" w-full mt-5 capitalize">
      

            <div className="text-xl text-textPrimary capitalize mb-5">Education</div>
            <div className="flex  flex-col gap-5 w-fit lg:w-fit mb-10 relative ">
                <div className="text-card w-2 h-full bg-card rounded-xl absolute -right-10"></div>

                {educations.map((education, idx) => (
                    <div key={idx} className=" text-textPrimary  lg:w-[30vw]  flex flex-col gap-4 p-8 text-sm bg-white/10">
                        <div className="flex justify-between relative  items-center">
                            <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
                                <div>
                                    <h1 className="font-semibold">{education.title}</h1>
                                    <span className="text-textSecondary">{education.author}</span>

                                </div>
                                <div className="bg-dark w-fit px-5 py-1  rounded-2xl flex items-center">{education.duration}</div>
                            </div>
                            <span className="absolute text-accent flex justify-center items-center bg-accent rounded-[100%] w-5 h-5 -right-20">
                                <span className="w-3 h-3 rounded-full bg-black"></span>
                            </span>
                        </div>
                        <p className="text-textSecondary">, tempore hic expedita adipisci vel aliquam! Sapiente veritatis libero eos quibusdam natus nemo incidunt dolore voluptas corporis minima rerum aut, obcaecati illo. Impedit, quisquam.</p>
                        <button type="button" className="w-fit text-accent uppercase">{education.educationQualification} &gt;</button>

                    </div>
                ))}
            </div>
        </div>
    </>)
}