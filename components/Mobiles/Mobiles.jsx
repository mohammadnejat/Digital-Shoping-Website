import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { AiOutlineLeft } from 'react-icons/ai'
import Link from 'next/link'

function Mobiles (props) {
  const cardsIMG = [
    {
      id: 31,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-27197_bea72a1b-5f89-486c-b1be-aa5663f989c2.png',
      title: 'لپ تاپ اچ پی ۱۵.۶ اینچی مدل Pavilion x360 i7 1255U 32GB 1TB',
      price: 58000000,
      off: 3
    },

    {
      id: 2,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-16076_f0ea67d7-0fa1-4e53-847e-a9d600848eb6.png',
      title:
        'گوشی موبایل سامسونگ مدل Galaxy A14 (SM-A145F/DS) ظرفیت 128 گیگابایت رم 4 گیگابایت - ویتنام',
      price: 5200000
    },
    {
      id: 32,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-24143_ee8314b2-3f73-439a-884e-0b7d088c714e.png',
      title:
        'گوشی موبايل نوکيا مدل 106 (2018) ظرفیت 4 مگابایت رم 4 مگابایت - مونتاژ ایران',
      price: 740000
    },

    {
      id: 4,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-26461_91cc9a83-8fdf-4ea7-a9cd-d6eacf5e5202.png',
      title: 'یخچال فریزر ساید بای ساید جی پلاس 28 فوت مدل GSS-M7625',
      price: 42700000
    },
    {
      id: 1,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-10341_861a18d2-cf80-41eb-a790-b50a56bdf823.png',
      title:
        'گوشی موبایل شیائومی Redmi Note 11 Pro+ 5G ظرفیت 128 گیگابایت رم 8 گیگابایت - پک چین رام گلوبال',
      off: 9,
      price: 11745000
    },

    {
      id: 33,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-28800_c90207e3-ccdc-4630-900a-337299189f08.png',
      title: 'گوشی شیائومی مدل T13 Pro',
      off: 9,
      price: 340000
    },

    {
      id: 7,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-10848_2b8b89e4-831d-467d-ad04-bee450a73fa0.png',
      title: 'پرینتر برادر مدل DCP-L2540DW چندکاره',
      price: 12999000
    },

    {
      id: 8,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-10341_861a18d2-cf80-41eb-a790-b50a56bdf823.png',
      title: 'گوشی موبایل آنر X6 ظرفیت 64 گیگابایت رم 4 گیگابایت',
      price: 4899000
    },

    {
      id: 9,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-26026_5cdfa7d5-646f-48a6-ba1d-6bd82866f70f.png',
      title: 'گوشی موبايل نوکیا مدل 106 (2023) دو سیم کارت',
      price: 756000
    },

    {
      id: 10,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-10999_59e3adfc-8910-4a9c-bbbd-c36f4fc5bc69.png',
      title: 'پرینتر اچ پی مدل LaserJet MFP M141w لیزری چندکاره',
      off: 1,
      price: 7980000
    }
  ]

  return (
    <>
      <div className='pt-8 mt-16 border-none md:border-2 rounded-2xl'>
        <div className='flex items-center justify-between mx-4 md:mx-auto'>
          <h3>{props.title}</h3>
          <div className='flex items-center gap-2 text-blue-600'>
            <a href='#' className=''>
              نمایش همه{' '}
            </a>
            <AiOutlineLeft className='text-xl' />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            390: {
              slidesPerView: 2.5,
              spaceBetween: 25
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20
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
          {cardsIMG.map(product => (
            <SwiperSlide key={product.id}>
              <Link href={`/products/${product.id}`}>
                <div className='flex flex-col items-center mt-5'>
                  {product.off ? (
                    <>
                      <div className='flex  justify-between items-center w-full text-[#FF334B]'>
                        <span className='text-sm'>امدادآف</span>
                        <span className='text-sm'>25:46:24</span>
                      </div>
                      <div className='w-full border mt-1 !border-[#FF334B] border-3  rounded-2xl'></div>
                    </>
                  ) : (
                    <div className='w-full h-full mb-8'> </div>
                  )}

                  <div className='relative mt-2 md:my-3'>
                    <img src={product.imgUrl} className='' alt='' />
                    <span className='text-sm leading-[16px] line-clamp-2'>
                      {product.title}
                    </span>
                    {product.off ? (
                      <>
                        <div className='flex justify-between items-center  mt-8 text-[#FF334B]'>
                          <span className='p-1 flex justify-center items-center bg-[#FF334B] text-white text-xs w-auto md:w-8 rounded-md'>
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
                      </>
                    ) : (
                      <>
                        <div className='flex justify-between mt-8 text-black'>
                          <span className='w-8 p-1 text-xs text-white rounded-md'>
                            {product.off}%
                          </span>
                          <span className=''>
                            {product.price.toLocaleString()}
                            <small className='text-xs text-black'>تومان</small>
                          </span>
                        </div>
                      </>
                    )}
                    <div className='absolute top-0 bottom-0 border !border-gray-100 border-1 -left-7'></div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Mobiles
