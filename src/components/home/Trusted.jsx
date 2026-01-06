import React from 'react'
import jsonFile from "../../../public/trusted.json"
function Trusted() {
  return (
    <div className='my-16 text-center text-lg md:text-2xl '>
      <h1>Trusted by Leading Companies</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-6 '>
        {
          jsonFile.map((card) => <div key={card.id}>
            <div className=' mt-6 shadow-2xl  border border-white/20 p-2 rounded-sm cursor-pointer group'>
              <img src={card.img} alt="" className='max-w-sm max-h-30 w-full  '/>
              <h1 className='text-lg mt-4 group-hover:text-orange-600'>{card.title}</h1>
            </div>
      
          </div>)
        }
      </div>
    </div>
  )
}

export default Trusted