import { chain } from 'ramda';
import React from 'react';
import styled, { withTheme } from 'styled-components';
import { SocialIconGroup, SocialIconGroupItem, SocialIcon } from '~/components/social';
import IconsContainer from "~/components/social/container";
import { darken } from 'polished';

const HeaderSocialIconGroup = SocialIconGroup.extend`
    align-items: center;
    justify-content: center;
`

const toHeader = (theme) => chain(({name, url}) => {
    const props = { 
        color: theme.colors.primary,
        backgroundColor: theme.colors.white,
        hoverColor:  theme.colors.white,
        backgroundHoverColor: darken(0.1, theme.colors.primary)
    };

    return (
    <SocialIconGroupItem key={name}>
        <SocialIcon icon={name} url={url} {...props}/>
    </SocialIconGroupItem>);
});

const HeaderIcons = withTheme(({icons, props, theme})=>{
    var children = icons.map(toHeader(theme)).getOrElse(null);

    return (
        <HeaderSocialIconGroup {...props} >
            {children}
        </HeaderSocialIconGroup>
    )
});

export default (props) => (<IconsContainer component={HeaderIcons} {...props} />)
