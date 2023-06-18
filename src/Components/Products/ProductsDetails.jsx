import React from 'react';
import img from "../../Assets/Group 30.png";
import { Link } from 'react-router-dom';

const ProductsDetails = ({ products }) => {
    const { id, title, description, brand, price, discountPercentage, rating, stock, category, thumbnail, images } = products;

    return (
        <div className='p-4 flex flex-col gap-5 shadow-md bg-white rounded-2xl h-full'>
            <div>
                <img className='w-full lg:h-40 rounded-2xl mx-auto my-2' src={thumbnail} alt="" />
            </div>
            <h1 className='text-xl font-bold text-center'>{title}</h1>
            <p className='text-center'>{brand}</p>
            <div className='flex items-center justify-center gap-8 my-4'>
                <p className='text-[#0E4B80] text-md flex gap-1 font-bold'>${price}<span>USD</span></p>
            </div>
            <div className='p-2 text-sm bg-black hover:bg-white hover:text-black hover:border-x-2 hover:border-black rounded-full text-white font-semibold w-full lg:w-40 mx-auto'>
                <button className='w-full mx-auto'>Order Now</button>
            </div>
        </div>
    );
};

export default ProductsDetails;