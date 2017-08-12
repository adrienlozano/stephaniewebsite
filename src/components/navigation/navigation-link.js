import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { defaultProps, compose } from 'recompose';

import Link from '~/components/link'

var NavigationLink= styled(Link)`
  display:block;
  text-align:center;

  height:100%;

  font-weight: 300;
  color: ${({theme}) => theme.colors.dark };
  text-decoration:none;
  font-size: 1.25rem;
  padding-bottom: 0.1em;

  &:visited, &:link, &.active {
    color: ${({theme}) => theme.colors.dark };
    text-decoration:none;
  }

  &:hover {
      color: ${({theme}) => theme.colors.primaryAccent };
  }

  &.active{
      border-bottom: 2px solid ${({theme}) => theme.colors.primaryAccent };
  }
`

const enhance = compose(
  defaultProps( { "activeClassName" : "active" })
);

export default enhance(NavigationLink);
