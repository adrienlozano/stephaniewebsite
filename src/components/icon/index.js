import React from 'react';
import classNames from 'classnames';
import { space, fontSize } from 'styled-system';
import styled from 'styled-components';
import ParentIcon  from './parent';

const icons = {
    parent : ParentIcon
}

var iconClass = (name) => (`mdi mdi-${name}`);

const Icon = ({icon, className}) =>  {
    if(icon in icons){
        var CustomIcon = icons.parent;
        return (<CustomIcon className={className}/>)
    }

    return (<i className={classNames(iconClass(icon), className)}></i>)
}

export default styled(Icon)`
    ${space};
    ${fontSize};
`