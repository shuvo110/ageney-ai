import React from 'react'
import HowCanWeHelpJson from "../../../public/howCan.json"
function HowCan() {
    return (
        <div>
            <div className='text-heder-box'>
                <h1 className='text-heder-title'>How can we help?</h1>
                <p className='text-heder-Pera'>From strategy to execution, we craft digital solutions that move your business forward.</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-6 m-auto py-9'>
                {
                    HowCanWeHelpJson.map((How, index) => (
                        <div key={index}>
                            <div className='md:flex justify-center gap-5 text-center md:text-left shadow-md p-5 hover:border rounded-md transition  duration-400 ease-in-out group'>
                                <div>
                                    <img src={How.img} alt="" className='w-[100px]  h-[100px] m-auto rounded-full p-1 border-2 ' />
                                </div>
                                <div className='max-w-sm space-y-2'>
                                    <h1 className='text-lg font-mono font-bold mt-2 md:mt-0 group-hover:text-red-600'>{How.title}</h1>
                                    <h1 className='text-gray-400'>{How.des}</h1>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HowCan