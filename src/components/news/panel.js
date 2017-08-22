import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import { responsiveStyle } from 'styled-system';
import Highlight from './highlight';
import RecentList from './recent-list';


const Wrapper = styled(Flex)`
    ${ responsiveStyle('display', 'display') }
`

export default ({news = []}) => {

var highlight = null;
var recentNews = [...news];

if(news.length > 0){
    highlight = recentNews.shift();
}

return (
    <Wrapper display={["block", "block", "flex"]} p={[3,3,0]}>
        <Box flex={2}> 
            <Highlight article={highlight} pr={[0,0, 5]} />
        </Box>
        <Box flex={1}>
            <RecentList news={recentNews}/>
        </Box>
    </Wrapper>
)}