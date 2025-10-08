import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Installation = () => {
    const [installList ,setInstallList] = useState([])
    useEffect(()=>{
        const installedList = JSON.parse(localStorage.getItem("installList"))
        if(installedList) setInstallList(installedList)
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-[48px] font-bold'>My Installed Apps</h1>
                <p className='text-[#627382] text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mt-10 mb-4'>
                <div>
                    <h2 className='text-[24px] font-semibold'>{installList.length} Apps Found</h2>
                </div>
                <div>
                    <button className='btn'>Sort By Size</button>
                </div>
            </div>
           
           <div>
            {installList.map(item =>(
                <div key={item.id} className=''>
<div className='flex justify-between items-center bg-[#FFFFFF]  p-4 rounded mb-4'>
    <div className='flex gap-4'>
        <div><img className='w-20 h-20 rounded-lg' src={item.image} alt="" /></div>
        <div>
            <h1 className='text-[20px] font-medium mb-4'>{item.title}</h1>
            <div className='flex gap-4'>
                <div className='text-[#00D390] text-[16px] font-medium flex items-center gap-1'>
                    <FiDownload />
                    <span>{item.downloads}</span>
                </div>
                <div className='text-[#FF8811] text-[16px] font-medium flex items-center gap-1'>
                   <FaStar />
                    <span>{item.ratingAvg}</span>
                </div>
                <div>
                    <span className='text-[16px] text[#627382] font-medium'>{item.size} MB</span>
                </div>
            </div>
        </div>
    </div>
    <div>
        <button className='btn bg-[#00D390] text-white text-[16px] font-semibold'>Uninstall</button>
    </div>
</div>
                </div>
            )
            )}
           </div>
        </div>
    );
};

export default Installation;