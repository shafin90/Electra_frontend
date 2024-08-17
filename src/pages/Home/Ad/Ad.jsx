import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Ad = () => {
    return (
        <Container className=' my-5 py-5'>
            <Image
                src='../../../../public/img/Frame 600 (2).jpg' 
                className=' w-100 h-auto'
            />
        </Container>
    );
};

export default Ad;