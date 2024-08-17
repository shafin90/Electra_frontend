import React from 'react';
import Banner from './Banner/Banner';
import CardContainer from '../CommonComponent/CardContainer/CardContainer';
import CategoryBoxContainer from '../CommonComponent/CategoryBoxContainer/CategoryBoxContainer';

const Home = () => {
    return (
        <div>
            <Banner />
            <CardContainer />
            <CategoryBoxContainer />
            {/* This month - Best selling product */}
            <CardContainer />
        </div>
    );
};

export default Home;