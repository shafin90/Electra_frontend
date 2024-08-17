import React, { useState } from 'react';
import CategoryBox from './CategoryBox/CategoryBox';
import { Button, Container } from 'react-bootstrap';
import SectionTag from '../SectionTag/SectionTag';

const CategoryBoxContainer = () => {
    const [leftMove, setLeftMove] = useState(0);

    const handleLeftMove = () => {
        if (leftMove >= -1800) {
            setLeftMove(prev => prev - 100)
        }
    }

    const handleRightMove = () => {
        if (leftMove <= -100) {
            setLeftMove(prev => prev + 100)
        }
    }

    return (
        <Container  className=' mb-5 border-b border-opacity-25'>

            <div className=' d-flex justify-content-between align-items-center'>
                <SectionTag
                    tag="Categories"
                    heading="Browse By Category"
                    countdown={false}
                />

                <div className=' d-flex justify-content-end align-items-center '>
                    <Button variant='dark' className=' btn btn-sm' onClick={handleLeftMove} >left</Button>
                    <Button variant='dark' className=' ms-2 btn-sm' onClick={handleRightMove}>right</Button>
                </div>
            </div>

            <div
                style={{
                    left: leftMove + "px",
                    transition: "0.5s"
                }}
                className=' w-auto  text-nowrap position-relative'>
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
            </div>
        </Container>
    );
};

export default CategoryBoxContainer;