import React from 'react'

function HeroSection() {
  

    return (
        <div className='text-center mt-20'>
            <div className=" min-h-100 flex flex-col justify-center items-center text-center px-4 ">

                {/* Avatar Group */}
                <a href='#team'  className="inline-block cursor-pointer" >
                    <div className="avatar-group -space-x-4 my-4 flex items-center border border-gray-500 p-2 rounded-lg">
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
                            </div>
                        </div>

                        <h1 className="ml-6 text-sm text-gray-400 whitespace-nowrap">
                            Trusted by 10k+ people
                        </h1>
                    </div>
                </a>

                {/* Hero Text */}
                <div className="max-w-3xl mt-6">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight font-manrope ">
                        Turning imagination into{" "}
                        <span className="text-primary">digital</span> impact.
                    </h1>

                    <h2 className="mt-4 text-sm md:text-lg max-w-lg m-auto">
                        Creating meaningful connections and turning big ideas into interactive digital experiences.
                    </h2>
                    <div className='w-10 h-10 shadow-2xl shadow-blue-700'>

                    </div>
                </div>

            </div>
            <div className='w-full h-[50vh] md:h-[80vh]'>
                {/* img */}
                <img src="https://i.pinimg.com/1200x/ea/b2/2b/eab22bbc2f1cd54da47f0a864db3c9ff.jpg" alt="" className='w-full h-full object-cover rounded-4xl' />
            </div>
        </div>
    )
}

export default HeroSection