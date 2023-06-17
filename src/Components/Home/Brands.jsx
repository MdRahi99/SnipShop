import React from 'react';
import logo1 from "../../Assets/Apple_Inc.-Logo.wine 1.png";
import logo2 from "../../Assets/BMW-Logo.wine 1.png";
import logo3 from "../../Assets/Nike,_Inc.-Logo.wine 1.png";
import logo4 from "../../Assets/Fila_(company)-Logo.wine 1.png";
import logo5 from "../../Assets/Xiaomi-Logo.wine 1.png";
import logo6 from "../../Assets/Adidas-Logo.wine 1.png";
import logoBg from "../../Assets/Backgroung1.png";
import logoBg2 from "../../Assets/Background2.png";
import logo from "../../Assets/image 49.png";
import logo7 from "../../Assets/image 50.png";
import logo8 from "../../Assets/image 51.png";
import logo9 from "../../Assets/image 52.png";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";

const Brands = () => {
    return (
        <div className='bg-[#F4FCFF]'>
            <div className='relative gap-2 lg:gap-0 flex flex-col lg:flex-row items-center justify-around p-4 lg:p-16'>
                <div className='p-16'>
                    <div className='grid grid-cols-3 items-center justify-center gap-8'>
                        <img className='bg-white shadow-2xl rounded-2xl' src={logo1} alt="" />
                        <img className='bg-white shadow-2xl rounded-2xl' src={logo2} alt="" />
                        <img className='bg-white shadow-2xl rounded-2xl' src={logo3} alt="" />
                        <img className='bg-white shadow-2xl rounded-2xl' src={logo4} alt="" />
                        <img className='bg-white shadow-2xl rounded-2xl' src={logo5} alt="" />
                        <img className='bg-white shadow-2xl rounded-2xl' src={logo6} alt="" />
                    </div>
                    <img className='absolute top-4 left-20 lg:top-12 lg:left-56 h-4/6 lg:h-5/6' src={logoBg} alt="" />
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='w-full lg:w-2/3 flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold'>Explore More Popular Brands</h1>
                        <p className='text-[#585858]'>Life is hard enough already. Let us make it a little easier.</p>
                    </div>
                    <div className='flex gap-2 items-center font-bold'>
                        <button>See All</button>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                    </div>
                </div>
            </div>
            <div className='gap-2 lg:gap-0 flex flex-col-reverse lg:flex-row items-center justify-around p-4 lg:p-16'>
                <div className='flex flex-col gap-6'>
                    <div className='w-full lg:w-3/4 flex flex-col gap-4'>
                        <h1 className='text-2xl font-bold'>Sell Easily on  Socialmedia</h1>
                        <p className='text-[#585858]'>Life is hard enough already. Let us make it a little easier.</p>
                    </div>
                    <div className='flex gap-2 items-center font-bold'>
                        <button>See All</button>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <img src={logoBg2} alt="" />
                        <div className='grid grid-cols-3 inset-0 absolute top-48 lg:top-96 lg:left-32 items-center justify-center gap-8'>
                            <img className='bg-white shadow-2xl rounded-2xl' src={logo7} alt="" />
                            <img className='bg-white shadow-2xl rounded-2xl' src={logo8} alt="" />
                            <img className='bg-white shadow-2xl rounded-2xl' src={logo9} alt="" />
                        </div>
                        <img className='absolute top-2 w-3/4 lg:w-2/3 left-24 lg:top-12 lg:left-64' src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;