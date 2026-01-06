import React from 'react'
import team from '../../../public/team.json'
import Slider from 'react-slick';
function Team() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // laptop
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // large mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480, // Samsung M02s
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "16px",
        },
      },
    ],
  };
  return (
    <div className='p-10'>
      <div className='text-heder-box'>
        <h1 className='text-heder-title'>Meet the team</h1>
        <p className='text-heder-Pera'>A passionate team of digital experts dedicated to your
          brand’s success.</p>
      </div>
      <div className=''>
        <Slider {...settings}>
          {
            team.map((teamCard, index) => (
              <div key={index} className='my-3 px-3 '>
                <div className='lg:flex gap-4 py-5 border rounded-2xl border-[#695757c0] px-4'>
                  <img src={teamCard.img} alt="" className='w-16 h-16 m-auto lg:mr-0 rounded-full object-cover' />

                  <div className='text-center lg:text-left'>
                    <h1 className='text-lg font-manrope'>{teamCard.name}</h1>
                    <p className='text-gray-500'>{teamCard.position}</p>
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

export default Team