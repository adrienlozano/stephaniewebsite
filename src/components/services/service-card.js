import React from 'react';
import styled from 'styled-components';
import LinkButton from '~/components/link-button';
import Typography from '~/components/typography'
import { Card, CardMedia, CardContent, CardActions } from "~/components/card";

import { defaultProps, compose, setDisplayName } from 'recompose';

const ServiceCard = ({className, caption, extract, thumb, image, link, id, tags, ...props}) => {
    return (
    <Card className={className} {...props}>
        <CardMedia>
             <img src={thumb}/>
        </CardMedia>
        <CardContent>
            <Typography component="h5" size={1} mt={1}>{caption}</Typography>
            <Typography>{extract}</Typography>
        </CardContent>
        
        <CardActions>
            <LinkButton href={`/services/${id}`}>READ MORE</LinkButton>
        </CardActions>
    </Card>
)};

const enhance = compose(
    setDisplayName("ServiceCard"),
    defaultProps({

    })
);

export default enhance(ServiceCard);