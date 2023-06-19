import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { BiDollar } from "@react-icons/all-files/bi/BiDollar";

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { id, title, description, brand, price, discountPercentage, rating, stock, category, thumbnail, images } = productDetails;

    return (
        <div>
            <div className='px-4 lg:px-24 my-6'>
                <div className='border-y-2 border-slate-900 p-2 flex flex-col gap-3 items-center rounded-2xl'>
                    <h1 className='text-2xl text-center font-bold'>{title}</h1>
                </div>
                <div className='flex lg:flex-row my-6 flex-col items-center lg:px-40 px-4 gap-4'>
                    <div className='bg-gray-200 w-96 mx-auto flex flex-col items-center my-3'>
                        <img className='w-96' src={thumbnail} alt="" />
                        <div className='flex gap-1 w-full font-bold text-xl items-center justify-center border-2 bg-white border-black p-2'>
                            <p>Ratings: <span className='text-amber-400'>{rating}</span></p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-96 mx-auto'>
                        <div className='flex flex-col gap-4 font-sans p-4 border-2 border-dashed border-black'>
                            <p className='flex flex-col gap-2 text-xl'>Description: <span className='font-semibold'>{description}</span></p>
                            <p>Brand: <span className='font-semibold text-sm'>{brand}</span></p>
                            <p>Available Products: <span className='font-semibold text-sm'>{stock}</span></p>
                        </div>
                        <div className='flex font-bold text-lg justify-between gap-4'>
                            <div className='flex animate-bounce items-center gap-1 border-2 border-black w-full justify-center py-1 px-4 rounded-2xl'>
                                <BiDollar className='text-xl font-bold'></BiDollar>
                                <p>{discountPercentage}</p>
                            </div>
                            <div className='flex items-center justify-center gap-1 border-2 border-black w-full py-1 px-4 rounded-2xl line-through'>
                                <BiDollar className='text-xl font-bold text-amber-500'></BiDollar>
                                <p className='text-amber-500'>{price}</p>
                            </div>
                        </div>
                        <div className='p-2 my-2 text-sm text-center bg-black hover:bg-white hover:text-black hover:border-x-2 hover:border-black rounded-full text-white font-semibold w-96 lg:w-40'>
                            <Link to="/cart" className='w-full mx-auto'>
                                <button>Add to Cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='lg:px-40 px-4 gap-4'>
                    <h1 className='text-2xl lg:w-1/3 w-full border-black border-b-2 p-2 my-8 font-bold'>More Images</h1>
                    <div className='grid grid-cols-2 gap-8 lg:grid-cols-4 items-center justify-between my-6 rounded-2xl'>
                        {
                            images.map(image => <img
                                className='w-96 lg:w-auto mx-auto h-64 border-4 p-1 shadow-md shadow-slate-900 rounded-2xl'
                                src={image} />)
                        }
                    </div>
                </div>
            </div>
            <div className='p-2 my-12 text-sm text-center bg-black hover:bg-white hover:text-black hover:border-x-2 hover:border-black rounded-full text-white font-semibold w-96 lg:w-40 mx-auto'>
                <Link to={`/all-products`} className='w-full mx-auto'>Back</Link>
            </div>
        </div>
    );
};

export default ProductDetails;