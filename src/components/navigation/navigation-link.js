import React, { PropTypes } from 'react'
import styled from 'styled-components'

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
      color: ${({theme}) => theme.colors.accent };
  }

  &.active{
      border-bottom: 2px solid ${({theme}) => theme.colors.accent };
  }
`

export default NavigationLink;
