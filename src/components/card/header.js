import React from 'react';
import styled from 'styled-components';
import Typography from '~/components/typography';
import { Flex } from 'rebass';


const Header = ({title,subtitle}) =>{
    return    (
    <Flex>
        { title  && (<Typography component="h1" >{title}</Typography>) }
        { subtitle && (<Typography component="h2">{subtitle}</Typography>) }
    </Flex>
)}

