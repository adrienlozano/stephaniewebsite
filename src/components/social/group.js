import React from 'react';
import styled from 'styled-components';

const SocialGroup = ({className, children}) =>(<ul className={className}>{children}</ul>)

const StyledSocialGroup = styled(SocialGroup)`
    list-style: none;
    margin-left:0;
    padding:0;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
`

export default StyledSocialGroup;