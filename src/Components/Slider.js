import React from 'react';
import one from '../img/one.jpeg';
import two from '../img/two.jpeg';
import three from '../img/three.jpeg';
import { Carousel } from 'react-bootstrap';

function Slider() {
    return (
        <Carousel>

            <Carousel.Item>
                <img
                    className="d-block w-100" style={{ 'height': '540px' }}
                    src={one}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do instrud est eliqua</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100" style={{ 'height': '540px' }}
                    src={two}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do instrud est eliqua</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100" style={{ 'height': '540px' }}
                    src={three}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Web Developer Blog</h3>
                    <p>Do do instrud est eliqua</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default Slider;