import services from "./serviceData"
export default function Service() {

    return (<>
        <div className=" w-full mt-5 capitalize">
            <div className="text-xl text-textPrimary capitalize mb-5">my serivces</div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 ">

                {
                    services.map((e, idx) => (
                        <div key={idx} className=" flex flex-col gap-4 p-8 text-sm bg-white/10">
                            <h1 className="text-textPrimary">{e.title}</h1>
                            <p className="text-textSecondary">{e.description}</p>
                            <button type="button" className="w-fit text-accent uppercase">order now &gt;</button>
                        </div>
                    ))
                }




            </div>
        </div>
    </>)
}