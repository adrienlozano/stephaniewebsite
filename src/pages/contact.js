import React from 'react';
import { PageLayout } from '~/layouts';
import { ContactForm } from '~/components/contact';
import Typography from '~/components/typography';
import withSettings  from '~/enhancers/with-settings';
import PageSection from "~/components/page-section";
import Heading from '~/components/heading';

const PhoneLink = ({phone}) =>(<a href={`tel:${phone}`}>{phone}</a>);
const EmailLink = ({email}) =>(<a href={`mailto:${email}`}>{email}</a>);

const ContactPage = ({settings, ...other}) => {
    const { contactEmail : email, contactNumber: phone} = settings.map(x => x.general).getOrElse({});

return (<PageSection bg="light">
        <Heading>Contact</Heading>
        <Typography>You can phone us on <PhoneLink phone={phone}/>, email us at <EmailLink email={email}/> or complete the enquiry form below.</Typography>

        <ContactForm/>
        <Typography>A registered migration agent will respond to your enquiry as soon as possible.</Typography>
    </PageSection>);
}

export default withSettings(ContactPage);