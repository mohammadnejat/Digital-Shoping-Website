import React, { useContext, useEffect, useState } from 'react'

import imageProfile from '../../images/userProfile/user.png'
import { Link, useLocation } from 'react-router-dom'
import UserMenuActive from '../../Context/Context'

const AdminMenu = () => {


    const { mainWork, setMainWork, profile, setProfile, order, setOrder } = useContext(UserMenuActive);
    const location = useLocation().pathname;


    useEffect(() => {
        if (location === '/admin') {
            setMainWork("active")
            setOrder("false")
            setProfile("false");
        } else if (location === '/admin/users') {
            setMainWork("false")
            setOrder("active")
            setProfile("false");
        } else if (location === '/admin/products') {
            setMainWork("false")
            setOrder("false")
            setProfile("active");
        }
    }, []);

    return (
        <div className='flex-1 menu-user'>
            <div className='flex flex-col items-center gap-6'>
                <img width="100px" height="100px" src={imageProfile} alt="#" />

                <span className='text-lg font-bold'><span className='text-xs text-fuchsia-950'>آدمین</span></span>
                <hr className='w-full p-1 text-lg text-black border-2' />
            </div>

            <div className='menu-items lg:w-72'>
                <hr />
                <ul>
                    <Link to="/admin" >
                        <li className={mainWork}>
                            پنل مدیریت
                        </li>
                    </Link>

                    <Link to="/admin/users" >
                        <li className={order}>
                            کاربران
                        </li>
                    </Link>

                    <Link to="/admin/products" >
                        <li className={profile}>
                            محصولات
                        </li>
                    </Link>

                    <Link >
                        <li>
                            خروج
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default AdminMenu