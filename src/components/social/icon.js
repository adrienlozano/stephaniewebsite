import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

/*
var iconClass = (name) => (`mdi mdi-${name}`);

const SocialLink = ({icon, url, className}) => { 
    return (
    <a className={className} href={url}>
        <i className={iconClass(icon) }></i>
    </a>
)}

const iconSize = (size) => (css`
    height: ${ typography.rhythm(size) };
    width: ${ typography.rhythm(size) };
    line-height: ${ typography.rhythm(size) };

    i {
        ${ typography.scale(size/2) }
    }
`)

const StyledSocialLink = styled(SocialLink)`
    text-decoration:none;
    background-color: ${ ({backgroundColor}) => backgroundColor ? backgroundColor : darker(0.4)("grayscale.0").chain(x => x.string()) };
    border-radius: 50%;
    background-clip: padding-box;
    ${ ({size = 2}) =>  iconSize(size) };
    text-align: center;
    transition: all 0.4s ease-in-out;

    display:flex;
    align-items: center;

    &:visited { color : inherit; }
    &:hover{
        background-color: ${ ({backgroundHoverColor}) => backgroundHoverColor ? backgroundHoverColor :  lighter(0.2)("grayscale.0").chain(x => x.string())};
        i { color: ${ ({hoverColor}) => hoverColor ? hoverColor : "rgba(255,255,255, 1)" } };
    }

    i {
        flex: 1;
        color: ${({color}) => color ? color : "rgba(255,255,255, 0.4)" }; 
    }
`*/

//export default StyledSocialLink;

export default () => (<p>icon</p>);