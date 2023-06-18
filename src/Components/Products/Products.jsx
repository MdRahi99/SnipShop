import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductsDetails from './ProductsDetails';

const Products = () => {
    const allProducts = useLoaderData();
    const products = allProducts.products;

    return (
        <div>
            <div className='border-y-4 border-double border-black p-4 rounded-2xl my-12 mx-4 lg:mx-24'>
               <h1 className='text-3xl text-center font-bold'>Explore Our Products</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-8 lg:px-24 px-4 my-6'>
                {
                    products.map(products => <ProductsDetails
                        key={products.id}
                        products={products}
                    >

                    </ProductsDetails>)
                }
            </div>
        </div>
    );
};

export default Products;