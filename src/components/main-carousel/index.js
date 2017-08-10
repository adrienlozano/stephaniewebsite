import React from 'react';
import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';

const CarouselItem = styled.div`
    max-height: 500px;
    overflow:hidden;

    img {
        max-width:100%;
        height: auto;
        display:block;
    }
`;


const MainCarousel = ({className }) => (
    <Carousel axis="horizontal" showThumbs={false} showStatus={false} className={className}>
        <CarouselItem>
             <img src="/assets/images/home/home1.large.jpg"></img>
        </CarouselItem>
        <CarouselItem>
            <img src="/assets/images/home/home2.large.jpg"></img>
       </CarouselItem>
    </Carousel>
);

export default MainCarousel;
