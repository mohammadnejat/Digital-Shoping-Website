import React from 'react'
import { useState, useContext } from 'react';


import { useEffect } from 'react';
import Link from 'next/link';

const CardBody = (props) => {
    return (
        <Link to={`/product/${props.id}`} className=''>
            <div className="relative flex p-2 bg-white border border-gray-200 rounded-lg shadow-2xl lg:p-8 w-fit h-fit hover:shadow-none lg:flex lg:flex-col lg:justify-between sellCards">
                {
                    props.off ?
                        <div className='absolute hover:scale-125 -left-5 -top-5 rotate-[320deg] rounded-full bg-white duration-150 transition ease-in-out hover:text-red-600 '>
                            <div className='flex flex-col items-center justify-center w-8 h-8 p-4 rounded-full border-off '>
                                <span className='font-bold text-md'>{props.off}%</span>
                                <span className='text-xs font-bold text-red-600'>تخفیف</span>
                            </div>
                        </div>
                        :
                        <></>
                }

                <div className='flex items-center justify-center w-4/6 lg:w-full '>
                    <a className='flex items-center justify-center' >
                        <img className="rounded-t-lg lg:p-0 w-[140px] h-[105px] lg:w-[200px] lg:h-[200px]" src={props.img} alt="product image" />
                    </a>
                </div>
                <div className="w-full p-0 lg:px-5 lg:pb-5 ">
                    <a className='flex mb-6 font-bold lg:m-0 lg:justify-center'>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    </a>
                    <div className="flex justify-center lg:items-center lg:justify-between ">
                        <Link to={`/product/${props.id}`} className=" btn-buy text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:block hidden dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">خرید</Link>
                        {
                            props.off === undefined || props.off === null || props.off === ""
                                ?
                                <span className="text-lg font-bold text-red-600 dark:text-white"> {props.price} <span className='text-sm font-extrabold text-red-600'>تومان</span></span>
                                :
                                <div className='flex flex-col'>
                                    <div className='flex items-center gap-2'>
                                        <del className="text-lg font-bold text-red-600 line-through dark:text-white"> <span className='text-black'>{props.price}</span> </del><span className='text-sm line-clamp-1'>تومان</span>
                                    </div>
                                    <span className="text-lg font-bold text-red-600 dark:text-white"> {(props.off === undefined ? props.price : (props.price - (props.price * (props.off / 100))))} <span className='text-sm font-extrabold text-red-600'>تومان</span></span>
                                </div>
                        }
                    </div>
                    <div className="flex items-center justify-end  mt-2.5 lg:mb-5 star ">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardBody