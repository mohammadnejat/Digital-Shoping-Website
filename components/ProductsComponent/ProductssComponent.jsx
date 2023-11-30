import Link from 'next/link'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import Loading from '../LoadingLoader/Loading'
import { useRouter } from 'next/router'

const ProductssComponents = () => {
  const route = useRouter().query.q
  const products = useSelector(product => product?.allProducts?.allProducts)
  const sorted = useSelector(product => product?.allProducts?.sortedProducts)
  const findedItem = products.filter(item =>
    item.title.toLocaleLowerCase().includes(route)
  )
  return (
    <>
      {!findedItem.length ? (
        products.map(product => {
          return (
            <div
              key={product.id}
              className=' relative w-full rounded-[10px] border bg-white pt-[52px] shadow-lg '
            >
              <Link href={`/products/${product.id}`}>
                <div className='mb-[16px]  flex gap-[9px]'>
                  {product.off ? (
                    <div className='absolute top-0 mt-1 right-4 left-4'>
                      <div className='flex  justify-between items-center w-full text-[#FF334B]'>
                        <span className='text-sm font-semibold '>امدادآف</span>
                        <span className='text-sm font-semibold'>25:46:24</span>
                      </div>
                      <div className='w-full  mt-1 !border-[#FF334B] !border-[2px]  rounded-2xl'></div>
                    </div>
                  ) : (
                    ''
                  )}
                  <div className='relative mx-auto'>
                    <img
                      loading='lazy'
                      className='w-[206px] h-[206px]'
                      title=' دستبند هوشمند هواوی مدل Band 7'
                      src={product.img}
                      alt=' دستبند هوشمند هواوی مدل Band 7-small-image'
                    />
                  </div>
                </div>
                <div className='h-20 px-4'>
                  <a
                    target='_blank'
                    className='line-clamp-3  overflow-hidden text-xs font-medium leading-[25px] text-gray-800'
                    href={`/products/${product.id}`}
                  >
                    {product.title}
                  </a>
                  <div className='flex items-center justify-end w-full h-5 '>
                    <div className='flex items-center gap-[2px]'>
                      <p className='text-sm font-semiBold leading-[18px] text-gray-600 flex '>
                        4.8
                        <AiFillStar className='text-yellow-500' />
                      </p>
                    </div>
                  </div>
                </div>
                {product.off ? (
                  <div className='mx-4 '>
                    <div className={`pt-6 flex justify-between `}>
                      <div className='flex  text-[11px] justify-center w-6 h-[18px] items-end gap-[2px] text-white bg-red-500 rounded-md'>
                        <span>%</span>
                        <span>{product.off}</span>
                      </div>
                      <div className='flex justify-end text-red-500 '>
                        <p className=' text-[18px] font-extrabold leading-5 '>
                          {Number(
                            (
                              product.price -
                              (product.off / 100) * product.price
                            ).toFixed()
                          ).toLocaleString()}
                          <span className=' text-[10px]  font-medium mr-1 font-semiBold leading-5 '>
                            تومان
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center float-left mt-1 mb-2 text-gray-400'>
                      <span className='line-through font-bold text-[14px]'>
                        {product.price.toLocaleString()}
                      </span>
                      <span className=' line-through text-[10px]   font-medium mr-1 font-semiBold leading-5 '>
                        تومان
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className='mx-4 '>
                    <div className={`pt-6 flex justify-end `}>
                      <div className='flex justify-end text-black '>
                        <p className=' text-[18px] font-extrabold leading-5 '>
                          {Number(product.price).toLocaleString()}
                          <span className=' text-[10px]  font-medium mr-1 font-semiBold leading-5 '>
                            تومان
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            </div>
          )
        })
      ) : findedItem ? (
        findedItem.map(product => {
          return (
            <div
              key={product.id}
              className=' relative w-full rounded-[10px] border bg-white pt-[52px] shadow-lg '
            >
              <Link href={`/products/${product.id}`}>
                <div className='mb-[16px]  flex gap-[9px]'>
                  {product.off ? (
                    <div className='absolute top-0 mt-1 right-4 left-4'>
                      <div className='flex  justify-between items-center w-full text-[#FF334B]'>
                        <span className='text-sm font-semibold '>امدادآف</span>
                        <span className='text-sm font-semibold'>25:46:24</span>
                      </div>
                      <div className='w-full  mt-1 !border-[#FF334B] !border-[2px]  rounded-2xl'></div>
                    </div>
                  ) : (
                    ''
                  )}
                  <div className='relative mx-auto'>
                    <img
                      loading='lazy'
                      className='w-[206px] h-[206px]'
                      title=' دستبند هوشمند هواوی مدل Band 7'
                      src={product.img}
                      alt=' دستبند هوشمند هواوی مدل Band 7-small-image'
                    />
                  </div>
                </div>
                <div className='px-4 '>
                  <a
                    target='_blank'
                    className='line-clamp-3  overflow-hidden text-xs font-medium leading-[25px] text-gray-800'
                    href={`/products/${product.id}`}
                  >
                    {product.title}
                  </a>
                  <div className='flex items-center justify-end w-full h-5 '>
                    <div className='flex items-center gap-[2px]'>
                      <p className='text-sm font-semiBold leading-[18px] text-gray-600 flex '>
                        4.8
                        <AiFillStar className='text-yellow-500' />
                      </p>
                    </div>
                  </div>
                </div>
                {product.off ? (
                  <div className='mx-4 '>
                    <div className={`pt-6 flex justify-between `}>
                      <div className='flex  text-[11px] justify-center w-6 h-[18px] items-end gap-[2px] text-white bg-red-500 rounded-md'>
                        <span>%</span>
                        <span>{product.off}</span>
                      </div>
                      <div className='flex justify-end text-red-500 '>
                        <p className=' text-[18px] font-extrabold leading-5 '>
                          {Number(
                            (
                              product.price -
                              (product.off / 100) * product.price
                            ).toFixed()
                          ).toLocaleString()}
                          <span className=' text-[10px]  font-medium mr-1 font-semiBold leading-5 '>
                            تومان
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center float-left mt-1 mb-2 text-gray-400'>
                      <span className='line-through font-bold text-[14px]'>
                        {product.price.toLocaleString()}
                      </span>
                      <span className=' line-through text-[10px]   font-medium mr-1 font-semiBold leading-5 '>
                        تومان
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className='mx-4 '>
                    <div className={`pt-6 flex justify-end `}>
                      <div className='flex justify-end text-black '>
                        <p className=' text-[18px] font-extrabold leading-5 '>
                          {Number(product.price).toLocaleString()}
                          <span className=' text-[10px]  font-medium mr-1 font-semiBold leading-5 '>
                            تومان
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            </div>
          )
        })
      ) : (
        <Loading />
      )}
    </>
  )
}

export default ProductssComponents
