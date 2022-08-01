import React from 'react';
import './Banner.css';
import 'animate.css';

const Banner = () => {

    return (
           <div className='overflow-hidden mt-0 mb-[60px]'>
            <div className="hero justify-start lg:min-h-[394px]  bg-[url('/src/images/Banner/HandSaw.jpg')] lg:mt-3 items-start lg:items-center">
                <div className="hero-content justify-start flex-col lg:flex-row-reverse">
                    <div className='lg:ml-[74px] lg:mr-6'>
                        <h1 className='banner-title animate__animated animate__bounceInLeft'>Big Wholesale</h1>
                        <div className='banner-sub-title animate__animated animate__backInRight'>
                            <h2>Hands Tools</h2>
                            <h2>Circular Saw &    Power Saw</h2>
                        </div>
                        <button className='banner-btn text-white font-normal px-[18px] py-[7px] mt-[31px] rounded-[5px] animate__animated animate__bounceInUp'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;