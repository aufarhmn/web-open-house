import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import FireLogo from '../Assets/Images/Carousel/fire.svg'
import BtnDown from '../Assets/Images/Carousel/btnDown.svg'
// Import swiper styles
import 'swiper/css'
import Image from 'next/image'

// TODO: fix layouting(?)
export default function OHEvents() {
  return (
    <main className="max-w-[1638px] ml-[5%] font-Poppins" id="events">
      <h1 className="text-5xl font-bold mb-16 mt-20 text-[#505050]">
        What we Offer
      </h1>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={2}
        keyboard={{ enabled: true, onlyInViewport: true }}
        breakpoints={breakpoints}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((n) => {
          return (
            <SwiperSlide key={n}>
              <div className="mb-5 ml-3 last:mr-3 h-[470px] max-w-sm rounded-[42px] bg-[#F3F3F3] py-9 px-9 drop-shadow-xl cursor-grab">
                <div className="card flex flex-col items-center gap-y-12">
                  <Image src={FireLogo} alt="flaming fire" />
                  <div>
                    <p className="mb-1 max-w-[245px] text-center text-sm leading-6 select-none">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea delectus, exercitationem minima omnis rerum nisi!
                    </p>
                    <h1 className="text-center text-lg font-semibold text-[#505050] leading-7">
                      TETI FAIR
                    </h1>
                  </div>
                  <div className="relative bg-white drop-shadow-xl text-[#93DDDE] text-md rounded-[45px] w-64 h-16 flex items-center justify-between cursor-pointer">
                    <p className="mr-5 tracking-widest font-bold ml-auto">
                      View Details
                    </p>
                    <Image
                      src={BtnDown}
                      alt="view detail button"
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </main>
  )
}

const breakpoints = {
  460: {
    slidesPerView: 1.25,
  },
  556: {
    slidesPerView: 1.5,
  },
  642: {
    slidesPerView: 1.75,
  },
  882: {
    slidesPerView: 2.25,
  },
  1075: {
    slidesPerView: 2.5,
  },
  1172: {
    slidesPerView: 2.75,
  },
  1378: {
    slidesPerView: 3.25,
  },
  1638: {
    slidesPerView: 3.5,
  },
  // 520: {
  //   slidesPerView: 1.5,
  // },
  // 576: {
  //   slidesPerView: 1.75,
  // },
  // 680: {
  //   slidesPerView: 2,
  // },
  // 728: {
  //   slidesPerView: 2.5,
  // },
  // 926: {
  //   slidesPerView: 3,
  // },
  // 1100: {
  //   slidesPerView: 3.75,
  // },
  // 1280: {
  //   slidesPerView: 4,
  // },
}
