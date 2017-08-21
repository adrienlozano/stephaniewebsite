import React from 'react'
import styled, {css} from 'styled-components'
import { Grid, Flex, Box } from 'rebass';
import Navigation from '~/components/navigation';
import withSettings from "~/enhancers/with-settings";
import Logo from './logo';
import PageSection from '~/components/page-section';
import MainNavigation from '~/components/main-navigation';
import { compose, mapProps, withState, withHandlers } from 'recompose';
import HeaderToolbar from './toolbar';

const Header = ({className, contactNumber, icons, toggleMenu, menuOpen}) => {
  return (
     <Flex className={className} column={true} >
       <PageSection bg="secondary" py={0}>
         <HeaderToolbar contactNumber={contactNumber} icons={icons} onMenuClick={toggleMenu}/>
       </PageSection>
       <PageSection bg="primary" py={0}>
         <Logo/>
       </PageSection>
      <PageSection bg="white" py={0}  >
        <MainNavigation open={menuOpen}/>
      </PageSection>
    </Flex>
  )
}

const StyledHeader = styled(Header)`
  background-color: ${ ({backgroundColor, theme}) => backgroundColor ? backgroundColor : theme.colors.dark }
`;

const withContactNumber = withSettings(settings => 
  ( { contactNumber: settings.map(x => x.general).map(x => x.contactNumber).getOrElse(null) })
);

const withSocial = withSettings(settings => 
  ( { icons: settings.map(x => x.social).getOrElse([]) })
);

const enhance = compose(
  withContactNumber,
  withSocial,
  withState('menuOpen', 'setMenuOpen', false),
  withHandlers({
    toggleMenu: ({ setMenuOpen, menuOpen }) => (e) =>  setMenuOpen(!menuOpen)
  })
)

export default enhance(StyledHeader);