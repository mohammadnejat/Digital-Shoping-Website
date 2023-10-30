import React from 'react'
import Icon from '../../images/IconWebsite.png'
const Footer = () => {
  return (
    <>
      <div className='w-[98%] mx-auto bg-[#142740] py-16 px-40 rounded-t-md hidden md:block  text-[#FFFFFF] mt-12'>
        <div className='flex justify-between'>
          <div className='flex justify-center items-center bg-white !h-[60px] !w-[120px] rounded-lg'>
            <img className=' !h-[130px] w-full' src={Icon.src} alt='' />
          </div>
          <div>
            <button className='h-[50px] w-[180px] bg-white rounded-xl'>
              <a
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='text-gray-800'
              >
                بازشگت به بالا
              </a>
            </button>
          </div>
        </div>

        <div className='mt-10 mb-10'>
          <div className='w-full  !border-[1px]'></div>
        </div>

        <div className='flex flex-col gap-12 lg:flex-row'>
          <div className='flex justify-between text-xs lg:justify-normal lg:mt-4 lg:flex-col'>
            <div className='flex flex-col '>
              <div className='flex gap-2 mt-12 lg:items-center'>
                <span>تلفن:</span>
                <div className=' flex gap-1 :font-semiBold leading-[25px]'>
                  <p className='whitespace-nowrap dir-ltr'>09055098468</p>
                  <span>-</span>
                  <p className='whitespace-nowrap'>09055098468</p>
                </div>
              </div>

              <div className='flex gap-2 lg:mt-16'>
                <span>ایمیل:</span>
                <p>mohammadofahmad@gmail.com</p>
              </div>
            </div>
            <div className='lg:mt-28'>
              <div className='3xl:max-w-[230px] 3xl:pb-[89px] 3xl:pr-1 3xl:pt-[61px]'>
                <div className='flex flex-col items-center justify-center gap-3 rounded-2xl bg-white pb-6 pt-4 lg:h-[74px] lg:flex-row lg:px-5 lg:py-0 2xl:h-auto 2xl:flex-col 2xl:items-start 2xl:justify-start 2xl:pb-6 2xl:pt-4'>
                  <p className=' text-lg font-semiBold leading-[28px] text-gray-700 lg:text-lg'>
                    شبکه‌های اجتماعی
                  </p>
                  <div className='flex gap-[23px]'>
                    <a
                      rel='nofollow noopener'
                      href='https://www.instagram.com/technolife.eshop'
                      target='_blank'
                      className='h-[30px]'
                    >
                      <img
                        loading='lazy'
                        width='30'
                        height='30'
                        alt='اینستاگرام'
                        title='اینستاگرام'
                        src='https://www.technolife.ir/image/static_instagram.svg'
                      />
                    </a>
                    <a
                      rel='nofollow noopener'
                      href='https://www.aparat.com/technolife.ir'
                      target='_blank'
                      className='h-[30px]'
                    >
                      <img
                        loading='lazy'
                        width='30'
                        height='30'
                        alt='آپارات'
                        title='آپارات'
                        src='https://www.technolife.ir/image/static_aparat.svg'
                      />
                    </a>
                    <a
                      rel='nofollow noopener'
                      href='https://t.me/technolife'
                      target='_blank'
                      className='h-[30px]'
                    >
                      <img
                        loading='lazy'
                        width='30'
                        height='30'
                        alt='تلگرام'
                        title='تلگرام'
                        src='https://www.technolife.ir/image/static_telegram.svg'
                      />
                    </a>
                    <a
                      rel='nofollow noopener'
                      href='https://www.youtube.com/c/Technolife_eshop'
                      target='_blank'
                      className='h-[30px]'
                    >
                      <img
                        loading='lazy'
                        width='30'
                        height='30'
                        alt='یوتوب'
                        title='یوتوب'
                        src='https://www.technolife.ir/image/static_youtube.svg'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap justify-between w-full'>
            <div className='w-1/3 pt-12 2xl:w-auto 2xl:pt-0'>
              <p className=' text-lg font-semiBold leading-[31px] '>
                دسترسی سریع
              </p>
              <div className='pt-6 '>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/blog'
                >
                  بلاگ
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/69_800_801/تمامی-گوشی‌ها'
                >
                  قیمت روز گوشی
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/69_70_77/گوشی-موبایل-سامسونگ-samsung'
                >
                  گوشی سامسونگ
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/69_70_73/گوشی-موبایل-اپل-apple'
                >
                  گوشی آیفون
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/69_70_79/گوشی-موبایل-شیائومی-xiaomi'
                >
                  گوشی شیائومی
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/69_70_799/گوشی-موبایل-پوکو-poco'
                >
                  گوشی پوکو
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://kasrapars.ir/%D8%B9%D9%85%D8%AF%D9%87-%D9%81%D8%B1%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84/'
                >
                  خرید عمده گوشی
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/compare'
                >
                  مقایسه گوشی‌
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/164_163_130/تمامی-کامپیوترها-و-لپ-تاپ-ها'
                >
                  قیمت لپ تاپ
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/31_157_531/تمام-هدفون-ها-و-هندزفری-ها'
                >
                  هندزفری بلوتوثی
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/164_163_825/کامپیوتر-و-لپ-تاپ-ایسوس-asus'
                >
                  لپ تاپ ایسوس
                </a>
              </div>
            </div>
            <div className='w-1/3 pt-12 2xl:w-auto 2xl:pt-0'>
              <p className=' text-lg font-semiBold leading-[31px] '>
                پرفروش ترین محصولات
              </p>
              <div className='pt-6 '>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product-3554/گوشی-موبایل-شیائومی-redmi-note-11-ظرفیت-128-گیگابایت---رم-6-گیگابایت'
                >
                  شیائومی نوت ۱۱
                </a>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product-2545/گوشی-موبايل-سامسونگ-مدل-گلکسی-a32-4g-دو-سیم-کارت---ظرفیت-128-گیگابایت---رم-6-گیگابایت'
                >
                  گوشی a32 سامسونگ
                </a>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product-5165/گوشی-موبایل-شیائومی-مدل-poco-x4-pro-5g-ظرفیت-256-گیگابایت---رم-8-گیگابایت'
                >
                  پوکو x4 پرو
                </a>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product-4974/گوشی-موبايل-سامسونگ-مدل-galaxy-a23-ظرفیت-128-گیگابایت---رم-6-گیگابایت'
                >
                  گوشی A23 سامسونگ
                </a>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product-3704/گوشی-موبايل-سامسونگ-مدل-گلکسی-a53-5g-ظرفیت-256-گیگابایت---رم-8-گیگابایت'
                >
                  گوشی A53 سامسونگ
                </a>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product-14997/گوشی-موبایل-سامسونگ-گلکسی-s23-ultra-5g-ظرفیت-256-گیگابایت-رم-12-گیگابایت---ویتنام'
                >
                  گوشی S23 Ultra سامسونگ
                </a>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/30_162_330/تمام-ساعت-ها'
                >
                  ساعت هوشمند
                </a>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/164_1021_1032/پرینتر'
                >
                  پرینتر
                </a>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/26_777_779/هارد-اکسترنال'
                >
                  هارد اکسترنال
                </a>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product/list/855_856_976/پنکه-'
                >
                  پنکه
                </a>
                <a
                  target='_blank'
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='https://www.technolife.ir/product-3163/هندزفری-بی-سیم-کیو-سی-وای-مدل-t13-'
                >
                  ایرپاد qcy t13
                </a>
              </div>
            </div>
            <div className='w-1/3 pt-12 2xl:w-auto 2xl:pt-0'>
              <p className=' text-lg font-semiBold leading-[31px] '>
                درباره ما
              </p>
              <div className='pt-6 '>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-2/%D8%A2%D8%B4%D9%86%D8%A7%DB%8C%DB%8C%20%D9%85%D8%AE%D8%AA%D8%B5%D8%B1%20%D8%A8%D8%A7%20%D8%AA%DA%A9%D9%86%D9%88%D9%84%D8%A7%DB%8C%D9%81'
                >
                  آمدادموبایل در یک نگاه
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-3/%D8%A7%D9%87%D8%AF%D8%A7%D9%81%20%D9%88%20%D8%AA%D8%B9%D9%87%D8%AF%20%D9%87%D8%A7%DB%8C%20%D8%AA%DA%A9%D9%86%D9%88%20%D9%84%D8%A7%DB%8C%D9%81'
                >
                  اهداف و تعهدهای ما
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-4/%D8%B3%D8%B1%DA%AF%D8%B0%D8%B4%D8%AA%20%D8%AA%DA%A9%D9%86%D9%88%D9%84%D8%A7%DB%8C%D9%81'
                >
                  سرگذشت آمدادموبایل
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/contact-us'
                >
                  تماس با ما
                </a>
              </div>
            </div>
            <div className='w-1/3 pt-12 2xl:w-auto 2xl:pt-0'>
              <p className=' text-lg font-semiBold leading-[31px] '>
                پیش از خرید
              </p>
              <div className='pt-6 '>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-5/%D8%B1%D8%A7%D9%87%D9%86%D9%85%D8%A7%DB%8C%20%D8%AE%D8%B1%DB%8C%D8%AF%20%D8%A7%D8%B2%20%D8%AA%DA%A9%D9%86%D9%88%D9%84%D8%A7%DB%8C%D9%81'
                >
                  راهنمای خرید از آمدادموبایل
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/landings/installment-payment'
                >
                  راهنمای خرید اقساطی
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-7/%D8%B1%D9%88%D8%B4%20%D9%87%D8%A7%DB%8C%20%D8%AE%D8%B1%DB%8C%D8%AF%20%D8%A7%D8%B2%20%D8%AA%DA%A9%D9%86%D9%88%D9%84%D8%A7%DB%8C%D9%81'
                >
                  روش های خرید از آمدادموبایل
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-8/%D8%B4%D8%B1%D8%A7%DB%8C%D8%B7%20%D8%B6%D9%85%D8%A7%D9%86%D8%AA%20%D9%87%D9%81%D8%AA%20%D8%B1%D9%88%D8%B2%D9%87%20%D8%AA%DA%A9%D9%86%D9%88%D9%84%D8%A7%DB%8C%D9%81'
                >
                  ضمانت هفت‌روزه آمدادموبایل
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-9/%D8%B1%D9%88%D8%B4%E2%80%8C%D9%87%D8%A7%20%D9%88%20%D9%87%D8%B2%DB%8C%D9%86%D9%87%E2%80%8C%D9%87%D8%A7%DB%8C%20%D8%A7%D8%B1%D8%B3%D8%A7%D9%84'
                >
                  {' '}
                  شیوه‌ها و هزینه ارسال
                </a>
              </div>
            </div>
            <div className='w-1/3 pt-12 2xl:w-auto 2xl:pt-0'>
              <p className=' text-lg font-semiBold leading-[31px] '>
                پس از خرید
              </p>
              <div className='pt-6 '>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-10/%D8%AA%D8%B6%D9%85%DB%8C%D9%86%20%D8%B1%D8%AC%DB%8C%D8%B3%D8%AA%D8%B1%DB%8C'
                >
                  تضمین رجیستری
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-11/%D8%B1%D9%88%DB%8C%D9%87%20%D9%87%D8%A7%DB%8C%20%D8%A8%D8%A7%D8%B2%DA%AF%D8%B1%D8%AF%D8%A7%D9%86%D8%AF%D9%86%20%DA%A9%D8%A7%D9%84%D8%A7'
                >
                  رویه‌های بازگرداندن کالا
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-12/%D8%B3%D9%88%D8%A7%D9%84%D8%A7%D8%AA%20%D9%85%D8%AA%D8%AF%D8%A7%D9%88%D9%84%20%D8%B1%D8%AC%DB%8C%D8%B3%D8%AA%D8%B1%DB%8C'
                >
                  سوالات متداول رجیستری
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-13/%D9%85%DA%A9%D8%A7%D9%86%20%DB%8C%D8%A7%D8%A8%DB%8C%20%D8%B3%D9%81%D8%A7%D8%B1%D8%B4%20%D9%87%D8%A7%DB%8C%20%D8%AE%D8%A7%D8%B1%D8%AC%20%D8%A7%D8%B2%20%D8%AA%D9%87%D8%B1%D8%A7%D9%86'
                >
                  رهگیری سفارش‌ها
                </a>
              </div>
            </div>
            <div className='w-1/3 pt-12 2xl:w-auto 2xl:pt-0'>
              <p className=' text-lg font-semiBold leading-[31px] '>
                قوانین و مقررات
              </p>
              <div className='pt-6 '>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-14/%D9%82%D9%88%D8%A7%D9%86%DB%8C%D9%86%20%D9%88%20%D9%85%D9%82%D8%B1%D8%B1%D8%A7%D8%AA'
                >
                  قوانین و مقررات
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-15/%D8%AD%D8%B1%DB%8C%D9%85%20%D8%AE%D8%B5%D9%88%D8%B5%DB%8C%20%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%A7%D9%86'
                >
                  حریم خصوصی کاربران
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-16/%D8%A7%D8%B2%20%D8%B2%D8%A8%D8%A7%D9%86%20%D9%85%D8%B4%D8%AA%D8%B1%DB%8C%D8%A7%D9%86%20%D8%AA%DA%A9%D9%86%D9%88%D9%84%D8%A7%DB%8C%D9%81'
                >
                  از زبان مشتریان آمدادموبایل
                </a>
                <a
                  className='block pb-3 text-xs font-medium leading-[22px] !text-gray-200'
                  href='/staticpage/page-1/%D8%A8%D9%87%20%D8%AA%DA%A9%D9%86%D9%88%D9%84%D8%A7%DB%8C%D9%81%20%D8%AE%D9%88%D8%B4%20%D8%A2%D9%85%D8%AF%DB%8C%D8%AF'
                >
                  چرا تکنولایف؟
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end w-full gap-6'>
          <div className='bg-white rounded-lg'>
            <img
              className='w-20 p-1 h-2w-20'
              src='https://www.technolife.ir/image/c5.png'
              alt=''
            />
          </div>
          <div className='bg-white rounded-lg'>
            <img
              className='w-20 p-1 h-2w-20'
              src='https://www.technolife.ir/image/c4.png'
              alt=''
            />
          </div>
          <div className='bg-white rounded-lg'>
            <img
              className='w-20 p-1 h-2w-20'
              src='https://www.technolife.ir/image/c3.png'
              alt=''
            />
          </div>
          <div className='bg-white rounded-lg'>
            <img
              className='w-20 p-1 h-2w-20'
              src='https://www.technolife.ir/image/c1.png'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='bg-[#051529] rounded-b-lg py-6 w-[98%] hidden md:block mx-auto text-white text-center mb-2'>
        <p>
          ساخته شده توسط
          <span className='text-red-500'>2Fast4U</span>
        </p>
      </div>
    </>
  )
}

export default Footer
