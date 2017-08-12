import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { width, space } from 'styled-system';
import { compose, setDisplayName, defaultProps } from 'recompose';
import withStyle from "~/enhancers/with-style";

const style = `
    img { 
        width: 100%;
        margin:0;
        padding:0;
        height:300px;
        max-height:600px;
        object-fit:cover;
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

const CardMedia = ({className, children, ...rest}) => (<Flex className={className}>{children}</Flex>)

export default enhance(CardMedia);