import React from 'react';
import { defaultProps, compose, setDisplayName } from 'recompose';
import { Flex } from 'rebass';

const enhance = compose(
    setDisplayName("FooterColumn"),
    defaultProps({ 
        column: true, 
        align: ["center", "center", "flex-start"],
        mr: [0, 0, 4],
        p: [2, 2, 0],
        justify: [ 'center', 'center', 'flex-start'],
        flex: 1
    })
);

export default enhance(Flex);
