import React from 'react';
import styled from 'styled-components';
import { color, width, space, removeProps } from 'styled-system';
import { defaultProps, compose, setDisplayName } from 'recompose';

const Section = ({children, className, ...props}) => {
    var next = removeProps(props);
    return (
    <div className={className} {...next }>
        {children}
    </div>
)};

const StyledSection = styled(Section)`
    ${color};
    ${width};
    ${space};
`

const enhance = compose(
    setDisplayName("section"),
    defaultProps( {  w: 1, p:0, m:0 })
)

export default enhance(StyledSection);