import React from 'react';
import Typography from '~/components/typography';
import styled from 'styled-components';

const Heading = ({className, component="h1", ...rest}) => (
    <Typography className={className} component={component} {...rest}></Typography>
)

const StyledHeading = styled(Heading)`
    font-family: Roboto Slab,sans-serif;
`;

export default StyledHeading;