import { chain } from 'ramda';
import React from 'react';
import styled from 'styled-components';
import { SocialIconGroup, SocialIconGroupItem, SocialIcon } from '~/components/social';
import IconsContainer from "~/components/social/container";
import { defaultProps } from 'recompose';
import { lighten } from 'polished';


const FooterSocialIcon = styled(SocialIcon)`
    color: ${ ({theme}) => theme.colors.dark };
    background-color: ${ ({theme}) => lighten(0.6, theme.colors.dark) };
    &:hover{
        background-color: ${ ({theme}) => theme.colors.white };
        color: ${ ({theme}) => theme.colors.dark };
    }
`

const toIcon = chain(({name, url}) => {
    return (
    <SocialIconGroupItem key={name}>
        <FooterSocialIcon icon={name} url={url} />
    </SocialIconGroupItem>);
});

const FooterIcons = ({icons, props})=>{
    var children = icons.map(toIcon).getOrElse(null);

    return (
        <SocialIconGroup {...props} >
            {children}
        </SocialIconGroup>
    )
};

export default (props) => (<IconsContainer component={FooterIcons} {...props} />)
