import React from 'react';
import PageSection from "~/components/page-section";
import Heading from '~/components/heading';
import VisaList  from './visa-list';

const VisaSection = ({visas}) => {
    return (
    <PageSection bg="light">
        <Heading>Visas </Heading>
        <VisaList visas={visas} ></VisaList>
    </PageSection>
)};

export default VisaSection;
export { VisaSection };