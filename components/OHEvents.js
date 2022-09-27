import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import FireLogo from '../Assets/Logo/CardLogo/fire.svg'
import ArcheryTarget from '../Assets/Logo/CardLogo/archeryTarget.svg'
import NoteLogo from '../Assets/Logo/CardLogo/note.svg'
import BtnDown from '../Assets/Logo/CardLogo/btnDown.svg'
// Import swiper styles
import 'swiper/css'
import Image from 'next/image'
import Link from 'next/link'

const cards = [
  {
    name: 'TETI Fair',
    desc: 'Kegiatan webinar yang akan mengenalkan lebih jauh Departemen Teknik Elektro dan Teknologi Informasi mulai dari program studinya sampai kegiatan kemahasiswaan. Para siswa akan di kenalakan secara lebih mendalam tentang dunia perkuliahan, program studi yang ditawarkan, dan hal apa saja yang diperlukan sebelum menjadi mahasiswa DTETI.',
    logo: FireLogo,
    path: '/tetifair',
  },
  {
    name: 'TETI Class',
    desc: 'Teti Class merupakan kegiatan berupa online class salah satu mata kuliah di DTETI. Para siswa akan diajak untuk merasakan secara langsung pengalaman berkuliah di DTETI. Dengan adanya kegiatan ini diharapkan dapat menjawab rasa penasaran peserta dengan proses pembelajaran.',
    logo: ArcheryTarget,
    path: '/teticlass',
  },
  {
    name: 'TETI Course',
    desc: 'Rangkaian acara berupa coding session dengan beberapa pilihan course yang dapat dipilih. Beberapa course yang ditawarkan yakni UI/UX, Webdev, dan Robotika.',
    logo: NoteLogo,
    path: '/teticourse',
  },
  {
    name: 'TETI Talk',
    desc: 'Acara berupa talkshow yang akan mengundang alumni-alumni DTETI untuk berbincang bersama, berbagi insight serta pengalaman mereka setelah lulus. Pada Open House kali ini akan mengundang',
    logo: FireLogo,
    path: '/tetitalk',
  },
]

// TODO: add routing and description for each events
export default function OHEvents() {
  return (
    <main className="max-w-[1638px] font-Poppins overscreen overflow-x-hidden" id="events">
      <h1 className="text-5xl font-bold mb-[50px] mt-20 text-[#505050]">
        What we Offer
      </h1>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={2}
        keyboard={{ enabled: true, onlyInViewport: true }}
        breakpoints={breakpoints}
      >
        {cards.map((card) => {
          const { name, logo, desc, path } = card
          return (
            <SwiperSlide key={name} className="pt-5 pb-20">
              <div
                className="ml-3 last:mr-3 h-[460px] max-w-[334px] rounded-[42px] bg-[#F3F3F3] py-9 px-9 cursor-grab"
                style={{
                  boxShadow: '-20px -20px 50px #FFFFFF, 20px 20px 50px #D2D2D2',
                }}
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <div className="card flex flex-col items-center gap-y-12">
                  <Image src={logo} alt={`${name} logo`} />
                  <div>
                    <p className="mb-1 text-center text-sm leading-6 line-clamp-4">
                      {desc}
                    </p>
                    <h1 className="text-center text-lg font-semibold text-[#505050] leading-7">
                      {name}
                    </h1>
                  </div>
                  <Link href={path}>
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
}
