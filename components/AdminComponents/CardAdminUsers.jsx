import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button'
import { useEffect } from 'react';

const CardAdminUsers = (props) => {

    
    return (
        <>
            <div className='mt-4 '>
                <Accordion className='bg-gray-600'>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"

                    >
                        <div className='flex gap-2 ml-6'>
                            <span>اسم:</span>
                            <span>{props.firstName} </span> <span>{props.lastName}</span>
                        </div>

                        <div>
                        </div>
                        <div className='w-full '>
                            <span className='float-left text-red-600'>
                                {props.id}
                            </span>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails className='bg-gray-300'>
                        <div className='flex w-full'>
                            <div className='flex justify-between w-full'>
                                <div className='w-8/12'>
                                    <span>توضیحات: </span>
                                    <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرف</span>

                                    <div className='ml-6'>
                                        <span>ایمیل: </span>
                                        <span>{props.email}</span>
                                    </div>

                                    <div>
                                        <span>شماره: </span>
                                        <span>{props.phone}</span>
                                    </div>
                                    <div>
                                        <span>کالاهای خریداری شده: </span>
                                        <span>{props.ordred}</span>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span>پروفایل</span>
                                    {
                                        props.imageProflie === undefined ?
                                            <>
                                                <img className='w-24 h-24' src="https://i.pinimg.com/280x280_RS/59/af/9c/59af9cd100daf9aa154cc753dd58316d.jpg" alt="#" />
                                            </>
                                            :
                                            <>
                                                {props.imageProflie}
                                            </>
                                    }
                                </div>
                            </div>

                        </div>
                        <div>
                            <Button variant="contained" color="warning">
                                حذف کاربر
                            </Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}

export default CardAdminUsers