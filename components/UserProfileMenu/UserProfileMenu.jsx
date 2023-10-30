import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import imageProfile from '../../images/userProfile/user.png'
import './UserProfileMenu.css'
import UserMenuActive from '../../Context/Context'
import { useUser } from '@supabase/auth-helpers-react';

const UserProfileMenu = () => {
    const { mainWork, setMainWork, profile, setProfile, order, setOrder } = useContext(UserMenuActive);

    const user = useUser();

    const location = useLocation().pathname;

    useEffect(() => {
        if (location === '/profile') {
            setMainWork("active")
            setOrder("false")
            setProfile("false");
        } else if (location === '/profile/orders') {
            setMainWork("false")
            setOrder("active")
            setProfile("false");
        } else if (location === '/profile/personal-info') {
            setMainWork("false")
            setOrder("false")
            setProfile("active");
        }
    }, []);


    return (
        <div className='flex-1 menu-user'>
            <div className='flex flex-col items-center gap-6'>
                <img width="100px" height="100px" src={imageProfile} alt="#" />

                <span className='text-lg font-bold'><span className='text-xs text-fuchsia-950'>{user?.user_metadata?.is_admin ? "آدمین" : ""}</span> {user?.user_metadata?.name === undefined ? "کاربر جدید " : user.user_metadata.name}</span>
                <hr className='w-full p-1 text-lg text-black border-2' />
            </div>

            <div className='menu-items lg:w-72'>
                <hr />
                <ul>
                    <Link onClick={() => console.log("i")} to="/profile" >
                        <li className={mainWork}>
                            فعالیت ها
                        </li>
                    </Link>

                    <Link to="/profile/orders" >
                        <li className={order}>
                            سفارش ها
                        </li>
                    </Link>

                    <Link to="/profile/personal-info" >
                        <li className={profile}>
                            پروفایل
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
};

export default UserProfileMenu;