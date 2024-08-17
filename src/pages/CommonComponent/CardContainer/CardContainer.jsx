import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ProductCard from './Card/Card';
import SectionTag from '../SectionTag/SectionTag';


const products = [
    {
        "productName": "Fitness Smartwatch",
        "previousPrice": 200.00,
        "currentPrice": 160.00,
        "isDiscountAvailable": true,
        "discount": 20,
        "reviews": [
            {
                "username": "fitness_fan",
                "comment": "Tracks all my activities perfectly!",
                "rating": 5
            },
            {
                "username": "watch_wearer",
                "comment": "Very accurate and stylish.",
                "rating": 5
            }
        ],
        "ratings": 4.7,
        "stockNumber": 300,
        "productImgs": {
            "mainImg": "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            "additionalImgs": [
                "path/to/smartwatch1.jpg",
                "path/to/smartwatch2.jpg"
            ]
        },
        "date": "2024-08-17"
    },
    {
        "productName": "Electric Toothbrush",
        "previousPrice": 80.00,
        "currentPrice": 60.00,
        "isDiscountAvailable": true,
        "discount": 25,
        "reviews": [
            {
                "username": "clean_teeth",
                "comment": "Keeps my teeth feeling fresh and clean.",
                "rating": 5
            },
            {
                "username": "dental_care",
                "comment": "Battery lasts a long time.",
                "rating": 4
            }
        ],
        "ratings": 4.6,
        "stockNumber": 400,
        "productImgs": {
            "mainImg": "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            "additionalImgs": [
                "path/to/toothbrush1.jpg",
                "path/to/toothbrush2.jpg"
            ]
        },
        "date": "2024-08-17"
    },
    {
        "productName": "Air Purifier",
        "previousPrice": 300.00,
        "currentPrice": 250.00,
        "isDiscountAvailable": true,
        "discount": 17,
        "reviews": [
            {
                "username": "fresh_air",
                "comment": "Works quietly and efficiently.",
                "rating": 5
            },
            {
                "username": "allergy_relief",
                "comment": "My allergies have improved significantly!",
                "rating": 5
            }
        ],
        "ratings": 4.7,
        "stockNumber": 100,
        "productImgs": {
            "mainImg": "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            "additionalImgs": [
                "path/to/airpurifier1.jpg",
                "path/to/airpurifier2.jpg"
            ]
        },
        "date": "2024-08-17"
    },
    {
        "productName": "Portable Power Bank",
        "previousPrice": 50.00,
        "currentPrice": 40.00,
        "isDiscountAvailable": true,
        "discount": 20,
        "reviews": [
            {
                "username": "on_the_go",
                "comment": "Charges my devices quickly.",
                "rating": 5
            },
            {
                "username": "traveler",
                "comment": "Lightweight and easy to carry.",
                "rating": 4
            }
        ],
        "ratings": 4.5,
        "stockNumber": 1000,
        "productImgs": {
            "mainImg": "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            "additionalImgs": [
                "path/to/powerbank1.jpg",
                "path/to/powerbank2.jpg"
            ]
        },
        "date": "2024-08-17"
    },
    {
        "productName": "Smart Home Security Camera",
        "previousPrice": 150.00,
        "currentPrice": 120.00,
        "isDiscountAvailable": true,
        "discount": 20,
        "reviews": [
            {
                "username": "home_guardian",
                "comment": "Clear video and easy setup.",
                "rating": 5
            },
            {
                "username": "tech_savvy",
                "comment": "App could use some improvements.",
                "rating": 4
            }
        ],
        "ratings": 4.4,
        "stockNumber": 250,
        "productImgs": {
            "mainImg": "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            "additionalImgs": [
                "path/to/securitycamera1.jpg",
                "path/to/securitycamera2.jpg"
            ]
        },
        "date": "2024-08-17"
    },
    {
        "productName": "Smart Home Security Camera",
        "previousPrice": 150.00,
        "currentPrice": 120.00,
        "isDiscountAvailable": true,
        "discount": 20,
        "reviews": [
            {
                "username": "home_guardian",
                "comment": "Clear video and easy setup.",
                "rating": 5
            },
            {
                "username": "tech_savvy",
                "comment": "App could use some improvements.",
                "rating": 4
            }
        ],
        "ratings": 4.4,
        "stockNumber": 250,
        "productImgs": {
            "mainImg": "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            "additionalImgs": [
                "path/to/securitycamera1.jpg",
                "path/to/securitycamera2.jpg"
            ]
        },
        "date": "2024-08-17"
    },
    {
        "productName": "Smart Home Security Camera",
        "previousPrice": 150.00,
        "currentPrice": 120.00,
        "isDiscountAvailable": true,
        "discount": 20,
        "reviews": [
            {
                "username": "home_guardian",
                "comment": "Clear video and easy setup.",
                "rating": 5
            },
            {
                "username": "tech_savvy",
                "comment": "App could use some improvements.",
                "rating": 4
            }
        ],
        "ratings": 4.4,
        "stockNumber": 250,
        "productImgs": {
            "mainImg": "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            "additionalImgs": [
                "path/to/securitycamera1.jpg",
                "path/to/securitycamera2.jpg"
            ]
        },
        "date": "2024-08-17"
    }, {
        "productName": "Smart Home Security Camera",
        "previousPrice": 150.00,
        "currentPrice": 120.00,
        "isDiscountAvailable": true,
        "discount": 20,
        "reviews": [
            {
                "username": "home_guardian",
                "comment": "Clear video and easy setup.",
                "rating": 5
            },
            {
                "username": "tech_savvy",
                "comment": "App could use some improvements.",
                "rating": 4
            }
        ],
        "ratings": 4.4,
        "stockNumber": 250,
        "productImgs": {
            "mainImg": "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            "additionalImgs": [
                "path/to/securitycamera1.jpg",
                "path/to/securitycamera2.jpg"
            ]
        },
        "date": "2024-08-17"
    },
    {
        "productName": "Smart Home Security Camera",
        "previousPrice": 150.00,
        "currentPrice": 120.00,
        "isDiscountAvailable": true,
        "discount": 20,
        "reviews": [
            {
                "username": "home_guardian",
                "comment": "Clear video and easy setup.",
                "rating": 5
            },
            {
                "username": "tech_savvy",
                "comment": "App could use some improvements.",
                "rating": 4
            }
        ],
        "ratings": 4.4,
        "stockNumber": 250,
        "productImgs": {
            "mainImg": "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            "additionalImgs": [
                "path/to/securitycamera1.jpg",
                "path/to/securitycamera2.jpg"
            ]
        },
        "date": "2024-08-17"
    },
    {
        "productName": "Smart Home Security Camera",
        "previousPrice": 150.00,
        "currentPrice": 120.00,
        "isDiscountAvailable": true,
        "discount": 20,
        "reviews": [
            {
                "username": "home_guardian",
                "comment": "Clear video and easy setup.",
                "rating": 5
            },
            {
                "username": "tech_savvy",
                "comment": "App could use some improvements.",
                "rating": 4
            }
        ],
        "ratings": 4.4,
        "stockNumber": 250,
        "productImgs": {
            "mainImg": "https://i5.walmartimages.com/asr/299c9aef-fd6d-426d-bcbc-f1945574730a.7933d342c6d74b4bb3f11a6cf10c4115.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
            "additionalImgs": [
                "path/to/securitycamera1.jpg",
                "path/to/securitycamera2.jpg"
            ]
        },
        "date": "2024-08-17"
    }
]




const CardContainer = ({ tag, heading, countdown, mdColNum, lgColNum, sliceAt }) => {
    const [second, setSecond] = useState(59);
    const [minute, setMinute] = useState(59);
    const [hour, setHour] = useState(23);
    const [day, setDay] = useState(2);


    useEffect(() => {
        const interval = setInterval(() => {
            if (second > 0) {
                setSecond(prev => prev - 1);
            } else if (minute > 0) {
                setSecond(59);
                setMinute(prev => prev - 1);
            } else if (hour > 0) {
                setSecond(59);
                setMinute(59);
                setHour(prev => prev - 1);
            } else if (day > 0) {
                setSecond(59);
                setMinute(59);
                setHour(23);
                setDay(prev => prev - 1);
            } else {
                clearInterval(interval); // Stop the timer when the countdown reaches 0
            }
        }, 1000);

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [second, minute, hour, day]);



    return (
        <Container className=' border-dark border-bottom border-opacity-25 mb-5 pb-5'>

            <SectionTag
                second={second}
                minute={minute}
                hour={hour}
                day={day}
                tag={tag}
                heading={heading}
                countdown={countdown}
            />
            <Row className=' g-3 mb-4'>
                {products.length > 3 ?
                    products.slice(0, sliceAt).map(item => (
                        <Col key={item.productName} xs={12} sm={6} md={mdColNum} lg={lgColNum}>
                            <ProductCard item={item} />
                        </Col>
                    )) :
                    products.map(item => (
                        <Col key={item.productName} xs={12} sm={6} md={4} lg={4}>
                            <ProductCard item={item} />
                        </Col>
                    ))
                }
            </Row>

            <Container className=' d-flex justify-content-center align-content-center'>
                <Button className=' btn btn-dark px-4 py-2'>
                    View All
                </Button>
            </Container>

        </Container>
    );
};

export default CardContainer;
