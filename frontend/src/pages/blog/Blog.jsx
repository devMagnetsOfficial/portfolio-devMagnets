import posts from "./PostsData"
export default function Blog() {


    return (<>
        <div className="capitalize text-textPrimary text-center ">
            <h1 className="text-2xl">explore our blog</h1>
            <span className="text-xs">read articles, tips, and insights to stay updated and grow your knowledge</span>
        </div>
        <div className=" w-full mt-5 capitalize">
            
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                {posts.map((post, idx) => (
                    <div key={idx} className=" text-textPrimary flex flex-col gap-4 p-8 text-sm bg-white/10">
                        <img src={post.image} alt="" />
                        <div className="bg-dark w-fit px-5 py-1 rounded-2xl">
                            <span>{post.date}</span>
                            <br />
                            <span className="text-xs text-textSecondary" >{post.categories}</span>
                        </div>
                        <h1 className="">{post.title}</h1>
                        <p className="text-textSecondary">{post.description}</p>
                        <button type="button" className="w-fit text-accent uppercase">read more &gt;</button>
                    </div>
                ))}



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