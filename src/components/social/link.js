import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { darken, lighten } from 'polished';
import { Circle } from 'rebass';
import { width, height } from 'styled-system';
import { defaultProps, compose } from 'recompose';
import Icon from '~/components/icon';

const SocialLink = ({icon, url, className}) =>  (
    <a className={className} href={url}>
        <Icon icon={icon}/>
    </a>
);

const size = ({ theme, size }) => (css`
    width: ${ size }em;
    height: ${ size }em;
    line-height: ${ size }em;
    font-size: ${ size }em;
`);

const StyledSocialLink = styled(SocialLink)`
    text-decoration:none;
    background-color: ${ ({theme, backgroundColor}) => backgroundColor ? backgroundColor : darken(0.4, theme.colors.dark) };
    border-radius: 50%;
    background-clip: padding-box;
   
    text-align: center;
    transition: all 0.4s ease-in-out;

    display:flex;
    align-items: center;

    &:visited { color : inherit; }
    &:hover{
        background-color: ${ ({theme, backgroundHoverColor}) => backgroundHoverColor ? backgroundHoverColor :  lighten(0.2, theme.colors.dark)};
        i { color: ${ ({theme, hoverColor}) => hoverColor ? hoverColor : theme.colors.white } };
    }

    i {
        flex: 1;
        color: ${({theme, color}) => color ? color : theme.colors.light }; 
    }

    ${size};
`


const enhance = compose(
    defaultProps({size: 1.8})
);

export default enhance(StyledSocialLink);