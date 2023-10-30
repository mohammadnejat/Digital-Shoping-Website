import React, { useContext } from 'react'
import Header from '../Header/Header'
import TopButton from '../TopButton/TopButton'
import Footer from '../Footer/Footer'
import { Button } from '@mui/material'
import UserMenuActive from '../../Context/Context'
import CheckoutPrices from '../CheckoutPrices/CheckoutPrices'


const Checkout = () => {
    const { productsBasket } = useContext(UserMenuActive)
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
                    <div className='flex flex-col gap-10 lg:flex-row '>
                        <div className='grid grid-cols-1 p-5 my-10 border lg:w-6/12 lg:grid-cols-1 justify-items-center lg:gap-10'>
                            <div className='w-full'>

                                <form className='w-full'>
                                    <div classname="grid gap-6 mb-6 md:grid-cols-2 w-full">
                                        <div className=''>
                                            <label for="first_name" classname="block mb-2 text-sm font-medium text-gray-900 dark:text-white">اسم</label>
                                            <input type="text" id="first_name" classname="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div>
                                            <label for="last_name" classname="block mb-2 text-sm font-medium text-gray-900 dark:text-white">فامیل</label>
                                            <input type="text" id="last_name" classname="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div>
                                            <label for="company" classname="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شرکت</label>
                                            <input type="text" id="company" classname="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div>
                                            <label for="phone" classname="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره تلفن</label>
                                            <input type="tel" id="phone" classname="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                        </div>
                                    </div>
                                    <div classname="mb-6">
                                        <label for="email" classname="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
                                        <input type="email" id="email" classname="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div classname="mb-6">
                                        <label for="password" classname="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رمز عبور</label>
                                        <input type="password" id="password" classname="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                    </div>
                                    <div classname="mb-6">
                                        <label for="confirm_password" classname="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تاکیید رمز عبور</label>
                                        <input type="password" id="confirm_password" classname="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                    </div>
                                    <div classname="flex items-start mb-6">
                                        <div classname="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" classname="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                        </div>
                                        <label for="remember" classname="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">من با  <a href="#" classname="text-blue-600 hover:underline dark:text-blue-500">شرایط سایت </a> <span>موافقم</span>.</label>
                                    </div>
                                    <div>

                                    </div>
                                    <Button type="submit" color='success' variant='contained'>انتقال به درگاه پرداخت</Button>
                                </form>
                            </div>
                        </div>

                        <CheckoutPrices />
                    </div>
            }
            <TopButton />
            <Footer />
        </>
    )
}

export default Checkout