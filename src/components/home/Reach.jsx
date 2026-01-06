import React from 'react'
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaLongArrowAltRight } from "react-icons/fa";
function Reach() {
    return (
        <div>
            <div className='text-heder-box'>
                <h1 className='text-heder-title'>Reach out to us</h1>
                <p className='text-heder-Pera'>Ready to grow your brand? Let’s connect and build something exceptional together.</p>
            </div>
            <div className='max-w-4xl m-auto p-10'>
                <form >
                    <div className='lg:flex space-y-7 md:space-y-0'>
                        <div className="w-full max-w-sm mx-auto">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">
                                Your Name
                            </label>
                            <div className="relative">
                                <CiUser className='absolute top-1/2 left-3 -translate-y-1/2 z-10' size={20} />
                                {/* <CiUser className="absolute top-1/2 left-3 -translate-y-1/2" /> */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="input input-accent pl-10 w-full"
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto">
                            <label htmlFor="emailId" className="block mb-2 text-sm font-medium text-gray-400">
                                Your Name
                            </label>
                            <div className="relative">
                                <TfiEmail className='absolute top-1/2 left-3 -translate-y-1/2 z-10' size={20} />
                                {/* <CiUser className="absolute top-1/2 left-3 -translate-y-1/2" /> */}
                                <input
                                    type="email"
                                    name="emailId"
                                    placeholder="Enter your email"
                                    className="input input-accent pl-10 w-full"required
                                />
                            </div>
                        </div>
                    </div>

                    <div className='max-w-[50rem] mx-auto mt-8'>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">
                            Message
                        </label>
                        <textarea placeholder="Enter your message" name='message' required className="textarea textarea-accent w-full resize-none h-36"></textarea>
                    </div>
                    <div className='flex mt-7 '>
                        <button className='btn btn-primary animate-pulse'>Submit <FaLongArrowAltRight /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reach