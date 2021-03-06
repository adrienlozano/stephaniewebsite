import React from 'react';
import styled from 'styled-components';
import ServiceCard from './service-card';
import { Flex }  from 'rebass';
import { width, space } from 'styled-system';

const CardWrapper = ({children, className}) => (<div className={className}>{children}</div>)
const StyledCardWrapper = styled(CardWrapper)`
    ${ width };
    ${ space };
    display:flex;
`

const ServiceList = ({className, services}) => {
    var result = services.map( (service) => (
        <StyledCardWrapper key={service.id} width={[1, 1, 0.39, 0.29]}>
            <ServiceCard {...service} ></ServiceCard>
        </StyledCardWrapper>));

    return (<Flex className={className} wrap={true}>
        { result }
    </Flex>)
};

const StyledServiceList = styled(ServiceList)`
    > * {
        margin: 10px;
    }
`

export default StyledServiceList;