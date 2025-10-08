import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import errorApp from "../assets/Images/App-Error.png"
import { NavLink } from 'react-router';

const Apps = () => {
     const {apps} =useApps()
     const [search,setSearch] = useState("")
    // console.log(search)
    const term = search.trim().toLocaleLowerCase()
   const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps
   
    return (
        
        <div>
            {
                searchedApps.length === 0 ?(
                    <div>
                        <div className='flex justify-center items-center'>
                            <img className='h-[200px]' src={errorApp} alt="Error image" />
                        </div>
                        <div className='text-center mt-6 '>
                            <h1 className='font-bold text-2xl mb-2 '>OPPS!! APP NOT FOUND</h1>
                            <p className='font-semibold text-gray-400'>The App you are requesting is not found on our system.Please try another Apps.</p>
                        </div>
                        <div className='flex justify-center items-center'>
                                   <button className='btn text-[16px] font-semibold bg-[linear-gradient(125.07deg,_#632EE3,_#9F62F2)] text-white mt-6  '><NavLink to="/">Go Back!</NavLink></button>
                                  </div>
                    </div>
                ):(
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
                )
            }
            
        </div>
    );
};

export default Apps;