import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { compose, setDisplayName, componentFromProp, defaultProps } from 'recompose';
import withStyle from "~/enhancers/with-style";
import { space, color } from 'styled-system';
import { whereEq, equals } from 'ramda';
import { Input, Textarea, Select } from 'rebass';
import { darken } from 'polished';

const ifProp = (prop, left, right) => {
    return (props) => {
        return whereEq(prop)(props) ? left: right;
    }
}

const GenericInput = ({ invalid, ...props }) => {
  if (props.type === 'textarea') {
    return <Textarea {...props} />
  } else if (props.type === 'select') {
    return <Select {...props} />
  }
  return <Input {...props} />
}

const StyledGenericInput = styled(GenericInput)`
 display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  ${color};
  outline: 1px solid ${ ({theme, invalid}) => invalid ? theme.colors.danger : darken(0.1, theme.colors.light)};
  
  &:focus {
    border: 1px solid ${ ({ theme, invalid }) => invalid ? theme.colors.danger : theme.colors.primary  };
    outline: 1px solid ${ ({theme, invalid}) => invalid ? theme.colors.danger : darken(0.1, theme.colors.light)};
  }

  border-radius: 2px;
  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }
`

StyledGenericInput.propTypes = {
  type: PropTypes.string,
  invalid: PropTypes.bool,
}

StyledGenericInput.defaultProps = {
  type: 'text',
  invalid: true,
  bg: "white",
  color: "dark"
}

export default StyledGenericInput