import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Review></Review>
        </div>
    );
};

export default Home;