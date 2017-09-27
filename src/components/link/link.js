import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import GatsbyLink from 'gatsby-link';

const styles = css`
  font-family: ${ ({theme}) => theme.font };
  text-decoration: none;
  font-weight: 500;
  color: ${ ({theme}) => theme.colors.dark };
  
  &:hover {
    text-decoration: underline;
  }
`

const StyledLink = styled(({ theme, reverse, palette, ...props }) =>
  <GatsbyLink {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`

const Link = ({ ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  }
  return <Anchor {...props} />
}

Link.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  to: PropTypes.string,
}

export default Link;