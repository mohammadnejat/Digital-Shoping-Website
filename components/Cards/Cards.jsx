import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Link from 'next/link'
import axios from 'axios'
import { DotLoader, GridLoader, HashLoader } from 'react-spinners'
import Swal from 'sweetalert2'
import {
  getImageFromServer,
  getImageWarrper,
  getProductsFromServer
} from '@/redux/products/ProductReducer'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../LoadingLoader/Loading'

function Cards () {
  const items = useSelector(item => item?.allProducts?.imageWarpers)
  const dispatch = useDispatch()
  const [imageWarpper, setImageWarrper] = useState()

  useEffect(() => {
    dispatch(getImageFromServer())
  }, [])

  return (
    <>
      {items ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            390: {
              slidesPerView: 2.5,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50
            }
          }}
          className=' mySwiper'
        >
          {items.map(product => (
            <SwiperSlide key={product.id}>
              <Link href={`/products/${product.id}`}>
                <div className='flex flex-col mx-6 mt-4 cursor-pointer md:mt-5'>
                  <div
                    className='flex justify-between w-full text-[#FF334B]'
                    id='itemBorder '
                  >
                    <span className='text-sm'>امدادآف</span>
                    <span className='text-sm'>25:46:24</span>
                  </div>
                  <div className='w-full border mt-1 !border-[#FF334B] border-3  rounded-2xl'></div>
                  <div className='relative my-3'>
                    <img src={product.imgUrl} className='' alt='' />
                    <span className='text-sm leading-[16px] line-clamp-2'>
                      {product.title}
                    </span>
                    <div className='flex justify-between mt-8 text-[#FF334B]'>
                      <span className='p-1 bg-[#FF334B] text-white text-xs w-8 rounded-md'>
                        {product.off}%
                      </span>
                      <span className=''>
                        {Number(
                          (
                            product.price -
                            (product.off / 100) * product.price
                          ).toFixed()
                        ).toLocaleString()}
                        <small className='text-xs'>تومان</small>
                      </span>
                    </div>
                    <div className='w-full mt-2'>
                      <small className='float-left mr-1 text-xs text-gray-500'>
                        تومان
                      </small>
                      <span className='float-left text-xs text-gray-500 line-through'>
                        {product.price.toLocaleString()}
                      </span>
                    </div>
                    <div className='absolute top-0 bottom-0 border !border-gray-100 border-1 -left-7'></div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Cards
