import React from 'react'
import styled, {css} from 'styled-components'

import { Grid, Flex, Box } from 'rebass';
import Navigation from '~/components/navigation';
import withSettings from "~/enhancers/with-settings";
import Logo from './logo';
import PageSection from '~/components/page-section';
import HeaderIcons from './icons';
import Typography from '~/components/typography';
import MainNavigation from '~/components/main-navigation';
import { compose, mapProps } from 'recompose';

const Header = ({className, contactNumber}) => {
  return (
     <Flex className={className} column={true} >
       <PageSection>
          <Flex>
            <Flex flex={2} >
              <Logo/>
            </Flex>
        
            <Flex flex={1} column={true} align="flex-end" direction="column">
              <Box>
                <HeaderIcons/>
              </Box>
              <Box>
                <Typography color="white">{contactNumber}</Typography>
              </Box>
            </Flex>
          </Flex>
        
       </PageSection>
      <PageSection bg="white" py={0}  >
        <MainNavigation/>
      </PageSection>
    </Flex>
  )
}

const StyledHeader = styled(Header)`
  background-color: ${ ({backgroundColor, theme}) => backgroundColor ? backgroundColor : theme.colors.dark }
`;

const HeaderSectionContainer = ({settings, component : Component}) => {
  return (<StyledHeader contactNumber={settings.map(x => x.general).map(x => x.contactNumber).getOrElse(null) }></StyledHeader>)
};

export default withSettings(HeaderSectionContainer);