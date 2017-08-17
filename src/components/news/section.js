import React from 'react';
import styled from 'styled-components';
import Heading from '~/components/heading';
import PageSection from '~/components/page-section';
import { setDisplayName, compose, defaultProps } from 'recompose';
import NewsPanel from './panel';

const NewsSection = ({news = [], ...props}) => (
    <PageSection bg="light" {...props}>
         <Heading>Migration News</Heading>
         <NewsPanel news={news}/>
    </PageSection>
);

const enhance = compose( 
    setDisplayName("NewsSection")
);

export default enhance(NewsSection);