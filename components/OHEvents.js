import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import FireLogo from '../Assets/Logo/CardLogo/fire.svg'
import ArcheryTarget from '../Assets/Logo/CardLogo/archery-target.svg'
import NoteLogo from '../Assets/Logo/CardLogo/note.svg'
import BtnDown from '../Assets/Logo/CardLogo/btn-down.svg'
import MicLogo from '../Assets/Logo/CardLogo/mic.svg'

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
    desc: 'Pameran yang berisi team dan juga kumpulan Badan Semi Otonom yang berada di bawah naungan KMTETI UGM.',
    logo: FireLogo,
    path: '/tetifair',
  },
  // {
  //   name: 'TETI Class',
  //   desc: 'Kegiatan berupa online class mengenai salah satu mata kuliah di DTETI, yang akan diampu oleh salah satu dosen DTETI.',
  //   logo: ArcheryTarget,
  //   path: '/teticlass',
  // },
  {
    name: 'TETI Course',
    desc: 'Kegiatan berupa pembelajaran dengan pilihan course yang berkaitan dengan skill-skill yang terkait dengan DTETI.',
    logo: NoteLogo,
    path: '/teticourse',
  },
  {
    name: 'TETI Talk',
    desc: 'Berbincang bersama dosen-dosen DTETI FT UGM serta alumni dengan topik yang berkaitan dengan DTETI',
    logo: MicLogo,
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
  boxShadow: '-10px -10px 30px #FFFFFF, 10px 10px 30px #D2D2D2',
}

export default function OHEvents() {
  return (
    <main className="mx-auto font-Poppins overflow-x-hidden" id="events">
      <h1
        className="text-5xl font-bold mb-0 sm:mb-10 text-[#505050] text-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        What we Offer
      </h1>
      <Swiper
        modules={[Pagination, Keyboard]}
        className="max-w-[1280px]"
        pagination={{
          dynamicBullets: true,
        }}
        keyboard={{ enabled: true }}
        grabCursor="true"
        slidesPerView={1}
        breakpoints={breakpoints}
      >
        {cards.map((card) => {
          const { name, logo, desc, path } = card
          return (
            <SwiperSlide
              key={name}
              className="py-10 flex flex-col items-center"
            >
              <div
                className={`h-[460px] w-[90%] max-w-[350px] rounded-[42px] bg-[#F3F3F3] py-9 ${
                  name === 'TETI Talk' ? 'sm:px-9 px-5' : 'px-5'
                } cursor-grab`}
                style={cardShadow}
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <div className="card flex flex-col items-center gap-y-8">
                  <Image src={logo} alt={`${name} logo`} />
                  <p className="text-center text-[#505050] text-md font-light leading-6 line-clamp-4">
                    {desc}
                  </p>
                  <h1 className="text-center text-2xl font-semibold text-[#505050] font-Josefin leading-7">
                    {name}
                  </h1>
                  <Link href={path}>
                    <div
                      className="bg-[#F9F9F9] rounded-[42.5px] h-[66.05px] w-60 sm:w-64 flex items-center justify-between first-letter:cursor-pointer"
                      style={buttonShadow}
                    >
                      <p className="ml-auto mr-3 text-[#93DDDE] sm:text-lg tracking-widest font-bold">
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
            </SwiperSlide>
          )
        })}
      </Swiper>
    </main>
  )
}

const breakpoints = {
  558: {
    slidesPerView: 1.5,
  },
  678: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2.25,
  },
  954: {
    slidesPerView: 2.5,
  },
  1028: {
    slidesPerView: 3,
  },
}
