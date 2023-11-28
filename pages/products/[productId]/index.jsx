import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { MdOutlineDone, MdOutlineNotificationAdd } from 'react-icons/md'
import { DiGitCompare } from 'react-icons/di'
import { BsCheck, BsShieldCheck } from 'react-icons/bs'
import {
  AiOutlineLeft,
  AiOutlinePlus,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineMessage,
  AiOutlineCodeSandbox
} from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import { CiShop } from 'react-icons/ci'
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import {
  addtoBasket,
  decreaseProduct
} from '../../../redux/product/productActions'
import { getProductsFromServer } from '../../../redux/products/ProductReducer'
import FooterMobile from '@/components/Footer/FooterMobile'
import Loading from '@/components/LoadingLoader/Loading'
import Link from 'next/link'
import { configRedux } from '@/redux/store'

const index = ({ params: id, allProducts, basket, productItem }) => {
  const dispatch = useDispatch()
  const Swal = require('sweetalert2')

  const addProductToBasket = () => {
    dispatch(
      addtoBasket({
        id: productItem.id,
        title: productItem.title,
        img: productItem.img,
        price: productItem.price,
        count: 1,
        off: productItem.off
      })
    )
  }
  const [color, setColor] = useState('سبز')

  const findedItem = basket.find(item => item.id === productItem.id)

  return (
    <>
      <ToastContainer />
      <Header />
      <hr />

      {productItem ? (
        <>
          <div className='lg:w-[85%] w-[90%]  mx-auto lg:grid lg:grid-cols-12 mt-4 gap-3'>
            <div className='block lg:hidden'>
              <div className='flex items-center gap-3 justify-evenly '>
                <div className='flex justify-center w-8 h-8 border rounded-lg shadow-md cursor-pointer'>
                  <span className='mt-[7px] text-teal-50'>
                    <AiOutlineShareAlt />
                  </span>
                </div>
                <div className='flex justify-center w-8 h-8 border rounded-lg shadow-md cursor-pointer'>
                  <span className='mt-[7px] text-blue-500'>
                    <AiOutlineMessage />
                  </span>
                </div>
                <div className='flex justify-center w-8 h-8 border rounded-lg shadow-md cursor-pointer'>
                  <span className='mt-[7px] text-stone-500'>
                    <DiGitCompare />
                  </span>
                </div>
                <div className='flex justify-center w-8 h-8 border rounded-lg shadow-md cursor-pointer'>
                  <span className='mt-[7px] text- text-yellow-500'>
                    <MdOutlineNotificationAdd />
                  </span>
                </div>
                <div className='flex justify-center w-8 h-8 border rounded-lg shadow-md cursor-pointer'>
                  <span className='mt-[7px] text-red-500'>
                    <AiOutlineHeart />
                  </span>
                </div>
              </div>
              <div className='flex flex-col w-full'>
                <div className='flex justify-between w-full text-sm font-bold text-red-600'>
                  <span>امداد آف</span>
                  <span>55:20:21</span>
                </div>
                <div className='w-full border-2 border-red-600' />
              </div>
              <div className='flex justify-center w-full my-3'>
                <img
                  className='w-[260px] h-[260px]'
                  src={productItem.img}
                  alt=''
                />
              </div>
              <div>
                <p className='font-semibold'>{productItem.title}</p>
                <div className='flex flex-col my-3 text-sm '>
                  <div className='mr-2'>
                    <span>رنگ:</span>
                    <span>{color}</span>
                  </div>
                  <div className='flex justify-around gap-3 mt-2'>
                    <div
                      onClick={() => setColor('سبز')}
                      className={`flex items-center p-[2px] gap-1 px-1 text-sm border-2 ${
                        color === 'سبز'
                          ? 'border-green-500'
                          : 'border-slate-200'
                      } rounded-lg`}
                    >
                      <div className={`rounded-md bg-green-500 p-1 relative`}>
                        <BsCheck className='text-lg text-white' />
                      </div>
                      <span>سبز</span>
                    </div>
                    <div
                      onClick={() => setColor('خاکستری')}
                      className={`flex items-center p-[2px] gap-1 px-1 text-sm border-2 ${
                        color === 'خاکستری'
                          ? 'border-[#8F8F8F]'
                          : 'border-slate-200'
                      }  rounded-lg`}
                    >
                      <div className={`rounded-md bg-[#8F8F8F] p-1 relative`}>
                        <BsCheck className='text-lg text-white' />
                      </div>
                      <span>خاکستری</span>
                    </div>
                    <div
                      onClick={() => setColor('آبی')}
                      className={`flex items-center p-[2px] gap-1 px-1 text-sm border-2 ${
                        color === 'آبی'
                          ? 'border-[#3479BF]'
                          : 'border-slate-200'
                      }  rounded-lg`}
                    >
                      <div className={`rounded-md bg-[#3479BF] p-1 relative`}>
                        <BsCheck className='text-lg text-white' />
                      </div>
                      <span>آبی</span>
                    </div>
                    <div
                      onClick={() => setColor('طلایی')}
                      className={`flex items-center p-[2px] gap-1 px-1 text-sm border-2 ${
                        color === 'طلایی'
                          ? 'border-[#D4A54C]'
                          : 'border-slate-200'
                      }  rounded-lg`}
                    >
                      <div className={`rounded-md bg-[#D4A54C] p-1 relative`}>
                        <BsCheck className='text-lg text-white' />
                      </div>
                      <span>طلایی</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* LG Screen */}
            <div className='hidden col-span-9 p-4 mx-auto border rounded-lg lg:block'>
              <div className='flex justify-between'>
                <h2>{productItem.title}</h2>
                <div className='flex gap-3'>
                  <div className='flex justify-center w-8 h-8 border rounded-lg shadow-md cursor-pointer'>
                    <span className='mt-[7px] text-teal-500'>
                      <AiOutlineShareAlt />
                    </span>
                  </div>
                  <div className='flex justify-center w-8 h-8 border rounded-lg shadow-md cursor-pointer'>
                    <span className='mt-[7px] text-blue-500'>
                      <AiOutlineMessage />
                    </span>
                  </div>
                  <div className='flex justify-center w-8 h-8 border rounded-lg shadow-md cursor-pointer'>
                    <span className='mt-[7px] text-stone-500'>
                      <DiGitCompare />
                    </span>
                  </div>
                  <div className='flex justify-center w-8 h-8 border rounded-lg shadow-md cursor-pointer'>
                    <span className='mt-[7px] text- text-yellow-500'>
                      <MdOutlineNotificationAdd />
                    </span>
                  </div>
                  <div className='flex justify-center w-8 h-8 border rounded-lg shadow-md cursor-pointer'>
                    <span className='mt-[7px] text-red-500'>
                      <AiOutlineHeart />
                    </span>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-9 mt-2'>
                <div className='col-span-5'>
                  <div className='flex gap-2 '>
                    <h3 className='text-xs font-semibold cursor-pointer'>
                      نظرات کاربران:{' '}
                    </h3>
                    <span className='text-xs text-yellow-500 cursor-pointer'>
                      3 نظر{' '}
                    </span>
                  </div>
                  <div className='my-4 border w-28'></div>
                  <div>
                    <div className='flex flex-col my-3 text-sm '>
                      <div className='mr-2'>
                        <span>رنگ:</span>
                        <span>{color}</span>
                      </div>
                      <div className='flex gap-3 mt-2'>
                        <div
                          onClick={() => setColor('سبز')}
                          className={`flex items-center cursor-pointer p-[2px] gap-1 px-1 text-sm border-2 ${
                            color === 'سبز'
                              ? 'border-green-500'
                              : 'border-slate-200'
                          } rounded-lg`}
                        >
                          <div
                            className={`rounded-md bg-green-500 p-1 relative`}
                          >
                            <BsCheck className='text-lg text-white' />
                          </div>
                          <span>سبز</span>
                        </div>
                        <div
                          onClick={() => setColor('خاکستری')}
                          className={`flex items-center cursor-pointer p-[2px] gap-1 px-1 text-sm border-2 ${
                            color === 'خاکستری'
                              ? 'border-[#8F8F8F]'
                              : 'border-slate-200'
                          }  rounded-lg`}
                        >
                          <div
                            className={`rounded-md bg-[#8F8F8F] p-1 relative`}
                          >
                            <BsCheck className='text-lg text-white' />
                          </div>
                          <span>خاکستری</span>
                        </div>
                        <div
                          onClick={() => setColor('آبی')}
                          className={`flex items-center cursor-pointer p-[2px] gap-1 px-1 text-sm border-2 ${
                            color === 'آبی'
                              ? 'border-[#3479BF]'
                              : 'border-slate-200'
                          }  rounded-lg`}
                        >
                          <div
                            className={`rounded-md bg-[#3479BF] p-1 relative`}
                          >
                            <BsCheck className='text-lg text-white' />
                          </div>
                          <span>آبی</span>
                        </div>
                        <div
                          onClick={() => setColor('طلایی')}
                          className={`flex items-center cursor-pointer p-[2px] gap-1 px-1 text-sm border-2 ${
                            color === 'طلایی'
                              ? 'border-[#D4A54C]'
                              : 'border-slate-200'
                          }  rounded-lg`}
                        >
                          <div
                            className={`rounded-md bg-[#D4A54C] p-1 relative`}
                          >
                            <BsCheck className='text-lg text-white' />
                          </div>
                          <span>طلایی</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full my-4 border'></div>
                  <div>
                    <h3 className='text-xs'>ویژگی های اصلی</h3>
                    <div className='p-3 mt-3 border border-yellow-500 rounded-md'>
                      <ul className='flex flex-col text-xs'>
                        <li className='pt-1 pb-2 border-b-2 border-dashed'>
                          <span className='font-semibold text-gray-400'>
                            سازگاری:
                          </span>
                          <span className='mr-4'>{productItem.title}</span>
                        </li>
                        <li className='py-3 border-b-2 border-dashed'>
                          <span className='font-semibold text-gray-400'>
                            حافظه داخلی:
                          </span>
                          <span className='mr-4'>128گیگابایت</span>
                        </li>
                        <li className='py-3 border-b-2 border-dashed'>
                          <span className='font-semibold text-gray-400'>
                            Ramحافظه:
                          </span>
                          <span className='mr-4'>4 گیگابایت</span>
                        </li>
                        <li className='py-3 border-b-2 border-dashed'>
                          <span className='font-semibold text-gray-400'>
                            سایز صفحه نمایش:
                          </span>
                          <span className='mr-4'>6.7 اینچ</span>
                        </li>
                        <li className='py-3 border-b-2 border-dashed'>
                          <span className='font-semibold text-gray-400'>
                            دوربین:
                          </span>
                          <span className='mr-4'>
                            چهارگانه 12 مگاپیکسل + 12 مگاپیکسل + 12 مگاپیکسل +
                            TOF 3D
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-span-4'>
                  <div>
                    <img
                      className='w-auto h-[340px]'
                      src={productItem.img}
                      alt=''
                    />
                  </div>
                  <div className='flex justify-evenly'>
                    <div
                      onClick={() => {
                        Swal.fire({
                          title: productItem.title,
                          imageUrl: productItem.img,
                          imageWidth: 450,
                          imageHeight: 350,
                          showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                          },
                          hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                          }
                        })
                      }}
                      className='flex items-center justify-center w-16 h-16 p-1 border rounded-md cursor-pointer'
                    >
                      <img src={productItem.img} alt='' />
                    </div>
                    <div
                      onClick={() => {
                        Swal.fire({
                          title: productItem.title,
                          imageUrl: productItem.img,
                          imageWidth: 450,
                          imageHeight: 350,
                          showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                          },
                          hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                          }
                        })
                      }}
                      className='flex items-center justify-center w-16 h-16 p-1 border rounded-md cursor-pointer'
                    >
                      <img src={productItem.img} alt='' />
                    </div>
                    <div
                      onClick={() => {
                        Swal.fire({
                          title: productItem.title,
                          imageUrl: productItem.img,
                          imageWidth: 450,
                          imageHeight: 350,
                          showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                          },
                          hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                          }
                        })
                      }}
                      className='flex items-center justify-center w-16 h-16 p-1 border rounded-md cursor-pointer'
                    >
                      <img src={productItem.img} alt='' />
                    </div>
                    <div
                      onClick={() => {
                        Swal.fire({
                          title: productItem.title,
                          imageUrl: productItem.img,
                          imageWidth: 450,
                          imageHeight: 350,
                          showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                          },
                          hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                          }
                        })
                      }}
                      className='flex items-center justify-center w-16 h-16 p-1 border rounded-md cursor-pointer'
                    >
                      <img src={productItem.img} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End LG Screen */}
            <div className='w-full col-span-3 '>
              <div className=' p-3 text-[10px] rounded-lg w-full'>
                <div className='p-4 mt-2 border rounded-md shadow-md'>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-2'>
                      <BsShieldCheck />
                      <span className='font-semibold'>بیمه کالا</span>
                    </div>
                    <div className='flex items-center gap-1 font-semibold text-blue-500 cursor-pointer'>
                      <span>نمایش جزییات</span>
                      <AiOutlineLeft />
                    </div>
                  </div>
                  <div className='flex justify-between mt-2'>
                    <div className='flex items-center justify-between gap-2 p-1 px-2 text-blue-500 border border-blue-500 rounded-md cursor-pointer'>
                      <span>خرید بیمه</span>
                      <AiOutlinePlus />
                    </div>

                    <div className='flex items-center gap-1'>
                      <span className='text-gray-400 line-through'>36,750</span>
                      <span className='text-sm font-semibold '>14,700</span>
                      <span>تومان</span>
                    </div>
                  </div>
                </div>
                <div className=' bg-[#F3F8FD] w-full mx-auto p-3 mt-4'>
                  <div className='flex flex-col'>
                    <div className='flex items-center gap-3'>
                      <CiShop className='text-lg font-semibold' />
                      <span>امداد موبایل</span>
                    </div>
                  </div>
                  <div className='flex flex-col mt-2'>
                    <div className='flex items-center gap-3'>
                      <AiOutlineCodeSandbox className='text-lg font-semibold' />
                      <span className='text-yellow-600 '>
                        موجود امداد موبایل ( ارسال فوری )
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-col mt-6'>
                    <div className='flex items-center gap-3'>
                      <MdOutlineDone className='text-sm font-semibold text-white bg-green-500 rounded-full' />
                      <span className=''>18 ماه گارانتی سامتل</span>
                    </div>
                  </div>
                  <div className='block w-full'>
                    <div className='float-left ml-6'>
                      <span className='text-xl font-semibold '>
                        {Number(productItem.price).toLocaleString()}
                      </span>
                      <span className='mr-1'>تومان</span>
                    </div>
                    {!findedItem ? (
                      <div className=''>
                        <div
                          className='w-full mt-2 rounded-lg py-3 text-[14px] cursor-pointer  text-white bg-[#1C9722] flex justify-center items-center'
                          onClick={() => {
                            addProductToBasket()
                            toast.success(`.کالا به سبد شما اضافه شد`, {
                              position: 'bottom-right',
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: 'light'
                            })
                          }}
                        >
                          افزودن به سبد خرید
                        </div>
                      </div>
                    ) : (
                      <div className=''>
                        <div className='w-full mt-2 rounded-lg py-3 text-[14px] cursor-pointer text-[#1C9722] flex justify-around items-center'>
                          <span
                            onClick={() => {
                              dispatch(decreaseProduct({ id: productItem.id }))
                            }}
                          >
                            حذف
                          </span>
                          <Link
                            href='/cart'
                            className='border-[#1C9722] rounded-md border-2 px-5 py-2 '
                          >
                            مشاهده سبد خرید
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className='p-3 mt-4 border shadow-md '>
                <div className='w-full p-[2px] h-full rounded-md bg-gradient-to-br from-[#00AADF] via-[#8448D0] to-[#F000BB]'>
                  <div className='flex items-center justify-between gap-2 p-2 bg-white rounded-md '>
                    <div className='flex-col'>
                      <span>ارسال فردا</span>
                      <div className='flex items-center gap-1 text-xs font-semibold text-blue-500 cursor-pointer'>
                        <span>توضیحات بیشتر</span>
                        <AiOutlineLeft />
                      </div>
                    </div>
                    <img
                      src='https://www.technolife.ir/image/static_pdp_delivery_tomorrow.svg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex w-full lg:w-[50%] mx-auto justify-evenly text-[10px] my-10 '>
            <div className='flex flex-col items-center'>
              <img
                className='w-14 h-14'
                src='https://www.technolife.ir/image/static_payment-in-installments.svg'
                alt=''
              />
              <span>7 روز ضمانت بازگشت کالا</span>
            </div>
            <div className='flex flex-col items-center'>
              <img
                className='w-14 h-14'
                src='https://www.technolife.ir/image/static_refund-money.svg'
                alt=''
              />
              <span>پرداخت اقساطی</span>
            </div>
            <div className='flex flex-col items-center'>
              <img
                className='w-14 h-14'
                src='https://www.technolife.ir/image/static_original-warranty.svg'
                alt=''
              />
              <span>ضمانت اصالت کالا</span>
            </div>
            <div className='flex flex-col items-center'>
              <img
                className='w-14 h-14'
                src='https://www.technolife.ir/image/static_pay-at-home.svg'
                alt=''
              />
              <span>پرداخت در محل</span>
            </div>
          </div>
          <div className='lg:w-[80%]  mx-auto bg-[#F6F6F6] border-b border-b-slate-400'>
            <div className='mr-4'>
              <ul className='flex text-[10px] gap-4'>
                0- 7
                <li className='py-3 border-b-2 cursor-pointer border-b-yellow-700'>
                  مشخصات فنی
                </li>
                <li className='py-3 cursor-pointer'>نقد و بررسی</li>
                <li className='py-3 cursor-pointer'>نظرات کاربران</li>
              </ul>
            </div>
          </div>

          <div className='lg:w-[80%] mx-auto mt-6'>
            <div className='flex items-center'>
              <BsDot className='text-4xl font-semibold text-yellow-700' />
              <h2 className='text-xl'>مشخصات فنی</h2>
            </div>
            <div className='grid lg:grid-cols-12'>
              <div className='flex flex-col col-span-7 gap-3'>
                <div className='p-3 flex flex-col bg-[#F3F8FD] w-10/12 lg:w-8/12 gap-2 rounded-lg'>
                  <span>نوع پردازنده - CPU :</span>
                  <span className='text-xs text-gray-400'>
                    MediaTek MT6261D
                  </span>
                </div>
                <div className='p-3 flex flex-col bg-[#F3F8FD] w-10/12 lg:w-8/12 gap-2 rounded-lg'>
                  <span>تعداد سیم کارت :</span>
                  <span className='text-xs text-gray-400'>
                    MediaTek MT6261D
                  </span>
                </div>
                <div className='p-3 flex flex-col bg-[#F3F8FD] w-10/12 lg:w-8/12 gap-2 rounded-lg'>
                  <span>سیستم عامل :</span>
                  <span className='text-xs text-gray-400'>
                    MediaTek MT6261D
                  </span>
                </div>
                <div className='p-3 flex flex-col bg-[#F3F8FD] w-10/12 lg:w-8/12 gap-2 rounded-lg'>
                  <span>ابعاد/ وزن :</span>
                  <span className='text-xs text-gray-400'>
                    MediaTek MT6261D
                  </span>
                </div>
                <div className='p-3 flex flex-col bg-[#F3F8FD] w-10/12 lg:w-8/12 gap-2 rounded-lg'>
                  <span>ساختار بدنه :</span>
                  <span className='text-xs text-gray-400'>
                    MediaTek MT6261D
                  </span>
                </div>
                <div className='p-3 flex flex-col bg-[#F3F8FD] w-10/12 lg:w-8/12 gap-2 rounded-lg'>
                  <span>حافظه RAM :</span>
                  <span className='text-xs text-gray-400'>
                    MediaTek MT6261D
                  </span>
                </div>
                <div className='p-3 flex flex-col bg-[#F3F8FD] w-10/12 lg:w-8/12 gap-2 rounded-lg'>
                  <span>سایز صفحه نمایش :</span>
                  <span className='text-xs text-gray-400'>
                    MediaTek MT6261D
                  </span>
                </div>
                <div className='p-3 flex flex-col bg-[#F3F8FD] w-10/12 lg:w-8/12 gap-2 rounded-lg'>
                  <span>باتری :</span>
                  <span className='text-xs text-gray-400'>
                    MediaTek MT6261D
                  </span>
                </div>
              </div>
              <div className='col-span-4 mx-2 my-3'>
                <div className='sticky border !top-20 rounded-2xl !px-6 !pb-6 !pt-5 shadow-lg  relative w-full p-6 transition-all bg-white'>
                  <div className='flex items-start justify-between gap-4 '>
                    <img
                      loading='lazy'
                      width='108'
                      height='108'
                      alt=''
                      src={productItem.img}
                    />
                    <div>
                      <p className='mb-2 text-sm leading-7 text-gray-800 font-semiBold'>
                        {productItem.title}
                      </p>
                      <div className='flex items-center gap-2.5 w-full flex-wrap'>
                        <div>
                          <div className='flex w-max items-center border p-[3px] h-6.5 rounded-[7px] border-secondary-500'>
                            <span className='flex items-center justify-center  border border-gray-300 h-5 w-5 rounded-[6px] bg-black text-white'>
                              <MdOutlineDone />
                            </span>
                            <p className='ml-3 mr-2 text-xs leading-5 text-gray-700 select-none whitespace-nowrap font-semiBold'>
                              {color}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='pt-3 -mx-3 '>
                    <div className='p-3'>
                      <div className=' bg-[#F3F8FD] w-full mx-auto p-3'>
                        <div className='flex flex-col'>
                          <div className='flex items-center gap-3'>
                            <CiShop className='text-lg font-semibold' />
                            <span className='!text-[11px]'>امداد موبایل</span>
                          </div>
                        </div>
                        <div className='flex flex-col mt-2'>
                          <div className='flex items-center gap-3'>
                            <AiOutlineCodeSandbox className='text-lg font-semibold' />
                            <span className='text-yellow-600  !text-[11px]'>
                              موجود در انبار امداد موبایل ( ارسال فوری )
                            </span>
                          </div>
                        </div>
                        <div className='flex flex-col mt-6'>
                          <div className='flex items-center gap-3'>
                            <MdOutlineDone className='text-sm font-semibold text-white bg-green-500 rounded-full' />
                            <span className=' !text-[11px]'>
                              18 ماه گارانتی سامتل
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full h-2'></div>
                  <div className='flex justify-end ml-4'>
                    <div className='flex flex-col items-end max-w-max'>
                      <div className='flex items-center'>
                        <p className='text-[19px] font-semiBold !leading-5 xl:text-[22px] text-gray-800'>
                          {Number(productItem.price).toLocaleString()}
                        </p>
                        <span className='text-gray-800 text-xs font-medium mr-1 !font-semiBold !leading-5'>
                          تومان
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='w-full h-4'></div>
                  <div className='px-2'>
                    {!basket.length >= 1 ? (
                      <div className=''>
                        <div
                          className='w-full mt-2 rounded-lg py-3 text-[14px] cursor-pointer  text-white bg-[#1C9722] flex justify-center items-center'
                          onClick={() => {
                            addProductToBasket()
                            toast.success(`.کالا به سبد شما اضافه شد`, {
                              position: 'bottom-right',
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: 'light'
                            })
                          }}
                        >
                          افزودن به سبد خرید
                        </div>
                      </div>
                    ) : (
                      <div className=''>
                        <div className='w-full mt-2 rounded-lg py-3 text-[14px] cursor-pointer text-[#1C9722] flex justify-around items-center'>
                          <span>حذف</span>
                          <Link
                            href='/cart'
                            className='border-[#1C9722] rounded-md border-2 px-5 py-2 '
                          >
                            مشاهده سبد خرید
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[4px] mt-6 w-full lg:w-[80%] mx-auto'>
            <div className='w-full border'></div>
            <div className='w-full border'></div>
          </div>
          <div className=' w-[93%] lg:w-[80%] mx-auto mt-6'>
            <div className='flex items-center'>
              <BsDot className='text-4xl font-semibold text-yellow-700' />
              <h2 className='text-xl'>نظرات کاربران</h2>
              <span className='mr-3 text-gray-400 text-[13px]'>3 نظر</span>
            </div>

            <div className='gap-3 p-3 mt-3 lg:grid lg:grid-cols-12'>
              <div className='col-span-7 p-2 bg-slate-200'>
                <article className='w-full p-6 px-8 mb-8 rounded-lg shadow-md bg-slate-100'>
                  <header className='flex items-center justify-between w-full'>
                    <div className='flex flex-col items-start gap-y-2 lg:flex-row lg:items-center'>
                      <div className='flex items-center'>
                        <p className='mr-2 text-sm text-gray-600 whitespace-nowrap'>
                          فرنود رئوفی
                        </p>
                      </div>
                    </div>
                    <div className='flex max-w-max items-center justify-center rounded-full border p-[3px] max-w-max border border-green-800 p-[4px] border-gray-300 h-[26px]'>
                      <div className='flex items-center w-full'>
                        <p className='mx-1 text-[10px] font-semiBold text-green-800'>
                          4.0 متوسط
                        </p>
                        <div className='!h-4 !w-4 border bg-transparent !p-0  !border-green-800   border border-gray-300 lg:w-8 lg:h-8 p-1 rounded-full flex items-center justify-center'>
                          <MdOutlineDone />
                        </div>
                      </div>
                    </div>
                  </header>
                  <div className='pt-6 pb-4 my-4 border-gray-200 border-y'>
                    <p className='text-gray-800 leading-7.5 text-[11px] whitespace-pre-wrap'>
                      منو و کیبورد فارسی داره؟
                    </p>
                    <div className='w-full mt-8 text-left'>
                      <time className='text-sm  text-gray-400 text-[10px]'>
                        شنبه ۴ شهریور ۱۴۰۲{' '}
                      </time>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                      <p className='ml-8 text-[10px] font-semiBold text-gray-800'>
                        این نظر برای شما مفید بود ؟
                      </p>
                      <div className='ml-6 flex min-w-10 cursor-pointer items-center gap-2.5 '>
                        <span className='flex items-center gap-2 text-gray-800 font-semiBold'>
                          0
                          <FiThumbsUp />
                        </span>
                        <span className='flex items-center gap-2 text-gray-800 font-semiBold'>
                          0
                          <FiThumbsDown />
                        </span>
                      </div>
                    </div>
                    <div>
                      <button className='transition-all w-max relative flex items-center justify-center h-7 rounded p-1 px-3 bg-transparent cursor-pointer flex items-center !p-0'>
                        <div className='flex items-center cursor-pointer'>
                          <p className='text-[10px] font-semiBold text-primary-100 flex gap-1 !font-medium'>
                            پاسخ جدید به این نظر
                          </p>
                          <AiOutlineLeft className=' !text-sm' />
                        </div>
                      </button>
                      <div className='mt-[6px] flex items-center'>
                        <p className='mr-[6px] text-[10px] font-regular flex gap-1 items-center text-gray-600'>
                          <BiSolidMessageSquareDetail className='text-lg' />1
                          پاسخ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='w-full my-3 border'></div>
                  <div>
                    <div className='flex text-[10px] text-teal-500 gap-1'>
                      <p>پاسخ به</p>
                      <span>فرنود رئوفی</span>
                    </div>
                    <div className='mt-6 text-[10px]'>
                      <p>سلام فرنود جان بله پشتیبانی از زبان فارسی داره.</p>
                    </div>
                  </div>
                </article>
                <article className='w-full p-6 px-8 mb-8 rounded-lg shadow-md bg-slate-100'>
                  <header className='flex items-center justify-between w-full'>
                    <div className='flex flex-col items-start gap-y-2 lg:flex-row lg:items-center'>
                      <div className='flex items-center'>
                        <p className='mr-2 text-sm text-gray-600 whitespace-nowrap'>
                          فرنود رئوفی
                        </p>
                      </div>
                    </div>
                    <div className='flex max-w-max items-center justify-center rounded-full border p-[3px] max-w-max border border-green-800 p-[4px] border-gray-300 h-[26px]'>
                      <div className='flex items-center w-full'>
                        <p className='mx-1 text-[10px] font-semiBold text-green-800'>
                          3.0 متوسط
                        </p>
                        <div className='!h-4 !w-4 border bg-transparent !p-0  !border-green-800   border border-gray-300 lg:w-8 lg:h-8 p-1 rounded-full flex items-center justify-center'>
                          <MdOutlineDone />
                        </div>
                      </div>
                    </div>
                  </header>
                  <div className='pt-6 pb-4 my-4 border-gray-200 border-y'>
                    <p className='text-gray-800 leading-7.5 text-[11px] whitespace-pre-wrap'>
                      منو و کیبورد فارسی داره؟
                    </p>
                    <div className='w-full mt-8 text-left'>
                      <time className='text-sm  text-gray-400 text-[10px]'>
                        شنبه ۴ شهریور ۱۴۰۲{' '}
                      </time>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                      <p className='ml-8 text-[10px] font-semiBold text-gray-800'>
                        این نظر برای شما مفید بود ؟
                      </p>
                      <div className='ml-6 flex min-w-10 cursor-pointer items-center gap-2.5 '>
                        <span className='flex items-center gap-2 text-gray-800 font-semiBold'>
                          0
                          <FiThumbsUp />
                        </span>
                        <span className='flex items-center gap-2 text-gray-800 font-semiBold'>
                          0
                          <FiThumbsDown />
                        </span>
                      </div>
                    </div>
                    <div>
                      <button className='transition-all w-max relative flex items-center justify-center h-7 rounded p-1 px-3 bg-transparent cursor-pointer flex items-center !p-0'>
                        <div className='flex items-center cursor-pointer'>
                          <p className='text-[10px] font-semiBold text-primary-100 flex gap-1 !font-medium'>
                            پاسخ جدید به این نظر
                          </p>
                          <AiOutlineLeft className=' !text-sm' />
                        </div>
                      </button>
                      <div className='mt-[6px] flex items-center'>
                        <p className='mr-[6px] text-[10px] font-regular flex gap-1 items-center text-gray-600'>
                          <BiSolidMessageSquareDetail className='text-lg' />1
                          پاسخ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='w-full my-3 border'></div>
                  <div>
                    <div className='flex text-[10px] text-teal-500 gap-1'>
                      <p>پاسخ به</p>
                      <span>فرنود رئوفی</span>
                    </div>
                    <div className='mt-6 text-[10px]'>
                      <p>سلام فرنود جان بله پشتیبانی از زبان فارسی داره.</p>
                    </div>
                  </div>
                </article>
                <article className='w-full p-6 px-8 mb-8 rounded-lg shadow-md bg-slate-100'>
                  <header className='flex items-center justify-between w-full'>
                    <div className='flex flex-col items-start gap-y-2 lg:flex-row lg:items-center'>
                      <div className='flex items-center'>
                        <p className='mr-2 text-sm text-gray-600 whitespace-nowrap'>
                          فرنود رئوفی
                        </p>
                      </div>
                    </div>
                    <div className='flex max-w-max items-center justify-center rounded-full border p-[3px] max-w-max border border-green-800 p-[4px] border-gray-300 h-[26px]'>
                      <div className='flex items-center w-full'>
                        <p className='mx-1 text-[10px] font-semiBold text-green-800'>
                          5.0 متوسط
                        </p>
                        <div className='!h-4 !w-4 border bg-transparent !p-0  !border-green-800   border border-gray-300 lg:w-8 lg:h-8 p-1 rounded-full flex items-center justify-center'>
                          <MdOutlineDone />
                        </div>
                      </div>
                    </div>
                  </header>
                  <div className='pt-6 pb-4 my-4 border-gray-200 border-y'>
                    <p className='text-gray-800 leading-7.5 text-[11px] whitespace-pre-wrap'>
                      منو و کیبورد فارسی داره؟
                    </p>
                    <div className='w-full mt-8 text-left'>
                      <time className='text-sm  text-gray-400 text-[10px]'>
                        شنبه ۴ شهریور ۱۴۰۲{' '}
                      </time>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                      <p className='ml-8 text-[10px] font-semiBold text-gray-800'>
                        این نظر برای شما مفید بود ؟
                      </p>
                      <div className='ml-6 flex min-w-10 cursor-pointer items-center gap-2.5 '>
                        <span className='flex items-center gap-2 text-gray-800 font-semiBold'>
                          0
                          <FiThumbsUp />
                        </span>
                        <span className='flex items-center gap-2 text-gray-800 font-semiBold'>
                          0
                          <FiThumbsDown />
                        </span>
                      </div>
                    </div>
                    <div>
                      <button className='transition-all w-max relative flex items-center justify-center h-7 rounded p-1 px-3 bg-transparent cursor-pointer flex items-center !p-0'>
                        <div className='flex items-center cursor-pointer'>
                          <p className='text-[10px] font-semiBold text-primary-100 flex gap-1 !font-medium'>
                            پاسخ جدید به این نظر
                          </p>
                          <AiOutlineLeft className=' !text-sm' />
                        </div>
                      </button>
                      <div className='mt-[6px] flex items-center'>
                        <p className='mr-[6px] text-[10px] font-regular flex gap-1 items-center text-gray-600'>
                          <BiSolidMessageSquareDetail className='text-lg' />1
                          پاسخ
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='w-full my-3 border'></div>
                  <div>
                    <div className='flex text-[10px] text-teal-500 gap-1'>
                      <p>پاسخ به</p>
                      <span>فرنود رئوفی</span>
                    </div>
                    <div className='mt-6 text-[10px]'>
                      <p>سلام فرنود جان بله پشتیبانی از زبان فارسی داره.</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className='hidden lg:block'></div>
              <div className='w-full mt-4 lg:col-span-4 lg:w-auto'>
                <div className='rounded-2xl shadow-2xl border-[1px] relative w-full p-6 transition-all bg-white'>
                  <div className='flex flex-row items-center w-full px-2 2xl:flex-col 2xl:items-start'>
                    <div className='flex items-center w-full 2xl:mb-3'>
                      <p className='mr-2 text-sm leading-5 text-gray-700 font-semiBold'>
                        نظر خود را در مورد این محصول بنویسید ...
                      </p>
                    </div>
                    <button
                      id='add_cm'
                      type='button'
                      className='relative flex w-full items-center justify-center h-[52px] bg-transparent border-2 border-blue-500 rounded-[10px]'
                    >
                      <div className='relative flex items-center'>
                        <p className='pt-[2px] text-base font-semiBold text-sblue-500'>
                          افزودن نظر
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
      <Footer />
      <FooterMobile />
    </>
  )
}

export async function getServerSideProps (context) {
  const { params, req, res } = context
  const store = configRedux()
  await store.dispatch(getProductsFromServer())
  const state = store?.getState()
  let productItem = state?.allProducts?.allProducts.find(
    item => item.id === +params.productId
  )
  return {
    props: {
      params,
      allProducts: state?.allProducts?.allProducts,
      basket: state.productActions.basket,
      productItem
    }
  }
}

export default index
