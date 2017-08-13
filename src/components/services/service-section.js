import React from 'react';
import PageSection from "~/components/page-section";
import Typography from '~/components/typography';
import ServiceList  from './service-list';

const ServicesSection = ({services}) => {
    return (
    <PageSection bg="light">
        <Typography component="h2" size={1}>Services </Typography>
        <ServiceList services={services} ></ServiceList>
    </PageSection>
)};

export default ServicesSection;
export { ServicesSection };