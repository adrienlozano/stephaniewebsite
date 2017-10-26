import React from 'react';
import { PageLayout } from '~/layouts';
import { ContactForm } from '~/components/contact';
import Typography from '~/components/typography';
import withSettings  from '~/enhancers/with-settings';
import PageSection from "~/components/page-section";
import Heading from '~/components/heading';

const PhoneLink = ({phone}) =>(<a href={`tel:${phone}`}>{phone}</a>);
const EmailLink = ({email}) =>(<a href={`mailto:${email}`}>{email}</a>);


class ContactPage extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values, other){

        var data = new FormData();
        for(var key in values){
            data.append(key, values[key]);
        }

        fetch("/", {
            method: "POST",
            body: data
        }).then((response) =>{
            
        });
    }

    render(){
        let { settings, ...other} = this.props;
        const { contactEmail : email, contactNumber: phone} = settings.map(x => x.general).getOrElse({});

        return (<PageSection bg="light">
        <Heading>Contact</Heading>
        <Typography>You can phone us on <PhoneLink phone={phone}/>, email us at <EmailLink email={email}/> or complete the enquiry form below.</Typography>

        <ContactForm onValidSubmit={ this.handleSubmit } ref={(form) => this.form = form }/>
        <Typography>A registered migration agent will respond to your enquiry as soon as possible.</Typography>
        </PageSection>);
    }
}

export default withSettings()(ContactPage);