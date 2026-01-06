import React, { useState } from 'react'
import LatestWorkJoson from '../../../public/latestWork.json'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";
function LatestWork() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='mb-20'>
            <div className='text-heder-box'>
                <h1 className='text-heder-title'>Our latest work</h1>
                <p className='text-heder-Pera'>Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.</p>
            </div>
            <div className=' slider-container px-10 '>
               
                <Slider {...settings}>
                    {
                        LatestWorkJoson.map((lates, index) => (
                            <div key={index} className='px-2'>
                                <div className="max-w-sm shadow-sm p-2 overflow-hidden h-90 space-y-2 lg:space-y-4 border rounded-2xl">
                                    <div>
                                        <img
                                            src={lates.img}
                                            alt="Shoes" className='max-h-[150px]  object-cover w-full m-auto' />
                                    </div>

                                    <div className='space-y-1 lg:space-y-3 p-3'>
                                        <h2 className='text-lg font-bold font-mono'>{lates.title}</h2>
                                        <p className='text-gray-400'>{lates.description.slice(0, 35)}...</p>
                                        <div className="flex justify-center mt-3 lg:mt-8">
                                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                            <button className="btn btn-primary" onClick={() => document.getElementById(`modal-${lates.id}`).showModal()}>View Details <FaArrowRightLong/></button>
                                            <dialog id={`modal-${lates.id}`} className="modal">
                                                <div className="modal-box">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                                            <span className="inline-block transition-transform duration-500 hover:rotate-180 text-lg p-1">
                                                                ✕
                                                            </span>
                                                        </button>
                                                    </form>
                                                    <div>
                                                        <img
                                                            src={lates.img}
                                                            alt="Shoes" className='rounded-2xl my-5' />
                                                    </div>
                                                    <h3 className="font-bold text-lg">{lates.title}</h3>
                                                    <p className="py-4">{lates.description}</p>
                                                </div>
                                            </dialog>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default LatestWork