import React from "react";
import BlogCard from "./Helper/BlogCard";

const Blog = () => {
    return(
        <div className="pt-[5rem] pb-[3rem] bg-black">
            <div className="text-center">
                <p className="heading__mini">My Blog</p>
                <h1 className="heading__primary">
                    My Latest <span className="text-yellow-300">Blog</span> and news
                </h1>
               </div>
                
            <div className="w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[2rem]">
           <div>
                    <BlogCard title="AI Developer Roadmap" 
                    comment="4" date="15 March 2024" 
                    image="/images/images.jpeg" />
                    </div>
               <div>
                <BlogCard title="FullStack Developer Roadmap" 
                comment="4" date="24 January 2024" 
                image="/images/download (3).jpeg" />
                </div>
                <div> 
                <BlogCard title="FullStack Developer Roadmap" 
                comment="4" date="4 March 2024" 
                image="/images/images (1).jpeg" />
                </div>
                </div>
            </div>
    )
}

export default Blog