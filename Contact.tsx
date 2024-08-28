import React from "react";

const Contact =() =>{
    return (
        <div className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
               <div> <p className="heading__mini">Get In Touch</p>
                <h1 className="heading__primary">
                    Let's make your <span className="text-yellow-300">Brand</span>{" "}brilliant
                </h1>
                <p className="text-[15px] text-white mt-[1rem] opacity-75">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi tenetur mollitia omnis pariatur neque at cupiditate nulla! Quas natus quam voluptas optio. Ducimus officiis rerum maxime nihil nobis similique necessitatibus.

                </p>
                <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold">
                    +92 332 607 8250
                </h1>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
                <input type="text" 
                placeholder="Name"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                />

                <input type="email" 
                placeholder="Email"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                />
                <input type="text"
                placeholder="Subject"
                className="py-[0.7rem] mt-[1rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
                />
                <textarea placeholder="Message"
                className="py-[0.7rem] mb-[1.4rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
                rows={4} ></textarea>

<button className="before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white m-[2rem]
                             font-semibold shadow-2xl before:absolute before:left-0 before:ml-2 before:h-48 before:w-48 
                              before:origin-top-right before:translate-x-full before:translate-y-12 before:rotate-90 
                              before:bg-green-700 before:transition-all before:duration-300 hover:text-white 
                            hover:before:-rotate-180">
                            
                            <span className="relative z-10">Submit</span>
                        </button>
            </div>
                </div>  
        </div>
    )
}




export default Contact