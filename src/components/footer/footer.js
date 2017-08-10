import React from 'react';
import styled from 'styled-components';
import FooterColumns from './footer-columns';
import PageSection from '~/components/page-section';
import withSettings from "~/enhancers/with-settings";

const Footer = ({settings, className}) => {
    return (<PageSection bg="dark" className={className}  >
        <FooterColumns settings={settings}/>
    </PageSection>)
};

const FooterContainer = ({settings, component : Component}) => (<Footer settings={settings.map(x => x.general)}></Footer>)

export default withSettings(FooterContainer);
