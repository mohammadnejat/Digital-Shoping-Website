import React, { useEffect, useState } from 'react'
import axios from "axios";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';


const ProductsForAdmin = (props) => {

    const deleteHandler = () => {
        axios.delete(`https://json-server-store.iran.liara.run/${props.catagory}/${props.id}`)
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }
    console.log(props.id);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='flex flex-col mx-auto text-center border cursor-pointer w-36' onClick={handleOpen}>
                <div className='flex justify-center'>
                    <img className='w-20 h-20' src={props.img} alt="" />
                </div>
                <div className=''>
                    <div>
                        {props.title === null || props.title === undefined || props.title === "" || props.title === NaN
                            ?
                            <span>اسمی وجود ندارد</span>
                            :
                            <span className='text-xs '>{props.title}</span>
                        }
                    </div>
                    <div>
                        {props.price === null || props.price === undefined || props.price === "" || props.price === NaN ?
                            <span>قیمت ندارد</span>
                            :
                            <>
                                {
                                    props.off === undefined || props.off === null || props.off === ""
                                        ?
                                        <del className={`text-lg font-bold text-green-600  dark:text-white`}>{(props.price)} ت</del>
                                        :
                                        <div className='flex flex-col'>
                                            <del className={`text-lg font-bold text-red-600 line-through dark:text-white`}>{(props.price)} ت</del>
                                            <span className={`text-xs text-green-600 `}>{Number(props.price * (props.off / 100))} ت</span>
                                        </div>
                                }
                            </>
                        }
                    </div>
                </div>
                <div className=''>
                    {
                        props.off === undefined || props.off === null || props.off === "" ?
                            <>
                                <span className='text-xs'>تخفیف وجود ندارد</span>
                            </>
                            :
                            <span className='text-red-600'>{props.off}%</span>
                    }
                </div>
                <span>{props.id}</span>
            </div>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <h2 className='text-xl'>
                                آیا از حذف محصول مطمئن هستید؟
                            </h2>
                            <div className='flex justify-center w-full mt-4'>
                                <Button variant="contained" className='w-2/6' color="warning" onClick={deleteHandler}>
                                    بله
                                </Button>
                            </div>

                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}

export default ProductsForAdmin