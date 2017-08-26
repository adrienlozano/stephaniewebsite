import React from 'react';
import Section from '~/components/section';
import styled from 'styled-components';
import Typography from '~/components/typography';
import PageSection from "~/components/page-section";
import CalloutButton from './button';

const CalloutSection = ({className}) => (<PageSection className={className} bg="dark" py={128} >
        <Typography component="h1" color="#FFF" f={[4, 6, 8, 8]}>Want to find out more?</Typography>
        <Typography component="h2" color="#FFF" f={[2, 4, 6, 6]}>Subheading</Typography>
        <CalloutButton href="contact">Contact Us</CalloutButton>
</PageSection>);

export default styled(CalloutSection)`
    text-align:center;
`;
