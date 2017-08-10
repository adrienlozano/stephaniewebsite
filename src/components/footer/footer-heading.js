import React from 'react';
import { defaultProps, compose, setDisplayName } from 'recompose';
import Typography from '~/components/typography';

const enhance = compose(
    setDisplayName("FooterHeading"),
    defaultProps({ size: 0.3,  component:"h2", color:"#FFF"})
);

export default enhance(Typography);