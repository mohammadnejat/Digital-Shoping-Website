import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Cards from '../components/Cards/Cards'
import HomeImageSwiper from '../components/HomeImageSwiper/HomeImageSwiper'
import Footer from '../components/Footer/Footer'
import { AiOutlineLeft } from 'react-icons/ai'
import Mobiles from '../components/Mobiles/Mobiles'
import Laptops from '../components/Laptops/Laptops'
import HomeDevices from '../components/homeDevices/HomeDevices'
import FooterMobile from '../components/Footer/FooterMobile'
import Link from 'next/link'
import { searchItems } from '@/redux/products/ProductReducer'
import { useDispatch } from 'react-redux'

const index = () => {
  const dispatch = useDispatch()
  const cardsIMG = [
    {
      id: 2,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-16076_f0ea67d7-0fa1-4e53-847e-a9d600848eb6.png',
      title:
        'گوشی موبایل سامسونگ مدل Galaxy A14 (SM-A145F/DS) ظرفیت 128 گیگابایت رم 4 گیگابایت - ویتنام',
      off: 2,
      price: 5200000
    },

    {
      id: 3,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-28447_cd6a1a20-c7ad-4af0-a7f3-d84a522e3b90.png',
      title: 'لپ تاپ اچ پی ۱۵.۶ اینچی مدل Pavilion x360 i7 1255U 32GB 1TB',
      off: 2,
      price: 58000000
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
      id: 4,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-23511_81400f0b-c446-41ce-9350-b77117b822f7.png',
      title: 'یخچال فریزر ساید بای ساید جی پلاس 28 فوت مدل GSS-M7625',
      off: 8,
      price: 42700000
    },

    {
      id: 5,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-24143_ee8314b2-3f73-439a-884e-0b7d088c714e.png',
      title:
        'گوشی موبايل نوکيا مدل 106 (2018) ظرفیت 4 مگابایت رم 4 مگابایت - مونتاژ ایران',
      off: 3,
      price: 740000
    },

    {
      id: 6,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-28470_cff43f2b-c827-4844-9364-c97383b24c1c.png',
      title: 'هندزفری سیمی آنر مدل AM116',
      off: 9,
      price: 340000
    },

    {
      id: 7,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-10848_2b8b89e4-831d-467d-ad04-bee450a73fa0.png',
      title: 'پرینتر برادر مدل DCP-L2540DW چندکاره',
      off: 4,
      price: 12999000
    },

    {
      id: 8,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-10341_861a18d2-cf80-41eb-a790-b50a56bdf823.png',
      title: 'گوشی موبایل آنر X6 ظرفیت 64 گیگابایت رم 4 گیگابایت',
      off: 7,
      price: 4899000
    },

    {
      id: 9,
      imgUrl:
        'https://www.technolife.ir/image/small_product-TLP-26026_5cdfa7d5-646f-48a6-ba1d-6bd82866f70f.png',
      title: 'گوشی موبايل نوکیا مدل 106 (2023) دو سیم کارت',
      off: 2,
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

  const [homeDevices, setHomeDevices] = useState([
    {
      id: 1,
      title: 'پنکه',
      imgUrl: 'https://www.technolife.ir/image/static_homeAppliance_fan.png',
      hover: true
    },
    {
      id: 2,
      title: 'جاروبرقی',
      imgUrl: 'https://www.technolife.ir/image/static_homeAppliance_vaccum.png',
      hover: true
    },
    {
      id: 3,
      title: 'آبمیوه گیری',
      imgUrl: 'https://www.technolife.ir/image/static_homeAppliance_juicer.png',
      hover: true
    },
    {
      id: 4,
      title: 'کولر گازی',
      imgUrl:
        'https://www.technolife.ir/image/static_homeAppliance_airConditioner.png',
      hover: true
    },
    {
      id: 5,
      title: 'چای ساز',
      imgUrl:
        'https://www.technolife.ir/image/static_homeAppliance_teaMaker.png',
      hover: true
    },
    {
      id: 6,
      title: 'اتو',
      imgUrl: 'https://www.technolife.ir/image/static_homeAppliance_iron.png',
      hover: true
    },
    {
      id: 7,
      title: 'پلو پز',
      imgUrl:
        'https://www.technolife.ir/image/static_homeAppliance_riceMaker.png',
      hover: true
    },
    {
      id: 8,
      title: 'مایکروویو',
      imgUrl:
        'https://www.technolife.ir/image/static_homeAppliance_microwave.png',
      hover: true
    },
    {
      id: 9,
      title: 'یخچال',
      imgUrl:
        'https://www.technolife.ir/image/static_homeAppliance_refrigerator.png',
      hover: true
    },
    {
      id: 10,
      title: 'قهوه ساز',
      imgUrl:
        'https://www.technolife.ir/image/static_homeAppliance_coffeMaker.png',
      hover: true
    },
    {
      id: 11,
      title: 'چرخ گوشت',
      imgUrl:
        'https://www.technolife.ir/image/static_homeAppliance_meatGreander.png',
      hover: true
    },
    {
      id: 12,
      title: 'ماشین ظرفشویی',
      imgUrl:
        'https://www.technolife.ir/image/static_homeAppliance_dishwasher.png',
      hover: true
    },
    {
      id: 13,
      title: 'سشوار',
      imgUrl:
        'https://www.technolife.ir/image/static_homeAppliance_hairDryer.png',
      hover: true
    },
    {
      id: 14,
      title: 'ماشین لباسشویی',
      imgUrl:
        'https://www.technolife.ir/image/static_homeAppliance_washingMachine.png',
      hover: true
    }
  ])

  return (
    <>
      <div className='max-w-[1920px] mx-auto'>
        <Header />
        <HomeImageSwiper />
        <div className='md:w-[93%] mx-auto'>
          <div className=' mx-auto md:border-4 rounded-3xl  pt-3 !border-[#FF334B]'>
            <div className='relative w-full h-full'>
              <img
                className='block w-full md:hidden'
                src='https://www.technolife.ir/image/static_technoffHeaderMobile.svg'
                alt=''
              />
              <img
                className='hidden w-full md:block'
                src='https://www.technolife.ir/image/static_technoffHeader.svg'
                alt=''
              />
              <div className='absolute z-50 mt-1 left-10 top-1/4'>
                <Link href='/products'>
                  <span className='flex items-center text-xs text-white md:text-base'>
                    نمایش همه
                    <AiOutlineLeft className='text-lg ' />
                  </span>
                </Link>
              </div>
            </div>
            <Cards />
          </div>
          <div className='mx-2 mt-16 md:mx-auto'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              <Link href="/products" 
              onClick={() => dispatch(searchItems("ساعت هوشمند"))}>
                <img
                  className='cursor-pointer rounded-3xl'
                  src='https://www.technolife.ir/image/banner_CenterTripletBanners_QOWozq_2eb6a274-3333-4181-9009-fc226fdf9f2d.png'
                  alt=''
                />
              </Link>
              <Link href="/products" 
              onClick={() => dispatch(searchItems("هدفون"))}>
                <img
                  className='cursor-pointer rounded-3xl'
                  src='https://www.technolife.ir/image/banner_CenterTripletBanners_0hrMoC_4febe95a-0c3e-415c-8616-8f4341dd4dce.png'
                  alt=''
                />
              </Link>
              <Link href="/products" 
              onClick={() => dispatch(searchItems("پاور"))}>
                <img
                  className='cursor-pointer rounded-3xl'
                  src='https://www.technolife.ir/image/banner_CenterTripletBanners_CHZ2Cb_f9627969-3631-420c-a6b1-6fe3094fe2cc.png'
                  alt=''
                />
              </Link>
            </div>
          </div>

          <Mobiles title='پرچمداران هوشمند' cardsIMG={cardsIMG} />

          <div className='mt-12'>
            <h2 className='flex justify-center text-2xl'>برترین‌های موبایل</h2>

            <div className='flex flex-wrap justify-center gap-4 mx-12'>
              <div className='flex flex-col items-center cursor-pointer'>
                <img
                  className='md:w-[250px] md:h-[270px] h-[72px] w-[72px]'
                  src='https://www.technolife.ir/image/static_phone_samsung.png'
                  alt=''
                />
                <p>سامسونگ</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img
                  className='md:w-[250px] md:h-[270px] h-[72px] w-[72px]'
                  src='https://www.technolife.ir/image/static_phone_poco.png'
                  alt=''
                />
                <p>پوکو</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img
                  className='md:w-[250px] md:h-[270px] h-[72px] w-[72px]'
                  src='https://www.technolife.ir/image/static_phone_iphone.png'
                  alt=''
                />
                <p>آیفون</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img
                  className='md:w-[250px] md:h-[270px] h-[72px] w-[72px]'
                  src='https://www.technolife.ir/image/static_phone_honor.png'
                  alt=''
                />
                <p>آنر</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img
                  className='md:w-[250px] md:h-[270px] h-[72px] w-[72px]'
                  src='https://www.technolife.ir/image/static_phone_xiaomi.png'
                  alt=''
                />
                <p>شیائومی</p>
              </div>
            </div>
          </div>

          <div className='mt-16'>
            <img
              className='hidden rounded-2xl md:block'
              src='https://www.technolife.ir/image/banner_SingleFullWidthBanner_GjzIO4_3b556959-1398-4a2d-967d-1631f5b8a8b0.png'
              alt=''
            />
          </div>
          <div className='mx-3 mt-16'>
            <img
              className='block rounded-2xl md:hidden'
              src='https://www.technolife.ir/image/banner_DownFullWidthBanner_uM08LZ_b1905a85-566c-4555-9134-f1f788089068.png'
              alt=''
            />
          </div>

          <Laptops title='لپ‌تاپ‌ها در تکنولایف' />

          <div className='mt-12'>
            <h2 className='flex justify-center text-2xl'>
              برترین‌های لپ تاپ ها
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mx-12'>
              <div className='flex flex-col items-center cursor-pointer'>
                <img
                  className='md:w-[250px] md:h-[270px] h-[72px] w-[72px]'
                  src='https://www.technolife.ir/image/static_laptop_asus.png'
                  alt=''
                />
                <p>ایسوس</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img
                  className='md:w-[250px] md:h-[270px] h-[72px] w-[72px]'
                  src='https://www.technolife.ir/image/static_laptop_hp.png'
                  alt=''
                />
                <p>اچ پی</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img
                  className='md:w-[250px] md:h-[270px] h-[72px] w-[72px]'
                  src='https://www.technolife.ir/image/static_laptop_mac.png'
                  alt=''
                />
                <p>مک بوک</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img
                  className='md:w-[250px] md:h-[270px] h-[72px] w-[72px]'
                  src='https://www.technolife.ir/image/static_laptop_lenovo.png'
                  alt=''
                />
                <p>لنوو</p>
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                <img
                  className='md:w-[250px] md:h-[270px] h-[72px] w-[72px]'
                  src='https://www.technolife.ir/image/static_laptop_aser.png'
                  alt=''
                />
                <p>ایسر</p>
              </div>
            </div>
          </div>

          <div className='hidden mx-auto mt-16 md:block'>
            <div className='grid grid-cols-2 gap-8'>
              <img
                className='cursor-pointer rounded-3xl'
                src='https://www.technolife.ir/image/banner_FirstTwinBanners_6ohJam_434f75a5-6d3b-4a2b-af04-e130826e0538.png'
                alt=''
              />
              <img
                className='cursor-pointer rounded-3xl'
                src='https://www.technolife.ir/image/banner_FirstTwinBanners_zPiLrk_5da07cd4-6673-490d-9512-0fcff18a2614.png'
                alt=''
              />
            </div>
          </div>

          <div className='block mx-3 mt-16 md:hidden'>
            <div className='grid grid-cols-1 gap-8'>
              <img
                className='rounded cursor-pointer'
                src='https://www.technolife.ir/image/banner_FirstTwinBannersMobile_jU0293_408c7163-f4f5-4db9-b1cd-4e4ab8d2f163.png'
                alt=''
              />
              <img
                className='rounded cursor-pointer'
                src='https://www.technolife.ir/image/banner_FirstTwinBannersMobile_rZ6vH6_0fa642c2-47d8-4be7-88b3-716ab489692d.png '
                alt=''
              />
            </div>
          </div>

          <div>
            <div className='flex items-baseline gap-3 mt-16'>
              <h2>لوازم خانگی</h2>
              <small className='text-xs text-gray-400'>خانه و آشپزخانه</small>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-7'>
              {homeDevices.map(product => {
                return <HomeDevices key={product.id} {...product} />
              })}
            </div>
          </div>
        </div>
        <Footer />
        <FooterMobile />
      </div>
    </>
  )
}

export default index
