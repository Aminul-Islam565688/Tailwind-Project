import React from 'react';
import ImageTwo from '../images/egg-2.jpg';
import ImageOne from '../images/egg.jpg';

const Content = () => {
    return (
        <>
            <div className='menu-card '>
                <img src={ImageOne} alt='egg' className='h-screen w-7/12 rounded mb-20 shadow mx-auto' />
                <div className='center-content text-center'>
                    <h2 className='text-2xl mb-2'>Family Pizza</h2>
                    <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                    <span>$16</span>
                </div>
            </div>
            <div className='menu-card'>
                <img src={ImageTwo} alt='egg' className='h-screen w-7/12 rounded mb-20 shadow mx-auto' />
                <div className='center-content text-center'>
                    <h2 className='text-2xl mb-2'>Salad</h2>
                    <p className='mb-2'>Cripsy, delicious, and nutritious</p>
                    <span>$18</span>
                </div>
            </div>
        </>
    );
};

export default Content;