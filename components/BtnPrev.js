import React from 'react'

export default function BtnPrev() {
  return (
    <svg
      width="46"
      height="60"
      viewBox="0 0 46 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="swiper-button-prev absolute left-[8%] top-60 sm:top-48 cursor-pointer z-20"
    >
      <g filter="url(#filter0_d_13_11)">
        <path
          d="M34 61L14.2734 39.2185C11.8479 36.5404 11.8479 32.4596 14.2734 29.7815L34 8.00001"
          stroke="#1E1C1C"
          strokeWidth="15"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_13_11"
          x="0.954285"
          y="0.5"
          width="44.5458"
          height="76"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_13_11"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_13_11"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
