import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import FireLogo from '../Assets/Logo/CardLogo/fire.svg'
import ArcheryTarget from '../Assets/Logo/CardLogo/archery-target.svg'
import NoteLogo from '../Assets/Logo/CardLogo/note.svg'
import BtnDown from '../Assets/Logo/CardLogo/btn-down.svg'

// Import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'

// Import required modules
import { Keyboard, Pagination } from 'swiper'

const cards = [
  {
    name: 'TETI Fair',
    desc: 'Kegiatan berupa webinar yang bertujuan untuk mengenalkan lebih jauh segala sesuatu tentang DTETI.',
    logo: FireLogo,
    path: '/tetifair',
  },
  {
    name: 'TETI Class',
    desc: 'Kegiatan berupa online class mengenai salah satu mata kuliah di DTETI, yang akan diampu oleh salah satu dosen DTETI.',
    logo: ArcheryTarget,
    path: '/teticlass',
  },
  {
    name: 'TETI Course',
    desc: 'Kegiatan berupa pembelajaran dengan pilihan course, pilihan tersebut antara lain Web Development, UI/UX, dan Robotika.',
    logo: NoteLogo,
    path: '/teticourse',
  },
  {
    name: 'TETI Talk',
    desc: 'Kegiatan berupa talkshow yang akan mengundang alumni-alumni DTETI untuk berbincang bersama, berbagi insight serta pengalaman.',
    logo: FireLogo,
    path: '/tetitalk',
  },
]

const shadow = {
  boxShadow:
    'inset -10px -10px 20px #FFFFFF, inset 10px 10px 20px rgba(0, 0,0, 0.08)',
}
const buttonShadow = {
  boxShadow: '-10px -10px 20px #FFFFFF, 10px 10px 20px rgba(0, 0,0, 0.08)',
}
const cardShadow = {
  boxShadow: '-20px -20px 50px #FFFFFF, 20px 20px 50px #D2D2D2',
}

export default function OHEvents() {
  return (
    <main
      className="max-w-[1638px] font-Poppins mediumscreen overflow-x-hidden"
      id="events"
    >
      <h1 className="text-5xl font-bold mb-[50px] mt-20 text-[#505050]" data-aos="fade-up" data-aos-duration="2000">
        What we Offer
      </h1>
      <Swiper
        modules={[Pagination, Keyboard]}
        pagination={{
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        slidesPerView={1.1}
        spaceBetween={2}
        breakpoints={breakpoints}
      >
        {cards.map((card) => {
          const { name, logo, desc, path } = card
          return (
            <SwiperSlide key={name} className="pt-7 pb-20">
              {({ isActive }) => (
                <div
                  className="ml-4 last:mr-3 h-[460px] max-w-[334px] rounded-[42px] bg-[#F3F3F3] py-9 px-9 cursor-grab"
                  style={cardShadow}
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                >
                  <div className="card flex flex-col items-center gap-y-12">
                    <Image src={logo} alt={`${name} logo`} />
                    <div>
                      <p className="mb-1 max-w-[245px] text-center text-sm leading-6 line-clamp-4">
                        {desc}
                      </p>
                      <h1 className="text-center text-lg font-semibold text-[#505050] leading-7">
                        {name}
                      </h1>
                    </div>
                    <Link href={path}>
                      <div
                        className="bg-[#F9F9F9] rounded-[42.5px] h-[66.05px] w-64  flex items-center justify-between cursor-pointer"
                        style={buttonShadow}
                      >
                        <p className="ml-auto mr-3 text-[#93DDDE] text-lg tracking-widest font-bold">
                          View Details
                        </p>
                        <div
                          style={shadow}
                          className="h-[66.05px] w-[66.05px] rounded-[42.5px] flex justify-center"
                        >
                          <Image src={BtnDown} alt="view detail button" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
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
  718: {
    slidesPerView: 2.05,
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
}
