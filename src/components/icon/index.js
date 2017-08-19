import React from 'react';
import classNames from 'classnames';
import { space, fontSize } from 'styled-system';
import styled from 'styled-components';

var iconClass = (name) => (`mdi mdi-${name}`);

const Icon = ({icon, className}) =>  {
    return (<i className={classNames(iconClass(icon), className)}></i>)
}

export default styled(Icon)`
    ${space};
    ${fontSize};
`