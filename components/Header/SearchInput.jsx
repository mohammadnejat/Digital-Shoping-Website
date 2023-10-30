import React, { useContext, useState } from 'react';
import Link from 'next/link';

const SearchInput = ({ setOnFilter }) => {

    const { setProductPageShow, productPageShow, pc, setPc,
        laptop, setLaptop,
        mobile, setMobile,
        pcJanebi, setpcJanebi,
        mobileJanebi, setMobileJanebi,
        flash, setFlash } = useContext(UserMenuActive)

    const allProducts = [...pc, ...laptop, ...mobile, ...pcJanebi, ...mobileJanebi, ...flash]

    const [searchTerm, setSearchTerm] = useState('');

    const searchHandler = (e) => {


        const filteredItems = allProducts.filter(item => {

            const objectName = item.title.toLowerCase()

            return objectName.includes(searchTerm.toLowerCase());
        });
        setProductPageShow(filteredItems);
    }

    const searchKeyHandler = (e) => {
        if (e.keyCode === 13) {
            const filteredItems = allProducts.filter(item => {

                const objectName = item.title.toLowerCase()

                return objectName.includes(searchTerm.toLowerCase());

            });
            setProductPageShow(filteredItems);
        }
    }




    return (
        <>

            <div className='flex h-16 lg:h-auto'>
                <Link to='/products' type="submit" onClick={searchHandler} className="z-10 flex items-center justify-center px-4 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">جستجو</Link>
                <div className="relative w-full mx-auto border rounded-e-lg h-[100%]  ">
                    <div className="absolute left-0 flex items-center pl-3 pointer-events-none inset-y-8">
                        <svg aria-hidden="true" className="z-10 w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onKeyDown={searchKeyHandler} className="absolute block w-full h-[100%]  text-sm text-gray-900 border border-gray-300 rounded-e-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="search" id="default-search" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} placeholder=" جستجوی محصولات ..." />
                </div>
            </div>
        </>
    )
}

export default SearchInput