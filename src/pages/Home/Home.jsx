import React from 'react';
import Banner from './Banner/Banner';
import CardContainer from '../CommonComponent/CardContainer/CardContainer';
import CategoryBoxContainer from '../CommonComponent/CategoryBoxContainer/CategoryBoxContainer';
import Ad from './Ad/Ad';

const Home = () => {
    return (
        <div>
            <Banner />

            {/* Today's - Flash sale's */}
            <CardContainer
                tag="Today's"
                heading="Flash Sales"
                countdown={true}
                mdColNum={4}
                lgColNum={4}
                sliceAt={3}
            />

            <CategoryBoxContainer
                tag="Categories"
                heading="Browse By Category"
            />

            {/* This month - Best selling product */}
            <CardContainer
                tag="This Month"
                heading="Best Selling Products"
                countdown={false}
                mdColNum={3}
                lgColNum={3}
                sliceAt={4}
            />

            <Ad />


            {/* Our Products - Explore our products */}
            <CardContainer
                tag="Our Products"
                heading="Explore Our Products"
                countdown={false}
                mdColNum={3}
                lgColNum={3}
                sliceAt={8}
            />
        </div>
    );
};

export default Home;