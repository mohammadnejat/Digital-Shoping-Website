import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { AiOutlineLeft } from 'react-icons/ai'
import Link from 'next/link'

function Laptops (props) {
  const cardsIMG = [
    {
      id: 41,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-28545_5b2f6003-54a2-4afd-8f96-2f98e4edb3b0.png',
      title:
        'لپ تاپ اچ پی 15.6 اینچی مدل Victus 15 i5 13420H 16GB 512GB RTX3050',
      off: 9,
      price: 11745000
    },

    {
      id: 42,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-23832_4e0ade3f-9aab-4316-961b-7ff78269dd6f.png',
      title:
        'لپ‌ تاپ 15.6 اینچی ایسر مدل Nitro 5 AN515 R7 6800H 16G 512SSD 3060 6G',
      price: 5200000
    },

    {
      id: 43,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-22551_08551a53-b1c8-4227-b3ec-fcfd0453f034.png',
      title: 'لپ تاپ اچ پی ۱۵.۶ اینچی مدل Pavilion x360 i7 1255U 32GB 1TB',
      price: 58000000
    },

    {
      id: 44,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-28442_f5975bbe-8121-4ceb-ae8c-73d752d2f494.png',
      title:
        'لپ تاپ لنوو 15.6 اینچی مدل IdeaPad 3 15IAU7 Core i3 12GB 512GB SSD',
      price: 42700000
    },

    {
      id: 46,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-21086_5842dbcb-4a6e-4edf-b244-c58ea80b463f.png',
      title:
        'لپ تاپ ایسوس 15.6 اینچی مدل Vivobook 15 R1504VA i5 1335U 16GB 512GB',
      off: 9,
      price: 340000
    },

    {
      id: 47,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-26303_7cc3afcf-1b47-4cfd-b685-0db9fa4cef55.png',
      title:
        'لپ تاپ اچ پی 15.6 اینچی مدل Laptop 15-fd0245nia i5 1335U 8GB 512GB MX550',
      price: 12999000
    },

    {
      id: 48,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-20389_1425dff3-0f96-4700-890d-03e81e53a2ce.png',
      title:
        'لپ تاپ لنوو 15.6 اینچی مدل LOQ Gaming i7 13620 16GB 512GB 6GB 4050',
      price: 4899000
    },

    {
      id: 49,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-15270_2c39c18a-3ffd-4cc4-bcd4-09ae109a93d9.png',
      title:
        ' لپ تاپ 15.6 اینچی ایسوس مدل TUF Gaming F15 FX507ZC i5 12500H 8GB 512GB RTX3050 4GB',
      price: 756000
    },

    {
      id: 50,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-27509_9d04367a-a141-4aa2-843e-d9eed4326558.png',
      title: 'لپ تاپ لنوو 15.6 اینچی IdeaPad Slim3 i3 1305U 8GB 256GB',
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

export default Laptops
