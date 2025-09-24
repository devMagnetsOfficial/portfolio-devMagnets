export default function Blog() {
    return (<>
        <div className=" w-full mt-5 capitalize">
            <div className="text-xl text-textPrimary capitalize mb-5">Blogs</div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 ">

                <div className=" text-textPrimary flex flex-col gap-4 p-8 text-sm bg-white/10">
                    <img src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    <div className="bg-dark w-fit px-5 py-1 rounded-2xl">sep 24,2020/design,events,technology</div>
                    <h1 className="">Web development</h1>
                    <p className="text-textSecondary">, tempore hic expedita adipisci vel aliquam! Sapiente veritatis libero eos quibusdam natus nemo incidunt dolore voluptas corporis minima rerum aut, obcaecati illo. Impedit, quisquam.</p>
                    <button type="button" className="w-fit text-accent uppercase">read more &gt;</button>
                </div>

                <div className=" text-textPrimary flex flex-col gap-4 p-8 text-sm bg-white/10">
                    <img src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    <div className="bg-dark w-fit px-5 py-1 rounded-2xl">sep 24,2020/design,events,technology</div>
                    <h1 className="">Web development</h1>
                    <p className="text-textSecondary">, tempore hic expedita adipisci vel aliquam! Sapiente veritatis libero eos quibusdam natus nemo incidunt dolore voluptas corporis minima rerum aut, obcaecati illo. Impedit, quisquam.</p>
                    <button type="button" className="w-fit text-accent uppercase">read more &gt;</button>
                </div>

                <div className=" text-textPrimary flex flex-col gap-4 p-8 text-sm bg-white/10">
                    <img src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    <div className="bg-dark w-fit px-5 py-1 rounded-2xl">sep 24,2020/design,events,technology</div>
                    <h1 className="">Web development</h1>
                    <p className="text-textSecondary">, tempore hic expedita adipisci vel aliquam! Sapiente veritatis libero eos quibusdam natus nemo incidunt dolore voluptas corporis minima rerum aut, obcaecati illo. Impedit, quisquam.</p>
                    <button type="button" className="w-fit text-accent uppercase">read more &gt;</button>
                </div>

                <div className=" text-textPrimary flex flex-col gap-4 p-8 text-sm bg-white/10">
                    <img src="https://arter.bslthemes.com/wp-content/uploads/2020/09/work-1.jpg" alt="" />
                    <div className="bg-dark w-fit px-5 py-1 rounded-2xl">sep 24,2020/design,events,technology</div>
                    <h1 className="">Web development</h1>
                    <p className="text-textSecondary">, tempore hic expedita adipisci vel aliquam! Sapiente veritatis libero eos quibusdam natus nemo incidunt dolore voluptas corporis minima rerum aut, obcaecati illo. Impedit, quisquam.</p>
                    <button type="button" className="w-fit text-accent uppercase">read more &gt;</button>
                </div>


            </div>

            <div className=" h-[100px] bg-card text-center flex justify-center relative my-5">
                <ul className="flex gap-2 h-full text-accent font-semibold justify-center items-center">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <button className="uppercase absolute right-6 text-accent top-[35%]" >next &gt;</button>
            </div>
        </div>
    </>)
}