import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import TopButton from '../TopButton/TopButton'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import UserMenuActive from '../../Context/Context'

const BasketView = () => {
    const { productsBasket, setProductsBasket, totalPriceProduct, sendPrice, FinalPayment } = useContext(UserMenuActive)




    return (
        <>
            <Header />
            {
                productsBasket.length === 0
                    ?
                    <div className='flex justify-center p-10 text-2xl font-bold text-red-600 border'>
                        <h1>هیچ محصولی در سبد شما یافت نشد!!!</h1>
                    </div>
                    :
                    <div className='flex flex-col lg:flex-row'>
                        <div className='grid grid-cols-1 mx-3 lg:grid-cols-2 justify-items-end'>
                            {
                                productsBasket.map(product =>
                                (
                                    <>
                                        <div key={product.id} className='w-full mt-2 mb-6 border rounded-md'>
                                            <div className='flex gap-4 p-2 lg:p-4 h-52'>
                                                <div className=''>
                                                    <img className='w-full h-full' src={product.img} alt="#" />
                                                </div>

                                                <div className='flex gap-10'>
                                                    <div className='flex flex-col'>
                                                        <span className='text-lg font-bold text-red-600'>{product.title}</span>
                                                        <span className='text-xs font-bold '>فروشنده : امداد موبایل</span>

                                                        <div className='grid items-center grid-cols-3 justify-items-center'>
                                                            <button className='flex items-center justify-center w-2/4 px-3 py-1 bg-green-500 rounded-sm' onClick={() => {
                                                                const updatedItems = productsBasket.map((item) =>
                                                                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                                                                );
                                                                setProductsBasket(updatedItems);
                                                            }}>+</button>
                                                            <span>{product.count}</span>
                                                            <button className='flex items-center justify-center w-2/4 px-3 py-1 bg-red-500 rounded-sm' onClick={() => {
                                                                const updatedItems = productsBasket.map((item) =>
                                                                    item.id === product.id ? { ...item, count: item.count - 1 } : item
                                                                );
                                                                setProductsBasket(updatedItems);
                                                            }}>-</button>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className='flex flex-col '>
                                                    <div className='p-2'>
                                                        <span>  تعداد خریداری شده: <span className='font-bold text-red-600'>{product.count}</span></span>
                                                    </div>

                                                    <span className='font-bold text-red-600'>{product.price}تومان</span>
                                                    <div className='flex justify-center w-8/12 mt-10'>
                                                        <Button className='w-full' variant="contained" color="error">
                                                            حذف
                                                        </Button>
                                                    </div>

                                                </div>

                                            </div>



                                        </div>
                                    </>
                                ))
                            }
                        </div>

                        <div className='w-full p-8 mt-6 border rounded-lg lg:w-2/4 h-96'>
                            <div className='flex justify-between font-bold'>
                                <span>قیمت کالا</span>
                                <span>{totalPriceProduct} تومان</span>
                            </div>
                            <hr />
                            <div className='flex justify-between mt-5 font-bold'>
                                <span>هزینه ارسال</span>
                                <span>{sendPrice} تومان</span>
                            </div>
                            <hr />
                            <div className='flex justify-between mt-5 font-bold'>
                                <span>قابل پرداخت</span>
                                <span>{FinalPayment} تومان</span>
                            </div>
                            <div className='mt-6'>
                                <Link to="/payment/checkout" className=''>
                                    <Button variant="contained" color="success" className='w-full mt-2' >
                                        تسویه حساب
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
            }

            <TopButton />
            <Footer />
        </>
    )
}

export default BasketView