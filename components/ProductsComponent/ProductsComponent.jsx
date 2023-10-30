import React from 'react'
import "./ProductsComponent.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductsFromServer } from '../../redux/products/ProductReducer'
import { BeatLoader } from "react-spinners"

const ProductsComponent = () => {
    const allProducts = useSelector(products => products.allProducts.allProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductsFromServer())
    }, [])
    console.log(allProducts);
    return (
        <>
            {
                allProducts.map(product => (
                    <div className='flex flex-col mx-6 mt-4 md:mt-5'>
                        <div className='flex justify-between w-full text-[#FF334B]' id="itemBorder ">
                            <span className='text-sm'>
                                امدادآف
                            </span>
                            <span className='text-sm'>25:46:24</span>
                        </div>
                        <div className='w-full border mt-1 !border-[#FF334B] border-3  rounded-2xl'></div>
                        <div className='relative my-3'>
                            <img src={product.img} className='' alt="" />
                            <span className='text-sm leading-[16px] line-clamp-2'>{product.title}</span>
                            <div className='flex justify-between mt-8 text-[#FF334B]'>
                                <span className='p-1 bg-[#FF334B] text-white text-xs w-8 rounded-md'>{product.off}%</span>
                                <span className="">
                                    {
                                        Number(((product.price) - ((product.off / 100) * (product.price))).toFixed()).toLocaleString()
                                    }
                                    <small className='text-xs'>تومان</small>
                                </span>
                            </div>
                            <div className='w-full mt-2'>
                                <small className='float-left mr-1 text-xs text-gray-500'>تومان</small>
                                <span className='float-left text-xs text-gray-500 line-through'>
                                    {product.price.toLocaleString()}
                                </span>
                            </div>
                            <div className='absolute top-0 bottom-0 border !border-gray-100 border-1 -left-7'></div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ProductsComponent