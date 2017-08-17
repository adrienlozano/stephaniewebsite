import React from 'react';
import PageSection from "~/components/page-section";
import Heading from '~/components/heading';
import ServiceList  from './service-list';

const ServicesSection = ({services}) => {
    return (
    <PageSection bg="light">
        <Heading>Services</Heading>
        <ServiceList services={services} ></ServiceList>
    </PageSection>
)};

export default ServicesSection;
export { ServicesSection };