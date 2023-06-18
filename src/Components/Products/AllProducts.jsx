import React, { useEffect, useState } from 'react';
import ProductsDetails from './ProductsDetails';
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight';
import vector1 from "../../Assets/Vector.png";
import vector2 from "../../Assets/Vector (1).png";
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://dummyjson.com/products');
            const result = await data.json();
            setAllProducts(result.products);
        };
        fetchData();
    }, []);

    return (
        <div className='px-8 lg:px-24 my-12'>
            <div className='my-3 flex lg:flex-row flex-col gap-4 items-center justify-around'>
                <div className='w-full lg:w-80 mx-auto'>
                    <h1 className='text-3xl font-bold text-center'>Featured Product For Pre-Order</h1>
                </div>
                <div className='flex gap-2 items-center font-bold'>
                    <Link to={`/all-products`} className='text-gray-500'>Discover Our Products</Link>
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 justify-around items-center lg:px-24 px-4 my-12 gap-4'>
                <div className='col-span-12 lg:col-span-3'>
                    <div className='flex gap-10 items-center'>
                        <div className='p-2 w-8 h-8 rounded-full bg-black items-center justify-center'>
                            <img src={vector1} alt="" />
                        </div>
                        <div className='p-2 w-8 h-8 rounded-full bg-[#F4F4F4] items-center justify-center'>
                            <img src={vector2} alt="" />
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-9'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-8'>
                        {
                            allProducts.slice(20,23).map(products => <ProductsDetails
                                key={products.id}
                                products={products}
                            >

                            </ProductsDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;