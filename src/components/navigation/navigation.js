import React from 'react';
import { Flex } from 'rebass';
import styled, { css } from 'styled-components';
import { responsiveStyle, color } from 'styled-system';
import { setDisplayName, compose, defaultProps } from 'recompose';

const mobileMenu = (breakpoint) => css`
  @media (max-width: ${breakpoint}em){
    max-height:350px;
    overflow-y:auto;
    display: block;
  }
`
const Navigation = styled(Flex)`
    ${ responsiveStyle('flex-direction', 'direction') };
    ${ ({theme}) => mobileMenu(theme.breakpoints[2]) };
`;

const enhance = compose(
  setDisplayName("Navigation"),
  defaultProps({
    width: 1,
    open: false,
    py: 3,
    m: 0
  })
);

export default enhance(Navigation);
