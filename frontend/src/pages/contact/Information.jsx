export default function Information() {
    return (<>
        <div className=" text-textPrimary  ">
            <div className="capitalize text-textPrimary text-center py-4">
                <h1 className="text-2xl">get in touch with us</h1>
                <span className="text-xs">fill out the form below and we'll get back to you soon</span>
            </div>

  
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5 text-sm">

                <div className=" flex flex-col gap-2 bg-card p-5">
                    <div className="flex justify-between">
                        <span className="font-semibold">Country</span>
                        <span className="text-[#cacace]">India</span>
                    </div>
                    <div className="flex justify-between ">
                        <span className="font-semibold">City</span>
                        <span className="text-[#cacace]">Noida</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">District</span>
                        <span className="text-[#cacace]">Gautam Buddha Nagar</span>
                    </div>
                </div>

                <div className=" flex flex-col gap-2 bg-card p-5">
                    <div className="flex justify-between">
                        <span className="font-semibold">Email</span>
                        <span className="text-[#cacace]">devmagnets.mail@gmail.com</span>
                    </div>
                    <div className="flex justify-between ">
                        <span className="font-semibold">Instagram</span>
                        <span className="text-[#cacace]">@devMagnets</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Facsebook</span>
                        <span className="text-[#cacace]">@devMagnets</span>
                    </div>
                </div>

                <div className=" flex flex-col gap-2 bg-card p-5">
                    <div className="flex justify-between">
                        <span className="font-semibold">Support service:</span>
                        <span className="text-[#cacace]">8368881079</span>
                    </div>
                    <div className="flex justify-between ">
                        <span className="font-semibold">Office:</span>
                        <span className="text-[#cacace]">9311450431</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Personal:</span>
                        <span className="text-[#cacace]">9xxx349492</span>
                    </div>
                </div>



            </div>


        </div>
    </>)
}