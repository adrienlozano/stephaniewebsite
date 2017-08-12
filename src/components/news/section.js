import React from 'react';
import styled from 'styled-components';
import Typography from '~/components/typography';
import PageSection from '~/components/page-section';
import { setDisplayName, compose, defaultProps } from 'recompose';

const NewsSection = ({children, ...props}) => (
    <PageSection bg="light" {...props}>
         <Typography component="h1" size={1}>Migration News</Typography>
         {children}
    </PageSection>
);

const enhance = compose( 
    setDisplayName("NewsSection")
);

export default enhance(NewsSection);