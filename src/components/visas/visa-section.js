import React from 'react';
import PageSection from "~/components/page-section";
import Typography from '~/components/typography';
import VisaList  from './visa-list';

const VisaSection = ({visas}) => {
    return (
    <PageSection bg="light">
        <Typography component="h2" size={1}>Visas </Typography>
        <VisaList visas={visas} ></VisaList>
    </PageSection>
)};

export default VisaSection;
export { VisaSection };