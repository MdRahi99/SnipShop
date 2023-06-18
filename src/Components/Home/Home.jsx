import React from 'react';
import FeedBacks from './FeedBacks';
import Brands from './Brands';
import Banner from './Banner';
import AllProducts from '../Products/AllProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllProducts></AllProducts>
            <Brands></Brands>
            <FeedBacks></FeedBacks>
        </div>
    );
};

export default Home;