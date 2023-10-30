import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'
import { Autoplay, Pagination, Navigation } from 'swiper'
import SwiperButtons from './SwiperButtons'
import SwiperButton from './SwiperButton'

function HomeImageSwiper () {
  const siwperImgMobile = [
    {
      id: 1,
      img: 'https://www.technolife.ir/image/banner_SlideBannerMobile_6H24H7_277df059-ad14-4f75-a1b7-f432b675dd4d.png'
    },
    {
      id: 2,
      img: 'https://www.technolife.ir/image/banner_SlideBannerMobile_qS0Zt4_9c37ea76-7a86-442c-8fe0-59a8f2a7b10f.png'
    },
    {
      id: 3,
      img: 'https://www.technolife.ir/image/banner_SlideBannerMobile_rLpXtc_083122a2-ebe0-470d-98ca-8675e4904295.png'
    },
    {
      id: 4,
      img: 'https://www.technolife.ir/image/banner_SlideBannerMobile_I0kjb1_09e2fff4-1b18-4bf6-adbc-ace50882b612.png'
    }
  ]
  const swiperImg = [
    {
      id: 1,
      img: 'https://www.technolife.ir/image/banner_SlideBanner_kW5oZz_122da71d-9b6f-4b4f-ad3c-4aa5cd418e15.png'
    },
    {
      id: 2,
      img: 'https://www.technolife.ir/image/banner_SlideBanner_VBp4aT_192fb7ec-6ded-4644-94dc-5f93586433a1.png'
    },
    {
      id: 3,
      img: 'https://www.technolife.ir/image/banner_SlideBanner_V1whNL_7d57796f-c499-4670-9e23-a4a3fa70e604.png'
    },
    {
      id: 4,
      img: 'https://www.technolife.ir/image/banner_SlideBanner_a7gyOM_c10e3289-dd1f-490b-a36c-123a9e5a4092.png'
    },
    {
      id: 5,
      img: 'https://www.technolife.ir/image/banner_SlideBanner_baCmWT_8d5689d0-baab-44e7-b78c-43c41b3e392e.png'
    }
  ]
  const swiperMiddleImg = [
    {
      id: 1,
      title: 'ماشین های اداری',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_MIBn1s_75fda196-8a2f-4d07-bc9c-b49c252c9849.png'
    },
    {
      id: 2,
      title: 'قطعات موبایل',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_OA82Op_8c4dff51-efe4-489a-b7f7-8a25856bb187.png'
    },
    {
      id: 3,
      title: 'پاور بانک',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_Y7NJVr_53eb4a9b-166c-4851-95c7-b02ef4a7c7be.png'
    },
    {
      id: 4,
      title: 'اسپیکر',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_1OkxTf_3df5aedb-33ef-4200-a81a-a1444bcedf0e.png'
    },
    {
      id: 5,
      title: 'گیمینگ',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_fQ1JW9_41fda70e-7de4-40b9-abb1-cd09f48a21d2.png'
    },
    {
      id: 6,
      title: 'تبلت',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_oBqfhC_a9f23d81-83c5-4054-9163-083454a073dc.png'
    },
    {
      id: 7,
      title: 'لپ تاپ و کامپیوتر',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_B574Ao_90b3facc-fc2c-4044-818d-596da0f3df78.png'
    },
    {
      id: 8,
      title: 'موبایل',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_FgGs07_040c7036-93f8-4a6d-8ff5-dedb88183674.png'
    },
    {
      id: 9,
      title: 'لوازم جانبی',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_bKYtgp_4aff6a4f-2ed8-4153-8368-b73fb6f16906.png'
    },
    {
      id: 10,
      title: 'هدفون و هندزفری',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_ZF2YTy_bc869e82-f53c-40bb-b05c-65c5139585ee.png'
    },
    {
      id: 11,
      title: 'لوازم خانگی',
      img: 'https://www.technolife.ir/image/banner_CircleCategories_IRf271_a72a1ec9-16db-4c56-8ccd-fbaaa3392903.png'
    }
  ]
  return (
    <>
      <div className='bg-cover lg:h-auto'>
        <div className='hidden lg:block'>
          <Swiper
            dir='ltr'
            loop={true}
            pagination={{
              clickable: true
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false
            }}
            className=' mySwiper'
          >
            {swiperImg.map(data => (
              <SwiperSlide key={data.id} className=''>
                <img src={data.img} className='w-full h-full' alt='#' />
              </SwiperSlide>
            ))}
            <SwiperButtons />
          </Swiper>
        </div>
        <div className='block lg:hidden'>
        <Swiper
          dir='ltr'
          loop={true}
          pagination={{
            clickable: true
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          className=' mySwiper'
        >
          {siwperImgMobile.map(data => (
            <SwiperSlide key={data.id} className=''>
              <img src={data.img} className='' alt='#' />
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
        </div>
      </div>

      <div className='py-8 mx-auto bg-cover md:px-20'>
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          pagination={{
            clickable: true
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          breakpoints={{
            390: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10
            }
          }}
          className='mySwiper'
        >
          {swiperMiddleImg.map(product => (
            <SwiperSlide key={product.id}>
              <Link href={`/products`}>
                <div className='z-50 flex flex-col items-center w-full h-full group'>
                  <div className=' bg-gradient-to-br rounded-full hover:!p-1  from-[#c13584] via-[#fd1d1d] to-[#f77737] w-[86px] h-[86px] p-[2px] lg:w-[128px] lg:h-full cursor-pointer'>
                    <div className='bg-white rounded-full'>
                      <img className='inline p-1' src={product.img} alt='#' />
                    </div>
                  </div>
                  <p className='text-sm'>{product.title}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <SwiperButton />
        </Swiper>
      </div>
    </>
  )
}

export default HomeImageSwiper
