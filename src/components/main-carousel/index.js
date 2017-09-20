import React from 'react';
import styled from 'styled-components';

import { Carousel } from 'react-responsive-carousel';
import img1 from '~/resources/images/home/home1.large.jpg';
import Callout from './callout';
import { BlockLink } from "rebass";
import Typography from "~/components/typography";

const CarouselItem = styled.div`
    max-height: 500px;
    overflow:hidden;
    position:relative;

    img {
        max-width:100%;
        min-height:200px;
        height: auto;
        display:block;
        object-fit:cover;
    }
`;

const CalloutButton = styled(BlockLink)`
    background-color: ${ ({theme}) => theme.colors.primaryAccent };
    margin-top:10px;
    padding: 0.5em;
`

const MainCarousel = ({className }) => (
    <Carousel axis="horizontal" showThumbs={false} showStatus={false} className={className}>
        <CarouselItem>
             <img src={img1}></img>
             <Callout>
                 <Typography color="white" m={4} >FREE 15 minute consultation</Typography>
                 <CalloutButton href="contact">CONTACT US TODAY</CalloutButton>
             </Callout>
        </CarouselItem>
    </Carousel>
);

export default MainCarousel;
