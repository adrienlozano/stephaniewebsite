import { chain } from 'ramda';
import React from 'react';
import styled, {withTheme} from 'styled-components';
import { SocialIconGroup, SocialIconGroupItem, SocialLink } from '~/components/social';
import IconsContainer from "~/components/social/container";
import { withProps, compose } from 'recompose';
import { lighten } from 'polished';
import withSocial from '~/enhancers/with-social';

const toIcon = (theme) => chain(({name, url}) => {
    const props = { 
        color: theme.colors.dark,
        backgroundColor: lighten(0.1, theme.colors.dark),
        hoverColor: theme.colors.dark,
        backgroundHoverColor: theme.colors.white
    };

    return (
    <SocialIconGroupItem key={name}>
        <SocialLink url={url} icon={name} {...props}/>
    </SocialIconGroupItem>);
});

const FooterIcons = ({icons, props, theme})=>{
    var children = icons.map(toIcon(theme)).getOrElse(null);

    return (
        <SocialIconGroup {...props} >
            {children}
        </SocialIconGroup>
    )
};

const enhance = compose(
    withSocial,
    withTheme
)

export default enhance(FooterIcons);