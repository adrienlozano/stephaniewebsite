import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { width, space } from 'styled-system';
import { compose, setDisplayName, defaultProps } from 'recompose';

const enhance = compose(
    setDisplayName("CardMedia"),
    defaultProps({
        m: 0,
        p: 0,
        align: 'center',
        thumbPosition: "50% 0%"
    })
);

const CardMedia = ({className, children, ...rest}) => (<Flex className={`${className} card-media`}>{children}</Flex>);
const StyledCardMedia = styled(CardMedia)`
    img { 
        width:100%;
        height:auto;
        max-height:300px;
        margin:0;
        padding:0;
        object-fit:cover;
        object-position: ${ ({thumbPosition }) => thumbPosition ? thumbPosition: "initial" };
    }
    ${ space };
    ${ width };
`

export default enhance(StyledCardMedia);