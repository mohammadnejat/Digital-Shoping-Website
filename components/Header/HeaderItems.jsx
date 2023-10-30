import React, { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
function HeaderItems({ title, items, }) {

    const [headerMenuisShow, setHeaderMenuisShow] = useState(false)

    return (
        <li className='relative px-2 pb-3 cursor-pointer' onMouseEnter={() => setHeaderMenuisShow(true)} onMouseLeave={() => setHeaderMenuisShow(false)}>
            <span >
                {title}
            </span>
            <div className={`absolute ${headerMenuisShow ? "" : "hidden"}  z-[99999] text-white top-6 right-5`}>
                <div className='px-4 pb-4 pt-6 gap-4 grid grid-cols-12 text-black  bg-white rounded-2xl h-[480px]  w-[657px]'>
                    <ul className='flex flex-col h-full col-span-6 text-lg'>
                        <li className='flex justify-between gap-3 py-6 group'>
                            <div className='flex gap-3'>
                                <img src={items.firstImg} alt="#" />
                                {items.firstTitle}
                            </div>
                            <AiOutlineLeft className='hidden text-lg text-blue-500 group-hover:block' />
                        </li>
                        <li className='flex justify-between gap-3 py-6 group'>
                            <div className='flex gap-3'>
                                <img src={items.secondImg} alt="#" />
                                {items.secondTitle}
                            </div>
                            <AiOutlineLeft className='hidden text-lg text-blue-500 group-hover:block' />
                        </li>
                        <li className='flex justify-between gap-3 py-6 group'>
                            <div className='flex gap-3'>
                                <img src={items.thiredImg} alt="#" />
                                {items.thiredTitle}
                            </div>
                            <AiOutlineLeft className='hidden text-lg text-blue-500 group-hover:block' />
                        </li>
                        <li className='flex justify-between gap-3 py-6 group'>
                            <div className='flex gap-3'>
                                <img src={items.forthImg} />
                                {items.forthTitle}
                            </div>
                            <AiOutlineLeft className='hidden text-lg text-blue-500 group-hover:block' />
                        </li>
                        <li className='flex justify-between gap-3 py-6 group'>
                            <div className='flex gap-3'>
                                <img src={items.fifithImg} />
                                {items.fifithTitle}
                            </div>
                            <AiOutlineLeft className='hidden text-lg text-blue-500 group-hover:block' />
                        </li>
                        <li className='flex justify-between gap-3 py-6 group'>
                            <div className='flex gap-3'>
                                <img src={items.sixithImg} />
                                {items.sixithTitle}
                            </div>
                            <AiOutlineLeft className='hidden text-lg text-blue-500 group-hover:block' />
                        </li>
                    </ul>
                    <div className='col-span-6 p-3 bg-gray-100 rounded-xl h-[450px]'>
                        <div className='flex items-center justify-between gap-2 '>
                            <div className='flex items-center gap-2'>
                                <a className='text-base' href="#">
                                    قیمت لپ تاپ
                                </a>
                                <small className='text-xs'>
                                    (قیمت محصول)
                                </small>
                            </div>
                            <div >
                                <AiOutlineLeft className='float-left text-lg text-blue-500' />
                            </div>
                        </div>
                        <div className='h-5/6'>
                            <ul className='flex flex-col flex-wrap text-xs text-gray-500 h-5/6'>
                                <div className='w-6/12 py-2 group hover:text-black'>
                                    <li className='transition duration-300 group-hover:-translate-x-4'>
                                        مک بوم
                                    </li>
                                </div>
                                <div className='w-6/12 py-2 group hover:text-black'>
                                    <li className='transition duration-300 group-hover:-translate-x-4'>
                                        لپ تاپ ایسوس
                                    </li>
                                </div>
                                <div className='w-6/12 py-2 group hover:text-black'>
                                    <li className='transition duration-300 group-hover:-translate-x-4'>
                                        لپ تاپ لنو
                                    </li>
                                </div>
                                <div className='w-6/12 py-2 group hover:text-black'>
                                    <li className='transition duration-300 group-hover:-translate-x-4'>
                                        لپ تاپ اچ پی
                                    </li>
                                </div>
                                <div className='w-6/12 py-2 group hover:text-black'>
                                    <li className='transition duration-300 group-hover:-translate-x-4'>
                                        لپ تاپ مایکروسافت
                                    </li>
                                </div>
                                <div className='w-6/12 py-2 group hover:text-black'>
                                    <li className='transition duration-300 group-hover:-translate-x-4'>
                                        لپ تاپ ایسر
                                    </li>
                                </div>
                                <div className='w-6/12 py-2 group hover:text-black'>
                                    <li className='transition duration-300 group-hover:-translate-x-4'>
                                        لپ تاپ ام اس آی
                                    </li>
                                </div>
                                <div className='w-6/12 py-2 group hover:text-black'>
                                    <li className='transition duration-300 group-hover:-translate-x-4'>
                                        لپ تاپ هوآوی
                                    </li>
                                </div>
                                <div className='w-6/12 py-2 group hover:text-black'>
                                    <li className='transition duration-300 group-hover:-translate-x-4'>
                                        لپ تاپ گیگابایت
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default HeaderItems