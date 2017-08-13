import React from 'react';
import { PageLayout } from '~/layouts';
import { ContactForm } from '~/components/contact';
import Typography from '~/components/typography';
import withSettings  from '~/enhancers/with-settings';
import PageSection from "~/components/page-section";

const PhoneLink = ({phone}) =>(<a href={`tel:${phone}`}>{phone}</a>);
const EmailLink = ({email}) =>(<a href={`mailto:${email}`}>{email}</a>);

const ContactPage = ({settings, ...other}) => {
    const { contactEmail : email, contactNumber: phone} = settings.map(x => x.general).getOrElse({});

return (<PageSection bg="light">
        <Typography component="h1">Contact</Typography>
        <Typography>You can phone us on <PhoneLink phone={phone}/> or email us at <EmailLink email={email}/></Typography>

        <ContactForm/>
        <Typography>A registered migration agent will respond to your enquiry as soon as possible.</Typography>
    </PageSection>);
}

export default withSettings(ContactPage);