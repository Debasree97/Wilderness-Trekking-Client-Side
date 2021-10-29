import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Tours from '../Tours/Tours';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Tours></Tours>
            <Review></Review>
        </div>
    );
};

export default Home;