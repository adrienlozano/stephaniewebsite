import React from 'react';
import styled from 'styled-components';
import SocialIcon from './icon';


const SocialGroupItem = ({className, children}) => (
    <li className={className}>{children}</li>
)

const StyledSocialGroupItem = styled.li`
    margin-right:10px;
`

export default StyledSocialGroupItem;