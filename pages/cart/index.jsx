import Footer from '@/components/Footer/Footer'
import FooterMobile from '@/components/Footer/FooterMobile'
import Header from '@/components/Header/Header'
import { addProduct, decreaseProduct } from '@/redux/product/productActions'
import React from 'react'
import { AiOutlineCodeSandbox, AiOutlinePlus } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { CiShop } from 'react-icons/ci'
import { MdOutlineDone } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Cart () {
  const dispatch = useDispatch()
  const basketProducts = useSelector(action => action?.productActions?.basket)
  const basketProduct = useSelector(action => action)

  const totalBasketPrice = basketProducts.map(basket => {
    if (basket.newPrice) {
      return basket.newPrice
    }
    return basket.price
  })
  const offPrices = basketProducts.map(
    product => (product.off / 100) * product.price
  )
  console.log(basketProduct)
  return (
    <>
      <Header />
      <main className='mt-4'>
        <div className='mx-auto lg:w-[85%] grid lg:grid-cols-12 gap-14'>
          <div></div>
          {/* {productItem ? ( */}
          <div className='lg:col-span-7'>
            <div className='flex justify-between px-4'>
              <div className='flex items-center gap-1'>
                <span>سبد خرید شما</span>
                <span className='text-xs font-light text-gray-400'>
                  {' '}
                  عدد کالا {basketProducts.length}
                </span>
              </div>
              <span className='flex items-center gap-2 text-xs font-light text-gray-400'>
                حذف سبد خرید <BiTrash className='text-base' />
              </span>
            </div>
            {basketProducts.length ? (
              basketProducts.map(product => {
                return (
                  <div
                    key={product.id}
                    className='p-6 mt-4 rounded-lg lg:border'
                  >
                    <div class=' flex w-full justify-between'>
                      <div class=' flex flex-col pt-[18px]'>
                        <a class=''>
                          <p class=' pb-[27px] text-sm font-extrabold text-gray-800'>
                            {product.title}
                          </p>
                        </a>
                        <div>
                          <div class=':text-xs relative flex flex-col gap-2 lg:gap-[18px] div]:flex div]:items-center div]:gap-[10px] div]:lg:gap-4'>
                            <div>
                              <p class='text-xs 2lg:text-base leading-5 font-medium text-gray-600 flex items-center gap-2'>
                                <MdOutlineDone className='text-sm font-semibold text-white bg-green-500 rounded-full' />
                                12 ماه گارانتی نوآور همراه
                              </p>
                            </div>
                            <div>
                              <p class='text-xs 2lg:text-base leading-5 font-medium text-gray-600 flex items-center gap-2'>
                                <CiShop className='text-lg font-semibold ' />
                                نوآور همراه
                              </p>
                            </div>
                            <div>
                              <p class='text-xs font-medium !text-secondary-500 2lg:text-sm flex items-center gap-2 text-yellow-500'>
                                <AiOutlineCodeSandbox className='text-lg font-semibold' />
                                موجود در انبار فروشنده
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        class=''
                        href='/product-27453/%D9%84%D9%BE-%D8%AA%D8%A7%D9%BE-%D8%A7%DA%86-%D9%BE%DB%8C-16-%D8%A7%DB%8C%D9%86%DA%86%DB%8C-%D9%85%D8%AF%D9%84-spectre-x360-16-i7-%DB%B1%DB%B2%DB%B6%DB%B0p-1tb-arc-a%DB%B3%DB%B7%DB%B0m-'
                      >
                        <div class=' h-[216px] w-[216px]'>
                          <img
                            loading='lazy'
                            width='216'
                            height='216'
                            alt='لپ تاپ اچ پی 16 اینچی مدل Spectre x360 16 i7 ۱۲۶۰P 1TB Arc A۳۷۰M -small-image'
                            src={product.img}
                          />
                        </div>
                      </a>
                    </div>
                    <div className='flex justify-center w-full shadow-lg lg:shadow-none lg:justify-end'>
                      <div
                        className={`lg:w-4/12 p-4 lg:border  ${'float-left'} rounded-lg`}
                      >
                        <div
                          className={`flex items-center ${
                            product.off ? 'justify-between' : 'justify-end'
                          } `}
                        >
                          <span
                            className={`flex items-center ml-4 lg:ml-0 ${
                              product.off ? 'block' : 'hidden'
                            } justify-center p-2 text-[12px] h-5 text-white bg-red-500 rounded-lg`}
                          >
                            {product.off} %
                          </span>
                          <div className='flex items-center gap-4 lg:gap-1'>
                            <div>
                              <span
                                className={`text-gray-500 ${
                                  product.off ? 'block' : 'hidden'
                                } text-[10px] line-through`}
                              >
                                {Number(product.price).toLocaleString()}
                              </span>
                            </div>
                            <div
                              className={`flex items-center justify-end  w-full gap-[2px]`}
                            >
                              <span
                                className={`text-sm font-semibold ${
                                  product.off ? 'text-red-500' : 'text-black'
                                }`}
                              >
                                {product.newPrice
                                  ? Number(product.newPrice).toLocaleString()
                                  : Number(product.price).toLocaleString()}
                              </span>
                              <span
                                className={` ${
                                  product.off ? 'text-red-500' : 'text-black'
                                } text-[10px]`}
                              >
                                تومان
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className='flex items-center justify-between mt-2'>
                          <div class='flex w-max items-center border border-yellow-500 p-[1px] h-6.5 rounded-[7px] border-secondary-500'>
                            <span class='flex items-center justify-center  border border-gray-300 h-4 w-4 rounded-[6px] bg-red-500'></span>
                            <p class='ml-2 mr-1 select-none whitespace-nowrap text-[10px] leading-5 font-semiBold text-gray-700'>
                              قرمز
                            </p>
                          </div>
                          <div className='flex items-center justify-between gap-4'>
                            <div
                              onClick={() => {
                                dispatch(
                                  addProduct({
                                    count: 1,
                                    id: product.id
                                  })
                                )
                                toast.success(`.کالا به سبد شما اضافه شد`, {
                                  position: 'bottom-right',
                                  autoClose: 5000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  theme: 'light'
                                })
                              }}
                              className='p-2 text-blue-500 border rounded-lg shadow-lg cursor-pointer'
                            >
                              <AiOutlinePlus className='' />
                            </div>
                            {product.count}
                            <div
                              onClick={() => {
                                dispatch(decreaseProduct({ id: product.id }))
                              }}
                              className='p-2 text-blue-500 border rounded-lg shadow-lg cursor-pointer'
                            >
                              <BsTrash />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <h1 className='mt-4 text-3xl'>
                هیچ کالایی در سبد شما وجود ندارد{' '}
              </h1>
            )}
          </div>

          <div className='w-full lg:col-span-3'>
            <h3 className='text-center'>صورتحساب</h3>
            <div className='p-4 pt-4 mt-1 rounded-lg lg:shadow-lg lg:border'>
              <div className='flex items-center justify-between mt-4'>
                <span className='text-[11px]'>قیمت محصولات</span>
                <div className='flex items-center gap-1'>
                  <span className='text-[12px]'>
                    {totalBasketPrice.length >= 2
                      ? Number(
                          totalBasketPrice.reduce(
                            (first, second) => first + second
                          )
                        ).toLocaleString()
                      : Number(totalBasketPrice).toLocaleString()}
                  </span>
                  <span className=' text-[10px]'>تومان</span>
                </div>
              </div>
              <div className='flex items-center justify-between mt-4'>
                <span className='text-[11px]'>تخفیف محصولات</span>
                <div className='flex items-center gap-1'>
                  <span className='text-red-500 text-[12px]'>
                    {basketProducts.length >= 1
                      ? Number(
                          offPrices.reduce((first, second) => first + second)
                        ).toLocaleString()
                      : Number(offPrices).toLocaleString()}
                  </span>
                  <span className='text-red-500 text-[10px]'>تومان</span>
                </div>
              </div>
              <div className='flex items-center justify-between mt-4'>
                <span className='text-[11px]'>جمع کل</span>
                <div className='flex items-center gap-1'>
                  <span className='text-[12px]'>
                    {totalBasketPrice.length >= 2
                      ? Number(
                          totalBasketPrice.reduce(
                            (first, second) => first + second
                          )
                        ).toLocaleString()
                      : Number(totalBasketPrice).toLocaleString()}
                  </span>
                  <span className='text-[10px]'>تومان</span>
                </div>
              </div>
              <div class=' mt-6 w-full border-none border-gray-300'>
                <button
                  type='button'
                  class='relative flex w-full items-center justify-center h-[52px] bg-green-500 border-green-500 rounded-[10px]'
                >
                  <p class='text-base font-semiBold text-white'>ادامه خرید</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FooterMobile />
    </>
  )
}

export default Cart
