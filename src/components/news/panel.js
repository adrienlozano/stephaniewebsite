import React from 'react';
import { Flex, Box } from 'rebass';
import Highlight from './highlight';
import RecentList from './recent-list';

export default ({children}) => (<Flex>
    <Box>
        <Highlight />
    </Box>
    <Box>
        <RecentList/>
    </Box>
</Flex>)