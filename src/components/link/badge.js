import React from 'react';
import Link from './link';
import styled, {css} from 'styled-components';
import { darken } from 'polished';

const hoverMixin = css`
    &:hover {
        background-color: ${ ({theme, bg}) => bg ? darken(0.2, bg) : theme.colors.primaryAccent  };
        text-decoration: none;
    }
`;

const BadgeLink = ({color, bg, hover, ...rest}) =>(<Link {...rest}/>)

const StyledBadgeLink = styled(BadgeLink).attrs({
    color : props => props.color || props.theme.colors.white,
    bg: props => props.bg || props.theme.colors.secondaryAccent,
    hover: props => props.hover || hoverMixin
})`
    display: inline-block;
    color: ${ ({color}) => color };
    text-decoration:none;
    background-color: ${ ({bg}) => bg };
    ${ ({hover}) => hover };
    padding: 0.2em 0.4em;
    border-radius: 4px;
    margin-right: 5px;
    font-weight: normal;
`;

export default StyledBadgeLink;