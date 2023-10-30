import React, { useContext, useRef, useEffect } from 'react';

import { SlBasket } from "react-icons/sl";
import Button from '@mui/material/Button'
import Link from 'next/link';

const UserLoginDropDownBasket = () => {

    const { productsBasket, setProductsBasket, totalPriceProduct, setProductsBasketShow, productsBasketShow, totalPriceProducts, count, setCount } = useContext(UserMenuActive)
    const deleteBasketProduct = (productID) => {
        let newBasket = productsBasket.filter(product => product.id !== productID)
        setProductsBasket(newBasket)
    }



    return (
        <div id="menu" className='relative mr-8 cursor-pointer'>
            <div >
                <SlBasket className='text-2xl lg:text-white' />
                <div className='absolute flex items-center justify-center w-6 h-5 bg-red-600 rounded-lg left-4 top-2'>
                    <span className='font-bold text-white'>{productsBasket.length}</span>
                </div>
            </div>
            <div className='cursor-auto'>
                <ul className={`bg-gray-100 rounded-xl absolute z-50 border ${productsBasketShow ? "" : "hidden"} "grid grid-cols-1  p-2 w-64 lg:w-80 -right-48 gap-2 mt-3`}>
                    {
                        !productsBasket.length ? <span>محصولی یافت نشد</span> :

                            productsBasket.map(products => {
                                return (
                                    <div key={products.id} className='grid grid-cols-2 mt-3 border'>
                                        <div>
                                            <img className='mt-4 h-4/6' src={products.img} alt="" />
                                        </div>
                                        <div >
                                            <p className='font-bold'>{products.title}</p>
                                            <p className='mt-3 text-red-700'><span>{(products.price * products.count).toLocaleString('en-US', { maximumFractionDigits: 3 })}</span>تومان</p>
                                            <span>{`${products.count} تعداد`}</span>
                                            <div className='grid items-center grid-cols-2 justify-items-center'>
                                                <button className='w-2/4 p-1 bg-green-500' onClick={() => {
                                                    const updatedItems = productsBasket.map((item) =>
                                                        item.id === products.id ? { ...item, count: item.count + 1 } : item
                                                    );
                                                    setProductsBasket(updatedItems);
                                                }}>+</button>
                                                <button className='w-2/4 p-1 bg-red-500' onClick={() => {
                                                    const updatedItems = productsBasket.map((item) =>
                                                        item.id === products.id ? { ...item, count: item.count - 1 } : item
                                                    );
                                                    setProductsBasket(updatedItems);
                                                }}>-</button>
                                            </div>
                                            <Button variant="contained" color="warning" className='w-full p-1 mt-2' onClick={() => deleteBasketProduct(products.id)}>حذف </Button>
                                        </div>
                                    </div>
                                )
                            })
                    }
                    {
                        productsBasket.length === 0 ? null :
                            <div className='grid grid-cols-2 gap-4'>
                                <Link to="/payment" className=''>
                                    <Button variant="contained" color="error" className='w-full h-10 mt-2'>
                                        مشاهده سبد خرید
                                    </Button>
                                </Link>
                                <Link to="/payment/checkout" className=''>
                                    <Button variant="contained" color="success" className='w-full h-10 mt-2'>
                                        تسویه حساب
                                    </Button>
                                </Link>

                            </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default UserLoginDropDownBasket;
