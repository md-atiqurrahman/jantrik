import React from 'react';
import img1 from '../../../../images/NewTools/1.jpg';
import img2 from '../../../../images/NewTools/2.jpg';

const NewToolsBanner = () => {
    return (
        <div className='flex justify-center mb-[60px] mx-[10px]'>
            <div className='mr-[30px] img-container'>
                <img src={img1} alt="" />
                <div className="overlay">
                </div>
            </div>
            <div className='img-container'>
                <img src={img2} alt="" />
                <div className="overlay">
                </div>
            </div>
        </div>
    );
};

export default NewToolsBanner;