import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
    return (
        <div className='py-20'>
            <div className='lg:flex justify-between '>
                <div className='lg:max-w-1/2 p-6 space-y-5'>
                    <div className='flex items-center'>
                        <img
                            src="https://i.pinimg.com/1200x/38/cc/c6/38ccc612d65e68e5ea050e22ac7964d6.jpg"
                            alt="logo"
                            className='w-[20px] md:w-[40px]'
                        />
                        <a className="btn btn-ghost text-xl">agency.ai</a>
                    </div>
                    <p className='max-w-lg text-gray-400'>From strategy to execution, we craft digital solutions that move your business forward.</p>
                    <div className='grid grid-cols-2  lg:grid-cols-4 max-w-sm '>
                        <p className='text-lg font-bold hover:underline'><a href="#">Services</a></p>
                        <p className='text-lg font-bold hover:underline'><a href="#">Our work</a></p>
                        <p className='text-lg font-bold hover:underline'><a href="#">Home</a></p>
                        <p className='text-lg font-bold hover:underline'><a href="#">Testimonial</a></p>
                    </div>
                </div>
                <div className='p-6 space-y-5 lg:space-y-7'>
                    <h1 className='text-lg'>Subscribe to our newsletter</h1>
                    <p className='text-gray-400'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className='flex '>
                        <input type="email" placeholder='Enter your email' className='border outline-none px-2 text-lg w-full' />
                        <button className='btn btn-primary'>Susbcribe</button>
                    </div>
                </div>
            </div>
            <hr className='text-gray-700' />
            <div className='lg:flex justify-between items-center mt-6 text-center space-y-5 p-3'>
                <p className='text-gray-400'>Copyright 2025 © agency.ai  -  All Right Reserved.</p>
                <div className='flex items-center justify-center space-x-5 text-lg md:text-2xl'>
                    <p><FaFacebook/></p>
                    <p><FaLinkedin/></p>
                    <p><FaInstagram/></p>
                    <p><FaXTwitter/></p>
                </div>
            </div>
        </div>
    )
}

export default Footer