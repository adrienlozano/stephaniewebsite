import React from 'react';
import classNames from 'classnames';
import { space, fontSize, removeProps } from 'styled-system';
import styled from 'styled-components';
import ParentIcon  from './parent';

const icons = {
    parent : ParentIcon
}

var iconClass = (name) => (`mdi mdi-${name}`);

const Icon = ({icon, className, ...rest}) =>  {
    rest = removeProps(rest);
    if(icon in icons){
        var CustomIcon = icons.parent;
        return (<CustomIcon className={className} {...rest}/>)
    }

    return (<i className={classNames(iconClass(icon), className)} {...rest}></i>)
}

export default styled(Icon)`
    ${space};
    ${fontSize};
`