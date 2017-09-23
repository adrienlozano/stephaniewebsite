import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { width, space } from 'styled-system';
import { compose, setDisplayName, defaultProps } from 'recompose';
import withStyle from "~/enhancers/with-style";

const style = `
    img { 
        max-width:100%;
        height:auto;
        max-height:300px;
        margin:0;
        padding:0;
        object-fit:cover;
        object-position: 50% 0%;
    }
    ${ space };
    ${ width };
`

const enhance = compose(
    setDisplayName("CardMedia"),
    withStyle(style),
    defaultProps({
        m: 0,
        p: 0,
        align: 'center'
    })
);

const CardMedia = ({className, children, ...rest}) => (<Flex className={`${className} card-media`}>{children}</Flex>)

export default enhance(CardMedia);