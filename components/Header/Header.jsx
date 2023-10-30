import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Link from 'next/link'
import { BiSearchAlt } from 'react-icons/bi'
import Icon from '../../images/IconWebsite.png'
import { SlBasketLoaded } from 'react-icons/sl'
import HeaderItems from './HeaderItems'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineCodeSandbox, AiOutlinePlus } from 'react-icons/ai'
import { CiShop } from 'react-icons/ci'
import { BsTrash } from 'react-icons/bs'
import { addProduct, decreaseProduct } from '@/redux/product/productActions'
import { ToastContainer, toast } from 'react-toastify'
import {
  findedInputItems,
  getProductsFromServer
} from '@/redux/products/ProductReducer'
import { useRouter } from 'next/router'

const Header = () => {
  const dispatch = useDispatch()
  const productBasketCount = useSelector(item => item?.productActions)
  const allProducts = useSelector(item => item?.allProducts?.allProducts)
  const path = useRouter()

  const totalBasketPrice = productBasketCount.basket.map(basket => {
    if (basket.newPrice) {
      return basket.newPrice
    }
    return basket.price
  })
  const [menuHeaderName, setMenuHeaderName] = useState([
    {
      id: 1,
      title: 'گوشی موبایل',
      items: {
        firstTitle: 'موبایل',
        firstImg: 'https://www.technolife.ir/image/menu/phone.svg',
        secondTitle: 'لوازم جانبی موبایل',
        secondImg: 'https://www.technolife.ir/image/menu/phoneTools.svg',
        thiredTitle: 'قطعات موبایل',
        forthTitle: 'گوشی بر اساس عملکرد',
        forthImg: 'https://www.technolife.ir/image/menu/phoneFunction.svg',
        thiredImg: 'https://www.technolife.ir/image/menu/phoneParts.svg',
        fifithTitle: 'گوشی بر اساس حافظه',
        fifithImg: 'https://www.technolife.ir/image/menu/phoneMemory.svg',
        sixithTitle: 'گوشی بر اساس قیمت',
        sixithImg: 'https://www.technolife.ir/image/menu/phonePrice.svg'
      }
    },

    {
      id: 2,
      title: 'لپ تاپ و تبلت',
      items: {
        firstTitle: 'لپ تاپ ها',
        secondTitle: 'لپ تاپ براساس کاربرد',
        thiredTitle: 'سری های محبوب لپ تاپ',
        forthTitle: 'لوازم و قطعات لپ تاپ ',
        fifithTitle: 'لپ تاپ بر اساس قیمت',
        sixithTitle: 'تبلت',
        firstImg: 'https://www.technolife.ir/image/menu/laptop.svg',
        secondImg: 'https://www.technolife.ir/image/menu/byUsage.svg',
        thiredImg: 'https://www.technolife.ir/image/menu/phoneFunction.svg',
        forthImg: 'https://www.technolife.ir/image/menu/byLikes.svg',
        fifithImg: 'https://www.technolife.ir/image/menu/phonePrice.svg',
        sixithImg: 'https://www.technolife.ir/image/menu/tablet.svg'
      }
    },

    {
      id: 3,
      title: 'هدفون و هندزفری',
      items: {
        firstTitle: 'انواع هندزفری',
        secondTitle: 'انواع هدفون و هدست',
        thiredTitle: 'لوازم جانبی هندزفری',
        forthTitle: 'هندزفری بر اساس کاربرد',
        firstImg: 'https://www.technolife.ir/image/menu/handsFree.svg',
        secondImg: 'https://www.technolife.ir/image/menu/headphone.svg',
        thiredImg: 'https://www.technolife.ir/image/menu/airpods.svg',
        forthImg: 'https://www.technolife.ir/image/menu/byUsage.svg'
      }
    },

    {
      id: 4,
      title: 'ساعت و بندهوشمند',
      items: {
        firstTitle: 'ساعت هوشمند',
        secondTitle: 'ساعت مچی ',
        thiredTitle: 'لوازم جانبی ساعت هوشمند',
        forthTitle: 'ساعت بر اساس کاربرد',
        fifithTitle: 'ساعت براساس قیمت',
        firstImg: 'https://www.technolife.ir/image/menu/smartWatch.svg',
        secondImg: 'https://www.technolife.ir/image/menu/handWatch.svg',
        thiredImg: 'https://www.technolife.ir/image/menu/watchTools.svg',
        forthImg: 'https://www.technolife.ir/image/menu/byUsage.svg',
        fifithImg: 'https://www.technolife.ir/image/menu/phonePrice.svg'
      }
    },

    {
      id: 5,
      title: 'کامپیوتر و ماشین های اداری',
      items: {
        firstTitle: 'All in One',
        secondTitle: 'تجهیزات و قطعات کامپیوتر',
        thiredTitle: 'مانیتور',
        forthTitle: 'ماشین اداری',
        fifithTitle: 'کیس اسمبل شده',
        firstImg: 'https://www.technolife.ir/image/menu/AllInOne.svg',
        secondImg: 'https://www.technolife.ir/image/menu/computerPart.svg',
        thiredImg: 'https://www.technolife.ir/image/menu/computerTools.svg',
        forthImg: 'https://www.technolife.ir/image/menu/printer.svg',
        fifithImg: 'https://www.technolife.ir/image/menu/computerCase.svg'
      }
    },

    {
      id: 6,
      title: 'شبکه و تجهیزات ذخیره سازی',
      items: {
        firstTitle: 'پاوربانک',
        secondTitle: 'هارد,فلش و SSD',
        thiredTitle: 'تجهیزات شبکه',
        forthTitle: 'مودم,روتر و واکسس پوینت',
        fifithTitle: 'دوربین مدار بسته',
        firstImg: 'https://www.technolife.ir/image/menu/powerBank.svg',
        secondImg: 'https://www.technolife.ir/image/menu/hardSSD.svg',
        thiredImg: 'https://www.technolife.ir/image/menu/networkEqq.svg',
        forthImg: 'https://www.technolife.ir/image/menu/modem.svg',
        fifithImg: 'https://www.technolife.ir/image/menu/phoneFunction.svg'
      }
    },

    {
      id: 7,
      title: 'گیمینگ',
      items: {
        firstTitle: 'کنسول های بازی',
        secondTitle: 'دسته های بازی',
        thiredTitle: 'تجهیزات و لوازم گیمینگ',
        forthTitle: 'لوازم جانبی کنسول',
        firstImg: 'https://www.technolife.ir/image/menu/gamingPs.svg',
        secondImg: 'https://www.technolife.ir/image/menu/PsTools.svg',
        thiredImg: 'https://www.technolife.ir/image/menu/gamingTools.svg',
        forthImg: 'https://www.technolife.ir/image/menu/consoleEqq.svg'
      }
    },

    {
      id: 8,
      title: 'صوتی و تصویری',
      items: {
        firstTitle: 'تلویزیون',
        secondTitle: 'ساندبار',
        thiredTitle: 'اسپیکر و بلندگو',
        forthTitle: 'تجهیزات ضبط و پخش',
        fifithTitle: 'دوربین عکاسی',
        firstImg: 'https://www.technolife.ir/image/menu/laptop.svg',
        secondImg: 'https://www.technolife.ir/image/menu/byUsage.svg',
        thiredImg: 'https://www.technolife.ir/image/menu/phoneFunction.svg',
        forthImg: 'https://www.technolife.ir/image/menu/byLikes.svg',
        fifithImg: 'https://www.technolife.ir/image/menu/phonePrice.svg',
        sixithImg: 'https://www.technolife.ir/image/menu/tablet.svg'
      }
    },

    {
      id: 9,
      title: 'لوازم خانگی',
      items: {
        firstTitle: 'پخت و پز ',
        secondTitle: 'نوشیدنی ساز',
        thiredTitle: 'یخچال فریزرها',
        forthTitle: 'شستشو و نظافت',
        fifithTitle: 'تهویه,سرمایش و گرمایش',
        sixithTitle: 'لوازم شخصی و سلامت محیط',
        firstImg: 'https://www.technolife.ir/image/menu/laptop.svg',
        secondImg: 'https://www.technolife.ir/image/menu/byUsage.svg',
        thiredImg: 'https://www.technolife.ir/image/menu/phoneFunction.svg',
        forthImg: 'https://www.technolife.ir/image/menu/byLikes.svg',
        fifithImg: 'https://www.technolife.ir/image/menu/phonePrice.svg',
        sixithImg: 'https://www.technolife.ir/image/menu/tablet.svg'
      }
    }
  ])

  const [isShowNav, setIsShowNav] = useState(false)
  const [isShowBasket, setIsShowBasket] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = e => {
    setSearchQuery(e.target.value)
  }

  const inputClickHandler = () => {
    const findedItem = allProducts.filter(item =>
      item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    )
    if (path.pathname != '/products') {
      path.push('/products')
    }
    if (!findedItem || !searchQuery) {
      dispatch(getProductsFromServer())
      dispatch(findedInputItems())
    } else {
      dispatch(findedInputItems(findedItem))
    }
  }
  const inputkeyHandler = e => {
    if (e.keyCode === 13) {
      if (path.pathname != '/products') {
        path.push('/products')
      }
      const findedItem = allProducts.filter(item =>
        item.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      )
      if (!findedItem || !searchQuery) {
        dispatch(getProductsFromServer())
        dispatch(findedInputItems())
      } else {
        dispatch(findedInputItems(findedItem))
      }
    }
  }

  useEffect(() => {
    dispatch(getProductsFromServer())

    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsShowNav(true)
      } else if (window.scrollY < 60) {
        setIsShowNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch])

  return (
    <>
      <Sidebar />
      <div className=' px-8 mx-auto sticky top-0 shadow-lg right-0 left-0 bg-white z-[99999]'>
        <div className='items-center justify-between hidden lg:flex'>
          <div className='flex items-center gap-4'>
            <div className='hidden md:block'>
              <Link href={`/`}>
                <img className='w-[136px] h-20' src={Icon.src} alt='#' />
              </Link>
            </div>
            <div className=''>
              <div className='w-full h-full bg-[#F0F0F0] rounded-xl'>
                <div className='relative flex items-center gap-2 p-1'>
                  <div className=''>
                    <BiSearchAlt className='text-2xl' />
                  </div>
                  <div className='w-full h-full '>
                    <input
                      type='text'
                      className='bg-[#F0F0F0] rounded-xl caret-[#007aff]  h-full py-2 md:w-[350px]  w-[80vw]'
                      placeholder='محصول مورد نظرتان را جستجو کنید'
                      value={searchQuery}
                      onChange={handleInputChange}
                      onKeyDown={inputkeyHandler}
                    />
                  </div>
                  <button
                    onClick={inputClickHandler}
                    className='absolute z-50 p-1 text-xs text-white bg-red-500 rounded-lg left-1 top-[12px] '
                  >
                    جستجو
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='items-center hidden gap-4 md:flex'>
            <div className='flex items-center justify-center gap-2 py-1  border cursor-pointer !border-[#e49547] rounded-lg pl-6 pr-[21px]'>
              <div>
                <Link href='' className=''>
                  ورود
                </Link>
              </div>
              <div className='py-3 border'></div>
              <div>
                <Link href=''>ثبت نام</Link>
              </div>
            </div>

            <div
              onMouseEnter={() =>
                productBasketCount.basket[0] ? setIsShowBasket(true) : ''
              }
              onMouseLeave={() => setIsShowBasket(false)}
              className='p-[9px] border shadow-md relative rounded-lg cursor-pointer md:block group'
            >
              <SlBasketLoaded className='text-2xl ' />
              {productBasketCount.basket[0] ? (
                <div
                  className={`absolute   right-0 flex items-center justify-center w-4 h-4 text-sm text-white bg-red-500 rounded-full bottom-1`}
                >
                  {productBasketCount.basket.length}
                </div>
              ) : (
                <div></div>
              )}
              <div
                className={`absolute ${
                  isShowBasket ? 'block' : 'hidden'
                }  !w-[350px] !text-[10px] top-8 !-left-0 bg-white shadow-lg rounded-lg z-[999]`}
              >
                <div className='relative  !p-0 overflow-hidden'>
                  <div className='px-[24px] py-[14px] '>
                    <header className='flex items-center justify-between w-full px-3 py-2 bg-gray-100 rounded-md'>
                      <div className='flex items-center'>
                        <h3 className='text-gray-700 font-semiBold'>
                          سبد خرید شما
                        </h3>
                        <span className='mr-2 text-gray-500 font-semiBold'>
                          {productBasketCount.basket.length} عدد کالا
                        </span>
                      </div>
                      <a className='flex items-center' href='/cart'>
                        <p className='flex items-center font-semiBold text-primary-100'>
                          مشاهده سبد خرید
                        </p>
                      </a>
                    </header>
                  </div>
                  <div className=' max-h-96 max-w-full flex flex-col overflow-y-auto overflow-x-hidden px-8 dir-ltr mr-1.5 basket_dropdown_wrapper'>
                    <div className='dir-rtl'>
                      {productBasketCount.basket.map(product => {
                        return (
                          <div className='w-full pb-[24px] pt-3 border-b border-gray-200 last:border-none'>
                            <div className='flex items-stretch w-full '>
                              <div className='flex w-2/3 flex-col gap-[2px]'>
                                <div className='h-[18px] w-[60px] '></div>
                                <div className='flex flex-col justify-between pl-4 '>
                                  <h2 className=' font-semiBold leading-[26px] text-gray-800'>
                                    {product.title}
                                  </h2>
                                  <div className='mt-[10px] flex w-full flex-col'>
                                    <div className='flex items-center w-full mt-3 '>
                                      <div className='flex items-center justify-center w-5 h-5 ml-4'>
                                        <CiShop className='text-lg font-semibold' />
                                      </div>
                                      <p className='font-medium text-gray-700 '>
                                        امداد موبایل
                                      </p>
                                    </div>
                                    <div className='flex items-center w-full'>
                                      <div className='flex items-center justify-center w-5 h-2'>
                                        <span className='bg-gray-700 circle-dot'></span>
                                      </div>
                                    </div>
                                    <div className='flex items-center w-full'>
                                      <div className='flex items-center justify-center w-5 h-5 ml-4'>
                                        <AiOutlineCodeSandbox className='text-lg font-semibold' />
                                      </div>
                                      <p className='text-yellow-500 font-semiBold'>
                                        موجود در انبار امداد موبایل
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <a
                                className='w-1/3 pt-3'
                                href={`/products/${product.id}`}
                              >
                                <div className='relative w-full'>
                                  <div className='absolute inset-0 w-full h-full'>
                                    <img
                                      loading='lazy'
                                      width='116'
                                      height='116'
                                      alt='گوشی موبایل نوکیا مدل (2022) Nokia 105 دو سیم کارت-small-image'
                                      src={product.img}
                                      className='responsive-image'
                                    />
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className='mt-[14px] flex w-full flex-col'>
                              <div className='flex flex-row items-stretch w-full '>
                                <div className='flex flex-col justify-between flex-1'>
                                  <div className='flex items-center gap-2.5 w-full flex-wrap'>
                                    <div>
                                      <div className='flex w-max items-center border p-[3px] h-6.5 rounded-[7px] border-yellow-300'>
                                        <span className='flex items-center justify-center bg-black  border border-gray-300 h-5 w-5 rounded-[6px]'></span>
                                        <p className='ml-3 mr-2 leading-5 text-gray-700 select-none whitespace-nowrap font-semiBold'>
                                          مشکی
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='w-full h-8'></div>
                                  <div className='relative flex justify-between w-full'>
                                    <button
                                      onClick={() => {
                                        dispatch(
                                          addProduct({
                                            off: product.off,
                                            count: 1,
                                            id: product.id
                                          })
                                        )
                                        toast.success(
                                          `.کالا به سبد شما اضافه شد`,
                                          {
                                            position: 'bottom-right',
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: 'light'
                                          }
                                        )
                                      }}
                                      className='transition-all text-blue-500 text-base shadow-xl  border  w-max relative flex items-center justify-center h-10 rounded-lg p-3 bg-transparent cursor-pointer !rounded bg-white !p-0  lg:!rounded-md shadow-200 !h-[28px] !w-[28px] lg:!h-8 lg:!w-8'
                                    >
                                      <AiOutlinePlus />
                                    </button>
                                    <div className='absolute text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
                                      <p className='text-center text-lg leading-4  text-gray-700 lg:text-[22px] xl:leading-8'>
                                        {product.count}
                                      </p>
                                    </div>
                                    <button
                                      onClick={() => {
                                        dispatch(
                                          decreaseProduct({ id: product.id })
                                        )
                                      }}
                                      className='transition-all w-max  text-blue-500 text-base shadow-xl border relative flex items-center justify-center h-10 rounded-lg p-3 bg-transparent cursor-pointer !rounded bg-white !p-0 shadow-200 lg:rounded-md !h-[28px] !w-[28px] lg:!h-8 lg:!w-8'
                                    >
                                      <BsTrash />
                                    </button>
                                  </div>
                                </div>
                                <div className='flex flex-col justify-end flex-1 pr-4'>
                                  <div className='flex flex-col items-end justify-end flex-1 '>
                                    <div className='flex'>
                                      <p className='text-[20px] font-semiBold text-gray-700'>
                                        {product.newPrice
                                          ? Number(
                                              product.newPrice
                                            ).toLocaleString()
                                          : Number(
                                              product.price
                                            ).toLocaleString()}
                                      </p>
                                      <span className='self-center mr-1 font-medium text-gray-700 text-gray-800 font-semiBold'>
                                        تومان
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className='w-full px-6 py-4 border-t border-gray-300 rounded-b-2xl bg-background'>
                  <Link href='/cart'>
                    <button className='transition-all w-max relative flex items-center justify-center h-[3.25rem] rounded-xl p-4 bg-green-600 text-white cursor-pointer !w-full'>
                      <p className='flex-1 text-base text-center font-semiBold'>
                        ورود و ثبت سفارش
                      </p>
                      <span className='absolute h-5 mr-3 border -right-70'></span>
                      <span className='flex items-center justify-center flex-1 text-xl font-semiBold'>
                        <span className='text-gray-800 text-sm font-medium mr-1  !font-medium !text-white'>
                          {totalBasketPrice.length >= 2
                            ? Number(
                                totalBasketPrice.reduce(
                                  (first, second) => first + second
                                )
                              ).toLocaleString()
                            : Number(totalBasketPrice).toLocaleString()}
                        </span>
                        <span className='mr-1 text-xs'>تومان</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mr-3 ${isShowNav ? 'mdAnimeUp' : 'mdAnimeDown'}`}>
          <div>
            <ul className=' !text-xs text-gray-700 hidden lg:gap-3 lg:flex'>
              {menuHeaderName.map(head => {
                return <HeaderItems key={head.id} {...head} />
              })}
              <div className='h-5 border '></div>
              <li className='relative mr-3 text-blue-500 cursor-pointer'>
                <span>فروشنده شو</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Header
