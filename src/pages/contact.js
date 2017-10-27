import React from 'react';
import { PageLayout } from '~/layouts';
import { ContactForm } from '~/components/contact';
import Typography from '~/components/typography';
import withSettings  from '~/enhancers/with-settings';
import PageSection from "~/components/page-section";
import Heading from '~/components/heading';
import { Flex, Box,  Button } from 'rebass';
import Icon from "~/components/icon";

const PhoneLink = ({phone}) =>(<a href={`tel:${phone}`}>{phone}</a>);
const EmailLink = ({email}) =>(<a href={`mailto:${email}`}>{email}</a>);

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const ErrorBox = ({className, message}) => (<Flex className={className} p={2} bg="danger" >
        <Flex mr={2} justify="stretch" style={{alignItems:"center", color:"#FFF" }}>
            <Icon f={5} icon="alert-octagon"></Icon>
        </Flex>
        <Box>
            <Typography color="white"> {message}</Typography>
        </Box>
    </Flex>
)


class IncompleteView extends React.Component {
    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { error: null };
    }

    handleSubmit(values, other){
        
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode( { "form-name" : "contact", ...values})
        }).then((response) =>{
            this.form.clear();
            this.setState({error: null});
            this.props.onCompleted();
        }).catch((error) => {
            this.setState({error: error.message})
        });
    }

    render(){
        const { phone, email, onCompleted } = this.props;

        return (
            <div>
                <Heading>Contact</Heading>
                <Typography>You can phone us on <PhoneLink phone={phone}/>, email us at <EmailLink email={email}/> or complete the enquiry form below.</Typography>
                <ContactForm onValidSubmit={ this.handleSubmit } ref={(form) => this.form = form }/>
                <Typography>A registered migration agent will respond to your enquiry as soon as possible.</Typography>
                { this.state.error && <ErrorBox message={this.state.error} /> }
            </div>
        );
    }
}

const CompletedView = ({ onReset }) =>
(
    <div>
        <Typography color="neutralAccent">Your enquiry has been successfully sent.</Typography>
        <Button bg="neutralAccent" onClick={onReset} >Lodge another enquiry</Button>
    </div>
)

class ContactPage extends React.Component{
    constructor(){
        super();
        this.handleCompletion = this.handleCompletion.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = { completed : false };
    }

    handleCompletion(){
        this.setState({completed: true});
    }

    handleReset(){
        this.setState({completed:false});
    }

    render(){
        let { settings, ...other} = this.props;
        const { contactEmail : email, contactNumber: phone} = settings.map(x => x.general).getOrElse({});

        return (<PageSection bg="light">
            { this.state.completed && <CompletedView onReset={this.handleReset}/>}
            { !this.state.completed && <IncompleteView onCompleted={this.handleCompletion} email={email} phone={phone}/> }

        </PageSection>);
    }
}

export default withSettings()(ContactPage);