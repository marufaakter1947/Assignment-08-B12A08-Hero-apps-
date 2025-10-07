import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const AppCard = ({app}) => {
    // console.log(app)
    const {image,title,downloads,ratingAvg}=app;
    return (
        <div className="card bg-base-100   shadow-sm hover:scale-105 transition ease-in-out px-4 py-4">
  <figure className='h-48 overflow-hidden '>
    <img className='w-full h-full object-cover  rounded-xl '
      src={image}
      alt={title} />
  </figure>
 
    <h2 className="text-xl font-medium my-4 ">{title}</h2>
    <div className='flex justify-between'>
        <button className='flex items-center gap-1 text-[#00D390] text-[16px] font-medium btn bg-[#F1F5E8]'><FiDownload /> {downloads}</button>
        <button className='flex items-center gap-1 text-[16px] font-medium btn text-[#FF8811] bg-[#FFF0E1]'><FaStar />{ratingAvg}</button>
    </div>
   
   
 
</div>
    );
};

export default AppCard;