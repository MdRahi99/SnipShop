import React, { useEffect, useState } from 'react';
import img from "../../Assets/image-removebg-preview (49) 2.png";
import img2 from "../../Assets/image-removebg-preview (50) 1.png";
import img3 from "../../Assets/image 54.png";
import { Link } from 'react-router-dom';

const Banner = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const categoryData = async() => {
            const data = await fetch(`https://dummyjson.com/products/categories/${categories}`);
            const result = await data.json();
            setCategories(result);
        };
        categoryData();
    },[]);
    
    return (
        <div className='bg-[#7DE1EF]'>
            <div className='flex lg:flex-row flex-col items-center justify-center lg:px-12 px-2 py-6 gap-12 uppercase text-sm font-semibold'>
                {
                    categories.slice(0,8).map(category => <Link
                    className='hover:border-b-2 p-2 hover:border-black'
                    key={category}
                    to={`/category/${category}`}>
                        {category}
                    </Link>)
                }
            </div>
            <div className='flex flex-col lg:flex-row items-center px-8 lg:px-24 py-12'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-xs'>100% QUALITY, 100% SATISFACTION</h4>
                        <h1 className='text-5xl w-full lg:w-2/3 font-bold'>Where the world comes to shop.</h1>
                    </div>
                    <div>
                        <p className='text-sm w-full lg:w-2/4'>Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a better outlook.</p>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12'>
                        <div className='p-2 text-sm bg-black rounded-full text-white font-semibold w-40 my-6'>
                            <button className='w-full mx-auto'>SHOP NOW</button>
                        </div>
                        <div>
                            <h4>Start from</h4>
                            <p className='text-xl font-bold'>110.00$</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-8 items-center'>
                    <div>
                        <img className='rounded-full border-8 border-[#6790ee]' src={img} alt="" />
                    </div>
                    <div className='flex flex-col gap-12'>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;