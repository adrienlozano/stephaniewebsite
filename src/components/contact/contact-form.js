import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { Flex, Box, Label, Text, Button } from 'rebass';
import Input from "~/components/input";
import { curry } from 'ramda';
import { withHandlers, withState, withStateHandlers, compose } from 'recompose';
import { dripFormField, dripForm } from 'react-drip-form';
import { fontSize, color } from 'styled-system';
let ErrorBox = styled.span`
    ${color};
    ${fontSize};
`

ErrorBox.defaultProps =
{
    color : "danger",
    fontSize: 1
}

const Field = ({meta, input, ...props}) => {
    const invalid = (meta.error && meta.touched && meta.dirty) ? true : false;
    return (
    <Box mb={2}>
        <Label htmlFor={meta.name}>{meta.label}</Label>
        <Input id={meta.name} {...input} invalid={invalid} {...props} />
        { invalid &&
         <ErrorBox>{meta.error}</ErrorBox>
        }
    </Box>
)};

const FormField = dripFormField()(Field);

const ContactForm = ({ handlers, meta, submitting, ...rest }) => { 
    const { invalid, pristine } = meta;

    return (
        <form onSubmit={handlers.onSubmit}>
            <FormField label="First Name" name="firstName" />
            <FormField label="Last Name" name="lastName"  />
            <FormField label="Email" name="email"  />
            <FormField label="Phone Number" name="phone"  />
            <FormField label="Country of passport" name="country"   />
            <FormField label="Details of your enquiry" type="textarea" name="enquiry"  />
            <Flex justify="flex-end">
                <Button bg="neutralAccent" disabled={ invalid || pristine || submitting } >Submit</Button>
            </Flex>
        </form>
    )
}

var validations = {
    firstName: { required: true, alphaNumeric: true, max: 255 },
    lastName:  { required: true, alphaNumeric: true, max: 255 },
    email: { required: true, email: true },
    country: { required: true },
    enquiry: { required: true, max: 1024 }
}

export default dripForm({ validations : validations })(ContactForm);

/*
Email: stephanie@mooremigration.com
Phone: +61 4 6659 5807
*/