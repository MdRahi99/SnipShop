import React from 'react';
import img from "../../Assets/Group 30.png"; 
import { Link } from 'react-router-dom';

const CategoryDetails = ({ data }) => {
    const { id, title, description, brand, price, discountPercentage, rating, stock, category, thumbnail, images } = data;
    console.log(data)
    return (
        <div className='p-6 shadow-md bg-white rounded-2xl'>
            <img className='w-full lg:w-96 h-44 rounded-2xl mx-auto my-4' src={thumbnail} alt="" />
            <h1 className='text-xl font-bold'>{title}</h1>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-8 my-4'>
                    <p className='font-bold'>${discountPercentage}</p>
                    <p className='text-[#FF4516] line-through font-bold'>${price}</p>
                </div>
                <Link>
                    <img className='bg-[#F0F0F0] p-4 rounded-full' src={img} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default CategoryDetails;