import { chain } from 'ramda';
import React from 'react';
import styled, {withTheme} from 'styled-components';
import { SocialIconGroup, SocialIconGroupItem, SocialIcon } from '~/components/social';
import IconsContainer from "~/components/social/container";
import { withProps } from 'recompose';
import { lighten } from 'polished';

const toIcon = (theme) => chain(({name, url}) => {
    const props = { 
        color: theme.colors.dark,
        backgroundColor: lighten(0.1, theme.colors.dark),
        hoverColor: theme.colors.dark,
        backgroundHoverColor: theme.colors.white
    };

    return (
    <SocialIconGroupItem key={name}>
        <SocialIcon icon={name} url={url}  {...props} />
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

const EnhancedFooterIcons = withTheme(FooterIcons);

export default (props) => (<IconsContainer component={EnhancedFooterIcons} {...props} />)
