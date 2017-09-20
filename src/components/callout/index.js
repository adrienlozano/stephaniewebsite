import React from 'react';
import Section from '~/components/section';
import styled from 'styled-components';
import Typography from '~/components/typography';
import PageSection from "~/components/page-section";
import CalloutButton from './button';
import withSettings from "~/enhancers/with-settings";

const CalloutSection = ({className, heading, subHeading}) => {
    return (<PageSection className={className} bg="dark" py={128} >
        <Typography component="h1" color="#FFF" f={[4, 6, 8, 8]}>{heading}</Typography>
        <Typography component="h2" color="#FFF" f={[2, 4, 6, 6]}>{subHeading}</Typography>
        <CalloutButton href="contact">Contact Us</CalloutButton>
    </PageSection>)
};

const withCalloutSettings =  withSettings(
    settings => ({ 
        ...settings.map(x => x.landing).map(x => x.callout).getOrElse({}) 
    })
);

export default withCalloutSettings(styled(CalloutSection)`
    text-align:center;
`);
