import React from 'react';
import Section from '~/components/section';
import styled from 'styled-components';
import Typography from '~/components/typography';
import PageSection from "~/components/page-section";
import CalloutButton from './button';

const CalloutSection = ({className}) => (<PageSection className={className} bg="dark" py={128} >
        <Typography component="h1" color="#FFF" size={1.5}>Want to find out more?</Typography>
        <Typography component="h2" color="#FFF" size={1}>Subheading</Typography>
        <CalloutButton>Contact Us</CalloutButton>
</PageSection>);

export default styled(CalloutSection)`
    text-align:center;
`;
