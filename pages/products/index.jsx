import React from 'react'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import FooterMobile from '../../components/Footer/FooterMobile'

import { GrUnorderedList } from 'react-icons/gr'
import ProductssComponents from '../../components/ProductsComponent/ProductssComponent'
import { useDispatch, useSelector } from 'react-redux'

import { sortedProducts } from '@/redux/products/ProductReducer'
const index = () => {
  const dispatch = useDispatch()
  const allProductsLength = useSelector(
    length => length?.allProducts?.allProducts.length
  )

  const sorted = e => {
    let value = e.target.value || e.target.innerHTML

    if (value === 'بیشترین قیمت') {
      dispatch(sortedProducts((a, b) => b.price - a.price))
    } else if (value === 'کمترین قیمت') {
      dispatch(sortedProducts((a, b) => a.price - b.price))
    } else if (value === 'بیشترین تخفیف') {
      dispatch(sortedProducts((a, b) => b.off - a.off))
    } else if (value === 'جدیدترین') {
      dispatch(sortedProducts((a, b) => a.id - b.id))
    }
  }
  return (
    <>
      <Header />
      <div className='grid grid-cols-12 w-[94%] lg:w-[85%] mx-auto gap-6 '>
        <div className='flex items-center h-full col-span-12 gap-2 pt-4 text-xs rounded-lg lg:col-span-11'>
          <div className='w-full h-full rounded-lg bg-[#F3F8FD] border py-3 px-2 flex justify-between items-center'>
            <div className='flex items-center w-full'>
              <GrUnorderedList className='text-lg' />
              <span className='ml-8 mr-4'>ترتیب: </span>
              <div className='block lg:hidden'>
                <select
                  onChange={sorted}
                  name='cars'
                  dir='ltr'
                  className='mx-2 border rounded'
                  id='cars'
                >
                  <option value='جدیدترین'>جدیدترین</option>
                  <option value='بیشترین قیمت'>بیشترین قیمت</option>
                  <option value='کمترین قیمت'>کمترین قیمت</option>
                  <option value='بیشترین تخفیف'>بیشترین تخفیف</option>
                </select>
              </div>
              <ul className='hidden gap-4 text-xs lg:flex font-extralight'>
                <li onClick={sorted} className='cursor-pointer'>
                  بیشترین قیمت
                </li>
                <li onClick={sorted} className='cursor-pointer'>
                  کمترین قیمت
                </li>
                <li onClick={sorted} className='cursor-pointer'>
                  جدیدترین
                </li>
                <li onClick={sorted} className='cursor-pointer'>
                  بیشترین تخفیف
                </li>
              </ul>
            </div>
            <span className='items-center hidden gap-2 ml-2 lg:flex '>
              تمام کالاها:
              <span className='text-red-600 '>{allProductsLength}</span>
            </span>
            <span className='flex items-center lg:hidden'>
              کالاها:
              <span className='text-red-600 '>{allProductsLength}</span>
            </span>
          </div>
          <div className='hidden mr-2 lg:block'>
            <button className='px-9 py-3 bg-[#2962FF] text-white rounded-lg'>
              <span>مقایسه</span>
            </button>
          </div>
        </div>
        <div className='col-span-12 mx-auto'>
          <div className='grid justify-items-center lg:gap-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-1 lg:p-8'>
            <ProductssComponents />
          </div>
        </div>
      </div>
      <Footer />
      <FooterMobile />
    </>
  )
}

export default index
