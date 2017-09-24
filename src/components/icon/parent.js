import * as React from 'react';
import styled from 'styled-components';

const ParentIcon = ({className}) => (
    <svg className={className} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'  fillRule='evenodd'
    clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414'>
        <path d='M8,13C5.67,13 1,14.17 1,16.5L1,19L15,19L15,16.5C15,14.17 10.33,13 8,13ZM8,11C9.646,11 11,9.646 11,8C11,6.354 9.646,5 8,5C6.354,5 5,6.354 5,8C5,9.646 6.354,11 8,11Z'
        />
        <g transform='matrix(.5147 0 0 .5147 15.069 9.202)'>
            <path d='M8,13C5.67,13 1,14.17 1,16.5L1,19L15,19L15,16.5C15,14.17 10.33,13 8,13ZM8,11C9.646,11 11,9.646 11,8C11,6.354 9.646,5 8,5C6.354,5 5,6.354 5,8C5,9.646 6.354,11 8,11Z' />
        </g>
    </svg>
);

export default styled(ParentIcon)`
    width:100%;
    padding:0.4em;
    fill: ${ ({theme}) => theme.colors.dark };
`

