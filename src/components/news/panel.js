import React from 'react';
import { Flex, Box } from 'rebass';
import Highlight from './highlight';
import RecentList from './recent-list';

export default ({news}) => {

var highlight = null;
var recentNews = [...news];

if(news.length > 0){
    highlight = recentNews.shift();
}

return (
    <Flex>
        <Box flex={2}>
            <Highlight article={highlight} pr={5} />
        </Box>
        <Box flex={1}>
            <RecentList news={recentNews}/>
        </Box>
    </Flex>
)}