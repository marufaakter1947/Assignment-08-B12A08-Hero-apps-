import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';
import Banner from '../Components/Banner';
import BannerCard from '../Components/BannerCard';

const Home = () => {
     const appsData = useLoaderData();
    //  console.log(Apps);
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <BannerCard></BannerCard>
            </div>
            <h1 className='text-[48px] font-bold text-center mb-4 '>Trending Apps</h1>
            <p className='text-xl text-[#627382] text-center mb-10'>Explore All Trending Apps on the Market developed by us</p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
             {
                appsData.map(app =>(
                    <AppCard key={app.id} app={app}></AppCard>
                ))
            }
           </div>
        </div>
    );
};

export default Home;