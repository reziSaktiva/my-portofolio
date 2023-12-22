'use client'

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Luffy from "../images/_-removebg-preview.png";

function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center lg:text-left">
                    <h1 className="mb-4 text-6xl sm:text-5xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500">Hello i'm {" "}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Luffy',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Gear 5',
                                1000,
                                'Gomu Gomu',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a congue libero, quis congue ipsum. Pellentesque metus nibh, facilisis sit amet mi et, eleifend viverra sapien. Etiam nisl lectus, congue et gravida eu, volutpat a nunc. Ut lobortis erat a ipsum placerat, id sodales sapien pretium. In varius sapien mauris.</p>
                    <div className="">
                        <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 border text-white hover:text-black hover:border-white bg-gradient-to-br from-yellow-500 via-red-500 to-blue-500 hover:bg-black mt-3">Button</button>
                        <button className="px-6 py-3 rounded-full w-full sm:w-fit mt-4 text-white hover:text-black bg-black border border-white hover:bg-white hover:border-black">Button</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-16 lg:mt-0">
                    <div className="rounded-full bg-[#fff] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src={Luffy.src}
                            alt="Herro Image"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
