import React, { useContext, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import './UserPersonalInfoModal.css'
import { supabase } from '../../../supabase'
import { toast } from 'react-toastify';
import UserMenuActive from '../../../Context/Context';
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
const UserPersonalInfoModal = () => {

    const user = useUser()
    const supabase = useSupabaseClient();

    const [userName, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [meli, setMeli] = useState("")
    const [phone, setPhone] = useState("")

    async function SubmitHandler() {
        try {
            const { data, error } = await supabase.auth.updateUser({
                data: {
                    name: userName === "" ? user.user_metadata.name : userName,
                    secondName: lastName === "" ? user.user_metadata.secondName : lastName,
                    shomareMeli: meli === "" ? user.user_metadata.shomareMeli : meli,
                    phoneNumber: phone === "" ? user.user_metadata.phoneNumber : phone
                }
            })

            if (data) {
                toast.success("تغییرات با موفقیت انجام شد", {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
        catch (error) {
            console.log(error);
        }
        console.log(userName);
    }

    const { modalQuit, setModalQuit } = useContext(UserMenuActive)

    return (
        <div className={`fixed top-0 left-0 right-0 z-10 w-full h-screen ${modalQuit} `} style={{ backdropFilter: "blur(5px)" }}>
            <div className='fixed z-20 w-full p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl lg:w-2/5 top-1/2 left-1/2'>
                <div className='flex justify-between'>
                    <h3 className='text-lg font-bold'>ثبت اطلاعات شناسایی</h3>
                    <button onClick={() => setModalQuit("hidden")} ><ClearIcon /></button>
                </div>
                <div className='flex gap-6'>
                    <TextField onChange={(e) => setName(e.target.value)} placeholder="نام" className='text-sm' size='small' />
                    <TextField onChange={(e) => setLastName(e.target.value)} placeholder="نام خانوادگی" className='w-1/3' size='small' />
                </div>
                <br />
                <TextField onChange={(e) => setMeli(e.target.value)} placeholder="کدملی" className='w-2/3' size='small' />
                <br />
                <br />
                <TextField onChange={(e) => setPhone(e.target.value)} placeholder="موبایل" className='w-2/3' size='small' />
                <br />
                <br />
                <hr />
                <br />
                <div className='flex justify-end gap-3'>
                    <Link><Button variant="contained" onClick={SubmitHandler} className='bg-blue-100'>ثبت تغییرات</Button></Link>
                    <Link><Button variant="contained" onClick={() => setModalQuit("hidden")} style={{ background: "#C40316" }}>لغو</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default UserPersonalInfoModal