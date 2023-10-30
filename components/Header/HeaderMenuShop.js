import React, { useContext, useRef, useEffect } from 'react'
import Link from 'next/link'


import image1 from "../../images/HeaderProducts/computer-11081.png"
import image2 from "../../images/HeaderProducts/laptop-10770.png"
import image3 from "../../images/HeaderProducts/s.png"
import image4 from "../../images/HeaderProducts/NicePng_usb-png_860988.png"
import image5 from "../../images/HeaderProducts/pngfind.com-nelson-mandela-png-4737173.png"
import image6 from "../../images/HeaderProducts/pngegg (1).png"


const HeaderMenuShop = () => {




    const { show, setProductPageShow, pc, setPc,
        laptop, setLaptop,
        mobile, setMobile,
        pcJanebi, setpcJanebi,
        mobileJanebi, setMobileJanebi,
        flash, setFlash } = useContext(UserMenuActive)


    return (
        <>
            <ul className={`absolute ${show} z-50  bg-white flex flex-wrap gap-4 w-[35vw] h-fit right-10 p-2`}>
                <li className='flex-auto transition-colors border shadow w-[40%] hover:bg-sky-200'>
                    <Link className='flex flex-col items-center justify-center' to="/products" onClick={() => {
                        const firstProduct = pc;
                        setProductPageShow(firstProduct);
                    }}>
                        <div >
                            <img className='w-16 h-16' src={image1} alt="#" />
                        </div>

                        <span className='text-sm font-bold text-black'>کامپیوتر</span>

                    </Link>
                </li>

                <li className='flex-auto  transition-colors border shadow w-[40%]  hover:bg-sky-200'>
                    <Link className='flex flex-col items-center justify-center' to="/products" onClick={() => {
                        const firstProduct = laptop;
                        setProductPageShow(firstProduct);
                    }} >
                        <div >
                            <img className='w-16 h-16' src={image2} alt="#" />
                        </div>

                        <span className='text-sm font-bold text-black'>لپتاپ</span>

                    </Link>
                </li>

                <li className=' flex-auto  transition-colors border shadow w-[40%]  hover:bg-sky-200'>
                    <Link className='flex flex-col items-center justify-center' to="/products" onClick={() => {
                        const firstProduct = mobile;
                        setProductPageShow(firstProduct);
                    }} >
                        <div >
                            <img className='w-16 h-16' src={image3} alt="#" />
                        </div>

                        <span className='text-sm font-bold text-black'>گوشی</span>

                    </Link>
                </li>

                <li className='flex-auto transition-colors border shadow w-[40%]  hover:bg-sky-200'>
                    <Link className='flex flex-col items-center justify-center' to="/products" onClick={() => {
                        const firstProduct = pcJanebi;
                        setProductPageShow(firstProduct);
                    }} >

                        <img className='w-16 h-16' src={image6} alt="#" />
                        <span className='text-sm font-bold text-black'>لوازم جانبی کامپیوتر</span>

                    </Link>
                </li>

                <li className='flex-auto transition-colors border shadow w-[40%]  hover:bg-sky-200'>
                    <Link className='flex flex-col items-center justify-center' to="/products" onClick={() => {
                        const firstProduct = mobileJanebi;
                        setProductPageShow(firstProduct);
                    }} >
                        <div className='flex justify-center'>
                            <img className='w-16 h-16' src={image5} alt="#" />
                        </div>

                        <span className='text-sm font-bold text-black'>لوازم گوشی</span>

                    </Link>
                </li>

                <li className='flex-auto transition-colors border shadow w-[40%]  hover:bg-sky-200'>
                    <Link className='flex flex-col items-center justify-center' to="/products" onClick={() => {
                        const firstProduct = flash;
                        setProductPageShow(firstProduct);
                    }} >
                        <div >
                            <img className='w-16 h-16' src={image4} alt="#" />
                        </div>

                        <span className='text-sm font-bold text-black'>فلش</span>

                    </Link>
                </li>
            </ul >
        </>
    )
}

export default HeaderMenuShop