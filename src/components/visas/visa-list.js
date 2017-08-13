import React from 'react';
import styled from 'styled-components';
import VisaCard from './visa-card';
import { Flex }  from 'rebass';
import { width, space } from 'styled-system';

const CardWrapper = ({children, className}) => (<div className={className}>{children}</div>)
const StyledCardWrapper = styled(CardWrapper)`
    ${ width };
    ${ space };
`

const VisaList = ({className, visas}) => {
    var result = visas.map( (visa) => (
        <StyledCardWrapper key={visa.id} width={[1, 1, 0.39, 0.29]}>
            <VisaCard {...visa} ></VisaCard>
        </StyledCardWrapper>));

    return (<Flex className={className} wrap={true}>
        { result }
    </Flex>)
};

const StyledVisaList = styled(VisaList)`
    > * {
        flex-grow:1;
        margin: 10px;
    }
`

export default StyledVisaList;