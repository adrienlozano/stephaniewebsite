import React from 'react';
import styled from 'styled-components';
import { defaultProps, compose, setDisplayName } from 'recompose';
import FooterColumn from './footer-column';
import FooterIcons from './footer-icons';
import FooterHeading from './footer-heading';
import Accreditation from './accreditation';
import Typography from '~/components/typography';
import { responsiveStyle } from 'styled-system';
import { Flex } from 'rebass';

const FooterLink = styled.a`
    color: ${ ({theme}) => theme.colors.white };
    text-decoration: none;

    &:hover{
        color: ${ ({theme}) => theme.colors.secondaryAccent };
    }
`

var FooterColumns = ({className, settings}) => {
    const contactNumber = settings.map(x => x.contactNumber).getOrElse(null);
    const contactEmail = settings.map(x => x.contactEmail).getOrElse(null);

    return (
        <Flex className={className} width={1}>
            <FooterColumn>
                <FooterHeading>Business</FooterHeading>
                <Accreditation></Accreditation>
            </FooterColumn>
            <FooterColumn>
                <FooterHeading>Contact</FooterHeading>
                <Typography color="#FFF"   >
                    <FooterLink href={`tel:${contactNumber}`}>{contactNumber}</FooterLink> <br/>
                    <FooterLink href={`mailto:${contactEmail}`}>{contactEmail}</FooterLink>
                </Typography>
            </FooterColumn>
            <FooterColumn>
                <FooterHeading>Social</FooterHeading>
                    <FooterIcons/>
            </FooterColumn>
        </Flex>
    );
}

var StyledFooterColumns = styled(FooterColumns)`
    ${ responsiveStyle('flex-direction', 'direction') };
`

var enhance = compose(
    setDisplayName("FooterColumns"),
    defaultProps({
        direction: ['column', 'column', 'row']
    })
)

export default enhance(StyledFooterColumns);