import React from 'react';
import { Flex , Box } from 'rebass';
import Typography from '~/components/typography';
import NewsItem from './news-item';

export default ({news = []}) => (
<Box>
    <Typography component="h4" capitalize={true}>Recent</Typography>
    { news.map(item => <NewsItem key={item.id} {...item}>
        </NewsItem>) }
</Box>)