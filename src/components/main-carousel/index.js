import React from 'react';
import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import img1 from '~/resources/images/home/home1.large.jpg';
import img2 from "~/resources/images/home/home2.large.jpg";

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
             <img src={img1}></img>
        </CarouselItem>
        <CarouselItem>
            <img src={img2}></img>
       </CarouselItem>
    </Carousel>
);

export default MainCarousel;
