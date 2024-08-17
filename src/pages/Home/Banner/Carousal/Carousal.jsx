import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function Carousal() {
    return (
        <Carousel>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <Image
                    className=' w-100 h-100'
                    src='https://static.digit.in/default/a67a630d15f42cffeb5b752b3f87de91788c10dc.jpeg'
                />

            </Carousel.Item>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="Second slide" /> */}
                <Image
                    className=' w-100 h-100'
                    src='https://wheretobuyguides.com/wp-content/uploads/2017/03/where-to-buy-gaming-computers-1.jpg'
                />

            </Carousel.Item>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <Image
                    className=' w-100 h-100'
                    src='https://static.digit.in/default/a67a630d15f42cffeb5b752b3f87de91788c10dc.jpeg'
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default Carousal;