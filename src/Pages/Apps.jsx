import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import Banner from '../Components/Banner';
import AppCard from '../Components/AppCard';

const Apps = () => {
     const {apps} =useApps()
     const [search,setSearch] = useState("")
    // console.log(search)
    const term = search.trim().toLocaleLowerCase()
   const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps
   
    return (
        <div>
            <h1 className='text-[48px] font-bold text-center mb-4 '>Our All Applications</h1>
            <p className='text-xl text-[#627382] text-center mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between mb-[22px] items-center'>
                <p className='text-xl md:text-2xl font-semibold '>({searchedApps.length})Apps Found</p>
                <div>
                    <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
</label>
                </div>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
             {
               searchedApps.map(app =>(
                    <AppCard key={app.id} app={app}></AppCard>
                ))
            }
           </div>
        </div>
    );
};

export default Apps;