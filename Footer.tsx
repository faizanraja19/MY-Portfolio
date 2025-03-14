import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";
import Image from "next/image";
const Footer = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5 border-gray-600 border-opacity-40 gap-[2rem] border-b-[1.4px] w-[80%] mx-auto">
            <div>
                <div className="font-logo text-white text-[18px]">
                <span className="text-[30px] md:text-[40px] text-yellow-300 ">
                    FR
                </span>
                Profile
                </div>
                <h1 className="text-[14px] mt-0.5rem text-white opacity-70">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem explicabo eius nulla iusto consequuntur consequatur id qui fuga placeat repellendus perspiciatis alias excepturi, quas odio. Quidem quas aut deleniti quia!

                </h1>
                <p className="mt-[1.3rem] text-yellow-300 underline font-semibold ">
                    muhammadfaizanraja8@gmail.com
                </p>
                
            </div>
            <div className="md:mx-auto">
                <h1 className="text-white font-semibold text-[17px] mb-[1.4rem]">
                    Quik Link
                </h1>
                <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
                    About
                </p>
                <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
                    Services
                </p>
                <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
                    Project
                </p>
                <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
                  Contact
                </p>
            </div>
            <div className="lg:mx-auto">
                <h1 className="text-white font-semibold text-[17px] mb-[1.4rem]">
                    Address
                </h1>
                <div className="flex items-center space-x-2 mt-[1rem]">
                    <MapIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
                    <p className="text-[17px] font-normal opacity-75 text-white">
                        Karachi , Pakistan
                    </p>
                </div>
                <div className="flex items-center space-x-2 mt-[1rem]">
                    <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
                    <p className="text-[17px] font-normal opacity-75 text-white">
                    muhammadfaizanraja38@gmail.com
                    </p>
                </div>
                <div className="flex items-center space-x-2 mt-[1rem]">
                    <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300"/>
                    <p className="text-[17px] font-normal opacity-75 text-white">
                    +92 332 607 8250
                 </p>
                </div>
                <div>
                <Image
                src="/images/1b60f9d42fd84e31b304d5e7779cccfd.jpg"
                alt="icon"
                width={20}
                height={20}
                className="mt-[1rem]"
                
                />


<Image
                src="/images/linkidin.png"
                alt="icon"
                width={20}
                height={20}
                className="mt-[1rem]"
                />

                </div>
            </div>
            </div>
            <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
                &#169; Copyright FR WevDev 2024
            </div>
            </div>
            
            
            
            
            
            
            
            


    
    )
}
export default Footer