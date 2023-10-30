import React from 'react'
import { HashLoader } from 'react-spinners'

function Loading () {
  return (
    <div className='fixed top-0 left-0 flex z-[9999999]  items-center justify-center w-screen h-screen  opacity-100'>
      <div className='flex items-center justify-center w-64 text-2xl !text-red-600 bg-white  h-44 rounded-3xl z-[999999999]'>
        <div className='flex flex-col items-center justify-center gap-6'>
          <HashLoader color='red' size='70px' />
          <span className='text-lg font-extrabold'>لطفا صبر کنید...</span>
        </div>
      </div>
      <div className='fixed top-0 left-0 flex z-[9999999]  items-center justify-center w-screen h-screen bg-slate-600 opacity-70'></div>
    </div>
  )
}

export default Loading
