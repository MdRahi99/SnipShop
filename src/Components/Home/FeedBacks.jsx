import React from 'react';
import background from "../../Assets/background.png";
import person from "../../Assets/image.png";
import icon from "../../Assets/icon.png";
import vector1 from "../../Assets/Vector.png";
import vector2 from "../../Assets/Vector (1).png";

const FeedBacks = () => {
    return (
        <div className='py-4 lg:py-16 relative flex flex-col lg:flex-row items-center gap-4 lg:gap-20'>
            <div>
                <img src={background} alt="" />
                <img className='absolute top-12 left-24 lg:top-28 lg:left-32 h-96 w-96' src={person} alt="" />
            </div>
            <div className='flex flex-col gap-4 lg:gap-8 p-3'>
                <div>
                    <div className='flex gap-1 items-center'>
                        <h1 className='text-xl font-bold'>Justin Pierre</h1>
                        <img src={icon} alt="" />
                    </div>
                    <p className='text-[#7E7E7E] text-sm'>Products Seller</p>
                </div>
                <div>
                    <p className='text-lg font-semibold w-full lg:w-2/5'>“In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.”</p>
                </div>
                <div className='flex gap-10 items-center'>
                    <div className='p-2 w-8 h-8 rounded-full bg-black items-center justify-center'>
                        <img src={vector1} alt="" />
                    </div>
                    <div className='p-2 w-8 h-8 rounded-full bg-[#F4F4F4] items-center justify-center'>
                        <img src={vector2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBacks;