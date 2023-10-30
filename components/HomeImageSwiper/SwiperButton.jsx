import React from 'react'
import { useSwiper } from 'swiper/react'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
function SwiperButton() {
    const swiper = useSwiper()

    return (
        <>
            <FaArrowCircleRight className='text-3xl  z-50 border  top-[37%] hidden md:flex absolute right-0 rounded-full p-1  border-black cursor-pointer text-[#4089d1]' onClick={() => swiper.slidePrev()} />
            <FaArrowCircleLeft className='text-3xl border left-0 z-50  top-[37%] hidden md:flex absolute rounded-full p-1  border-black cursor-pointer text-[#4089d1]' onClick={() => swiper.slideNext()} />
        </>
    )
}

export default SwiperButton