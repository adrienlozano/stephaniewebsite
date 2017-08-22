import React from 'react';
import Section from '~/components/section';
import { Flex } from 'rebass';
import styled, { css } from 'styled-components';
import { width } from 'styled-system';
import { defaultProps, compose } from 'recompose';

const fixed = (width) => `
    max-width:${width}px;
    margin-left:auto;
    margin-right:auto;
`;

const StyledInnerSection = styled(Section)`
    ${({type, ...other}) => type === "fixed" ? fixed(1024) : null };
`

const InnerSection = defaultProps({type: "fixed", py:4})(StyledInnerSection);

const PageSection = ({children, bg, ...props}) => {
    return (<Section bg={bg} >
            <InnerSection {...props} >
               {children}
            </InnerSection>
        </Section>
    )
};

const enhance = compose(
    defaultProps({
        "px" : 3
    })
);

export default enhance(PageSection);