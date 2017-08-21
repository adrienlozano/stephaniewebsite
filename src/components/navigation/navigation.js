import React from 'react';
import { Flex } from 'rebass';
import styled, { css } from 'styled-components';
import { responsiveStyle, color } from 'styled-system';
import { setDisplayName, compose, defaultProps } from 'recompose';

const hideMenu = (breakpoint) => css`
  @media (max-width: ${breakpoint}em){
    display: ${ ({open}) => open ? 'flex' : 'none' };
  }
`

const Navigation = styled(Flex)`
    ${ responsiveStyle('flex-direction', 'direction') };
    ${ ({theme}) => hideMenu(theme.breakpoints[2]) }
`;

const enhance = compose(
  setDisplayName("Navigation"),
  defaultProps({
    direction: [ 'column', 'column', 'row'],
    width: 1,
    open: false,
    py: 3,
    m: 0
  })
);

export default enhance(Navigation);
