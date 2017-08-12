import React from 'react';
import styled from 'styled-components';
import LinkButton from '~/components/link-button';
import Typography from '~/components/typography'
import { Card, CardMedia, CardContent, CardActions } from "~/components/card";

import { defaultProps, compose, setDisplayName } from 'recompose';

const VisaCard = ({className, caption, extract, thumb, image, link, slug, id, tags, ...props}) => {
    return (
    <Card className={className} {...props}>
        <CardMedia>
             <img src={thumb}/>
        </CardMedia>
        <CardContent>
            <Typography component="h4" mt={1}>{caption}</Typography>
            <Typography>{extract}</Typography>
        </CardContent>
        
        <CardActions>
            <LinkButton href={slug} pb={2}>READ MORE</LinkButton>
        </CardActions>
    </Card>
)};

const enhance = compose(
    setDisplayName("VisaCard")
);

export default enhance(VisaCard);