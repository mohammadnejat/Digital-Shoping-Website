import React,{useContext} from 'react'
import UserMenuActive from '../../Context/Context'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function CheckoutPrices() {
    const { totalPriceProduct, sendPrice, FinalPayment } = useContext(UserMenuActive)

    function getCurrentURL() {
        return window.location.href
    }

    return (
        <div className='w-full p-8 mt-6 border rounded-lg lg:w-2/4 h-96 '>
            <div className='flex justify-between font-bold'>
                <span>قیمت کالا</span>
                <span>{(totalPriceProduct)} تومان</span>
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

                    {
                        getCurrentURL === "https://json-server-store.iran.liara.run/#/payment/checkout"
                            ?
                            <Button variant="contained" color="success" className='w-full mt-2' >
                                تسویه حساب
                            </Button>
                            :
                            <Button type="submit" color='success' variant='contained'>انتقال به درگاه پرداخت</Button>
                    }
                </Link>
            </div>
        </div>
    )
}

export default CheckoutPrices