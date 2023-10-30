import React from 'react'

function HomeDevices({ id, imgUrl, title }) {

    return (
        <div key={id} className="flex mt-4 group" >
            <div className={`p-3 !border-l`}>
                <div className="bg-[#F3F8FD] relative">
                    <img src={imgUrl} className="" alt="" />
                    <div className={`absolute left-0 right-0 translate-y-10 z-40 w-full duration-300 opacity-0 group-hover:translate-y-0 group-hover:block h-6 bg-blue-600 group-hover:!opacity-100 rounded-b-xl `}>
                        <div className="flex justify-center text-white">
                            <p className="mt-1 text-sm">
                                {title}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeDevices