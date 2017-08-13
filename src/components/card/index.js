import React from 'react';
import styled from 'styled-components';
import { removeProps, space, width } from 'styled-system';
import CardActions from './actions';
import CardMedia from './media';
import CardContent from './content';
import CardHeader from './header';
import { Flex } from 'rebass';
import { setDisplayName, compose, defaultProps } from 'recompose';

const enhance = (
    setDisplayName("Card")
);

const Card = ({className, children, ...rest}) => {
    const next = removeProps(rest); 
    return (<div {...next} className={className} >
        {children}
    </div>)
}

const StyledCard = styled(Card)`
    border: solid 1px #CCC;
    border-radius:  2px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    overflow:hidden;
    ${ space };
    ${ width };
`;

const EnhancedCard = enhance(StyledCard);
export default EnhancedCard;

export { CardActions, CardMedia, CardContent, CardHeader, EnhancedCard as Card };