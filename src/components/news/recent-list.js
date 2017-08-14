import React from 'react';
import { Flex , Box } from 'rebass';
import Typography from '~/components/typography';
import RecentItem from './recent-item';

export default ({news = []}) => (
<Box>
    <Typography component="h4" capitalize={true}>Recent</Typography>
    { news.map(item => <RecentItem key={item.id} {...item}>
        </RecentItem>) }
</Box>)

