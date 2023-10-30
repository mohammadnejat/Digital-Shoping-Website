import React from 'react'
import { useSwiper } from 'swiper/react'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"
function SwiperButtons() {
    const swiper = useSwiper()
    return (
        <>
            <div className='absolute right-14  gap-2 bottom-20 z-[9999] hidden md:flex'>
                <FaArrowCircleLeft className='text-4xl border  rounded-full  border-black cursor-pointer text-[#4089d1]' onClick={() => swiper.slidePrev()} />
                <FaArrowCircleRight className='text-4xl border  rounded-full  border-black cursor-pointer text-[#4089d1]' onClick={() => swiper.slideNext()} />
            </div>
        </>
    )
}

export default SwiperButtons