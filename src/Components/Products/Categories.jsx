import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CategoryDetails from "./CategoryDetails.jsx";

const Categories = () => {
    const categoryData = useLoaderData();
    const detailsData = categoryData.products;

    return (
        <div className='px-8 lg:px-24 my-12'>
            <div className='my-3 flex flex-col gap-4 w-full lg:w-64'>
                <h1 className='text-3xl font-bold'>Shop by Category</h1>
                <p>Life is hard enough already. Let us make it a little easier.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 items-center my-6 gap-6'>
                {detailsData.map(data => <CategoryDetails key={data.id} data={data}></CategoryDetails>)}
            </div>
            <div className='p-2 mx-auto text-center text-sm bg-black rounded-full text-white font-semibold w-40 my-6'>
                <Link to='/' className='w-full mx-auto text-lg'>Back</Link>
            </div>
        </div>
    );
};

export default Categories;