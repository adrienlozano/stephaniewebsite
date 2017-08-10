import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass';
import { setDisplayName, compose, defaultProps } from 'recompose';

const NavigationItem = styled(Flex)`
    align-items:center;
`

const enhance = compose(
    setDisplayName("NavigationItem"),
    defaultProps({
        py: 1,
        mr: [ 0, 0, 1],
        justify: [ 'center', 'center', 'flex-start']
    })
);

export default enhance(NavigationItem);