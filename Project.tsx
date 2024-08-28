import React from "react";
import ProjectCards from "./Helper/ProjectCards";
import Image from "next/image";


const Project =() => {
    return(
        <div className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="text-center">
                <p className="heading__mini">
                    Recent Works
                </p>
            <h1 className="heading__primary">My Best <span className="text-yellow-300"> Projects</span></h1>
            </div>
                <ProjectCards
                title = "E-commerce Website"
                tech1 = "React"
                tech2 = "Next Js"
                tech3 = "Tailwind"
                tech4 = "TypeScript"
                image = "/images/e commerce.jpeg"
                />

                
                <ProjectCards
                title = "Portfolo Website"
                tech1 = "React"
                tech2 = "Next Js"
                tech3 = "Tailwind"
                tech4 = "TypeScript"
                image = "/images/download.jpeg"
                />

<ProjectCards
                title = "Fullstack Food Delivery WebApp "
                tech1 = "React"
                tech2 = "Next Js"
                tech3 = "Tailwind"
                tech4 = "TypeScript"
                image = "/images/food.jpeg"
                />


<ProjectCards
                title = "Travel Website"
                tech1 = "React"
                tech2 = "Next Js"
                tech3 = "Tailwind"
                tech4 = "TypeScript"
                image = "/images/travel-landing-page-template-with-photo_23-2148370288.avif"
                />
        </div>
    )
}
export default Project