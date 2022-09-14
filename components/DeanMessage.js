import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import BtnPrev from './BtnPrev'
import BtnNext from './BtnNext'

// TODO: Responsiveness, change navigation to pagination when in small screen
export default function DeanMessage() {
  const nextRef = useRef(null)
  const prevRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(null)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    console.log(width)
  }, [width])

  const isSmall = width < 950

  return (
    <Swiper
      modules={[Keyboard, Pagination, Navigation]}
      slidesPerView={1}
      keyboard={{ enabled: true }}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
        swiper.navigation.init()
        swiper.navigation.update()
      }}
      spaceBetween={20}
      onSlideChange={({ activeIndex }) => setIndex(activeIndex)}
      className="relative max-w-5xl my-20"
    >
      {[1, 2, 3, 4].map((n) => {
        return (
          <SwiperSlide key={n} className="py-2 px-2" data-aos="flip-up" data-aos-duration="3000">
            <div className="mr-7 ml-10 xl:mx-auto flex justify-center outline-8 outline outline-[#2FA4FF] py-10 rounded-[40px]">
              <div className=" max-w-sm sm:max-w-lg md:max-w-2xl text-center font-Poppins cursor-grab">
                <h2 className="text-4xl font-semibold text-[#554E4E] font-Josefin">
                  A Message from Our Dean
                </h2>
                <div className="bg-red-500 w-16 h-16 mx-auto my-10"></div>
                <p className="text-xl md:text-2xl text-[#676666]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  veniam cum architecto porro repellendus illum ducimus delectus
                  totam? Quia voluptatum recusandae possimus neque iste nobis
                  cumque sunt voluptates! Incidunt, accusamus!
                </p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
      <button ref={nextRef}>{index !== 3 && <BtnNext />}</button>
      <button ref={prevRef}>{index !== 0 && <BtnPrev />}</button>
    </Swiper>
  )
}
