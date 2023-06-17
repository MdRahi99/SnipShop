import React from 'react';
import FeedBacks from './FeedBacks';
import Brands from './Brands';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <FeedBacks></FeedBacks>
        </div>
    );
};

export default Home;