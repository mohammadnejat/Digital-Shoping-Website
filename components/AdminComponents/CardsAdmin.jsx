import React from 'react'
import { MdAttachMoney } from 'react-icons/md'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'


const CardsAdmin = (props) => {
    return (
        <>
            <div className='my-2 border rounded-md lg:m-0 lg:w-3/12 h-fit text-slate-500'>
                <div className='flex items-center justify-between p-2'>
                    <div className='border rounded-full '>
                        {props.info}
                        
                    </div>

                    <span className='text-2xl font-bold '>{props.title}</span>
                </div>
                <div className='mt-2 text-2xl '>
                    <span className='font-sans font-extrabold text-black'>{props.priceInfo} <span className='font-sans'>{props.priceTitle}</span></span>
                    <div className='flex items-center text-green-600'>
                        {
                            props.percentUp ?
                                <>
                                    <AiOutlineArrowUp className='text-3xl ' /> <span className='font-extrabold text-md'>{props.percentUp}%</span>
                                </>
                                :
                                <>
                                    <AiOutlineArrowDown className='text-3xl text-red-600' /> <span className='font-extrabold text-red-600 text-md'>{props.percentDrop}%</span>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardsAdmin