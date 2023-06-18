import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://dummyjson.com/products/categories');
            const result = await data.json();
            setCategories(result);
        };
        fetchData();
    }, []);

    return (
        <div className='px-8 lg:px-24 my-12'>
            <div className='border-y-4 border-double border-black p-4 rounded-2xl my-12 mx-4 lg:mx-24'>
                <h1 className='text-3xl text-center font-bold'>Products Categories</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 lg:px-24 px-4 items-center my-6 gap-6'>
                {categories.map(data => <Link
                    className='p-2 font-bold uppercase border-x-2 text-center text-md hover:text-white hover:bg-black border-black rounded-2xl'
                    to={`/category/${data}`}
                    key={data}>
                    <h1 className='animate-pulse'>{data}</h1>
                </Link>)}
            </div>
            <div className='p-2 mx-auto text-center text-sm bg-black rounded-full text-white font-semibold w-40 my-6'>
                <Link to='/' className='w-full mx-auto text-lg'>Back</Link>
            </div>
        </div>
    );
};

export default Categories;