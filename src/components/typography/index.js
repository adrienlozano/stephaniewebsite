import React from 'react';
import { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { compose, setDisplayName, componentFromProp, defaultProps, mapProps } from 'recompose';
import withStyle from "~/enhancers/with-style";
import { space, color, fontSize, removeProps } from 'styled-system';

var transformCapitilize = css`
  text-transform: caitalize;
`
const capitalize = ({capitalize}) => capitalize ?  transformCapitilize : null;

var enhance = compose (
    setDisplayName("Typography"),
    defaultProps({ component: 'p', color: "dark" })
)

var Typography = componentFromProp('component');

var Wrapper = ({className, children, component, ...rest}) => {
  var next =removeProps(rest);
  return (<Typography className={className} component={component} {...next}>{children}</Typography>)
}

var StyledTypography = styled(Wrapper)`
  ${ space };
  ${ color };
  ${ fontSize };
  ${ capitalize };
`;

export default enhance(StyledTypography);