import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Link from 'next/link';




const UserLoginDropdownUser = () => {


    const [menuShow, setMenuShow] = useState(false)


    return (
        <>
            <ul onClick={() => menuShow === false ? setMenuShow(true) : setMenuShow(false)}>

                <li className='relative flex items-center cursor-pointer'><h5 className='text-black lg:text-fuchsia-950'><span className='text-xs text-red-600'>{user?.user_metadata?.is_admin ? "آدمین" : ""}</span> {user?.user_metadata?.name === undefined ? "کاربر جدید " : user.user_metadata.name}</h5><span className=''><AccountCircleIcon className='lg:text-white' style={{ fontSize: "38px" }} /><ArrowDropDownIcon className='lg:text-white ' style={{ fontSize: "30px" }} /></span>
                    {
                        user?.user_metadata?.is_admin ?
                            <div id="dropdownAvatar" className={`absolute top-10 z-10 ${menuShow === false ? "hidden" : ""} bg-slate-50 rounded-lg`}> {/* menuDropDown if it hidden no show if " " it show's */}
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div className="font-medium truncate">{user.email}</div>
                                </div>
                                <ul className="py-2 text-sm text-black" aria-labelledby="dropdownUserAvatarButton">
                                    <li>
                                        <Link to="/admin" className="block px-4 py-2 text-black hover:bg-sky-300">مدیریت</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/users" className="block px-4 py-2 text-black hover:bg-sky-300">کاربرها</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/products" className="block px-4 py-2 text-black hover:bg-sky-300">محصولات</Link>
                                    </li>
                                </ul>
                                <hr className='border border-x-4 border-slate-950' />
                                <div className="py-2">
                                    <a onClick={() => signOut()} className="block px-4 py-2 text-black hover:bg-sky-300">خروج</a>
                                </div>
                            </div>
                            :
                            <div id="dropdownAvatar" className={`absolute top-10 z-10 ${menuShow === false ? "hidden" : ""} bg-slate-50 rounded-lg`}> {/* menuDropDown if it hidden no show if " " it show's */}
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div className="font-medium truncate">{user.email}</div>
                                </div>
                                <ul className="py-2 text-sm text-black" aria-labelledby="dropdownUserAvatarButton">
                                    <li>
                                        <Link to="/profile" className="block px-4 py-2 text-black hover:bg-sky-300">داشبورد</Link>
                                    </li>
                                    <li>
                                        <Link href="/profile/orders" className="block px-4 py-2 text-black hover:bg-sky-300">تنظیمات شخصی</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="block px-4 py-2 text-black hover:bg-sky-300">سفارش ها</Link>
                                    </li>
                                </ul>
                                <hr className='border border-x-4 border-slate-950' />
                                <div className="py-2">
                                    <a onClick={() => signOut()} className="block px-4 py-2 text-black hover:bg-sky-300">خروج</a>
                                </div>
                            </div>
                    }

                </li>
            </ul>


        </>
    )
}

export default UserLoginDropdownUser