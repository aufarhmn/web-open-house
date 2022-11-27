import { Keyboard, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import parse from 'html-react-parser'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import funfacts from './funfacts.json'

// TODO: Dynamic Pagination
export default function FunFacts() {
  return (
    <section id="funfact" className="px-3 sm:px-5">
      <h2
        className="text-center px-5 mx-auto font-Poppins font-semibold text-[#93DDDE] text-[35px] md:text-[45px] max-w-[630px]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Some random fun facts about our department
      </h2>
      <div
        className="overflow-x-hidden max-w-5xl mx-auto mt-10 mb-20 border-4 sm:border-8 border-[#2FA4FF] rounded-[40px] bg-gray-100"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Keyboard]}
          slidesPerView={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          navigation
          pagination
          className="max-w-4xl"
        >
          {funfacts['funfacts'].map((funfact, index) => {
            return (
              <SwiperSlide
                className="min-h-[400px] p-5 flex items-center justify-center"
                key={index}
              >
                <div className="cursor-grab text-center">
                  <h2 className="text-3xl font-Josefin font-semibold mb-5">
                    {funfact.title}
                  </h2>
                  <div className="font-Poppins md:text-2xl max-w-xl text-lg">
                    {parse(funfact.desc)}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
