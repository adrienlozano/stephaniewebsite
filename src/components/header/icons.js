import { chain } from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { SocialIconGroup, SocialIconGroupItem, SocialIcon } from '~/components/social';
import IconsContainer from "~/components/social/container";

const HeaderSocialIconGroup = SocialIconGroup.extend`
    align-items: center;
    justify-content: center;
`

const toHeader = chain(({name, url}) => {
    return (
    <SocialIconGroupItem key={name}>
        <SocialIcon icon={name} url={url} color="dark" backgroundColor="#FFF" />
    </SocialIconGroupItem>);
});

const HeaderIcons = ({icons, props})=>{
    var children = icons.map(toHeader).getOrElse(null);

    return (
        <HeaderSocialIconGroup {...props} >
            {children}
        </HeaderSocialIconGroup>
    )
};

export default (props) => (<IconsContainer component={HeaderIcons} {...props} />)
