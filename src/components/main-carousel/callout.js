import React from 'react';
import styled from 'styled-components';
import  { responsiveStyle } from 'styled-system';

const Container = styled.div`
    padding: 2em !important;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: #FFF;
    position: absolute;
    left: 10%;
    bottom: 2em;

`
const Callout = ({className, children}) => (
    <Container className={className}>
        {children}
    </Container>
);

export default Callout;
